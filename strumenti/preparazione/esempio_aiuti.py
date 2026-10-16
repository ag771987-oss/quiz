# Aiuti per ogni domanda: (suggerimento, concetto chiave, spiegazione per ogni opzione)
A = {}
def a(id, sugg, concetto, **opz):
    A[id] = {"suggerimento": sugg, "spiegazione": concetto, "perOpzione": opz}

# ── Situazionali ──────────────────────────────────────────────────────────
a(1, "C’è un’emergenza e poco tempo: conviene agire da soli o mettere subito al lavoro tutte le risorse disponibili?",
  "In emergenza con scadenza stretta si premia chi **mobilita subito il team**, distribuisce i compiti e lavora su più soluzioni in parallelo, con un controllo ravvicinato.",
  A="Coinvolge tutti subito, assegna compiti precisi e controlla i progressi ogni quattro ore: velocità, chiarezza e monitoraggio, proprio quello che serve.",
  B="Percorso solitario e sequenziale: aspettare l’ok definitivo prima di informare il team spreca il tempo che manca. Il team resta inattivo proprio nel momento critico.",
  C="Usa canali informali per «sbloccare» una pratica doganale (poco trasparente, potenzialmente scorretto) e tiene il team all’oscuro.")
a(2, "I KPI individuali sono normali: il problema sta nelle persone o da qualche altra parte? Prima di agire, cosa ti manca?",
  "Prima di intervenire su un problema bisogna **capirne la causa**. Se i tecnici lavorano bene, l’aumento dei ticket dipende da altro (un rilascio, un guasto…): serve una diagnosi rapida.",
  A="Diagnosi mirata e veloce: chi ha più esperienza cerca pattern ricorrenti e se ne discute in giornata. Agisci sulla causa, non sul sintomo.",
  B="Atteggiamento passivo: abbassa il livello di servizio sperando che il problema passi da solo, senza capirne l’origine.",
  C="Sembra proattiva, ma riorganizza il lavoro senza sapere perché i ticket aumentano. Se la causa è esterna (es. un bug), il triage non la elimina.")
a(3, "Clara ha potenziale ma poca sicurezza: meglio buttarla nella mischia, aspettare, o costruire un percorso con lei?",
  "Lo sviluppo delle persone funziona se è **condiviso** con l’interessato e **graduale**: obiettivi a tappe, affiancamento, piccole prove crescenti.",
  A="Salto troppo brusco: una persona che fatica a parlare nei meeting viene esposta subito al top management. Il rischio di un’esperienza negativa è alto.",
  B="Delega tutto a un corso e rimanda «a un futuro non definito»: di fatto non c’è nessuna azione concreta di sviluppo.",
  C="Colloquio di sviluppo e piano graduale costruito con lei (workshop, shadowing, piccole presentazioni): fa crescere fiducia e competenze passo dopo passo.")
a(4, "Paolo non mostra interesse per la gestione: prima di decidere il suo percorso, cosa dovresti sapere di lui?",
  "Prima di orientare la carriera di qualcuno bisogna capire **competenze e motivazioni**, e farlo **insieme a lui**. Imporre un ruolo non desiderato raramente funziona.",
  A="Ben strutturata (basso rischio, mentoring), ma ignora il dato chiave: Paolo non è interessato alla gestione. Gli imponi un ruolo che non vuole.",
  B="Parte dall’ascolto: verifica se la strada gestionale è coerente con le sue motivazioni e ne parla con lui prima di qualsiasi incarico.",
  C="Usa solo una leva economica e presume che il disinteresse sia «solo una questione di esperienza», senza verificarlo.")
a(5, "Le persone temono il cambiamento: come puoi ridurre la paura invece di imporre o solo spiegare?",
  "Davanti alle **resistenze al cambiamento** funziona un approccio graduale e partecipativo: sperimentare, ascoltare, correggere, poi estendere.",
  A="Impone data e regole con poca flessibilità: ignora le preoccupazioni e alimenta la resistenza.",
  B="Area pilota con volontari e feedback strutturati: le persone provano il nuovo modello, i problemi emergono prima del roll-out e si possono correggere.",
  C="Spiega i vantaggi, ma solo in modo unidirezionale e senza fasi intermedie: informare non basta a far accettare un cambiamento.")
a(6, "Lo scetticismo nasce spesso dal non conoscere uno strumento: cosa lo rende concreto e credibile?",
  "Per far adottare una novità a chi è scettico servono **esperienza pratica** e **testimonianze di pari**, non imposizioni né rinvii.",
  A="Rinvia di sei mesi e lascia le persone da sole con la documentazione tecnica: nessun accompagnamento.",
  B="Impone lo strumento come unico canale e svuota il ruolo degli HR: aumenta la resistenza e perde il controllo umano sulla selezione.",
  C="Workshop su casi reali e confronto con colleghi che già usano la piattaforma: rende tangibili i benefici e accompagna l’adozione.")
a(7, "C’è un rischio per la salute e un problema di conformità: cosa viene prima di tutto?",
  "Quando sono in gioco **sicurezza dei pazienti e norme**, si blocca, si informa l’autorità e si indaga con trasparenza. Nessun compromesso.",
  A="Diluire per «rientrare nei limiti» aggira gli standard e rinvia i controlli a quando il farmaco è già sul mercato.",
  B="Continua a produrre accettando un rischio consapevole e affidandosi solo ai controlli finali.",
  C="Blocca, informa subito le autorità, avvia un’indagine trasparente: tutela la salute e rispetta gli obblighi.")
a(8, "Scadenza fissa, nove settimane: come mantieni il controllo dell’avanzamento senza irrigidire o abbandonare il team?",
  "Con tempi brevi e scadenza non spostabile funziona una **gestione iterativa**: cicli brevi, obiettivi misurabili, verifiche frequenti con il cliente e miglioramento continuo.",
  A="Troppo passiva: intervieni solo quando i ritardi sono già «critici», cioè troppo tardi.",
  B="Tagliare subito «tutte» le funzionalità non core è una decisione drastica presa a priori, senza valutare cosa si riesce davvero a fare.",
  C="Sprint settimanali con obiettivi SMART, demo al cliente e retrospettive: controllo continuo e possibilità di correggere in corsa.")
a(9, "L’obiettivo è strutturale (tempo medio di evasione): serve una toppa temporanea o un intervento sui processi?",
  "Gli obiettivi di efficienza si raggiungono migliorando i **processi** con chi ci lavora e **misurando spesso** i risultati.",
  A="Gli straordinari comprano tempo ma non eliminano le cause; rinviare l’analisi dei processi significa non risolvere nulla.",
  B="Delegare va bene, ma verifiche mensili sono troppo rade per un obiettivo da raggiungere entro un trimestre.",
  C="Kaizen: coinvolge operatori e supervisori, individua i colli di bottiglia e fissa KPI giornalieri per vedere subito se si migliora.")
a(10, "Devi far lavorare insieme più funzioni: dove si prendono le decisioni e come tutti vedono l’avanzamento?",
  "Coordinare più reparti richiede una **sede comune di decisione** (comitato inter-funzionale), obiettivi condivisi e strumenti di avanzamento visibili a tutti.",
  A="Call separate e decisione accentrata: i reparti non si parlano tra loro e i problemi di interfaccia emergono tardi.",
  B="Comitato inter-funzionale con cadenza regolare, roadmap e dashboard condivise: allineamento e trasparenza.",
  C="Escludere gli altri fino alla firma significa scoprire tardi vincoli legali o produttivi che potevano bloccare l’operazione.")
a(11, "Le emissioni superano i limiti di legge: puoi rinviare la comunicazione o continuare come prima?",
  "Una violazione dei **limiti di legge** si gestisce fermando la fonte, **comunicandola subito alle autorità** e indagando sulle cause.",
  A="Riduce la produzione, ma rinvia la comunicazione ufficiale: la segnalazione è un obbligo, non si aspetta di avere «dati consolidati».",
  B="Continua la violazione contando su controlli rari: comportamento illecito.",
  C="Blocco, notifica immediata, audit sulle cause e azioni correttive: rispetta la legge e risolve il problema.")
a(12, "È lo stesso schema della domanda 10: tre reparti, un obiettivo comune, sei mesi.",
  "Coordinamento inter-funzionale = **governance condivisa**, cadenza regolare e strumenti di monitoraggio visibili a tutti.",
  A="Comitato interfunzionale, riunioni quindicinali, roadmap e project-tracking visibile a tutti: la risposta più completa.",
  B="Accentra i contatti e informa gli altri solo a milestone raggiunte: gli altri reparti subiscono le decisioni invece di contribuire.",
  C="Nessun coordinamento: sperare in una «convergenza spontanea» al lancio è un rischio altissimo.")

# ── Logica ───────────────────────────────────────────────────────────────
a(13, "Conta i lati di ogni figura e i cerchi al suo interno: cosa cambia a ogni passo?",
  "Due regole insieme: **+1 lato** (3 → 4 → 5 → 6) e **+1 cerchio** (1 → 2 → 3 → 4). Serve un **esagono con 4 cerchi**.",
  A="Fig. 1 è un triangolo con 2 cerchi: forma e numero sbagliati.",
  B="Fig. 4 è un triangolo vuoto: nessuna delle due regole è rispettata.",
  C="Fig. 5 è un esagono con 4 cerchi: rispetta entrambe le regole.",
  D="Fig. 3 è un quadrato con 1 cerchio: torna indietro nella sequenza.",
  E="Fig. 2 è un esagono, ma con 2 cerchi invece di 4.")
a(14, "Guarda separatamente la forma (si ripete?) e il numero totale di cerchi, dentro e fuori.",
  "Le forme si alternano **triangolo / quadrato** → tocca a un quadrato. I cerchi crescono di **2 a ogni passo** (0 → 2 → 4) → ne servono **6**.",
  A="Fig. 3 è un quadrato con 6 cerchi in totale (dentro e fuori): rispetta sia l’alternanza delle forme sia la crescita di due cerchi.",
  B="Fig. 2 è un esagono vuoto: forma sbagliata e nessun cerchio.",
  C="Fig. 4 è un triangolo: dopo un triangolo deve venire un quadrato.",
  D="Fig. 5 è un quadrato, ma con soli 2 cerchi.",
  E="Fig. 1 è un triangolo: forma sbagliata.")
a(15, "Il quadrato non cambia: osserva quanti cerchi ci sono e se stanno dentro o fuori.",
  "I cerchi aumentano di uno (1 → 2 → 3 → **4**) e si alternano **fuori / dentro / fuori / dentro**. Serve un quadrato con **4 cerchi all’interno**.",
  A="Fig. 5 è un quadrato vuoto: nessun cerchio.",
  B="Fig. 2 ha 4 cerchi, ma all’esterno: rompe l’alternanza dentro/fuori.",
  C="Fig. 3 ha 3 cerchi interni: il numero non cresce.",
  D="Fig. 1 è un quadrato con 4 cerchi all’interno: numero e posizione giusti.",
  E="Fig. 4 è un esagono: la forma deve restare un quadrato.")
a(16, "I simboli sono sempre gli stessi cinque: segui dove finisce, a ogni passo, quello che era in fondo.",
  "La colonna ruota: a ogni passo **l’ultimo simbolo sale in cima**. Dopo «quadrato, triangolo, ●, stella, cerchio» viene «**cerchio, quadrato, triangolo, ●, stella**».",
  A="Figura 5 ricomincia con il cerchio pieno in cima: corrisponde a un passo precedente della serie, non al successivo.",
  B="Figura 4 ha la stella in cima e il cerchio pieno in fondo: l’ordine circolare dei simboli è alterato.",
  C="Figura 3 ha l’ordine giusto tranne triangolo e quadrato, che sono invertiti.",
  D="Figura 1 è cerchio, quadrato, triangolo, ●, stella: l’ultima figura con il cerchio portato in cima.",
  E="Figura 2 sposta il cerchio pieno al secondo posto: l’ordine dei simboli non è rispettato.")
a(17, "Confronta la figura 1 con la 3 e la 2 con la 4: noti un’alternanza?",
  "La serie alterna due tipi di riquadro. Nelle posizioni dispari: **cerchio pieno in alto a sinistra**, cerchio vuoto in basso a destra, stella e quadrato che si scambiano di posto. La quinta torna **uguale alla prima**.",
  A="Figura 1 è identica al primo riquadro: chiude il ciclo delle posizioni dispari.",
  B="Figura 4 non ha nessun simbolo pieno in alto a sinistra: non segue lo schema.",
  C="Figura 2 è uguale al secondo riquadro: è un elemento «pari», non quello che serve in quinta posizione.",
  D="Figura 3 ha un quadrato pieno in alto a sinistra e due cerchi in basso: non corrisponde a nessuno dei due schemi.",
  E="Figura 5 ha due stelle in basso: simboli ripetuti che non compaiono mai nella serie.")
a(18, "Segui un simbolo alla volta (prima il triangolo, poi il quadrato, poi la croce): in che direzione si sposta a ogni passo?",
  "Ogni simbolo avanza di **una posizione verso destra** e, arrivato in fondo, ricomincia da sinistra. Al passo 5: triangolo al **centro**, quadrato a **destra**, croce a **sinistra**.",
  A="Figura 4: quadrato a sinistra e croce a destra, posizioni invertite rispetto alla regola.",
  B="Figura 1: tutti e tre i simboli al centro.",
  C="Figura 2: croce al centro invece che a sinistra.",
  D="Figura 3: il triangolo è a destra invece che al centro.",
  E="Figura 5: triangolo al centro, quadrato a destra, croce a sinistra. Esattamente la regola.")

# ── Comprensione ─────────────────────────────────────────────────────────
a(19, "Cerca nel brano la frase su cosa fanno corrispondere a «ogni diverso suono».",
  "Il brano: inviare messaggi non equivoci «facendo corrispondere **a ogni diverso suono un segno convenzionale**». È la definizione di scrittura **alfabetica**.",
  A="I suoni sono il punto di partenza, ma la scoperta riguarda il modo di **scriverli**, non una loro proprietà «segreta».",
  B="Il principio posizionale è l’**altra** scoperta di cui parla il brano, non quella di Taffimay e del padre.",
  C="Le cifre compaiono nel secondo paragrafo, a proposito di un’altra scoperta.",
  D="Un segno convenzionale per ogni suono è proprio la scrittura alfabetica.")
a(20, "Quali aggettivi ed espressioni usa l’autore quando parla del principio posizionale?",
  "L’autore parla di «**idea geniale**» e di «rivelazione di un **gran segreto del mondo**»: tono di ammirazione per una grande conquista intellettuale.",
  A="Il brano non lo presenta come strumento pratico, ma come una rivelazione da far «sentire» al bambino.",
  B="Smentita dal brano, che invita a usare il principio anche con basi diverse dal dieci, per esempio la base due.",
  C="Il brano non dice che il principio posizionale derivi da quello alfabetico: sono due idee diverse.",
  D="«Idea geniale», «gran segreto del mondo»: lo presenta come una grande conquista intellettuale.")
a(21, "Rileggi l’inizio del secondo paragrafo: «Anche la scoperta…» e «L’idea geniale, questa volta, è…». Le due idee sono la stessa?",
  "Il brano **accosta** le due scoperte («Anche…»), ma le distingue: per la scrittura un segno per ogni suono, per i numeri lo stesso simbolo con valore diverso secondo la posizione («questa volta»). Sono due conquiste distinte.",
  A="Sono due scoperte separate, ciascuna con la sua «idea geniale» e ciascuna un «gran segreto del mondo».",
  B="Il brano non dice che i numeri posizionali siano nati applicando il principio della scrittura.",
  C="«Questa volta» segnala proprio che l’idea è **diversa**: non applicano lo stesso principio.",
  D="Il brano parla del passaggio dalla base dieci alla base due, ma la domanda chiede il rapporto con la **scrittura**.")
a(22, "Nel brano c’è un esempio esplicito che riguarda proprio il verbale: a quale delle due strategie è collegato?",
  "Il brano: si può scrivere bene «“**dicendo ciò che si sa**” (ad esempio quando si ha il compito di redigere il verbale di una riunione)». Cioè **knowledge telling**.",
  A="La scrittura argomentativa è l’esempio dell’**altra** strategia (raccolta differenziata).",
  B="La pianificazione forte è tipica del knowledge transforming, non del verbale.",
  C="È l’esempio esplicito del brano: il verbale si scrive bene «dicendo ciò che si sa».",
  D="Il knowledge transforming è associato al testo argomentativo, non al verbale.")
a(23, "Il brano porta un esempio di testo argomentativo (la raccolta differenziata): a quale strategia lo associa?",
  "L’esempio del testo che sostiene «con argomenti personali» la raccolta differenziata è legato a «“**trasformando ciò che si sa**”»: **knowledge transforming**.",
  A="È l’associazione esplicita del brano: argomentare = trasformare ciò che si sa.",
  B="«Enunciare subito ciò che si sa» è il knowledge telling, la strategia dello scrittore inesperto e del verbale.",
  C="Gli standard dei verbali sono l’esempio opposto.",
  D="Knowledge telling è associato al verbale, non al testo argomentativo.")
a(24, "Leggi l’ultima frase del brano.",
  "La chiusura è esplicita: «**Dipende tutto dal tipo di testo richiesto e dallo scopo per cui si scrive**».",
  A="Trappola: il knowledge transforming è «qualitativamente migliore», ma il brano chiarisce che si può scrivere bene con entrambe le vie.",
  B="Non «qualunque» strategia: la scelta va fatta in base al tipo di testo.",
  C="È la conclusione testuale del brano.",
  D="Il knowledge telling va bene per alcuni testi (verbale), non per tutti.")

# ── Diritto ──────────────────────────────────────────────────────────────
a(25, "Ricorda i due numeri dell’art. 94 Cost.: una frazione per le firme e un termine minimo prima della discussione.",
  "Art. 94, ult. comma, Cost.: mozione di sfiducia firmata da almeno **un decimo** dei componenti della Camera e discussa **non prima di tre giorni** dalla presentazione (per evitare voti a sorpresa).",
  A="Un terzo è la soglia sbagliata e «entro tre giorni» capovolge la regola: i tre giorni sono un termine **minimo**, non massimo.",
  B="Il termine dei tre giorni è giusto, ma la soglia è un decimo, non un quinto.",
  C="Un decimo dei componenti e non prima di tre giorni: è il testo dell’art. 94.")
a(26, "È lo stesso termine entro cui il decreto deve essere convertito in legge.",
  "Art. 77, co. 3, Cost.: i decreti-legge perdono efficacia **sin dall’inizio** se non convertiti entro **sessanta giorni** dalla pubblicazione.",
  A="Trenta giorni non è previsto dall’art. 77.",
  B="Sessanta giorni dalla pubblicazione: è il termine costituzionale.",
  C="Venti giorni non è previsto. Attenzione a non confonderlo con i **cinque giorni** entro cui si riuniscono le Camere se sciolte.")
a(27, "Pensa al riparto dell’art. 117 Cost.: la potestà regolamentare segue quella legislativa?",
  "Art. 117, **co. 6**, Cost.: regolamenti dello **Stato** nelle materie di legislazione esclusiva (salvo delega), delle **Regioni** in ogni altra materia, degli **enti locali** per organizzazione e funzioni proprie.",
  A="Esclude Stato e Regioni: la potestà regolamentare non spetta «solo» agli enti locali.",
  B="Riproduce fedelmente l’art. 117, co. 6, Cost.",
  C="Le Regioni non hanno potestà regolamentare nelle materie di competenza esclusiva statale (salvo delega).")
a(28, "«Indirizzo» rimanda ai fini dell’azione amministrativa: chi li stabilisce?",
  "**Legalità-indirizzo**: la legge fissa i **fini** che l’amministrazione deve perseguire (art. 1 l. 241/1990). Si distingue dalla legalità-garanzia, in cui la legge fissa anche limiti e modalità dell’azione.",
  A="L’attività amministrativa persegue i fini determinati dalla legge: è la definizione.",
  B="Descrive il rapporto di fiducia Governo-Parlamento (art. 94 Cost.), non il principio di legalità.",
  C="Descrive la gerarchia interna, che non c’entra con la legalità.")
a(29, "Ricorda l’art. 113 Cost.: la tutela contro gli atti della P.A. può essere limitata?",
  "Art. 113 Cost.: la tutela giurisdizionale contro gli atti della P.A. è **sempre ammessa** e **non può essere esclusa o limitata** a particolari mezzi o categorie di atti.",
  A="Il giudice può annullare o sospendere gli atti imperativi: la tutela interferisce eccome con il potere amministrativo.",
  B="È il testo dell’art. 113, commi 1-2, Cost.",
  C="I ricorsi gerarchici sono rimedi **amministrativi** facoltativi, non l’unica tutela: c’è sempre quella **giurisdizionale**.")
a(30, "«Imperativo» = capace di imporsi. Imporsi rispetto a chi?",
  "**Imperatività**: il provvedimento modifica unilateralmente la sfera giuridica altrui **senza bisogno del consenso** dei destinatari.",
  A="Falso: il giudice amministrativo può sospendere gli effetti in via cautelare.",
  B="Falso: l’amministrazione può sospendere gli effetti in autotutela (art. 21-quater l. 241/1990).",
  C="Produce effetti senza il consenso di destinatari e controinteressati: è la definizione di imperatività.")
a(31, "L’interesse legittimo nasce dal confronto con quale tipo di attività della P.A.? Ed è oggi risarcibile?",
  "**Interesse legittimo**: posizione di chi ha un interesse **qualificato e differenziato** di fronte all’esercizio del **potere** amministrativo. Dopo Cass. SU 500/1999 è anche **risarcibile**.",
  A="Confonde i concetti: è l’interesse **diffuso** a riferirsi a una collettività; l’interesse legittimo è personale e differenziato.",
  B="È la definizione corretta: posizione qualificata e differenziata rispetto all’esercizio del potere.",
  C="Superata: l’interesse legittimo ammette anche la tutela risarcitoria (Cass. SU 500/1999, art. 30 c.p.a.).")
a(32, "Gli incarichi esterni sono un’eccezione: a quali condizioni sono ammessi (art. 7 d.lgs. 165/2001)?",
  "Art. 7, co. 6, d.lgs. 165/2001: incarichi solo a **esperti di particolare e comprovata specializzazione**, per **esigenze specifiche e temporanee**, non coperte dal personale interno, per **durata determinata**.",
  A="Troppo rigida: gli incarichi esterni sono ammessi, ma solo a determinate condizioni.",
  B="Riproduce le condizioni dell’art. 7, co. 6, d.lgs. 165/2001.",
  C="Opposto della norma: non sono «liberamente» assegnabili e non oltre i poteri del dirigente.")
a(33, "La clausola di flessibilità ha dei limiti: può servire ad armonizzare dove i trattati lo vietano?",
  "Art. 352, **par. 3**, TFUE: le misure basate sulla clausola **non possono comportare armonizzazione** nei casi in cui i trattati la escludono.",
  A="Non è previsto un parere preventivo obbligatorio della Corte di giustizia su questo uso.",
  B="Imprecisa: il par. 2 prevede che la Commissione richiami l’attenzione dei **Parlamenti nazionali** (controllo di sussidiarietà), non che informi il Consiglio europeo.",
  C="È il limite previsto dal par. 3 dell’art. 352 TFUE.")
a(34, "Proporzionalità = «non più del necessario». A chi si rivolge questo principio nel TUE?",
  "Art. 5, par. 4, TUE: l’azione dell’**Unione** si limita a **quanto necessario** per gli obiettivi dei trattati. È un criterio di **esercizio** delle competenze, come la sussidiarietà.",
  A="Non riguarda le deroghe degli Stati membri né forme di concertazione.",
  B="Definizione dell’art. 5, par. 4, TUE.",
  C="Non è un test di compatibilità con le prassi nazionali, ma un limite all’azione dell’Unione.")
a(35, "Il ricorso di annullamento serve contro atti che producono effetti giuridici: quale opzione li descrive?",
  "Art. 263 TFUE: si impugnano gli atti di istituzioni, organi e organismi UE **destinati a produrre effetti giuridici** nei confronti di terzi.",
  A="Atti vincolanti e produttivi di effetti: sono quelli impugnabili.",
  B="Un’iniziativa dei cittadini non è un atto delle istituzioni e non produce effetti vincolanti.",
  C="Le dichiarazioni politiche non producono effetti giuridici vincolanti.")

# ── Economia ─────────────────────────────────────────────────────────────
a(36, "Elasticità < 1 = domanda anelastica. In che direzione si muove la quantità quando il prezzo sale? E di quanto?",
  "Domanda **anelastica** (|e| < 1): se il prezzo sale, la quantità **scende**, ma **meno che proporzionalmente**.",
  A="La quantità non aumenta quando sale il prezzo (salvo casi eccezionali, non per un bene normale).",
  B="Diminuzione meno che proporzionale: è la definizione di domanda anelastica.",
  C="Diminuzione più che proporzionale = domanda **elastica** (|e| > 1).")
a(37, "Prezzo sotto l’equilibrio: i consumatori vogliono comprare più o meno di quanto i produttori offrono? Cosa succede al prezzo?",
  "Sotto il prezzo di equilibrio: **eccesso di domanda**. La concorrenza tra acquirenti fa **salire il prezzo** fino all’equilibrio.",
  A="Il tipo di eccesso è giusto, ma il meccanismo no: in concorrenza perfetta ci si aggiusta tramite il **prezzo**, non con più produzione allo stesso prezzo.",
  B="Sotto l’equilibrio c’è eccesso di **domanda**, non di offerta.",
  C="Eccesso di domanda e prezzi che salgono fino all’equilibrio: corretto.")
a(38, "Con la discriminazione perfetta ogni consumatore paga il massimo che è disposto a pagare. Cosa resta a lui? E il monopolista produce poco o la quantità efficiente?",
  "Discriminazione **di primo grado**: il monopolista si prende **tutto il surplus del consumatore** e produce la **quantità efficiente**, quindi la **perdita secca sparisce**.",
  A="La perdita secca sparisce anche lei, perché si produce fino al punto efficiente.",
  B="Corretto: niente surplus per il consumatore e niente perdita secca.",
  C="Il surplus del consumatore è proprio ciò che il monopolista si prende tutto.")
a(39, "Domanda aggregata = consumi + investimenti + spesa pubblica + esportazioni nette. Quale opzione tocca una di queste voci?",
  "La **propensione marginale al consumo** cambia i consumi, cioè la **domanda aggregata**: è uno shock **di domanda**.",
  A="Il progresso tecnologico cambia la produttività: shock **di offerta**.",
  B="Influisce sui consumi, quindi sulla domanda aggregata.",
  C="I prezzi delle materie prime cambiano i costi di produzione: shock **di offerta**.")
a(40, "Più moneta in circolazione: i tassi salgono o scendono? Di conseguenza, come si sposta la LM?",
  "Più moneta → **tassi più bassi** a parità di reddito → la LM **trasla in basso a destra**.",
  A="La direzione è giusta, ma i tassi **scendono**, non aumentano.",
  B="Direzione e causa corrette.",
  C="Con tassi in calo la LM si sposta in basso a destra, non in alto a sinistra.")
a(41, "Quale di queste operazioni dura una sola notte?",
  "Le **operazioni di rifinanziamento marginale** sono una *standing facility* **overnight**: le banche la usano per coprire esigenze di liquidità **giornaliere**.",
  A="La riserva obbligatoria è un obbligo di deposito, non un’operazione di gestione della liquidità giornaliera.",
  B="Le operazioni di rifinanziamento principale sono **settimanali** (durata una settimana).",
  C="Overnight, su iniziativa delle banche: servono per la liquidità giornaliera.")
a(43, "«Passivi» = lato delle spese. Cosa resta da fare alla fine dell’anno per una spesa già impegnata?",
  "**Residui passivi**: spese **impegnate ma non ancora pagate** a fine esercizio. I residui **attivi** sono entrate accertate ma non riscosse.",
  A="Definizione esatta di residui passivi.",
  B="Crediti accertati = residui **attivi**.",
  C="Le previsioni non sono residui: i residui nascono da impegni o accertamenti già fatti.")

# ── Organizzazione ───────────────────────────────────────────────────────
a(42, "Performance «organizzativa», non «individuale»: quali dimensioni riguardano l’ente nel suo insieme?",
  "La performance **organizzativa** (d.lgs. 150/2009) si misura in **efficienza, efficacia e impatto** (outcome) sui destinatari.",
  A="Efficienza, efficacia e impatto: le dimensioni della performance organizzativa.",
  B="Risultati individuali e comportamenti sono le dimensioni della performance **individuale**.",
  C="Output e tempi sono singoli indicatori, non le dimensioni complessive.")
a(44, "Direzione amministrativa = funzioni del management (prevedere, organizzare, comandare…). Chi le ha teorizzate?",
  "La **teoria della direzione amministrativa** è di **Henri Fayol**: le funzioni del management sono prevedere, organizzare, comandare, coordinare, controllare.",
  A="Fayol è l’autore della teoria della direzione amministrativa.",
  B="Weick è noto per il **sensemaking** e i sistemi a legame debole.",
  C="Mayo è il padre della scuola delle **relazioni umane** (esperimenti Hawthorne).")
a(45, "«Contingenze» = dipende dal contesto. Quale opzione lega la struttura all’ambiente esterno?",
  "**Teoria delle contingenze**: non esiste una struttura ottimale in assoluto. È efficace quella **coerente con l’ambiente** (tecnologia, dimensione, incertezza).",
  A="Le transazioni come unità di analisi sono la teoria dei **costi di transazione** (Williamson).",
  B="L’isomorfismo è dell’**istituzionalismo** (DiMaggio e Powell); la public service motivation è un altro filone.",
  C="Struttura coerente con il contesto esterno: è il cuore della teoria.")
a(46, "Goal setting = fissare obiettivi. Che effetto ha sulla motivazione un obiettivo sfidante?",
  "**Goal setting** (Locke): obiettivi **specifici e sfidanti** (ma raggiungibili) aumentano motivazione e prestazione.",
  A="La scala di bisogni in 5 categorie è la **piramide di Maslow**.",
  B="È l’opposto della teoria del goal setting.",
  C="La difficoltà dell’obiettivo influenza l’intensità della motivazione: è il principio di Locke.")
a(47, "Pensa alle «basi del potere» in un’organizzazione: chi può premiare, chi può punire, chi ha un’autorità formale…",
  "French e Raven: potere **di ricompensa, coercitivo, legittimo**, più quello **dell’esperto** e **referente**.",
  A="Ricompensa, coercitivo, legittimo: tre delle basi del potere di French e Raven.",
  B="Categorie inventate, non appartengono alla teoria.",
  C="Classificazione temporale che non c’entra con French e Raven.")
a(48, "«Enlargement» = allargamento: della mansione o dell’organizzazione? In orizzontale o in verticale?",
  "**Job enlargement**: allargamento **orizzontale**, più **compiti** dello stesso livello. Il **job enrichment** aggiunge invece responsabilità e autonomia (verticale).",
  A="I servizi al cittadino riguardano l’organizzazione, non la singola mansione.",
  B="Più compiti alla stessa persona: è il job enlargement.",
  C="L’organico è una questione di macrostruttura, non di mansione.")
a(49, "È l’agenzia che si occupa della trasformazione digitale della PA e attua il CAD.",
  "Il **Piano triennale per l’informatica nella PA** è redatto da **AgID** (art. 14-bis CAD) e approvato dal Presidente del Consiglio o dal ministro delegato.",
  A="AgID redige il Piano triennale.",
  B="ACN si occupa di cybersicurezza, non redige il Piano triennale.",
  C="La SNA si occupa di formazione e reclutamento dei dirigenti.")

# ── Politiche pubbliche ──────────────────────────────────────────────────
a(50, "Destinatari e beneficiari sono la stessa cosa? Pensa a una politica antinquinamento.",
  "**Target** = soggetti di cui la politica vuole **cambiare il comportamento**. Non coincidono per forza con i beneficiari (nell’antinquinamento: target le imprese, beneficiari i cittadini).",
  A="Definizione corretta di target group.",
  B="Chi promuove una politica è un attore del processo decisionale, non il destinatario.",
  C="I beneficiari finali sono un’altra categoria.")
a(51, "«Wicked problems» (Rittel e Webber): si possono definire in modo univoco e risolvere una volta per tutte?",
  "I **wicked problems** non hanno una formulazione definitiva né una soluzione definitiva: sono **indefinibili** e quindi non risolvibili una volta per tutte.",
  A="Rischi per un gruppo specifico possono esserci in qualsiasi politica: non definiscono un problema «maligno».",
  B="Non dipende dalla volontà dei decisori, ma dalla natura del problema.",
  C="Indefinibili e quindi insolubili: è la definizione di Rittel e Webber.")
a(52, "«Evidence-based» = basato su evidenze. Quali caratteristiche rendono un’evidenza affidabile?",
  "L’approccio **evidence-based** si fonda su basi informative **esplicite, trasparenti e replicabili**, che altri possono verificare.",
  A="I modelli matematici di singoli studiosi non sono la caratteristica distintiva (e non garantiscono replicabilità).",
  B="Esplicite, trasparenti e replicabili: la definizione.",
  C="Commissionare studi ad hoc non basta: conta il metodo, non chi li produce.")
a(53, "Valutazione di «processo»: guarda ai risultati finali o a come la politica viene attuata?",
  "La **valutazione di processo** (o di implementazione) studia **come** gli input diventano output e outcome durante l’attuazione.",
  A="Gli indicatori di efficienza misurano, ma non spiegano i meccanismi di attuazione.",
  B="Delineare le teorie causa-effetto è la ricostruzione della **teoria del programma**.",
  C="Analisi della trasformazione input → output → outcome: è la valutazione di processo.")
a(54, "La valutazione realista chiede «cosa funziona, per chi, in quali circostanze». Punta su gruppi di controllo o su meccanismi e contesti?",
  "**Valutazione realista** (Pawson e Tilley): spiega quali **meccanismi** si attivano in quali **contesti** (schema contesto-meccanismo-esito).",
  A="Difference-in-differences e gruppi di controllo sono la valutazione **controfattuale**.",
  B="Meccanismi attivati in determinati contesti: è la definizione.",
  C="Formula generica che gioca sulla parola «realisticamente», senza cogliere il nucleo (meccanismi + contesti).")

# ── Inglese ──────────────────────────────────────────────────────────────
a(55, "Quale espressione regge «I’d ___ + soggetto + past simple» per dire «preferirei che tu…»?",
  "**I’d rather + soggetto + past simple** esprime una preferenza su ciò che fa un’altra persona.",
  A="«I’d rather you didn’t smoke» = preferirei che non fumassi.",
  B="«I’d prefer» sarebbe corretto, ma «I’d preferred» (past perfect) no.",
  C="«I’d sooner» funzionerebbe, «I’d soon» no.")
a(56, "Phrasal verb con «make» che significa «riuscire a decifrare / distinguere».",
  "**To make out** = distinguere, decifrare: «facevo fatica a **decifrarla**».",
  A="«Make in» non esiste con questo significato.",
  B="«Make it out» = riuscire a leggerla.",
  C="«Make up» = inventare, truccarsi, fare pace.")
a(57, "Per sport e attività pratiche (guida, sci, paracadute), come si chiama chi insegna?",
  "Per attività pratiche e sportive si dice **instructor**: *parachute / driving / ski instructor*.",
  A="«Teacher» si usa per l’insegnamento scolastico.",
  B="«Parachute instructor» è la collocazione corretta.",
  C="«Trainer» si usa per allenatori o formatori, non per il paracadutismo.")
a(58, "La frase esprime un rimpianto su qualcosa che non è successo. Quale espressione regge il past perfect con questo senso?",
  "**If only + past perfect** = rimpianto sul passato: «**Se solo** avessero letto il rapporto prima…».",
  A="«Because» introduce una causa e non regge il periodo ipotetico (*could have taken*).",
  B="«If only they had read…» = se solo avessero letto: corretto.",
  C="«Unless» (a meno che) capovolgerebbe il senso della frase.")
a(59, "Due regole: dove va «and» nei numeri britannici? E «thousand» prende la -s?",
  "In inglese britannico: **and** prima di decine e unità di ogni gruppo (*hundred **and** twenty-four*), e **thousand senza -s** dopo un numero.",
  A="«A hundred and twenty-four thousand, eight hundred and forty-three»: entrambe le regole rispettate.",
  B="Mancano gli «and» dopo «hundred» e ce n’è uno fuori posto («thousand and eight hundred»).",
  C="«Thousands» con la -s è sbagliato dopo un numero.")
a(60, "Phrasal verb che significa «fare a meno di».",
  "**To do without** = fare a meno di: «hanno dovuto **saltare** il pranzo».",
  A="«Do without lunch» = fare a meno del pranzo.",
  B="«Get over» = superare (una difficoltà, una malattia, una delusione).",
  C="«Renounce» è formale e si usa per diritti, titoli o convinzioni, non per un pasto.")

assert sorted(A) == list(range(1, 61)), sorted(set(range(1, 61)) - set(A))
