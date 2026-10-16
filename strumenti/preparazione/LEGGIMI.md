# Come si prepara una prova per il quiz

Questi sono gli strumenti usati per inserire le 16 prove SNA. `<LAVORO>` nelle istruzioni è una
cartella di lavoro temporanea, fuori dalla repo: lì vanno i JSON intermedi.

## Flusso

1. **Testo.** Si parte dal testo e dalle figure della prova. Per le prove SNA sono nella repo
   `ag771987-oss/cla`, branch `claude/sna-preselettive`, cartella `ricerche/sna_preselettive/`
   (`txt/`, `img/`, `fonti.tsv`, `risposte_ufficiali.tsv`).
   - Impaginazione complessa: prima la sola trascrizione (`istruzioni_trascrizione.txt`), poi
     chiave e aiuti (`istruzioni_aiuti_da_trascrizione.txt`).
   - Altrimenti tutto in un passo (`istruzioni_prova_ricostruita.txt`).
2. **Chiave.**
   - Con risposte ufficiali: la chiave non si cambia mai. Controllo con
     `python3 valida_ufficiale.py <prova.json> <chiave.tsv>`.
   - Senza risposte ufficiali: chiave ricostruita, con la certezza (`alta`/`media`/`bassa`) per
     ogni domanda. Controllo con `python3 valida_ricostruita.py <prova.json>`.
3. **Doppio controllo.** Un secondo assistente risolve la prova alla cieca
   (`istruzioni_cieco.txt`), senza vedere il primo lavoro. Poi
   `python3 confronta_cieco.py <prova.json> <cieco.json>` elenca le differenze. Ogni differenza
   si decide a mano: si rilegge la domanda e, per le norme, il testo su Normattiva alla data della
   prova. L'esito va nella `nota`.
4. **Import.** `python3 strumenti/importa_prova.py <prova.json> <cartella img>` scrive
   `domande/<id>/`. Poi si aggiunge la prova a `domande/manifest.js` con `gruppo`, `label`,
   `breve`, `ufficiale`, `dataProva` e `pdf`.
5. **Norme (obbligatorio: ogni citazione verificata).**
   - `node strumenti/collega_norme.js` elenca le citazioni senza testo. Gli articoli mancanti si
     aggiungono a `strumenti/norme_catalogo.json` e si scaricano con `strumenti/scarica_norme.py`
     (vedi `report_norme.md`):
     - norme abrogate: con `@data`;
     - testi storici di norme ancora in vigore: sotto `storici`.
   - Poi `node strumenti/collega_norme.js --scrivi`.
   - `node strumenti/verifica_citazioni.js` controlla che le frasi tra «» siano letterali; ogni
     eccezione va motivata in `report_norme.md`.
6. **Prova nel browser.** Server statico (`python3 -m http.server`), poi Playwright o un browser:
   - deve caricare tutte le domande, le figure e le norme senza errori;
   - va provata una domanda per tipo (situazionale, brano, figura, inglese, diritto).

## Regole

- Ogni prova è una fonte separata. Il bollino «Risposte ufficiali SNA» va solo dove la SNA le ha
  pubblicate.
- Per le prove passate, la chiave segue la norma in vigore alla data della prova. La spiegazione
  dice anche come è oggi.
- Nessuna citazione normativa senza testo ufficiale verificato.
