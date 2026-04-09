const DOMANDE = [
  {
    "id": 1,
    "materia": "Situazionale",
    "brano": "",
    "domanda": "Durante la fase finale di un progetto internazionale di espansione-mercato, emergono improvvisamente restrizioni doganali che bloccano l'invio dei prototipi ai potenziali clienti. Il tuo team è sotto pressione perché la finestra di lancio è molto ristretta.",
    "opzioni": {
      "A": "Convogli tutto il team su una riunione lampo per valutare rapidamente soluzioni logistiche alternative, assegnando compiti specifici e monitorando i progressi ogni quattro ore",
      "B": "Analizzi la normativa doganale, elaborando un dossier di eccezione da inoltrare alle autorità e informi il team solo quando ottieni l'ok definitivo",
      "C": "Mantieni il piano attuale cercando contatti informali per \"sbloccare\" la pratica doganale, evitando di coinvolgere il team finché non hai una risposta ufficiale"
    },
    "spiegazioneId": 1
  },
  {
    "id": 2,
    "materia": "Situazionale",
    "brano": "",
    "domanda": "In un servizio di help-desk IT hai notato un'impennata di ticket aperti negli ultimi tre giorni, ma i KPI personali dei tecnici non indicano alcuna anomalia.",
    "opzioni": {
      "A": "Chiedi ai tecnici senior di analizzare manualmente un campione di ticket per identificare pattern ricorrenti prima di decidere altre azioni. Discuti con lui i risultati a fine giornata.",
      "B": "Ampli temporaneamente la soglia di tempo di risposta consentita, confidando che l'ondata rientri da sola appena passata la finestra di rilascio software",
      "C": "Istituisci immediatamente un sistema di triage centralizzato che riassegna dinamicamente i ticket in base alla competenza, facendo daily stand-up di 15 minuti"
    },
    "spiegazioneId": 2
  },
  {
    "id": 3,
    "materia": "Situazionale",
    "brano": "",
    "domanda": "Clara, analista dati dal grande potenziale, ha spesso buone idee ma fatica a prendersi spazio nei meeting.",
    "opzioni": {
      "A": "Le affidi subito la presentazione del prossimo report mensile al top management, offrendole un breve coaching preventivo, poi chiedi un feedback ai patecipanti per capire come è andata",
      "B": "Le suggerisci corsi online di public speaking e rimandi a un futuro non definito l'assegnazione di task \"in vetrina\", attendendo che i tempi maturino",
      "C": "Programmi un colloquio di sviluppo per definire con lei un piano graduale: workshop interni, shadowing a un collega e poi piccole presentazioni"
    },
    "spiegazioneId": 3
  },
  {
    "id": 4,
    "materia": "Situazionale",
    "brano": "",
    "domanda": "Nel tuo reparto R&D un giovane ingegnere, Paolo, eccelle nel problem solving tecnico ma mostra scarso interesse per la gestione di progetto.",
    "opzioni": {
      "A": "Gli assegni il ruolo di project-leader su un prototipo a basso rischio, garantendogli mentoring settimanale e feedback costante",
      "B": "Organizzi un assessment di competenze per comprendere se la strada gestionale sia davvero coerente con le sue motivazioni prima di qualsiasi incarico e ne discuti con lui i risultati",
      "C": "Lo incentivi proponendogli un bonus legato a milestone di progetto, senza cambiare le sue mansioni ritenendo che sia solo una questione di esperienza"
    },
    "spiegazioneId": 4
  },
  {
    "id": 5,
    "materia": "Situazionale",
    "brano": "",
    "domanda": "L'azienda vuole introdurre un modello di lavoro ibrido con spazi condivisi; alcuni dipendenti temono la perdita di postazione fissa.",
    "opzioni": {
      "A": "Annunci la data di transizione e assegni a ogni team una check-list operativa, lasciando poca flessibilità sul layout",
      "B": "Crei un'area pilota, inviti volontari a testare il nuovo ambiente per quattro settimane e raccogli feedback strutturati prima del roll-out",
      "C": "Convochi una riunione plenaria dove spieghi vantaggi economici e ambientali, senza prevedere fasi intermedie d'adozione"
    },
    "spiegazioneId": 5
  },
  {
    "id": 6,
    "materia": "Situazionale",
    "brano": "",
    "domanda": "È stata appena acquistata una piattaforma di IA per automatizzare la selezione curricula; il reparto HR è scettico.",
    "opzioni": {
      "A": "Rinvii l'adozione di sei mesi, in attesa che il personale legga la documentazione tecnica in autonomia",
      "B": "Imposti subito la piattaforma come unico canale di screening, lasciando agli HR solo la fase finale di colloquio",
      "C": "Organizzi workshop pratici con casi reali e inviti HR di altre aziende che usano già la piattaforma a raccontare la loro esperienza"
    },
    "spiegazioneId": 6
  },
  {
    "id": 7,
    "materia": "Situazionale",
    "brano": "",
    "domanda": "Come direttore di un laboratorio farmaceutico scopri che un lotto di principi attivi non soddisfa completamente gli standard di purezza.",
    "opzioni": {
      "A": "Diluisci il lotto con materiale conforme per rientrare nei limiti, programmando verifiche successive sul mercato",
      "B": "Continui la produzione, confidando che i test finali di controllo qualità filtrino eventuali problemi prima della distribuzione",
      "C": "Blocchi la produzione del farmaco, informi immediatamente le autorità competenti e avvii un'indagine interna trasparente"
    },
    "spiegazioneId": 7
  },
  {
    "id": 8,
    "materia": "Situazionale",
    "brano": "",
    "domanda": "Stai guidando il rilascio di un nuovo sito e-commerce in tempo per il Black Friday, mancano nove settimane.",
    "opzioni": {
      "A": "Fissi solo la data di go-live e lasci che il team scelga la propria metodologia, intervenendo solo se emergono ritardi critici",
      "B": "Ti concentri sulla delivery \"essenziale\", tagliando subito tutte le funzionalità non core per minimizzare i rischi di slittamento",
      "C": "Definisci sprint settimanali con obiettivi SMART, review demo aperta al cliente e retrospettiva di miglioramento continuo"
    },
    "spiegazioneId": 8
  },
  {
    "id": 9,
    "materia": "Situazionale",
    "brano": "",
    "domanda": "Devi ridurre del 15 % il tempo medio di evasione ordini in un centro logistico entro il trimestre",
    "opzioni": {
      "A": "Introduci straordinari fortemente incentivati per il personale nelle ore di picco, rinviando a dopo il trimestre l'analisi strutturale dei processi",
      "B": "Delinei un piano high-level e deleghi ai team-leader di dettagliare le attività, verificando i progressi con meeting mensili",
      "C": "Lanci un programma Kaizen coinvolgendo operatori e supervisori per identificare colli di bottiglia e impostare KPI giornalieri"
    },
    "spiegazioneId": 9
  },
  {
    "id": 10,
    "materia": "Situazionale",
    "brano": "",
    "domanda": "Sei responsabile vendite di una PMI che vuole entrare in un nuovo mercato estero; devi coordinare marketing, produzione e legale.",
    "opzioni": {
      "A": "Programmi call separate con ciascun dipartimento, raccogliendo input via e-mail per poi prendere tu la decisione finale",
      "B": "Istituisci un comitato inter-funzionale che si riunisce ogni due settimane con una roadmap condivisa e dashboard di avanzamento",
      "C": "Gestisci i contatti esteri da solo per velocizzare le trattative, coinvolgendo gli altri dipartimenti solo alla firma del contratto"
    },
    "spiegazioneId": 10
  },
  {
    "id": 11,
    "materia": "Situazionale",
    "brano": "",
    "domanda": "In un impianto chimico rilevi emissioni sopra i limiti di legge.",
    "opzioni": {
      "A": "Riduci la produzione per rientrare nei limiti, rinvii la comunicazione ufficiale finché non avrai dati consolidati",
      "B": "Prosegui la produzione contando su controlli non frequenti, ma al contempo pianifichi interventi futuri",
      "C": "Blocchi temporaneamente l'impianto, notifichi subito le autorità e avvii un audit per individuare le cause e le azioni correttive"
    },
    "spiegazioneId": 11
  },
  {
    "id": 12,
    "materia": "Situazionale",
    "brano": "",
    "domanda": "Devi coordinare marketing, R&D e produzione per lanciare un prodotto in un nuovo continente entro 6 mesi.",
    "opzioni": {
      "A": "Istituisci un comitato interfunzionale con riunioni quindicinali, roadmap condivisa e tool di project-tracking visibile a tutti",
      "B": "Gestisci in prima persona i contatti esteri e informi gli altri dipartimenti a milestone raggiunte, delegando le fasi successive",
      "C": "Lasci che ciascun dipartimento lavori in autonomia contando su una convergenza spontanea al momento del lancio"
    },
    "spiegazioneId": 12
  },
  {
    "id": 13,
    "materia": "Logica",
    "brano": "",
    "domanda": "Quale figura completa coerentemente la sequenza logica?",
    "paginaPdf": 3,
    "opzioni": {
      "A": "Fig. 1",
      "B": "Fig. 4",
      "C": "Fig. 5"
    },
    "spiegazioneId": 13
  },
  {
    "id": 14,
    "materia": "Logica",
    "brano": "",
    "domanda": "Quale figura completa coerentemente la sequenza logica?",
    "paginaPdf": 3,
    "opzioni": {
      "A": "Fig. 3",
      "B": "Fig. 2",
      "C": "Fig. 4"
    },
    "spiegazioneId": 14
  },
  {
    "id": 15,
    "materia": "Logica",
    "brano": "",
    "domanda": "Quale figura completa coerentemente la sequenza logica?",
    "paginaPdf": 4,
    "opzioni": {
      "A": "Fig. 5",
      "B": "Fig. 2",
      "C": "Fig. 3"
    },
    "spiegazioneId": 15
  },
  {
    "id": 16,
    "materia": "Logica",
    "brano": "",
    "domanda": "Quale figura completa coerentemente la serie?",
    "paginaPdf": 4,
    "opzioni": {
      "A": "Figura 5",
      "B": "Figura 4",
      "C": "Figura 3"
    },
    "spiegazioneId": 16
  },
  {
    "id": 17,
    "materia": "Logica",
    "brano": "",
    "domanda": "Quale figura completa coerentemente la serie?",
    "paginaPdf": 5,
    "opzioni": {
      "A": "Figura 1",
      "B": "Figura 4",
      "C": "Figura 2"
    },
    "spiegazioneId": 17
  },
  {
    "id": 18,
    "materia": "Logica",
    "brano": "",
    "domanda": "Quale figura completa coerentemente la serie?",
    "paginaPdf": 5,
    "opzioni": {
      "A": "Figura 4",
      "B": "Figura 1",
      "C": "Figura 2"
    },
    "spiegazioneId": 18
  },
  {
    "id": 19,
    "materia": "Comprensione",
    "brano": "Nel primo racconto, Taffimay, mentre pesca con il padre, manda alla mamma primitiva un messaggio ideografico su scorza di betulla, del quale è latore un primitivo straniero, che non conosce la lingua Tegumai: di qui una serie di strani equivoci, perché la madre dà una interpretazione fantasiosa e catastrofica del confuso schizzo. Nel secondo racconto, Taffimay e suo padre, attraverso discussioni ed esperimenti, arrivano a scoprire la possibilità di inviare messaggi di non equivoca interpretazione facendo corrispondere a ogni diverso suono un segno convenzionale; e si rendono conto di aver \"scoperto il grande segreto del mondo\". Anche la scoperta del fatto che con soli dieci segni, le \"cifre\", si possono scrivere in modo perfetto, e senza equivoci, gli infiniti numeri della serie naturale (e si possono eseguire su di essi complicate operazioni applicando semplici regole), anche questa scoperta deve essere sentita dal bambino come rivelazione di un \"gran segreto del mondo\". L'idea geniale, questa volta, è quella di attribuire a uno stesso simbolo un valore differente, al variare della sua posizione (\"principio posizionale\"). Non sarebbe male che il maestro, e il professore, sapessero a questo proposito qualche cosa di più di quello che insegnano ai loro allievi; che essi apprendessero in un liceo magistrale, o in un liceo qualunque, a servirsi del principio posizionale per costruire numerazioni in base diversa dal \"dieci\", in particolare nella base \"due\", che richiede il numero minimo di simboli necessario per scrivere ogni possibile numero (i due soli simboli \"0\" e \"1\").",
    "domanda": "Secondo le informazioni fornite nel brano, che cosa hanno scoperto Taffimay e suo padre?",
    "opzioni": {
      "A": "Una proprietà segreta dei suoni",
      "B": "Il calcolo basato sul principio posizionale",
      "C": "Le cifre arabe",
      "D": "La scrittura di tipo alfabetico"
    },
    "spiegazioneId": 19
  },
  {
    "id": 20,
    "materia": "Comprensione",
    "brano": "Nel primo racconto, Taffimay, mentre pesca con il padre, manda alla mamma primitiva un messaggio ideografico su scorza di betulla, del quale è latore un primitivo straniero, che non conosce la lingua Tegumai: di qui una serie di strani equivoci, perché la madre dà una interpretazione fantasiosa e catastrofica del confuso schizzo. Nel secondo racconto, Taffimay e suo padre, attraverso discussioni ed esperimenti, arrivano a scoprire la possibilità di inviare messaggi di non equivoca interpretazione facendo corrispondere a ogni diverso suono un segno convenzionale; e si rendono conto di aver \"scoperto il grande segreto del mondo\". Anche la scoperta del fatto che con soli dieci segni, le \"cifre\", si possono scrivere in modo perfetto, e senza equivoci, gli infiniti numeri della serie naturale (e si possono eseguire su di essi complicate operazioni applicando semplici regole), anche questa scoperta deve essere sentita dal bambino come rivelazione di un \"gran segreto del mondo\". L'idea geniale, questa volta, è quella di attribuire a uno stesso simbolo un valore differente, al variare della sua posizione (\"principio posizionale\"). Non sarebbe male che il maestro, e il professore, sapessero a questo proposito qualche cosa di più di quello che insegnano ai loro allievi; che essi apprendessero in un liceo magistrale, o in un liceo qualunque, a servirsi del principio posizionale per costruire numerazioni in base diversa dal \"dieci\", in particolare nella base \"due\", che richiede il numero minimo di simboli necessario per scrivere ogni possibile numero (i due soli simboli \"0\" e \"1\").",
    "domanda": "Nel contesto del brano, in che modo l'autore presenta il principio posizionale?",
    "opzioni": {
      "A": "Come un utile strumento di lavoro",
      "B": "Come qualcosa di indissolubilmente legato al sistema decimale",
      "C": "Come l'applicazione ai numeri del principio alfabetico",
      "D": "Come una grande conquista intellettuale"
    },
    "spiegazioneId": 20
  },
  {
    "id": 21,
    "materia": "Comprensione",
    "brano": "Nel primo racconto, Taffimay, mentre pesca con il padre, manda alla mamma primitiva un messaggio ideografico su scorza di betulla, del quale è latore un primitivo straniero, che non conosce la lingua Tegumai: di qui una serie di strani equivoci, perché la madre dà una interpretazione fantasiosa e catastrofica del confuso schizzo. Nel secondo racconto, Taffimay e suo padre, attraverso discussioni ed esperimenti, arrivano a scoprire la possibilità di inviare messaggi di non equivoca interpretazione facendo corrispondere a ogni diverso suono un segno convenzionale; e si rendono conto di aver \"scoperto il grande segreto del mondo\". Anche la scoperta del fatto che con soli dieci segni, le \"cifre\", si possono scrivere in modo perfetto, e senza equivoci, gli infiniti numeri della serie naturale (e si possono eseguire su di essi complicate operazioni applicando semplici regole), anche questa scoperta deve essere sentita dal bambino come rivelazione di un \"gran segreto del mondo\". L'idea geniale, questa volta, è quella di attribuire a uno stesso simbolo un valore differente, al variare della sua posizione (\"principio posizionale\"). Non sarebbe male che il maestro, e il professore, sapessero a questo proposito qualche cosa di più di quello che insegnano ai loro allievi; che essi apprendessero in un liceo magistrale, o in un liceo qualunque, a servirsi del principio posizionale per costruire numerazioni in base diversa dal \"dieci\", in particolare nella base \"due\", che richiede il numero minimo di simboli necessario per scrivere ogni possibile numero (i due soli simboli \"0\" e \"1\").",
    "domanda": "Nel contesto del brano, come viene descritto il rapporto tra la scrittura e il sistema numerico posizionale?",
    "opzioni": {
      "A": "Si tratta di due invenzioni indipendenti",
      "B": "Il sistema numerico posizionale è nato applicando ai numeri il principio della scrittura",
      "C": "Entrambi applicano lo stesso principio base",
      "D": "Dal sistema decimale può derivare il sistema binario"
    },
    "spiegazioneId": 21
  },
  {
    "id": 22,
    "materia": "Comprensione",
    "brano": "Carl Bereiter e Mariane Scardamalia, in uno studio di fondamentale importanza per capire la problematicità della scrittura nell'apprendente, hanno chiarito che vi sono sostanzialmente due vie per affrontare questa complessità, che corrispondono alla messa in atto di due differenti strategie cognitive, da loro definite knowledge telling ('dire ciò che si sa') e knowledge transforming ('trasformare ciò che si sa'). Lo scrittore inesperto, che ancora non possiede raffinati strumenti retorici (dunque il bambino che si trova a comporre i primi testi, dopo essere stato abituato per anni a conversare, o l'adulto poco avvezzo a impugnare la penna), tende a seguire la prima via, cioè a riportare su carta tutti i ricordi che riesce a recuperare riguardo a",
    "domanda": "",
    "opzioni": {
      "A": "",
      "B": "",
      "C": ""
    },
    "spiegazioneId": 22
  },
  {
    "id": 23,
    "materia": "Comprensione",
    "brano": "Carl Bereiter e Mariane Scardamalia, in uno studio di fondamentale importanza per capire la problematicità della scrittura nell'apprendente, hanno chiarito che vi sono sostanzialmente due vie per affrontare questa complessità, che corrispondono alla messa in atto di due differenti strategie cognitive, da loro definite knowledge telling ('dire ciò che si sa') e knowledge transforming ('trasformare ciò che si sa'). Lo scrittore inesperto, che ancora non possiede raffinati strumenti retorici (dunque il bambino che si trova a comporre i primi testi, dopo essere stato abituato per anni a conversare, o l'adulto poco avvezzo a impugnare la penna), tende a seguire la prima via, cioè a riportare su carta tutti i ricordi che riesce a recuperare riguardo al tema di scrittura senza spendere troppo tempo e troppe energie nella pianificazione del testo; lo scrittore esperto, al contrario, tende a pianificare di più e a elaborare in modo più articolato il proprio scritto e, mentre scrive, procede a rivedere e a trasformare le proprie conoscenze sul tema. Qualitativamente, dunque, la seconda via è migliore, in quanto arricchisce il pensiero di chi scrive: ed è cosa risaputa, sin dall'antichità, che la scrittura è uno degli strumenti più efficaci per dare ordine al proprio pensiero, per fare chiarezza nelle proprie conoscenze e anche per arrivare a conoscere meglio sé stessi (…). Tuttavia, Bereiter e Scardamalia insegnano e dimostrano che è possibile scrivere bene seguendo entrambe le vie, adottando accorgimenti e strategie mirati e consapevoli: dunque, si può scrivere bene \"dicendo ciò che si sa\" (ad esempio quando si ha il compito di redigere il verbale di una riunione) e non solo mostrando di padroneggiare la scrittura a un livello qualitativamente superiore, \"trasformando ciò che si sa\" (ad esempio, quando si scrive per sostenere, con argomenti personali, l'opportunità di praticare la raccolta differenziata dei rifiuti). Dipende tutto dal tipo di testo richiesto e dallo scopo per cui si scrive.",
    "domanda": "In base alle informazioni fornite nel brano, quale strategia cognitiva è importante per la stesura del verbale di una riunione?",
    "opzioni": {
      "A": "Scrittura argomentativa",
      "B": "Scrittura fortemente pianificata",
      "C": "Knowledge telling"
    },
    "spiegazioneId": 23
  },
  {
    "id": 24,
    "materia": "Comprensione",
    "brano": "Carl Bereiter e Mariane Scardamalia, in uno studio di fondamentale importanza per capire la problematicità della scrittura nell'apprendente, hanno chiarito che vi sono sostanzialmente due vie per affrontare questa complessità, che corrispondono alla messa in atto di due differenti strategie cognitive, da loro definite knowledge telling ('dire ciò che si sa') e knowledge transforming ('trasformare ciò che si sa'). Lo scrittore inesperto, che ancora non possiede raffinati strumenti retorici (dunque il bambino che si trova a comporre i primi testi, dopo essere stato abituato per anni a conversare, o l'adulto poco avvezzo a impugnare la penna), tende a seguire la prima via, cioè a riportare su carta tutti i ricordi che riesce a recuperare riguardo al tema di scrittura senza spendere troppo tempo e troppe energie nella pianificazione del testo; lo scrittore esperto, al contrario, tende a pianificare di più e a elaborare in modo più articolato il proprio scritto e, mentre scrive, procede a rivedere e a trasformare le proprie conoscenze sul tema. Qualitativamente, dunque, la seconda via è migliore, in quanto arricchisce il pensiero di chi scrive: ed è cosa risaputa, sin dall'antichità, che la scrittura è uno degli strumenti più efficaci per dare ordine al proprio pensiero, per fare chiarezza nelle proprie conoscenze e anche per arrivare a conoscere meglio sé stessi (…). Tuttavia, Bereiter e Scardamalia insegnano e dimostrano che è possibile scrivere bene seguendo entrambe le vie, adottando accorgimenti e strategie mirati e consapevoli: dunque, si può scrivere bene \"dicendo ciò che si sa\" (ad esempio quando si ha il compito di redigere il verbale di una riunione) e non solo mostrando di padroneggiare la scrittura a un livello qualitativamente superiore, \"trasformando ciò che si sa\" (ad esempio, quando si scrive per sostenere, con argomenti personali, l'opportunità di praticare la raccolta differenziata dei rifiuti). Dipende tutto dal tipo di testo richiesto e dallo scopo per cui si scrive.",
    "domanda": "In base alle informazioni fornite nel brano, quale strategia cognitiva è importante per la scrittura di un testo argomentativo?",
    "opzioni": {
      "A": "Una strategia di knowledge transforming",
      "B": "L'enunciazione immediata di ciò che si sa",
      "C": "L'adozione degli standard usati per i verbali"
    },
    "spiegazioneId": 24
  },
  {
    "id": 25,
    "materia": "Comprensione",
    "brano": "Carl Bereiter e Mariane Scardamalia, in uno studio di fondamentale importanza per capire la problematicità della scrittura nell'apprendente, hanno chiarito che vi sono sostanzialmente due vie per affrontare questa complessità, che corrispondono alla messa in atto di due differenti strategie cognitive, da loro definite knowledge telling ('dire ciò che si sa') e knowledge transforming ('trasformare ciò che si sa'). Lo scrittore inesperto, che ancora non possiede raffinati strumenti retorici (dunque il bambino che si trova a comporre i primi testi, dopo essere stato abituato per anni a conversare, o l'adulto poco avvezzo a impugnare la penna), tende a seguire la prima via, cioè a riportare su carta tutti i ricordi che riesce a recuperare riguardo al tema di scrittura senza spendere troppo tempo e troppe energie nella pianificazione del testo; lo scrittore esperto, al contrario, tende a pianificare di più e a elaborare in modo più articolato il proprio scritto e, mentre scrive, procede a rivedere e a trasformare le proprie conoscenze sul tema. Qualitativamente, dunque, la seconda via è migliore, in quanto arricchisce il pensiero di chi scrive: ed è cosa risaputa, sin dall'antichità, che la scrittura è uno degli strumenti più efficaci per dare ordine al proprio pensiero, per fare chiarezza nelle proprie conoscenze e anche per arrivare a conoscere meglio sé stessi (…). Tuttavia, Bereiter e Scardamalia insegnano e dimostrano che è possibile scrivere bene seguendo entrambe le vie, adottando accorgimenti e strategie mirati e consapevoli: dunque, si può scrivere bene \"dicendo ciò che si sa\" (ad esempio quando si ha il compito di redigere il verbale di una riunione) e non solo mostrando di padroneggiare la scrittura a un livello qualitativamente superiore, \"trasformando ciò che si sa\" (ad esempio, quando si scrive per sostenere, con argomenti personali, l'opportunità di praticare la raccolta differenziata dei rifiuti). Dipende tutto dal tipo di testo richiesto e dallo scopo per cui si scrive.",
    "domanda": "In base alle informazioni presentate nel brano, quale strategia è più consigliabile per scrivere un testo?",
    "opzioni": {
      "A": "La strategia di knowledge transforming",
      "B": "Qualunque strategia cognitiva va bene",
      "C": "Dipende dal tipo di testo"
    },
    "spiegazioneId": 25
  },
  {
    "id": 26,
    "materia": "Diritto",
    "brano": "",
    "domanda": "Ai sensi dell'art. 94, la mozione di sfiducia al Governo:",
    "opzioni": {
      "A": "deve essere firmata da almeno un terzo dei componenti della Camera e deve essere messa in discussione entro tre giorni dalla sua presentazione",
      "B": "deve essere firmata da almeno un quinto dei componenti della Camera e non può essere messa in discussione prima di tre giorni dalla sua presentazione",
      "C": "deve essere firmata da almeno un decimo dei componenti della Camera e non può essere messa in discussione prima di tre giorni dalla sua presentazione"
    },
    "spiegazioneId": 26
  },
  {
    "id": 27,
    "materia": "Diritto",
    "brano": "",
    "domanda": "Ai sensi dell'art. 77 Cost., i decreti legge perdono efficacia ab origine, se non convertiti in legge:",
    "opzioni": {
      "A": "entro trenta giorni dalla loro pubblicazione",
      "B": "entro sessanta giorni dalla loro pubblicazione",
      "C": "entro venti giorni dalla loro pubblicazione"
    },
    "spiegazioneId": 27
  },
  {
    "id": 28,
    "materia": "Diritto",
    "brano": "",
    "domanda": "A chi spetta la potestà regolamentare nell'ordinamento italiano?",
    "opzioni": {
      "A": "La potestà regolamentare spetta solo al Consiglio di Stato",
      "B": "La potestà regolamentare spetta al Governo e alle Regioni",
      "C": "La potestà regolamentare spetta esclusivamente al Parlamento"
    },
    "spiegazioneId": 28
  },
  {
    "id": 29,
    "materia": "Diritto",
    "brano": "",
    "domanda": "Contro gli atti della pubblica amministrazione la tutela giurisdizionale:",
    "opzioni": {
      "A": "non può in ogni caso interferire con l'esplicazione dei poteri amministrativi che avvenga attraverso provvedimenti imperativi ed esecutivi",
      "B": "è sempre ammessa e non può essere esclusa o limitata a particolari mezzi di impugnazione o per determinate categorie di atti",
      "C": "può essere esercitata solo a mezzo di ricorsi amministrativi ai superiori gerarchici degli organi che hanno emesso gli atti contestati"
    },
    "spiegazioneId": 29
  },
  {
    "id": 30,
    "materia": "Diritto",
    "brano": "",
    "domanda": "I provvedimenti amministrativi sono imperativi, perché:",
    "opzioni": {
      "A": "il giudice amministrativo non può sospenderne gli effetti",
      "B": "l'amministrazione pubblica non può sospenderne gli effetti",
      "C": "producono i loro effetti senza il consenso né dei destinatari né dei controinteressati"
    },
    "spiegazioneId": 30
  },
  {
    "id": 31,
    "materia": "Diritto",
    "brano": "",
    "domanda": "L'interesse legittimo:",
    "opzioni": {
      "A": "si distingue dall'interesse diffuso, perché, a differenza di quest'ultimo, spetta solo a più soggetti costituiti in associazioni o comitati",
      "B": "è la situazione soggettiva contrapposta al potere amministrativo, riconosciuta in capo ai titolari di una posizione qualificata e differenziata rispetto al suo esercizio",
      "C": "è la situazione soggettiva che consente ai titolari di agire in giudizio solo per l'annullamento dei provvedimenti amministrativi che la ledono, ma non anche per ottenere tutela risarcitoria"
    },
    "spiegazioneId": 31
  },
  {
    "id": 32,
    "materia": "Diritto",
    "brano": "",
    "domanda": "Gli incarichi di collaborazione con le amministrazioni pubbliche:",
    "opzioni": {
      "A": "non sono consentiti, perché le amministrazioni pubbliche debbono sempre agire esclusivamente utilizzando le risorse umane disponibili al loro interno, secondo principi di buon andamento, efficienza ed economicità",
      "B": "possono essere assegnati solo per durate determinate a esperti di particolare e comprovata specializzazione, per specifiche esigenze connesse a obiettivi determinati, cui le amministrazioni stesse non possano far fronte con il personale in servizio",
      "C": "sono liberamente assegnabili dai dirigenti, sotto la loro esclusiva responsabilità, anche al di là del quadro dei poteri loro spettanti di organizzazione delle risorse umane, di coordinamento degli uffici e di regolazione dei tempi di lavoro"
    },
    "spiegazioneId": 32
  },
  {
    "id": 33,
    "materia": "Diritto",
    "brano": "",
    "domanda": "La cosiddetta clausola di flessibilità di cui all'art. 352 TFUE riconosce la possibilità di adottare misure anche in assenza di una specifica base giuridica. Tuttavia:",
    "opzioni": {
      "A": "è possibile richiedere che sull'uso della disposizione si pronunci in via preventiva la Corte di giustizia dell'Unione europea",
      "B": "la Commissione europea deve informarne tempestivamente il Parlamento europeo e il Consiglio europeo",
      "C": "non consente di armonizzare le legislazioni nazionali in settori esclusi da tale tecnica legislativa in base ai trattati"
    },
    "spiegazioneId": 33
  },
  {
    "id": 34,
    "materia": "Diritto",
    "brano": "",
    "domanda": "Il principio di proporzionalità di cui all'art. 5, par. 4, TUE delinea:",
    "opzioni": {
      "A": "una forma di concertazione tra Stati membri per assicurare che le deroghe al diritto dell'Unione europea siano attentamente valutate",
      "B": "una modalità di esercizio delle competenze da parte dell'Unione, la cui azione non deve andare oltre quanto strettamente necessario per il conseguimento degli obiettivi fissati nei trattati",
      "C": "un test da applicarsi nel valutare la compatibilità del diritto dell'Unione europea con le prassi nazionali"
    },
    "spiegazioneId": 34
  },
  {
    "id": 35,
    "materia": "Diritto",
    "brano": "",
    "domanda": "Ai sensi dell'art. 263 TFUE risultano impugnabili i seguenti atti:",
    "opzioni": {
      "A": "gli atti vincolanti, definitivi e produttivi di effetti giuridici adottati da istituzioni, organi, organismi e agenzie",
      "B": "le iniziative dei cittadini di cui all'art. 11 TUE",
      "C": "le dichiarazioni del Consiglio europeo"
    },
    "spiegazioneId": 35
  },
  {
    "id": 36,
    "materia": "Economia",
    "brano": "",
    "domanda": "Se l'elasticità della domanda rispetto al prezzo è minore di 1, un aumento del prezzo di un bene normale comporta:",
    "opzioni": {
      "A": "un aumento meno che proporzionale della quantità domandata",
      "B": "una diminuzione meno che proporzionale della quantità domandata",
      "C": "una diminuzione più che proporzionale della quantità domandata"
    },
    "spiegazioneId": 36
  },
  {
    "id": 37,
    "materia": "Economia",
    "brano": "",
    "domanda": "Nel caso in cui il prezzo di un mercato di concorrenza perfetta sia minore di quello di equilibrio si verificherà un eccesso di:",
    "opzioni": {
      "A": "domanda che spingerà i produttori ad aumentare la quantità prodotta allo stesso prezzo",
      "B": "offerta che spingerà i venditori ad offrire il bene a prezzi progressivamente più alti sino al raggiungimento dell'equilibrio",
      "C": "domanda che spingerà i consumatori a domandare il bene a prezzi progressivamente più alti fino al raggiungimento dell'equilibrio"
    },
    "spiegazioneId": 37
  },
  {
    "id": 38,
    "materia": "Economia",
    "brano": "",
    "domanda": "Se un'impresa monopolista riuscisse ad attuare una discriminazione di prezzo perfetta, allora:",
    "opzioni": {
      "A": "verrebbe annullato il surplus del consumatore, ma non la perdita secca",
      "B": "verrebbero annullati sia il surplus del consumatore sia la perdita secca",
      "C": "verrebbe annullata la perdita secca, ma non il surplus del consumatore"
    },
    "spiegazioneId": 38
  },
  {
    "id": 39,
    "materia": "Economia",
    "brano": "",
    "domanda": "Uno shock macroeconomico da domanda è causato da variazioni:",
    "opzioni": {
      "A": "del progresso tecnologico",
      "B": "della propensione marginale al consumo",
      "C": "dei prezzi delle materie prime"
    },
    "spiegazioneId": 39
  },
  {
    "id": 40,
    "materia": "Economia",
    "brano": "",
    "domanda": "Un aumento dell'offerta di moneta provoca:",
    "opzioni": {
      "A": "una traslazione verso il basso a destra della curva LM a causa dell'aumento della struttura dei tassi di interesse",
      "B": "una traslazione verso il basso a destra della curva LM a causa della diminuzione della struttura dei tassi di interesse",
      "C": "una traslazione verso l'alto a sinistra della curva LM a causa della diminuzione della struttura dei tassi di interesse"
    },
    "spiegazioneId": 40
  },
  {
    "id": 41,
    "materia": "Economia",
    "brano": "",
    "domanda": "La BCE effettua operazioni per la gestione giornaliera della liquidità tramite:",
    "opzioni": {
      "A": "operazioni sulla riserva obbligatoria",
      "B": "operazioni di rifinanziamento principale",
      "C": "operazioni di rifinanziamento marginale"
    },
    "spiegazioneId": 41
  },
  {
    "id": 42,
    "materia": "Organizzazione",
    "brano": "",
    "domanda": "Le dimensioni della performance organizzativa sono rappresentate da:",
    "opzioni": {
      "A": "efficienza ed efficacia, impatto",
      "B": "risultati individuali, comportamenti organizzativi",
      "C": "output, tempi"
    },
    "spiegazioneId": 42
  },
  {
    "id": 43,
    "materia": "Economia",
    "brano": "",
    "domanda": "I residui passivi sono l'espressione di:",
    "opzioni": {
      "A": "spese già impegnate e non ancora pagate",
      "B": "crediti già accertati nei confronti di terzi",
      "C": "previsioni di entrate"
    },
    "spiegazioneId": 43
  },
  {
    "id": 44,
    "materia": "Organizzazione",
    "brano": "",
    "domanda": "Tra le teorie più discusse e dibattute in campo manageriale, utili per comprendere le dinamiche di funzionamento delle organizzazioni complesse, quali sono le amministrazioni pubbliche, vi è anche la Teoria della Direzione Amministrativa. Tale approccio teorico è riconducibile, in maniera più diretta, al contributo di",
    "opzioni": {
      "A": "Fayol",
      "B": "Weick",
      "C": "Mayo"
    },
    "spiegazioneId": 44
  },
  {
    "id": 45,
    "materia": "Organizzazione",
    "brano": "",
    "domanda": "Tra le teorie più discusse e dibattute in campo manageriale, utili per comprendere le dinamiche di funzionamento delle organizzazioni complesse, quali sono le amministrazioni pubbliche, vi è anche la Teoria delle Contingenze Strutturali che si distingue, nel panorama delle teorie organizzative, per aver:",
    "opzioni": {
      "A": "messo in evidenza l'importanza delle transazioni economiche come unità di analisi delle organizzazioni",
      "B": "sviluppato i concetti di public service motivation e di isomorfismo organizzativo",
      "C": "messo in evidenza l'importanza di una forma di macro-struttura organizzativa coerente con il contesto esterno"
    },
    "spiegazioneId": 45
  },
  {
    "id": 46,
    "materia": "Organizzazione",
    "brano": "",
    "domanda": "La scala di bisogni divisi in 5 grandi categorie",
    "opzioni": {
      "A": "la difficoltà degli obiettivi non ha nessun effetto sulla intensità della motivazione",
      "B": "l'intensità della motivazione è condizionata anche dalla difficoltà degli obiettivi",
      "C": ""
    },
    "spiegazioneId": 46
  },
  {
    "id": 47,
    "materia": "Organizzazione",
    "brano": "Lo studio e l'analisi delle determinanti del comportamento organizzativo rappresentano elementi essenziali per comprendere, in modo utile, le dinamiche di funzionamento delle organizzazioni complesse, quali sono le amministrazioni pubbliche. In particolare, un passaggio molto importante riguarda lo studio delle relazioni di potere e di influenza. Numerose teorie si sono concentrate su questo tema. In particolare, i contributi di French e Raven vengono studiati e discussi per aver messo in evidenza la presenza delle seguenti forme di potere",
    "domanda": "I contributi di French e Raven hanno messo in evidenza quali forme di potere?",
    "opzioni": {
      "A": "potere di ricompensa, potere coercitivo, potere legittimo",
      "B": "potere spirituale, potere materiale",
      "C": "potere short-term, potere mid-term, potere long-term"
    },
    "spiegazioneId": 47
  },
  {
    "id": 48,
    "materia": "Organizzazione",
    "brano": "Lo studio e l'analisi della microstruttura del lavoro rappresentano elementi essenziali per comprendere, in modo utile, le dinamiche di funzionamento delle organizzazioni complesse, quali sono le amministrazioni pubbliche. In particolare, all'interno di una forma meccanica di micro-struttura del lavoro, un intervento di job enlargement indica un aumento",
    "domanda": "All'interno di una forma meccanica di micro-struttura del lavoro, un intervento di job enlargement indica un aumento di cosa?",
    "opzioni": {
      "A": "del numero di servizi offerti al cittadino",
      "B": "del numero dei compiti attribuiti al titolare della mansione",
      "C": "dell'organico di personale stabilmente in servizio"
    },
    "spiegazioneId": 48
  },
  {
    "id": 49,
    "materia": "Diritto",
    "brano": "",
    "domanda": "Il Piano Triennale per l'informatica nella Pubblica amministrazione è redatto da:",
    "opzioni": {
      "A": "Agenzia per l'Italia Digitale (AgID)",
      "B": "Agenzia per la Cybersicurezza Nazionale (ACN)",
      "C": "Scuola Nazionale dell'Amministrazione (SNA)"
    },
    "spiegazioneId": 49
  },
  {
    "id": 50,
    "materia": "Organizzazione",
    "brano": "",
    "domanda": "I target groups (gruppi destinatari) di una politica pubblica sono definibili come:",
    "opzioni": {
      "A": "coloro ai quali una politica pubblica si rivolge per influenzarne il comportamento",
      "B": "coloro che promuovono una politica pubblica",
      "C": "coloro che beneficiano di una politica pubblica"
    },
    "spiegazioneId": 50
  },
  {
    "id": 51,
    "materia": "Organizzazione",
    "brano": "",
    "domanda": "I problemi maligni o intrattabili di politica pubblica sono definibili come:",
    "opzioni": {
      "A": "problemi la cui soluzione potrebbe presentare rischi per uno specifico gruppo di individui",
      "B": "problemi che i policy makers si rifiutano di affrontare",
      "C": "problemi indefinibili e, di conseguenza, insolubili"
    },
    "spiegazioneId": 51
  },
  {
    "id": 52,
    "materia": "Organizzazione",
    "brano": "",
    "domanda": "L'evidence-based policy analysis definisce un approccio di analisi delle politiche pubbliche fondato su:",
    "opzioni": {
      "A": "costruzione di modelli matematici da parte di singoli studiosi per la simulazione dei processi decisionali",
      "B": "basi informative esplicite, trasparenti e replicabili",
      "C": "una serie di studi ad hoc commissionati a vari centri di ricerca"
    },
    "spiegazioneId": 52
  },
  {
    "id": 53,
    "materia": "Organizzazione",
    "brano": "",
    "domanda": "La valutazione di processo di una politica pubblica consiste:",
    "opzioni": {
      "A": "nell'elaborare uno o più indicatori statistici per misurare l'efficienza di una politica pubblica",
      "B": "nel delineare le teorie causa-effetto alla base dell'intervento pubblico",
      "C": "nel valutare le dinamiche sottostanti la trasformazione di input in output e outcomes per comprendere i meccanismi che si attivano nell'applicazione di una politica pubblica"
    },
    "spiegazioneId": 53
  },
  {
    "id": 54,
    "materia": "Organizzazione",
    "brano": "",
    "domanda": "La valutazione realista è finalizzata a:",
    "opzioni": {
      "A": "produrre una spiegazione causale scientificamente fondata sulla differenza nelle differenze tra gruppi di controllo realisticamente comparabili",
      "B": "produrre una spiegazione plausibile e sufficientemente fondata su quali meccanismi sono stati attivati in determinati contesti",
      "C": "produrre una valutazione realisticamente plausibile alla luce delle evidenze empiriche disponibili basandosi su metodi scientificamente rigorosi"
    },
    "spiegazioneId": 54
  },
  {
    "id": 55,
    "materia": "Inglese",
    "brano": "",
    "domanda": "I'd ______ you didn't smoke when the children are here.",
    "opzioni": {
      "A": "rather",
      "B": "preferred",
      "C": "soon"
    },
    "spiegazioneId": 55
  },
  {
    "id": 56,
    "materia": "Inglese",
    "brano": "",
    "domanda": "Her handwriting was so tiny I struggled to make it ______.",
    "opzioni": {
      "A": "in",
      "B": "out",
      "C": "up"
    },
    "spiegazioneId": 56
  },
  {
    "id": 57,
    "materia": "Inglese",
    "brano": "",
    "domanda": "Maria is a parachute ______.",
    "opzioni": {
      "A": "teacher",
      "B": "instructor",
      "C": "trainer"
    },
    "spiegazioneId": 57
  },
  {
    "id": 58,
    "materia": "Inglese",
    "brano": "",
    "domanda": "______ they had read the report earlier we could have taken appropriate action.",
    "opzioni": {
      "A": "Because",
      "B": "If only",
      "C": "Unless"
    },
    "spiegazioneId": 58
  },
  {
    "id": 59,
    "materia": "Inglese",
    "brano": "",
    "domanda": "The agency's stand at the international fair this year cost €124,843 (______) precisely.",
    "opzioni": {
      "A": "a hundred and twenty-four thousand, eight hundred and forty-three euros",
      "B": "one hundred twenty-four thousand and eight hundred forty-three euros",
      "C": "one hundred and twenty-four thousands, eight hundred forty-three euros"
    },
    "spiegazioneId": 59
  },
  {
    "id": 60,
    "materia": "Inglese",
    "brano": "",
    "domanda": "The international department team were all so busy yesterday they had to ______ lunch.",
    "opzioni": {
      "A": "do without",
      "B": "get over",
      "C": "renounce"
    },
    "spiegazioneId": null
  }
];
