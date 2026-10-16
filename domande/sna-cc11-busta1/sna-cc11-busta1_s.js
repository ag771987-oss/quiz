const SPIEGAZIONI = [
  {
    "id": 1,
    "corretta": "A",
    "suggerimento": "C’è un’emergenza e poco tempo: conviene agire da soli o mettere subito al lavoro tutte le risorse disponibili?",
    "spiegazione": "In emergenza con scadenza stretta si premia chi **mobilita subito il team**, distribuisce i compiti e lavora su più soluzioni in parallelo, con un controllo ravvicinato.",
    "perOpzione": {
      "A": "Coinvolge tutti subito, assegna compiti precisi e controlla i progressi ogni quattro ore: velocità, chiarezza e monitoraggio, proprio quello che serve.",
      "B": "Percorso solitario e sequenziale: aspettare l’ok definitivo prima di informare il team spreca il tempo che manca. Il team resta inattivo proprio nel momento critico.",
      "C": "Usa canali informali per «sbloccare» una pratica doganale (poco trasparente, potenzialmente scorretto) e tiene il team all’oscuro."
    }
  },
  {
    "id": 2,
    "corretta": "A",
    "suggerimento": "I KPI individuali sono normali: il problema sta nelle persone o da qualche altra parte? Prima di agire, cosa ti manca?",
    "spiegazione": "Prima di intervenire su un problema bisogna **capirne la causa**. Se i tecnici lavorano bene, l’aumento dei ticket dipende da altro (un rilascio, un guasto…): serve una diagnosi rapida.",
    "perOpzione": {
      "A": "Diagnosi mirata e veloce: chi ha più esperienza cerca pattern ricorrenti e se ne discute in giornata. Agisci sulla causa, non sul sintomo.",
      "B": "Atteggiamento passivo: abbassa il livello di servizio sperando che il problema passi da solo, senza capirne l’origine.",
      "C": "Sembra proattiva, ma riorganizza il lavoro senza sapere perché i ticket aumentano. Se la causa è esterna (es. un bug), il triage non la elimina."
    }
  },
  {
    "id": 3,
    "corretta": "C",
    "suggerimento": "Clara ha potenziale ma poca sicurezza: meglio buttarla nella mischia, aspettare, o costruire un percorso con lei?",
    "spiegazione": "Lo sviluppo delle persone funziona se è **condiviso** con l’interessato e **graduale**: obiettivi a tappe, affiancamento, piccole prove crescenti.",
    "perOpzione": {
      "A": "Salto troppo brusco: una persona che fatica a parlare nei meeting viene esposta subito al top management. Il rischio di un’esperienza negativa è alto.",
      "B": "Delega tutto a un corso e rimanda «a un futuro non definito»: di fatto non c’è nessuna azione concreta di sviluppo.",
      "C": "Colloquio di sviluppo e piano graduale costruito con lei (workshop, shadowing, piccole presentazioni): fa crescere fiducia e competenze passo dopo passo."
    }
  },
  {
    "id": 4,
    "corretta": "B",
    "suggerimento": "Paolo non mostra interesse per la gestione: prima di decidere il suo percorso, cosa dovresti sapere di lui?",
    "spiegazione": "Prima di orientare la carriera di qualcuno bisogna capire **competenze e motivazioni**, e farlo **insieme a lui**. Imporre un ruolo non desiderato raramente funziona.",
    "perOpzione": {
      "A": "Ben strutturata (basso rischio, mentoring), ma ignora il dato chiave: Paolo non è interessato alla gestione. Gli imponi un ruolo che non vuole.",
      "B": "Parte dall’ascolto: verifica se la strada gestionale è coerente con le sue motivazioni e ne parla con lui prima di qualsiasi incarico.",
      "C": "Usa solo una leva economica e presume che il disinteresse sia «solo una questione di esperienza», senza verificarlo."
    }
  },
  {
    "id": 5,
    "corretta": "B",
    "suggerimento": "Le persone temono il cambiamento: come puoi ridurre la paura invece di imporre o solo spiegare?",
    "spiegazione": "Davanti alle **resistenze al cambiamento** funziona un approccio graduale e partecipativo: sperimentare, ascoltare, correggere, poi estendere.",
    "perOpzione": {
      "A": "Impone data e regole con poca flessibilità: ignora le preoccupazioni e alimenta la resistenza.",
      "B": "Area pilota con volontari e feedback strutturati: le persone provano il nuovo modello, i problemi emergono prima del roll-out e si possono correggere.",
      "C": "Spiega i vantaggi, ma solo in modo unidirezionale e senza fasi intermedie: informare non basta a far accettare un cambiamento."
    }
  },
  {
    "id": 6,
    "corretta": "C",
    "suggerimento": "Lo scetticismo nasce spesso dal non conoscere uno strumento: cosa lo rende concreto e credibile?",
    "spiegazione": "Per far adottare una novità a chi è scettico servono **esperienza pratica** e **testimonianze di pari**, non imposizioni né rinvii.",
    "perOpzione": {
      "A": "Rinvia di sei mesi e lascia le persone da sole con la documentazione tecnica: nessun accompagnamento.",
      "B": "Impone lo strumento come unico canale e svuota il ruolo degli HR: aumenta la resistenza e perde il controllo umano sulla selezione.",
      "C": "Workshop su casi reali e confronto con colleghi che già usano la piattaforma: rende tangibili i benefici e accompagna l’adozione."
    }
  },
  {
    "id": 7,
    "corretta": "C",
    "suggerimento": "C’è un rischio per la salute e un problema di conformità: cosa viene prima di tutto?",
    "spiegazione": "Quando sono in gioco **sicurezza dei pazienti e norme**, si blocca, si informa l’autorità e si indaga con trasparenza. Nessun compromesso.",
    "perOpzione": {
      "A": "Diluire per «rientrare nei limiti» aggira gli standard e rinvia i controlli a quando il farmaco è già sul mercato.",
      "B": "Continua a produrre accettando un rischio consapevole e affidandosi solo ai controlli finali.",
      "C": "Blocca, informa subito le autorità, avvia un’indagine trasparente: tutela la salute e rispetta gli obblighi."
    }
  },
  {
    "id": 8,
    "corretta": "C",
    "suggerimento": "Scadenza fissa, nove settimane: come mantieni il controllo dell’avanzamento senza irrigidire o abbandonare il team?",
    "spiegazione": "Con tempi brevi e scadenza non spostabile funziona una **gestione iterativa**: cicli brevi, obiettivi misurabili, verifiche frequenti con il cliente e miglioramento continuo.",
    "perOpzione": {
      "A": "Troppo passiva: intervieni solo quando i ritardi sono già «critici», cioè troppo tardi.",
      "B": "Tagliare subito «tutte» le funzionalità non core è una decisione drastica presa a priori, senza valutare cosa si riesce davvero a fare.",
      "C": "Sprint settimanali con obiettivi SMART, demo al cliente e retrospettive: controllo continuo e possibilità di correggere in corsa."
    }
  },
  {
    "id": 9,
    "corretta": "C",
    "suggerimento": "L’obiettivo è strutturale (tempo medio di evasione): serve una toppa temporanea o un intervento sui processi?",
    "spiegazione": "Gli obiettivi di efficienza si raggiungono migliorando i **processi** con chi ci lavora e **misurando spesso** i risultati.",
    "perOpzione": {
      "A": "Gli straordinari comprano tempo ma non eliminano le cause; rinviare l’analisi dei processi significa non risolvere nulla.",
      "B": "Delegare va bene, ma verifiche mensili sono troppo rade per un obiettivo da raggiungere entro un trimestre.",
      "C": "Kaizen: coinvolge operatori e supervisori, individua i colli di bottiglia e fissa KPI giornalieri per vedere subito se si migliora."
    }
  },
  {
    "id": 10,
    "corretta": "B",
    "suggerimento": "Devi far lavorare insieme più funzioni: dove si prendono le decisioni e come tutti vedono l’avanzamento?",
    "spiegazione": "Coordinare più reparti richiede una **sede comune di decisione** (comitato inter-funzionale), obiettivi condivisi e strumenti di avanzamento visibili a tutti.",
    "perOpzione": {
      "A": "Call separate e decisione accentrata: i reparti non si parlano tra loro e i problemi di interfaccia emergono tardi.",
      "B": "Comitato inter-funzionale con cadenza regolare, roadmap e dashboard condivise: allineamento e trasparenza.",
      "C": "Escludere gli altri fino alla firma significa scoprire tardi vincoli legali o produttivi che potevano bloccare l’operazione."
    }
  },
  {
    "id": 11,
    "corretta": "C",
    "suggerimento": "Le emissioni superano i limiti di legge: puoi rinviare la comunicazione o continuare come prima?",
    "spiegazione": "Una violazione dei **limiti di legge** si gestisce fermando la fonte, **comunicandola subito alle autorità** e indagando sulle cause.",
    "perOpzione": {
      "A": "Riduce la produzione, ma rinvia la comunicazione ufficiale: la segnalazione è un obbligo, non si aspetta di avere «dati consolidati».",
      "B": "Continua la violazione contando su controlli rari: comportamento illecito.",
      "C": "Blocco, notifica immediata, audit sulle cause e azioni correttive: rispetta la legge e risolve il problema."
    }
  },
  {
    "id": 12,
    "corretta": "A",
    "suggerimento": "È lo stesso schema della domanda 10: tre reparti, un obiettivo comune, sei mesi.",
    "spiegazione": "Coordinamento inter-funzionale = **governance condivisa**, cadenza regolare e strumenti di monitoraggio visibili a tutti.",
    "perOpzione": {
      "A": "Comitato interfunzionale, riunioni quindicinali, roadmap e project-tracking visibile a tutti: la risposta più completa.",
      "B": "Accentra i contatti e informa gli altri solo a milestone raggiunte: gli altri reparti subiscono le decisioni invece di contribuire.",
      "C": "Nessun coordinamento: sperare in una «convergenza spontanea» al lancio è un rischio altissimo."
    }
  },
  {
    "id": 13,
    "corretta": "C",
    "suggerimento": "Conta i lati di ogni figura e i cerchi al suo interno: cosa cambia a ogni passo?",
    "spiegazione": "Due regole insieme: **+1 lato** (3 → 4 → 5 → 6) e **+1 cerchio** (1 → 2 → 3 → 4). Serve un **esagono con 4 cerchi**.",
    "perOpzione": {
      "A": "Fig. 1 è un triangolo con 2 cerchi: forma e numero sbagliati.",
      "B": "Fig. 4 è un triangolo vuoto: nessuna delle due regole è rispettata.",
      "C": "Fig. 5 è un esagono con 4 cerchi: rispetta entrambe le regole.",
      "D": "Fig. 3 è un quadrato con 1 cerchio: torna indietro nella sequenza.",
      "E": "Fig. 2 è un esagono, ma con 2 cerchi invece di 4."
    }
  },
  {
    "id": 14,
    "corretta": "A",
    "suggerimento": "Guarda separatamente la forma (si ripete?) e il numero totale di cerchi, dentro e fuori.",
    "spiegazione": "Le forme si alternano **triangolo / quadrato** → tocca a un quadrato. I cerchi crescono di **2 a ogni passo** (0 → 2 → 4) → ne servono **6**.",
    "perOpzione": {
      "A": "Fig. 3 è un quadrato con 6 cerchi in totale (dentro e fuori): rispetta sia l’alternanza delle forme sia la crescita di due cerchi.",
      "B": "Fig. 2 è un esagono vuoto: forma sbagliata e nessun cerchio.",
      "C": "Fig. 4 è un triangolo: dopo un triangolo deve venire un quadrato.",
      "D": "Fig. 5 è un quadrato, ma con soli 2 cerchi.",
      "E": "Fig. 1 è un triangolo: forma sbagliata."
    }
  },
  {
    "id": 15,
    "corretta": "D",
    "suggerimento": "Il quadrato non cambia: osserva quanti cerchi ci sono e se stanno dentro o fuori.",
    "spiegazione": "I cerchi aumentano di uno (1 → 2 → 3 → **4**) e si alternano **fuori / dentro / fuori / dentro**. Serve un quadrato con **4 cerchi all’interno**.",
    "perOpzione": {
      "A": "Fig. 5 è un quadrato vuoto: nessun cerchio.",
      "B": "Fig. 2 ha 4 cerchi, ma all’esterno: rompe l’alternanza dentro/fuori.",
      "C": "Fig. 3 ha 3 cerchi interni: il numero non cresce.",
      "D": "Fig. 1 è un quadrato con 4 cerchi all’interno: numero e posizione giusti.",
      "E": "Fig. 4 è un esagono: la forma deve restare un quadrato."
    }
  },
  {
    "id": 16,
    "corretta": "D",
    "suggerimento": "I simboli sono sempre gli stessi cinque: segui dove finisce, a ogni passo, quello che era in fondo.",
    "spiegazione": "La colonna ruota: a ogni passo **l’ultimo simbolo sale in cima**. Dopo «quadrato, triangolo, ●, stella, cerchio» viene «**cerchio, quadrato, triangolo, ●, stella**».",
    "perOpzione": {
      "A": "Figura 5 ricomincia con il cerchio pieno in cima: corrisponde a un passo precedente della serie, non al successivo.",
      "B": "Figura 4 ha la stella in cima e il cerchio pieno in fondo: l’ordine circolare dei simboli è alterato.",
      "C": "Figura 3 ha l’ordine giusto tranne triangolo e quadrato, che sono invertiti.",
      "D": "Figura 1 è cerchio, quadrato, triangolo, ●, stella: l’ultima figura con il cerchio portato in cima.",
      "E": "Figura 2 sposta il cerchio pieno al secondo posto: l’ordine dei simboli non è rispettato."
    }
  },
  {
    "id": 17,
    "corretta": "A",
    "suggerimento": "Confronta la figura 1 con la 3 e la 2 con la 4: noti un’alternanza?",
    "spiegazione": "La serie alterna due tipi di riquadro. Nelle posizioni dispari: **cerchio pieno in alto a sinistra**, cerchio vuoto in basso a destra, stella e quadrato che si scambiano di posto. La quinta torna **uguale alla prima**.",
    "perOpzione": {
      "A": "Figura 1 è identica al primo riquadro: chiude il ciclo delle posizioni dispari.",
      "B": "Figura 4 non ha nessun simbolo pieno in alto a sinistra: non segue lo schema.",
      "C": "Figura 2 è uguale al secondo riquadro: è un elemento «pari», non quello che serve in quinta posizione.",
      "D": "Figura 3 ha un quadrato pieno in alto a sinistra e due cerchi in basso: non corrisponde a nessuno dei due schemi.",
      "E": "Figura 5 ha due stelle in basso: simboli ripetuti che non compaiono mai nella serie."
    }
  },
  {
    "id": 18,
    "corretta": "E",
    "suggerimento": "Segui un simbolo alla volta (prima il triangolo, poi il quadrato, poi la croce): in che direzione si sposta a ogni passo?",
    "spiegazione": "Ogni simbolo avanza di **una posizione verso destra** e, arrivato in fondo, ricomincia da sinistra. Al passo 5: triangolo al **centro**, quadrato a **destra**, croce a **sinistra**.",
    "perOpzione": {
      "A": "Figura 4: quadrato a sinistra e croce a destra, posizioni invertite rispetto alla regola.",
      "B": "Figura 1: tutti e tre i simboli al centro.",
      "C": "Figura 2: croce al centro invece che a sinistra.",
      "D": "Figura 3: il triangolo è a destra invece che al centro.",
      "E": "Figura 5: triangolo al centro, quadrato a destra, croce a sinistra. Esattamente la regola."
    }
  },
  {
    "id": 19,
    "corretta": "D",
    "suggerimento": "Cerca nel brano la frase su cosa fanno corrispondere a «ogni diverso suono».",
    "spiegazione": "Il brano: inviare messaggi non equivoci «facendo corrispondere **a ogni diverso suono un segno convenzionale**». È la definizione di scrittura **alfabetica**.",
    "perOpzione": {
      "A": "I suoni sono il punto di partenza, ma la scoperta riguarda il modo di **scriverli**, non una loro proprietà «segreta».",
      "B": "Il principio posizionale è l’**altra** scoperta di cui parla il brano, non quella di Taffimay e del padre.",
      "C": "Le cifre compaiono nel secondo paragrafo, a proposito di un’altra scoperta.",
      "D": "Un segno convenzionale per ogni suono è proprio la scrittura alfabetica."
    }
  },
  {
    "id": 20,
    "corretta": "D",
    "suggerimento": "Quali aggettivi ed espressioni usa l’autore quando parla del principio posizionale?",
    "spiegazione": "L’autore parla di «**idea geniale**» e di «rivelazione di un **gran segreto del mondo**»: tono di ammirazione per una grande conquista intellettuale.",
    "perOpzione": {
      "A": "Il brano non lo presenta come strumento pratico, ma come una rivelazione da far «sentire» al bambino.",
      "B": "Smentita dal brano, che invita a usare il principio anche con basi diverse dal dieci, per esempio la base due.",
      "C": "Il brano non dice che il principio posizionale derivi da quello alfabetico: sono due idee diverse.",
      "D": "«Idea geniale», «gran segreto del mondo»: lo presenta come una grande conquista intellettuale."
    }
  },
  {
    "id": 21,
    "corretta": "A",
    "suggerimento": "Rileggi l’inizio del secondo paragrafo: «Anche la scoperta…» e «L’idea geniale, questa volta, è…». Le due idee sono la stessa?",
    "spiegazione": "Il brano **accosta** le due scoperte («Anche…»), ma le distingue: per la scrittura un segno per ogni suono, per i numeri lo stesso simbolo con valore diverso secondo la posizione («questa volta»). Sono due conquiste distinte.",
    "perOpzione": {
      "A": "Sono due scoperte separate, ciascuna con la sua «idea geniale» e ciascuna un «gran segreto del mondo».",
      "B": "Il brano non dice che i numeri posizionali siano nati applicando il principio della scrittura.",
      "C": "«Questa volta» segnala proprio che l’idea è **diversa**: non applicano lo stesso principio.",
      "D": "Il brano parla del passaggio dalla base dieci alla base due, ma la domanda chiede il rapporto con la **scrittura**."
    },
    "nota": "Domanda discutibile: una seconda risoluzione indipendente ha scelto «Entrambi applicano lo stesso principio base», leggendo l’accostamento («Anche la scoperta…») come un principio comune (pochi segni convenzionali per scrivere senza equivoci). Il «questa volta» fa propendere per due idee distinte, ma la chiave non è certa."
  },
  {
    "id": 22,
    "corretta": "C",
    "suggerimento": "Nel brano c’è un esempio esplicito che riguarda proprio il verbale: a quale delle due strategie è collegato?",
    "spiegazione": "Il brano: si può scrivere bene «“**dicendo ciò che si sa**” (ad esempio quando si ha il compito di redigere il verbale di una riunione)». Cioè **knowledge telling**.",
    "perOpzione": {
      "A": "La scrittura argomentativa è l’esempio dell’**altra** strategia (raccolta differenziata).",
      "B": "La pianificazione forte è tipica del knowledge transforming, non del verbale.",
      "C": "È l’esempio esplicito del brano: il verbale si scrive bene «dicendo ciò che si sa».",
      "D": "Il knowledge transforming è associato al testo argomentativo, non al verbale."
    }
  },
  {
    "id": 23,
    "corretta": "A",
    "suggerimento": "Il brano porta un esempio di testo argomentativo (la raccolta differenziata): a quale strategia lo associa?",
    "spiegazione": "L’esempio del testo che sostiene «con argomenti personali» la raccolta differenziata è legato a «“**trasformando ciò che si sa**”»: **knowledge transforming**.",
    "perOpzione": {
      "A": "È l’associazione esplicita del brano: argomentare = trasformare ciò che si sa.",
      "B": "«Enunciare subito ciò che si sa» è il knowledge telling, la strategia dello scrittore inesperto e del verbale.",
      "C": "Gli standard dei verbali sono l’esempio opposto.",
      "D": "Knowledge telling è associato al verbale, non al testo argomentativo."
    }
  },
  {
    "id": 24,
    "corretta": "C",
    "suggerimento": "Leggi l’ultima frase del brano.",
    "spiegazione": "La chiusura è esplicita: «**Dipende tutto dal tipo di testo richiesto e dallo scopo per cui si scrive**».",
    "perOpzione": {
      "A": "Trappola: il knowledge transforming è «qualitativamente migliore», ma il brano chiarisce che si può scrivere bene con entrambe le vie.",
      "B": "Non «qualunque» strategia: la scelta va fatta in base al tipo di testo.",
      "C": "È la conclusione testuale del brano.",
      "D": "Il knowledge telling va bene per alcuni testi (verbale), non per tutti."
    }
  },
  {
    "id": 25,
    "corretta": "C",
    "suggerimento": "Ricorda i due numeri dell’art. 94 Cost.: una frazione per le firme e un termine minimo prima della discussione.",
    "spiegazione": "Art. 94, ult. comma, Cost.: mozione di sfiducia firmata da almeno **un decimo** dei componenti della Camera e discussa **non prima di tre giorni** dalla presentazione (per evitare voti a sorpresa).",
    "perOpzione": {
      "A": "Un terzo è la soglia sbagliata e «entro tre giorni» capovolge la regola: i tre giorni sono un termine **minimo**, non massimo.",
      "B": "Il termine dei tre giorni è giusto, ma la soglia è un decimo, non un quinto.",
      "C": "Un decimo dei componenti e non prima di tre giorni: è il testo dell’art. 94."
    },
    "riferimenti": [
      {
        "normaId": "cost_art_94"
      }
    ]
  },
  {
    "id": 26,
    "corretta": "B",
    "suggerimento": "È lo stesso termine entro cui il decreto deve essere convertito in legge.",
    "spiegazione": "Art. 77, co. 3, Cost.: i decreti-legge perdono efficacia **sin dall’inizio** se non convertiti entro **sessanta giorni** dalla pubblicazione.",
    "perOpzione": {
      "A": "Trenta giorni non è previsto dall’art. 77.",
      "B": "Sessanta giorni dalla pubblicazione: è il termine costituzionale.",
      "C": "Venti giorni non è previsto. Attenzione a non confonderlo con i **cinque giorni** entro cui si riuniscono le Camere se sciolte."
    },
    "riferimenti": [
      {
        "normaId": "cost_art_77"
      }
    ]
  },
  {
    "id": 27,
    "corretta": "B",
    "suggerimento": "Pensa al riparto dell’art. 117 Cost.: la potestà regolamentare segue quella legislativa?",
    "spiegazione": "Art. 117, **co. 6**, Cost.: regolamenti dello **Stato** nelle materie di legislazione esclusiva (salvo delega), delle **Regioni** in ogni altra materia, degli **enti locali** per organizzazione e funzioni proprie.",
    "perOpzione": {
      "A": "Esclude Stato e Regioni: la potestà regolamentare non spetta «solo» agli enti locali. L’art. 118 Cost. applica la sussidiarietà alle funzioni amministrative, non alla potestà regolamentare.",
      "B": "Riproduce fedelmente l’art. 117, co. 6, Cost.",
      "C": "Le Regioni non hanno potestà regolamentare nelle materie di competenza esclusiva statale (salvo delega)."
    },
    "riferimenti": [
      {
        "normaId": "cost_art_117"
      },
      {
        "normaId": "cost_art_118"
      }
    ]
  },
  {
    "id": 28,
    "corretta": "A",
    "suggerimento": "«Indirizzo» rimanda ai fini dell’azione amministrativa: chi li stabilisce?",
    "spiegazione": "**Legalità-indirizzo**: la legge fissa i **fini** che l’amministrazione deve perseguire (art. 1 l. 241/1990). Si distingue dalla legalità-garanzia, in cui la legge fissa anche limiti e modalità dell’azione.",
    "perOpzione": {
      "A": "L’attività amministrativa persegue i fini determinati dalla legge: è la definizione.",
      "B": "Descrive il rapporto di fiducia Governo-Parlamento (art. 94 Cost.), non il principio di legalità.",
      "C": "Descrive la gerarchia interna, che non c’entra con la legalità."
    },
    "riferimenti": [
      {
        "normaId": "l241_1990_art_1"
      },
      {
        "normaId": "cost_art_94"
      }
    ]
  },
  {
    "id": 29,
    "corretta": "B",
    "suggerimento": "Ricorda l’art. 113 Cost.: la tutela contro gli atti della P.A. può essere limitata?",
    "spiegazione": "Art. 113 Cost.: la tutela giurisdizionale contro gli atti della P.A. è **sempre ammessa** e **non può essere esclusa o limitata** a particolari mezzi o categorie di atti.",
    "perOpzione": {
      "A": "Il giudice può annullare o sospendere gli atti imperativi: la tutela interferisce eccome con il potere amministrativo.",
      "B": "È il testo dell’art. 113, commi 1-2, Cost.",
      "C": "I ricorsi gerarchici sono rimedi **amministrativi** facoltativi, non l’unica tutela: c’è sempre quella **giurisdizionale**."
    },
    "riferimenti": [
      {
        "normaId": "cost_art_113"
      }
    ]
  },
  {
    "id": 30,
    "corretta": "C",
    "suggerimento": "«Imperativo» = capace di imporsi. Imporsi rispetto a chi?",
    "spiegazione": "**Imperatività**: il provvedimento modifica unilateralmente la sfera giuridica altrui **senza bisogno del consenso** dei destinatari.",
    "perOpzione": {
      "A": "Falso: il giudice amministrativo può sospendere gli effetti in via cautelare.",
      "B": "Falso: l’amministrazione può sospendere gli effetti in autotutela (art. 21-quater l. 241/1990).",
      "C": "Produce effetti senza il consenso di destinatari e controinteressati: è la definizione di imperatività."
    },
    "riferimenti": [
      {
        "normaId": "l241_1990_art_21_quater"
      }
    ]
  },
  {
    "id": 31,
    "corretta": "B",
    "suggerimento": "L’interesse legittimo nasce dal confronto con quale tipo di attività della P.A.? Ed è oggi risarcibile?",
    "spiegazione": "**Interesse legittimo**: posizione di chi ha un interesse **qualificato e differenziato** di fronte all’esercizio del **potere** amministrativo. Dopo Cass. SU 500/1999 è anche **risarcibile**.",
    "perOpzione": {
      "A": "Confonde i concetti: è l’interesse **diffuso** a riferirsi a una collettività; l’interesse legittimo è personale e differenziato.",
      "B": "È la definizione corretta: posizione qualificata e differenziata rispetto all’esercizio del potere.",
      "C": "Superata: l’interesse legittimo ammette anche la tutela risarcitoria (Cass. SU 500/1999, art. 30 c.p.a.)."
    },
    "riferimenti": [
      {
        "normaId": "cpa_art_30"
      }
    ]
  },
  {
    "id": 32,
    "corretta": "B",
    "suggerimento": "Gli incarichi esterni sono un’eccezione: a quali condizioni sono ammessi (art. 7 d.lgs. 165/2001)?",
    "spiegazione": "Art. 7, co. 6, d.lgs. 165/2001: incarichi solo a **esperti di particolare e comprovata specializzazione**, per **esigenze specifiche e temporanee**, non coperte dal personale interno, per **durata determinata**.",
    "perOpzione": {
      "A": "Troppo rigida: gli incarichi esterni sono ammessi, ma solo a determinate condizioni.",
      "B": "Riproduce le condizioni dell’art. 7, co. 6, d.lgs. 165/2001.",
      "C": "Opposto della norma: non sono «liberamente» assegnabili e non oltre i poteri del dirigente."
    },
    "riferimenti": [
      {
        "normaId": "dlgs165_2001_art_7"
      }
    ]
  },
  {
    "id": 33,
    "corretta": "C",
    "suggerimento": "La clausola di flessibilità ha dei limiti: può servire ad armonizzare dove i trattati lo vietano?",
    "spiegazione": "Art. 352, **par. 3**, TFUE: le misure basate sulla clausola **non possono comportare armonizzazione** nei casi in cui i trattati la escludono.",
    "perOpzione": {
      "A": "Non è previsto un parere preventivo obbligatorio della Corte di giustizia su questo uso.",
      "B": "Imprecisa: il par. 2 prevede che la Commissione richiami l’attenzione dei **Parlamenti nazionali** (controllo di sussidiarietà), non che informi il Consiglio europeo.",
      "C": "È il limite previsto dal par. 3 dell’art. 352 TFUE."
    },
    "riferimenti": [
      {
        "normaId": "tfue_art_352"
      }
    ]
  },
  {
    "id": 34,
    "corretta": "B",
    "suggerimento": "Proporzionalità = «non più del necessario». A chi si rivolge questo principio nel TUE?",
    "spiegazione": "Art. 5, par. 4, TUE: l’azione dell’**Unione** si limita a **quanto necessario** per gli obiettivi dei trattati. È un criterio di **esercizio** delle competenze, come la sussidiarietà.",
    "perOpzione": {
      "A": "Non riguarda le deroghe degli Stati membri né forme di concertazione.",
      "B": "Definizione dell’art. 5, par. 4, TUE.",
      "C": "Non è un test di compatibilità con le prassi nazionali, ma un limite all’azione dell’Unione."
    },
    "riferimenti": [
      {
        "normaId": "tue_art_5"
      }
    ]
  },
  {
    "id": 35,
    "corretta": "A",
    "suggerimento": "Il ricorso di annullamento serve contro atti che producono effetti giuridici: quale opzione li descrive?",
    "spiegazione": "Art. 263 TFUE: si impugnano gli atti di istituzioni, organi e organismi UE **destinati a produrre effetti giuridici** nei confronti di terzi.",
    "perOpzione": {
      "A": "Atti vincolanti e produttivi di effetti: sono quelli impugnabili.",
      "B": "Un’iniziativa dei cittadini non è un atto delle istituzioni e non produce effetti vincolanti.",
      "C": "L’art. 263 TFUE ammette il ricorso contro gli atti del Consiglio europeo solo se «destinati a produrre effetti giuridici nei confronti di terzi»: le dichiarazioni politiche non producono effetti giuridici vincolanti."
    },
    "riferimenti": [
      {
        "normaId": "tfue_art_263"
      },
      {
        "normaId": "tue_art_11"
      }
    ]
  },
  {
    "id": 36,
    "corretta": "B",
    "suggerimento": "Elasticità < 1 = domanda anelastica. In che direzione si muove la quantità quando il prezzo sale? E di quanto?",
    "spiegazione": "Domanda **anelastica** (|e| < 1): se il prezzo sale, la quantità **scende**, ma **meno che proporzionalmente**.",
    "perOpzione": {
      "A": "La quantità non aumenta quando sale il prezzo (salvo casi eccezionali, non per un bene normale).",
      "B": "Diminuzione meno che proporzionale: è la definizione di domanda anelastica.",
      "C": "Diminuzione più che proporzionale = domanda **elastica** (|e| > 1)."
    }
  },
  {
    "id": 37,
    "corretta": "C",
    "suggerimento": "Prezzo sotto l’equilibrio: i consumatori vogliono comprare più o meno di quanto i produttori offrono? Cosa succede al prezzo?",
    "spiegazione": "Sotto il prezzo di equilibrio: **eccesso di domanda**. La concorrenza tra acquirenti fa **salire il prezzo** fino all’equilibrio.",
    "perOpzione": {
      "A": "Il tipo di eccesso è giusto, ma il meccanismo no: in concorrenza perfetta ci si aggiusta tramite il **prezzo**, non con più produzione allo stesso prezzo.",
      "B": "Sotto l’equilibrio c’è eccesso di **domanda**, non di offerta.",
      "C": "Eccesso di domanda e prezzi che salgono fino all’equilibrio: corretto."
    }
  },
  {
    "id": 38,
    "corretta": "B",
    "suggerimento": "Con la discriminazione perfetta ogni consumatore paga il massimo che è disposto a pagare. Cosa resta a lui? E il monopolista produce poco o la quantità efficiente?",
    "spiegazione": "Discriminazione **di primo grado**: il monopolista si prende **tutto il surplus del consumatore** e produce la **quantità efficiente**, quindi la **perdita secca sparisce**.",
    "perOpzione": {
      "A": "La perdita secca sparisce anche lei, perché si produce fino al punto efficiente.",
      "B": "Corretto: niente surplus per il consumatore e niente perdita secca.",
      "C": "Il surplus del consumatore è proprio ciò che il monopolista si prende tutto."
    }
  },
  {
    "id": 39,
    "corretta": "B",
    "suggerimento": "Domanda aggregata = consumi + investimenti + spesa pubblica + esportazioni nette. Quale opzione tocca una di queste voci?",
    "spiegazione": "La **propensione marginale al consumo** cambia i consumi, cioè la **domanda aggregata**: è uno shock **di domanda**.",
    "perOpzione": {
      "A": "Il progresso tecnologico cambia la produttività: shock **di offerta**.",
      "B": "Influisce sui consumi, quindi sulla domanda aggregata.",
      "C": "I prezzi delle materie prime cambiano i costi di produzione: shock **di offerta**."
    }
  },
  {
    "id": 40,
    "corretta": "B",
    "suggerimento": "Più moneta in circolazione: i tassi salgono o scendono? Di conseguenza, come si sposta la LM?",
    "spiegazione": "Più moneta → **tassi più bassi** a parità di reddito → la LM **trasla in basso a destra**.",
    "perOpzione": {
      "A": "La direzione è giusta, ma i tassi **scendono**, non aumentano.",
      "B": "Direzione e causa corrette.",
      "C": "Con tassi in calo la LM si sposta in basso a destra, non in alto a sinistra."
    }
  },
  {
    "id": 41,
    "corretta": "C",
    "suggerimento": "Quale di queste operazioni dura una sola notte?",
    "spiegazione": "Le **operazioni di rifinanziamento marginale** sono una *standing facility* **overnight**: le banche la usano per coprire esigenze di liquidità **giornaliere**.",
    "perOpzione": {
      "A": "La riserva obbligatoria è un obbligo di deposito, non un’operazione di gestione della liquidità giornaliera.",
      "B": "Le operazioni di rifinanziamento principale sono **settimanali** (durata una settimana).",
      "C": "Overnight, su iniziativa delle banche: servono per la liquidità giornaliera."
    },
    "nota": "Domanda discutibile: una seconda risoluzione indipendente ha scelto le operazioni di rifinanziamento principale, che sono lo strumento ordinario con cui la BCE fornisce liquidità. Se «giornaliera» va inteso come overnight, la risposta è il rifinanziamento marginale; la chiave non è certa."
  },
  {
    "id": 42,
    "corretta": "A",
    "suggerimento": "Performance «organizzativa», non «individuale»: quali dimensioni riguardano l’ente nel suo insieme?",
    "spiegazione": "La performance **organizzativa** (d.lgs. 150/2009) si misura in **efficienza, efficacia e impatto** (outcome) sui destinatari.",
    "perOpzione": {
      "A": "Efficienza, efficacia e impatto: le dimensioni della performance organizzativa.",
      "B": "Risultati individuali e comportamenti sono le dimensioni della performance **individuale**.",
      "C": "Output e tempi sono singoli indicatori, non le dimensioni complessive."
    }
  },
  {
    "id": 43,
    "corretta": "A",
    "suggerimento": "«Passivi» = lato delle spese. Cosa resta da fare alla fine dell’anno per una spesa già impegnata?",
    "spiegazione": "**Residui passivi**: spese **impegnate ma non ancora pagate** a fine esercizio. I residui **attivi** sono entrate accertate ma non riscosse.",
    "perOpzione": {
      "A": "Definizione esatta di residui passivi.",
      "B": "Crediti accertati = residui **attivi**.",
      "C": "Le previsioni non sono residui: i residui nascono da impegni o accertamenti già fatti."
    }
  },
  {
    "id": 44,
    "corretta": "A",
    "suggerimento": "Direzione amministrativa = funzioni del management (prevedere, organizzare, comandare…). Chi le ha teorizzate?",
    "spiegazione": "La **teoria della direzione amministrativa** è di **Henri Fayol**: le funzioni del management sono prevedere, organizzare, comandare, coordinare, controllare.",
    "perOpzione": {
      "A": "Fayol è l’autore della teoria della direzione amministrativa.",
      "B": "Weick è noto per il **sensemaking** e i sistemi a legame debole.",
      "C": "Mayo è il padre della scuola delle **relazioni umane** (esperimenti Hawthorne)."
    }
  },
  {
    "id": 45,
    "corretta": "C",
    "suggerimento": "«Contingenze» = dipende dal contesto. Quale opzione lega la struttura all’ambiente esterno?",
    "spiegazione": "**Teoria delle contingenze**: non esiste una struttura ottimale in assoluto. È efficace quella **coerente con l’ambiente** (tecnologia, dimensione, incertezza).",
    "perOpzione": {
      "A": "Le transazioni come unità di analisi sono la teoria dei **costi di transazione** (Williamson).",
      "B": "L’isomorfismo è dell’**istituzionalismo** (DiMaggio e Powell); la public service motivation è un altro filone.",
      "C": "Struttura coerente con il contesto esterno: è il cuore della teoria."
    }
  },
  {
    "id": 46,
    "corretta": "C",
    "suggerimento": "Goal setting = fissare obiettivi. Che effetto ha sulla motivazione un obiettivo sfidante?",
    "spiegazione": "**Goal setting** (Locke): obiettivi **specifici e sfidanti** (ma raggiungibili) aumentano motivazione e prestazione.",
    "perOpzione": {
      "A": "La scala di bisogni in 5 categorie è la **piramide di Maslow**.",
      "B": "È l’opposto della teoria del goal setting.",
      "C": "La difficoltà dell’obiettivo influenza l’intensità della motivazione: è il principio di Locke."
    }
  },
  {
    "id": 47,
    "corretta": "A",
    "suggerimento": "Pensa alle «basi del potere» in un’organizzazione: chi può premiare, chi può punire, chi ha un’autorità formale…",
    "spiegazione": "French e Raven: potere **di ricompensa, coercitivo, legittimo**, più quello **dell’esperto** e **referente**.",
    "perOpzione": {
      "A": "Ricompensa, coercitivo, legittimo: tre delle basi del potere di French e Raven.",
      "B": "Categorie inventate, non appartengono alla teoria.",
      "C": "Classificazione temporale che non c’entra con French e Raven."
    }
  },
  {
    "id": 48,
    "corretta": "B",
    "suggerimento": "«Enlargement» = allargamento: della mansione o dell’organizzazione? In orizzontale o in verticale?",
    "spiegazione": "**Job enlargement**: allargamento **orizzontale**, più **compiti** dello stesso livello. Il **job enrichment** aggiunge invece responsabilità e autonomia (verticale).",
    "perOpzione": {
      "A": "I servizi al cittadino riguardano l’organizzazione, non la singola mansione.",
      "B": "Più compiti alla stessa persona: è il job enlargement.",
      "C": "L’organico è una questione di macrostruttura, non di mansione."
    }
  },
  {
    "id": 49,
    "corretta": "A",
    "suggerimento": "È l’agenzia che si occupa della trasformazione digitale della PA e attua il CAD.",
    "spiegazione": "Il **Piano triennale per l’informatica nella PA** è redatto da **AgID** (art. 14-bis CAD) e approvato dal Presidente del Consiglio o dal ministro delegato.",
    "perOpzione": {
      "A": "AgID redige il Piano triennale.",
      "B": "ACN si occupa di cybersicurezza, non redige il Piano triennale.",
      "C": "La SNA si occupa di formazione e reclutamento dei dirigenti."
    },
    "riferimenti": [
      {
        "normaId": "cad_art_14_bis"
      }
    ]
  },
  {
    "id": 50,
    "corretta": "A",
    "suggerimento": "Destinatari e beneficiari sono la stessa cosa? Pensa a una politica antinquinamento.",
    "spiegazione": "**Target** = soggetti di cui la politica vuole **cambiare il comportamento**. Non coincidono per forza con i beneficiari (nell’antinquinamento: target le imprese, beneficiari i cittadini).",
    "perOpzione": {
      "A": "Definizione corretta di target group.",
      "B": "Chi promuove una politica è un attore del processo decisionale, non il destinatario.",
      "C": "I beneficiari finali sono un’altra categoria."
    }
  },
  {
    "id": 51,
    "corretta": "C",
    "suggerimento": "«Wicked problems» (Rittel e Webber): si possono definire in modo univoco e risolvere una volta per tutte?",
    "spiegazione": "I **wicked problems** non hanno una formulazione definitiva né una soluzione definitiva: sono **indefinibili** e quindi non risolvibili una volta per tutte.",
    "perOpzione": {
      "A": "Rischi per un gruppo specifico possono esserci in qualsiasi politica: non definiscono un problema «maligno».",
      "B": "Non dipende dalla volontà dei decisori, ma dalla natura del problema.",
      "C": "Indefinibili e quindi insolubili: è la definizione di Rittel e Webber."
    }
  },
  {
    "id": 52,
    "corretta": "B",
    "suggerimento": "«Evidence-based» = basato su evidenze. Quali caratteristiche rendono un’evidenza affidabile?",
    "spiegazione": "L’approccio **evidence-based** si fonda su basi informative **esplicite, trasparenti e replicabili**, che altri possono verificare.",
    "perOpzione": {
      "A": "I modelli matematici di singoli studiosi non sono la caratteristica distintiva (e non garantiscono replicabilità).",
      "B": "Esplicite, trasparenti e replicabili: la definizione.",
      "C": "Commissionare studi ad hoc non basta: conta il metodo, non chi li produce."
    }
  },
  {
    "id": 53,
    "corretta": "C",
    "suggerimento": "Valutazione di «processo»: guarda ai risultati finali o a come la politica viene attuata?",
    "spiegazione": "La **valutazione di processo** (o di implementazione) studia **come** gli input diventano output e outcome durante l’attuazione.",
    "perOpzione": {
      "A": "Gli indicatori di efficienza misurano, ma non spiegano i meccanismi di attuazione.",
      "B": "Delineare le teorie causa-effetto è la ricostruzione della **teoria del programma**.",
      "C": "Analisi della trasformazione input → output → outcome: è la valutazione di processo."
    }
  },
  {
    "id": 54,
    "corretta": "B",
    "suggerimento": "La valutazione realista chiede «cosa funziona, per chi, in quali circostanze». Punta su gruppi di controllo o su meccanismi e contesti?",
    "spiegazione": "**Valutazione realista** (Pawson e Tilley): spiega quali **meccanismi** si attivano in quali **contesti** (schema contesto-meccanismo-esito).",
    "perOpzione": {
      "A": "Difference-in-differences e gruppi di controllo sono la valutazione **controfattuale**.",
      "B": "Meccanismi attivati in determinati contesti: è la definizione.",
      "C": "Formula generica che gioca sulla parola «realisticamente», senza cogliere il nucleo (meccanismi + contesti)."
    }
  },
  {
    "id": 55,
    "corretta": "A",
    "suggerimento": "Quale espressione regge «I’d ___ + soggetto + past simple» per dire «preferirei che tu…»?",
    "spiegazione": "**I’d rather + soggetto + past simple** esprime una preferenza su ciò che fa un’altra persona.",
    "perOpzione": {
      "A": "«I’d rather you didn’t smoke» = preferirei che non fumassi.",
      "B": "«I’d prefer» sarebbe corretto, ma «I’d preferred» (past perfect) no.",
      "C": "«I’d sooner» funzionerebbe, «I’d soon» no."
    }
  },
  {
    "id": 56,
    "corretta": "B",
    "suggerimento": "Phrasal verb con «make» che significa «riuscire a decifrare / distinguere».",
    "spiegazione": "**To make out** = distinguere, decifrare: «facevo fatica a **decifrarla**».",
    "perOpzione": {
      "A": "«Make in» non esiste con questo significato.",
      "B": "«Make it out» = riuscire a leggerla.",
      "C": "«Make up» = inventare, truccarsi, fare pace."
    }
  },
  {
    "id": 57,
    "corretta": "B",
    "suggerimento": "Per sport e attività pratiche (guida, sci, paracadute), come si chiama chi insegna?",
    "spiegazione": "Per attività pratiche e sportive si dice **instructor**: *parachute / driving / ski instructor*.",
    "perOpzione": {
      "A": "«Teacher» si usa per l’insegnamento scolastico.",
      "B": "«Parachute instructor» è la collocazione corretta.",
      "C": "«Trainer» si usa per allenatori o formatori, non per il paracadutismo."
    }
  },
  {
    "id": 58,
    "corretta": "B",
    "suggerimento": "La frase esprime un rimpianto su qualcosa che non è successo. Quale espressione regge il past perfect con questo senso?",
    "spiegazione": "**If only + past perfect** = rimpianto sul passato: «**Se solo** avessero letto il rapporto prima…».",
    "perOpzione": {
      "A": "«Because» introduce una causa e non regge il periodo ipotetico (*could have taken*).",
      "B": "«If only they had read…» = se solo avessero letto: corretto.",
      "C": "«Unless» (a meno che) capovolgerebbe il senso della frase."
    }
  },
  {
    "id": 59,
    "corretta": "A",
    "suggerimento": "Due regole: dove va «and» nei numeri britannici? E «thousand» prende la -s?",
    "spiegazione": "In inglese britannico: **and** prima di decine e unità di ogni gruppo (*hundred **and** twenty-four*), e **thousand senza -s** dopo un numero.",
    "perOpzione": {
      "A": "«A hundred and twenty-four thousand, eight hundred and forty-three»: entrambe le regole rispettate.",
      "B": "Mancano gli «and» dopo «hundred» e ce n’è uno fuori posto («thousand and eight hundred»).",
      "C": "«Thousands» con la -s è sbagliato dopo un numero."
    }
  },
  {
    "id": 60,
    "corretta": "A",
    "suggerimento": "Phrasal verb che significa «fare a meno di».",
    "spiegazione": "**To do without** = fare a meno di: «hanno dovuto **saltare** il pranzo».",
    "perOpzione": {
      "A": "«Do without lunch» = fare a meno del pranzo.",
      "B": "«Get over» = superare (una difficoltà, una malattia, una delusione).",
      "C": "«Renounce» è formale e si usa per diritti, titoli o convinzioni, non per un pasto."
    }
  }
];
