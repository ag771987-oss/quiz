const SPIEGAZIONI = [
  {
    "id": 1,
    "corretta": "C",
    "suggerimento": "C'è un possibile legame personale con un fornitore: lo escludi a priori, lo ignori o rendi la scelta oggettiva e trasparente coinvolgendo altri?",
    "spiegazione": "Quando un rapporto personale può far sospettare un **conflitto di interessi**, la prova premia chi non esclude a priori l'opzione ma la mette in **confronto oggettivo** con le alternative e **condivide la decisione** con un collega competente: trasparenza e collegialità neutralizzano il sospetto di favoritismo.",
    "perOpzione": {
      "A": "Il confronto oggettivo va bene, ma decidi da solo/a e senza includere l'azienda dell'ex collega: perdi una possibile buona opzione e non rendi trasparente il processo.",
      "B": "Escludere a priori un fornitore di qualità per timore del conflitto di interessi è una scelta rinunciataria: il conflitto si gestisce con trasparenza, non rinunciando all'opportunità.",
      "C": "Analisi comparativa che include anche l'ex collega e decisione condivisa con il responsabile commerciale: scelta oggettiva, trasparente e collegiale."
    }
  },
  {
    "id": 2,
    "corretta": "B",
    "suggerimento": "Il problema riguarda sia i contratti futuri sia quelli già firmati: ti basta proteggerti per il futuro o provi ad agire su entrambi i fronti, insieme a chi gestisce i clienti?",
    "spiegazione": "La prova premia chi affronta il problema **in modo completo e tempestivo**: tutela per il futuro (clausole di adeguamento dei prezzi) e, insieme, tentativo di **rinegoziare** i contratti in essere, coordinandosi con la **funzione commerciale** che gestisce il rapporto con i clienti.",
    "perOpzione": {
      "A": "Interviene solo sui contratti futuri e rinuncia in partenza a quelli in essere: risposta parziale che lascia scoperto l'impatto attuale dell'aumento dei costi.",
      "B": "Agisce subito su due fronti, nuove clausole e revisione dei contratti esistenti, coordinandosi con il commerciale, che può negoziare con i clienti: approccio completo e collaborativo.",
      "C": "Si limita a informare e a chiedere alla funzione commerciale quando aumentare: delega la decisione e non interviene sui contratti in essere né predispone tutele."
    }
  },
  {
    "id": 3,
    "corretta": "A",
    "suggerimento": "Il cambiamento è già deciso e le persone sono restie: cosa aiuta di più ad accompagnarle, opporsi, limitarsi a esplorare, o ripensare il processo insieme a loro formandole?",
    "spiegazione": "Di fronte a un **cambiamento organizzativo** già deciso, la prova premia chi lo **guida attivamente**: ripensa i processi in funzione del nuovo strumento, **coinvolge** i collaboratori nella riprogettazione e li **forma**, riducendo le resistenze.",
    "perOpzione": {
      "A": "Ridisegna il processo, coinvolge i collaboratori nella definizione dei nuovi passaggi e li forma: gestione del cambiamento completa e partecipata.",
      "B": "Si oppone a una decisione già presa e a un'esigenza reale (domanda in crescita): atteggiamento conservativo che asseconda la resistenza al cambiamento.",
      "C": "Atteggiamento positivo ma tiepido: una fase esplorativa sul software non ripensa i processi né prepara le persone; resta un passo indietro rispetto a una vera guida del cambiamento."
    }
  },
  {
    "id": 4,
    "corretta": "A",
    "suggerimento": "Ti chiedono un contributo diretto: è meglio rinunciare all'innovazione, delegarla all'esterno o lavorarci in prima persona su più leve?",
    "spiegazione": "La prova premia chi si **assume in prima persona** il problema e lo affronta su **più leve** (efficienza dei processi e uso più intelligente dei materiali), **senza rinunciare all'innovazione** ma cercando di renderla sostenibile nei costi.",
    "perOpzione": {
      "A": "Agisce direttamente su due fronti, processo e impiego dei materiali, salvando l'innovazione e cercando di ridurre i costi: contributo concreto e completo.",
      "B": "Delega a una società esterna il contributo che era stato chiesto a te e non interviene sul costo dei materiali, che è la causa del calo di marginalità.",
      "C": "Torna indietro rinunciando all'innovazione e usa l'analisi solo per confermare una scelta già presa: ragionamento a tesi, non ricerca di soluzioni."
    }
  },
  {
    "id": 5,
    "corretta": "A",
    "suggerimento": "Tre richieste insieme: quali puoi affidare ai collaboratori e quale richiede proprio te, perché sei l'unico/a ad avere quelle informazioni?",
    "spiegazione": "Con più richieste urgenti la prova premia la **delega efficace**: si affida al team ciò che può gestire (la segnalazione del cliente, una prima bozza del piano) e si tiene per sé solo ciò che richiede **conoscenze personali** (il contratto seguito direttamente). Così tutte e tre le questioni avanzano in parallelo.",
    "perOpzione": {
      "A": "Distribuisce il lavoro: il team gestisce il cliente e prepara la bozza del piano, mentre tu fornisci subito le informazioni che solo tu hai. Tutte le richieste partono in parallelo.",
      "B": "Delega solo una delle tre questioni e si tiene due attività, una delle quali (la bozza del piano) poteva essere avviata dal team: uso meno efficiente delle risorse.",
      "C": "Si concentra su un solo problema e lascia in attesa il capo e l'amministrazione: manca la visione d'insieme e la delega."
    }
  },
  {
    "id": 6,
    "corretta": "C",
    "suggerimento": "Molte attività diverse e la necessità dichiarata di coinvolgere il team: meglio gestire giorno per giorno, pianificare solo una parte, o costruire un piano complessivo?",
    "spiegazione": "La prova premia la **pianificazione complessiva**: mettere in fila scadenze, urgenze e priorità di **tutte** le attività e distribuire il carico coinvolgendo **più collaboratori** in modo programmato, invece di procedere a vista.",
    "perOpzione": {
      "A": "Gestione a vista e accentrata: lavorare da soli sulle urgenze del giorno, quando lo scenario dice che servirà il supporto del team, porta a sovraccarico e ritardi.",
      "B": "Pianifica solo le attività più delicate e coinvolge un unico collaboratore per compiti limitati: visione parziale e delega minima.",
      "C": "Ripianifica tutto con criteri chiari (scadenze, urgenze, importanza) e prevede il coinvolgimento di più collaboratori: organizzazione completa e delega distribuita."
    }
  },
  {
    "id": 7,
    "corretta": "C",
    "suggerimento": "Il problema di qualità riguarda i tuoi laboratori: basta un richiamo generico o serve un intervento strutturato di cui tu ti fai garante?",
    "spiegazione": "Quando emerge un problema di **qualità** nella propria area, la prova premia chi interviene **subito e in modo strutturato** (una squadra dedicata a rivedere gli standard) e se ne fa **garante**, senza attendere né scaricare la responsabilità su altri.",
    "perOpzione": {
      "A": "Un richiamo all'attenzione è utile ma generico: non indaga le cause né cambia nulla nel modo di lavorare.",
      "B": "Attendere un altro quadrimestre significa lasciare che test non conformi continuino, con rischi per i clienti: atteggiamento passivo.",
      "C": "Intervento strutturato e responsabile: un gruppo dedicato rivede gli standard e tu ne garantisci l'applicazione coerente."
    }
  },
  {
    "id": 8,
    "corretta": "B",
    "suggerimento": "Prima di rispondere pubblicamente o di liquidare la notizia, cosa ti serve sapere sui numeri citati?",
    "spiegazione": "Davanti a un'informazione preoccupante ma non verificata, la prova premia chi **raccoglie dati e verifica le fonti**: coinvolge il proprio team, chiede un'analisi indipendente e domanda all'autore come ha calcolato gli indici, prima di prendere posizione.",
    "perOpzione": {
      "A": "Risponde e coinvolge il Direttore Generale in un'intervista senza aver prima verificato se i dati sono corretti: reazione d'impulso e rischiosa sul piano comunicativo.",
      "B": "Approccio analitico: analisi interna ed esterna e richiesta all'autore della metodologia di calcolo. Si decide su dati verificati.",
      "C": "Liquidare la notizia senza verificarla è superficiale: se il calo fosse reale, si perderebbe tempo prezioso, e la preoccupazione del Direttore resta senza risposta."
    }
  },
  {
    "id": 9,
    "corretta": "C",
    "suggerimento": "Il collaboratore è nuovo, insicuro e con rendimento basso: ha bisogno di autonomia o di indicazioni precise e di un controllo ravvicinato?",
    "spiegazione": "È la logica della **leadership situazionale**: lo stile va adattato alla maturità del collaboratore. Con una persona **nuova e poco competente** sul compito serve uno stile **direttivo**: obiettivi chiari, istruzioni su come raggiungerli e verifica dell'applicazione.",
    "perOpzione": {
      "A": "Lasciare solo un collaboratore insicuro e poco esperto significa abbandonarlo: l'autonomia è adatta a chi ha già competenza e sicurezza.",
      "B": "Condividere gli obiettivi è utile, ma lasciare poi piena autonomia su «come» non aiuta chi non sa ancora usare lo strumento.",
      "C": "Stile direttivo adatto alla situazione: chiarisce obiettivi e modalità e verifica che le indicazioni siano seguite."
    }
  },
  {
    "id": 10,
    "corretta": "B",
    "suggerimento": "La persona è esperta e finora autonoma, ma ora è in difficoltà: ha bisogno che tu ti sostituisca a lei o che tu la sostenga mentre risolve da sé?",
    "spiegazione": "Con un collaboratore **esperto e affidabile** in difficoltà momentanea, la prova premia lo stile di **supporto/coaching**: incoraggiare, orientare, mettere a disposizione la propria esperienza, ma lasciare a lui la soluzione, preservandone autonomia e responsabilità.",
    "perOpzione": {
      "A": "Intervento direttivo e correttivo eccessivo verso una persona che ha sempre lavorato bene: ne mortifica l'autonomia.",
      "B": "Incoraggia e orienta, offrendo supporto ed esperienza, ma lascia alla persona il compito di risolvere: stile di coaching adatto a un collaboratore competente.",
      "C": "Aiutarla anche sul piano operativo significa sostituirsi a lei: rischia di ridurne l'autonomia invece di rafforzarla."
    }
  },
  {
    "id": 11,
    "corretta": "A",
    "suggerimento": "Il conflitto è tra due team: con chi conviene parlarne, e con quale atteggiamento? Che cosa ti serve sapere prima dell'incontro?",
    "spiegazione": "Nei **conflitti tra funzioni** la prova premia chi prima **raccoglie i fatti** dal proprio team e poi si confronta con il **pari grado** responsabile dell'altro team in chiave **collaborativa**, cercando una soluzione comune; senza minacce e senza scavalcare la linea gerarchica.",
    "perOpzione": {
      "A": "Prepara il confronto con dati concreti e poi cerca una soluzione insieme al collega responsabile: approccio collaborativo e rispettoso dei ruoli.",
      "B": "Coinvolge il collega giusto, ma con un tono di ultimatum («potrai intervenire direttamente con le sue persone»): aumenta la tensione invece di risolverla.",
      "C": "Scavalca il collega e si rivolge direttamente al suo collaboratore: invade il ruolo del pari grado e rischia di peggiorare i rapporti."
    }
  },
  {
    "id": 12,
    "corretta": "A",
    "suggerimento": "Il collega tende a defilarsi: lo convinci di più mettendogli pressione (capi in copia, suoi collaboratori coinvolti) o rendendogli facile e rispettoso il contributo?",
    "spiegazione": "Con un collega poco disponibile la prova premia un approccio **rispettoso e responsabilizzante**: comunicazione chiara su richiesta e tempi, contatto diretto e **libertà** per lui di organizzare il proprio contributo. Le pressioni gerarchiche o lo scavalcamento tendono a irrigidire i rapporti.",
    "perOpzione": {
      "A": "Preavviso via email, breve telefonata con richiesta e tempi chiari, e libertà al collega su come supportarti: lo responsabilizza senza metterlo sotto pressione.",
      "B": "Mettere in copia l'amministratore delegato e sottolineare che «ti aspetti» collaborazione suona come una pressione gerarchica: rischia di irrigidire il collega.",
      "C": "Coinvolgere direttamente il suo staff, mettendolo in copia, scavalca il collega nella gestione delle sue persone e può essere percepito come un'invasione di campo."
    }
  },
  {
    "id": 13,
    "corretta": "A",
    "suggerimento": "Cerca nel brano l'unico punto in cui compare esattamente l'espressione «mente intelligente»: a quali elementi viene associata?",
    "spiegazione": "Il brano lega la **mente intelligente** alla costruzione e modellazione di strumenti per uno scopo, che richiede **immaginazione** e **pensiero logico-deduttivo**: in sintesi, la capacità di inventare soluzioni nuove per raggiungere i propri obiettivi.",
    "perOpzione": {
      "A": "Corrisponde alla frase chiave: costruire e modellare uno strumento per uno scopo richiede immaginazione e logica, «elementi caratteristici di una mente intelligente».",
      "B": "Il brano cita la vita di gruppo (elefanti, scimpanzé), ma non la indica come tratto distintivo della mente intelligente.",
      "C": "Il ricordo del richiamo di un simile dopo vent'anni è un esempio riferito ai delfini, non la definizione di mente intelligente."
    }
  },
  {
    "id": 14,
    "corretta": "C",
    "suggerimento": "Ripassa gli esempi del brano (utensili, cure ai malati, insegnamento dei sentieri, assenso e dubbio): che tipo di capacità mostrano nel loro insieme?",
    "spiegazione": "Il brano mostra che le abilità cognitive degli animali si esprimono in modi diversi: **ragionamento** (costruire strumenti), **apprendimento** e trasmissione di conoscenze (elefanti), **comunicazione** e meta-cognizione (delfini). Le ricerche le hanno confermate «su molte specie».",
    "perOpzione": {
      "A": "Il brano dice che la femmina più anziana insegna i sentieri, non che solo le femmine abbiano abilità cognitive: è una generalizzazione indebita.",
      "B": "Il brano dice l'opposto: le capacità cognitive sono state confermate da ricerche «su molte specie».",
      "C": "Riassume correttamente gli esempi del testo: pensiero logico-deduttivo, apprendimento complesso e comunicazione tra simili."
    }
  },
  {
    "id": 15,
    "corretta": "B",
    "suggerimento": "Il brano dà una definizione esplicita della meta-cognizione introdotta da «ossia»: rileggila.",
    "spiegazione": "La **meta-cognizione** è, secondo il brano, «l'autoconsapevolezza di ciò che si sa e di ciò che non si sa»: la capacità di riflettere sulla propria conoscenza e sui propri processi mentali.",
    "perOpzione": {
      "A": "Il brano dice che è stata osservata «tra gli altri» nei delfini: quindi non solo in essi.",
      "B": "Parafrasa la definizione del testo: consapevolezza di ciò che si sa e non si sa, cioè riflessione sui propri processi cognitivi.",
      "C": "Descrive piuttosto la costruzione di strumenti per uno scopo, che il brano collega alla mente intelligente, non alla meta-cognizione."
    }
  },
  {
    "id": 16,
    "corretta": "B",
    "suggerimento": "Guarda la prima frase del brano: tutti reagiscono alla musica nello stesso modo?",
    "spiegazione": "Il brano si apre dicendo che la musica è **rilassante per alcuni, stimolante per altri**: dunque non ha lo stesso effetto su tutti. Le altre affermazioni non sono contenute nel testo.",
    "perOpzione": {
      "A": "I 15 minuti sono la durata dell'effetto sulla prestazione, non una raccomandazione d'ascolto quotidiana.",
      "B": "Si ricava dalla prima frase: «alcuni la trovano rilassante, altri stimolante», quindi non sempre rilassa.",
      "C": "Il brano non parla mai delle preferenze dei giovani: è un'informazione estranea al testo."
    }
  },
  {
    "id": 17,
    "corretta": "C",
    "suggerimento": "Il brano indica quanto dura l'effetto positivo: confronta quel dato con le opzioni.",
    "spiegazione": "Secondo il brano l'effetto sulla prestazione ha una **durata di circa 15 minuti**, quindi inferiore a 30. Inoltre lo stesso effetto si ottiene anche con **altri brani o generi**, non solo con Mozart.",
    "perOpzione": {
      "A": "Smentito dal testo: gli studi successivi hanno ottenuto lo stesso esito «anche ascoltando altri brani o generi musicali».",
      "B": "Il brano non parla di ascolto di brani diversi in successione: è un'aggiunta non supportata.",
      "C": "L'effetto dura circa 15 minuti: è quindi vero che si manifesta per un tempo inferiore a 30 minuti."
    }
  },
  {
    "id": 18,
    "corretta": "A",
    "suggerimento": "Secondo la spiegazione principale riportata nel brano, è la musica in sé a migliorare la prestazione o qualcosa che la musica provoca?",
    "spiegazione": "Il brano afferma che probabilmente **non è la musica in sé** a migliorare la prestazione, ma il **vissuto emozionale positivo** che genera: l'effetto è quindi **mediato** dall'umore, e infatti cresce se il brano è gradito.",
    "perOpzione": {
      "A": "Corrisponde alla spiegazione del testo: l'effetto passa attraverso l'umore e lo stato di attivazione prodotti dalla musica.",
      "B": "Il brano esclude un effetto diretto e non parla di «musica di qualità»: conta il gradimento personale.",
      "C": "L'effetto non è stabile: dura circa 15 minuti."
    }
  },
  {
    "id": 19,
    "corretta": "A",
    "suggerimento": "Conta i lati del poligono centrale e le croci in ogni riquadro, e osserva il colore del poligono da una figura all'altra.",
    "spiegazione": "Valgono tre regole: i lati del poligono crescono di uno (? → 5 → 6 → 7 → 8), il **numero di croci è uguale al numero di lati**, il colore **alterna** grigio e bianco (? grigio, pentagono bianco, esagono grigio, ettagono bianco, ottagono grigio). Serve quindi un **quadrilatero grigio con 4 croci**.",
    "perOpzione": {
      "A": "Alternativa 5: parallelogramma grigio con 4 croci. Rispetta lati, numero di croci e alternanza del colore.",
      "B": "Alternativa 4: quadrilatero grigio, ma con sole 3 croci invece di 4.",
      "C": "Alternativa 1: quadrilatero con 4 croci, ma bianco; nella posizione iniziale serve un poligono grigio."
    }
  },
  {
    "id": 20,
    "corretta": "A",
    "suggerimento": "Segui separatamente tre elementi: lo sfondo del cerchio, il pallino esterno (posizione e colore) e il rombo vicino al centro.",
    "spiegazione": "Lo **sfondo alterna** bianco e puntinato; il **pallino** ruota di un quarto ogni volta (alto, sinistra, basso, destra → di nuovo alto) alternando grigio e bianco; il **rombo** alterna bianco in alto e scuro in basso. Alla quinta posizione serve quindi la stessa configurazione della prima: sfondo bianco, pallino grigio in alto, rombo bianco in alto.",
    "perOpzione": {
      "A": "Alternativa 2: sfondo bianco, pallino grigio nel settore superiore e rombo bianco in alto. Rispetta tutte e tre le regole.",
      "B": "Alternativa 4: pallino e rombo sono corretti, ma lo sfondo è puntinato; dopo il quarto cerchio (puntinato) deve venire uno sfondo bianco.",
      "C": "Alternativa 1: pallino bianco e rombo scuro, cioè la configurazione delle posizioni pari, non della quinta."
    }
  },
  {
    "id": 21,
    "corretta": "A",
    "suggerimento": "Conta i lati dei poligoni della serie e guarda come si ripete il riempimento dello sfondo (puntinato, tratteggiato, bianco).",
    "spiegazione": "I poligoni aumentano di un lato alla volta (triangolo, quadrilatero, pentagono, **?**, ettagono, ottagono): manca un **esagono**. Lo sfondo segue il ciclo **puntinato → tratteggiato → bianco**, che si ripete: al quarto posto torna il **puntinato**. Il cerchio interno è sempre **scuro**.",
    "perOpzione": {
      "A": "Alternativa 1: esagono puntinato con cerchio scuro. Rispetta numero di lati, ciclo dello sfondo e colore del cerchio.",
      "B": "Alternativa 3: esagono con cerchio scuro, ma lo sfondo è grigio pieno, che non compare nel ciclo della serie.",
      "C": "Alternativa 2: è un quadrilatero (serve un esagono), con sfondo bianco e cerchio chiaro."
    }
  },
  {
    "id": 22,
    "corretta": "B",
    "suggerimento": "Considera separatamente le metà esterne e le metà interne (quelle a contatto con l'esagono) delle tessere. Le esterne seguono una sequenza girando intorno; per le interne prova a confrontare tessere opposte.",
    "spiegazione": "Girando in senso orario a partire dalla tessera in alto a destra, le **metà esterne** valgono 6, 5, 4, 3, 2: alla tessera mancante tocca **1**. Le **metà interne** di tessere **opposte** sommano sempre **8** (4+4, 2+6): la tessera mancante è opposta a quella in basso, che ha 3 all'interno, quindi le servono **5** punti. La tessera cercata ha 1 punto in alto (esterno) e 5 in basso (interno).",
    "perOpzione": {
      "A": "Alternativa 2: 1 punto esterno corretto, ma 6 punti interni; la somma con la tessera opposta (3) darebbe 9, non 8.",
      "B": "Alternativa 4: 1 punto esterno e 5 interni. Completa sia la sequenza decrescente esterna sia la somma 8 delle metà interne opposte.",
      "C": "Alternativa 1: metà esterna vuota (0 invece di 1), anche se la metà interna con 5 punti sarebbe giusta."
    },
    "nota": "La regola delle metà interne non è esplicitata dalla prova: quella indicata (somma 8 tra tessere opposte) è la più coerente con la chiave ufficiale."
  },
  {
    "id": 23,
    "corretta": "C",
    "suggerimento": "Chiediti per ogni coppia di insiemi: possono avere elementi in comune? Una mamma può essere papà? Un papà può avere più di trent'anni? Una mamma può essere un maschio?",
    "spiegazione": "Nei diagrammi di Eulero-Venn si traducono le relazioni tra insiemi: **papà e mamme** sono **disgiunti**; **mamme e maschi ultratrentenni** sono **disgiunti**; **papà e maschi ultratrentenni** si **intersecano** (ci sono papà sopra e sotto i trent'anni, e ultratrentenni che non sono padri). Serve quindi un insieme isolato e due insiemi parzialmente sovrapposti.",
    "perOpzione": {
      "A": "Alternativa 5: tre insiemi concentrici, cioè uno contenuto nell'altro; ma le mamme non sono né papà né maschi.",
      "B": "Alternativa 4: due insiemi intersecano entrambi l'insieme grande; ciò implicherebbe mamme che sono anche maschi ultratrentenni.",
      "C": "Alternativa 1: un insieme separato (mamme) e due insiemi che si sovrappongono parzialmente (papà e maschi ultratrentenni). Rappresenta correttamente la relazione."
    }
  },
  {
    "id": 24,
    "corretta": "A",
    "suggerimento": "Confronta la terza e la quarta figura: come cambiano la posizione (rotazione) e i colori? Applica la stessa trasformazione al contrario per trovare il primo termine.",
    "spiegazione": "Nella seconda coppia la figura viene **ruotata di 180°** e i **colori vengono invertiti** (il bianco diventa grigio e viceversa). Il primo termine deve quindi essere la seconda figura ruotata di 180° e con colori invertiti: **barra orizzontale grigia in alto**, rettangolo verticale **bianco** a sinistra e triangolo **bianco** in basso a destra.",
    "perOpzione": {
      "A": "Alternativa 5: barra grigia in alto, rettangolo e triangolo bianchi, orientati come la seconda figura ruotata di 180°. È la trasformazione corretta.",
      "B": "Alternativa 3: colori corretti, ma la barra sporge dal lato opposto: è un ribaltamento speculare, non una rotazione di 180°.",
      "C": "Alternativa 2: la forma è ruotata ma i colori non sono invertiti (barra bianca, rettangolo e triangolo grigi)."
    }
  },
  {
    "id": 25,
    "corretta": "A",
    "suggerimento": "La Costituzione protegge chi è perseguito per le proprie idee politiche: che limite pone all'estradizione?",
    "spiegazione": "L'**art. 10, ultimo comma, Cost.** stabilisce che «non è ammessa l'estradizione dello straniero per reati politici» (regola analoga vale per il cittadino all'art. 26). È una garanzia legata al diritto d'asilo previsto dallo stesso art. 10, terzo comma.",
    "perOpzione": {
      "A": "Riproduce il testo dell'art. 10, ultimo comma, Cost.: l'estradizione dello straniero per reati politici è vietata.",
      "B": "È l'opposto della regola costituzionale, che esclude proprio i reati politici.",
      "C": "Non esiste una regola di estradizione «sempre ammessa»: il divieto per i reati politici vale a prescindere dalla prova del diritto d'asilo."
    }
  },
  {
    "id": 26,
    "corretta": "A",
    "suggerimento": "La magistratura è «un ordine autonomo e indipendente da ogni altro potere»: quale organo garantisce questa autonomia, e per quali magistrati?",
    "spiegazione": "Il **CSM** (artt. 104-105 Cost.) è l'organo di **autogoverno della magistratura ordinaria**: presieduto dal Presidente della Repubblica, decide su assunzioni, assegnazioni, trasferimenti, promozioni e provvedimenti disciplinari, a garanzia dell'**autonomia e indipendenza** dell'ordine giudiziario.",
    "perOpzione": {
      "A": "Corretto: il CSM tutela l'autonomia e l'indipendenza dell'ordine giudiziario (art. 104 Cost.).",
      "B": "Il CSM riguarda la magistratura ordinaria; la magistratura amministrativa ha un proprio organo di autogoverno (il Consiglio di presidenza della giustizia amministrativa).",
      "C": "Il CSM non è un organo del Governo: serve proprio a sottrarre i magistrati all'influenza del potere esecutivo."
    }
  },
  {
    "id": 27,
    "corretta": "B",
    "suggerimento": "Il momento rilevante è quello in cui la decisione diventa conoscibile a tutti: deliberazione o pubblicazione? E c'è un periodo di attesa?",
    "spiegazione": "Per l'**art. 136, primo comma, Cost.**, quando la Corte dichiara l'illegittimità costituzionale di una norma di legge o di atto avente forza di legge, la norma **cessa di avere efficacia dal giorno successivo alla pubblicazione** della decisione. Non c'è una vacatio come per le leggi.",
    "perOpzione": {
      "A": "Rileva la pubblicazione, non la deliberazione della decisione in camera di consiglio.",
      "B": "Riproduce l'art. 136 Cost.: efficacia cessata dal giorno successivo alla pubblicazione.",
      "C": "Confonde con la vacatio legis di quindici giorni prevista per l'entrata in vigore delle leggi (art. 73 Cost.)."
    },
    "nota": "Nel PDF il testo dell'opzione C è parzialmente coperto da una firma: la lettura «dopo quindici giorni» è la più plausibile."
  },
  {
    "id": 28,
    "corretta": "B",
    "suggerimento": "Pensa al termine «di default» della legge sul procedimento amministrativo, quello che si applica quando nessuna norma speciale dice nulla.",
    "spiegazione": "Per l'**art. 2, comma 2, L. 241/1990**, se disposizioni di legge o i provvedimenti attuativi non prevedono un termine diverso, i procedimenti di amministrazioni statali ed enti pubblici nazionali si concludono entro **30 giorni**. Termini diversi non possono superare di regola i 90 giorni (180 in casi particolari).",
    "perOpzione": {
      "A": "90 giorni è il limite massimo che i regolamenti possono fissare in via ordinaria, non il termine generale.",
      "B": "È il termine generale suppletivo dell'art. 2, comma 2, L. 241/1990.",
      "C": "60 giorni non è il termine generale previsto dalla L. 241/1990."
    }
  },
  {
    "id": 29,
    "corretta": "C",
    "suggerimento": "Basta che l'atto sia illegittimo per annullarlo d'ufficio, o serve una ragione ulteriore che giustifichi il sacrificio di chi ne beneficia?",
    "spiegazione": "L'**art. 21-nonies L. 241/1990** consente l'annullamento d'ufficio dell'atto illegittimo solo se sussistono **ragioni di interesse pubblico**, entro un termine ragionevole e tenendo conto degli interessi dei destinatari e dei controinteressati. Secondo la giurisprudenza consolidata questo interesse deve essere **concreto e attuale** e **ulteriore** rispetto al mero ripristino della legalità violata.",
    "perOpzione": {
      "A": "Il solo ripristino della legalità non basta: altrimenti ogni atto illegittimo andrebbe annullato, senza bilanciamento con l'affidamento dei privati.",
      "B": "Non esiste un tale onere: l'annullamento d'ufficio deve intervenire entro un termine ragionevole (comunque non superiore a dodici mesi per i provvedimenti autorizzatori o di attribuzione di vantaggi economici), non entro 30 giorni.",
      "C": "Corretto: serve un interesse pubblico specifico, diverso e ulteriore rispetto al ripristino della legalità, da esplicitare in motivazione."
    }
  },
  {
    "id": 30,
    "corretta": "A",
    "suggerimento": "Quando la PA non esercita poteri autoritativi, si comporta come un qualsiasi soggetto dell'ordinamento: con quali regole?",
    "spiegazione": "L'**art. 1, comma 1-bis, L. 241/1990** stabilisce che la PA, nell'adozione di atti di natura non autoritativa, **agisce secondo le norme di diritto privato** salvo che la legge disponga diversamente.",
    "perOpzione": {
      "A": "Riproduce l'art. 1, comma 1-bis, L. 241/1990.",
      "B": "Anche quando usa strumenti privatistici la PA resta vincolata ai fini pubblici e al principio di legalità.",
      "C": "Inverte la regola: il diritto pubblico governa l'attività autoritativa, non quella non autoritativa."
    }
  },
  {
    "id": 31,
    "corretta": "A",
    "suggerimento": "Il Testo unico sulle società a partecipazione pubblica limita i tipi societari ammessi: quali forme, e con quali varianti?",
    "spiegazione": "L'**art. 3, comma 1, D.Lgs. 175/2016** (Testo unico in materia di società a partecipazione pubblica) prevede che le amministrazioni possano partecipare **esclusivamente** a società, anche consortili, costituite in forma di **società per azioni o a responsabilità limitata**, anche in forma **cooperativa**.",
    "perOpzione": {
      "A": "Riproduce l'art. 3, comma 1, del Testo unico: solo S.p.A. e S.r.l., anche consortili o cooperative.",
      "B": "Troppo restrittiva: sono ammesse anche le S.r.l. e la forma cooperativa.",
      "C": "Troppo ampia: la società in accomandita per azioni, ad esempio, è esclusa."
    }
  },
  {
    "id": 32,
    "corretta": "A",
    "suggerimento": "Il codice del processo amministrativo, quando i riti sono diversi, li separa o permette di cumulare le domande gestendole in modo differenziato?",
    "spiegazione": "Per l'**art. 117 c.p.a.** il ricorso avverso il silenzio si propone **anche senza previa diffida** (comma 1) e, se è proposta **congiuntamente** l'azione di **risarcimento** del danno (art. 30, comma 4), il giudice può definire con rito camerale l'azione sul silenzio e trattare con **rito ordinario** la domanda risarcitoria (comma 6).",
    "perOpzione": {
      "A": "Corretto: il cumulo è espressamente ammesso dall'art. 117, comma 6, c.p.a., con trattazione differenziata.",
      "B": "La diversità di rito non impedisce il cumulo: il codice prevede proprio che le due domande proseguano con riti diversi.",
      "C": "Il codice esclude la necessità della diffida: il ricorso è proposto «anche senza previa diffida»."
    }
  },
  {
    "id": 33,
    "corretta": "C",
    "suggerimento": "Il TFUE distingue competenze esclusive (art. 3), concorrenti (art. 4) e di sostegno (art. 6): in quale elenco compare ciascun settore?",
    "spiegazione": "L'**art. 4, par. 2, TFUE** elenca le competenze concorrenti: tra queste mercato interno, politica sociale, ambiente, energia, trasporti e **spazio di libertà, sicurezza e giustizia**. Le **regole di concorrenza** sono competenza **esclusiva** (art. 3), la **cultura** è competenza di **sostegno** (art. 6).",
    "perOpzione": {
      "A": "Le regole di concorrenza necessarie al funzionamento del mercato interno sono competenza esclusiva dell'Unione (art. 3 TFUE).",
      "B": "La cultura rientra nelle competenze di sostegno, coordinamento o completamento (art. 6 TFUE).",
      "C": "Lo spazio di libertà, sicurezza e giustizia è espressamente tra le competenze concorrenti dell'art. 4 TFUE."
    }
  },
  {
    "id": 34,
    "corretta": "C",
    "suggerimento": "L'art. 288 TFUE apre con la frase «Per esercitare le competenze dell'Unione, ...»: chi è il soggetto di quella frase?",
    "spiegazione": "L'**art. 288 TFUE** dispone che, per esercitare le competenze dell'Unione, **le istituzioni** adottano regolamenti, direttive, **decisioni**, raccomandazioni e pareri. La decisione è obbligatoria in tutti i suoi elementi e, se designa destinatari, è obbligatoria solo nei loro confronti.",
    "perOpzione": {
      "A": "Nessuna norma riserva le decisioni alla Commissione su proposta del Consiglio: semmai, di regola, è la Commissione a proporre.",
      "B": "Anche il Consiglio, il Parlamento europeo con il Consiglio e la BCE adottano decisioni: non è un potere esclusivo della Commissione.",
      "C": "Riproduce l'art. 288 TFUE: gli atti tipici, decisioni comprese, sono adottati dalle istituzioni dell'Unione."
    }
  },
  {
    "id": 35,
    "corretta": "A",
    "suggerimento": "Ricorda l'elenco delle istituzioni dell'Unione contenuto nel Trattato sull'Unione europea: quante sono e quali?",
    "spiegazione": "L'**art. 13 TUE** elenca le sette **istituzioni** dell'Unione: Parlamento europeo, Consiglio europeo, Consiglio, Commissione, Corte di giustizia, **Banca centrale europea** e Corte dei conti. La BCE è istituzione dal Trattato di Lisbona.",
    "perOpzione": {
      "A": "Corretto: la BCE figura tra le istituzioni elencate all'art. 13 TUE.",
      "B": "Falso: la BCE è citata proprio nel TUE (art. 13), oltre che disciplinata nel TFUE.",
      "C": "Formula generica e imprecisa: la BCE non è un semplice «organo», ma un'istituzione dell'Unione."
    }
  },
  {
    "id": 36,
    "corretta": "B",
    "suggerimento": "Parti dall'identità macroeconomica di un'economia aperta: Y = C + I + G + NX. Che cosa ottieni isolando il risparmio nazionale S?",
    "spiegazione": "Dall'identità di contabilità nazionale si ricava **S − I = NX**: il risparmio nazionale in eccesso rispetto all'investimento interno viene prestato all'estero (deflusso netto di capitali) e corrisponde a **esportazioni nette positive**, cioè a un **avanzo commerciale**.",
    "perOpzione": {
      "A": "Il disavanzo commerciale corrisponde al caso opposto: investimenti superiori al risparmio, finanziati con capitali esteri.",
      "B": "Se S > I, allora NX = S − I > 0: avanzo commerciale.",
      "C": "Il differenziale di inflazione non discende dall'identità tra risparmio, investimento ed esportazioni nette."
    }
  },
  {
    "id": 37,
    "corretta": "B",
    "suggerimento": "Per produrre una data quantità al costo minimo devi scegliere l'isocosto più basso possibile che ancora tocca l'isoquanto: in quel punto le pendenze delle due curve che rapporto hanno?",
    "spiegazione": "Il costo è minimo nel punto di **tangenza** tra l'isoquanto e l'**isocosto più basso** raggiungibile. Lì la pendenza dell'isoquanto (**SMST** = PMgL/PMgK) è uguale alla pendenza dell'isocosto, cioè al **rapporto tra i prezzi dei fattori** (w/r).",
    "perOpzione": {
      "A": "La curva di indifferenza appartiene alla teoria del consumatore; e lo SMST è un rapporto tra produttività marginali, non uguale alla sola produttività del capitale.",
      "B": "Tangenza tra isoquanto e isocosto più basso, con SMST uguale al prezzo relativo dei fattori: è la condizione di minimo costo.",
      "C": "Un isocosto più alto implica un costo maggiore, non minimo; e la condizione sulla sola produttività del lavoro è errata."
    }
  },
  {
    "id": 38,
    "corretta": "B",
    "suggerimento": "La legge di Okun mette in relazione la produzione con il mercato del lavoro, non con i prezzi.",
    "spiegazione": "La **legge di Okun** è la relazione empirica **negativa** tra crescita del **PIL reale** e **variazione del tasso di disoccupazione**: quando il PIL cresce più del suo tasso normale la disoccupazione scende, e viceversa.",
    "perOpzione": {
      "A": "La relazione con l'inflazione riguarda altri concetti (ad esempio la curva di Phillips), non la legge di Okun.",
      "B": "È la definizione della legge di Okun: più crescita del PIL, minore disoccupazione.",
      "C": "Anche qui si parla di inflazione: non è la variabile della legge di Okun."
    }
  },
  {
    "id": 39,
    "corretta": "B",
    "suggerimento": "Una riduzione dei tassi fa uscire capitali: se il cambio è libero di muoversi, che effetto ha sul tasso di cambio e quindi sulle esportazioni?",
    "spiegazione": "Nel modello **Mundell-Fleming**, con **cambi flessibili** e **alta mobilità dei capitali** l'espansione monetaria abbassa i tassi, provoca deflussi di capitale e **deprezzamento** della valuta, che stimola le esportazioni nette: la politica monetaria è **massimamente efficace**. Con cambi fissi, invece, la banca centrale deve difendere la parità e la politica monetaria perde efficacia.",
    "perOpzione": {
      "A": "Con cambi fissi la banca centrale deve intervenire per difendere la parità, neutralizzando in tutto o in parte l'espansione monetaria.",
      "B": "Il deprezzamento del cambio, amplificato dall'alta mobilità dei capitali, si somma all'effetto sui tassi: massima efficacia.",
      "C": "Con capitali poco mobili il deprezzamento è più contenuto: la politica è efficace, ma meno che con alta mobilità."
    }
  },
  {
    "id": 40,
    "corretta": "B",
    "suggerimento": "In economia aperta, quando il reddito aumenta, una parte della spesa aggiuntiva va in beni importati: che cosa succede alla domanda interna?",
    "spiegazione": "In economia aperta parte di ogni aumento di reddito si traduce in **importazioni** (propensione marginale all'importazione m): è una **dispersione** della domanda verso l'estero. Il moltiplicatore diventa circa 1/(1 − c + m), quindi **più piccolo** di quello di un'economia chiusa, 1/(1 − c).",
    "perOpzione": {
      "A": "La motivazione è sbagliata: le importazioni di un paese aumentano semmai la domanda (e il reddito) dei paesi partner.",
      "B": "Corretto: la quota di domanda che si rivolge all'estero riduce il moltiplicatore interno.",
      "C": "Le importazioni introducono una dispersione che in economia chiusa non c'è: i moltiplicatori sono diversi."
    }
  },
  {
    "id": 41,
    "corretta": "A",
    "suggerimento": "Confronta il moltiplicatore della spesa pubblica, 1/(1−c), con quello delle imposte, −c/(1−c): che cosa ottieni sommandoli?",
    "spiegazione": "È il **teorema di Haavelmo** (moltiplicatore del bilancio in pareggio): nel modello keynesiano semplice la spesa pubblica ha moltiplicatore 1/(1−c), le imposte −c/(1−c). Se spesa e imposte aumentano dello stesso ammontare, la somma vale **1**: il reddito aumenta esattamente **quanto la spesa pubblica**.",
    "perOpzione": {
      "A": "Corretto: il moltiplicatore del bilancio in pareggio è pari a 1.",
      "B": "Le imposte riducono i consumi solo in parte (per la quota c), mentre la spesa pubblica entra tutta nella domanda: l'effetto netto è positivo.",
      "C": "Sottostima l'effetto: nel modello di base l'aumento del reddito è uguale, non inferiore, all'aumento della spesa."
    }
  },
  {
    "id": 42,
    "corretta": "B",
    "suggerimento": "Il termine «governance» si contrappone a «government»: il modello descrive un comando dall'alto o un'interazione tra livelli?",
    "spiegazione": "La **governance multilivello** (concetto nato negli studi sull'integrazione europea) descrive un sistema in cui le decisioni pubbliche sono **condivise e negoziate** tra livelli diversi (europeo, nazionale, regionale, locale) e con attori non statali, senza una rigida gerarchia.",
    "perOpzione": {
      "A": "Descrive un modello gerarchico tradizionale, l'opposto della governance multilivello.",
      "B": "Corretto: il tratto distintivo è la condivisione di competenze e responsabilità tra livelli di governo.",
      "C": "La governance coinvolge anche attori privati, ma non implica la prevalenza di interessi privati sulle decisioni pubbliche."
    }
  },
  {
    "id": 43,
    "corretta": "A",
    "suggerimento": "«Passivi» rimanda alle spese: in quale fase del ciclo della spesa (impegno, liquidazione, ordinazione, pagamento) si sono fermate?",
    "spiegazione": "I **residui passivi** sono le **spese impegnate** ma non ancora pagate alla fine dell'esercizio: impegnate e non ancora ordinate, oppure ordinate ma non ancora pagate. Il loro corrispettivo dal lato delle entrate sono i **residui attivi** (entrate accertate e non riscosse, o riscosse e non versate).",
    "perOpzione": {
      "A": "Definizione corretta dei residui passivi: spese che hanno superato la fase dell'impegno ma non sono state pagate.",
      "B": "È un saldo tra spese ed entrate, non la definizione dei residui.",
      "C": "Descrive i residui attivi, che riguardano le entrate."
    }
  },
  {
    "id": 44,
    "corretta": "C",
    "suggerimento": "Quale scuola sostiene che non esiste un modello organizzativo valido sempre, ma che la struttura migliore «dipende» dall'ambiente, dalla tecnologia, dalle dimensioni?",
    "spiegazione": "La **teoria delle contingenze strutturali** (Burns e Stalker, Woodward, Lawrence e Lorsch, anni '60) afferma che non esiste un'unica struttura ottimale: l'organizzazione è efficace quando è **coerente (fit) con il contesto** in cui opera. Al contrario, l'organizzazione scientifica del lavoro cercava la «one best way» universale.",
    "perOpzione": {
      "A": "Il neo-istituzionalismo spiega le forme organizzative con la ricerca di legittimazione e l'imitazione (isomorfismo), non con l'adattamento funzionale all'ambiente.",
      "B": "Taylor e l'organizzazione scientifica cercano un modello unico e universale («one best way»), indipendente dal contesto.",
      "C": "Corretto: il «fit» tra struttura e contesto esterno è l'idea centrale della teoria delle contingenze."
    }
  },
  {
    "id": 45,
    "corretta": "A",
    "suggerimento": "«Storm» in inglese significa tempesta: che cosa accade in un gruppo quando, dopo i primi contatti, emergono differenze di idee e ruoli?",
    "spiegazione": "Il modello di **Tuckman** (1965) prevede le fasi **forming** (formazione), **storming** (conflitto: emergono divergenze e lotte per ruoli e potere), **norming** (definizione di regole condivise) e **performing** (lavoro efficace); nel 1977 è stata aggiunta l'**adjourning** (scioglimento).",
    "perOpzione": {
      "A": "Corretto: lo storming è la fase in cui emergono tensioni e conflitti tra i membri.",
      "B": "Il downsizing è la riduzione dimensionale di un'organizzazione, non una fase del modello di Tuckman.",
      "C": "La dissoluzione del gruppo corrisponde alla fase di «adjourning», aggiunta successivamente."
    },
    "nota": "Nel PDF le parole «definita di “storming”» sono in parte coperte da una firma; la lettura è certa dal contesto e dalle opzioni."
  },
  {
    "id": 46,
    "corretta": "C",
    "suggerimento": "«Transazionale» viene da transazione: uno scambio. Cosa si scambiano capo e collaboratore?",
    "spiegazione": "La **leadership transazionale** (Burns, Bass) si basa su uno **scambio**: il leader chiarisce obiettivi e aspettative e offre ricompense (o sanzioni) in cambio delle prestazioni, un «**do ut des**». La leadership **trasformazionale**, invece, fa leva su carisma, visione e ispirazione.",
    "perOpzione": {
      "A": "Il project management è una metodologia di gestione dei progetti, non un modello di leadership.",
      "B": "Il carisma è il tratto tipico della leadership trasformazionale, non di quella transazionale.",
      "C": "Corretto: lo scambio tra prestazione e ricompensa è l'essenza della leadership transazionale."
    },
    "nota": "La formula «fare molto più di quanto ci si aspetterebbe» è quella con cui Bass descrive di solito la leadership trasformazionale; la risposta ufficiale resta comunque l'unica coerente con il modello transazionale citato."
  },
  {
    "id": 47,
    "corretta": "B",
    "suggerimento": "«Reengineering» significa riprogettare: l'oggetto sono i costi, le persone o i processi? E quanto è profondo l'intervento?",
    "spiegazione": "Il **Business Process Reengineering** (Hammer e Champy, inizio anni '90) è il **ripensamento radicale** dei **processi** per ottenere miglioramenti drastici di costi, qualità e tempi. Guarda ai processi **trasversali** alle funzioni (logica transfunzionale), superando la divisione per uffici.",
    "perOpzione": {
      "A": "La riduzione dei costi può essere un effetto, ma il BPR non è una tecnica di revisione della spesa (spending review).",
      "B": "Corretto: ridisegno profondo dei processi in ottica trasversale alle funzioni.",
      "C": "Il taglio del personale non è la definizione del BPR, e il riferimento alle materie prime è estraneo al tema."
    }
  },
  {
    "id": 48,
    "corretta": "C",
    "suggerimento": "Le tipologie di fascicolo sono affare, attività, procedimento amministrativo, persona fisica e persona giuridica: ciascuna opzione descrive una di queste. Quale si adatta a una questione senza procedura codificata?",
    "spiegazione": "Nelle **Linee guida AgID** sui documenti informatici e nel relativo vademecum, il fascicolo per **affare** raccoglie i documenti di una **competenza non proceduralizzata** che la PA deve comunque portare a termine; il fascicolo per **attività** riguarda adempimenti semplici con risposte obbligate; il fascicolo per **procedimento amministrativo** si chiude con un provvedimento.",
    "perOpzione": {
      "A": "Descrive il fascicolo per «attività»: adempimenti semplici o risposte obbligate.",
      "B": "Descrive il fascicolo per «procedimento amministrativo», che si conclude con un provvedimento.",
      "C": "Corretto: l'affare riguarda una competenza non proceduralizzata da portare comunque a buon fine."
    }
  },
  {
    "id": 49,
    "corretta": "B",
    "suggerimento": "La strategia punta a rafforzare le competenze: toglierebbe risorse alle materie scientifiche? E su quale canale formativo professionalizzante interviene?",
    "spiegazione": "Il **Programma Strategico Intelligenza Artificiale 2022-2024** del Governo italiano prevede, tra le politiche per i talenti e le competenze, di **rafforzare** i percorsi STEM e di **espandere l'IA negli ITS** (Istituti Tecnici Superiori), oltre a dottorati, attrazione di ricercatori e interventi su dati e infrastrutture nazionali.",
    "perOpzione": {
      "A": "La strategia rafforza le materie STEM, non ne sposta i finanziamenti: l'IA si costruisce proprio su quelle basi.",
      "B": "Corretto: l'espansione dell'IA negli Istituti Tecnici Superiori è una delle politiche del programma.",
      "C": "Formulazione non presente tra le politiche del programma, che punta su infrastrutture e dati a livello nazionale."
    }
  },
  {
    "id": 50,
    "corretta": "A",
    "suggerimento": "Un programma «di scopo» fissa il fine o i mezzi? Contrapponilo ai programmi «condizionali» del tipo «se accade X, allora fai Y».",
    "spiegazione": "Nell'analisi delle politiche pubbliche si distinguono i **programmi condizionali** (regole «se… allora», procedure standardizzate, poca discrezionalità) dai **programmi di scopo**, che **fissano gli obiettivi** e poche regole di fondo, lasciando agli attuatori l'**autonomia nella scelta dei mezzi**. Questi ultimi sono adatti a problemi complessi e variabili.",
    "perOpzione": {
      "A": "Corretto: obiettivi definiti e libertà sui mezzi sono il tratto dei programmi di scopo.",
      "B": "Le procedure standardizzate caratterizzano i programmi condizionali.",
      "C": "Limitare la discrezionalità è tipico dei programmi condizionali; quelli di scopo la ampliano."
    }
  },
  {
    "id": 51,
    "corretta": "C",
    "suggerimento": "Ricorda la catena input → output → outcome: che cosa sta in mezzo tra le risorse impiegate e gli effetti prodotti?",
    "spiegazione": "Nella catena di una politica pubblica gli **input** sono le risorse impiegate, gli **output** sono i **prodotti** delle attività di attuazione (servizi erogati, contributi concessi, autorizzazioni rilasciate) e gli **outcome** sono gli **effetti** che quei prodotti generano sulla realtà.",
    "perOpzione": {
      "A": "Descrive gli input: le risorse che vengono lavorate.",
      "B": "Descrive gli outcome (o impatti): gli effetti della politica.",
      "C": "Corretto: gli output sono i prodotti dell'attuazione, rivolti alla realtà esterna."
    }
  },
  {
    "id": 52,
    "corretta": "C",
    "suggerimento": "Il policy network è un concetto ampio o specifico? Riguarda solo esperti, o tutti gli attori interessati a un settore?",
    "spiegazione": "Il **policy network** è l'insieme degli **attori** (pubblici e privati, istituzioni, gruppi di interesse, esperti) che interagiscono stabilmente attorno a uno **specifico settore di policy**, con relazioni spesso **informali**. La rete coesa di esperti con schemi cognitivi comuni è invece la **comunità epistemica**.",
    "perOpzione": {
      "A": "Descrive una comunità epistemica, cioè una rete di esperti che condividono conoscenze e credenze.",
      "B": "Le relazioni nei policy network sono spesso informali; la formalità non ne è il tratto tipico.",
      "C": "Corretto: rete di attori eterogenei che ruotano attorno a un ambito di policy."
    }
  },
  {
    "id": 53,
    "corretta": "B",
    "suggerimento": "«Dall'alto verso il basso»: chi guida il processo, e che cosa vuole evitare tra la decisione e la sua attuazione?",
    "spiegazione": "L'approccio **top-down** (Pressman e Wildavsky, Sabatier e Mazmanian) parte dalla decisione dei vertici e studia come **vincolare e controllare** l'attuazione per ridurre l'**implementation gap**, cioè lo scarto tra obiettivi e risultati. L'approccio **bottom-up** valorizza invece la reinterpretazione da parte degli attuatori e la circolarità del processo.",
    "perOpzione": {
      "A": "La retroazione circolare tra attuazione e formulazione è tipica degli approcci bottom-up o interattivi.",
      "B": "Corretto: vincoli posti dai decisori per ridurre il deficit di attuazione.",
      "C": "La reinterpretazione da parte degli attuatori è il fulcro dell'approccio bottom-up."
    }
  },
  {
    "id": 54,
    "corretta": "B",
    "suggerimento": "In quale modello problemi, soluzioni, partecipanti e occasioni di scelta si incontrano quasi per caso, in «anarchie organizzate»?",
    "spiegazione": "Il **garbage can model** (Cohen, March e Olsen, 1972) descrive le decisioni nelle **anarchie organizzate**, caratterizzate da **preferenze ambigue**, tecnologie poco chiare e partecipazione fluida: le decisioni nascono dall'incontro casuale di flussi indipendenti di problemi, soluzioni e partecipanti.",
    "perOpzione": {
      "A": "Il modello incrementale (Lindblom) si basa su piccoli aggiustamenti successivi rispetto allo status quo, non sull'ambiguità.",
      "B": "Corretto: l'ambiguità è il tratto centrale del modello del cestino dei rifiuti.",
      "C": "Il modello razionale-sinottico presuppone obiettivi chiari e informazione completa: l'opposto dell'ambiguità."
    }
  },
  {
    "id": 55,
    "corretta": "B",
    "suggerimento": "Cerca le parole chiave del brano: «complements human skills», «synergy». Il testo parla di sostituzione, di rischi o di collaborazione?",
    "spiegazione": "Il brano sostiene che l'IA è più efficace quando **integra le capacità umane** (complements human skills) e che serviranno **nuove competenze** per sfruttare questa **sinergia**: il tema centrale è l'**interazione** tra intelligenza artificiale e umana.",
    "perOpzione": {
      "A": "Il brano non elenca i compiti che l'IA potrà sostituire: insiste anzi sul ruolo umano.",
      "B": "Corretto: il tema è la sinergia tra IA e competenze umane.",
      "C": "Il testo non parla di pericoli: le nuove competenze sono presentate come un requisito, non come qualcosa minacciato dall'IA."
    }
  },
  {
    "id": 56,
    "corretta": "B",
    "suggerimento": "Attenzione al NOT: cerca l'espressione che cambia il significato. «Far more than» indica una quantità molto maggiore; quale opzione esprime invece un'alternativa?",
    "spiegazione": "**Far more than** significa «molto più di» (intensifica il comparativo). **Much more than** e **considerably more than** sono sinonimi. **Rather than** significa invece «piuttosto che / invece di» ed esclude il secondo termine, cambiando il senso della frase.",
    "perOpzione": {
      "A": "«Considerably more than» = «molto/considerevolmente più di»: può sostituire l'espressione.",
      "B": "«Rather than» = «invece di»: la frase direbbe che l'uso dell'IA non implica premere un pulsante, il che cambia il significato. È l'espressione che NON può sostituire.",
      "C": "«Much more than» = «molto più di»: sinonimo perfetto."
    }
  },
  {
    "id": 57,
    "corretta": "B",
    "suggerimento": "Il verbo «require», quando è seguito direttamente da un altro verbo, vuole la forma in -ing. Quale opzione la conserva e resta grammaticale?",
    "spiegazione": "**Require** + verbo vuole il **gerundio** (require developing), oppure la costruzione con un oggetto (require someone to develop). **Be bound to** significa «essere destinato a, sicuramente» ed esprime un futuro certo, simile a «will».",
    "perOpzione": {
      "A": "«Require to develop» senza oggetto non è corretto: serve «require developing» o «require someone to develop».",
      "B": "Corretto: «is bound to require» esprime un futuro certo, e «developing» mantiene la costruzione giusta.",
      "C": "«Is going to require» va bene, ma «develop» alla forma base dopo require è sgrammaticato."
    }
  },
  {
    "id": 58,
    "corretta": "B",
    "suggerimento": "Attenzione al NOT. «Involve» qui significa «richiedere, comportare»: quale verbo non ha mai questo significato?",
    "spiegazione": "**Involve** nel senso di «comportare, richiedere» può essere sostituito da **take** (it takes more than… = ci vuole più di…) e da **mean** (significare, comportare). **Catch** (prendere al volo, afferrare) non ha questo significato.",
    "perOpzione": {
      "A": "«Take» = «richiedere» (it will take far more than…): può sostituire involve.",
      "B": "«Catch» significa afferrare o prendere: non esprime l'idea di comportare/richiedere. È la parola che NON può sostituire.",
      "C": "«Mean» = «comportare, significare» (it will mean far more than…): può sostituire involve."
    }
  },
  {
    "id": 59,
    "corretta": "A",
    "suggerimento": "Qui «picture» non indica un'immagine fisica ma un quadro d'insieme: quale parola esprime meglio una visione complessiva?",
    "spiegazione": "In senso figurato **picture** indica un **quadro d'insieme**, una visione complessiva di una situazione. Il sinonimo più vicino è **vision**; **quadrant** è un termine geometrico (quadrante) e **notion** indica una singola idea o nozione.",
    "perOpzione": {
      "A": "«Vision» rende l'idea di un quadro complessivo e operativo: sinonimo adatto nel contesto.",
      "B": "«Quadrant» indica un quadrante (geometria): è un falso amico del «quadro» italiano.",
      "C": "«Notion» è un'idea o un concetto singolo, non un quadro d'insieme che sintetizza i risultati."
    }
  },
  {
    "id": 60,
    "corretta": "C",
    "suggerimento": "Il progresso è così veloce che... non riesci più a seguirlo. Quale phrasal verb o espressione esprime proprio questo?",
    "spiegazione": "**To lose track of** significa «perdere il filo, non riuscire più a seguire»: è la conseguenza logica di un progresso velocissimo. **Get away with** significa «farla franca», **break up with** «lasciarsi» con un partner.",
    "perOpzione": {
      "A": "«Get away with» = «farla franca»: non ha senso in questo contesto.",
      "B": "«Break up with» = «rompere/lasciarsi» (in una relazione): incongruo.",
      "C": "«Lose track of» = «non riuscire più a seguire»: completa logicamente la frase."
    },
    "nota": "Nel PDF la fine delle opzioni è parzialmente coperta da una firma; la parola finale «developments» è ricostruita dal contesto."
  }
];
