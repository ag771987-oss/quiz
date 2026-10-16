#!/usr/bin/env bash
# Cambia l'indirizzo pubblico del quiz rinominando il repository su GitHub.
#
#   https://<utente>.github.io/<nome-repository>/
#
# Il vecchio indirizzo smette di funzionare: chi lo aveva non entra più e va
# avvisato con quello nuovo. Il codice dell'app non cambia (usa solo percorsi
# relativi).
#
# Uso:
#   bash strumenti/cambia_link.sh                # nome nuovo casuale (es. quiz-k3x9p2mw)
#   bash strumenti/cambia_link.sh nuovo-nome     # nome scelto
#   bash strumenti/cambia_link.sh nuovo-nome utente/repository-attuale
#
# Serve un token GitHub con il permesso di amministrare il repository:
#   - se è installato «gh» ed è già fatto il login (gh auth login), lo script lo usa;
#   - altrimenti crea un token su https://github.com/settings/personal-access-tokens
#     (fine-grained, solo questo repository, permessi «Administration: Read and write»
#     e «Pages: Read») e passalo nella variabile GITHUB_TOKEN oppure incollalo quando
#     lo script lo chiede.
set -euo pipefail

API="${GITHUB_API:-https://api.github.com}"   # sovrascrivibile solo per le prove
NUOVO="${1:-}"
REPO="${2:-}"

errore() { echo "Errore: $*" >&2; exit 1; }
command -v curl >/dev/null || errore "serve curl"
command -v python3 >/dev/null || errore "serve python3"
json() { python3 -c "import json,sys; d=json.load(sys.stdin); print(d.get('$1') or '')"; }

# Repository attuale: dall'argomento o dal remote «origin» della cartella in cui ci si trova
if [ -z "$REPO" ]; then
  url=$(git remote get-url origin 2>/dev/null || true)
  REPO=$(printf '%s' "$url" | sed -E 's#^(https://[^/]*github\.com/|git@github\.com:)##; s#\.git$##; s#/$##')
  [ -n "$REPO" ] && [[ "$REPO" == */* ]] || errore "non trovo il repository: indicalo come secondo argomento (es. ag771987-oss/quiz)"
fi
UTENTE="${REPO%%/*}"; VECCHIO="${REPO##*/}"

# Nome nuovo: scelto o casuale
if [ -z "$NUOVO" ]; then
  NUOVO="quiz-$(python3 -c 'import secrets, string; print("".join(secrets.choice(string.ascii_lowercase + string.digits) for _ in range(8)))')"
fi
[[ "$NUOVO" =~ ^[A-Za-z0-9._-]{1,100}$ ]] || errore "nome non valido: usa solo lettere, numeri, punto, trattino e trattino basso"
[ "$NUOVO" != "$VECCHIO" ] || errore "il nome nuovo è uguale a quello attuale"

# Token
TOKEN="${GITHUB_TOKEN:-}"
if [ -z "$TOKEN" ] && command -v gh >/dev/null; then TOKEN=$(gh auth token 2>/dev/null || true); fi
if [ -z "$TOKEN" ]; then
  read -r -s -p "Token GitHub (non viene mostrato): " TOKEN; echo
fi
[ -n "$TOKEN" ] || errore "manca il token"
H=(-H "Authorization: Bearer $TOKEN" -H "Accept: application/vnd.github+json" -H "X-GitHub-Api-Version: 2022-11-28")

echo "Repository attuale: $UTENTE/$VECCHIO  →  https://$UTENTE.github.io/$VECCHIO/"
echo "Nuovo nome:         $UTENTE/$NUOVO  →  https://$UTENTE.github.io/$NUOVO/"
read -r -p "Confermi? Il vecchio indirizzo smetterà di funzionare. [s/N] " ok
[[ "$ok" =~ ^[sS]$ ]] || { echo "Annullato."; exit 0; }

# Rinomina
risposta=$(curl -sS -X PATCH "${H[@]}" -H "Content-Type: application/json" "$API/repos/$UTENTE/$VECCHIO" -d "{\"name\":\"$NUOVO\"}" -w '\n%{http_code}')
codice=${risposta##*$'\n'}; corpo=${risposta%$'\n'*}
if [ "$codice" != "200" ]; then
  errore "GitHub ha risposto $codice: $(printf '%s' "$corpo" | json message). Controlla il token (permesso Administration) e che il nome non sia già usato."
fi
echo "✔ Repository rinominato in $UTENTE/$NUOVO"

# Aggiorna il remote locale, se lo script è stato lanciato da una copia del repository
if git remote get-url origin >/dev/null 2>&1; then
  vecchio_url=$(git remote get-url origin)
  nuovo_url=$(printf '%s' "$vecchio_url" | sed -E "s#/$VECCHIO(\.git)?/?\$#/$NUOVO\1#")
  git remote set-url origin "$nuovo_url"
  echo "✔ Remote locale aggiornato: $(git remote get-url origin)"
fi

# Indirizzo del sito secondo GitHub Pages
pagina=$(curl -sS "${H[@]}" "$API/repos/$UTENTE/$NUOVO/pages" | json html_url || true)
SITO="${pagina:-https://$UTENTE.github.io/$NUOVO/}"

# Attende che il sito risponda al nuovo indirizzo (GitHub lo ripubblica in qualche minuto)
echo -n "Attendo che il sito sia online al nuovo indirizzo"
for _ in $(seq 1 60); do
  if [ "$(curl -s -o /dev/null -w '%{http_code}' "$SITO")" = "200" ]; then
    echo; echo "✔ Fatto. Nuovo indirizzo da condividere:"; echo "   $SITO"; exit 0
  fi
  echo -n "."; sleep 10
done
echo
echo "Il repository è rinominato, ma il sito non risponde ancora dopo 10 minuti."
echo "Controlla su GitHub: Settings → Pages. L'indirizzo previsto è: $SITO"
