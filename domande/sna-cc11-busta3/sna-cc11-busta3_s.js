const SPIEGAZIONI = [
  {
    "id": 1,
    "corretta": "C",
    "suggerimento": "Il guasto tocca diversi team: oltre a risolvere il problema tecnico, chi deve sapere cosa sta succedendo?",
    "spiegazione": "In una crisi operativa si premia chi **organizza una risposta strutturata** (analisi rapida della causa) e **comunica in modo trasparente** con chi subisce il disservizio.",
    "perOpzione": {
      "A": "Pressione e silenzio verso gli altri reparti: chi è rallentato resta senza informazioni e non può riorganizzarsi. Nascondere il problema non evita l’allarme, lo aggrava.",
      "B": "Il rollback può essere una misura tampone utile, ma da solo non analizza la causa né informa chi è coinvolto; rinvia il problema senza governarlo.",
      "C": "Analisi rapida con un gruppo dedicato e aggiornamenti costanti agli stakeholder: affronta la causa e mantiene tutti informati."
    }
  },
  {
    "id": 2,
    "corretta": "C",
    "suggerimento": "Prima di aggiungere risorse o tagliare la domanda, sai perché le risposte sono diventate lente?",
    "spiegazione": "Un peggioramento delle prestazioni si affronta partendo dalla **diagnosi basata sui dati**, ascoltando chi lavora sul processo, e poi intervenendo sul **processo** stesso.",
    "perOpzione": {
      "A": "Riduce la domanda danneggiando il business (le campagne servono a vendere) e non tocca la causa del rallentamento.",
      "B": "Aggiunge costi senza capire dove si blocca il flusso: se il collo di bottiglia è nel processo, più operatori non bastano.",
      "C": "Dati, ascolto degli operatori e un triage con priorità e risposte standard: diagnosi e soluzione strutturale insieme."
    }
  },
  {
    "id": 3,
    "corretta": "A",
    "suggerimento": "Scadenza vicina e una persona in meno: conviene accentrare, aspettare o riorganizzare con tutto il gruppo?",
    "spiegazione": "Davanti a un imprevisto il responsabile **ridistribuisce il lavoro** e **ridefinisce le priorità insieme al team**, senza accentrare né restare passivo.",
    "perOpzione": {
      "A": "Riassegna le attività critiche e coinvolge il team nel ripianificare: risposta tempestiva e condivisa.",
      "B": "Accentrare su di sé il lavoro rischia di creare un collo di bottiglia e toglie al responsabile il tempo per coordinare.",
      "C": "Attesa passiva: con il lavoro già in ritardo, sperare che il team si organizzi da solo mette a rischio la scadenza."
    }
  },
  {
    "id": 4,
    "corretta": "C",
    "suggerimento": "Interesse sì, esperienza no: come gli dai modo di provarsi senza esporre lui e l’organizzazione a rischi eccessivi?",
    "spiegazione": "Lo sviluppo della leadership funziona se è **graduale e accompagnato**: formazione, mentoring e prime responsabilità con supervisione.",
    "perOpzione": {
      "A": "Promozione prematura: lo mette in un ruolo per cui non ha ancora dimostrato competenze, con rischi per lui e per il team.",
      "B": "Un progetto importante in completa autonomia è un salto nel vuoto: un eventuale insuccesso ricade sul progetto e lo scoraggia.",
      "C": "Mentoring, formazione e progetti pilota supervisionati: crescita a tappe con un rischio controllato."
    }
  },
  {
    "id": 5,
    "corretta": "B",
    "suggerimento": "La risorsa ha potenziale ma un punto debole preciso: come la aiuti a migliorare proprio lì?",
    "spiegazione": "Per colmare una carenza specifica serve un **piano di sviluppo mirato**, con un modello da seguire (affiancamento) e **feedback continui**.",
    "perOpzione": {
      "A": "Esporla a tutte le riunioni senza preparazione rischia di rafforzare l’insicurezza e di far brutta figura con i clienti.",
      "B": "Affiancamento, piano mirato sulla comunicazione e feedback costanti: sviluppo concreto e graduale.",
      "C": "Rinvia il problema senza affrontarlo: la competenza comunicativa non si sviluppa evitandola."
    }
  },
  {
    "id": 6,
    "corretta": "B",
    "suggerimento": "Il problema è la resistenza di persone precise: cosa serve per convincerle, oltre a una formazione tecnica?",
    "spiegazione": "Nella gestione del cambiamento le resistenze si superano **ascoltandole** e mostrando i **benefici concreti**, con supporto pratico: coinvolgimento più che imposizione.",
    "perOpzione": {
      "A": "Imposizione senza accompagnamento: ignorare le resistenze le rafforza e mette a rischio l’adozione del sistema.",
      "B": "Workshop pratici, supporto e confronto aperto su benefici e resistenze: affronta direttamente il nodo, cioè la diffidenza dei senior.",
      "C": "Il pilota è un buon metodo, ma la formazione «standard» non si occupa delle resistenze specifiche dei senior, che restano il vero ostacolo."
    }
  },
  {
    "id": 7,
    "corretta": "A",
    "suggerimento": "Diffidenza e confusione sono segnali: meglio comunicare a senso unico o aprire un confronto?",
    "spiegazione": "Un cambiamento organizzativo che genera dubbi va accompagnato con **comunicazione bidirezionale**: ascolto, confronto e supporto alla transizione.",
    "perOpzione": {
      "A": "Incontri, raccolta di dubbi e suggerimenti, workshop: chiarisce la confusione e trasforma la diffidenza in partecipazione.",
      "B": "Applicazione senza ascolto: confida che il problema si risolva da solo e lascia irrisolte diffidenza e confusione.",
      "C": "Comunicazione corretta ma solo formale e a senso unico: chi è confuso o diffidente difficilmente chiede chiarimenti di propria iniziativa."
    }
  },
  {
    "id": 8,
    "corretta": "A",
    "suggerimento": "Hai già scoperto la violazione: il vantaggio economico può prevalere sui valori dichiarati dall’azienda?",
    "spiegazione": "Integrità e **coerenza con i valori dichiarati** vengono prima della convenienza: si accertano i fatti e si adottano misure tempestive e proporzionate.",
    "perOpzione": {
      "A": "Accerta i fatti, sospende in via cautelativa e cerca alternative: coerenza etica e prudenza insieme.",
      "B": "La violazione è già stata scoperta: proseguire come se nulla fosse espone l’azienda a rischi etici e reputazionali.",
      "C": "Mette esplicitamente il profitto davanti ai valori che l’azienda dichiara pubblicamente: incoerente e rischioso."
    }
  },
  {
    "id": 9,
    "corretta": "C",
    "suggerimento": "Una decisione con implicazioni etiche e legali: chi dovrebbe partecipare alla valutazione?",
    "spiegazione": "Le scelte con profili etici o legali dubbi vanno valutate con le **funzioni competenti** (legale, compliance/etica) e **condivise con il vertice**, in modo trasparente.",
    "perOpzione": {
      "A": "Prende tempo e si informa in modo informale, ma non attiva le competenze dell’organizzazione né una decisione responsabile.",
      "B": "Sottovaluta l’aspetto etico e riduce tutto a un calcolo costi/benefici: le pratiche scorrette restano tali.",
      "C": "Coinvolge legale, funzione etica e management: valutazione completa, trasparente e condivisa."
    }
  },
  {
    "id": 10,
    "corretta": "B",
    "suggerimento": "Con tempi stretti, un solo controllo a metà percorso basta? E vale la pena sacrificare la qualità?",
    "spiegazione": "Con scadenze stringenti servono **pianificazione chiara** (obiettivi specifici, misurabili, con scadenze) e **monitoraggio frequente**, senza rinunciare alla qualità.",
    "perOpzione": {
      "A": "Un solo check a metà progetto è troppo tardi per correggere la rotta quando i tempi sono stretti.",
      "B": "Obiettivi SMART, attività scomposte e revisioni frequenti con il team: tiene sotto controllo tempi e qualità.",
      "C": "Consegnare in fretta un lavoro senza revisioni rischia errori e insoddisfazione proprio con un cliente nuovo."
    }
  },
  {
    "id": 11,
    "corretta": "B",
    "suggerimento": "I disallineamenti ci sono già: serve più o meno coordinamento?",
    "spiegazione": "Quando più reparti lavorano per lo stesso cliente servono **meccanismi di integrazione**: team interfunzionale, incontri regolari e un **referente unico** verso l’esterno.",
    "perOpzione": {
      "A": "I problemi sono già emersi: aspettare che peggiorino per fare riunioni e limitarsi alle e-mail non risolve i disallineamenti.",
      "B": "Team interfunzionale, incontri periodici e un unico referente: allinea i reparti e dà al cliente un interlocutore chiaro.",
      "C": "Senza coordinamento i disallineamenti aumentano e il cliente riceve messaggi diversi da reparti diversi."
    }
  },
  {
    "id": 12,
    "corretta": "B",
    "suggerimento": "Ci sono due versioni del problema: quella del cliente e quella del team. Le hai sentite entrambe?",
    "spiegazione": "Di fronte a punti di vista contrapposti si **ascoltano tutte le parti** prima di decidere, cercando una **soluzione condivisa** che risolva davvero il problema di servizio.",
    "perOpzione": {
      "A": "Le scuse sono giuste, ma promettere senza capire la causa (le risorse sono davvero insufficienti?) rischia di deludere di nuovo il cliente.",
      "B": "Ascolta cliente e team e cerca una soluzione condivisa: chiarisce le cause e coinvolge chi dovrà attuarla.",
      "C": "Prende posizione senza ascoltare il team e ricorre alla minaccia: se il problema sono le risorse, la pressione non lo risolve."
    }
  },
  {
    "id": 13,
    "corretta": "C",
    "suggerimento": "Resta sempre la stessa forma? E quanti cerchietti compaiono a ogni passaggio?",
    "spiegazione": "La forma resta sempre un **triangolo** e i cerchietti aumentano di **due** a ogni passaggio: 0, 2, 4. La figura successiva deve quindi essere un triangolo con **6 cerchietti**, cioè la figura 1.",
    "perOpzione": {
      "A": "La figura 3 è un triangolo ma ha solo 4 cerchietti, come la figura precedente: manca l’aumento di due.",
      "B": "La figura 4 ha 6 cerchietti ma è un quadrato: la forma della serie è sempre il triangolo.",
      "C": "La figura 1 è un triangolo con 6 cerchietti (3 interni, 2 ai lati, 1 sotto): rispetta sia la forma sia la progressione 0-2-4-6.",
      "D": "La figura 2 è un esagono senza cerchietti: cambia forma e azzera il conteggio.",
      "E": "La figura 5 è un quadrato con 2 soli cerchietti: sbaglia sia la forma sia il numero."
    },
    "nota": "La regola del conteggio (0-2-4-6) individua una sola figura; la figura 1 però non conserva il cerchietto in cima presente nei passaggi precedenti, per cui la chiave resta ricostruita con margine di dubbio."
  },
  {
    "id": 14,
    "corretta": "D",
    "suggerimento": "Guarda dove si trova il cerchietto rispetto all’esagono in ciascun passaggio: in che verso si sposta?",
    "spiegazione": "La forma resta un **esagono** e l’unico cerchietto **ruota in senso orario** di un lato a ogni passaggio: in alto, in alto a destra, in basso a destra. Il passo successivo è il lato **in basso**: figura 4.",
    "perOpzione": {
      "A": "La figura 3 ha il cerchietto in basso ma è un quadrato: la forma dell’esagono non viene rispettata.",
      "B": "La figura 1 ha due cerchietti, mentre nella serie ce n’è sempre uno solo.",
      "C": "La figura 2 è un quadrato con il cerchietto a destra: forma e posizione sbagliate.",
      "D": "La figura 4 è un esagono con un solo cerchietto sul lato in basso: è il passo successivo della rotazione oraria.",
      "E": "La figura 5 ha il cerchietto nella posizione giusta ma è un pentagono."
    }
  },
  {
    "id": 15,
    "corretta": "E",
    "suggerimento": "Conta i cerchietti attorno a ciascuna figura e mettili in relazione con il tipo di forma (triangolo o quadrato).",
    "spiegazione": "Nelle figure coerenti il numero di cerchietti dipende dalla forma: i **triangoli hanno 1 cerchietto**, i **quadrati 2** (in altre parole, cerchietti = lati − 2). L’unica figura che viola la regola è il triangolo a), che ne ha due.",
    "perOpzione": {
      "A": "La figura e) è un quadrato con 2 cerchietti: rispetta la regola.",
      "B": "La figura c) è un quadrato con 2 cerchietti: rispetta la regola.",
      "C": "La figura b) è un triangolo con 1 cerchietto: rispetta la regola.",
      "D": "La figura d) è un triangolo con 1 cerchietto: rispetta la regola.",
      "E": "La figura a) è un triangolo con 2 cerchietti: è l’unica che non segue il rapporto forma/numero di cerchietti, quindi va eliminata."
    },
    "nota": "Regola ricostruita (1 cerchietto per i triangoli, 2 per i quadrati); non è escluso che il quesito ne preveda un’altra, ad esempio basata sulla posizione dei cerchietti. Una seconda risoluzione indipendente ha indicato un'altra risposta: la chiave di questa domanda è incerta."
  },
  {
    "id": 16,
    "corretta": "D",
    "suggerimento": "Confronta una colonna con la successiva: l’elemento in cima dove finisce? Gli altri come si spostano?",
    "spiegazione": "Ogni colonna di cinque simboli **scorre di una posizione verso l’alto** e il simbolo in cima riappare in fondo (scorrimento circolare). Applicando lo scorrimento alla quarta colonna (cerchio, stella, stella, cerchio, stella nera) si ottiene: **stella, stella, cerchio, stella nera, cerchio**, cioè la figura 2.",
    "perOpzione": {
      "A": "La figura 4 ha la stella nera in seconda posizione: non corrisponde allo scorrimento della colonna precedente.",
      "B": "La figura 1 ripete la prima colonna della serie, non il passo successivo.",
      "C": "La figura 5 ha la stella nera in terza posizione e i due cerchi in fondo: l’ordine è sbagliato.",
      "D": "La figura 2 (stella, stella, cerchio, stella nera, cerchio) è esattamente la quarta colonna scorsa di una posizione verso l’alto.",
      "E": "La figura 3 contiene un cerchio nero, simbolo che nella serie non compare mai."
    }
  },
  {
    "id": 17,
    "corretta": "E",
    "suggerimento": "Osserva quale casella contiene sempre il simbolo nero. Poi leggi i simboli girando attorno al quadrato: come si spostano da un passaggio all’altro?",
    "spiegazione": "Due regole: il simbolo nella **casella in alto a destra è sempre nero**; leggendo le caselle in senso orario, i simboli **scorrono di una posizione in senso antiorario** a ogni passaggio. Dopo quattro passaggi si torna alla configurazione iniziale: cerchio in alto a sinistra, cerchio nero in alto a destra, stella in basso a sinistra, quadrato in basso a destra, cioè la figura 4.",
    "perOpzione": {
      "A": "La figura 5 ha il cerchio nero in alto a sinistra: la casella con il simbolo nero è sempre quella in alto a destra.",
      "B": "La figura 1 ha il simbolo nero in basso a destra e il quadrato in alto a destra: viola entrambe le regole.",
      "C": "La figura 3 ha il quadrato in alto a sinistra e il cerchio in basso a destra: l’ordine dei simboli non segue lo scorrimento.",
      "D": "La figura 2 ha due simboli neri e un ordine diverso da quello previsto.",
      "E": "La figura 4 ha il cerchio nero in alto a destra e gli altri simboli nella posizione prevista dallo scorrimento: completa la serie."
    }
  },
  {
    "id": 18,
    "corretta": "B",
    "suggerimento": "Tre aspetti da controllare: il colore dei simboli, il lato (sinistra/destra) su cui si trovano e il modo in cui i simboli si scambiano di riga.",
    "spiegazione": "Le figure **alternano bianco e nero** (la quinta è quindi bianca) e il lato del primo simbolo **alterna sinistra/destra** (la quinta parte da sinistra). L’ordine dei simboli cambia scambiando alternativamente le **due righe centrali** e le **coppie di righe**: dalla quarta figura (X, triangolo, cerchio, quadrato) si passa a **triangolo, X, quadrato, cerchio**. È la figura 3, tutta bianca.",
    "perOpzione": {
      "A": "La figura 2 ha un triangolo nero e un cerchio nero, e due simboli sulla stessa riga: viola colore e disposizione.",
      "B": "La figura 3 è tutta bianca, alterna sinistra/destra a partire da sinistra e ha l’ordine triangolo, X, quadrato, cerchio: rispetta tutte le regole.",
      "C": "La figura 4 ha simboli neri e parte da destra: è un passaggio di tipo «nero», non quello successivo.",
      "D": "La figura 5 mescola simboli bianchi e neri (X e cerchio neri).",
      "E": "La figura 1 ha l’ordine giusto ma il triangolo e il cerchio sono neri, mentre la quinta figura deve essere tutta bianca."
    }
  },
  {
    "id": 19,
    "corretta": "B",
    "suggerimento": "Rileggi la prima frase del brano: dove e quando fu usata la prima bomba?",
    "spiegazione": "Il brano apre dicendo che nell’**agosto 1945** la prima arma nucleare **distrusse Hiroshima**; Nagasaki fu colpita dalla seconda bomba. Attenzione alle alternative che aggiungono dettagli (esercito americano, data esatta) **assenti dal testo**.",
    "perOpzione": {
      "A": "Le circa 50.000 vittime sono quelle della seconda bomba (Nagasaki); inoltre il brano non nomina l’esercito americano.",
      "B": "È quanto dice la prima frase del brano: nell’agosto 1945 la prima bomba atomica distrusse Hiroshima.",
      "C": "Little boy è il nome della bomba di Hiroshima, non di Nagasaki.",
      "D": "La prima bomba colpì Hiroshima; data del 6 agosto ed esercito americano non sono nel brano."
    }
  },
  {
    "id": 20,
    "corretta": "C",
    "suggerimento": "Verifica ogni alternativa sul testo: se anche una sola è falsa, l’opzione «tutte corrette» cade.",
    "spiegazione": "Il brano afferma che, oltre alle vittime immediate, **molte persone morirono nei mesi successivi** per le complicazioni delle ferite e per le radiazioni. Le altre affermazioni sono errate o estranee al testo.",
    "perOpzione": {
      "A": "Tra 60.000 e 80.000 sono i morti immediati di Hiroshima; la prima bomba, peraltro, non colpì Nagasaki.",
      "B": "Non può essere: almeno due delle altre affermazioni sono false.",
      "C": "Lo dice il brano: molte persone morirono nei mesi successivi per gravi complicazioni dovute alle ferite.",
      "D": "La resa del Giappone non è nel brano, e in ogni caso si trattava della Seconda, non della Prima guerra mondiale."
    }
  },
  {
    "id": 21,
    "corretta": "C",
    "suggerimento": "Cerca nel finale del brano dove si trovano il Parco della Pace e la Cupola.",
    "spiegazione": "Il brano colloca a **Hiroshima** il **Parco della Pace** con la Cupola della bomba atomica. Le altre alternative confondono le due città o introducono fatti non presenti.",
    "perOpzione": {
      "A": "Resa del Giappone e Germania non sono menzionate nel brano.",
      "B": "La Cupola si trova a Hiroshima, nel Parco della Pace, e il brano non parla di persone che vi trovarono riparo.",
      "C": "Il brano dice che Hiroshima ospita l’importantissimo Parco della Pace.",
      "D": "Little boy fu sganciata su Hiroshima; il bombardiere americano non è nominato."
    }
  },
  {
    "id": 22,
    "corretta": "A",
    "suggerimento": "Il brano definisce il Premio Nobel nella prima frase: quale alternativa la riprende senza aggiungere nulla?",
    "spiegazione": "Il brano descrive il Nobel come **onorificenza internazionale**, istituita nel 1895, **assegnata annualmente** a chi si è distinto in campi specifici (letteratura, pace, chimica, fisica, medicina, economia).",
    "perOpzione": {
      "A": "Riprende fedelmente la definizione del brano.",
      "B": "Il brano parla di onorificenza «internazionale» e non pone alcun limite di origine.",
      "C": "Il brano dice solo che Carducci fu il primo italiano; il numero di dieci vincitori italiani non compare.",
      "D": "Carducci vinse nel 1906, mentre il premio era stato istituito per testamento nel 1895: il brano non dice che fu il primo assegnatario né che Nobel glielo consegnò."
    }
  },
  {
    "id": 23,
    "corretta": "D",
    "suggerimento": "Fai attenzione alle date del brano: a quale evento corrisponde ciascuna?",
    "spiegazione": "Il brano scandisce la carriera di Carducci: iscrizione a Lettere nel **1853**, laurea e insegnamento nel pisano nel **1856**, cattedra a **Bologna** dal **1860 al 1904**.",
    "perOpzione": {
      "A": "Nel 1853 si iscrive alla Facoltà di Lettere; il lavoro di insegnante nel pisano arriva dopo la laurea (1856).",
      "B": "Il brano dice che l’esperienza fu fallimentare, non che preferisse l’insegnamento privato.",
      "C": "Il brano indica l’anno della laurea ma non l’università; Bologna è il luogo della cattedra, ottenuta nel 1860.",
      "D": "Il brano afferma che a Bologna si ferma a insegnare fino al 1904."
    }
  },
  {
    "id": 24,
    "corretta": "A",
    "suggerimento": "Le date 1861-1887 nel brano a cosa si riferiscono: a tutte le opere o a una sola raccolta?",
    "spiegazione": "Il brano dice che «San Martino» fa parte della raccolta **Rime nuove, composta dal 1861 al 1887**. Le date valgono per quella raccolta, non per tutta l’opera di Carducci.",
    "perOpzione": {
      "A": "Corrisponde all’ultima frase del brano.",
      "B": "Estende indebitamente a tutte le opere le date che il brano riferisce alla sola raccolta Rime nuove.",
      "C": "Il senato non è menzionato nel brano (e nel 1900 l’Italia era un Regno, non una Repubblica).",
      "D": "Il brano non indica alcun secondo nome."
    }
  },
  {
    "id": 25,
    "corretta": "C",
    "suggerimento": "La Costituzione ammette restrizioni della libertà personale «nei soli casi e modi» previsti da quale fonte, e con quanto spazio per altri atti?",
    "spiegazione": "L’art. 13 Cost. consente restrizioni della libertà personale solo per atto motivato dell’autorità giudiziaria e **«nei soli casi e modi previsti dalla legge»**: è una **riserva di legge assoluta** (e di giurisdizione), che esclude fonti secondarie.",
    "perOpzione": {
      "A": "La riserva relativa ammette che la legge fissi solo i principi lasciando il resto ai regolamenti: per la libertà personale non basta.",
      "B": "La riserva di assemblea richiede l’approvazione in aula (art. 72, co. 4, Cost.) per alcune leggi; non è la formula dell’art. 13.",
      "C": "«Nei soli casi e modi previsti dalla legge»: la disciplina deve stare interamente nella legge, cioè riserva assoluta."
    },
    "riferimenti": [
      {
        "normaId": "cost_art_13"
      },
      {
        "normaId": "cost_art_72"
      }
    ]
  },
  {
    "id": 26,
    "corretta": "A",
    "suggerimento": "Le tre opzioni differiscono solo nel primo presupposto: quale «unità» il Governo deve garantire secondo l’art. 120 Cost.?",
    "spiegazione": "L’**art. 120, co. 2, Cost.** consente al Governo di sostituirsi a Regioni ed enti locali per mancato rispetto di norme internazionali o comunitarie, per pericolo grave per l’incolumità e la sicurezza pubblica, e quando lo richiede la **tutela dell’unità giuridica o economica** (in particolare dei livelli essenziali delle prestazioni).",
    "perOpzione": {
      "A": "Riproduce i presupposti dell’art. 120, co. 2, Cost., compresa la tutela dell’unità giuridica o economica.",
      "B": "L’equilibrio di bilancio (art. 81 e 119 Cost.) non figura tra i presupposti del potere sostitutivo.",
      "C": "Il buon costume è un limite ad alcune libertà (es. art. 21 Cost.), non un presupposto del potere sostitutivo."
    },
    "riferimenti": [
      {
        "normaId": "cost_art_120"
      },
      {
        "normaId": "cost_art_81"
      },
      {
        "normaId": "cost_art_119"
      },
      {
        "normaId": "cost_art_21"
      }
    ]
  },
  {
    "id": 27,
    "corretta": "A",
    "suggerimento": "L’art. 100 Cost. disciplina due organi ausiliari: quale dei due si occupa dei controlli?",
    "spiegazione": "Per l’**art. 100 Cost.** il Consiglio di Stato è **organo di consulenza giuridico-amministrativa e di tutela della giustizia nell’amministrazione**; il controllo preventivo di legittimità sugli atti del Governo spetta invece alla **Corte dei conti**.",
    "perOpzione": {
      "A": "È la formula testuale dell’art. 100, primo comma, Cost.",
      "B": "La consulenza è giuridico-amministrativa, non contabile: la materia contabile è propria della Corte dei conti.",
      "C": "Il controllo preventivo di legittimità sugli atti del Governo è attribuito dallo stesso art. 100 alla Corte dei conti."
    },
    "riferimenti": [
      {
        "normaId": "cost_art_100"
      }
    ]
  },
  {
    "id": 28,
    "corretta": "C",
    "suggerimento": "Discrezionale contro vincolato: che cosa distingue i due tipi di potere?",
    "spiegazione": "Il potere è **discrezionale** quando la norma lascia all’amministrazione un **margine di scelta** su se, quando o come provvedere, da esercitare ponderando gli interessi in gioco; è **vincolato** quando la norma predetermina tutto.",
    "perOpzione": {
      "A": "Il soggetto titolare (enti locali o Stato) non incide sulla natura del potere.",
      "B": "La copertura finanziaria riguarda la spesa, non il margine di scelta dell’amministrazione.",
      "C": "Lo spazio di scelta lasciato dalla norma è proprio ciò che definisce la discrezionalità."
    }
  },
  {
    "id": 29,
    "corretta": "C",
    "suggerimento": "Sono gli incarichi apicali, i più vicini all’indirizzo politico: che cosa succede quando cambia il Governo?",
    "spiegazione": "L’**art. 19, co. 8, d.lgs. 165/2001** prevede che gli incarichi apicali del co. 3 **cessano decorsi novanta giorni dal voto sulla fiducia al Governo** (il cosiddetto spoils system), salvo conferma.",
    "perOpzione": {
      "A": "Non c’è un’esclusiva: possono essere conferiti anche a dirigenti di altre amministrazioni o a esterni nei limiti dell’art. 19, co. 6.",
      "B": "La norma non prevede un limite di due rinnovi consecutivi per questi incarichi.",
      "C": "È la regola dell’art. 19, co. 8: cessazione automatica dopo novanta giorni dalla fiducia al nuovo Governo."
    },
    "riferimenti": [
      {
        "normaId": "dlgs165_2001_art_19"
      }
    ]
  },
  {
    "id": 30,
    "corretta": "A",
    "suggerimento": "Ricorda la differenza tra demanio e patrimonio indisponibile: dove stanno gli edifici sedi di uffici pubblici?",
    "spiegazione": "Fanno parte del demanio idrico **tutte le acque superficiali e sotterranee, ancorché non estratte dal sottosuolo** (art. 144 d.lgs. 152/2006, già l. 36/1994). I beni demaniali sono **inalienabili e non espropriabili** (art. 823 c.c.); gli edifici sedi di uffici pubblici con i loro arredi rientrano invece nel **patrimonio indisponibile** (art. 826 c.c.).",
    "perOpzione": {
      "A": "È la formula della legge: tutte le acque superficiali e sotterranee appartengono al demanio dello Stato.",
      "B": "I beni demaniali sono inalienabili e non possono formare oggetto di diritti a favore di terzi: i creditori non possono aggredirli.",
      "C": "Edifici sedi di uffici pubblici, con i loro arredi, e beni destinati a un pubblico servizio fanno parte del patrimonio indisponibile, non del demanio."
    },
    "riferimenti": [
      {
        "normaId": "dlgs152_2006_art_144"
      },
      {
        "normaId": "cc_art_823"
      },
      {
        "normaId": "cc_art_826"
      }
    ]
  },
  {
    "id": 31,
    "corretta": "C",
    "suggerimento": "La responsabilità amministrativo-contabile ha un termine di prescrizione speciale, più breve di quello ordinario: quanto dura?",
    "spiegazione": "Per l’**art. 1, co. 2, l. 20/1994** il diritto al risarcimento del danno erariale si prescrive in **cinque anni** dal fatto dannoso o, in caso di **occultamento doloso**, dalla data della sua **scoperta**.",
    "perOpzione": {
      "A": "Il termine decennale è quello ordinario del codice civile; per il danno erariale la legge ne fissa uno speciale di cinque anni.",
      "B": "Il dolo e l’illecito arricchimento rilevano per la trasmissibilità agli eredi, non rendono il diritto imprescrittibile.",
      "C": "È il testo dell’art. 1, co. 2, l. 20/1994: cinque anni dal fatto, o dalla scoperta in caso di occultamento doloso."
    },
    "riferimenti": [
      {
        "normaId": "l20_1994_art_1"
      }
    ]
  },
  {
    "id": 32,
    "corretta": "A",
    "suggerimento": "«Preventivo» rispetto a che cosa? Pensa a quando l’atto comincia a produrre effetti.",
    "spiegazione": "Il **controllo preventivo di legittimità** (es. quello della Corte dei conti ex art. 3 l. 20/1994) verifica la conformità a legge di alcuni atti **prima che producano effetti**: l’esito positivo è condizione di **efficacia** dell’atto.",
    "perOpzione": {
      "A": "Descrive il controllo sugli atti: verifica dei vizi di legittimità che condiziona l’efficacia del provvedimento.",
      "B": "Richiama i limiti all’iniziativa economica dell’art. 41 Cost., non un controllo sugli atti amministrativi.",
      "C": "Descrive il controllo sugli organi (es. scioglimento dei consigli), che è altra cosa rispetto al controllo sugli atti."
    },
    "riferimenti": [
      {
        "normaId": "l20_1994_art_3"
      },
      {
        "normaId": "cost_art_41"
      }
    ]
  },
  {
    "id": 33,
    "corretta": "B",
    "suggerimento": "Quale istituzione UE riceve la notifica dei progetti di aiuto e decide se sono compatibili con il mercato interno?",
    "spiegazione": "Per l’**art. 108 TFUE** la **Commissione** esamina gli aiuti esistenti, riceve la **notifica preventiva** dei nuovi aiuti e ne decide la compatibilità; solo eccezionalmente il Consiglio può deliberare all’unanimità (art. 108, par. 2, co. 3).",
    "perOpzione": {
      "A": "Il Consiglio interviene solo in casi eccezionali; la competenza ordinaria di verifica è della Commissione.",
      "B": "È la Commissione a esaminare e decidere sulla compatibilità degli aiuti di Stato.",
      "C": "Il Comitato economico e sociale è un organo consultivo, senza poteri decisionali in materia di aiuti."
    },
    "riferimenti": [
      {
        "normaId": "tfue_art_108"
      }
    ]
  },
  {
    "id": 34,
    "corretta": "A",
    "suggerimento": "Schengen non coinvolge tutti gli Stati membri: con quale strumento di integrazione differenziata è stato inserito nei Trattati?",
    "spiegazione": "Il **Protocollo n. 19** sull’acquis di Schengen **autorizza gli Stati membri partecipanti a instaurare tra loro una cooperazione rafforzata** nelle materie coperte dall’acquis, nel quadro istituzionale e giuridico dell’Unione.",
    "perOpzione": {
      "A": "È quanto prevede l’art. 1 del Protocollo n. 19.",
      "B": "Il Protocollo non fissa scadenze: l’ingresso di nuovi Stati dipende da una decisione all’unanimità del Consiglio, previa verifica dei requisiti.",
      "C": "Il Protocollo non esclude gli Stati terzi: Islanda, Norvegia, Svizzera e Liechtenstein sono associati a Schengen."
    },
    "riferimenti": [
      {
        "normaId": "prot19_art_1"
      }
    ]
  },
  {
    "id": 35,
    "corretta": "A",
    "suggerimento": "Ricorda quale aspetto l’art. 79 riserva espressamente agli Stati membri.",
    "spiegazione": "L’**art. 79, par. 2, TFUE** consente a Parlamento e Consiglio di adottare misure su condizioni di ingresso e soggiorno, **diritti dei cittadini di paesi terzi regolarmente soggiornanti**, immigrazione irregolare e tratta. Il par. 5 **riserva agli Stati** la determinazione dei **volumi di ingresso**.",
    "perOpzione": {
      "A": "Corrisponde alla lett. b) dell’art. 79, par. 2, TFUE.",
      "B": "L’art. 79 riguarda l’immigrazione e il soggiorno irregolari, compresi allontanamento e rimpatrio, ma non prevede l’armonizzazione dei motivi di espulsione.",
      "C": "Il par. 5 lascia espressamente agli Stati membri la determinazione dei volumi di ingresso."
    },
    "riferimenti": [
      {
        "normaId": "tfue_art_79"
      }
    ]
  },
  {
    "id": 36,
    "corretta": "B",
    "suggerimento": "Sulle ordinate c’è il prezzo: se la curva è verticale, cosa succede alla quantità domandata quando il prezzo cambia?",
    "spiegazione": "Una domanda **verticale** (parallela all’asse dei prezzi) indica che la quantità domandata **non varia** al variare del prezzo: elasticità **zero**, cioè domanda **perfettamente anelastica**. La domanda orizzontale è invece infinitamente elastica.",
    "perOpzione": {
      "A": "L’elasticità infinita corrisponde a una curva orizzontale, parallela all’asse delle ascisse.",
      "B": "Curva verticale: la quantità è fissa qualunque sia il prezzo, quindi elasticità nulla.",
      "C": "Il segno negativo è normale per le curve di domanda inclinate; non descrive il caso della curva verticale, con elasticità pari a zero."
    }
  },
  {
    "id": 37,
    "corretta": "A",
    "suggerimento": "Con un prezzo massimo sotto l’equilibrio, chi riduce le quantità: consumatori o produttori?",
    "spiegazione": "Un **prezzo massimo** sotto l’equilibrio fa salire la domanda ma **riduce l’offerta**: la quantità scambiata scende al livello offerto e si perdono scambi che avrebbero creato valore. Quella è la **perdita secca**; il passaggio di surplus dai produttori ai consumatori è un trasferimento, non una perdita.",
    "perOpzione": {
      "A": "La perdita nasce dagli scambi che non avvengono perché i produttori offrono meno al prezzo imposto.",
      "B": "Con un tetto al prezzo la domanda aumenta: il vincolo è l’offerta, non la domanda.",
      "C": "Il trasferimento va semmai dai produttori ai consumatori e, in ogni caso, un trasferimento non è una perdita secca."
    }
  },
  {
    "id": 38,
    "corretta": "C",
    "suggerimento": "La definizione parla di singole branche e di produzione meno consumi intermedi: è un aggregato nazionale o una misura di ciò che ciascuna branca aggiunge?",
    "spiegazione": "Il **valore aggiunto** è la produzione meno i **consumi intermedi**, calcolato per branca. Il PIL è la somma dei valori aggiunti più le imposte nette sui prodotti; il RNL aggiunge al PIL i redditi netti dall’estero.",
    "perOpzione": {
      "A": "Il RNL è un aggregato nazionale che include i redditi netti dall’estero, non una misura per branca.",
      "B": "Il PIL deriva dalla somma dei valori aggiunti (più imposte nette sui prodotti); la definizione data, per singola branca, è quella del valore aggiunto.",
      "C": "Produzione meno consumi intermedi di ogni branca: è la definizione di valore aggiunto."
    }
  },
  {
    "id": 39,
    "corretta": "C",
    "suggerimento": "«Fallimento» qui non è una procedura concorsuale: rispetto a quale obiettivo il mercato «fallisce»?",
    "spiegazione": "Si ha **fallimento del mercato** quando il sistema dei prezzi **non porta a un’allocazione efficiente** delle risorse: esternalità, beni pubblici, potere di mercato, informazione asimmetrica. È una delle principali giustificazioni dell’intervento pubblico.",
    "perOpzione": {
      "A": "Gli errori dell’intervento pubblico si chiamano fallimenti dello Stato (o del governo).",
      "B": "L’uscita dal mercato di imprese non profittevoli è un esito normale della concorrenza, non un fallimento del mercato.",
      "C": "È la definizione: il meccanismo dei prezzi non realizza l’allocazione efficiente."
    }
  },
  {
    "id": 40,
    "corretta": "A",
    "suggerimento": "Se gli investimenti non reagiscono al tasso, la domanda aggregata dipende dal tasso? E la politica monetaria agisce proprio attraverso il tasso...",
    "spiegazione": "Con investimenti **insensibili al tasso d’interesse** la domanda non dipende dal tasso: la **IS è verticale**. La politica monetaria sposta la LM e cambia il tasso, ma **il reddito non varia**, per cui è **inefficace**; resta efficace la politica fiscale.",
    "perOpzione": {
      "A": "IS verticale: le variazioni del tasso indotte dalla politica monetaria non toccano reddito e domanda.",
      "B": "Con IS verticale uno spostamento della LM modifica solo il tasso, non il reddito: la politica monetaria non è efficace.",
      "C": "La IS orizzontale corrisponde al caso opposto, con investimenti infinitamente sensibili al tasso."
    }
  },
  {
    "id": 41,
    "corretta": "C",
    "suggerimento": "«Greenfield» significa letteralmente «prato verde»: si parte da zero o si compra qualcosa che esiste già?",
    "spiegazione": "Un IDE **greenfield** consiste nel **creare da zero** nuovi impianti o nuove unità produttive all’estero; si contrappone agli IDE **brownfield**, cioè fusioni e acquisizioni (M&A) di imprese già esistenti.",
    "perOpzione": {
      "A": "La fusione con un’impresa estera è un’operazione di M&A (brownfield).",
      "B": "L’acquisizione di partecipazioni in un’impresa esistente è M&A; se non dà controllo, è un investimento di portafoglio.",
      "C": "È la definizione di investimento greenfield: si costruisce una nuova unità produttiva."
    }
  },
  {
    "id": 42,
    "corretta": "A",
    "suggerimento": "Le immobilizzazioni sono per definizione beni durevoli: che cosa aggiunge l’aggettivo «immateriali»?",
    "spiegazione": "Le **immobilizzazioni immateriali** sono attività **prive di consistenza fisica** (brevetti, licenze, software, avviamento…) destinate a **durare più esercizi**, per cui vengono ammortizzate.",
    "perOpzione": {
      "A": "Intangibili e con utilità pluriennale: è la definizione.",
      "B": "Le partecipazioni nel capitale di altre imprese sono immobilizzazioni finanziarie, non immateriali.",
      "C": "L’utilità pluriennale è proprio ciò che caratterizza le immobilizzazioni; le attività di breve periodo sono nell’attivo circolante."
    }
  },
  {
    "id": 43,
    "corretta": "B",
    "suggerimento": "Nel sistema dei controlli interni delle PA ci sono controlli diversi per obiettivi diversi: quale guarda al rapporto tra risorse, azioni e risultati?",
    "spiegazione": "Il **controllo di gestione** (art. 1 e 4 d.lgs. 286/1999) serve a verificare **efficacia, efficienza ed economicità** dell’azione amministrativa, per ottimizzare il rapporto tra costi e risultati, anche con interventi correttivi.",
    "perOpzione": {
      "A": "La valutazione delle performance individuali (in particolare dei dirigenti) è un’attività distinta.",
      "B": "È la finalità che la legge assegna al controllo di gestione.",
      "C": "La definizione delle deleghe attiene all’organizzazione e all’attribuzione delle responsabilità, non al controllo di gestione."
    },
    "riferimenti": [
      {
        "normaId": "dlgs286_1999_art_1"
      },
      {
        "normaId": "dlgs286_1999_art_4"
      }
    ]
  },
  {
    "id": 44,
    "corretta": "A",
    "suggerimento": "Pensa ai lavori sui «miti razionalizzati» (1977) e sull’isomorfismo istituzionale (1983).",
    "spiegazione": "Il **neo-istituzionalismo** organizzativo nasce con **Meyer e Rowan** (strutture formali come mito e cerimonia, 1977) e **DiMaggio e Powell** (isomorfismo coercitivo, mimetico e normativo, 1983): le organizzazioni si somigliano per ottenere legittimazione.",
    "perOpzione": {
      "A": "Sono gli autori fondativi del neo-istituzionalismo organizzativo.",
      "B": "Simon (razionalità limitata) e Fayol (teoria classica della direzione) appartengono ad altre scuole; l’elenco non è legato al neo-istituzionalismo.",
      "C": "Maslow e Herzberg sono teorici della motivazione, Weick del sensemaking: non del neo-istituzionalismo."
    }
  },
  {
    "id": 45,
    "corretta": "B",
    "suggerimento": "Chi ha proposto il modello della cultura organizzativa su tre livelli (artefatti, valori dichiarati, assunti di base)?",
    "spiegazione": "**Edgar Schein** è il riferimento classico sulla **cultura organizzativa**, che descrive su tre livelli: **artefatti**, **valori dichiarati** e **assunti di base** taciti.",
    "perOpzione": {
      "A": "Söderlund è noto soprattutto per gli studi sul project management.",
      "B": "Schein è l’autore di riferimento sulla cultura organizzativa.",
      "C": "Taylor è il padre dello scientific management (organizzazione scientifica del lavoro), non della teoria della cultura organizzativa."
    }
  },
  {
    "id": 46,
    "corretta": "A",
    "suggerimento": "Chi ha legato l’efficacia dello stile di leadership alla «favorevolezza» della situazione, misurando lo stile con la scala LPC?",
    "spiegazione": "Il **modello contingente** di **Fred Fiedler** sostiene che l’efficacia del leader dipende dall’adattamento tra il suo **stile** (orientato al compito o alle relazioni, misurato con la scala LPC) e la **situazione** (relazioni leader-membri, struttura del compito, potere di posizione).",
    "perOpzione": {
      "A": "Fiedler è l’autore del modello contingente della leadership.",
      "B": "Il nome non è associato alla teoria contingente della leadership.",
      "C": "Fayol appartiene alla teoria classica dell’amministrazione (le funzioni della direzione), non alla teoria contingente della leadership."
    }
  },
  {
    "id": 47,
    "corretta": "A",
    "suggerimento": "«Ranking» vuol dire classifica: e che cosa si mette in classifica nella valutazione delle posizioni?",
    "spiegazione": "Il **job ranking** è il metodo più semplice di **valutazione delle posizioni** (job evaluation): le mansioni vengono **ordinate in graduatoria** in base al loro valore relativo per l’organizzazione. Si valuta la posizione, non la persona che la occupa.",
    "perOpzione": {
      "A": "È la definizione: una graduatoria delle posizioni o dei compiti.",
      "B": "I percorsi di carriera riguardano lo sviluppo delle persone, non la valutazione delle posizioni.",
      "C": "Un premio al dipendente riguarda la valutazione della prestazione individuale, non delle posizioni."
    }
  },
  {
    "id": 48,
    "corretta": "B",
    "suggerimento": "Chi ha descritto il «tipo ideale» di burocrazia fondato sul potere legale-razionale?",
    "spiegazione": "**Max Weber** descrive la **burocrazia** come tipo ideale di organizzazione legale-razionale: regole scritte e impersonali, **alta formalizzazione**, gerarchia, competenze definite, funzionari selezionati per competenza.",
    "perOpzione": {
      "A": "Alderfer è un teorico della motivazione (modello ERG).",
      "B": "Weber è l’autore classico del modello burocratico.",
      "C": "Mayo è il padre della scuola delle relazioni umane (esperimenti di Hawthorne), che anzi valorizza gli aspetti informali."
    }
  },
  {
    "id": 49,
    "corretta": "B",
    "suggerimento": "È una creazione recente, nata con un decreto-legge durante il Governo Draghi.",
    "spiegazione": "L’**ACN** è stata istituita dal **d.l. 14 giugno 2021, n. 82**, convertito dalla l. 109/2021, come autorità nazionale per la **cybersicurezza** a tutela degli interessi nazionali nello spazio cibernetico.",
    "perOpzione": {
      "A": "Nel 2015 l’ACN non esisteva ancora.",
      "B": "Il d.l. 82/2021 ha istituito l’Agenzia per la cybersicurezza nazionale.",
      "C": "Nel 2001 l’ACN non esisteva; quell’anno è piuttosto legato al d.lgs. 165/2001 sul pubblico impiego."
    }
  },
  {
    "id": 50,
    "corretta": "B",
    "suggerimento": "Nella classificazione di Lowi (regolative, distributive, redistributive, costitutive), che cosa caratterizza quelle regolative?",
    "spiegazione": "Nella tipologia di **Lowi** le **politiche regolative** incidono sui comportamenti fissando **regole, obblighi e divieti**; le politiche distributive e redistributive riguardano invece l’allocazione di risorse.",
    "perOpzione": {
      "A": "I criteri di finanziamento attengono alle politiche distributive o di bilancio, non a quelle regolative.",
      "B": "Regole, obblighi e divieti che orientano i comportamenti: è il tratto delle politiche regolative.",
      "C": "Allocare risorse scarse è tipico delle politiche distributive o redistributive."
    }
  },
  {
    "id": 51,
    "corretta": "A",
    "suggerimento": "Un tema discusso dall’opinione pubblica entra sempre e subito nell’agenda delle istituzioni?",
    "spiegazione": "L’**agenda pubblica** (o sistemica) raccoglie i problemi che l’opinione pubblica ritiene meritevoli di attenzione; l’**agenda istituzionale** quelli che i decisori prendono effettivamente in esame. Le due agende sono **dinamiche** e **non coincidono necessariamente** (Cobb ed Elder).",
    "perOpzione": {
      "A": "Entrambe cambiano nel tempo e possono divergere: è la distinzione classica.",
      "B": "Solo l’agenda istituzionale riguarda le questioni su cui i decisori sono chiamati a decidere; quella pubblica è più ampia.",
      "C": "Le agende contengono problemi, non soluzioni tecniche o strumenti di attuazione."
    }
  },
  {
    "id": 52,
    "corretta": "C",
    "suggerimento": "Pensa ai modi in cui un governo può orientare i comportamenti: imporre, fare direttamente, incentivare, persuadere.",
    "spiegazione": "La classificazione più diffusa degli **strumenti di policy** distingue: **regolazione** (obblighi e divieti), **gestione pubblica diretta** di servizi, **incentivi o disincentivi** economici e **informazione/persuasione**.",
    "perOpzione": {
      "A": "Formula confusa, limitata agli interventi sui mercati; non è una classificazione generale degli strumenti.",
      "B": "Considera solo la regolazione sui mercati, trascurando gestione diretta, incentivi e informazione.",
      "C": "È la classificazione completa: regolazione, gestione diretta, incentivi/disincentivi, informazione."
    }
  },
  {
    "id": 53,
    "corretta": "C",
    "suggerimento": "Diffida dell’avverbio «solo»: si può valutare una politica prima di avviarla?",
    "spiegazione": "La valutazione accompagna tutto il ciclo della politica: **ex ante** (per scegliere tra alternative), **in itinere** (per correggere l’attuazione) ed **ex post** (per misurare risultati e impatti).",
    "perOpzione": {
      "A": "La valutazione non è «solo» ex post e non si limita al confronto tra costi.",
      "B": "La valutazione non è «solo» ex post; i benefici sono soltanto uno degli aspetti considerati.",
      "C": "Le tre fasi (ex ante, in itinere, ex post) sono tutte riconosciute."
    }
  },
  {
    "id": 54,
    "corretta": "B",
    "suggerimento": "Una rete di policy comprende solo soggetti pubblici, solo privati o entrambi?",
    "spiegazione": "I **policy networks** sono insiemi di relazioni, **formali e informali**, tra **attori pubblici** di vari livelli e **attori sociali/privati** (gruppi di interesse, esperti, associazioni) che interagiscono e negoziano intorno a una politica.",
    "perOpzione": {
      "A": "Esclude gli attori non pubblici, che sono invece parte essenziale delle reti di policy.",
      "B": "Attori governativi e sociali, legami formali e informali: è la definizione.",
      "C": "Esclude gli attori pubblici, che sono centrali nelle reti di policy."
    }
  },
  {
    "id": 55,
    "corretta": "B",
    "suggerimento": "Serve un verbo che regga direttamente un aggettivo («difficult»), con il senso di «si rivelò».",
    "spiegazione": "**To prove + aggettivo** significa «rivelarsi, dimostrarsi»: «The law proved far more difficult to draft…». **Demonstrate** è transitivo e richiede un oggetto.",
    "perOpzione": {
      "A": "«Established as» non regge un aggettivo e non ha senso nella frase.",
      "B": "«Proved difficult» = si rivelò difficile: costruzione corretta.",
      "C": "«Demonstrate» richiede un complemento oggetto («demonstrated that…»), non un aggettivo."
    }
  },
  {
    "id": 56,
    "corretta": "C",
    "suggerimento": "C’è uno sciopero: che cosa conviene fare con la riunione?",
    "spiegazione": "Il phrasal verb **call off** significa **annullare, disdire**: «call off the meeting» = annullare la riunione, per via dello sciopero.",
    "perOpzione": {
      "A": "«Call on» significa fare visita a qualcuno o invitarlo a fare qualcosa.",
      "B": "«Call out» significa chiamare ad alta voce o denunciare pubblicamente.",
      "C": "«Call off» = annullare: è il senso richiesto."
    }
  },
  {
    "id": 57,
    "corretta": "A",
    "suggerimento": "Question tag con «I am» affermativo: c’è una forma irregolare da ricordare.",
    "spiegazione": "Il **question tag** di «I am» in una frase affermativa è irregolare: **«aren’t I?»** (non esiste «amn’t»; «am I not?» è formale e ha un altro ordine).",
    "perOpzione": {
      "A": "«…, aren’t I?» è la forma standard del tag negativo dopo «I am».",
      "B": "«Don’t» si usa con verbi lessicali al presente, non con «to be».",
      "C": "«Am not I?» ha l’ordine sbagliato; la forma formale sarebbe «am I not?»."
    }
  },
  {
    "id": 58,
    "corretta": "A",
    "suggerimento": "Quale sostantivo si combina in modo naturale con «academic» per indicare i criteri di qualità?",
    "spiegazione": "La collocazione corretta è **academic standards** (criteri/livelli di qualità accademica). «Laws» e «ordinances» indicano norme giuridiche.",
    "perOpzione": {
      "A": "«Strict academic standards» = criteri accademici rigorosi: collocazione naturale.",
      "B": "«Laws» sono leggi in senso giuridico, non criteri di qualità accademica.",
      "C": "«Ordinances» sono provvedimenti normativi locali: fuori contesto."
    }
  },
  {
    "id": 59,
    "corretta": "C",
    "suggerimento": "In inglese «hundred» e «thousand» prendono la -s quando seguono un numero?",
    "spiegazione": "Dopo un numero, **hundred** e **thousand** restano **invariati** (niente -s), e nell’inglese britannico si inserisce **«and»** prima di decine e unità: «three hundred **and** sixty-nine thousand, two hundred **and** fifty-seven».",
    "perOpzione": {
      "A": "«Thousands» con la -s è errato dopo un numero; manca inoltre «and» tra «hundred» e «fifty-seven».",
      "B": "«Hundreds» con la -s è errato due volte e «and» è collocato male.",
      "C": "Forma corretta: nessun plurale e «and» nelle posizioni giuste."
    }
  },
  {
    "id": 60,
    "corretta": "A",
    "suggerimento": "Cerca l’espressione idiomatica che significa «di regola, in generale».",
    "spiegazione": "**As a general rule** è l’espressione idiomatica per «di norma, in generale». Le altre sono costruzioni scorrette o innaturali (si dice «**under** normal circumstances», e «edict» richiederebbe un articolo).",
    "perOpzione": {
      "A": "«As a general rule» = di regola: idiomatico e corretto.",
      "B": "La preposizione corretta è «under normal circumstances», non «with».",
      "C": "«Under current edict» manca dell’articolo ed è innaturale: un editto non è il modo abituale di esprimere una prassi d’ufficio."
    }
  }
];
