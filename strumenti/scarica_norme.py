#!/usr/bin/env python3
"""Scarica il testo vigente degli articoli elencati in strumenti/norme_catalogo.json
e scrive i file norme/<dir>/<normaId>.js.

Norme italiane: normattiva.it (pagina URN dell'articolo, testo vigente).
TUE, TFUE, Carta, Protocolli: pagine HTML di EUR-Lex già salvate nella cache
da strumenti/scarica_eurlex.js (EUR-Lex richiede un browser per la verifica anti-bot).

Uso: python3 strumenti/scarica_norme.py <cartella_cache> [solo_fonte ...]
"""
import html, json, os, re, subprocess, sys, time

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CAT = json.load(open(os.path.join(ROOT, "strumenti", "norme_catalogo.json"), encoding="utf-8"))
CACHE = sys.argv[1]
SOLO = set(sys.argv[2:])
os.makedirs(CACHE, exist_ok=True)
COOKIE = os.path.join(CACHE, "cookie.txt")
NT = "https://www.normattiva.it"


def curl(url, dest):
    if os.path.exists(dest) and os.path.getsize(dest) > 3000:
        return open(dest, encoding="utf-8", errors="replace").read()
    for tent in range(6):
        r = subprocess.run(["curl", "-sS", "-L", "--max-time", "90", "-c", COOKIE, "-b", COOKIE,
                            "-A", "Mozilla/5.0", "-o", dest, url], capture_output=True, text=True)
        if r.returncode == 0 and os.path.exists(dest) and os.path.getsize(dest) > 0:
            return open(dest, encoding="utf-8", errors="replace").read()
        time.sleep(2 * (tent + 1))
    raise RuntimeError("download fallito: " + url)


def testo_da_html(frammento):
    s = re.sub(r"(?is)<(script|style)\b.*?</\1>", "", frammento)
    s = re.sub(r"(?i)<br\s*/?>", "\n", s)
    s = re.sub(r"(?i)</(div|p|h\d|li|tr)>", "\n", s)
    s = re.sub(r"<[^>]+>", "", s)
    s = html.unescape(s).replace("\xa0", " ")
    righe = [re.sub(r"[ \t]+", " ", r).strip() for r in s.split("\n")]
    out = []
    for r in righe:
        if r or (out and out[-1]):
            out.append(r)
    return "\n".join(out).strip()


def pulisci_normattiva(t):
    # toglie le note redazionali in coda («-------------» seguito da AGGIORNAMENTO)
    t = re.split(r"\n-{5,}\s*\n", "\n" + t, maxsplit=1)[0]
    # rimuove i rinvii alle note di aggiornamento «(14)» e i segni «(( ))» delle modifiche
    t = re.sub(r"\s*\(\d{1,3}\)(?=\s|$|[.,;:])", "", t)
    t = t.replace("((", "").replace("))", "")
    t = re.sub(r"[ \t]+\n", "\n", t)
    t = re.sub(r"\n{2,}", "\n", t)
    return t.strip()


def corpo_normattiva(h):
    i = h.find('class="bodyTesto"')
    if i < 0:
        return None
    i = h.find(">", i) + 1
    j = h.find('<div class="d-flex justify-content-between', i)
    return h[i:j if j > 0 else None]


def prepara(corpo):
    """Toglie preambolo, note redazionali e marcature delle modifiche dal corpo HTML di normattiva."""
    i = corpo.find('<h2 class="article-num-akn"')
    if i > 0:
        corpo = corpo[i:]
    for cl in ("art_aggiornamento-akn", "note-akn"):
        j = corpo.find('<div class="' + cl + '"')
        if j >= 0:
            corpo = corpo[:j]
    # rinvii alle note «((5))» e testo inserito «((...))» (div in linea)
    corpo = re.sub(r'<div class="ins-akn"[^>]*>\s*\(\(\s*\d+\s*\)\)\s*</div>', "", corpo)
    corpo = re.sub(r'<div class="ins-akn"[^>]*>(.*?)</div>', r"\1", corpo, flags=re.S)
    return corpo


def vigore(h):
    m = re.search(r'id="artInizio"[^>]*>\s*(?:&nbsp;)?\s*([\d-]+)', h)
    return m.group(1) if m else ""


def scarica_normattiva(chiave, f, art):
    urn_art = f["urn"] + "~art" + art.replace("-", "")
    url = NT + "/uri-res/N2Ls?" + urn_art
    h = curl(url, os.path.join(CACHE, f"{chiave}_{art}.html"))
    corpo = corpo_normattiva(h)
    corpo = prepara(corpo) if corpo else corpo
    if not corpo or ('id="art_' not in corpo and "attachment-just-text" not in corpo and "art-just-text" not in corpo):
        raise RuntimeError("articolo non trovato nella pagina")
    rubrica = ""
    m = re.search(r'class="article-heading-akn">(.*?)</div>', corpo, re.S)
    if m:
        rubrica = testo_da_html(m.group(1)).strip("() ")
        corpo = corpo.replace(m.group(0), "")
    corpo = re.sub(r'<h2 class="(?:preamble-title-akn|preamble-end-akn|article-num-akn)"[^>]*>.*?</h2>', "", corpo, flags=re.S)
    t = testo_da_html(corpo)
    # vecchio formato (es. codice civile): «Art. 826.» e «(Rubrica).» in testa
    m = re.match(r"Art\.\s*[\w-]+\.?\s*\n+\s*\(([^)]*)\)\.?\s*\n", t)
    if m:
        rubrica = rubrica or m.group(1).strip()
        t = t[m.end():]
    t = pulisci_normattiva(t)
    return {"rubrica": rubrica, "testo": t, "url": url, "vigore": vigore(h), "html": h}


def scarica_allegato(chiave, f, art):
    """Articoli di un allegato (c.p.a.): pagina caricaArticolo, versione vigente più recente."""
    a = f["allegato"]
    num, _, suff = art.partition("-")
    sotto = {"": 1, "bis": 2, "ter": 3, "quater": 4, "quinquies": 5}[suff]
    # l'albero dell'atto (pagina URN) elenca gli articoli dell'allegato con la versione vigente
    albero = curl(NT + "/uri-res/N2Ls?" + f["urn"], os.path.join(CACHE, f"{chiave}_atto.html"))
    scelta = None
    for m in re.finditer(r"caricaArticolo\?([^'\"]*)", albero):
        q = html.unescape(m.group(1))
        if ("art.flagTipoArticolo=" + a["flagTipoArticolo"] + "&") in q and ("&art.idArticolo=%s&" % num) in q \
                and ("&art.idSottoArticolo=%d&" % sotto) in q and "imUpdate=true" not in q:
            url = NT + "/atto/caricaArticolo?" + q
            h = curl(url, os.path.join(CACHE, f"{chiave}_{art}_vig.html"))
            scelta = (url, h)
            break
    if not scelta or "bodyTesto" not in scelta[1]:
        raise RuntimeError("articolo dell'allegato non trovato")
    url, h = scelta
    i = h.find('class="bodyTesto"')
    corpo = h[h.find(">", i) + 1:] if i >= 0 else h
    j = corpo.find('<div class="d-flex justify-content-between')
    corpo = prepara(corpo[:j if j > 0 else None])
    rubrica = ""
    m = re.search(r'class="article-heading-akn">(.*?)</div>', corpo, re.S)
    if m:
        rubrica = testo_da_html(m.group(1)).strip("() ")
        corpo = corpo.replace(m.group(0), "")
    corpo = re.sub(r'<h2 class="[^"]*"[^>]*>.*?</h2>', "", corpo, flags=re.S)
    t = testo_da_html(corpo)
    t = re.sub(r"^\(Allegato[^)]*\)\s*\n", "", t)
    m = re.match(r"Art\.\s*[\w-]+\s*\n+(?!\d)([^\n]+)\n", t)
    if m and not rubrica:
        rubrica, t = m.group(1).strip("() "), t[m.end():]
    t = re.sub(r"^Art\.\s*[\w-]+\s*\n", "", t)
    return {"rubrica": rubrica, "testo": pulisci_normattiva(t), "url": url, "vigore": vigore(h), "html": h}


def eurlex(chiave, f, art):
    nome = "eurlex_" + re.sub(r"\W", "_", f["celex"]) + ".html"
    h = open(os.path.join(CACHE, nome), encoding="utf-8").read()
    m = re.search(r'<p[^>]*class="ti-art"[^>]*>\s*Articolo ' + re.escape(art) + r'\s*</p>', h)
    if not m:
        raise RuntimeError("articolo non trovato in EUR-Lex")
    j = re.search(r'<p[^>]*class="ti-art"', h[m.end():])
    fine = m.end() + j.start() if j else len(h)
    corpo = h[m.end():fine]
    # taglia le intestazioni di titolo/capo che seguono l'ultimo paragrafo
    k = re.search(r'<p[^>]*class="(?:ti-section|title-division)[^"]*"', corpo)
    if k:
        corpo = corpo[:k.start()]
    sti = ""
    m2 = re.search(r'<p class="sti-art">(.*?)</p>', corpo, re.S)
    if m2:
        sti = testo_da_html(m2.group(1))
        corpo = corpo.replace(m2.group(0), "")
    t = testo_da_html(corpo)
    t = re.sub(r"^(\d+\.|\([a-z]\)|[a-z]\))\s{2,}", r"\1 ", t, flags=re.M)
    t = re.sub(r"\n(\([a-z]\)|[a-z]\)|—)\n", r"\n\1 ", t)
    t = re.sub(r"\n{2,}", "\n", t)
    if not sti or sti.startswith("(ex"):
        sti = intestazioni_eurlex(h).get(art, "") or f.get("intestazione", "")
    url = "https://eur-lex.europa.eu/legal-content/IT/TXT/HTML/?uri=CELEX:" + f["celex"]
    return {"rubrica": sti, "testo": t, "url": url, "vigore": "", "html": h}


_EU = {}


def intestazioni_eurlex(h):
    """Mappa numero articolo -> intestazione più specifica (Titolo/Capo/Sezione) dal sommario EUR-Lex."""
    k = id(h)
    if k in _EU:
        return _EU[k]
    mappa, ultima = {}, ""
    nav = h[h.find('toc-sidenav'):]
    nav = nav[:nav.find('</nav>')] if '</nav>' in nav else nav
    for m in re.finditer(r'<a href="#[^"]+">(.*?)</a>', nav, re.S):
        t = re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", "", m.group(1)))).strip()
        a = re.match(r"Articolo (\d+\w*)\b", t)
        if a:
            mappa.setdefault(a.group(1), ultima)
        elif t and t != "In alto":
            parti = t.split(" - ", 1)
            nome = parti[-1].strip()
            if nome.isupper():
                nome = nome[:1] + nome[1:].lower()
                for w in ("Unione", "Stati", "Consiglio", "Corte", "Parlamento", "Commissione", "Banca"):
                    nome = re.sub(r"\b" + w.lower() + r"\b", w, nome)
            ultima = nome
    _EU[k] = mappa
    return mappa


COST = [(12, "Principi fondamentali"), (28, "Rapporti civili"), (34, "Rapporti etico-sociali"),
        (47, "Rapporti economici"), (54, "Rapporti politici"), (69, "Il Parlamento: le Camere"),
        (82, "Il Parlamento: la formazione delle leggi"), (91, "Il Presidente della Repubblica"),
        (96, "Il Governo: il Consiglio dei ministri"), (98, "Il Governo: la Pubblica Amministrazione"),
        (100, "Il Governo: gli organi ausiliari"), (110, "La Magistratura: ordinamento giurisdizionale"),
        (113, "La Magistratura: norme sulla giurisdizione"), (133, "Le Regioni, le Province, i Comuni"),
        (137, "Garanzie costituzionali: la Corte costituzionale"),
        (139, "Garanzie costituzionali: revisione della Costituzione. Leggi costituzionali")]


def norma_id(chiave, art):
    return f"{chiave}_art_{art.replace('-', '_')}"


def main():
    risultati, errori = [], []
    for chiave, f in CAT["fonti"].items():
        if SOLO and chiave not in SOLO:
            continue
        for art in f["articoli"]:
            nid = norma_id(chiave, art)
            try:
                if "celex" in f:
                    r = eurlex(chiave, f, art)
                elif "allegato" in f:
                    r = scarica_allegato(chiave, f, art)
                else:
                    r = scarica_normattiva(chiave, f, art)
                t = r["testo"]
                t = re.sub(r"(?m)^((?:[ivx]+|[a-z]{1,2}|\d+)\)|—)\s*\n", r"\1 ", t)   # «ii)» o «—» da soli su una riga
                t = re.sub(r"([a-zà-ù,])\n(?=[a-zà-ù])", r"\1 ", t)                     # a capo a metà frase
                r["testo"] = t
                if not r["testo"] or len(r["testo"]) < 20:
                    raise RuntimeError("testo vuoto")
                rub = r["rubrica"].strip().split("\n")[0].strip(" ().")
                rub = re.sub(r"\s*\(Art\.\s.*$", "", rub)
                rub = rub[:1].upper() + rub[1:]
                if chiave == "cost":
                    rub = next(nome for fine, nome in COST if int(art) <= fine)
                titolo = f"Art. {art}" + (f" — {rub}" if rub else "")
                obj = {"titolo": titolo, "fonte": f["fonte"], "sigla": f["sigla"], "testo": r["testo"],
                       "url": r["url"], "consultato": CAT["consultato"]}
                if r["vigore"]:
                    obj["vigoreDal"] = r["vigore"]
                d = os.path.join(ROOT, "norme", f["dir"])
                os.makedirs(d, exist_ok=True)
                with open(os.path.join(d, nid + ".js"), "w", encoding="utf-8") as fh:
                    fh.write("window.NORME = window.NORME || {};\n\n")
                    fh.write(f'window.NORME["{nid}"] = ' + json.dumps(obj, ensure_ascii=False, indent=2) + ";\n")
                risultati.append((nid, titolo, r["url"], len(r["testo"])))
                print("ok ", nid, len(r["testo"]), titolo[:70], flush=True)
            except Exception as e:
                errori.append((nid, str(e)))
                print("ERR", nid, e, flush=True)
    json.dump({"ok": risultati, "errori": errori}, open(os.path.join(CACHE, "esito.json"), "w"), ensure_ascii=False, indent=1)


if __name__ == "__main__":
    main()
