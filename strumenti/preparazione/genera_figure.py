#!/usr/bin/env python3
"""Genera serie di figure per le prove simulate (stile 12° corso-concorso: griglie 2×2).

In ogni serie quattro simboli ruotano di una casella a ogni passaggio (in senso orario o
antiorario) e il colore dipende dalla posizione (colonna, riga o diagonale). Una delle
cinque figure della serie è sostituita da «?»; le cinque risposte contengono la figura
giusta e quattro distrattori, ciascuno costruito violando la regola in un modo preciso.
Il programma verifica che una sola risposta rispetti la regola.

Uso: python3 genera_figure.py <cartella_out> <id_prova> <n_serie> [seme]
Scrive <cartella_out>/<id_prova>-qNN-fig1.png e <cartella_out>/figure.json
(regola, risposta, spiegazione per ogni opzione).
"""
import json, os, random, sys
from PIL import Image, ImageDraw, ImageFont

SIMBOLI = ["triangolo", "quadrato", "cerchio", "stella", "rombo"]
POS = ["alto-sinistra", "alto-destra", "basso-destra", "basso-sinistra"]       # ordine orario
XY = {0: (0, 0), 1: (1, 0), 2: (1, 1), 3: (0, 1)}                            # (colonna, riga)
REGOLE_COLORE = {
    "colonna": ("a sinistra bianco, a destra nero", lambda p: XY[p][0] == 1),
    "riga": ("in alto nero, in basso bianco", lambda p: XY[p][1] == 0),
    "diagonale": ("nero sulla diagonale alto-sinistra / basso-destra, bianco sull'altra", lambda p: p in (0, 2)),
}


def figura(simboli, passo, verso, colore):
    """simboli[i] parte dalla posizione i; dopo `passo` passaggi è in (i ± passo) mod 4."""
    f = {}
    for i, s in enumerate(simboli):
        p = (i + verso * passo) % 4
        f[p] = (s, REGOLE_COLORE[colore][1](p))
    return f


def chiave(f):
    return tuple(sorted(f.items()))


def disegna_simbolo(d, nome, cx, cy, r, nero):
    fill = "black" if nero else "white"
    w = max(3, r // 9)
    if nome == "cerchio":
        d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=fill, outline="black", width=w)
    elif nome == "quadrato":
        k = int(r * .85); d.rectangle([cx - k, cy - k, cx + k, cy + k], fill=fill, outline="black", width=w)
    elif nome == "triangolo":
        d.polygon([(cx, cy - r), (cx + r, cy + int(r * .8)), (cx - r, cy + int(r * .8))], fill=fill, outline="black", width=w)
    elif nome == "rombo":
        d.polygon([(cx, cy - r), (cx + r, cy), (cx, cy + r), (cx - r, cy)], fill=fill, outline="black", width=w)
    elif nome == "stella":
        import math
        pts = []
        for k in range(10):
            a = -math.pi / 2 + k * math.pi / 5; rr = r if k % 2 == 0 else r * .42
            pts.append((cx + rr * math.cos(a), cy + rr * math.sin(a)))
        d.polygon(pts, fill=fill, outline="black", width=w)


def disegna_griglia(d, f, x0, y0, lato):
    m = lato // 2
    d.rectangle([x0, y0, x0 + lato, y0 + lato], outline="black", width=4)
    d.line([x0 + m, y0, x0 + m, y0 + lato], fill="black", width=4)
    d.line([x0, y0 + m, x0 + lato, y0 + m], fill="black", width=4)
    for p, (s, nero) in f.items():
        c, r = XY[p]
        disegna_simbolo(d, s, x0 + c * m + m // 2, y0 + r * m + m // 2, int(m * .33), nero)


def font(n):
    for f in ("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf"):
        if os.path.exists(f):
            return ImageFont.truetype(f, n)
    return ImageFont.load_default()


def immagine(serie, buco, risposte, path):
    W, lato, gap = 1772, 210, 160
    im = Image.new("RGB", (W, 700), "white"); d = ImageDraw.Draw(im)
    d.text((45, 5), "SERIE:", fill="black", font=font(40))
    d.text((45, 345), "RISPOSTE:", fill="black", font=font(40))
    xs = [45 + i * (lato + gap) for i in range(5)]
    for i, f in enumerate(serie):
        if i == buco:
            d.text((xs[i] + lato // 2 - 35, 95), "?", fill="black", font=font(160))
        else:
            disegna_griglia(d, f, xs[i], 90, lato)
    for i, f in enumerate(risposte):
        disegna_griglia(d, f, xs[i], 420, lato)
        d.text((xs[i] + lato // 2 - 60, 650), f"FIGURA {i + 1}", fill="black", font=font(26))
    im.save(path)


def descrivi(f):
    return ", ".join(f"{POS[p]} {s} {'nero' if n else 'bianco'}" for p, (s, n) in sorted(f.items()))


def genera(rng, n):
    simboli = rng.sample(SIMBOLI, 4)
    verso = rng.choice([1, -1])
    colore = rng.choice(list(REGOLE_COLORE))
    serie = [figura(simboli, k, verso, colore) for k in range(5)]
    buco = rng.choice([1, 2, 3, 4])
    giusta = serie[buco]
    # distrattori, ciascuno con il motivo per cui è sbagliato
    cand = []
    inv = {p: (s, not c) for p, (s, c) in giusta.items()}
    cand.append((inv, "ha i colori invertiti: la regola del colore non è rispettata"))
    opposto = figura(simboli, buco, -verso, colore)
    if chiave(opposto) != chiave(giusta):
        cand.append((opposto, "è ruotata nel verso sbagliato rispetto alla serie"))
    fermo = figura(simboli, buco - 1, verso, colore)
    cand.append((fermo, "ripete la figura precedente: la rotazione non è avanzata"))
    oltre = figura(simboli, buco + 1, verso, colore)
    if chiave(oltre) not in (chiave(fermo),):
        cand.append((oltre, "è avanzata di due caselle invece che di una"))
    altro = [c for c in REGOLE_COLORE if c != colore][0]
    col2 = figura(simboli, buco, verso, altro)
    cand.append((col2, f"segue un'altra regola di colore ({REGOLE_COLORE[altro][0]})"))
    sc = dict(giusta); a, b = rng.sample(range(4), 2)
    sc[a], sc[b] = (giusta[b][0], giusta[a][1]), (giusta[a][0], giusta[b][1])
    cand.append((sc, f"ha due simboli scambiati di posto ({POS[a]} e {POS[b]})"))
    visti, distr = {chiave(giusta)}, []
    for f, m in cand:
        if chiave(f) not in visti:
            visti.add(chiave(f)); distr.append((f, m))
    distr = rng.sample(distr, 4)
    opzioni = [(giusta, None)] + distr
    rng.shuffle(opzioni)
    # controllo: solo la giusta coincide con la figura prevista dalla regola
    assert [chiave(f) == chiave(giusta) for f, _ in opzioni].count(True) == 1
    return {
        "simboli": simboli, "verso": "orario" if verso == 1 else "antiorario", "colore": colore, "buco": buco,
        "serie": serie, "opzioni": opzioni,
    }


def main():
    out, pid, n = sys.argv[1], sys.argv[2], int(sys.argv[3])
    seme = int(sys.argv[4]) if len(sys.argv) > 4 else 12
    rng = random.Random(seme); os.makedirs(out, exist_ok=True)
    risultati = []
    for k in range(n):
        g = genera(rng, k)
        nome = f"{pid}-q{k + 1:02d}-fig1.png"
        immagine(g["serie"], g["buco"], [f for f, _ in g["opzioni"]], os.path.join(out, nome))
        lett = "ABCDE"
        giusta = next(i for i, (_, m) in enumerate(g["opzioni"]) if m is None)
        regola = (f"A ogni passaggio i quattro simboli ruotano di una casella in senso **{g['verso']}**; "
                  f"il colore dipende dalla posizione: {REGOLE_COLORE[g['colore']][0]}.")
        per = {}
        for i, (f, m) in enumerate(g["opzioni"]):
            per[lett[i]] = (f"Corretta: {descrivi(f)}, come prevede la rotazione partendo dalle figure vicine." if m is None
                            else f"La figura {i + 1} {m}.")
        risultati.append({
            "file": nome, "posizioneVuota": g["buco"] + 1, "corretta": lett[giusta],
            "opzioni": {lett[i]: f"Figura {i + 1}" for i in range(5)},
            "suggerimento": "Segui un simbolo alla volta: dove si sposta da una figura all'altra? E il colore cambia con il simbolo o con la casella?",
            "spiegazione": regola + f" La figura mancante (posizione {g['buco'] + 1}) è la **Figura {giusta + 1}**: {descrivi(g['opzioni'][giusta][0])}.",
            "perOpzione": per,
        })
    json.dump(risultati, open(os.path.join(out, "figure.json"), "w"), ensure_ascii=False, indent=1)
    print(len(risultati), "serie generate in", out)


if __name__ == "__main__":
    main()
