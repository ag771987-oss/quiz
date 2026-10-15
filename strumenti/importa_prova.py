"""Importa una prova preparata (JSON) nel quiz: scrive domande/<id>/<id>_{d,r,s}.js e copia le figure.

Uso: python3 strumenti/importa_prova.py <prova.json> [cartella_img_sorgente]

Il JSON ha la forma {"id": ..., "domande": [{id, materia, istruzioni?, brano, domanda, immagine?,
paginaPdf, opzioni, corretta, suggerimento, spiegazione, perOpzione, nota?}, ...]}.
Le figure sono cercate come <cartella_img>/<id>-qNN.png.
"""
import json, os, shutil, sys

QUIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def scrivi(path, var, dati):
    with open(path, "w", encoding="utf-8") as f:
        f.write("const " + var + " = " + json.dumps(dati, ensure_ascii=False, indent=2) + ";\n")


def importa(src, img_dir=None):
    prova = json.load(open(src, encoding="utf-8"))
    pid = prova["id"]
    out = os.path.join(QUIZ, "domande", pid)
    os.makedirs(out, exist_ok=True)
    D, R, S = [], [], []
    for q in prova["domande"]:
        d = {"id": q["id"], "materia": q["materia"]}
        if q.get("istruzioni"):
            d["istruzioni"] = q["istruzioni"]
        d["brano"] = q.get("brano", "")
        d["domanda"] = q["domanda"]
        if q.get("immagine"):
            # preferisce la figura nativa (senza lettere delle opzioni); altrimenti il ritaglio dell'impaginato
            nativa = "%s-q%02d-fig1.png" % (pid, q["id"])
            nome = nativa if img_dir and os.path.exists(os.path.join(img_dir, nativa)) else "%s-q%02d.png" % (pid, q["id"])
            if not img_dir or not os.path.exists(os.path.join(img_dir, nome)):
                sys.exit("Figura mancante: " + nome)
            os.makedirs(os.path.join(out, "img"), exist_ok=True)
            shutil.copyfile(os.path.join(img_dir, nome), os.path.join(out, "img", "q%02d.png" % q["id"]))
            d["immagine"] = True
            if nome != nativa:
                d["ordineFisso"] = True  # il ritaglio contiene anche le opzioni con le lettere originali
        d["paginaPdf"] = q["paginaPdf"]
        d["opzioni"] = q["opzioni"]
        D.append(d)
        r = {"id": q["id"], "corretta": q["corretta"]}
        if q.get("certezza"):
            r["certezza"] = q["certezza"]
        R.append(r)
        s = {"id": q["id"], "corretta": q["corretta"], "suggerimento": q["suggerimento"],
             "spiegazione": q["spiegazione"], "perOpzione": q["perOpzione"]}
        if q.get("nota"):
            s["nota"] = q["nota"]
        S.append(s)
    scrivi(os.path.join(out, pid + "_d.js"), "DOMANDE", D)
    scrivi(os.path.join(out, pid + "_r.js"), "RISPOSTE", R)
    scrivi(os.path.join(out, pid + "_s.js"), "SPIEGAZIONI", S)
    print(pid, len(D), "domande importate")


if __name__ == "__main__":
    importa(sys.argv[1], sys.argv[2] if len(sys.argv) > 2 else None)
