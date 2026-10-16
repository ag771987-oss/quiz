const SPIEGAZIONI = [
  {
    "id": 1,
    "corretta": "A",
    "suggerimento": "I problemi sono tre: fatturato, clima interno e clienti a rischio. Quale risposta li affronta tutti, partendo dai dati?",
    "spiegazione": "Davanti a una crisi su più fronti si premia chi **parte dall'analisi delle cause**, **coinvolge il team** e interviene su tutti i fronti critici, compresi i **clienti a rischio**, con obiettivi concreti e tempi definiti.",
    "perOpzione": {
      "A": "Analisi delle cause, coinvolgimento del team su processi e comunicazione, soluzioni con una scadenza e contatto diretto con i clienti a rischio: copre tutti i problemi descritti.",
      "B": "Punta sul marketing senza capire le cause e rimanda l'analisi interna a un secondo momento: ignora il malcontento dei dipendenti e i ritardi che minacciano le partnership.",
      "C": "Buona l'analisi e il coinvolgimento, ma interviene solo su processi decisionali e comunicazione interna: non si occupa dei clienti importanti a rischio né dei ritardi."
    },
    "nota": "Anche l'opzione che analizza e coinvolge team e responsabile commerciale è valida, ma trascura i clienti a rischio: scelta la risposta più completa."
  },
  {
    "id": 2,
    "corretta": "A",
    "suggerimento": "Hai davanti persone con esperienze molto diverse: il colloquio deve essere uguale per tutti o costruito su ciascuno?",
    "spiegazione": "Il colloquio annuale funziona se è **personalizzato**: obiettivi sfidanti per gli esperti, piano di crescita per i nuovi, e un **dialogo bidirezionale** con feedback dettagliati.",
    "perOpzione": {
      "A": "Differenzia obiettivi e percorso in base all'esperienza, parte dalle esigenze di ciascuno e lascia spazio a domande e dubbi: approccio di sviluppo e ascolto.",
      "B": "Tratta i nuovi con controllo stretto e attività limitate, rinviando la crescita a progressi futuri: poca fiducia e nessun piano di sviluppo condiviso.",
      "C": "Centrato sul premio dei migliori e su un'unica attività assegnata ai junior: manca l'ascolto delle esigenze individuali e il confronto sugli obiettivi."
    }
  },
  {
    "id": 3,
    "corretta": "B",
    "suggerimento": "Il cambiamento è deciso dalla Direzione e arriva in un periodo critico: resistere, subirlo o guidarlo con il team?",
    "spiegazione": "Di fronte a un cambiamento deciso dall'alto il dirigente lo **sostiene e lo guida**: ne comunica i benefici, **ascolta le perplessità** del team e lo introduce **gradualmente**.",
    "perOpzione": {
      "A": "Atteggiamento di resistenza basato su esperienze passate: chiede di rivedere la decisione invece di gestirne l'introduzione.",
      "B": "Accoglie l'innovazione, la spiega al team, ascolta i dubbi e la applica gradualmente: comunicazione, coinvolgimento e gradualità.",
      "C": "Accetta la decisione in modo passivo e mette le mani avanti chiedendo più tempo: non comunica il valore del cambiamento né coinvolge il team."
    }
  },
  {
    "id": 4,
    "corretta": "A",
    "suggerimento": "Il tempo stringe e le strutture interne non bastano: chi deve prendere la decisione, e su quali basi?",
    "spiegazione": "Il dirigente orientato al risultato **verifica i dati** (margini e volumi) e, se ci sono margini, **si assume la responsabilità** della decisione nei tempi richiesti, invece di limitarsi a fare pressione o a lamentarsi.",
    "perOpzione": {
      "A": "Confronto con i responsabili, analisi di margini e volumi e, constatato lo spazio di manovra, decisione presa assumendosene la responsabilità: rispetta la scadenza su basi oggettive.",
      "B": "Si basa su un'impressione e sulla pressione verso i colleghi: non garantisce un'offerta sostenibile né decide in prima persona.",
      "C": "Prevale la delusione verso i colleghi e si limita a valutare se l'offerta è ancora possibile: nessuna decisione concreta a ridosso della scadenza."
    },
    "nota": "Situazionale con opzioni vicine; preferita quella che unisce analisi dei dati e assunzione di responsabilità."
  },
  {
    "id": 5,
    "corretta": "C",
    "suggerimento": "Tempi stretti, requisiti precisi del cliente: come tieni insieme qualità e scadenza senza rinunciare a nessuna delle due?",
    "spiegazione": "Con progetti a scadenza fissa serve una **pianificazione realistica** condivisa con il team, la definizione dei **requisiti essenziali** e **scadenze intermedie** per monitorare e correggere per tempo.",
    "perOpzione": {
      "A": "Cerca un compromesso tra materiali e design innovativo, cioè rinuncia in parte a requisiti che il committente ha posto come essenziali; manca un sistema di monitoraggio dei tempi.",
      "B": "Sacrifica qualità e materiali (che dovevano essere riciclati) pur di consegnare in tempo ed esternalizza parti del lavoro: rischia di non rispettare le richieste del brand.",
      "C": "Piano chiaro e realistico con il team, requisiti essenziali definiti e scadenze intermedie di controllo: tiene insieme tempi e modalità richieste."
    }
  },
  {
    "id": 6,
    "corretta": "B",
    "suggerimento": "Un imprevisto minaccia la consegna: cosa serve per salvare la giornata, oltre a trovare idee alternative?",
    "spiegazione": "Nella gestione di un imprevisto si premia chi **agisce subito sulle risorse** (recupero e integrazione dei mezzi), **coinvolge il team** per adattare il lavoro e **informa con trasparenza** il committente sulle misure adottate.",
    "perOpzione": {
      "A": "Coinvolge il team e comunica con trasparenza, ma si limita a ripiegare su alternative (post-produzione, interni) senza recuperare attrezzature e scenografia.",
      "B": "Coordina il recupero, chiede rinforzi alla sede, adatta il girato con il team e informa la produzione delle misure prese: azione concreta, collaborativa e trasparente.",
      "C": "Nasconde il problema alla produzione, si concentra sui set futuri e decide da solo: mancano trasparenza e coinvolgimento."
    },
    "nota": "Anche l'opzione con soluzioni alternative e comunicazione trasparente è difendibile; preferita quella che recupera le attrezzature e garantisce i tempi."
  },
  {
    "id": 7,
    "corretta": "B",
    "suggerimento": "Prima di scegliere le leve per trattenere i talenti, sai davvero perché se ne vanno?",
    "spiegazione": "Per risolvere un problema strutturale come il turnover si parte da un'**analisi del contesto** (interno ed esterno) e su quella si costruisce una strategia che agisca su **sviluppo di carriera, incentivi e senso di appartenenza**.",
    "perOpzione": {
      "A": "Interviene subito su condizioni di lavoro e incentivi senza un'analisi preliminare delle cause: le misure possono non colpire il vero problema.",
      "B": "Analisi approfondita, poi strategia su reputazione esterna e su carriera, incentivi e appartenenza interni: approccio fondato sui dati e completo.",
      "C": "Si concentra sull'attrarre nuovi candidati, mentre il problema è trattenere chi già lavora in azienda."
    }
  },
  {
    "id": 8,
    "corretta": "C",
    "suggerimento": "Esperti e neolaureati hanno bisogni diversi: il colloquio deve servire a controllare o a far crescere?",
    "spiegazione": "Un buon colloquio di inizio anno **condivide gli obiettivi** con gli esperti, punta sulla **crescita** dei nuovi con **delega progressiva** e dà spazio a domande e feedback.",
    "perOpzione": {
      "A": "Controllo stretto e attività limitate per i junior, crescita rimandata: poca delega e poco sviluppo.",
      "B": "Centrato su premi e su un'unica attività ai neolaureati, trascurando gli esperti: manca un piano personalizzato per tutti.",
      "C": "Obiettivi decisi insieme agli esperti, crescita e delega progressiva ai nuovi, feedback dettagliati e spazio al confronto: sviluppo personalizzato."
    }
  },
  {
    "id": 9,
    "corretta": "C",
    "suggerimento": "La Direzione ha deciso un cambiamento importante: come puoi trasformarlo in un'opportunità per il tuo team?",
    "spiegazione": "Il dirigente fa da **ponte** tra Direzione e collaboratori: sostiene l'innovazione, ne **comunica il valore** e accompagna la transizione con **formazione e supporto**.",
    "perOpzione": {
      "A": "Sostiene il cambiamento, ma la formazione resta una promessa futura e la transizione parte senza un vero accompagnamento.",
      "B": "Si oppone e chiede di accantonare l'iniziativa per non modificare abitudini consolidate: resistenza al cambiamento.",
      "C": "Valorizza l'innovazione, la comunica al team e garantisce formazione e supporto durante la transizione: guida attiva del cambiamento."
    }
  },
  {
    "id": 10,
    "corretta": "B",
    "suggerimento": "Una decisione che tocca produzione, vendite, marketing e logistica: chi dovrebbe essere coinvolto?",
    "spiegazione": "Le decisioni che impattano più funzioni si prendono **coinvolgendo tutti gli interessati**, in modo **trasparente**, e assumendosene la **responsabilità**.",
    "perOpzione": {
      "A": "Decide prima e valuta dopo risorse, pubblico e difficoltà logistiche: ordine invertito e nessun coinvolgimento.",
      "B": "Coinvolge produzione, marketing, vendite e logistica, esamina tutti gli aspetti e decide in modo trasparente assumendosi la responsabilità.",
      "C": "Coinvolge solo due funzioni (esclude la produzione, che è la più toccata) e chiude con una decisione individuale."
    }
  },
  {
    "id": 11,
    "corretta": "B",
    "suggerimento": "Obiettivi sfidanti: basta comunicarli e incentivare, o serve anche altro durante il percorso?",
    "spiegazione": "Per raggiungere obiettivi sfidanti si premia chi **coinvolge il team nella definizione degli obiettivi**, li rende **specifici**, **monitora** le performance e interviene con **feedback e misure correttive**.",
    "perOpzione": {
      "A": "Comunica obiettivi già decisi e punta sugli incentivi: manca il coinvolgimento nella definizione e il monitoraggio dei risultati.",
      "B": "Obiettivi condivisi e specifici, strategia mirata, monitoraggio costante, feedback e misure correttive: ciclo completo di gestione della performance.",
      "C": "Si affida alla campagna promozionale e all'esperienza dei venditori senza guidarli né monitorare: troppo passivo."
    }
  },
  {
    "id": 12,
    "corretta": "A",
    "suggerimento": "Per un'associazione di volontariato, che differenza c'è tra informare i volontari e renderli protagonisti?",
    "spiegazione": "Nelle iniziative di sensibilizzazione si premia chi costruisce **alleanze esterne** su obiettivi comuni e insieme **coinvolge attivamente** lo staff interno, con formazione e partecipazione, non solo informazione.",
    "perOpzione": {
      "A": "Connessioni con scuole e datori di lavoro su obiettivi comuni e coinvolgimento attivo dei volontari con workshop e formazione: partecipazione reale.",
      "B": "Approccio equilibrato, ma con i volontari si limita a comunicazioni e incontri informativi: coinvolgimento più passivo.",
      "C": "Rimanda il coinvolgimento dello staff interno a dopo aver stabilizzato i contatti esterni: trascura le persone su cui l'iniziativa si regge."
    },
    "nota": "Le due opzioni che lavorano in parallelo su esterni e volontari sono vicine; preferita quella con formazione e coinvolgimento attivo rispetto alla sola comunicazione informativa."
  },
  {
    "id": 13,
    "corretta": "D",
    "suggerimento": "Controlla parola per parola: il brano dice davvero «unicamente», «successo», «diffusione»? A cosa attribuisce la nascita dell'industria moderna?",
    "spiegazione": "Il brano afferma che l'uso del **kinetoscopio e del Vitascope** contribuì alla nascita dell'industria cinematografica moderna; il **cinema sonoro**, invece, rese obsoleti i primi dispositivi. Nessuna delle affermazioni proposte è quindi sostenuta dal testo.",
    "perOpzione": {
      "A": "Il brano non attribuisce il successo dell'industria alla registrazione sonora: dice solo che con essa Edison mantenne la sua influenza.",
      "B": "«Unicamente» è smentito dal testo: alla nascita contribuirono sia il kinetoscopio sia il Vitascope.",
      "C": "Il cinema sonoro è citato come causa dell'obsolescenza dei primi dispositivi, non della diffusione dell'industria.",
      "D": "Corretta: nessuna delle altre affermazioni trova riscontro nel brano."
    }
  },
  {
    "id": 14,
    "corretta": "B",
    "suggerimento": "Rileggi la frase sul 1893 e West Orange: che cosa offriva agli spettatori il primo kinetoscopio?",
    "spiegazione": "Il brano dice che il primo kinetoscopio, installato nel 1893, offriva «la visione di **brevi filmati di pochi secondi**». La proiezione su grande schermo arrivò solo con il **Vitascope** (1896).",
    "perOpzione": {
      "A": "Fu installato nel laboratorio di Edison a West Orange; il cinema sonoro arrivò solo negli anni '20.",
      "B": "Corretta: il testo parla di «brevi filmati di pochi secondi».",
      "C": "La registrazione sonora fu sviluppata molto dopo, in risposta al cinema sonoro, non grazie al primo kinetoscopio.",
      "D": "La proiezione su grande schermo è la novità del Vitascope, non del kinetoscopio."
    }
  },
  {
    "id": 15,
    "corretta": "C",
    "suggerimento": "Cerca nel brano il collegamento logico («in risposta a…») che introduce la registrazione sonora su disco.",
    "spiegazione": "Secondo il brano Edison sviluppò la registrazione sonora su disco sincronizzata con il film **«in risposta a questa sfida»**, cioè all'avvento del **cinema sonoro** negli anni '20.",
    "perOpzione": {
      "A": "È il contrario: fu sviluppato dopo, come reazione al cinema sonoro.",
      "B": "Non possono essere tutte esatte: due affermazioni sono smentite o non ricavabili dal testo.",
      "C": "Corretta: il testo la presenta come risposta alla sfida del cinema sonoro.",
      "D": "Il brano non dice che il processo prevedesse l'uso di Vitascope e kinetoscopio; anzi, quei dispositivi erano diventati obsoleti."
    }
  },
  {
    "id": 16,
    "corretta": "B",
    "suggerimento": "Distingui ciò che il WWW ha causato da ciò su cui si è basato. Che cosa ha favorito la sua diffusione secondo il brano?",
    "spiegazione": "Il brano lega l'**esplosione dell'uso** negli anni successivi alla creazione di **browser** come Netscape Navigator e Internet Explorer. L'ipertesto è invece il **presupposto** del Web, non una sua conseguenza.",
    "perOpzione": {
      "A": "Non sono tutte vere: almeno due affermazioni sono contraddette dal testo.",
      "B": "Corretta: secondo il brano l'uso esplose con la creazione di browser come Netscape Navigator e Internet Explorer.",
      "C": "Rapporto invertito: è il concetto di ipertesto (di Ted Nelson) ad aver portato al Web, non viceversa.",
      "D": "«Unicamente» è smentito: il brano parla di comunicazione, ma anche di condivisione di informazioni, conoscenze, culture e idee."
    },
    "nota": "Il brano parla dell'esplosione dell'«uso diffuso di internet» grazie ai browser; il collegamento con l'espansione del Web è comunque l'unico ricavabile."
  },
  {
    "id": 17,
    "corretta": "B",
    "suggerimento": "Attieniti a ciò che il brano afferma esplicitamente sull'effetto complessivo di internet e del lavoro di Berners-Lee.",
    "spiegazione": "Il brano afferma che il lavoro di Berners-Lee ha aperto la strada a innovazioni che hanno **trasformato radicalmente la società e l'economia globali**: è l'unica affermazione ricavabile in modo diretto sull'impatto di internet.",
    "perOpzione": {
      "A": "Il brano non parla mai di velocità delle comunicazioni: è una conoscenza esterna.",
      "B": "Corretta: il testo parla di trasformazione radicale della società e dell'economia globali.",
      "C": "Nel brano a rivoluzionare il modo di accedere alle informazioni è il «concetto di ipertesto», non internet in quanto tale.",
      "D": "Falsa: almeno un'affermazione è sostenuta dal testo."
    },
    "nota": "Domanda ambigua: il cambiamento nell'accesso alle informazioni è attribuito dal brano al «concetto di ipertesto», non a internet; la velocità delle comunicazioni non è mai citata."
  },
  {
    "id": 18,
    "corretta": "A",
    "suggerimento": "Su cosa si basava l'idea di Berners-Lee? E cosa dice l'ultima frase del brano?",
    "spiegazione": "Il brano dice che l'idea del Web **si basava sul concetto di ipertesto** (di Ted Nelson) e che l'ipertesto **ha rivoluzionato il modo in cui accediamo e interagiamo con le informazioni**.",
    "perOpzione": {
      "A": "Corretta: unisce due affermazioni presenti nel testo (base del Web e rivoluzione nell'accesso alle informazioni).",
      "B": "Il brano afferma l'opposto: internet «non è solo una rete di computer».",
      "C": "Il testo dice che il lavoro di Berners-Lee ha facilitato lo scambio di conoscenze, non che l'ipertesto lo abbia impedito.",
      "D": "L'ipertesto fu sviluppato da Ted Nelson; il CERN è il luogo del primo sito web."
    }
  },
  {
    "id": 19,
    "corretta": "D",
    "suggerimento": "Guarda colore, contorno e soprattutto la posizione dell'apertura nel cerchio: come ruota da una figura all'altra lungo le diagonali?",
    "spiegazione": "Ogni riga contiene una figura **bianca, grigia e nera** e i tre contorni (**pentagono, esagono, quadrato**): manca quindi una figura **nera nell'esagono**. L'apertura del cerchio ruota di **45° in senso antiorario** lungo le diagonali (destra, alto-destra, alto, alto-sinistra) alternando tacca a V e quarto mancante: la figura finale ha la **tacca a V rivolta a sinistra**.",
    "perOpzione": {
      "A": "La figura 4 è un pentagono, contorno già presente nell'ultima riga.",
      "B": "La figura 5 è un quadrato, già presente nell'ultima riga, e ha la tacca in alto.",
      "C": "La figura 2 è un quadrato (con elementi estranei agli angoli) e ha la tacca in alto.",
      "D": "Corretta: la figura 1 è nera, dentro un esagono, con la tacca a V rivolta a sinistra, il passo successivo della rotazione.",
      "E": "La figura 3 è nera nell'esagono, ma le manca il quarto in basso a sinistra: rotazione e forma dell'apertura non sono quelle attese."
    }
  },
  {
    "id": 20,
    "corretta": "B",
    "suggerimento": "Osserva tre elementi per riga: la grandezza del fiocco al centro, la forma del contorno e il colore dei cerchietti agli angoli.",
    "spiegazione": "In ogni riga il **fiocco centrale ha la stessa dimensione** (grande, medio, piccolo) e compaiono una volta ciascuno **quadrato, pentagono e triangolo** e i cerchietti **grigi, neri e bianchi**. Nell'ultima riga mancano il **quadrato** e i **cerchietti neri**, con il fiocco piccolo.",
    "perOpzione": {
      "A": "La figura 3 ha quadrato e fiocco piccolo, ma i cerchietti bianchi, già presenti nell'ultima riga.",
      "B": "Corretta: la figura 2 ha quadrato, fiocco piccolo e cerchietti neri.",
      "C": "La figura 4 è un pentagono con cerchietti grigi: entrambi già presenti nell'ultima riga.",
      "D": "La figura 1 aggiunge un cerchio e delle diagonali estranee alla serie e ha il fiocco grande.",
      "E": "La figura 5 ha il fiocco grande (della prima riga) e cerchietti grigi."
    }
  },
  {
    "id": 21,
    "corretta": "B",
    "suggerimento": "Per ogni riga guarda la dimensione del fiore centrale, la forma del contorno e il colore dei cerchietti.",
    "spiegazione": "Ogni riga ha il **fiore della stessa grandezza** (grande, medio, piccolo) e contiene una volta ciascuno **quadrato, pentagono e cerchio** e i cerchietti **grigi, neri e bianchi**. Nell'ultima riga mancano il **quadrato** e i **cerchietti neri**, con il fiore piccolo.",
    "perOpzione": {
      "A": "La figura 3 ha quadrato e fiore piccolo, ma cerchietti bianchi, già presenti nell'ultima riga.",
      "B": "Corretta: la figura 2 ha quadrato, fiore piccolo e cerchietti neri.",
      "C": "La figura 5 ha il fiore grande della prima riga e cerchietti grigi.",
      "D": "La figura 1 sovrappone cerchio, quadrato e diagonali e ha il fiore grande: elementi estranei alla serie.",
      "E": "La figura 4 è un pentagono con cerchietti grigi: entrambi già presenti nell'ultima riga."
    }
  },
  {
    "id": 22,
    "corretta": "D",
    "suggerimento": "Guarda i lati del quadrato nelle prime due colonne di ogni riga e confrontali con la terza; poi controlla cosa resta costante nell'ultima riga.",
    "spiegazione": "In ogni riga la terza figura ha il **quadrato completo**, ottenuto unendo i lati presenti nelle prime due (a ciascuna manca un lato diverso). Nell'ultima riga gli altri elementi restano costanti: **quattro rombi**, **cerchio nero centrale**, **quattro cerchi esterni** e tratto sottile.",
    "perOpzione": {
      "A": "La figura 2 ha il quadrato completo ma in tratto spesso e senza i cerchi esterni presenti in tutta l'ultima riga.",
      "B": "La figura 5 ha solo due rombi, mentre l'ultima riga ne ha sempre quattro.",
      "C": "La figura 1 sovrappone un esagono e ha due soli rombi: elementi estranei.",
      "D": "Corretta: la figura 4 ha quadrato completo, quattro rombi, cerchio centrale e quattro cerchi esterni.",
      "E": "La figura 3 è uguale alla seconda dell'ultima riga: il quadrato è ancora aperto su un lato."
    }
  },
  {
    "id": 23,
    "corretta": "B",
    "suggerimento": "Conta, riga per riga, i pallini e i lati disegnati di ogni riquadro: c'è un totale che si ripete?",
    "spiegazione": "In ogni riga la **somma dei pallini è 8** e la **somma dei lati disegnati è 8**. Nell'ultima riga ci sono 1+4 pallini e 4+1 lati: la figura mancante deve avere **3 pallini e 3 lati**.",
    "perOpzione": {
      "A": "La figura 4 ha 3 pallini ma solo 2 lati (in alto e a sinistra).",
      "B": "Corretta: la figura 5 ha 3 pallini e 3 lati (sopra, a sinistra e sotto).",
      "C": "La figura 2 ha 3 pallini ma solo 2 lati (sopra e sotto).",
      "D": "La figura 1 aggiunge un'ellisse estranea e ha solo 2 lati.",
      "E": "La figura 3 ha 4 pallini e un solo lato: è identica alla seconda figura dell'ultima riga."
    }
  },
  {
    "id": 24,
    "corretta": "D",
    "suggerimento": "Confronta gli spicchi di cerchio mancanti nelle prime due figure di ogni riga con quelli della terza.",
    "spiegazione": "In ogni riga la terza figura **perde entrambi gli spicchi** che mancano nelle prime due (a sinistra e a destra, poi a destra e in basso). Nell'ultima riga mancano in alto e a sinistra: la figura finale ha solo gli **spicchi a destra e in basso**, con **quattro rombi**, **cerchio centrale** e **quattro pallini agli angoli** come il resto della riga.",
    "perOpzione": {
      "A": "La figura 5 ha tre spicchi, nessun cerchio centrale e tre soli rombi.",
      "B": "La figura 2 ha gli spicchi giusti ma solo due pallini agli angoli, mentre l'ultima riga ne ha sempre quattro.",
      "C": "La figura 1 ha il cerchio completo con un quadrato sovrapposto e nessun cerchio centrale.",
      "D": "Corretta: la figura 4 ha solo gli spicchi a destra e in basso, quattro rombi, cerchio centrale e quattro pallini.",
      "E": "La figura 3 ha ancora lo spicchio in alto: manca solo quello a sinistra."
    }
  },
  {
    "id": 25,
    "corretta": "C",
    "suggerimento": "Qual è l'organo di consulenza giuridico-amministrativa del Governo che si pronuncia sugli schemi di regolamento?",
    "spiegazione": "I **regolamenti governativi** sono adottati con DPR, previa deliberazione del Consiglio dei ministri, **sentito il parere del Consiglio di Stato** (art. 17, l. 400/1988): un parere obbligatorio ma non vincolante.",
    "perOpzione": {
      "A": "Il Presidente della Repubblica emana il regolamento con decreto, ma non rende un parere preventivo.",
      "B": "La Corte dei conti interviene con il controllo preventivo di legittimità sull'atto, non con un parere consultivo sullo schema.",
      "C": "Corretta: sugli schemi di regolamento è obbligatorio il parere del Consiglio di Stato."
    },
    "riferimenti": [
      {
        "normaId": "l400_1988_art_17"
      }
    ]
  },
  {
    "id": 26,
    "corretta": "B",
    "suggerimento": "Distingui il controllo di legittimità della richiesta (firme, regolarità) da quello di ammissibilità del quesito: chi fa cosa?",
    "spiegazione": "La **legittimità** della richiesta di referendum abrogativo è verificata dall'**Ufficio centrale per il referendum presso la Corte di cassazione**; l'**ammissibilità** del quesito spetta invece alla **Corte costituzionale** (l. 352/1970).",
    "perOpzione": {
      "A": "Presso la Corte costituzionale non esiste un ufficio centrale per il referendum: la Corte giudica sull'ammissibilità, non sulla legittimità della richiesta.",
      "B": "Corretta: è l'Ufficio centrale costituito presso la Corte di cassazione.",
      "C": "Il Presidente della Repubblica indice il referendum, ma non ha alcun ufficio che ne giudichi la legittimità."
    }
  },
  {
    "id": 27,
    "corretta": "A",
    "suggerimento": "La questione di fiducia è un atto che impegna l'intero Governo: quale organo collegiale deve essere d'accordo?",
    "spiegazione": "La questione di fiducia è posta dal Presidente del Consiglio **previo assenso del Consiglio dei ministri** (l. 400/1988), perché impegna la **responsabilità collegiale** del Governo davanti alle Camere.",
    "perOpzione": {
      "A": "Corretta: l'assenso è espresso dal Consiglio dei ministri.",
      "B": "Il Presidente della Repubblica non interviene nei rapporti fiduciari tra Governo e Parlamento sulla singola questione di fiducia.",
      "C": "Il Ministro della giustizia non ha alcun ruolo in questa procedura."
    }
  },
  {
    "id": 28,
    "corretta": "A",
    "suggerimento": "La legge sul procedimento amministrativo, dopo la riforma del 2020, indica due principi che reggono i rapporti tra cittadino e PA.",
    "spiegazione": "L'art. 1, comma 2-bis, della **l. 241/1990** (introdotto dal d.l. 76/2020) stabilisce che i rapporti tra cittadino e PA sono improntati ai principi della **collaborazione e della buona fede**.",
    "perOpzione": {
      "A": "Corretta: è la formula dell'art. 1, comma 2-bis, l. 241/1990.",
      "B": "Gli atti amministrativi lesivi sono autoritativi: non richiedono il consenso del destinatario.",
      "C": "Le controversie su questi rapporti rientrano proprio nella giurisdizione del giudice amministrativo."
    },
    "riferimenti": [
      {
        "normaId": "l241_1990_art_1"
      }
    ]
  },
  {
    "id": 29,
    "corretta": "B",
    "suggerimento": "Quando la PA non esercita poteri autoritativi, quale diritto applica di regola?",
    "spiegazione": "Per l'art. 1, comma 1-bis, della **l. 241/1990**, nell'adozione di atti di **natura non autoritativa** la PA **agisce secondo le norme di diritto privato**, salvo che la legge disponga diversamente.",
    "perOpzione": {
      "A": "I vincoli di bilancio valgono per tutta l'attività della PA, autoritativa o no.",
      "B": "Corretta: è il testo dell'art. 1, comma 1-bis, l. 241/1990.",
      "C": "La regola è la capacità generale di diritto privato, non un elenco tassativo di atti consentiti."
    },
    "riferimenti": [
      {
        "normaId": "l241_1990_art_1"
      }
    ]
  },
  {
    "id": 30,
    "corretta": "B",
    "suggerimento": "L'interesse legittimo si difende solo in giudizio? E il risarcimento è escluso?",
    "spiegazione": "L'interesse legittimo è tutelato sia nel **procedimento** (partecipazione, l. 241/1990) sia in **giudizio**, anche con l'**azione risarcitoria** (art. 30 c.p.a.; dopo Cass. SU 500/1999).",
    "perOpzione": {
      "A": "Esclude la tutela giurisdizionale, garantita dagli artt. 24 e 113 Cost.",
      "B": "Corretta: partecipazione al procedimento e azione in giudizio, anche risarcitoria.",
      "C": "La tutela non è subordinata all'impossibilità del ristoro risarcitorio: il risarcimento è anzi una delle forme di tutela."
    },
    "riferimenti": [
      {
        "normaId": "cpa_art_30"
      },
      {
        "normaId": "cost_art_24"
      },
      {
        "normaId": "cost_art_113"
      }
    ]
  },
  {
    "id": 31,
    "corretta": "C",
    "suggerimento": "La riforma del 2020 ha voluto evitare che, dopo una sentenza di annullamento, la PA «scopra» ogni volta nuovi motivi di diniego.",
    "spiegazione": "L'art. 10-bis della **l. 241/1990**, modificato dal d.l. 76/2020, dispone che in caso di annullamento in giudizio del diniego, nel riesercitare il potere la PA **non può addurre per la prima volta motivi ostativi già emergenti dall'istruttoria** del provvedimento annullato.",
    "perOpzione": {
      "A": "La norma non consente di addurli «una volta»: li vieta se non erano stati indicati prima.",
      "B": "Non serve alcuna autorizzazione della sentenza: la regola è fissata dalla legge.",
      "C": "Corretta: è il divieto introdotto all'art. 10-bis, l. 241/1990."
    },
    "riferimenti": [
      {
        "normaId": "l241_1990_art_10_bis"
      }
    ]
  },
  {
    "id": 32,
    "corretta": "B",
    "suggerimento": "La SCIA è un atto del privato o un provvedimento della PA? Come si tutela il terzo che si ritiene leso?",
    "spiegazione": "La **SCIA** è un atto del privato: consente di avviare l'attività **dalla data di presentazione**. Per l'art. 19, comma 6-ter, **l. 241/1990** non costituisce **provvedimento tacito direttamente impugnabile**: il terzo sollecita le verifiche della PA e può agire contro l'inerzia.",
    "perOpzione": {
      "A": "L'attività può iniziare dalla data di presentazione; i 60 giorni (30 in edilizia) sono il termine per i controlli della PA.",
      "B": "Corretta: lo prevede espressamente l'art. 19, comma 6-ter, l. 241/1990.",
      "C": "L'avvio dell'attività non è subordinato al pagamento di un'imposta di registro."
    },
    "riferimenti": [
      {
        "normaId": "l241_1990_art_19"
      }
    ]
  },
  {
    "id": 33,
    "corretta": "A",
    "suggerimento": "Ricorda le categorie elencate dal TFUE (artt. 2-6): quale delle tre etichette non vi compare?",
    "spiegazione": "Il TFUE individua competenze **esclusive**, **concorrenti** e di **sostegno, coordinamento o completamento**, oltre al coordinamento delle politiche economiche e alla PESC. Le «competenze trasversali» **non sono una categoria dei trattati**.",
    "perOpzione": {
      "A": "Corretta: la categoria delle competenze «trasversali» non è prevista dai trattati.",
      "B": "Le competenze concorrenti sono previste dall'art. 2, par. 2, e dall'art. 4 TFUE.",
      "C": "Le competenze di sostegno, coordinamento o completamento sono previste dagli artt. 2, par. 5, e 6 TFUE."
    },
    "riferimenti": [
      {
        "normaId": "tfue_art_2"
      },
      {
        "normaId": "tfue_art_4"
      },
      {
        "normaId": "tfue_art_6"
      }
    ]
  },
  {
    "id": 34,
    "corretta": "B",
    "suggerimento": "L'art. 6 TUE parla di due documenti diversi: la Carta dei diritti fondamentali e la CEDU. Quale ha valore di trattato e cosa si dice dell'altra?",
    "spiegazione": "L'art. 6 TUE riconosce alla **Carta dei diritti fondamentali** lo stesso valore giuridico dei trattati e stabilisce che l'Unione **aderisce alla CEDU** (par. 2); i diritti della CEDU sono inoltre **principi generali** del diritto UE (par. 3).",
    "perOpzione": {
      "A": "Lo stesso valore dei trattati è riconosciuto alla Carta dei diritti fondamentali, non alla CEDU.",
      "B": "Corretta: è la formula dell'art. 6, par. 2, TUE.",
      "C": "L'adesione è già prevista dal trattato e l'accordo segue la procedura dell'art. 218 TFUE (Consiglio all'unanimità), non una decisione del Consiglio europeo a maggioranza qualificata."
    },
    "nota": "L'adesione prevista dall'art. 6, par. 2, TUE non è ancora perfezionata; la risposta riprende la formula del trattato.",
    "riferimenti": [
      {
        "normaId": "tue_art_6"
      },
      {
        "normaId": "tfue_art_218"
      }
    ]
  },
  {
    "id": 35,
    "corretta": "A",
    "suggerimento": "Chi siede nel Consiglio quando si discute di agricoltura? E quando si discute di economia?",
    "spiegazione": "Il **Consiglio dell'UE** è composto da un rappresentante di ciascuno Stato **a livello ministeriale**: il ministro presente cambia in base alla **materia all'ordine del giorno** (formazioni del Consiglio).",
    "perOpzione": {
      "A": "Corretta: i membri variano a seconda della formazione e dei temi trattati.",
      "B": "Il numero dei membri è fisso: un rappresentante per Stato membro.",
      "C": "Il Consiglio non prevede delegazioni del Parlamento europeo nella sua composizione."
    }
  },
  {
    "id": 36,
    "corretta": "C",
    "suggerimento": "Se il prezzo di B sale e la domanda di A aumenta, che relazione c'è tra i due beni?",
    "spiegazione": "L'**elasticità incrociata** misura la variazione della domanda di un bene al variare del prezzo di un altro. Se è **positiva** i beni sono **sostituti**; se è **negativa** sono **complementi**.",
    "perOpzione": {
      "A": "I beni di prima necessità si definiscono in base all'elasticità rispetto al reddito, non all'elasticità incrociata.",
      "B": "Per i complementi l'elasticità incrociata è negativa: se B rincara si consuma meno anche A.",
      "C": "Corretta: un aumento del prezzo di B sposta la domanda verso A."
    }
  },
  {
    "id": 37,
    "corretta": "A",
    "suggerimento": "Qual è la definizione di «lungo periodo» in microeconomia?",
    "spiegazione": "Il **lungo periodo** è l'orizzonte in cui l'impresa può modificare **tutti i fattori produttivi**; nel **breve periodo** almeno un fattore (tipicamente il capitale) è fisso.",
    "perOpzione": {
      "A": "Corretta: è proprio la definizione di lungo periodo.",
      "B": "È il contrario: nel lungo periodo nessun fattore è fisso.",
      "C": "Nel breve periodo almeno un fattore è fisso."
    }
  },
  {
    "id": 38,
    "corretta": "C",
    "suggerimento": "Quando il costo marginale è sotto il costo medio, il medio scende; quando è sopra, sale. Dove si incontrano?",
    "spiegazione": "La curva del **costo marginale** interseca quella del **costo medio nel punto di minimo** di quest'ultimo: finché CMg < CMe il costo medio diminuisce, quando CMg > CMe aumenta.",
    "perOpzione": {
      "A": "L'intersezione avviene nel minimo del costo medio; il costo marginale in quel punto è già crescente.",
      "B": "Il costo marginale non interseca il costo medio nel suo punto di massimo.",
      "C": "Corretta: il costo marginale taglia il costo medio nel suo minimo."
    }
  },
  {
    "id": 39,
    "corretta": "C",
    "suggerimento": "Il primo teorema del benessere collega concorrenza perfetta e un noto criterio di efficienza.",
    "spiegazione": "Il **primo teorema dell'economia del benessere** afferma che, in assenza di fallimenti del mercato, ogni equilibrio di **concorrenza perfetta** è **Pareto-efficiente**.",
    "perOpzione": {
      "A": "Il second best riguarda situazioni con distorsioni non eliminabili, non l'equilibrio concorrenziale del primo teorema.",
      "B": "Il teorema afferma il contrario: l'allocazione concorrenziale è efficiente.",
      "C": "Corretta: l'equilibrio concorrenziale è Pareto-ottimale."
    }
  },
  {
    "id": 40,
    "corretta": "A",
    "suggerimento": "Una politica monetaria restrittiva sposta la LM: in che direzione, e cosa succede a tasso e reddito?",
    "spiegazione": "Una **riduzione dell'offerta di moneta** sposta la **LM verso sinistra/l'alto**: il **tasso di interesse sale**, gli investimenti calano e il **reddito di equilibrio diminuisce**. La IS non si sposta.",
    "perOpzione": {
      "A": "Corretta: tasso di interesse più alto e reddito più basso.",
      "B": "Il tasso aumenta e la IS non si muove: la politica monetaria agisce sulla LM.",
      "C": "La IS non si sposta e il reddito diminuisce, non aumenta."
    }
  },
  {
    "id": 41,
    "corretta": "B",
    "suggerimento": "La curva AS descrive il comportamento delle imprese nel fissare prezzi e produzione: da quale mercato dipende il costo del lavoro?",
    "spiegazione": "L'**offerta aggregata** deriva dal funzionamento dei **mercati dei fattori produttivi**, in particolare del **mercato del lavoro** (formazione di salari e prezzi). La **domanda aggregata** deriva invece da mercato dei beni e della moneta.",
    "perOpzione": {
      "A": "Mercato della moneta e politica monetaria stanno alla base della domanda aggregata (AD), non dell'offerta.",
      "B": "Corretta: l'AS dipende dal funzionamento dei mercati dei fattori, soprattutto del lavoro.",
      "C": "Mercato dei beni e politica fiscale sono anch'essi alla base della domanda aggregata."
    }
  },
  {
    "id": 42,
    "corretta": "A",
    "suggerimento": "Se lo Stato si indebita oggi, chi pagherà, e quando, gli interessi e il rimborso?",
    "spiegazione": "Il **debito pubblico** permette di finanziare oggi la spesa rinviando il prelievo fiscale: è un **trasferimento intertemporale dell'onere**, che ricadrà sui contribuenti futuri attraverso interessi e rimborsi.",
    "perOpzione": {
      "A": "Corretta: l'indebitamento sposta nel tempo il pagamento del costo dell'intervento pubblico.",
      "B": "«Esclusivamente» è errato: il debito finanzia qualunque disavanzo, non solo la gestione del patrimonio.",
      "C": "Lo scopo del debito è finanziare la spesa pubblica, non intervenire sui mercati finanziari."
    }
  },
  {
    "id": 43,
    "corretta": "A",
    "suggerimento": "Il prezzo, oltre a finanziare il servizio, fa anche da «filtro» della domanda. Cosa succede se manca?",
    "spiegazione": "Quando un servizio pubblico è **gratuito**, manca il meccanismo con cui il prezzo induce gli utenti a **autoselezionarsi** in base alla disponibilità a pagare: occorrono quindi altri criteri di razionamento (code, liste d'attesa, requisiti).",
    "perOpzione": {
      "A": "Corretta: senza prezzo viene meno l'autoselezione della domanda.",
      "B": "La qualità del servizio non dipende dalla presenza di un prezzo per l'utente.",
      "C": "Di solito accade il contrario: la gratuità tende ad aumentare la domanda."
    }
  },
  {
    "id": 44,
    "corretta": "C",
    "suggerimento": "Taylor cercava il modo «scientifico» di svolgere ogni compito: quanti modi ne esistono, secondo lui?",
    "spiegazione": "Lo **Scientific Management** di Taylor cerca la **one best way** per ogni mansione (studio di tempi e metodi), con **forte specializzazione** e **controllo stringente** sul rispetto degli standard.",
    "perOpzione": {
      "A": "Compiti cooperativi e conoscenze polivalenti sono tipici di approcci successivi, opposti al taylorismo.",
      "B": "Attribuisce a Taylor l'attenzione alla motivazione e alle differenze individuali, temi delle Relazioni umane e delle teorie successive.",
      "C": "Corretta: one best way e controllo rigoroso degli standard sono il cuore del taylorismo."
    }
  },
  {
    "id": 45,
    "corretta": "B",
    "suggerimento": "Non confondere McClelland con Maslow: quanti bisogni individua McClelland, e quali?",
    "spiegazione": "**McClelland** individua tre **bisogni acquisiti**: di **realizzazione** (achievement), di **potere** e di **affiliazione/relazione**. La piramide a cinque livelli è di **Maslow**.",
    "perOpzione": {
      "A": "McClelland classifica i bisogni, quindi non può sostenere che siano inclassificabili.",
      "B": "Corretta: realizzazione, potere e affiliazione.",
      "C": "È la piramide di Maslow, non la teoria di McClelland."
    }
  },
  {
    "id": 46,
    "corretta": "A",
    "suggerimento": "La «griglia manageriale» incrocia due tipi di attenzione del capo: quali?",
    "spiegazione": "La **griglia manageriale** di **Blake e Mouton** classifica gli stili secondo l'**interesse per le persone** e l'**interesse per la produzione/i compiti**, su due assi da 1 a 9.",
    "perOpzione": {
      "A": "Corretta: orientamento alle persone e orientamento alle attività.",
      "B": "Spesa ed etica non sono le dimensioni della griglia.",
      "C": "Trasparenza e strategia non sono le dimensioni della griglia."
    }
  },
  {
    "id": 47,
    "corretta": "B",
    "suggerimento": "La «direzione per obiettivi» lega il lavoro di ciascuno a che cosa?",
    "spiegazione": "Il **management by objectives** (Drucker) definisce obiettivi a cascata, coerenti con quelli dell'organizzazione, e **responsabilizza** le persone sul loro raggiungimento, valutandole sui **risultati**.",
    "perOpzione": {
      "A": "La selezione del personale non è la funzione dell'MBO.",
      "B": "Corretta: l'MBO responsabilizza sui risultati, collegandoli a quelli complessivi dell'organizzazione.",
      "C": "I risultati possono incidere sulla carriera, ma la funzione dell'MBO è orientare e responsabilizzare sui risultati, non gestire le progressioni."
    }
  },
  {
    "id": 48,
    "corretta": "C",
    "suggerimento": "Pensa al significato di «aperto» nel Codice dell'amministrazione digitale: chi può usarli, a quale costo?",
    "spiegazione": "Per il **CAD** (art. 1, d.lgs. 82/2005) i **dati di tipo aperto** sono **disponibili** con licenza che ne permette il riuso, **accessibili** in formati aperti e leggibili da macchina e **gratuiti** (o a costi marginali).",
    "perOpzione": {
      "A": "Il riuso è proprio lo scopo degli open data.",
      "B": "Gli open data sono gratuiti e devono essere in formato aperto, non in qualunque formato.",
      "C": "Corretta: disponibili, accessibili e gratuiti."
    },
    "riferimenti": [
      {
        "normaId": "cad_art_1"
      }
    ]
  },
  {
    "id": 49,
    "corretta": "A",
    "suggerimento": "Il Codice dell'amministrazione digitale chiede a ogni amministrazione di dotarsi di una propria figura interna: a quale livello?",
    "spiegazione": "L'art. 17 del **CAD** (d.lgs. 82/2005) affida a ciascuna PA la transizione digitale tramite un **unico ufficio dirigenziale generale**, il cui responsabile è il **Responsabile per la transizione digitale (RTD)**; le amministrazioni diverse da quelle statali possono individuare l’ufficio tra quelli di livello dirigenziale o, se ne sono prive, un responsabile tra le posizioni apicali (co. 1-sexies).",
    "perOpzione": {
      "A": "Corretta: è un ufficio dirigenziale generale interno a ciascuna amministrazione.",
      "B": "AgID coordina e fornisce indirizzi, ma non svolge i compiti del RTD delle singole amministrazioni.",
      "C": "Il RTD è interno all'amministrazione, non un soggetto esterno."
    },
    "riferimenti": [
      {
        "normaId": "cad_art_17"
      }
    ]
  },
  {
    "id": 50,
    "corretta": "B",
    "suggerimento": "Il «design» di una politica riguarda la sua architettura complessiva: quali scelte concrete include?",
    "spiegazione": "Il **policy design** è la progettazione di una politica pubblica: scelta degli **strumenti**, dei **destinatari**, delle **regole**, delle **risorse** e dei **meccanismi di attuazione**.",
    "perOpzione": {
      "A": "Riduce il design alla sola governance (regole e poteri), che è solo uno degli aspetti da progettare.",
      "B": "Corretta: comprende strumenti, destinatari, regole, finanziamenti e meccanismi attuativi.",
      "C": "«Esclusivamente economico-finanziaria» è troppo restrittivo e confonde la progettazione con il controllo."
    }
  },
  {
    "id": 51,
    "corretta": "B",
    "suggerimento": "Il «transfer» avviene tra contesti diversi: tra uffici, tra pubblico e privato o tra Paesi?",
    "spiegazione": "Il **policy transfer** (Dolowitz e Marsh) è il processo con cui idee, programmi e soluzioni adottati in un **contesto** (spesso un altro Paese) vengono **trasferiti e adottati** in un altro.",
    "perOpzione": {
      "A": "Non riguarda il passaggio di un'idea tra unità di una stessa amministrazione.",
      "B": "Corretta: adozione di soluzioni già sperimentate altrove.",
      "C": "L'esternalizzazione della progettazione al privato non è policy transfer."
    }
  },
  {
    "id": 52,
    "corretta": "B",
    "suggerimento": "Quando non sai bene né dove arrivare né come, puoi fare un grande piano razionale?",
    "spiegazione": "Con forte **incertezza e ambiguità su fini e mezzi** non è possibile una decisione razionale sinottica: si procede in modo **incrementale** (Lindblom), per **piccoli passi**, obiettivi intermedi e ridefinizioni del problema.",
    "perOpzione": {
      "A": "«Sempre» ai tecnici: con fini ambigui il problema non è solo tecnico ma anche di valori e scelte politiche.",
      "B": "Corretta: incrementalismo e ridefinizione progressiva del problema.",
      "C": "«Sempre» al mercato: non esiste una regola generale che imponga soluzioni di mercato."
    }
  },
  {
    "id": 53,
    "corretta": "C",
    "suggerimento": "Hall distingue tre ordini di cambiamento: il terzo tocca solo gli strumenti o il paradigma stesso?",
    "spiegazione": "Per **Peter Hall** il cambiamento di **primo ordine** modifica le impostazioni degli strumenti, il **secondo** gli strumenti stessi, il **terzo** gli **obiettivi e il paradigma** della politica (definizione del problema e teorie di fondo).",
    "perOpzione": {
      "A": "Descrive un cambiamento marginale, tipico del primo ordine.",
      "B": "Hall non definisce i livelli in base all'ammontare delle risorse disponibili.",
      "C": "Corretta: il terzo ordine coinvolge i presupposti e il paradigma della politica."
    }
  },
  {
    "id": 54,
    "corretta": "B",
    "suggerimento": "Il monitoraggio segue l'attuazione mentre avviene; l'analisi d'impatto guarda agli effetti finali. Cosa si controlla in itinere?",
    "spiegazione": "Il **monitoraggio** rileva in modo sistematico l'**avanzamento fisico, procedurale e finanziario** di un intervento. La **valutazione d'impatto** misura invece gli effetti causati dall'intervento.",
    "perOpzione": {
      "A": "La customer satisfaction è uno strumento possibile, ma non l'oggetto essenziale del monitoraggio.",
      "B": "Corretta: avanzamento fisico, procedurale e finanziario.",
      "C": "L'analisi dell'impatto è oggetto della valutazione, non del monitoraggio."
    }
  },
  {
    "id": 55,
    "corretta": "C",
    "suggerimento": "Look at the very first sentence: what is the new legislation «aimed at»?",
    "spiegazione": "Il brano dice che la legislazione è **aimed at ensuring safety and ethical standards**: è questo lo scopo principale dell'AI Act.",
    "perOpzione": {
      "A": "Solo i rischi «inaccettabili» sono vietati; i sistemi ad alto rischio devono rispettare requisiti rigorosi, non sono banditi.",
      "B": "Il testo parla di favorire l'innovazione, ma non di promuovere l'IA in tutti i settori.",
      "C": "Corretta: corrisponde a «aimed at ensuring safety and ethical standards»."
    }
  },
  {
    "id": 56,
    "corretta": "B",
    "suggerimento": "In una frase con «when» riferita al futuro, che tempo verbale va nella subordinata?",
    "spiegazione": "Nelle **subordinate temporali** al futuro (when, after, as soon as) si usa il **present simple**, mentre la principale va al **futuro**: «will be better protected when the legislation **is** passed».",
    "perOpzione": {
      "A": "«Would be» dopo «when» è errato: con il futuro si usa il present simple.",
      "B": "Corretta: principale al futuro, subordinata al present simple.",
      "C": "Il present perfect nella principale non concorda con un evento futuro."
    }
  },
  {
    "id": 57,
    "corretta": "C",
    "suggerimento": "Come si forma il comparativo di un aggettivo di una sillaba? E come si può rafforzare?",
    "spiegazione": "Gli aggettivi monosillabici formano il **comparativo con -er** (strict → stricter); per rafforzarlo si usa **much** (much stricter). Non si somma «more» a «-er».",
    "perOpzione": {
      "A": "«More stricter» è un doppio comparativo, errato.",
      "B": "«Strictlier» non esiste.",
      "C": "Corretta: comparativo regolare rafforzato con «much»."
    }
  },
  {
    "id": 58,
    "corretta": "A",
    "suggerimento": "«Rigorous testing» sono controlli severi e approfonditi: quale parola indica lo stesso concetto?",
    "spiegazione": "**Rigorous** significa accurato, severo, scrupoloso: il sinonimo più vicino è **thorough** (approfondito, completo).",
    "perOpzione": {
      "A": "Corretta: thorough = approfondito, scrupoloso.",
      "B": "Lenient significa indulgente, permissivo: è quasi il contrario.",
      "C": "Simple significa semplice: non esprime rigore."
    }
  },
  {
    "id": 59,
    "corretta": "C",
    "suggerimento": "Cerca la combinazione fissa «be ___ to» per una previsione certa, e pensa a chi ripara un rubinetto che perde.",
    "spiegazione": "**Be bound to** + verbo indica qualcosa di quasi certo; **disrupt** = sconvolgere; chi ripara un rubinetto è un **plumber** (idraulico). **Growth** completa naturalmente «the growth of AI».",
    "perOpzione": {
      "A": "«Definite to» non è un'espressione inglese e «pipers» sono suonatori di cornamusa.",
      "B": "Dopo «sure» manca «to» («is sure change» è sgrammaticato) e «hydraulics» è l'idraulica come disciplina, non le persone.",
      "C": "Corretta: growth / bound to / disrupt / plumbers."
    }
  },
  {
    "id": 60,
    "corretta": "C",
    "suggerimento": "«To face» significa «affrontare»: che cosa si affronta, se non si rispettano le regole?",
    "spiegazione": "**Face penalties** significa **andare incontro a sanzioni**, cioè dover subire le conseguenze del mancato rispetto delle regole.",
    "perOpzione": {
      "A": "Avoid punishment significa evitare la punizione: è il contrario.",
      "B": "Receive rewards significa ricevere premi: senso opposto.",
      "C": "Corretta: affrontare (subire) le conseguenze."
    }
  }
];
