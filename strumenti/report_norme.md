# Report — testi originali delle norme citate nelle spiegazioni

Branch `norme-originali`, consultazione delle fonti del **16/10/2026**.

## In sintesi

- **122 articoli** scaricati con il testo integrale e letterale: 95 da **normattiva.it** (testo vigente) e 27 da **EUR-Lex** (TUE, TFUE e Protocollo 19 nella versione consolidata della GU C 202 del 7.6.2016; Carta dei diritti fondamentali).
- **111 domande** delle 10 prove collegate a **166 riferimenti** (`riferimenti: [{normaId}]`); ogni prova ha nel manifest la lista `norme` dei file da caricare.
- **20 correzioni** in 17 domande (vedi tabella). **Nessuna chiave (`corretta`) modificata**; nessun caso «da decidere».
- 1 articolo citato non scaricato: art. 83 d.lgs. 50/2016 (abrogato).

## Come funziona

| File | Ruolo |
|---|---|
| `norme/<fonte>/<normaId>.js` | `window.NORME[id] = {titolo, fonte, sigla, testo, url, consultato, vigoreDal}`. `vigoreDal` è la data da cui è in vigore il testo, indicata da normattiva. |
| `norme/citazioni.js` | Riconosce le citazioni nel testo («art. 94 Cost.», «art. 2, co. 8-bis, l. 241/1990», «artt. 104-105 Cost.», «art. 263 TFUE»). Per le citazioni senza atto («art. 9») usa l'atto citato più vicino nel testo della domanda. Lo usano sia l'app sia lo script di collegamento. |
| `strumenti/norme_catalogo.json` | Elenco delle fonti (URN normattiva / CELEX) e degli articoli. |
| `strumenti/scarica_norme.py` + `strumenti/scarica_eurlex.js` | Riscaricano i testi. EUR-Lex richiede un browser: si usa Playwright. Uso: `node strumenti/scarica_eurlex.js <cache>` e poi `python3 strumenti/scarica_norme.py <cache>`. |
| `strumenti/collega_norme.js` | Ricalcola i `riferimenti` dalle citazioni e le liste `norme` del manifest (`--scrivi` per salvare). Legge spiegazioni, opzioni spiegate e note e, dal testo della domanda e delle opzioni, le citazioni con l'atto indicato (es. «art. 76 Cost.» nella domanda). |
| `index.html` | I pulsanti 📜 mostrano la sigla dell'atto. Le citazioni nel concetto chiave e nelle spiegazioni delle opzioni sono cliccabili. Il popup mostra il link alla fonte ufficiale e la data di consultazione. Le opzioni già risposte non sono più `disabled`, così i link al loro interno funzionano: una seconda risposta resta bloccata da `rispondi()`. |

Note sul testo:
- Da normattiva sono stati tolti solo gli apparati redazionali: i rinvii alle note «(14)», i segni «(( ))» delle parti modificate, le note «AGGIORNAMENTO» e il preambolo dell'atto. I refusi della fonte sono stati lasciati come sono (es. «sUperiori» all'art. 52 d.lgs. 165/2001; «si è verificato fatto dannoso» all'art. 1, co. 2, l. 20/1994; «non puo essere delegato», senza accento, all'art. 76 Cost.).
- La Costituzione e i Trattati non hanno rubriche. Il titolo riporta quindi la partizione in cui si trova l'articolo (es. «Art. 94 — Il Governo: il Consiglio dei ministri»; «Art. 263 — La Corte di giustizia dell'Unione europea»).
- Gli articoli del c.p.a. (allegato 1 al d.lgs. 104/2010) non hanno un URN per articolo. Il link è quello della pagina normattiva dell'articolo nella versione vigente, presa dall'albero dell'atto.
- I quattro file della Costituzione che c'erano già (artt. 77, 94, 113, 117) sono stati riscaricati con lo stesso formato. Il testo dell'art. 117 ora non contiene più le note.

## Norme non trovate o non scaricate

| Citazione | Dove | Motivo |
|---|---|---|
| art. 83, co. 9, d.lgs. 50/2016 | 8° CC Busta 3, q24 | Codice dei contratti abrogato. Normattiva non ha un testo vigente, quindi non è stato inserito. La spiegazione cita già l'articolo che lo sostituisce, l'art. 101 d.lgs. 36/2023, che è stato scaricato e collegato. |

Gli atti citati solo come fonte di modifiche o come contesto, senza indicare un articolo, non sono stati scaricati: d.l. 76/2020, d.l. 34/2020, d.l. 56/2021, l. 36/1994, l. cost. 1/2012 e 3/2001, d.lgs. 118/2011, l. 160/2019, d.P.R. 1199/1971, d.P.R. 445/2000, d.lgs. 39/2013, d.lgs. 195/2005, Cass. SU 500/1999, Corte cost. 7/1996. Non sono stati scaricati nemmeno alcuni articoli richiamati solo per contesto: artt. 50-ter e 62 CAD (10° CC Busta 1, q48), artt. 20-22 d.l. 83/2012 e art. 6 del Protocollo 19. Si possono aggiungere al catalogo se servono.

## Correzioni alle spiegazioni

Ogni domanda che cita una norma (111) è stata confrontata con il testo dell'articolo. «(uff.)» indica una prova con chiave ufficiale SNA: lì la chiave non è stata toccata, e se la norma è cambiata dopo la prova è stato spiegato il testo dell'epoca.

| # | Prova | Dom. | Campo | Prima | Dopo | Motivo |
|---|---|---|---|---|---|---|
| 1 | sna-cc11-busta2 | 28 | spiegazione | questi criteri sono richiamati anche dall’art. 1 della l. 241/1990. | economicità ed efficacia sono richiamate anche dall’art. 1 della l. 241/1990 («criteri di economicità, di efficacia, di imparzialità, di pubblicità e di trasparenza»), che invece non nomina l’efficienza. | L'art. 1, co. 1, l. 241/1990 elenca «economicità, efficacia, imparzialità, pubblicità e trasparenza»: l'efficienza non c'è. |
| 2 | sna-cc11-busta1 | 35 | perOpzione.C | Le dichiarazioni politiche non producono effetti giuridici vincolanti. | L’art. 263 TFUE ammette il ricorso contro gli atti del Consiglio europeo solo se «destinati a produrre effetti giuridici nei confronti di terzi»: le dichiarazioni politiche non producono effetti giuridici vincolanti. | Art. 263, co. 1, TFUE: anche gli atti del Consiglio europeo sono impugnabili se «destinati a produrre effetti giuridici nei confronti di terzi». |
| 3 | sna-cc11-busta1 | 27 | perOpzione.A | Esclude Stato e Regioni: la potestà regolamentare non spetta «solo» agli enti locali. | Esclude Stato e Regioni: la potestà regolamentare non spetta «solo» agli enti locali. L’art. 118 Cost. applica la sussidiarietà alle funzioni amministrative, non alla potestà regolamentare. | L'art. 118 Cost. riguarda le funzioni amministrative; la spiegazione dell'opzione non lo diceva (ora la citazione è anche collegata al testo). |
| 4 | sna-cc11-busta3 | 29 | spiegazione |  (il cosiddetto spoils system), salvo conferma. |  (il cosiddetto spoils system). | Art. 19, co. 8 e co. 2, d.lgs. 165/2001: nessuna clausola «salvo conferma» (la cessazione è automatica); «gli incarichi sono rinnovabili» senza limite di due volte. |
| 5 | sna-cc11-busta3 | 29 | perOpzione.B | La norma non prevede un limite di due rinnovi consecutivi per questi incarichi. | La norma non prevede un limite di due rinnovi consecutivi per questi incarichi: l’art. 19, co. 2, dice solo che «gli incarichi sono rinnovabili». | Art. 19, co. 8 e co. 2, d.lgs. 165/2001: nessuna clausola «salvo conferma» (la cessazione è automatica); «gli incarichi sono rinnovabili» senza limite di due volte. |
| 6 | sna-cc11-busta3 | 30 | spiegazione | I beni demaniali sono **inalienabili e non espropriabili** (art. 823 c.c.) | I beni demaniali sono **inalienabili** e **non possono formare oggetto di diritti a favore di terzi** (art. 823 c.c.), quindi i creditori non possono aggredirli | Art. 823 c.c.: «inalienabili e non possono formare oggetto di diritti a favore di terzi»; «non espropriabili» non è nel testo. |
| 7 | sna-cc11-busta3 | 31 | spiegazione | si prescrive in **cinque anni** dal fatto dannoso o, in caso di **occultamento doloso**, dalla data della sua **scoperta**. | si prescrive «in ogni caso» in **cinque anni** dal fatto dannoso, indipendentemente da quando l’amministrazione o la Corte dei conti ne sono venute a conoscenza, o, in caso di **occultamento doloso** (con una condotta attiva o in violazione di obblighi di comunicazione), dalla data della sua **scoperta**. | Art. 1, co. 1, 1-quinquies e 2, l. 20/1994 (testo vigente): la trasmissione agli eredi dipende dall'illecito arricchimento (non dal dolo); dolo e arricchimento rilevano per la solidarietà; la prescrizione quinquennale vale «in ogni caso», con le precisazioni sull'occultamento doloso; l'opzione C è una parafrasi, non «il testo». |
| 8 | sna-cc11-busta3 | 31 | perOpzione.B | Il dolo e l’illecito arricchimento rilevano per la trasmissibilità agli eredi, non rendono il diritto imprescrittibile. | L’illecito arricchimento rileva per la trasmissibilità del debito agli eredi (art. 1, co. 1, l. 20/1994) e, insieme al dolo, per la responsabilità solidale dei concorrenti (co. 1-quinquies); nessuno dei due rende il diritto imprescrittibile: il co. 2 fissa la prescrizione «in ogni caso» in cinque anni. | Art. 1, co. 1, 1-quinquies e 2, l. 20/1994 (testo vigente): la trasmissione agli eredi dipende dall'illecito arricchimento (non dal dolo); dolo e arricchimento rilevano per la solidarietà; la prescrizione quinquennale vale «in ogni caso», con le precisazioni sull'occultamento doloso; l'opzione C è una parafrasi, non «il testo». |
| 9 | sna-cc11-busta3 | 31 | perOpzione.C | È il testo dell’art. 1, co. 2, l. 20/1994: | È quanto prevede l’art. 1, co. 2, l. 20/1994: | Art. 1, co. 1, 1-quinquies e 2, l. 20/1994 (testo vigente): la trasmissione agli eredi dipende dall'illecito arricchimento (non dal dolo); dolo e arricchimento rilevano per la solidarietà; la prescrizione quinquennale vale «in ogni caso», con le precisazioni sull'occultamento doloso; l'opzione C è una parafrasi, non «il testo». |
| 10 | sna-cc10-busta1 | 49 | spiegazione | il lavoro agile va garantito ad **almeno il 15 per cento dei dipendenti** che svolgono attività compatibili, nell’ambito della programmazione dell’ente (oggi nel PIAO). | il POLA prevede, per le attività che possono essere svolte in modalità agile, che **almeno il 15 per cento dei dipendenti** possa avvalersene; se il POLA non è adottato, il lavoro agile si applica almeno al 15 per cento dei dipendenti, ove lo richiedano (oggi la programmazione confluisce nel PIAO, art. 6 d.l. 80/2021). | Art. 14, co. 1, l. 124/2015: il POLA prevede che «almeno il 15 per cento dei dipendenti possa avvalersene» (non «va garantito»); senza POLA, si applica al 15% «ove lo richiedano». |
| 11 | sna-cc10-busta1 | 35 | perOpzione.C | (Commissione/Alto rappresentante negoziano, il Consiglio conclude) | (Commissione o Alto rappresentante presentano raccomandazioni; il Consiglio autorizza i negoziati, designa il negoziatore e conclude l’accordo) | Art. 218, par. 2-3, TFUE: Commissione o Alto rappresentante presentano raccomandazioni; il Consiglio autorizza i negoziati, designa il negoziatore e conclude. |
| 12 | sna-cc10-busta2 | 34 | nota | dall'art. 6, par. 2, non | dall'art. 6, par. 2, TUE non | La nota citava «art. 6, par. 2» senza atto, subito dopo l'art. 218 TFUE: è l'art. 6, par. 2, TUE (il riferimento errato a tfue_art_6 è stato tolto). |
| 13 | sna-cc10-busta2 | 49 | spiegazione | il cui responsabile è il **Responsabile per la transizione digitale (RTD)**. | il cui responsabile è il **Responsabile per la transizione digitale (RTD)**; le amministrazioni diverse da quelle statali possono individuare l’ufficio tra quelli di livello dirigenziale o, se ne sono prive, un responsabile tra le posizioni apicali (co. 1-sexies). | Art. 17, co. 1-sexies, CAD: l'ufficio dirigenziale generale è la regola per lo Stato; le altre amministrazioni possono usare un ufficio dirigenziale o una posizione apicale. |
| 14 | sna-cc10-busta3 | 48 | perOpzione.B | per le PA fino a 50 dipendenti è previsto un piano semplificato | per le PA con meno di cinquanta dipendenti sono previste modalità semplificate | Art. 6, co. 1 e 6, d.l. 80/2021: obbligo per le PA «con più di cinquanta dipendenti», modalità semplificate per quelle «con meno di cinquanta». |
| 15 | sna-cc09-prova1 (uff.) | 27 | perOpzione.A | deve essere **non minore** di tre mesi, non minore. | deve essere **non minore** di tre mesi, non «minore» come dice l’opzione. | La frase si contraddiceva («non minore …, non minore»). Art. 138 Cost.: intervallo «non minore di tre mesi». |
| 16 | sna-cc09-prova2 (uff.) | 28 | perOpzione.A | riprende testualmente l'art. 7, comma 1, l. 241/1990. | riprende nella sostanza l'art. 7, comma 1, l. 241/1990. | L'opzione parafrasa l'art. 7, co. 1, l. 241/1990, non lo riporta testualmente. |
| 17 | sna-cc09-prova3 (uff.) | 29 | perOpzione.B | (comunque non superiore a dodici mesi per i provvedimenti autorizzatori o di attribuzione di vantaggi economici) | (per i provvedimenti autorizzatori o di attribuzione di vantaggi economici: non oltre dodici mesi all’epoca della prova; il testo oggi vigente dice «comunque non superiore a sei mesi dal momento dell'adozione») | Art. 21-nonies, co. 1, l. 241/1990 vigente (dal 18/12/2025): «comunque non superiore a sei mesi dal momento dell'adozione». Prova ufficiale del 2023: chiave invariata, spiegato il limite di allora (dodici mesi). |
| 18 | sna-cc08-busta3 (uff.) | 18 | spiegazione | Art. 23, co. 1, l. 87/1953: l’atto di rimessione deve indicare | Art. 23, co. 1, l. 87/1953 (richiamato dal co. 3 per l’ordinanza del giudice): l’atto di rimessione deve indicare | Il co. 1 dell'art. 23 l. 87/1953 riguarda l'istanza di parte; per l'ordinanza del giudice rinvia il co. 3 («indicazioni previste alle lettere a) e b) del primo comma»). |
| 19 | sna-cc08-busta3 (uff.) | 17 | perOpzione.B | L’ordine pubblico e il buon costume sono limiti di altre libertà (es. art. 21 Cost.), non del diritto di voto. | Il buon costume è un limite di altre libertà (es. art. 21, ultimo comma, Cost.), non del diritto di voto, che può essere limitato solo nei casi tassativi dell’art. 48, co. 4. | L'art. 21 Cost. pone il limite del buon costume, non dell'ordine pubblico. |
| 20 | sna-cc08-busta3 (uff.) | 22 | perOpzione.A | era di cinque anni, non sette | è di cinque anni (tre per i direttori dei servizi generali e amministrativi delle scuole), non sette | L'art. 35, co. 5-bis, d.lgs. 165/2001 è vigente («non inferiore a cinque anni», tre per i DSGA): l'imperfetto «era» faceva pensare a una regola superata. |

Le domande con chiave ricostruita (11° e 10° corso-concorso) sono state verificate tutte: **in nessun caso il testo della norma smentisce la risposta indicata**.

## Casi «da decidere»

Nessuno. La verifica non ha trovato nessuna domanda con chiave ricostruita in cui il testo vigente della norma porti a una risposta diversa da quella indicata.

Due osservazioni, senza conseguenze sulla chiave:
- **11° CC Busta 3, q34** (Protocollo 19): le spiegazioni delle opzioni B (unanimità per i nuovi Stati) e C (associazione di Islanda, Norvegia, Svizzera e Liechtenstein) si basano su altri articoli del Protocollo, che non sono stati scaricati. La risposta corretta (A) è confermata dall'art. 1.
- **10° CC Busta 1, q49** (lavoro agile): la nota ricorda che la soglia è cambiata più volte. Il testo vigente dell'art. 14 l. 124/2015 conferma il 15%.

## Norme scaricate

### Costituzione della Repubblica italiana

| normaId | Articolo | Fonte |
|---|---|---|
| `cost_art_10` | Art. 10 — Principi fondamentali (in vigore dal 18-7-1967) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione:1947-12-27~art10) |
| `cost_art_11` | Art. 11 — Principi fondamentali (in vigore dal 1-1-1948) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione:1947-12-27~art11) |
| `cost_art_13` | Art. 13 — Rapporti civili (in vigore dal 1-1-1948) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione:1947-12-27~art13) |
| `cost_art_21` | Art. 21 — Rapporti civili (in vigore dal 1-1-1948) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione:1947-12-27~art21) |
| `cost_art_24` | Art. 24 — Rapporti civili (in vigore dal 1-1-1948) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione:1947-12-27~art24) |
| `cost_art_26` | Art. 26 — Rapporti civili (in vigore dal 18-7-1967) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione:1947-12-27~art26) |
| `cost_art_41` | Art. 41 — Rapporti economici (in vigore dal 9-3-2022) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione:1947-12-27~art41) |
| `cost_art_48` | Art. 48 — Rapporti politici (in vigore dal 4-2-2000) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione:1947-12-27~art48) |
| `cost_art_60` | Art. 60 — Il Parlamento: le Camere (in vigore dal 27-2-1963) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione:1947-12-27~art60) |
| `cost_art_61` | Art. 61 — Il Parlamento: le Camere (in vigore dal 1-1-1948) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione:1947-12-27~art61) |
| `cost_art_64` | Art. 64 — Il Parlamento: le Camere (in vigore dal 1-1-1948) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione:1947-12-27~art64) |
| `cost_art_71` | Art. 71 — Il Parlamento: la formazione delle leggi (in vigore dal 1-1-1948) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione:1947-12-27~art71) |
| `cost_art_72` | Art. 72 — Il Parlamento: la formazione delle leggi (in vigore dal 1-1-1948) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione:1947-12-27~art72) |
| `cost_art_73` | Art. 73 — Il Parlamento: la formazione delle leggi (in vigore dal 1-1-1948) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione:1947-12-27~art73) |
| `cost_art_75` | Art. 75 — Il Parlamento: la formazione delle leggi (in vigore dal 1-1-1948) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione:1947-12-27~art75) |
| `cost_art_76` | Art. 76 — Il Parlamento: la formazione delle leggi (in vigore dal 1-1-1948) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione:1947-12-27~art76) |
| `cost_art_77` | Art. 77 — Il Parlamento: la formazione delle leggi (in vigore dal 1-1-1948) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione:1947-12-27~art77) |
| `cost_art_78` | Art. 78 — Il Parlamento: la formazione delle leggi (in vigore dal 1-1-1948) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione:1947-12-27~art78) |
| `cost_art_81` | Art. 81 — Il Parlamento: la formazione delle leggi (in vigore dal 8-5-2012) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione:1947-12-27~art81) |
| `cost_art_87` | Art. 87 — Il Presidente della Repubblica (in vigore dal 1-1-1948) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione:1947-12-27~art87) |
| `cost_art_90` | Art. 90 — Il Presidente della Repubblica (in vigore dal 1-1-1948) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione:1947-12-27~art90) |
| `cost_art_92` | Art. 92 — Il Governo: il Consiglio dei ministri (in vigore dal 1-1-1948) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione:1947-12-27~art92) |
| `cost_art_94` | Art. 94 — Il Governo: il Consiglio dei ministri (in vigore dal 1-1-1948) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione:1947-12-27~art94) |
| `cost_art_95` | Art. 95 — Il Governo: il Consiglio dei ministri (in vigore dal 1-1-1948) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione:1947-12-27~art95) |
| `cost_art_97` | Art. 97 — Il Governo: la Pubblica Amministrazione (in vigore dal 8-5-2012) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione:1947-12-27~art97) |
| `cost_art_100` | Art. 100 — Il Governo: gli organi ausiliari (in vigore dal 1-1-1948) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione:1947-12-27~art100) |
| `cost_art_103` | Art. 103 — La Magistratura: ordinamento giurisdizionale (in vigore dal 1-1-1948) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione:1947-12-27~art103) |
| `cost_art_104` | Art. 104 — La Magistratura: ordinamento giurisdizionale (in vigore dal 1-1-1948) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione:1947-12-27~art104) |
| `cost_art_105` | Art. 105 — La Magistratura: ordinamento giurisdizionale (in vigore dal 1-1-1948) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione:1947-12-27~art105) |
| `cost_art_110` | Art. 110 — La Magistratura: ordinamento giurisdizionale (in vigore dal 1-1-1948) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione:1947-12-27~art110) |
| `cost_art_113` | Art. 113 — La Magistratura: norme sulla giurisdizione (in vigore dal 1-1-1948) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione:1947-12-27~art113) |
| `cost_art_117` | Art. 117 — Le Regioni, le Province, i Comuni (in vigore dal 8-5-2012) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione:1947-12-27~art117) |
| `cost_art_118` | Art. 118 — Le Regioni, le Province, i Comuni (in vigore dal 8-11-2001) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione:1947-12-27~art118) |
| `cost_art_119` | Art. 119 — Le Regioni, le Province, i Comuni (in vigore dal 30-11-2022) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione:1947-12-27~art119) |
| `cost_art_120` | Art. 120 — Le Regioni, le Province, i Comuni (in vigore dal 8-11-2001) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione:1947-12-27~art120) |
| `cost_art_134` | Art. 134 — Garanzie costituzionali: la Corte costituzionale (in vigore dal 18-1-1989) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione:1947-12-27~art134) |
| `cost_art_135` | Art. 135 — Garanzie costituzionali: la Corte costituzionale (in vigore dal 18-1-1989) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione:1947-12-27~art135) |
| `cost_art_136` | Art. 136 — Garanzie costituzionali: la Corte costituzionale (in vigore dal 1-1-1948) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione:1947-12-27~art136) |
| `cost_art_138` | Art. 138 — Garanzie costituzionali: revisione della Costituzione. Leggi costituzionali (in vigore dal 1-1-1948) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione:1947-12-27~art138) |

### Legge 7 agosto 1990, n. 241

| normaId | Articolo | Fonte |
|---|---|---|
| `l241_1990_art_1` | Art. 1 — Principi generali dell'attività amministrativa (in vigore dal 15-9-2020) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1990-08-07;241~art1) |
| `l241_1990_art_2` | Art. 2 — Conclusione del procedimento (in vigore dal 1-6-2021) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1990-08-07;241~art2) |
| `l241_1990_art_3` | Art. 3 — Motivazione del provvedimento (in vigore dal 8-3-2005) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1990-08-07;241~art3) |
| `l241_1990_art_6` | Art. 6 — Compiti del responsabile del procedimento (in vigore dal 8-3-2005) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1990-08-07;241~art6) |
| `l241_1990_art_7` | Art. 7 — Comunicazione di avvio del procedimento (in vigore dal 8-3-2005) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1990-08-07;241~art7) |
| `l241_1990_art_9` | Art. 9 — Intervento nel procedimento (in vigore dal 8-3-2005) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1990-08-07;241~art9) |
| `l241_1990_art_10` | Art. 10 — Diritti dei partecipanti al procedimento (in vigore dal 8-3-2005) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1990-08-07;241~art10) |
| `l241_1990_art_10_bis` | Art. 10-bis — Comunicazione dei motivi ostativi all'accoglimento dell'istanza (in vigore dal 17-7-2020) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1990-08-07;241~art10bis) |
| `l241_1990_art_11` | Art. 11 — Accordi integrativi o sostitutivi del provvedimento (in vigore dal 28-11-2012) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1990-08-07;241~art11) |
| `l241_1990_art_19` | Art. 19 — Segnalazione certificata di inizio attività - Scia (in vigore dal 20-2-2026) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1990-08-07;241~art19) |
| `l241_1990_art_20` | Art. 20 — Silenzio assenso (in vigore dal 21-4-2026) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1990-08-07;241~art20) |
| `l241_1990_art_21_bis` | Art. 21-bis — Efficacia del provvedimento limitativo della sfera giuridica dei privati (in vigore dal 8-3-2005) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1990-08-07;241~art21bis) |
| `l241_1990_art_21_ter` | Art. 21-ter — Esecutorietà (in vigore dal 8-3-2005) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1990-08-07;241~art21ter) |
| `l241_1990_art_21_quater` | Art. 21-quater — Efficacia ed esecutività del provvedimento (in vigore dal 28-8-2015) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1990-08-07;241~art21quater) |
| `l241_1990_art_21_quinquies` | Art. 21-quinquies — Revoca del provvedimento (in vigore dal 12-11-2014) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1990-08-07;241~art21quinquies) |
| `l241_1990_art_21_septies` | Art. 21-septies — Nullità del provvedimento (in vigore dal 16-9-2010) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1990-08-07;241~art21septies) |
| `l241_1990_art_21_nonies` | Art. 21-nonies — Annullamento d'ufficio (in vigore dal 18-12-2025) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1990-08-07;241~art21nonies) |
| `l241_1990_art_22` | Art. 22 — Definizioni e principi in materia di accesso (in vigore dal 4-7-2009) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1990-08-07;241~art22) |
| `l241_1990_art_24` | Art. 24 — Esclusione dal diritto di accesso (in vigore dal 8-3-2005) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1990-08-07;241~art24) |

### Legge 23 agosto 1988, n. 400

| normaId | Articolo | Fonte |
|---|---|---|
| `l400_1988_art_9` | Art. 9 — Ministri senza portafoglio, incarichi speciali di Governo, incarichi di reggenza ad interim (in vigore dal 12-10-2007) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1988-08-23;400~art9) |
| `l400_1988_art_14` | Art. 14 — Decreti legislativi (in vigore dal 27-9-1988) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1988-08-23;400~art14) |
| `l400_1988_art_17` | Art. 17 — Regolamenti (in vigore dal 4-7-2009) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1988-08-23;400~art17) |

### Decreto legislativo 30 marzo 2001, n. 165

| normaId | Articolo | Fonte |
|---|---|---|
| `dlgs165_2001_art_6` | Art. 6 — Organizzazione degli uffici e fabbisogni di personale (in vigore dal 15-7-2022) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2001-03-30;165~art6) |
| `dlgs165_2001_art_7` | Art. 7 — Gestione delle risorse umane (in vigore dal 8-10-2020) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2001-03-30;165~art7) |
| `dlgs165_2001_art_19` | Art. 19 — Incarichi di funzioni dirigenziali (in vigore dal 19-7-2026) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2001-03-30;165~art19) |
| `dlgs165_2001_art_35` | Art. 35 — Reclutamento del personale (in vigore dal 31-12-2025) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2001-03-30;165~art35) |
| `dlgs165_2001_art_52` | Art. 52 — Disciplina delle mansioni (in vigore dal 22-6-2023) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2001-03-30;165~art52) |

### Codice civile (R.D. 16 marzo 1942, n. 262)

| normaId | Articolo | Fonte |
|---|---|---|
| `cc_art_823` | Art. 823 — Condizione giuridica del demanio pubblico (in vigore dal 19-4-1942) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262:2~art823) |
| `cc_art_826` | Art. 826 — Patrimonio dello Stato, delle provincie e dei comuni (in vigore dal 19-4-1942) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262:2~art826) |

### Codice del processo amministrativo (d.lgs. 2 luglio 2010, n. 104, Allegato 1)

| normaId | Articolo | Fonte |
|---|---|---|
| `cpa_art_7` | Art. 7 — Giurisdizione amministrativa (in vigore dal 16-9-2010) | [normattiva](https://www.normattiva.it/atto/caricaArticolo?art.versione=1&art.idGruppo=3&art.flagTipoArticolo=2&art.codiceRedazionale=010G0127&art.idArticolo=7&art.idSottoArticolo=1&art.idSottoArticolo1=10&art.dataPubblicazioneGazzetta=2010-07-07&art.progressivo=0&) |
| `cpa_art_8` | Art. 8 — Cognizione incidentale e questioni pregiudiziali (in vigore dal 16-9-2010) | [normattiva](https://www.normattiva.it/atto/caricaArticolo?art.versione=1&art.idGruppo=3&art.flagTipoArticolo=2&art.codiceRedazionale=010G0127&art.idArticolo=8&art.idSottoArticolo=1&art.idSottoArticolo1=10&art.dataPubblicazioneGazzetta=2010-07-07&art.progressivo=0&) |
| `cpa_art_15` | Art. 15 — Rilievo dell'incompetenza (in vigore dal 18-9-2012) | [normattiva](https://www.normattiva.it/atto/caricaArticolo?art.versione=2&art.idGruppo=4&art.flagTipoArticolo=2&art.codiceRedazionale=010G0127&art.idArticolo=15&art.idSottoArticolo=1&art.idSottoArticolo1=10&art.dataPubblicazioneGazzetta=2010-07-07&art.progressivo=0&) |
| `cpa_art_30` | Art. 30 — Azione di condanna (in vigore dal 16-9-2010) | [normattiva](https://www.normattiva.it/atto/caricaArticolo?art.versione=1&art.idGruppo=9&art.flagTipoArticolo=2&art.codiceRedazionale=010G0127&art.idArticolo=30&art.idSottoArticolo=1&art.idSottoArticolo1=10&art.dataPubblicazioneGazzetta=2010-07-07&art.progressivo=0&) |
| `cpa_art_55` | Art. 55 — Misure cautelari collegiali (in vigore dal 18-9-2012) | [normattiva](https://www.normattiva.it/atto/caricaArticolo?art.versione=3&art.idGruppo=14&art.flagTipoArticolo=2&art.codiceRedazionale=010G0127&art.idArticolo=55&art.idSottoArticolo=1&art.idSottoArticolo1=10&art.dataPubblicazioneGazzetta=2010-07-07&art.progressivo=0&) |
| `cpa_art_60` | Art. 60 — Definizione del giudizio in esito all'udienza cautelare (in vigore dal 16-9-2010) | [normattiva](https://www.normattiva.it/atto/caricaArticolo?art.versione=1&art.idGruppo=14&art.flagTipoArticolo=2&art.codiceRedazionale=010G0127&art.idArticolo=60&art.idSottoArticolo=1&art.idSottoArticolo1=10&art.dataPubblicazioneGazzetta=2010-07-07&art.progressivo=0&) |
| `cpa_art_117` | Art. 117 — Ricorsi avverso il silenzio (in vigore dal 22-6-2013) | [normattiva](https://www.normattiva.it/atto/caricaArticolo?art.versione=3&art.idGruppo=33&art.flagTipoArticolo=2&art.codiceRedazionale=010G0127&art.idArticolo=117&art.idSottoArticolo=1&art.idSottoArticolo1=10&art.dataPubblicazioneGazzetta=2010-07-07&art.progressivo=0&) |

### Legge 6 novembre 2012, n. 190

| normaId | Articolo | Fonte |
|---|---|---|
| `l190_2012_art_1` | Art. 1 — Disposizioni per la prevenzione e la repressione della corruzione e dell'illegalità nella pubblica amministrazione (in vigore dal 26-8-2026) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2012-11-06;190~art1) |

### Legge 14 gennaio 1994, n. 20

| normaId | Articolo | Fonte |
|---|---|---|
| `l20_1994_art_1` | Art. 1 — Azione di responsabilità (in vigore dal 1-3-2026) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1994-01-14;20~art1) |
| `l20_1994_art_3` | Art. 3 — Norme in materia di controllo della Corte dei conti (in vigore dal 21-8-2026) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1994-01-14;20~art3) |

### Decreto legislativo 3 aprile 2006, n. 152

| normaId | Articolo | Fonte |
|---|---|---|
| `dlgs152_2006_art_144` | Art. 144 — Tutela e uso delle risorse idriche (in vigore dal 12-11-2014) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2006-04-03;152~art144) |

### Decreto legislativo 30 luglio 1999, n. 286

| normaId | Articolo | Fonte |
|---|---|---|
| `dlgs286_1999_art_1` | Art. 1 — Principi generali del controllo interno (in vigore dal 30-4-2010) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1999-07-30;286~art1) |
| `dlgs286_1999_art_4` | Art. 4 — Controllo di gestione (in vigore dal 2-9-1999) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1999-07-30;286~art4) |

### Legge 7 agosto 2015, n. 124

| normaId | Articolo | Fonte |
|---|---|---|
| `l124_2015_art_14` | Art. 14 — Promozione della conciliazione dei tempi di vita e di lavoro nelle amministrazioni pubbliche (in vigore dal 23-4-2023) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2015-08-07;124~art14) |

### Decreto-legge 22 giugno 2012, n. 83

| normaId | Articolo | Fonte |
|---|---|---|
| `dl83_2012_art_19` | Art. 19 — Istituzione dell'Agenzia per l'Italia digitale (in vigore dal 21-8-2013) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2012-06-22;83~art19) |

### Codice dell'amministrazione digitale (d.lgs. 7 marzo 2005, n. 82)

| normaId | Articolo | Fonte |
|---|---|---|
| `cad_art_1` | Art. 1 — Definizioni (in vigore dal 27-1-2018) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-03-07;82~art1) |
| `cad_art_14_bis` | Art. 14-bis — Agenzia per l'Italia digitale (in vigore dal 17-7-2020) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-03-07;82~art14bis) |
| `cad_art_17` | Art. 17 — Responsabile per la transizione digitale e difensore civico digitale (in vigore dal 2-3-2024) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-03-07;82~art17) |
| `cad_art_64` | Art. 64 — Sistema pubblico per la gestione delle identità digitali e modalità di accesso ai servizi erogati in rete dalle pubbliche amministrazioni (in vigore dal 30-6-2022) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-03-07;82~art64) |

### Decreto-legge 9 giugno 2021, n. 80

| normaId | Articolo | Fonte |
|---|---|---|
| `dl80_2021_art_6` | Art. 6 — Piano integrato di attività e organizzazione (in vigore dal 20-2-2026) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2021-06-09;80~art6) |

### Legge 24 dicembre 2012, n. 234

| normaId | Articolo | Fonte |
|---|---|---|
| `l234_2012_art_1` | Art. 1 — Finalità (in vigore dal 19-1-2013) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2012-12-24;234~art1) |

### Decreto legislativo 19 agosto 2016, n. 175

| normaId | Articolo | Fonte |
|---|---|---|
| `dlgs175_2016_art_3` | Art. 3 — Tipi di società in cui è ammessa la partecipazione pubblica (in vigore dal 23-9-2016) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2016-08-19;175~art3) |

### Legge 31 dicembre 2009, n. 196

| normaId | Articolo | Fonte |
|---|---|---|
| `l196_2009_art_10` | Art. 10 — Documento di economia e finanza (in vigore dal 9-9-2016) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2009-12-31;196~art10) |
| `l196_2009_art_21` | Art. 21 — Bilancio di previsione (in vigore dal 24-10-2018) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2009-12-31;196~art21) |
| `l196_2009_art_25_bis` | Art. 25-bis — Introduzione delle azioni (in vigore dal 24-10-2018) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2009-12-31;196~art25bis) |

### Legge 11 marzo 1953, n. 87

| normaId | Articolo | Fonte |
|---|---|---|
| `l87_1953_art_23` | Art. 23 (in vigore dal 15-3-1953) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1953-03-11;87~art23) |

### Decreto legislativo 31 marzo 2023, n. 36

| normaId | Articolo | Fonte |
|---|---|---|
| `dlgs36_2023_art_101` | Art. 101 — Soccorso istruttorio (in vigore dal 1-4-2023) | [normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2023-03-31;36~art101) |

### Trattato sull'Unione europea (versione consolidata, GU C 202 del 7.6.2016)

| normaId | Articolo | Fonte |
|---|---|---|
| `tue_art_2` | Art. 2 — Disposizioni comuni | [EUR-Lex](https://eur-lex.europa.eu/legal-content/IT/TXT/HTML/?uri=CELEX:12016M/TXT) |
| `tue_art_5` | Art. 5 — Disposizioni comuni | [EUR-Lex](https://eur-lex.europa.eu/legal-content/IT/TXT/HTML/?uri=CELEX:12016M/TXT) |
| `tue_art_6` | Art. 6 — Disposizioni comuni | [EUR-Lex](https://eur-lex.europa.eu/legal-content/IT/TXT/HTML/?uri=CELEX:12016M/TXT) |
| `tue_art_9` | Art. 9 — Disposizioni relative ai principi democratici | [EUR-Lex](https://eur-lex.europa.eu/legal-content/IT/TXT/HTML/?uri=CELEX:12016M/TXT) |
| `tue_art_11` | Art. 11 — Disposizioni relative ai principi democratici | [EUR-Lex](https://eur-lex.europa.eu/legal-content/IT/TXT/HTML/?uri=CELEX:12016M/TXT) |
| `tue_art_13` | Art. 13 — Disposizioni relative alle istituzioni | [EUR-Lex](https://eur-lex.europa.eu/legal-content/IT/TXT/HTML/?uri=CELEX:12016M/TXT) |
| `tue_art_15` | Art. 15 — Disposizioni relative alle istituzioni | [EUR-Lex](https://eur-lex.europa.eu/legal-content/IT/TXT/HTML/?uri=CELEX:12016M/TXT) |
| `tue_art_16` | Art. 16 — Disposizioni relative alle istituzioni | [EUR-Lex](https://eur-lex.europa.eu/legal-content/IT/TXT/HTML/?uri=CELEX:12016M/TXT) |
| `tue_art_17` | Art. 17 — Disposizioni relative alle istituzioni | [EUR-Lex](https://eur-lex.europa.eu/legal-content/IT/TXT/HTML/?uri=CELEX:12016M/TXT) |
| `tue_art_42` | Art. 42 — Disposizioni sulla politica di sicurezza e di difesa comune | [EUR-Lex](https://eur-lex.europa.eu/legal-content/IT/TXT/HTML/?uri=CELEX:12016M/TXT) |

### Trattato sul funzionamento dell'Unione europea (versione consolidata, GU C 202 del 7.6.2016)

| normaId | Articolo | Fonte |
|---|---|---|
| `tfue_art_2` | Art. 2 — Categorie e settori di competenza dell'Unione | [EUR-Lex](https://eur-lex.europa.eu/legal-content/IT/TXT/HTML/?uri=CELEX:12016E/TXT) |
| `tfue_art_3` | Art. 3 — Categorie e settori di competenza dell'Unione | [EUR-Lex](https://eur-lex.europa.eu/legal-content/IT/TXT/HTML/?uri=CELEX:12016E/TXT) |
| `tfue_art_4` | Art. 4 — Categorie e settori di competenza dell'Unione | [EUR-Lex](https://eur-lex.europa.eu/legal-content/IT/TXT/HTML/?uri=CELEX:12016E/TXT) |
| `tfue_art_6` | Art. 6 — Categorie e settori di competenza dell'Unione | [EUR-Lex](https://eur-lex.europa.eu/legal-content/IT/TXT/HTML/?uri=CELEX:12016E/TXT) |
| `tfue_art_20` | Art. 20 — Non discriminazione e cittadinanza dell'Unione | [EUR-Lex](https://eur-lex.europa.eu/legal-content/IT/TXT/HTML/?uri=CELEX:12016E/TXT) |
| `tfue_art_79` | Art. 79 — Politiche relative ai controlli alle frontiere, all'asilo e all'immigrazione | [EUR-Lex](https://eur-lex.europa.eu/legal-content/IT/TXT/HTML/?uri=CELEX:12016E/TXT) |
| `tfue_art_108` | Art. 108 — Aiuti concessi dagli Stati | [EUR-Lex](https://eur-lex.europa.eu/legal-content/IT/TXT/HTML/?uri=CELEX:12016E/TXT) |
| `tfue_art_218` | Art. 218 — Accordi internazionali | [EUR-Lex](https://eur-lex.europa.eu/legal-content/IT/TXT/HTML/?uri=CELEX:12016E/TXT) |
| `tfue_art_238` | Art. 238 — Il Consiglio | [EUR-Lex](https://eur-lex.europa.eu/legal-content/IT/TXT/HTML/?uri=CELEX:12016E/TXT) |
| `tfue_art_256` | Art. 256 — La Corte di giustizia dell'Unione europea | [EUR-Lex](https://eur-lex.europa.eu/legal-content/IT/TXT/HTML/?uri=CELEX:12016E/TXT) |
| `tfue_art_263` | Art. 263 — La Corte di giustizia dell'Unione europea | [EUR-Lex](https://eur-lex.europa.eu/legal-content/IT/TXT/HTML/?uri=CELEX:12016E/TXT) |
| `tfue_art_265` | Art. 265 — La Corte di giustizia dell'Unione europea | [EUR-Lex](https://eur-lex.europa.eu/legal-content/IT/TXT/HTML/?uri=CELEX:12016E/TXT) |
| `tfue_art_267` | Art. 267 — La Corte di giustizia dell'Unione europea | [EUR-Lex](https://eur-lex.europa.eu/legal-content/IT/TXT/HTML/?uri=CELEX:12016E/TXT) |
| `tfue_art_288` | Art. 288 — Atti giuridici dell'Unione | [EUR-Lex](https://eur-lex.europa.eu/legal-content/IT/TXT/HTML/?uri=CELEX:12016E/TXT) |
| `tfue_art_352` | Art. 352 — Disposizioni generali e finali | [EUR-Lex](https://eur-lex.europa.eu/legal-content/IT/TXT/HTML/?uri=CELEX:12016E/TXT) |

### Carta dei diritti fondamentali dell'Unione europea (GU C 202 del 7.6.2016)

| normaId | Articolo | Fonte |
|---|---|---|
| `cdfue_art_51` | Art. 51 — Ambito di applicazione | [EUR-Lex](https://eur-lex.europa.eu/legal-content/IT/TXT/HTML/?uri=CELEX:12016P/TXT) |

### Protocollo (n. 19) sull'acquis di Schengen integrato nell'ambito dell'Unione europea (GU C 202 del 7.6.2016)

| normaId | Articolo | Fonte |
|---|---|---|
| `prot19_art_1` | Art. 1 — Protocollo n. 19 sull'acquis di Schengen | [EUR-Lex](https://eur-lex.europa.eu/legal-content/IT/TXT/HTML/?uri=CELEX:12016E/PRO/19) |
