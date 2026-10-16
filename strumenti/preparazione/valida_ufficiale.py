# Uso: python3 valida.py <file.json> <chiave.tsv>
import json, sys
d = json.load(open(sys.argv[1])); key = dict(l.split('\t') for l in open(sys.argv[2]).read().split('\n') if l)
err = []
qs = d["domande"]
if [q["id"] for q in qs] != list(range(1, 61)): err.append("id non 1..60")
for q in qs:
    i = q["id"]
    for f in ["materia", "domanda", "opzioni", "corretta", "suggerimento", "spiegazione", "perOpzione", "paginaPdf"]:
        if f not in q or q[f] in ("", None, {}): err.append(f"{i}: manca {f}")
    if q.get("corretta") != key.get(str(i)): err.append(f"{i}: corretta {q.get('corretta')} != ufficiale {key.get(str(i))}")
    if set(q.get("perOpzione", {})) != set(q.get("opzioni", {})): err.append(f"{i}: perOpzione non copre le opzioni")
    if any(not str(v).strip() for v in q.get("opzioni", {}).values()): err.append(f"{i}: opzione vuota")
print("OK" if not err else "\n".join(err))
