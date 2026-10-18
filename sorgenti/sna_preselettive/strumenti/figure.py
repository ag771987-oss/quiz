"""Segmenta i questionari SNA in quesiti, individua quelli con contenuto visivo
e ne ritaglia l'area dal PDF in PNG.

uso: python3 -I figure.py <cartella sna_preselettive> <cartella lavoro>
"""
import csv, re, subprocess, sys, pathlib
import pdfplumber
from PIL import Image

BASE = pathlib.Path(sys.argv[1])
WORK = pathlib.Path(sys.argv[2]); WORK.mkdir(parents=True, exist_ok=True)
DPI = 200
KW = re.compile(r'seguent[ei] (immagin|figur|tabell|grafic|diagramm)|(immagine|figura|tabella|grafico|diagramma|tavola) (che segue|seguente|sotto|riportat|di seguito)'
                r'|figura complet|complet\w* (la|coerentemente la) (serie|sequenza)|nei riquadri|nel riquadro|\bfig\. ?\d|immagine \( ?\d|alternativa da scartare', re.I)
BRANO = re.compile(r'LEGGERE E RISPONDERE ALLE DOMANDE DA (\d+) A (\d+)', re.I)
NUM = re.compile(r'^(\d{1,2})\)?$|^(\d{1,2})\)')


def righe_testo(page):
    """Righe (top, x0, testo) da un PDF con testo."""
    words = page.extract_words(keep_blank_chars=False, use_text_flow=False)
    righe = {}
    for w in words:
        k = round(w['top'] / 3)
        righe.setdefault(k, []).append(w)
    out = []
    for k in sorted(righe):
        ws = sorted(righe[k], key=lambda w: w['x0'])
        out.append((min(w['top'] for w in ws), ws[0]['x0'], ' '.join(w['text'] for w in ws)))
    return out


def righe_ocr(pdf_path, pno, page):
    """Righe (top, x0, testo) via tesseract per pagine scansionate (coordinate in punti)."""
    png = WORK / f"{pdf_path.stem}-ocr-{pno}"
    subprocess.run(['pdftoppm', '-r', '300', '-gray', '-png', '-singlefile',
                    '-f', str(pno + 1), '-l', str(pno + 1), str(pdf_path), str(png)], check=True)
    tsv = subprocess.run(['tesseract', f'{png}.png', '-', '-l', 'ita', '--psm', '6', 'tsv'],
                         capture_output=True, text=True, env={'OMP_THREAD_LIMIT': '1', 'PATH': '/usr/bin:/bin'}).stdout
    righe = {}
    for r in list(csv.DictReader(tsv.splitlines(), delimiter='\t', quoting=csv.QUOTE_NONE)):
        if r['level'] != '5' or not r['text'].strip():
            continue
        k = (r['block_num'], r['par_num'], r['line_num'])
        righe.setdefault(k, []).append(r)
    s = 72 / 300
    out = []
    for ws in righe.values():
        ws.sort(key=lambda r: int(r['left']))
        out.append((min(int(r['top']) for r in ws) * s, int(ws[0]['left']) * s, ' '.join(r['text'] for r in ws)))
    return sorted(out)


def segmenta(pdf_path, pdf):
    """Lista di quesiti: dict(n, inizio=(pagina, y), testo)."""
    tutte = []
    for pno, page in enumerate(pdf.pages):
        rr = righe_testo(page) if page.chars else righe_ocr(pdf_path, pno, page)
        tutte += [(pno, t, x, s) for t, x, s in rr]
    qs, atteso = [], 1
    for pno, top, x0, s in tutte:
        b = BRANO.search(s)
        if b:
            qs.append({'n': f"brano-{int(b.group(1)):02d}-{int(b.group(2)):02d}", 'inizio': (pno, top), 'testo': s, 'brano': True})
            continue
        m = NUM.match(s.split()[0]) if s.split() else None
        if m and int(m.group(1) or m.group(2)) == atteso and x0 < 130:
            qs.append({'n': atteso, 'inizio': (pno, top), 'testo': s})
            atteso += 1
        elif qs:
            qs[-1]['testo'] += '\n' + s
    return qs


def visivi(page, y0, y1):
    """Elementi grafici nella fascia [y0, y1) della pagina."""
    pw = page.width
    n = 0
    for im in page.images:
        if im['width'] > 0.8 * pw and im['height'] > 0.8 * page.height:
            continue  # scansione a pagina intera
        if not page.chars and im['top'] > 0.88 * page.height:
            continue  # sigle dei commissari a piè di pagina (dati personali: mai ritagliate)
        if im['bottom'] > y0 and im['top'] < y1:
            n += 1
    for c in page.curves:
        if c['bottom'] > y0 and c['top'] < y1:
            n += 1
    for l in page.lines:
        orizz = abs(l['top'] - l['bottom']) < 1
        if orizz and (l['width'] > 0.6 * pw or l['width'] < 25):
            continue  # riga separatrice tra quesiti o trattino di una linea tratteggiata
        if l['bottom'] > y0 and l['top'] < y1:
            n += 1
    for r in page.rects:
        bianco = not r.get('stroke') and r.get('non_stroking_color') in (1, 1.0, (1,), [1], (1, 1, 1), [1, 1, 1])
        if not bianco and r['width'] > 6 and r['height'] > 6 and r['bottom'] > y0 and r['top'] < y1:
            n += 1
    return n


def fasce(pdf, qs, i):
    """Fasce (pagina, y0, y1) occupate dal quesito i, anche su più pagine."""
    p0, y0 = qs[i]['inizio']
    if i + 1 < len(qs):
        p1, y1 = qs[i + 1]['inizio']
    else:
        p1, y1 = len(pdf.pages) - 1, pdf.pages[-1].height - 40
    out = []
    for p in range(p0, p1 + 1):
        h = pdf.pages[p].height
        sigle = [im['top'] for im in pdf.pages[p].images
                 if not pdf.pages[p].chars and im['top'] > 0.88 * h and not (im['width'] > 0.8 * pdf.pages[p].width and im['height'] > 0.8 * h)]
        fondo = min(sigle) - 2 if sigle else h - 40
        a = y0 - 4 if p == p0 else 40
        b = min(y1 - 4, fondo) if p == p1 else fondo
        if b - a > 8:
            out.append((p, a, b))
    return out


def senza_sigle(im):
    """Sbianca l'inchiostro blu delle sigle autografe (solo PDF scansionati)."""
    im = im.convert('RGB'); px = im.load()
    for y in range(im.height):
        for x in range(im.width):
            r, g, b = px[x, y]
            if b - (r + g) / 2 > 10:
                px[x, y] = (255, 255, 255)
    return im


def rifila(im, margine=12):
    from PIL import ImageChops
    g = im.convert('L').point(lambda v: 0 if v > 235 else 255)
    box = g.getbbox()
    if not box:
        return im
    a, b, c, d = box
    return im.crop((max(0, a - margine), max(0, b - margine), min(im.width, c + margine), min(im.height, d + margine)))


def ritaglia(pdf_path, fs, dest, scansione=False):
    pezzi = []
    for p, a, b in fs:
        out = WORK / f"{pdf_path.stem}-r-{p}"
        if not pathlib.Path(f'{out}.png').exists():
            subprocess.run(['pdftoppm', '-r', str(DPI), '-png', '-singlefile',
                            '-f', str(p + 1), '-l', str(p + 1), str(pdf_path), str(out)], check=True)
        im = Image.open(f'{out}.png')
        k = DPI / 72
        pz = im.crop((0, int(a * k), im.width, int(b * k)))
        pezzi.append(senza_sigle(pz) if scansione else pz)
    W = max(p.width for p in pezzi)
    tot = Image.new('RGB', (W, sum(p.height for p in pezzi)), 'white')
    y = 0
    for p in pezzi:
        tot.paste(p, (0, y)); y += p.height
    if scansione:
        tot = taglia_a_separatore(tot)
    rifila(tot).save(dest, optimize=True)


def taglia_a_separatore(im):
    """Taglia sotto la riga orizzontale che chiude il quesito (scarta i residui di sigle sottostanti)."""
    g = im.convert('L'); w, h = g.size; px = g.load()
    for y in range(h - 1, 60, -1):
        scuri = sum(1 for x in range(0, w, 2) if px[x, y] < 180)
        if scuri * 2 > 0.5 * w:
            return im.crop((0, 0, w, y + 3))
    return im


def figure_native(pdf_path, pdf, fs, base):
    """Ogni immagine incorporata nella fascia, renderizzata alla sua risoluzione nativa."""
    out, n = [], 0
    for p, a, b in fs:
        page = pdf.pages[p]
        for im in page.images:
            if im['width'] > 0.8 * page.width and im['height'] > 0.8 * page.height:
                continue
            if not (im['bottom'] > a and im['top'] < b):
                continue
            if not (im['bottom'] > a and im['top'] < b):
                continue
            sw = (im.get('srcsize') or (0, 0))[0]
            dpi = int(min(600, max(150, sw / (im['width'] / 72) if im['width'] else 150)))
            k = dpi / 72
            n += 1
            dest = f"{base}-fig{n}.png"
            tmp = WORK / f"nat-{pdf_path.stem}-{p}-{n}"
            subprocess.run(['pdftoppm', '-r', str(dpi), '-png', '-singlefile', '-f', str(p + 1), '-l', str(p + 1),
                            '-x', str(int(im['x0'] * k)), '-y', str(int(im['top'] * k)),
                            '-W', str(int(im['width'] * k)), '-H', str(int(im['height'] * k)),
                            str(pdf_path), str(tmp)], check=True)
            Image.open(f'{tmp}.png').save(BASE / dest, optimize=True)
            out.append(dest)
    return out


def main():
    img_dir = BASE / 'img'; img_dir.mkdir(exist_ok=True)
    righe_out, riepilogo = [], []
    for pdf_path in sorted((BASE / 'pdf').glob('*.pdf')):
        if 'risposte' in pdf_path.stem:
            continue
        with pdfplumber.open(pdf_path) as pdf:
            qs = segmenta(pdf_path, pdf)
            nfig = 0
            for i, q in enumerate(qs):
                fs = fasce(pdf, qs, i)
                v = sum(visivi(pdf.pages[p], a, b) for p, a, b in fs)
                kw = bool(KW.search(q['testo']))
                if v or kw:
                    nome = f"{pdf_path.stem}-{q['n']}.png" if q.get('brano') else f"{pdf_path.stem}-q{q['n']:02d}.png"
                    scans = not pdf.pages[fs[0][0]].chars
                    ritaglia(pdf_path, fs, img_dir / nome, scansione=scans)
                    nat = [] if scans else figure_native(pdf_path, pdf, fs, f"img/{nome[:-4]}")
                    motivo = '+'.join(x for x, ok in (('grafica', v), ('parola-chiave', kw)) if ok)
                    righe_out.append((pdf_path.stem, q['n'], f'img/{nome}', ' '.join(nat), motivo, v))
                    nfig += 1
            nums = [q['n'] for q in qs if not q.get('brano')]
            ok = nums == list(range(1, 61))
            print(f"{pdf_path.stem:22} quesiti={len(nums):3} 1-60_ok={ok} brani={len(qs)-len(nums)} con_figure={nfig}", flush=True)
    with open(BASE / 'quesiti_con_figure.tsv', 'w', newline='') as f:
        w = csv.writer(f, delimiter='\t')
        w.writerow(['id_fonte', 'quesito', 'ritaglio', 'figure_native', 'motivo', 'elementi_grafici'])
        w.writerows(righe_out)


main()
