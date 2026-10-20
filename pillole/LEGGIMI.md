# Pillole normative

Concetti brevi di diritto, spiegati in circa un minuto, con le fonti: norme, sentenze e lezioni.
Si leggono e si ascoltano nell'app (pulsante «🎧 Pillole normative» in home), su Alexa e su
Google Nest.

## File

| File | Cosa contiene |
|---|---|
| `pillole.js` | Le pillole: testo da leggere, `parlato` da ascoltare, fonti, collegamenti |
| `audio/<id>.mp3` | L'audio di ogni pillola (voce Piper «paola», generata da `parlato`) |
| `alexa.json` | Il notiziario di Alexa: la pillola del giorno (aggiornato ogni mattina) |
| `podcast.xml` | Il feed podcast con tutte le pillole che hanno l'audio |
| `../norme/sentenze/` | Estratti letterali delle sentenze citate |

## Aggiungere o modificare una pillola

1. **Fonti.** Ogni affermazione deve avere una fonte con il testo nella repo:
   - *norme*: il testo in `norme/` (se manca si scarica come per il quiz, vedi
     `strumenti/preparazione/LEGGIMI.md`);
   - *sentenze*: un file in `norme/sentenze/` con gli estratti letterali, l'indirizzo della copia
     consultata e quello del testo ufficiale;
   - *lezioni*: `{ "tipo": "lezione", "titolo": "...", "docente": "...", "data": "AAAA-MM-GG" }`.
     Le lezioni orientano la spiegazione, ma le citazioni tra «» vengono solo da norme e sentenze.
2. **Testo.** Le frasi tra «» devono essere copiate alla lettera dalle fonti della pillola. Gli
   articoli citati diventano cliccabili da soli.
3. **Parlato.** È la stessa spiegazione, scritta per l'ascolto: niente abbreviazioni («articolo»
   e non «art.»), numeri delle leggi in lettere («legge duecentoquarantuno del millenovecentonovanta»),
   frasi brevi. Massimo 4500 caratteri (limite di Alexa); circa 1000-1300 caratteri fanno un minuto.
4. **Controllo e file generati:**

   ```
   python3 strumenti/genera_audio.py <piper> <it_IT-paola-medium.onnx>   # solo le pillole cambiate
   node strumenti/verifica_pillole.js --scrivi
   ```

   Il primo comando richiede Piper e la voce: le istruzioni sono all'inizio di
   `strumenti/genera_audio.py`. Senza audio, l'app usa la voce del telefono.

## Alexa: il notiziario quotidiano

Si crea una volta sola una skill «Notiziario Flash» (Flash Briefing). È gratuita, non richiede
codice e resta privata finché non la pubblichi.

1. Su https://developer.amazon.com/alexa/console/ask accedi con lo **stesso account Amazon
   dell'Echo**. Poi scegli *Create Skill*, lingua **Italian (IT)**, tipo **Flash Briefing**.
2. Inserisci un messaggio di errore qualsiasi (es. «Pillola non disponibile»). Poi aggiungi un
   *feed* con:
   - nome «Pillole normative», frequenza **Daily**, tipo contenuto **Audio**;
   - URL `https://<utente>.github.io/<repository>/pillole/alexa.json`;
   - un'immagine 512×512 (va bene `icone/icon-512.png`).
3. Nella scheda *Test* attiva il test **Development**. La skill compare nell'app Alexa sotto
   *Altro → Impostazioni → Notiziario Flash*: lì puoi metterla al primo posto e togliere gli altri
   notiziari.
4. Prova con «Alexa, dammi le notizie» oppure «Alexa, cosa c'è di nuovo?».

Il notiziario si aggiorna da solo ogni mattina (`.github/workflows/pillola-del-giorno.yml`). Se
cambi l'indirizzo del sito con `strumenti/cambia_link.sh`, aggiorna anche l'URL del feed nella
console Alexa.

Con Alexa+ (in Italia dal 2026) il notiziario funziona, ma alcuni utenti segnalano problemi con
pausa e ripresa.

## Google Nest

Google non permette più app vocali di terzi sugli altoparlanti: le Conversational Actions sono
state chiuse nel 2023. Le strade possibili, dalla più comoda:

1. **Trasmetti dall'app.** In una pillola, da Chrome su Android, premi «📡 Trasmetti al Nest» e
   scegli l'altoparlante. Telefono e Nest devono essere sulla stessa rete Wi-Fi. Il pulsante
   compare solo se il browser trova un dispositivo Cast. Su iPhone Safari non lo supporta: usa il
   Bluetooth.
2. **Bluetooth.** Nell'app Google Home: Nest → Impostazioni → Audio → Dispositivi Bluetooth
   associati → Attiva modalità di accoppiamento. Poi in app «Ascolta tutte».
3. **Podcast.** `podcast.xml` è un feed podcast valido. Su YouTube Studio → Contenuti → Podcast →
   *Invia un feed RSS* (disponibile in Italia) lo si pubblica su YouTube e YouTube Music. Poi in
   teoria basta dire «Ok Google, riproduci l'ultimo episodio di Pillole normative». Attenzione:
   il podcast diventa **pubblico** e il riconoscimento vocale di un programma piccolo non è
   garantito.
4. **Home Assistant** (se lo usi già): `media_player.play_media` con l'indirizzo dell'MP3 della
   pillola del giorno, anche in un'automazione mattutina.
