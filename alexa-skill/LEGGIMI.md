# Skill Alexa «Pillole normative»

Una skill **personale** e gratuita: resta in fase di sviluppo, non viene pubblicata nel negozio
di Alexa e funziona solo sugli Echo collegati al tuo account Amazon. Legge le pillole con la voce
di Alexa e ricorda quali hai già ascoltato.

## Cosa puoi dire

| Frase | Cosa succede |
|---|---|
| «Alexa, apri pillole normative» | Ti chiede cosa vuoi ascoltare |
| «Alexa, chiedi a pillole normative la pillola del giorno» | La pillola del giorno, la stessa dell'app |
| «… una pillola» / «… cinque pillole» | Prima quelle mai ascoltate. Ne legge 3 di fila, poi chiede se continuare |
| «… due pillole sull'anticorruzione» | Solo quell'argomento: procedimento, pubblico impiego, anticorruzione, Costituzione e Unione europea |
| «… ripasso» / «… ripasso sul procedimento» | Quelle già ascoltate, dalla meno recente |
| Durante la conversazione: «sì», «la prossima», «ripeti», «quali argomenti ci sono», «stop» | |

Le pillole arrivano dal sito, dal file `pillole/alexa-skill.json`. Quando ne aggiungi di nuove,
la skill le legge senza bisogno di modificarla.

## Installazione: una volta sola, circa 15 minuti, dal computer

1. Apri https://developer.amazon.com/alexa/console/ask e accedi con **lo stesso account Amazon
   dei tuoi Echo**. Al primo accesso Amazon chiede di creare il profilo sviluppatore: è
   gratuito.
2. **Create Skill** (Crea skill):
   - nome: `Pillole normative`;
   - lingua principale: **Italian (IT)**;
   - tipo: **Other** → **Custom** (personalizzata);
   - hosting: **Alexa-hosted (Node.js)**, regione **EU (Ireland)**;
   - modello: **Start from Scratch**.

   Poi **Create Skill** e attendi un minuto.
3. **Modello di interazione** (scheda *Build*):
   1. Nel menu a sinistra apri **Interaction Model → JSON Editor**.
   2. Cancella tutto e incolla il contenuto di `skill-package/interactionModels/custom/it-IT.json`.
   3. Premi **Save** e poi **Build skill**. Attendi il messaggio «Build successful».
4. **Codice** (scheda *Code*):
   1. Apri `lambda/index.js`, cancella tutto e incolla il contenuto di `lambda/index.js` di questa
      cartella.
   2. Fai lo stesso con `lambda/package.json`.
   3. Premi **Save** e poi **Deploy**. Attendi «Deployment successful».
5. **Attiva la prova** (scheda *Test*): in alto, alla voce «Skill testing is enabled in», scegli
   **Development**. Prova scrivendo `apri pillole normative` nel simulatore.
6. Sul tuo Echo: «**Alexa, apri pillole normative**».

Non serve pubblicare né certificare la skill: in fase di sviluppo funziona sui dispositivi del
tuo account.

## Scorciatoia: «Alexa, pillola»

Nell'app Alexa sul telefono: **Altro → Routine → +**.
- **Quando succede:** Voce, «pillola».
- **Azione:** Personalizzata, «apri pillole normative».

Da quel momento basta dire «Alexa, pillola».

## Se qualcosa non va

- **«Non riesco a raggiungere le pillole»:** il sito non risponde, oppure è cambiato il suo
  indirizzo (`strumenti/cambia_link.sh`). In quel caso aggiorna la riga `SITO` all'inizio di
  `lambda/index.js` nella scheda *Code*, poi premi **Deploy**.
- **Alexa non capisce il nome:** prova «Alexa, avvia pillole normative», oppure crea la routine
  descritta sopra.
- **Con Alexa+** Amazon non ha ancora chiarito come gestisce le skill personali: se non si apre,
  segnalalo.

## Per chi modifica la skill

- Il file `pillole/alexa-skill.json` lo genera `node strumenti/verifica_pillole.js --scrivi`.
- La memoria delle pillole ascoltate sta nella tabella DynamoDB che Alexa-hosted crea per la
  skill. Senza tabella la skill ricorda le pillole solo per la conversazione in corso.
