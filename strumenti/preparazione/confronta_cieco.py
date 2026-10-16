# Confronta la chiave preparata con la risoluzione alla cieca.
# Uso: python3 confronta.py <prova.json> <cieco.json> [--applica]
# Con --applica: dove le due risposte differiscono, porta la certezza a "bassa" (se era alta/media)
# e aggiunge una nota; scrive il file preparato aggiornato.
import json, sys
p = json.load(open(sys.argv[1])); c = json.load(open(sys.argv[2]))["risposte"]
diff = []
for q in p["domande"]:
    r = c[str(q["id"])]
    if r["r"] != q["corretta"]:
        diff.append(q["id"])
        print(f'#{q["id"]} [{q["materia"]}] preparata={q["corretta"]} ({q["certezza"]})  cieca={r["r"]} ({r["sicurezza"]}): {r["motivo"]}')
        if "--applica" in sys.argv:
            q["certezza"] = "bassa" if q["certezza"] != "alta" else "media"
            extra = "Una seconda risoluzione indipendente ha indicato un'altra risposta: la chiave di questa domanda è incerta."
            q["nota"] = (q.get("nota", "") + " " + extra).strip()
print(f'{p["id"]}: {len(diff)} differenze su 60')
if "--applica" in sys.argv:
    json.dump(p, open(sys.argv[1], "w"), ensure_ascii=False, indent=1)
