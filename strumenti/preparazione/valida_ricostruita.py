# Uso: python3 valida_ric.py <file.json>   (prove senza chiave ufficiale)
import json, sys
d = json.load(open(sys.argv[1])); err = []
qs = d["domande"]
if [q["id"] for q in qs] != list(range(1, 61)): err.append("id non 1..60")
for q in qs:
    i = q["id"]
    for f in ["materia", "domanda", "opzioni", "corretta", "certezza", "suggerimento", "spiegazione", "perOpzione", "paginaPdf"]:
        if f not in q or q[f] in ("", None, {}): err.append(f"{i}: manca {f}")
    if q.get("corretta") not in q.get("opzioni", {}): err.append(f"{i}: corretta non tra le opzioni")
    if q.get("certezza") not in ("alta", "media", "bassa"): err.append(f"{i}: certezza non valida")
    if set(q.get("perOpzione", {})) != set(q.get("opzioni", {})): err.append(f"{i}: perOpzione non copre le opzioni")
    if any(not str(v).strip() for v in q.get("opzioni", {}).values()): err.append(f"{i}: opzione vuota")
print("OK" if not err else "\n".join(err))
