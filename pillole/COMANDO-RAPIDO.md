# Comando rapido «Pillole» per iPhone

Con un tocco, o dicendo «Ehi Siri, pillole», l'iPhone ti chiede cosa vuoi ascoltare e lo legge
con la voce di Siri. Puoi farlo uscire dal Google Home Mini solo per il tempo della lettura. Non
servono altre app: si usa **Comandi Rapidi**, che è già sull'iPhone.

I testi arrivano dal sito del quiz, quindi le pillole nuove compaiono da sole:

| Scelta | File |
|---|---|
| Pillola del giorno | `https://ag771987-oss.github.io/quiz/pillole/siri/oggi.txt` |
| Una a caso | `https://ag771987-oss.github.io/quiz/pillole/siri/elenco.json` |
| Procedimento amministrativo | `https://ag771987-oss.github.io/quiz/pillole/siri/procedimento.txt` |
| Pubblico impiego e dirigenza | `https://ag771987-oss.github.io/quiz/pillole/siri/impiego.txt` |
| Anticorruzione e trasparenza | `https://ag771987-oss.github.io/quiz/pillole/siri/anticorruzione.txt` |
| Costituzione e Unione europea | `https://ag771987-oss.github.io/quiz/pillole/siri/costituzione_ue.txt` |
| Tutte | `https://ag771987-oss.github.io/quiz/pillole/siri/tutte.txt` |

## Creazione del comando: circa 10 minuti, una volta sola

Apri **Comandi Rapidi**, tocca **+** e rinomina il comando in **Pillole** (tocca il nome in alto).
Le azioni si aggiungono con la barra di ricerca in basso, «Cerca app e azioni». Tra parentesi
c'è il nome inglese, se il tuo iPhone è in inglese.

### 1. Il menu
1. Aggiungi **Scegli dal menu** (*Choose from Menu*).
2. Come domanda scrivi «Cosa vuoi ascoltare?».
3. Crea 7 voci, con **Aggiungi nuovo elemento**: `Pillola del giorno`, `Una a caso`,
   `Procedimento`, `Pubblico impiego`, `Anticorruzione`, `Costituzione e UE`, `Tutte`.

### 2. Dentro ogni voce del menu
Sotto ogni voce aggiungi **due azioni**:
1. **URL**, con l'indirizzo della tabella sopra corrispondente a quella voce.
2. **Ottieni contenuti dell'URL** (*Get Contents of URL*).

Solo sotto **Una a caso** aggiungi una terza azione:
3. **Ottieni elemento dall'elenco** (*Get Item from List*), e cambia «Primo elemento» in
   **Elemento casuale**.

### 3. Dopo il menu (sotto «Fine menu»)
1. **Pronuncia testo** (*Speak Text*). Come testo deve risultare **Risultato del menu**: se non
   compare da solo, toccalo e sceglilo tra le variabili.
2. Tocca la freccia accanto a «Pronuncia testo» per vedere le opzioni:
   - **Lingua:** Italiano (Italia);
   - **Voce:** quella che preferisci (vedi sotto);
   - **Velocità:** di poco sotto la metà è un buon ritmo per studiare.

Fatto: tocca ▶ in basso per provarlo.

## Farlo uscire dal Google Home Mini (facoltativo)

Il Mini deve essere già collegato in Bluetooth all'iPhone: se serve, di' «Ok Google, connetti
Bluetooth».
1. **Prima** di «Pronuncia testo» aggiungi **Imposta destinazione di riproduzione** (*Set
   Playback Destination*) e scegli il **Google Home Mini**.
2. **Dopo** «Pronuncia testo» aggiungi di nuovo **Imposta destinazione di riproduzione** e
   scegli **iPhone**.

Così l'audio va sul Mini solo durante la lettura, e il resto torna sul telefono. Se il comando
segnala che il Mini non è disponibile, ricollegalo con «Ok Google, connetti Bluetooth» e riprova.

## Avviarlo

- **A voce:** «Ehi Siri, pillole». Siri ti legge il menu e tu rispondi a voce, ad esempio
  «Procedimento».
- **Con un tocco:** nell'app Comandi Rapidi tieni premuto il comando, poi **Condividi → Aggiungi
  alla schermata Home**. Comparirà un'icona come quella di un'app.
- **Widget:** aggiungi il widget di Comandi Rapidi alla schermata Home o di blocco.

La lettura continua anche se lo schermo si spegne.

## Voci migliori

**Impostazioni → Accessibilità → Contenuti letti → Voci → Italiano**: scarica una voce
«Avanzata» o «Premium». Poi sceglila nelle opzioni di «Pronuncia testo».
