// Pillole normative: concetti brevi, spiegati e collegati alle fonti.
// Ogni pillola ha:
//   testo    — la spiegazione da leggere (markdown semplice; le citazioni «» sono letterali e
//              controllate da strumenti/verifica_pillole.js);
//   parlato  — la stessa spiegazione scritta per l'ascolto (telefono, Alexa, file audio): niente
//              abbreviazioni, numeri e sigle per esteso;
//   fonti    — da dove viene il concetto: norma (normaId del testo in norme/), sentenza
//              (id del file in norme/sentenze/), lezione (titolo, docente, data, materiale);
//   collegate — altre pillole da leggere insieme.
// Dopo ogni modifica: node strumenti/verifica_pillole.js --scrivi
const PILLOLE_AREE = [
  { id: "procedimento", nome: "Procedimento amministrativo", icona: "⚖️" },
  { id: "impiego", nome: "Pubblico impiego e dirigenza", icona: "🏛️" },
  { id: "anticorruzione", nome: "Anticorruzione e trasparenza", icona: "🔎" },
  { id: "costituzione_ue", nome: "Costituzione e Unione europea", icona: "🇪🇺" }
];

const PILLOLE = [
  {
    "id": "preavviso-rigetto",
    "area": "procedimento",
    "titolo": "Il preavviso di rigetto",
    "sintesi": "Prima di respingere un’istanza, l’amministrazione deve comunicarne i motivi e ascoltare l’interessato.",
    "testo": "Nei procedimenti **ad istanza di parte**, prima di dire di no l’amministrazione deve avvisare chi ha presentato la domanda. Il responsabile del procedimento o l’autorità competente, «prima della formale adozione di un provvedimento negativo», comunica «tempestivamente agli istanti i motivi che ostano all'accoglimento della domanda» (art. 10-bis l. 241/1990).\n\n**Dopo la comunicazione.** Gli istanti hanno dieci giorni per presentare osservazioni scritte, anche con documenti. I termini del procedimento sono sospesi e «ricominciano a decorrere dieci giorni dopo la presentazione delle osservazioni» o, se non arrivano osservazioni, dalla scadenza dei dieci giorni.\n\n**Il diniego finale.** Se le osservazioni non sono accolte, la motivazione deve dirne il perché e può aggiungere solo i motivi ostativi ulteriori «che sono conseguenza delle osservazioni». Se il diniego viene annullato dal giudice, quando riesercita il potere l’amministrazione «non può addurre per la prima volta motivi ostativi già emergenti dall'istruttoria del provvedimento annullato».\n\n**Esclusioni e limiti.** La regola non si applica alle procedure concorsuali né ai procedimenti previdenziali e assistenziali a istanza di parte gestiti dagli enti previdenziali. Tra i motivi del rigetto non si possono indicare «inadempienze o ritardi attribuibili all'amministrazione».\n\n**Da ricordare.** Se manca il preavviso, l’amministrazione non può salvare il diniego dimostrando in giudizio che non poteva essere diverso: l’art. 21-octies, co. 2, l. 241/1990 lo esclude espressamente per la violazione dell’art. 10-bis.",
    "parlato": "Il preavviso di rigetto. Nei procedimenti avviati su domanda di un privato, prima di dire di no l'amministrazione deve avvisare chi ha presentato la domanda. Lo prevede l'articolo dieci bis della legge duecentoquarantuno del millenovecentonovanta: il responsabile del procedimento comunica tempestivamente i motivi che ostano all'accoglimento della domanda. Da quel momento l'interessato ha dieci giorni per presentare osservazioni scritte, anche con documenti, e i termini del procedimento restano sospesi. Se poi l'amministrazione respinge comunque la domanda, deve spiegare perché non ha accolto le osservazioni, e può aggiungere solo i nuovi motivi che nascono da quelle osservazioni. Se il diniego viene annullato dal giudice, l'amministrazione non può tirare fuori per la prima volta motivi che già emergevano dall'istruttoria. Due limiti: la regola non vale per i concorsi e per i procedimenti previdenziali e assistenziali, e non si possono opporre al cittadino i ritardi o le inadempienze dell'amministrazione stessa. Infine, attenzione: se il preavviso manca, il provvedimento non si salva dimostrando in giudizio che non poteva essere diverso. L'articolo ventuno octies lo esclude espressamente.",
    "fonti": [
      { "tipo": "norma", "id": "l241_1990_art_10_bis" },
      { "tipo": "norma", "id": "l241_1990_art_21_octies" }
    ],
    "collegate": ["annullamento-ufficio"]
  },
  {
    "id": "annullamento-ufficio",
    "area": "procedimento",
    "titolo": "L’annullamento d’ufficio",
    "sintesi": "L’amministrazione può ritirare un proprio atto illegittimo, ma solo con un interesse pubblico e entro un termine ragionevole.",
    "testo": "Con l’annullamento d’ufficio l’amministrazione elimina, in autotutela, un provvedimento **illegittimo** che essa stessa ha adottato. Servono tre condizioni (art. 21-nonies, co. 1, l. 241/1990):\n\n1. **l’illegittimità** ai sensi dell’art. 21-octies (violazione di legge, eccesso di potere, incompetenza), esclusi i vizi non invalidanti del suo comma 2;\n2. **le ragioni di interesse pubblico**: non basta ripristinare la legalità;\n3. **un termine ragionevole**, che per le autorizzazioni e i vantaggi economici è «comunque non superiore a sei mesi» dall’adozione, anche quando l’atto si è formato per silenzio assenso (art. 20).\n\nL’amministrazione deve tenere conto «degli interessi dei destinatari e dei controinteressati». Decide l’organo che ha emanato l’atto, «ovvero da altro organo previsto dalla legge».\n\n**Il termine si è accorciato nel tempo.** Nel 2019 era di diciotto mesi; il d.l. 77/2021 lo ha portato a dodici; il testo vigente dice sei.\n\n**Fuori termine.** Se l’atto è stato ottenuto con false rappresentazioni dei fatti o dichiarazioni false o mendaci, per condotte costituenti reato accertate con sentenza passata in giudicato, si può annullare anche dopo i sei mesi (co. 2-bis).\n\n**L’alternativa.** Invece di annullare, l’amministrazione può **convalidare** l’atto annullabile, sempre con ragioni di interesse pubblico e entro un termine ragionevole (co. 2).",
    "parlato": "L'annullamento d'ufficio. È il potere dell'amministrazione di eliminare, in autotutela, un proprio provvedimento illegittimo. Lo disciplina l'articolo ventuno nonies della legge duecentoquarantuno del millenovecentonovanta, e richiede tre condizioni. Primo: l'atto deve essere illegittimo, cioè viziato da violazione di legge, eccesso di potere o incompetenza; non bastano i vizi formali che non incidono sul contenuto di un atto vincolato. Secondo: devono esserci ragioni di interesse pubblico; non basta ripristinare la legalità. Terzo: un termine ragionevole, che per le autorizzazioni e i vantaggi economici non può superare sei mesi dall'adozione, anche se l'atto si è formato per silenzio assenso. Il termine si è accorciato nel tempo: era di diciotto mesi, poi di dodici, oggi è di sei. Nel decidere, l'amministrazione deve pesare gli interessi dei destinatari e dei controinteressati. Il limite dei sei mesi cade se l'atto è stato ottenuto con dichiarazioni false o con falsa rappresentazione dei fatti, quando il reato è accertato con sentenza definitiva. In alternativa all'annullamento, l'amministrazione può convalidare l'atto, sempre per ragioni di interesse pubblico ed entro un termine ragionevole.",
    "fonti": [
      { "tipo": "norma", "id": "l241_1990_art_21_nonies" },
      { "tipo": "norma", "id": "l241_1990_art_21_nonies_al_20230627" },
      { "tipo": "norma", "id": "l241_1990_art_21_nonies_al_20190122" },
      { "tipo": "norma", "id": "l241_1990_art_21_octies" },
      { "tipo": "norma", "id": "l241_1990_art_20" }
    ],
    "collegate": ["preavviso-rigetto"]
  },
  {
    "id": "politica-gestione",
    "area": "impiego",
    "titolo": "Indirizzo politico e gestione",
    "sintesi": "Gli organi politici fissano gli obiettivi, i dirigenti gestiscono e ne rispondono: la Corte costituzionale ha protetto questa distinzione.",
    "testo": "Il d.lgs. 165/2001 separa due funzioni.\n\n**Agli organi di governo** spetta l’**indirizzo politico-amministrativo**: definire «gli obiettivi ed i programmi da attuare» e verificare che i risultati corrispondano agli indirizzi (art. 4, co. 1, d.lgs. 165/2001). Tra i loro compiti: atti normativi, direttive generali, ripartizione delle risorse tra gli uffici dirigenziali generali, nomine.\n\n**Ai dirigenti** spetta la **gestione**: «l'adozione degli atti e provvedimenti amministrativi, compresi tutti gli atti che impegnano l'amministrazione verso l'esterno», con autonomi poteri di spesa e di organizzazione. E ne rispondono: «Essi sono responsabili in via esclusiva dell'attività amministrativa, della gestione e dei relativi risultati» (art. 4, co. 2). Si può derogare solo «espressamente e ad opera di specifiche disposizioni legislative» (co. 3).\n\n**Il fondamento costituzionale.** La distinzione attua gli artt. 97 e 98 Cost.: buon andamento e imparzialità, e impiegati «al servizio esclusivo della Nazione». Con la **sentenza n. 103/2007** la Corte costituzionale ha dichiarato illegittima la cessazione automatica, per legge, degli incarichi dirigenziali generali (il cosiddetto *spoils system una tantum*): l’incarico deve assicurare «la tendenziale continuità dell’azione amministrativa e una chiara distinzione funzionale tra i compiti di indirizzo politico-amministrativo e quelli di gestione», e la cessazione senza garanzie procedimentali viola il «principio di continuità dell’azione amministrativa che è strettamente correlato a quello di buon andamento».",
    "parlato": "Indirizzo politico e gestione. Il decreto legislativo centosessantacinque del duemilauno separa due funzioni. Ai ministri e agli altri organi di governo spetta l'indirizzo politico amministrativo: definire gli obiettivi e i programmi, distribuire le risorse tra gli uffici, adottare le direttive generali, e poi verificare i risultati. Ai dirigenti spetta la gestione: adottano gli atti e i provvedimenti, compresi quelli che impegnano l'amministrazione verso l'esterno, con autonomi poteri di spesa e di organizzazione. E ne sono responsabili in via esclusiva. Si può derogare solo con una legge espressa. Questa separazione attua gli articoli novantasette e novantotto della Costituzione: buon andamento, imparzialità, e impiegati al servizio esclusivo della Nazione. La Corte costituzionale, con la sentenza centotré del duemilasette, ha dichiarato illegittima una legge che faceva cessare automaticamente tutti gli incarichi dei dirigenti generali, il cosiddetto spoils system. Secondo la Corte, l'incarico dirigenziale deve garantire la continuità dell'azione amministrativa e una chiara distinzione tra indirizzo politico e gestione; interromperlo senza garanzie viola il buon andamento.",
    "fonti": [
      { "tipo": "norma", "id": "dlgs165_2001_art_4" },
      { "tipo": "norma", "id": "cost_art_97" },
      { "tipo": "norma", "id": "cost_art_98" },
      { "tipo": "sentenza", "id": "cc_2007_103" }
    ],
    "collegate": ["concorso-pubblico", "rpct"]
  },
  {
    "id": "concorso-pubblico",
    "area": "impiego",
    "titolo": "Si entra per concorso",
    "sintesi": "Il concorso è la regola costituzionale per accedere agli impieghi pubblici; la legge può prevedere eccezioni.",
    "testo": "La regola è nella Costituzione: «Agli impieghi nelle pubbliche amministrazioni si accede mediante concorso, salvo i casi stabiliti dalla legge» (art. 97, ultimo comma, Cost.). Il concorso serve al **buon andamento** (si scelgono i più capaci) e all’**imparzialità** (nessuno è favorito).\n\n**Come si assume.** L’art. 35 d.lgs. 165/2001 prevede l’assunzione con contratto individuale di lavoro tramite procedure selettive che garantiscano «in misura adeguata l'accesso dall'esterno», oppure, per i profili che richiedono solo la scuola dell’obbligo, con l’avviamento degli iscritti nelle liste di collocamento.\n\n**I principi delle procedure** (art. 35, co. 3):\n- adeguata pubblicità e svolgimento imparziale, economico e rapido, anche con sistemi automatizzati e preselezioni;\n- «meccanismi oggettivi e trasparenti» per verificare i requisiti attitudinali e professionali;\n- pari opportunità tra lavoratrici e lavoratori;\n- decentramento delle procedure;\n- commissioni composte «esclusivamente con esperti di provata competenza», che non siano componenti dell’organo politico dell’amministrazione, non ricoprano cariche politiche e non siano rappresentanti sindacali.\n\n**Da ricordare.** Le eccezioni al concorso devono essere previste dalla legge: è la riserva dell’art. 97 Cost.",
    "parlato": "Si entra per concorso. La regola è scritta nell'ultimo comma dell'articolo novantasette della Costituzione: agli impieghi nelle pubbliche amministrazioni si accede mediante concorso, salvo i casi stabiliti dalla legge. Il concorso serve a due principi: il buon andamento, perché si scelgono i più capaci, e l'imparzialità, perché nessuno è favorito. L'articolo trentacinque del decreto legislativo centosessantacinque del duemilauno dice come si assume: con contratto individuale di lavoro, dopo procedure selettive che garantiscano in misura adeguata l'accesso dall'esterno; oppure, per i profili che richiedono solo la scuola dell'obbligo, chiamando gli iscritti nelle liste di collocamento. Le procedure devono avere adeguata pubblicità, essere imparziali, economiche e rapide, anche con preselezioni automatizzate; devono usare meccanismi oggettivi e trasparenti per verificare attitudini e competenze, rispettare le pari opportunità ed essere decentrate. Le commissioni sono composte solo da esperti di provata competenza, che non siano politici dell'amministrazione, non abbiano cariche politiche e non rappresentino i sindacati. Le eccezioni al concorso le può prevedere soltanto la legge.",
    "fonti": [
      { "tipo": "norma", "id": "cost_art_97" },
      { "tipo": "norma", "id": "dlgs165_2001_art_35" }
    ],
    "collegate": ["politica-gestione"]
  },
  {
    "id": "accesso-civico",
    "area": "anticorruzione",
    "titolo": "Accesso civico semplice e generalizzato",
    "sintesi": "Chiunque può chiedere i dati che dovevano essere pubblicati e, nei limiti di legge, ogni altro dato o documento della PA, senza motivare.",
    "testo": "Il d.lgs. 33/2013 conosce due forme di accesso civico (art. 5).\n\n**Semplice (co. 1).** Se un’amministrazione doveva pubblicare documenti, informazioni o dati e non l’ha fatto, nasce «il diritto di chiunque di richiedere i medesimi».\n\n**Generalizzato (co. 2).** Per favorire «forme diffuse di controllo sul perseguimento delle funzioni istituzionali e sull'utilizzo delle risorse pubbliche», chiunque può accedere anche ai dati e documenti **ulteriori** rispetto a quelli da pubblicare, «nel rispetto dei limiti relativi alla tutela di interessi giuridicamente rilevanti» (le eccezioni sono elencate nell’articolo successivo del decreto).\n\n**Caratteri comuni (co. 3).** Nessun requisito di legittimazione e niente motivazione: l’istanza «identifica i dati, le informazioni o i documenti richiesti e non richiede motivazione». Il rilascio è gratuito, salvo il costo di riproduzione (co. 4).\n\n**Il procedimento.** Se ci sono controinteressati, l’amministrazione li avvisa e questi hanno dieci giorni per una motivata opposizione (co. 5). Si conclude «con provvedimento espresso e motivato nel termine di trenta giorni» (co. 6).\n\n**Differenza con l’accesso documentale.** L’accesso della l. 241/1990 spetta solo a chi ha «un interesse diretto, concreto e attuale, corrispondente ad una situazione giuridicamente tutelata e collegata al documento» (art. 22): serve a difendere una posizione propria, non al controllo diffuso.",
    "parlato": "Accesso civico semplice e generalizzato. Il decreto legislativo trentatré del duemilatredici, all'articolo cinque, prevede due forme di accesso civico. La prima è l'accesso semplice: se un'amministrazione doveva pubblicare un documento o un dato sul suo sito e non l'ha fatto, chiunque può chiederlo. La seconda è l'accesso generalizzato: per favorire il controllo diffuso su come si usano le funzioni e le risorse pubbliche, chiunque può chiedere anche dati e documenti ulteriori rispetto a quelli da pubblicare, nei limiti che la legge pone a tutela di altri interessi. In entrambi i casi non servono requisiti e non bisogna motivare: basta indicare cosa si chiede. Il rilascio è gratuito, salvo il costo delle copie. Se la richiesta tocca altre persone, i controinteressati, l'amministrazione le avvisa e loro hanno dieci giorni per opporsi motivatamente. Il procedimento si chiude con un provvedimento espresso e motivato entro trenta giorni. Attenzione a non confonderlo con l'accesso ai documenti della legge duecentoquarantuno del millenovecentonovanta: quello spetta solo a chi ha un interesse diretto, concreto e attuale, collegato al documento.",
    "fonti": [
      { "tipo": "norma", "id": "dlgs33_2013_art_5" },
      { "tipo": "norma", "id": "l241_1990_art_22" }
    ],
    "collegate": ["rpct"]
  },
  {
    "id": "rpct",
    "area": "anticorruzione",
    "titolo": "Il Responsabile della prevenzione della corruzione",
    "sintesi": "Ogni amministrazione individua un RPCT, che propone il piano anticorruzione, ne verifica l’attuazione e ne risponde.",
    "testo": "La l. 190/2012 affida la prevenzione della corruzione dentro ogni amministrazione a una figura precisa: il **Responsabile della prevenzione della corruzione e della trasparenza (RPCT)**.\n\n**Chi lo nomina.** «L'organo di indirizzo individua, di norma tra i dirigenti di ruolo in servizio» il RPCT, assicurandogli funzioni e poteri adeguati «con piena autonomia ed effettività». Negli enti locali è di norma il segretario o il dirigente apicale (art. 1, co. 7, l. 190/2012).\n\n**Cosa fa.**\n- propone il piano triennale di prevenzione della corruzione, che l’organo di indirizzo adotta entro il 31 gennaio; l’elaborazione «non può essere affidata a soggetti estranei all'amministrazione» (co. 8);\n- verifica l’efficace attuazione del piano e la sua idoneità, e ne propone le modifiche; verifica con il dirigente competente la rotazione degli incarichi negli uffici più a rischio (co. 10);\n- segnala le disfunzioni all’organo di indirizzo e all’OIV e indica agli uffici disciplinari i dipendenti che non hanno attuato le misure (co. 7);\n- entro il 15 dicembre pubblica una relazione sull’attività svolta (co. 14).\n\n**Come risponde.** In caso di ripetute violazioni del piano risponde anche disciplinarmente per omesso controllo, salvo che provi di aver comunicato le misure e vigilato (co. 14). Per i dipendenti, violare le misure del piano «costituisce illecito disciplinare».\n\n**Oggi nel PIAO.** Nelle amministrazioni con più di cinquanta dipendenti la pianificazione anticorruzione confluisce nel Piano integrato di attività e organizzazione (art. 6, co. 2, lett. d, d.l. 80/2021).",
    "parlato": "Il Responsabile della prevenzione della corruzione e della trasparenza. La legge centonovanta del duemiladodici affida a questa figura la prevenzione della corruzione dentro ogni amministrazione. Lo individua l'organo di indirizzo, di norma tra i dirigenti di ruolo in servizio, garantendogli piena autonomia ed effettività; negli enti locali è di norma il segretario o il dirigente apicale. Il Responsabile propone il piano triennale anticorruzione, che l'organo di indirizzo adotta entro il trentuno gennaio, e che non può essere scritto da soggetti esterni all'amministrazione. Poi ne verifica l'attuazione e l'idoneità, propone le modifiche, controlla con i dirigenti la rotazione degli incarichi negli uffici più esposti, segnala le disfunzioni e indica agli uffici disciplinari i dipendenti che non hanno applicato le misure. Entro il quindici dicembre pubblica una relazione sull'attività svolta. Se il piano viene violato ripetutamente, il Responsabile risponde anche sul piano disciplinare, salvo che dimostri di aver comunicato le misure e vigilato. Per i dipendenti, violare le misure del piano è un illecito disciplinare. Oggi, nelle amministrazioni con più di cinquanta dipendenti, la pianificazione anticorruzione è una sezione del PIAO, il Piano integrato di attività e organizzazione.",
    "fonti": [
      { "tipo": "norma", "id": "l190_2012_art_1" },
      { "tipo": "norma", "id": "dl80_2021_art_6" }
    ],
    "collegate": ["accesso-civico", "politica-gestione"]
  },
  {
    "id": "competenze-ue",
    "area": "costituzione_ue",
    "titolo": "Attribuzione, sussidiarietà, proporzionalità",
    "sintesi": "L’Unione ha solo le competenze che le danno i trattati, e le esercita al livello e nella misura necessari.",
    "testo": "L’art. 5 TUE regola le competenze dell’Unione con tre principi.\n\n**Attribuzione: se l’Unione può agire.** «L'Unione agisce esclusivamente nei limiti delle competenze che le sono attribuite dagli Stati membri nei trattati». E il rovescio: «Qualsiasi competenza non attribuita all'Unione nei trattati appartiene agli Stati membri» (art. 5, par. 2, TUE).\n\n**Sussidiarietà: chi deve agire.** Vale solo nei settori che **non** sono di competenza esclusiva dell’Unione. L’Unione interviene «soltanto se e in quanto» gli obiettivi non possono essere conseguiti in misura sufficiente dagli Stati membri, a livello centrale, regionale o locale, ma possono essere conseguiti meglio a livello di Unione (par. 3). Sul rispetto della sussidiarietà vigilano i **parlamenti nazionali**.\n\n**Proporzionalità: quanto agire.** «Il contenuto e la forma dell'azione dell'Unione si limitano a quanto necessario per il conseguimento degli obiettivi dei trattati» (par. 4). Si applica a ogni azione dell’Unione, anche nelle competenze esclusive.\n\n**Da ricordare.** L’attribuzione delimita le competenze; sussidiarietà e proporzionalità ne regolano l’esercizio (par. 1).",
    "parlato": "Attribuzione, sussidiarietà, proporzionalità. L'articolo cinque del Trattato sull'Unione europea regola le competenze dell'Unione con tre principi, che rispondono a tre domande. Primo, il principio di attribuzione risponde alla domanda: l'Unione può agire? Solo nei limiti delle competenze che gli Stati le hanno attribuito nei trattati; tutto ciò che non è attribuito resta agli Stati membri. Secondo, il principio di sussidiarietà risponde alla domanda: chi deve agire? Vale solo nei settori che non sono di competenza esclusiva dell'Unione. Qui l'Unione interviene soltanto se gli obiettivi non possono essere raggiunti in misura sufficiente dagli Stati, né a livello centrale né a livello regionale e locale, e possono invece essere raggiunti meglio a livello europeo. Sul rispetto della sussidiarietà vigilano i parlamenti nazionali. Terzo, il principio di proporzionalità risponde alla domanda: quanto agire? Il contenuto e la forma dell'azione europea si limitano a quanto necessario per raggiungere gli obiettivi dei trattati, e questo vale per ogni azione, anche nelle competenze esclusive. In sintesi: l'attribuzione delimita le competenze, sussidiarietà e proporzionalità ne regolano l'esercizio.",
    "fonti": [
      { "tipo": "norma", "id": "tue_art_5" }
    ],
    "collegate": ["primato-ue"]
  },
  {
    "id": "primato-ue",
    "area": "costituzione_ue",
    "titolo": "Diritto UE e legge italiana: la non applicazione",
    "sintesi": "Se una legge interna contrasta con una norma UE direttamente applicabile, il giudice applica la norma UE e non applica la legge.",
    "testo": "**Il fondamento costituzionale.** L’Italia «consente, in condizioni di parità con gli altri Stati, alle limitazioni di sovranità necessarie ad un ordinamento che assicuri la pace e la giustizia fra le Nazioni» (art. 11 Cost.). Dal 2001 l’art. 117, co. 1, Cost. aggiunge che Stato e Regioni legiferano nel rispetto «dei vincoli derivanti dall'ordinamento comunitario».\n\n**La sentenza Granital.** Con la **sentenza n. 170/1984** la Corte costituzionale ha fissato il metodo ancora oggi seguito. I due ordinamenti sono «autonomi e distinti, ancorché coordinati». Perciò la legge interna incompatibile con un regolamento comunitario non viene abrogata né dichiarata illegittima: semplicemente «la legge interna non interferisce nella sfera occupata da tale atto». Il giudice comune accerta che il caso è regolato dalla norma europea e la applica: le norme interne in conflitto «non possono costituire ostacolo».\n\n**In pratica.** Niente questione di costituzionalità: il giudice (e anche l’amministrazione) **non applica** la norma interna in contrasto con la norma UE direttamente applicabile, che resta però valida per i casi che il diritto UE non copre.\n\n**Il limite: i controlimiti.** La Corte si riserva il controllo sulla legge di esecuzione del Trattato «in riferimento ai principi fondamentali del nostro ordinamento costituzionale e ai diritti inalienabili della persona umana».",
    "parlato": "Diritto dell'Unione europea e legge italiana: la non applicazione. Il fondamento è nell'articolo undici della Costituzione, per cui l'Italia consente, in condizioni di parità con gli altri Stati, alle limitazioni di sovranità necessarie per un ordinamento di pace e giustizia tra le Nazioni. Dal duemilauno anche l'articolo centodiciassette chiede a Stato e Regioni di legiferare rispettando i vincoli europei. Il metodo lo ha fissato la Corte costituzionale con la sentenza centosettanta del millenovecentottantaquattro, la sentenza Granital. Per la Corte, l'ordinamento europeo e quello italiano sono autonomi e distinti, ma coordinati. Quindi, se una legge italiana contrasta con una norma europea direttamente applicabile, come un regolamento, la legge non viene abrogata né dichiarata incostituzionale: semplicemente non si applica a quel caso, che è regolato dal diritto europeo. Il giudice comune, e anche l'amministrazione, applica la norma europea senza rivolgersi alla Corte costituzionale. Resta un limite, i cosiddetti controlimiti: la Corte può sempre controllare il rispetto dei principi fondamentali della nostra Costituzione e dei diritti inalienabili della persona.",
    "fonti": [
      { "tipo": "norma", "id": "cost_art_11" },
      { "tipo": "norma", "id": "cost_art_117" },
      { "tipo": "sentenza", "id": "cc_1984_170" }
    ],
    "collegate": ["competenze-ue"]
  }
];

// Elenco dei file con i testi delle fonti (generato da strumenti/verifica_pillole.js --scrivi).
const PILLOLE_NORME = [
  "norme/costituzione/cost_art_11.js",
  "norme/costituzione/cost_art_117.js",
  "norme/costituzione/cost_art_97.js",
  "norme/costituzione/cost_art_98.js",
  "norme/dl80_2021/dl80_2021_art_6.js",
  "norme/dlgs165_2001/dlgs165_2001_art_35.js",
  "norme/dlgs165_2001/dlgs165_2001_art_4.js",
  "norme/dlgs33_2013/dlgs33_2013_art_5.js",
  "norme/l190_2012/l190_2012_art_1.js",
  "norme/l241_1990/l241_1990_art_10_bis.js",
  "norme/l241_1990/l241_1990_art_20.js",
  "norme/l241_1990/l241_1990_art_21_nonies.js",
  "norme/l241_1990/l241_1990_art_21_nonies_al_20190122.js",
  "norme/l241_1990/l241_1990_art_21_nonies_al_20230627.js",
  "norme/l241_1990/l241_1990_art_21_octies.js",
  "norme/l241_1990/l241_1990_art_22.js",
  "norme/sentenze/cc_1984_170.js",
  "norme/sentenze/cc_2007_103.js",
  "norme/tue/tue_art_5.js"
];
