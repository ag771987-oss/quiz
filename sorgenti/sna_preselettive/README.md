# Prove preselettive SNA — corso-concorso dirigenti (testi, figure, risposte)

Questionari ufficiali delle prove preselettive pubblicati dalla Scuola Nazionale
dell'Amministrazione (sna.gov.it e sito archeologico palazzochigi.it), convertiti
per lo studio. Raccolti il 14/10/2026.

## Contenuto

| Percorso | Cosa contiene |
|---|---|
| `fonti.tsv` | ID stabile, edizione, data prova, descrizione, **URL ufficiale** (fonte di verità, P1) |
| `txt/` | testo integrale di ogni questionario (23 file) |
| `img/` | figure dei quesiti che non sono rappresentabili come testo |
| `quesiti_con_figure.tsv` | elenco dei quesiti con figura → ritaglio e figure native |
| `risposte_ufficiali.tsv` | risposte corrette **pubblicate dalla SNA** (240) |
| `strumenti/` | script usati (`figure.py` segmentazione/ritagli, `verifica.py` controllo) |
| `pdf/` | copia di lavoro dei PDF originali — **non versionata** (si riscarica da `fonti.tsv`) |

## Completezza (verificata)

- 22 questionari × **60 quesiti** ciascuno, numerazione 1–60 senza buchi, ogni quesito con
  le sue opzioni (7ª: anche 2 brani di lettura per test).
- **106 quesiti con figura** individuati (grafica vettoriale/raster + formule tipo
  «quale figura completa la serie»), tutti controllati a vista:
  - 7ª: 52 (serie a croce, sequenze di lettere, tavole numeriche, combinazioni, carte) — figure vettoriali;
  - 9ª: 18 (q19–24 di ogni prova) — da scansione;
  - 10ª e 11ª: 36 (6 per busta) — più la **figura alla risoluzione originale** (`*-fig1.png`),
    utile perché nel PDF alcune sono stampate in miniatura (es. 11ª busta 2 q13).
- 8ª: nessun quesito con figura.
- Per ogni quesito con figura: `img/<id>-qNN.png` = ritaglio dell'impaginato (domanda +
  figura + opzioni); per 10ª/11ª anche `img/<id>-qNN-fig1.png`.

## Risposte ufficiali

Solo dove la SNA le ha pubblicate: 8ª busta 3 (file separato) e **9ª prove 1, 2, 3**
(griglia nell'ultima pagina del PDF). Le griglie della 9ª sono state lette con due OCR
indipendenti e trascritte a vista: nessuna discordanza. 7ª, 10ª, 11ª: risposte **non
pubblicate** (vanno ricostruite e verificate da una persona — l'AI propone, non certifica).

## Avvertenze

- **9ª edizione = PDF scansionati**: testo da OCR (`tesseract -l ita`). La struttura è
  verificata (60 quesiti, opzioni A–C), ma singole parole possono contenere errori di
  riconoscimento: prima dell'uso confrontare con il PDF ufficiale.
- **Sigle dei commissari**: le pagine scansionate della 9ª riportano sigle autografe. Per
  minimizzazione dei dati personali (GDPR) sono state rimosse dai ritagli (inchiostro blu
  sbiancato, taglio alla riga di fine quesito). In 2 ritagli (9ª prova 1 q24, prova 2 q22)
  restano tratti sbiaditi non leggibili.
- 12ª edizione (prova del 06/10/2026): questionari non ancora pubblicati al 14/10/2026.
