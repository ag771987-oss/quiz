# Prossimo passo: elenchi di esercitazione creati da noi (pilota l. 241/1990)

## Obiettivo
Creare domande **nuove**, sul modello delle prove preselettive SNA. Partiamo da un **elenco pilota
di circa 40 domande sulla l. 241/1990**, il tema di diritto più frequente nelle prove: 83 citazioni
nelle spiegazioni, insieme alla Costituzione. L'utente controlla il pilota prima di estendere ad
altri temi o alle prove simulate complete.

## Regole
1. **Fonte separata.**
   - Nuova cartella: `domande/esercitazione-l241/`.
   - Voce nel manifest con `"gruppo": "Esercitazioni — domande create per lo studio"` e
     `"ufficiale": false`.
   - Va aggiunto il campo `"tipo": "esercitazione"`. L'app deve mostrare un bollino diverso
     («📝 Esercitazione», non «Chiave ricostruita»), sia nell'elenco delle prove sia sulla domanda.
   - Non deve mai confondersi con le domande SNA.
2. **Stile SNA**, guardando le domande di diritto delle prove esistenti:
   - domanda breve;
   - **tre opzioni** plausibili, di lunghezza simile;
   - distrattori costruiti sugli errori tipici: termini, soglie, organi, «sempre/mai», istituti
     simili scambiati (es. SCIA / silenzio-assenso, annullabilità / nullità, revoca /
     annullamento d'ufficio).
3. **Copertura.** Distribuire le domande sui capi della legge:
   - principi (artt. 1-3);
   - responsabile del procedimento (artt. 4-6);
   - partecipazione (artt. 7-10-bis);
   - accordi (art. 11);
   - conferenza di servizi (artt. 14 ss.);
   - pareri e valutazioni tecniche (artt. 16-17);
   - SCIA e silenzio-assenso (artt. 19-20);
   - autotutela e invalidità (artt. 21-bis-21-nonies);
   - accesso (artt. 22 ss.).

   Evitare doppioni delle domande già presenti nelle prove (controllare con una ricerca nei file
   `domande/*/*_d.js`).
4. **Ogni domanda nasce da un articolo preciso**, del testo **vigente**, già in archivio
   (`norme/l241_1990/`) o da scaricare (`strumenti/norme_catalogo.json` +
   `strumenti/scarica_norme.py`). La spiegazione cita tra «» il passo decisivo, alla lettera.
5. **Aiuti** come nelle altre prove:
   - `suggerimento`;
   - `spiegazione` (concetto chiave);
   - `perOpzione` per ogni opzione.

   Stile in `strumenti/preparazione/esempio_aiuti.py`.
6. **Doppio controllo.** Un secondo assistente risolve le domande alla cieca
   (`istruzioni_cieco.txt`). Ogni domanda in cui la risposta non coincide viene corretta o
   **scartata**: un'esercitazione non deve avere domande ambigue.
7. **Verifiche finali.**
   - `node strumenti/collega_norme.js --scrivi`: non deve restare nessuna citazione senza testo.
   - `node strumenti/verifica_citazioni.js`: le frasi tra «» devono essere letterali.
   - Prova nel browser.
   - Poi mostrare all'utente una decina di domande di esempio **prima** di pubblicare su `main`.

## Dopo il pilota, se approvato
- Elenchi tematici per gli altri temi frequenti: Costituzione, UE (TUE/TFUE), processo
  amministrativo, lavoro pubblico (d.lgs. 165/2001), contabilità e danno erariale, economia,
  organizzazione, politiche pubbliche.
- Prove simulate complete con la struttura delle ultime edizioni (su 60 domande):
  - 12 situazionali;
  - ~11 diritto;
  - ~7 economia/contabilità;
  - 6 comprensione;
  - 6 ragionamento logico;
  - 6 inglese;
  - ~5 organizzazione;
  - ~5 politiche pubbliche;
  - ~1-2 informatica.
