const SPIEGAZIONI = [
  {
    "id": 1,
    "corretta": "A",
    "suggerimento": "C'è un possibile conflitto di interessi: escludere a priori l'amico, scegliere da soli o rendere la scelta trasparente e condivisa con chi ha la competenza sugli acquisti?",
    "spiegazione": "Davanti a un **potenziale conflitto di interessi** la prova premia la **trasparenza**: confronto oggettivo tra più fornitori (amico compreso) e **decisione condivisa** con la funzione competente (acquisti), invece di decidere da soli o escludere qualcuno senza valutarlo.",
    "perOpzione": {
      "A": "Analisi comparativa che include anche l'amico, ma la scelta finale è condivisa con il responsabile acquisti: il conflitto di interessi viene neutralizzato dalla trasparenza e dalla competenza di un'altra funzione.",
      "B": "Rinuncia a priori a un fornitore che sai essere valido: è una scelta difensiva che non valuta il merito e può penalizzare l'azienda; il conflitto si gestisce con trasparenza, non con l'esclusione automatica.",
      "C": "Fa un buon confronto di mercato, ma decide da solo/a e senza coinvolgere la funzione acquisti: manca la condivisione che rende la scelta trasparente e legittima."
    }
  },
  {
    "id": 2,
    "corretta": "B",
    "suggerimento": "Hai un'innovazione che porta valore ai clienti, ma ci sono contratti già firmati: chi deve essere coinvolto per portarla sul campo il prima possibile senza creare problemi?",
    "spiegazione": "Un'innovazione utile al cliente va portata sul campo **in tempi rapidi**, ma **insieme alle funzioni che gestiscono i rapporti contrattuali**. La prova premia chi agisce subito (formazione) e, in parallelo, rinegozia con la funzione commerciale i tempi con i clienti.",
    "perOpzione": {
      "A": "Atteggiamento attendista: delega alla funzione commerciale la scelta del momento e non avvia la formazione. Il valore dell'innovazione resta sulla carta.",
      "B": "Avvia subito la formazione e lavora con la funzione commerciale sui contratti, comunicando i vantaggi per i clienti: unisce iniziativa e collaborazione interfunzionale.",
      "C": "Avvia la formazione, ma si limita a guardare il calendario: non coinvolge chi gestisce i contratti e i clienti, quindi l'introduzione resta parziale e non concordata."
    }
  },
  {
    "id": 3,
    "corretta": "C",
    "suggerimento": "Il nuovo vertice chiede innovazione e il processo attuale è lento: conviene difendere lo status quo, esplorare da soli o ripensare il processo con chi lo fa ogni giorno?",
    "spiegazione": "In un contesto di **cambiamento organizzativo** la prova premia chi **accoglie la spinta all'innovazione** e la traduce in un progetto concreto, **coinvolgendo il team** che conosce il processo: così si migliora l'efficienza senza perdere la qualità.",
    "perOpzione": {
      "A": "Resistenza al cambiamento: difende il metodo attuale nonostante sia dispendioso in tempo e ignora la richiesta esplicita del nuovo direttivo.",
      "B": "Riconosce il bisogno di migliorare, ma si limita a un'esplorazione solitaria di strumenti, senza ripensare il processo né coinvolgere i collaboratori.",
      "C": "Ripensa l'intero processo insieme al team e introduce le tecnologie disponibili: risponde alla richiesta del vertice e valorizza l'esperienza di chi garantisce la qualità."
    }
  },
  {
    "id": 4,
    "corretta": "C",
    "suggerimento": "Il problema sono i margini, non le vendite: conviene rinunciare alla scelta sostenibile, delegarne la soluzione all'esterno o lavorare su più leve al tempo stesso?",
    "spiegazione": "La prova premia chi affronta un calo di marginalità **agendo direttamente su più leve** (efficienza dei processi e uso intelligente dei materiali) **senza rinunciare alle scelte strategiche** già fatte, come la sostenibilità.",
    "perOpzione": {
      "A": "Lavora sull'efficienza, ma affida l'analisi a una società esterna invece di dare il proprio contributo diretto, ed è passiva sul fronte dei materiali.",
      "B": "Torna indietro sulla scelta dei materiali riciclati e cerca dati per confermare una decisione già presa: approccio poco aperto e contrario all'innovazione.",
      "C": "Agisce su due fronti, efficienza del processo e nuovi impieghi dei materiali riciclati: riduce i costi mantenendo la direzione strategica dell'azienda."
    }
  },
  {
    "id": 5,
    "corretta": "C",
    "suggerimento": "Tre richieste insieme: quali puoi affidare al team e quale richiede proprio te, perché solo tu hai le informazioni?",
    "spiegazione": "Gestire più urgenze significa **delegare** ciò che il team può fare e **occuparsi in prima persona** di ciò che solo tu puoi fare. Qui solo il/la responsabile conosce la pratica di recupero crediti, mentre ordine e bozza del piano possono essere affidati ai collaboratori, così tutte e tre le richieste avanzano subito.",
    "perOpzione": {
      "A": "Si concentra su una sola richiesta e lascia indietro le altre due: nessuna delega, uso inefficiente del team.",
      "B": "Delega solo il problema dell'ordine e tiene per sé anche il piano commerciale, che il team potrebbe impostare: il carico resta concentrato e i tempi si allungano.",
      "C": "Delega ai collaboratori ordine e bozza del piano e fornisce direttamente le informazioni che possiede solo lui/lei: tutte e tre le richieste vengono gestite in parallelo."
    }
  },
  {
    "id": 6,
    "corretta": "C",
    "suggerimento": "Molte attività delicate e un bisogno di supporto già noto: serve un piano complessivo o basta concentrarsi su una parte del lavoro?",
    "spiegazione": "Con molte attività urgenti la prova premia una **pianificazione complessiva** (scadenze, urgenze, priorità) e un **coinvolgimento ampio del team**, anche nella gestione degli interlocutori, invece di lavorare in modo isolato o reattivo.",
    "perOpzione": {
      "A": "Pianifica solo le attività principali e chiede a un solo collaboratore un aiuto limitato all'operatività, mentre il caso richiede supporto anche nella gestione degli interlocutori.",
      "B": "Lavora in solitudine e alla giornata, rincorrendo le urgenze: rischia di non chiudere in tempo attività delicate.",
      "C": "Ripianifica tutto per scadenze e priorità e distribuisce il lavoro tra più collaboratori: visione d'insieme e delega coerente con il bisogno."
    }
  },
  {
    "id": 7,
    "corretta": "C",
    "suggerimento": "Incidenti in aumento in più reparti: basta un richiamo, conviene aspettare altri dati, o va attivata un'azione strutturata sul sistema qualità?",
    "spiegazione": "Quando aumentano errori e **incidenti** (che toccano anche la sicurezza) il responsabile qualità deve **intervenire subito in modo strutturato**: rivedere gli standard e verificarne l'applicazione. Aspettare o limitarsi a un richiamo non affronta le cause.",
    "perOpzione": {
      "A": "Un semplice richiamo all'attenzione scarica il problema sulle persone, senza indagare se gli standard siano ancora adeguati.",
      "B": "Attendere altri due mesi, con incidenti in corso, è un rischio non accettabile per la sicurezza e per la responsabilità dell'azienda.",
      "C": "Attiva subito una squadra che rivede gli standard e ne controlla l'applicazione coerente: risposta strutturata e tempestiva, propria del ruolo di responsabile qualità."
    }
  },
  {
    "id": 8,
    "corretta": "C",
    "suggerimento": "Prima di rispondere pubblicamente o di liquidare la notizia, cosa ti serve sapere su quel 18%?",
    "spiegazione": "Davanti a una notizia che riguarda l'organizzazione la prova premia chi **verifica i fatti prima di reagire**: analisi interna dei dati e richiesta della **metodologia** usata dal giornale. Solo dopo si decide se e come comunicare.",
    "perOpzione": {
      "A": "Reagisce pubblicamente e coinvolge il Direttore Generale in un'intervista prima di sapere se i dati sono corretti: rischia di amplificare la notizia.",
      "B": "Minimizza e ignora il problema senza verificarlo: il dato potrebbe essere vero e la preoccupazione del vertice resta senza risposta.",
      "C": "Analizza i dati con il team e chiede al giornale come ha calcolato gli indici: decisione basata sui fatti, prima di qualunque presa di posizione."
    }
  },
  {
    "id": 9,
    "corretta": "B",
    "suggerimento": "Il collaboratore è nuovo, insicuro e rende poco: in questa fase ha più bisogno di autonomia o di indicazioni chiare?",
    "spiegazione": "È la logica della **leadership situazionale**: lo stile va adattato alla maturità del collaboratore. Con una persona **nuova e insicura** serve uno stile **direttivo**: obiettivi chiari, istruzioni su come raggiungerli e verifica. L'autonomia si concede quando competenza e sicurezza crescono.",
    "perOpzione": {
      "A": "Lasciare solo un collaboratore insicuro e poco efficace aumenta il disorientamento e rinvia il problema.",
      "B": "Stile direttivo: chiarisce obiettivi e modalità e verifica l'applicazione. È ciò di cui ha bisogno una persona nuova che non ha ancora un metodo.",
      "C": "Condividere gli obiettivi è utile, ma lasciargli poi piena autonomia sul come è prematuro: è proprio sul metodo che il collaboratore è in difficoltà."
    }
  },
  {
    "id": 10,
    "corretta": "A",
    "suggerimento": "La persona è esperta e di solito autonoma: ha bisogno che tu faccia al posto suo o che tu la aiuti a trovare la soluzione da sé?",
    "spiegazione": "Con un collaboratore **esperto** in difficoltà su un compito nuovo la prova premia lo stile di **coaching/supporto**: incoraggiarlo, orientarlo e mettere a disposizione la propria esperienza, **senza sostituirsi** a lui. Così si risolve il problema e si preserva l'autonomia.",
    "perOpzione": {
      "A": "Incoraggia, orienta e offre la propria esperienza lasciando alla persona la responsabilità della soluzione: valorizza l'autonomia di un collaboratore affidabile.",
      "B": "Si sostituisce al collaboratore: risolve forse prima, ma ne mina la fiducia e l'autonomia e non lo aiuta a crescere nel nuovo ruolo.",
      "C": "Aiuta anche sul piano operativo, cioè in parte fa al posto suo: per una persona esperta è un supporto troppo invasivo rispetto all'orientamento."
    }
  },
  {
    "id": 11,
    "corretta": "C",
    "suggerimento": "Il conflitto è tra due team: con chi conviene parlare, e con quali informazioni in mano?",
    "spiegazione": "Nei **conflitti tra funzioni** la prova premia chi prima **raccoglie i fatti** dal proprio team e poi si confronta **alla pari con il collega responsabile**, cercando una soluzione comune. Scavalcare la linea gerarchica altrui o usare minacce peggiora il clima.",
    "perOpzione": {
      "A": "Scavalca il collega e affronta direttamente un suo collaboratore: invade il ruolo del pari grado e rischia di inasprire il conflitto.",
      "B": "Parla con il collega giusto, ma con un tono di avvertimento («interverrò direttamente») che crea contrapposizione invece di collaborazione.",
      "C": "Raccoglie prima i problemi concreti, poi coinvolge il collega pari grado chiedendo una soluzione condivisa: approccio fattuale e collaborativo."
    }
  },
  {
    "id": 12,
    "corretta": "A",
    "suggerimento": "Il collega tende a defilarsi: lo convinci di più mettendolo sotto pressione o rendendogli facile e rispettoso il modo di aiutarti?",
    "spiegazione": "Con un collega poco collaborativo la prova premia un approccio **diretto ma rispettoso**: preavviso, contatto personale breve, richiesta chiara su contenuti e tempi, e **libertà per lui di decidere come contribuire**. Escalation e scavalcamenti aumentano la resistenza.",
    "perOpzione": {
      "A": "Preavviso via email e telefonata personale, con richiesta chiara e scelta lasciata al collega su come supportare: abbassa le difese e lo responsabilizza.",
      "B": "Mettere in copia il suo staff senza accordo significa scavalcarlo nella gestione delle sue persone: con un collega già restio rischia di irrigidirlo.",
      "C": "Coinvolgere l'amministratore delegato e richiamare il collega all'«esigenza aziendale» è un'escalation che suona come pressione: peggiora la relazione invece di costruire collaborazione."
    }
  },
  {
    "id": 13,
    "corretta": "C",
    "suggerimento": "Ricostruisci la sequenza delle applicazioni descritta nel brano: dove si comincia e dove si arriva?",
    "spiegazione": "Il brano descrive una **progressione**: tipografia di Brooklyn (1902), industria tessile, uffici pubblici e privati e, solo nel secondo dopoguerra, abitazioni e automobili. Attenzione alle risposte che **generalizzano un singolo dato** («prevalentemente», «soprattutto»).",
    "perOpzione": {
      "A": "Il brano cita un solo condizionatore in una tipografia di Brooklyn: non dice che i primi impianti fossero «prevalentemente» nelle tipografie di New York.",
      "B": "Gli uffici sono citati insieme a quelli delle aziende pubbliche e dopo l'industria tessile: «soprattutto nelle aziende private» non trova riscontro.",
      "C": "Riassume correttamente la sequenza: prima luoghi di lavoro (tipografia, industria, uffici), poi, nel dopoguerra, abitazioni private."
    }
  },
  {
    "id": 14,
    "corretta": "C",
    "suggerimento": "Verifica ogni affermazione parola per parola: quali gas usavano e quanto era pericolosa la rottura dei compressori?",
    "spiegazione": "Quando c'è l'opzione «tutte le altre sono false», bisogna **smentire puntualmente** ciascuna delle altre. Qui il brano parla di **clorometano e ammoniaca** e di rotture «molto pericolose **se non fatali**».",
    "perOpzione": {
      "A": "Falsa: il brano indica due gas, clorometano **e** ammoniaca; «esclusivamente» è smentito.",
      "B": "Falsa: il brano dice che la rottura poteva essere «molto pericolosa se non fatale», quindi anche mortale.",
      "C": "Corretta: entrambe le altre affermazioni contraddicono il testo."
    }
  },
  {
    "id": 15,
    "corretta": "B",
    "suggerimento": "Cerca nel brano cosa si dice dei gas usati dopo il 1928: c'è qualcosa sull'efficienza energetica?",
    "spiegazione": "Va scelta la risposta **ricavabile dal testo**: dal 1928 si usano i freon, che il brano definisce «**innocui per l'uomo**» (pur dannosi per l'ozono). Dell'efficienza energetica il brano non parla, quindi non si può affermare.",
    "perOpzione": {
      "A": "Non può essere vera, perché l'affermazione sull'efficienza energetica non trova alcun riscontro nel brano.",
      "B": "È l'unica deducibile: i gas adottati dal 1928 sono descritti come innocui per l'uomo, a differenza di clorometano e ammoniaca.",
      "C": "Può sembrare plausibile per conoscenza generale, ma il brano non parla mai di consumi o efficienza energetica."
    },
    "nota": "Il brano parla dei freon adottati dal 1928, non espressamente dei condizionatori «di oggi» (nella realtà i CFC sono stati poi messi al bando per i danni all'ozono). La chiave ufficiale va letta come l'unica opzione ricavabile dal testo."
  },
  {
    "id": 16,
    "corretta": "A",
    "suggerimento": "Le due affermazioni specifiche sono compatibili tra loro? Se la pianta muore dopo aver fiorito, quante volte può fiorire?",
    "spiegazione": "Le piante descritte, dopo la fioritura sincrona, **muoiono tutte all'istante**; la generazione successiva nasce dai semi. Ne segue che ogni pianta **fiorisce una sola volta** nella vita: entrambe le affermazioni sono vere.",
    "perOpzione": {
      "A": "Corretta: sono vere sia la morte dopo la fioritura sia la fioritura unica, che ne è la conseguenza.",
      "B": "Vera («morirono tutte all'istante»), ma non è l'unica affermazione corretta: anche l'altra è deducibile dal testo.",
      "C": "Vera: se la pianta muore dopo la fioritura, sboccia una sola volta. Ma non è l'unica affermazione corretta."
    }
  },
  {
    "id": 17,
    "corretta": "B",
    "suggerimento": "Rileggi la prima frase del brano: dove ha origine la specie e dove è stata introdotta?",
    "spiegazione": "Il brano dice che la specie è «**originaria della Cina** ma **introdotta in Giappone**»: quindi non è originaria del Giappone. Attenzione alle informazioni sull'altezza, che il testo esprime come possibilità massima.",
    "perOpzione": {
      "A": "Falsa: la specie è originaria della Cina; in Giappone è stata importata in seguito.",
      "B": "Corretta: «originaria della Cina ma introdotta in Giappone».",
      "C": "Il brano dice che le piante «possono crescere fino a oltre venti metri»: nulla autorizza a dire che solitamente restino sotto quella misura."
    }
  },
  {
    "id": 18,
    "corretta": "A",
    "suggerimento": "Che cosa, secondo l'ipotesi di Janzen, rende vantaggiosa la fioritura contemporanea?",
    "spiegazione": "Secondo Janzen la fioritura sincrona produce un'**enorme quantità di semi**: alcuni restano intatti anche se i predatori si rimpinzano, e così la specie sopravvive (strategia di «saturazione dei predatori»). Attenzione a non confondere **polline** e **semi**.",
    "perOpzione": {
      "A": "Corretta: la quantità enorme di semi fa sì che alcuni restino intatti nonostante i predatori.",
      "B": "Il vento nel brano trasporta il **polline**, non i semi; e le migliaia di chilometri sono la distanza tra le foreste, non quella percorsa dai semi.",
      "C": "È l'opposto di quanto afferma il brano: alcuni semi «rimarrebbero intatti» anche con predatori sazi."
    }
  },
  {
    "id": 19,
    "corretta": "B",
    "suggerimento": "Scomponi ogni composizione nelle sue figure elementari e contale per tipo: cerchi, triangoli, rettangoli.",
    "spiegazione": "Ogni composizione è formata da **un cerchio, un triangolo e cinque rettangoli**, disposti in modo diverso. L'unica che ha **solo quattro rettangoli** è la 5, che va scartata.",
    "perOpzione": {
      "A": "La figura 1 ha un cerchio, un triangolo e cinque rettangoli (due sovrapposti a sinistra, uno orizzontale in alto, due verticali): rispetta la regola.",
      "B": "La figura 5 ha un cerchio, un triangolo ma solo quattro rettangoli: è l'unica che non rispetta la composizione comune, quindi va scartata.",
      "C": "La figura 2 ha un cerchio, un triangolo e cinque rettangoli: rispetta la regola."
    }
  },
  {
    "id": 20,
    "corretta": "B",
    "suggerimento": "Prova a cercare, per ogni figura, un'altra figura con la stessa struttura ma con i colori invertiti.",
    "spiegazione": "Le figure vanno **a coppie in negativo**: la 1 e la 4 hanno la stessa struttura (cerchio, rombo, rettangolo) con bianco e grigio invertiti; lo stesso vale per la 2 e la 5 (triangolo e cerchio). La **3** non ha la sua controparte a colori invertiti: è quella da scartare.",
    "perOpzione": {
      "A": "La figura 4 è il «negativo» della figura 1 (stessa struttura, bianco e grigio scambiati): fa parte di una coppia.",
      "B": "La figura 3 (cerchio interno grigio dentro il rombo) è l'unica senza una figura gemella a colori invertiti: va scartata.",
      "C": "La figura 5 è il «negativo» della figura 2 (triangolo e cerchio con colori scambiati): fa parte di una coppia."
    }
  },
  {
    "id": 21,
    "corretta": "C",
    "suggerimento": "Segui un simbolo d'angolo da una casella all'altra: dove si sposta e come cambia il suo orientamento? Guarda anche il simbolo centrale.",
    "spiegazione": "A ogni passo l'intera figura **ruota di 90° in senso antiorario**: i simboli d'angolo si spostano di un angolo e le punte dei triangoli ruotano di conseguenza, mantenendo il colore. Il simbolo centrale **alterna** cerchio tratteggiato e stella grigia. Al quarto posto servono quadrato grigio in alto a sinistra, triangolo grigio verso destra in alto a destra, triangolo bianco verso l'alto in basso a sinistra, cerchio bianco in basso a destra e **stella grigia** al centro.",
    "perOpzione": {
      "A": "La figura 1 ripete la disposizione della prima casella ma con i colori di cerchio e quadrato scambiati: non deriva dalla rotazione.",
      "B": "La figura 3 ha una disposizione dei simboli non coerente con la rotazione antioraria della terza casella e il cerchio tratteggiato al centro, mentre serve la stella grigia.",
      "C": "La figura 2 è esattamente la terza casella ruotata di 90° in senso antiorario, con la stella grigia al centro come richiede l'alternanza."
    }
  },
  {
    "id": 22,
    "corretta": "C",
    "suggerimento": "Chiediti per ogni coppia: esiste qualcuno che appartiene a entrambi gli insiemi? Una donna nubile può essere anche un uomo celibe?",
    "spiegazione": "**Nubili** (donne non sposate) e **celibi** (uomini non sposati) sono insiemi **disgiunti**. Gli **psicologi** possono essere nubili o celibi, ma non tutti lo sono e non tutti i nubili/celibi sono psicologi: l'insieme degli psicologi **interseca entrambi**. È il diagramma con un grande insieme che si sovrappone a due insiemi separati tra loro.",
    "perOpzione": {
      "A": "Il diagramma 3 mostra un insieme contenuto in un altro e un terzo separato: implicherebbe, ad esempio, che tutti i nubili siano psicologi.",
      "B": "Il diagramma 5 mostra tre insiemi uno dentro l'altro: impossibile, perché nubili e celibi non hanno elementi in comune.",
      "C": "Il diagramma 1 ha due insiemi separati (nubili e celibi) entrambi parzialmente sovrapposti a un terzo (psicologi): rappresenta esattamente la relazione."
    }
  },
  {
    "id": 23,
    "corretta": "C",
    "suggerimento": "Conta in ogni riquadro le punte della stella e i pallini: che rapporto c'è tra i due numeri?",
    "spiegazione": "In ogni riquadro il numero dei **pallini è uguale al numero delle punte della stella meno uno**: 7 punte e 6 pallini, 5 e 4, 6 e 5, 4 e 3. Nella figura 5 la stella ha **8 punte** ma i pallini sono 6: è quella da scartare. Il pallino nero della figura 3 è solo un distrattore.",
    "perOpzione": {
      "A": "La figura 4 ha una stella a 4 punte e 3 pallini: rispetta la regola.",
      "B": "La figura 1 ha una stella a 7 punte e 6 pallini: rispetta la regola.",
      "C": "La figura 5 ha una stella a 8 punte ma solo 6 pallini (ne servirebbero 7): è l'unica che non rispetta la regola."
    }
  },
  {
    "id": 24,
    "corretta": "A",
    "suggerimento": "Nelle righe 1 e 2 confronta la terza figura con le prime due: quali elementi restano e quali spariscono?",
    "spiegazione": "In ogni riga la terza figura contiene **solo gli elementi non comuni** alle prime due (differenza simmetrica): ciò che compare in entrambe si elimina. Riga 1: il rombo si elimina, restano ovale e pentagono. Riga 2: la barra grigia si elimina, resta il rettangolo con le bande. Riga 3: ellisse esterna e pallino grigio sono comuni e si eliminano, restano **il quadrato e il cerchio**.",
    "perOpzione": {
      "A": "La E (quadrato con cerchio inscritto) contiene esattamente gli elementi non comuni alle prime due figure: quadrato e cerchio interno.",
      "B": "La C coincide con la prima figura della riga: conserva ellisse e pallino grigio, che sono comuni e dovrebbero sparire.",
      "C": "La B conserva l'ellisse esterna (comune alle due figure) e perde il cerchio interno, che invece dovrebbe restare."
    }
  },
  {
    "id": 25,
    "corretta": "A",
    "suggerimento": "Chi stabilisce la riserva e a favore di quale fonte? Ricorda che la riserva serve a limitare l'intervento delle fonti secondarie.",
    "spiegazione": "La **riserva di legge** è posta dalla **Costituzione**, che riserva alla legge (o agli atti con forza di legge) la disciplina di certe materie. È **assoluta** quando l'intera disciplina deve stare nella legge, senza spazio per regolamenti se non meramente esecutivi (es. art. 13 Cost. sulla libertà personale); è **relativa** quando la legge fissa solo i principi.",
    "perOpzione": {
      "A": "Corretta: è la Costituzione a riservare in esclusiva alla legge la disciplina di determinate materie.",
      "B": "Rovescia il concetto: la riserva di legge serve proprio a impedire che la materia sia disciplinata da fonti subordinate.",
      "C": "Descrive la **riserva di giurisdizione** (art. 13 Cost., atto motivato dell'autorità giudiziaria), che è un istituto diverso dalla riserva di legge."
    },
    "riferimenti": [
      {
        "normaId": "cost_art_13"
      }
    ]
  },
  {
    "id": 26,
    "corretta": "A",
    "suggerimento": "Pensa all'art. 90 Cost.: quali sono i due reati presidenziali, chi decide l'accusa e con quale maggioranza?",
    "spiegazione": "Per l'**art. 90 Cost.** il Presidente della Repubblica non è responsabile degli atti compiuti nell'esercizio delle funzioni, tranne che per **alto tradimento** o **attentato alla Costituzione**. In tali casi è messo in stato di accusa dal **Parlamento in seduta comune**, a **maggioranza assoluta** dei suoi membri; giudica la Corte costituzionale (art. 134 Cost.).",
    "perOpzione": {
      "A": "Corretta: riproduce l'art. 90 Cost. (due reati, Parlamento in seduta comune, maggioranza assoluta).",
      "B": "Il Governo non ha alcun potere di accusa nei confronti del Capo dello Stato, e i reati previsti sono due, non uno.",
      "C": "La maggioranza richiesta è assoluta, non relativa: si richiede una garanzia rafforzata per un atto così grave."
    },
    "riferimenti": [
      {
        "normaId": "cost_art_90"
      },
      {
        "normaId": "cost_art_134"
      }
    ]
  },
  {
    "id": 27,
    "corretta": "B",
    "suggerimento": "Leggi con attenzione i dettagli sull'intervallo tra le deliberazioni: è «minore» o «non minore» di tre mesi?",
    "spiegazione": "L'**art. 138 Cost.** prevede un **procedimento aggravato** svolto dalle **due Camere**: doppia deliberazione con intervallo **non minore di tre mesi**, maggioranza assoluta nella seconda votazione ed eventuale referendum (escluso se nella seconda votazione si raggiungono i due terzi). La nostra Costituzione è perciò **rigida**.",
    "perOpzione": {
      "A": "Contiene un errore decisivo: l'intervallo tra le due deliberazioni deve essere **non minore** di tre mesi, non minore.",
      "B": "Corretta: la revisione è affidata alle stesse Camere ma con un procedimento più gravoso di quello ordinario.",
      "C": "L'ordinamento italiano non prevede un'assemblea costituente o un organo ad hoc per la revisione: provvedono le Camere."
    },
    "riferimenti": [
      {
        "normaId": "cost_art_138"
      }
    ]
  },
  {
    "id": 28,
    "corretta": "B",
    "suggerimento": "Il preavviso di rigetto è un momento di partecipazione dentro il procedimento, non ancora una fase di impugnazione. Ricordi il termine dell'art. 10-bis?",
    "spiegazione": "Per l'**art. 10-bis della L. 241/1990**, nei procedimenti a istanza di parte, prima di adottare un provvedimento negativo l'amministrazione comunica i motivi ostativi; l'istante ha **10 giorni** dal ricevimento per presentare **per iscritto osservazioni**, eventualmente con documenti.",
    "perOpzione": {
      "A": "Il termine indicato dalla legge è di 10 giorni, non di 20.",
      "B": "Corretta: 10 giorni per osservazioni scritte (art. 10-bis L. 241/1990).",
      "C": "Il preavviso non è un provvedimento definitivo da impugnare: i 60 giorni riguardano il ricorso al giudice amministrativo contro il provvedimento finale."
    },
    "riferimenti": [
      {
        "normaId": "l241_1990_art_10_bis"
      }
    ]
  },
  {
    "id": 29,
    "corretta": "B",
    "suggerimento": "L'incompetenza assoluta corrisponde a un vizio di annullabilità o a qualcosa di più grave? Cosa comporta per la possibilità di sanarlo?",
    "spiegazione": "L'**incompetenza assoluta** (atto adottato da un'amministrazione del tutto priva di potere in materia) corrisponde al **difetto assoluto di attribuzione**, causa di **nullità** ai sensi dell'**art. 21-septies L. 241/1990**. Un atto nullo **non è sanabile**: la ratifica è ammessa solo per l'**incompetenza relativa**, che rende l'atto annullabile.",
    "perOpzione": {
      "A": "La ratifica (convalida da parte dell'organo competente) vale per l'incompetenza relativa, non per quella assoluta.",
      "B": "Corretta: l'atto viziato da incompetenza assoluta è nullo e non può essere sanato né con ratifica né con rettifica.",
      "C": "Anche la rettifica presuppone un atto valido o annullabile da correggere; un atto nullo non è recuperabile."
    },
    "riferimenti": [
      {
        "normaId": "l241_1990_art_21_septies"
      }
    ]
  },
  {
    "id": 30,
    "corretta": "B",
    "suggerimento": "I provvedimenti limitativi sono atti recettizi, ma esiste un'eccezione legata all'urgenza: quale?",
    "spiegazione": "Per l'**art. 21-bis L. 241/1990** il provvedimento limitativo della sfera giuridica dei privati acquista efficacia con la **comunicazione** al destinatario; tuttavia i provvedimenti a **carattere cautelare ed urgente** sono **immediatamente efficaci**.",
    "perOpzione": {
      "A": "La regola della comunicazione ha un'eccezione espressa proprio per i provvedimenti cautelari e urgenti: «sempre» è errato.",
      "B": "Corretta: è l'eccezione prevista dall'art. 21-bis per i provvedimenti cautelari e urgenti.",
      "C": "Non esiste una regola generale di efficacia differita di 15 giorni dalla pubblicazione: l'efficacia dipende dalla comunicazione."
    },
    "riferimenti": [
      {
        "normaId": "l241_1990_art_21_bis"
      }
    ]
  },
  {
    "id": 31,
    "corretta": "C",
    "suggerimento": "Distingui gli enti a fini generali (come i Comuni) dagli enti strumentali che perseguono fini specifici sotto il controllo di un ente di riferimento.",
    "spiegazione": "Gli **enti pubblici non economici** (es. INPS, INAIL, ACI) perseguono **fini settoriali** di interesse pubblico, con poteri pubblicistici, e sono sottoposti alla **vigilanza e all'indirizzo** dello Stato (ministeri) o delle Regioni. Sono diversi dagli **enti territoriali**, a fini generali, e dagli **enti pubblici economici**, che operano sul mercato.",
    "perOpzione": {
      "A": "La vocazione generale è propria degli enti territoriali (Stato, Regioni, Comuni), non degli enti non economici, che hanno fini specifici.",
      "B": "Operare sul mercato con attività d'impresa caratterizza gli enti pubblici economici, non quelli non economici.",
      "C": "Corretta: sono enti strumentali soggetti a poteri di vigilanza e di indirizzo dell'amministrazione di riferimento."
    }
  },
  {
    "id": 32,
    "corretta": "A",
    "suggerimento": "Pensa al ricorso straordinario al Presidente della Repubblica: chi decide di fatto la controversia e su quali vizi?",
    "spiegazione": "Il **ricorso straordinario al Presidente della Repubblica** (D.P.R. 1199/1971) si propone entro 120 giorni **solo per motivi di legittimità**. Il Consiglio di Stato rende un **parere vincolante** (dopo la riforma della L. 69/2009), che il decreto presidenziale recepisce: per questo oggi è considerato un rimedio di natura sostanzialmente giurisdizionale.",
    "perOpzione": {
      "A": "Corretta: il parere del Consiglio di Stato è vincolante e determina il contenuto della decisione.",
      "B": "Il ricorso straordinario è ammesso solo per motivi di legittimità; il merito è escluso.",
      "C": "Il contraddittorio è essenzialmente scritto (deduzioni e documenti), non orale: non c'è una discussione orale tra le parti come nel processo."
    }
  },
  {
    "id": 33,
    "corretta": "A",
    "suggerimento": "La difesa tocca il cuore della sovranità degli Stati: quale regola di voto ti aspetti, e quale istituzione formata dai ministri decide?",
    "spiegazione": "L'**art. 42, par. 4, TUE** stabilisce che le decisioni sulla **PSDC** sono adottate dal **Consiglio** che delibera **all'unanimità**, su proposta dell'**Alto rappresentante** o su iniziativa di uno Stato membro. L'unanimità riflette la natura intergovernativa della materia.",
    "perOpzione": {
      "A": "Corretta: Consiglio, unanimità, proposta dell'Alto rappresentante o iniziativa di uno Stato membro.",
      "B": "Inverte i ruoli: l'Alto rappresentante propone, non decide.",
      "C": "Non è il Consiglio europeo a deliberare e la regola non è la maggioranza: in materia di difesa vale l'unanimità."
    },
    "riferimenti": [
      {
        "normaId": "tue_art_42"
      }
    ]
  },
  {
    "id": 34,
    "corretta": "B",
    "suggerimento": "Diffida delle opzioni con «esclusivamente»: il rinvio pregiudiziale riguarda sia i trattati sia gli atti derivati?",
    "spiegazione": "Il **rinvio pregiudiziale** (**art. 267 TFUE**) consente alla Corte di giustizia di pronunciarsi a) **sull'interpretazione dei trattati** e b) **sulla validità e l'interpretazione degli atti** compiuti dalle istituzioni, dagli organi o dagli organismi dell'Unione. Il giudice di ultima istanza è, di regola, obbligato al rinvio.",
    "perOpzione": {
      "A": "Incompleta: esclude l'interpretazione dei trattati, che è invece una parte essenziale del rinvio.",
      "B": "Corretta: riproduce il contenuto dell'art. 267 TFUE.",
      "C": "Incompleta: esclude gli atti di diritto derivato (validità e interpretazione)."
    },
    "riferimenti": [
      {
        "normaId": "tfue_art_267"
      }
    ]
  },
  {
    "id": 35,
    "corretta": "C",
    "suggerimento": "La coesione economica, sociale e territoriale è una competenza esclusiva, concorrente o di sostegno? E cosa comporta quel tipo di competenza?",
    "spiegazione": "La **coesione economica, sociale e territoriale** rientra tra le **competenze concorrenti** (**art. 4, par. 2, lett. c), TFUE**). Per l'**art. 2, par. 2, TFUE**, nelle materie concorrenti gli Stati membri esercitano la loro competenza **nella misura in cui l'Unione non ha esercitato la propria** (effetto di preclusione).",
    "perOpzione": {
      "A": "Descrive le competenze di **sostegno, coordinamento e completamento** (art. 6 TFUE: salute, cultura, turismo ecc.), non la coesione.",
      "B": "Descrive le competenze «parallele» di ricerca, sviluppo tecnologico e spazio (art. 4, par. 3, TFUE), dove l'azione UE non impedisce quella nazionale.",
      "C": "Corretta: è la regola delle competenze concorrenti dell'art. 2, par. 2, TFUE, che si applica alla coesione."
    },
    "riferimenti": [
      {
        "normaId": "tfue_art_4"
      },
      {
        "normaId": "tfue_art_2"
      },
      {
        "normaId": "tfue_art_6"
      }
    ]
  },
  {
    "id": 36,
    "corretta": "C",
    "suggerimento": "Pensa a come si misura: si parte dalla crescita del prodotto e si tolgono i contributi di lavoro e capitale. Cosa resta?",
    "spiegazione": "La **produttività totale dei fattori (PTF)** è il cosiddetto **residuo di Solow**: la parte della crescita del prodotto **non spiegata** dall'aumento degli input di lavoro e capitale. Riflette progresso tecnico, organizzazione, qualità istituzionale ed efficienza.",
    "perOpzione": {
      "A": "La PTF non è la produttività di specifiche tecnologie, ma una misura residuale dell'efficienza complessiva.",
      "B": "Le dotazioni tecnologiche sono un input (capitale) o un possibile fattore della PTF, non la sua definizione.",
      "C": "Corretta: è la definizione di residuo di Solow."
    }
  },
  {
    "id": 37,
    "corretta": "C",
    "suggerimento": "Per un bene normale, se il prezzo sale la quantità domandata sale o scende? Controlla che direzione del prezzo e della quantità siano coerenti.",
    "spiegazione": "L'**elasticità della domanda al prezzo** è il rapporto tra la **variazione percentuale della quantità domandata** e la **variazione percentuale del prezzo**. Per un bene normale la domanda è inclinata negativamente: se il prezzo **aumenta**, la quantità **diminuisce**.",
    "perOpzione": {
      "A": "Con domanda decrescente, un aumento del prezzo riduce (non aumenta) la quantità domandata.",
      "B": "Se il prezzo si riduce, la quantità domandata aumenta, non si riduce: le direzioni sono incoerenti.",
      "C": "Corretta: misura di quanto, in percentuale, cala la quantità domandata a fronte di un aumento del prezzo."
    }
  },
  {
    "id": 38,
    "corretta": "C",
    "suggerimento": "Guarda prima la definizione di saldo complessivo: deve considerare in modo omogeneo entrate e spese, sia correnti sia in conto capitale.",
    "spiegazione": "Il **saldo complessivo** (indebitamento o accreditamento netto) è la **somma algebrica** del saldo di **parte corrente** e di quello **in conto capitale**. Il **saldo primario** è lo stesso saldo calcolato **al netto della spesa per interessi**, cioè escludendo gli interessi dal computo.",
    "perOpzione": {
      "A": "Somma un saldo (parte corrente) con un solo flusso (entrate in conto capitale), ignorando le spese in conto capitale: definizione scorretta.",
      "B": "Mette insieme spese correnti ed entrate in conto capitale, due grandezze non omogenee: non è un saldo di bilancio.",
      "C": "È l'unica con la definizione corretta del saldo complessivo; il saldo primario è inteso come saldo al netto degli interessi."
    },
    "nota": "A rigore, se il saldo è calcolato come entrate meno spese, il saldo primario è pari al saldo complessivo PIÙ la spesa per interessi (si toglie dalle spese la voce interessi). La chiave ufficiale è comunque l'unica con la definizione corretta di saldo complessivo; la formula «meno la spesa per interessi» va letta come «al netto della spesa per interessi»."
  },
  {
    "id": 39,
    "corretta": "C",
    "suggerimento": "Segui la catena del modello Mundell-Fleming: la banca centrale espande la moneta, il tasso d'interesse scende… cosa fanno i capitali e cosa deve fare la banca centrale per difendere il cambio?",
    "spiegazione": "Nel **modello Mundell-Fleming** con **cambi fissi e perfetta mobilità dei capitali**, un'espansione monetaria abbassa il tasso d'interesse: i capitali **escono**, la valuta tende a deprezzarsi e la banca centrale, per difendere la parità, **vende valuta estera** riassorbendo moneta nazionale. La **base monetaria torna al livello iniziale**: la politica monetaria è inefficace.",
    "perOpzione": {
      "A": "Il meccanismo decisivo passa per i movimenti di capitali, non per quelli dei beni.",
      "B": "Non sono i flussi commerciali ad annullare l'effetto: è la difesa del cambio di fronte alla fuga di capitali.",
      "C": "Corretta: la fuoriuscita di capitali costringe la banca centrale a interventi che distruggono la base monetaria creata."
    }
  },
  {
    "id": 40,
    "corretta": "A",
    "suggerimento": "Un'esternalità nasce quando l'attività di un soggetto incide su quella di un altro senza passare per il prezzo. Quale situazione descrive un legame di questo tipo?",
    "spiegazione": "Si ha un'**esternalità** quando la produzione o il consumo di un soggetto influisce sul benessere o sui costi di altri **senza che ciò passi attraverso il sistema dei prezzi**. È tipica delle situazioni di **interdipendenza**, come la **produzione congiunta** (es. il frutteto e l'apicoltore) o il **consumo congiunto**.",
    "perOpzione": {
      "A": "Corretta: produzione o consumo congiunti creano interdipendenze non regolate dal mercato, cioè esternalità.",
      "B": "La differenziazione dei prodotti riguarda la struttura del mercato (concorrenza monopolistica), non le esternalità.",
      "C": "I beni inferiori sono definiti dalla reazione della domanda al reddito (la domanda cala se il reddito cresce): nulla a che fare con le esternalità."
    }
  },
  {
    "id": 41,
    "corretta": "C",
    "suggerimento": "Per negoziare privatamente una soluzione efficiente servono due condizioni: una riguarda i diritti, l'altra i costi della trattativa.",
    "spiegazione": "Il **teorema di Coase** afferma che, se i **diritti di proprietà sono ben definiti** e i **costi di transazione sono nulli** (o trascurabili), le parti possono **negoziare** e raggiungere un esito efficiente, **internalizzando l'esternalità** senza intervento pubblico, qualunque sia l'assegnazione iniziale dei diritti.",
    "perOpzione": {
      "A": "Senza diritti di proprietà non c'è nulla da scambiare e la trattativa non può partire; inoltre il teorema richiede costi nulli, non «ragionevoli».",
      "B": "Diritti indefiniti e costi elevati sono proprio le condizioni in cui la negoziazione privata fallisce.",
      "C": "Corretta: diritti ben definiti e costi di transazione nulli sono le due ipotesi del teorema."
    }
  },
  {
    "id": 42,
    "corretta": "A",
    "suggerimento": "Weber distingue tre tipi di potere legittimo: tradizionale, carismatico e legale-razionale. A quale corrisponde un apparato fatto di regole impersonali e competenze definite?",
    "spiegazione": "Per **Max Weber** la **burocrazia** (regole impersonali, gerarchia, competenze definite, funzionari selezionati per competenza) è la forma organizzativa tipica del **potere legale-razionale**, la cui legittimità si fonda sulla **legalità** delle norme.",
    "perOpzione": {
      "A": "Corretta: la burocrazia è lo strumento con cui il potere legale-razionale si esercita e si legittima.",
      "B": "Il potere carismatico si fonda sulle qualità straordinarie di un capo ed è per natura antiburocratico.",
      "C": "Il «potere politico» non è una delle tre forme di legittimità weberiane; la burocrazia è legata specificamente al potere legale."
    }
  },
  {
    "id": 43,
    "corretta": "A",
    "suggerimento": "Pensa alla struttura «per funzioni» del bilancio introdotta dalla legge di contabilità e finanza pubblica: dal livello più generale al più dettagliato.",
    "spiegazione": "Il bilancio dello Stato è articolato, per la spesa, in **missioni** (funzioni principali e obiettivi strategici), **programmi** (aggregati di attività per raggiungere le missioni, unità di voto parlamentare) e **azioni** (ulteriore articolazione dei programmi). La disciplina è nella **L. 196/2009** (art. 21 e art. 25-bis).",
    "perOpzione": {
      "A": "Corretta: missioni, programmi e azioni sono i tre livelli della classificazione della spesa.",
      "B": "Le categorie (economiche) esistono nella classificazione, ma non «merceologiche» e non come terzo livello dopo i programmi.",
      "C": "«Componenti» e «interventi» sono terminologie usate in altri contesti (ad es. il PNRR), non per il bilancio dello Stato."
    },
    "riferimenti": [
      {
        "normaId": "l196_2009_art_21"
      },
      {
        "normaId": "l196_2009_art_25_bis"
      }
    ]
  },
  {
    "id": 44,
    "corretta": "B",
    "suggerimento": "Taylor è l'ingegnere che ha studiato tempi e metodi nelle fabbriche americane, all'epoca dei primi grandi stabilimenti industriali.",
    "spiegazione": "Frederick W. **Taylor** pubblicò **«The Principles of Scientific Management» nel 1911**: l'idea della **one best way** (un unico metodo ottimale per svolgere ogni compito, individuato con lo studio scientifico di tempi e movimenti) risale quindi ai **primi decenni del Novecento**.",
    "perOpzione": {
      "A": "Gli anni 2010 sono di un secolo successivi: il taylorismo è una delle prime teorie organizzative.",
      "B": "Corretta: l'opera di Taylor è del 1911.",
      "C": "Negli anni Sessanta si affermano altre scuole (approccio sistemico, teoria delle contingenze), non il taylorismo."
    }
  },
  {
    "id": 45,
    "corretta": "C",
    "suggerimento": "Fattori «igienici» e fattori «motivanti» sono due categorie: il nome della teoria richiama proprio questa dualità.",
    "spiegazione": "La **teoria dei due fattori** (o dei **fattori duali**) di **Frederick Herzberg** distingue i **fattori igienici** (retribuzione, condizioni di lavoro, relazioni: se mancano generano insoddisfazione, ma non motivano) dai **fattori motivanti** (riconoscimento, responsabilità, crescita: generano soddisfazione e motivazione).",
    "perOpzione": {
      "A": "La teoria ERG/ERC di Alderfer raggruppa i bisogni in esistenza, relazione e crescita, senza distinguere fattori igienici e motivanti.",
      "B": "La teoria delle contingenze riguarda il rapporto tra struttura organizzativa e ambiente, non la motivazione individuale.",
      "C": "Corretta: è la teoria di Herzberg, detta dei due fattori o dei fattori duali."
    }
  },
  {
    "id": 46,
    "corretta": "C",
    "suggerimento": "La parola chiave della domanda è «pigrizia»: quale termine inglese la richiama?",
    "spiegazione": "Il **social loafing** («pigrizia sociale», effetto Ringelmann) è la tendenza a **ridurre l'impegno** quando si lavora in gruppo, perché il contributo individuale è meno visibile e la responsabilità si diluisce. Si contrasta rendendo identificabili e valutabili i contributi individuali.",
    "perOpzione": {
      "A": "Il groupthink (Janis) è la ricerca eccessiva di consenso che porta il gruppo a decisioni poco critiche, non il disimpegno individuale.",
      "B": "Il downsizing è la riduzione delle dimensioni o del personale di un'organizzazione: non è una dinamica di gruppo.",
      "C": "Corretta: è il disimpegno individuale dovuto all'anonimato e alla diluizione della responsabilità nel gruppo."
    }
  },
  {
    "id": 47,
    "corretta": "C",
    "suggerimento": "In una matrice si incrociano righe e colonne: a quanti responsabili può rispondere un singolo dipendente?",
    "spiegazione": "La **struttura a matrice** combina due criteri di specializzazione (ad es. **funzioni** e **progetti/prodotti**): ogni persona risponde a **due responsabili**, quello funzionale e quello di progetto. È la **doppia linea gerarchica**, che migliora il coordinamento ma richiede gestione dei conflitti.",
    "perOpzione": {
      "A": "Un'unica linea gerarchica è tipica della struttura funzionale o divisionale classica (unità di comando).",
      "B": "La matrice non elimina la gerarchia formale: la raddoppia.",
      "C": "Corretta: il tratto distintivo della matrice è la doppia dipendenza gerarchica."
    }
  },
  {
    "id": 48,
    "corretta": "A",
    "suggerimento": "Il nome della tipologia è già un indizio: come termina normalmente un procedimento amministrativo?",
    "spiegazione": "Il vademecum AgID distingue diverse **tipologie di fascicolo**: per **affare**, per **attività**, per **procedimento amministrativo**, per **persona fisica** e per **persona giuridica**. Il fascicolo per **procedimento amministrativo** raccoglie i documenti di azioni amministrative omogenee che si concludono con un **provvedimento finale**.",
    "perOpzione": {
      "A": "Corretta: il procedimento amministrativo è per definizione una sequenza di atti che si conclude con un provvedimento.",
      "B": "Descrive il fascicolo per **affare**: una competenza non proceduralizzata che la PA deve comunque portare a buon fine.",
      "C": "Descrive il fascicolo per **persona fisica**, che raccoglie documenti anche di classifiche diverse riferiti alla stessa persona."
    },
    "nota": "Nell'opzione C la parola «diverse» è in parte coperta da una sigla a penna nel PDF: la lettura è la più plausibile e coincide con il testo del vademecum AgID."
  },
  {
    "id": 49,
    "corretta": "A",
    "suggerimento": "È un documento programmatico del 2020: guarda avanti o indietro? E l'UE vuole valori diversi online e offline?",
    "spiegazione": "La comunicazione **«Plasmare il futuro digitale dell'Europa»** (febbraio 2020) fissa tre obiettivi: una **tecnologia al servizio delle persone** (che migliori concretamente la vita quotidiana), un'**economia digitale equa e competitiva** e una **società aperta, democratica e sostenibile**. Ribadisce che **gli stessi valori** e diritti valgono online e offline.",
    "perOpzione": {
      "A": "Corretta: la «tecnologia al servizio delle persone» è il primo degli obiettivi chiave della strategia.",
      "B": "È un documento di prospettiva per i cinque anni successivi, non un bilancio dei risultati del quinquennio precedente.",
      "C": "Afferma l'opposto: i valori europei devono valere allo stesso modo online e offline, non in contrapposizione."
    }
  },
  {
    "id": 50,
    "corretta": "B",
    "suggerimento": "Governance si contrappone a «government»: più gerarchia o più rete? Più regole formali o più interazioni?",
    "spiegazione": "Nell'analisi delle politiche pubbliche la **governance** indica un modo di governare **reticolare e non gerarchico**, fondato sull'**interazione** e sulla negoziazione tra **attori pubblici e privati** (politici, tecnici, associazioni, imprese), in contrapposizione al **government** tradizionale basato su autorità e comando.",
    "perOpzione": {
      "A": "Descrive il «government» classico, gerarchico e fondato sull'autorità: l'opposto della governance.",
      "B": "Corretta: la governance è una rete di attori eterogenei che interagiscono nella produzione delle politiche.",
      "C": "Coglie la pluralità degli attori ma la confina nei canali formali, mentre la governance valorizza proprio le interazioni anche informali e negoziali."
    }
  },
  {
    "id": 51,
    "corretta": "C",
    "suggerimento": "Uno strumento di policy è una scommessa su come cambiare i comportamenti: può essere indifferente al contesto o alle ipotesi causali?",
    "spiegazione": "Gli **strumenti di policy** si distinguono in **sostanziali** (agiscono direttamente sul problema: regole, incentivi, servizi) e **procedurali** (agiscono sul processo decisionale: consultazioni, reti, informazione). Ogni strumento incorpora una **teoria causale** ed è **sensibile al contesto** in cui opera.",
    "perOpzione": {
      "A": "Ogni strumento si fonda su ipotesi causa-effetto su come reagiranno le persone e l'economia: non può prescinderne.",
      "B": "L'efficacia di uno strumento dipende fortemente dal contesto istituzionale, sociale ed economico.",
      "C": "Corretta: è la distinzione tra strumenti sostanziali e procedurali."
    }
  },
  {
    "id": 52,
    "corretta": "B",
    "suggerimento": "Se il decisore non può conoscere tutte le alternative né tutte le conseguenze, può davvero cercare la soluzione migliore in assoluto?",
    "spiegazione": "Per **Herbert Simon** il decisore ha informazioni, tempo e capacità di calcolo **limitati**: non cerca la soluzione ottima, ma si ferma alla prima alternativa **soddisfacente** rispetto al proprio livello di aspirazione (**satisficing**).",
    "perOpzione": {
      "A": "L'accordo tra le parti è il criterio di modelli negoziali o incrementali (es. Lindblom), non della razionalità limitata.",
      "B": "Corretta: il criterio è la soddisfazione (satisficing).",
      "C": "L'ottimizzazione è il criterio della razionalità assoluta, che Simon critica proprio come irrealistica."
    }
  },
  {
    "id": 53,
    "corretta": "C",
    "suggerimento": "Il metodo sperimentale richiede di escludere a caso alcune persone dall'intervento: si può fare con una prestazione che spetta a tutti per diritto?",
    "spiegazione": "Il **metodo sperimentale** confronta un **gruppo trattato** e un **gruppo di controllo** formati con **assegnazione casuale prima** dell'intervento: è il metodo più affidabile per stimare l'effetto causale. Proprio perché richiede di **escludere qualcuno** dal beneficio, è applicabile solo a politiche **non universalistiche**, che non costituiscono un diritto per tutti.",
    "perOpzione": {
      "A": "Nel metodo sperimentale i gruppi si formano per sorteggio prima dell'avvio dell'intervento; costruirli dopo è tipico dei metodi non sperimentali.",
      "B": "È l'opposto: la randomizzazione lo rende il metodo considerato più affidabile (gold standard).",
      "C": "Corretta: non si può negare per sorteggio una prestazione che spetta a tutti, quindi il metodo vale solo per politiche non universaliste."
    }
  },
  {
    "id": 54,
    "corretta": "C",
    "suggerimento": "Heclo contrappone la issue network ai «triangoli di ferro», chiusi e stabili: quindi come sarà la rete tematica?",
    "spiegazione": "Hugh **Heclo** (1978) propone l'immagine della **issue network** in contrapposizione ai «**triangoli di ferro**»: una rete **ampia, aperta e fluida**, con attori che entrano ed escono a seconda del tema e relazioni **contingenti**, senza necessariamente valori condivisi.",
    "perOpzione": {
      "A": "La stabilità delle relazioni tra governo, sindacati e imprese richiama il neocorporativismo o i triangoli di ferro, cioè l'opposto della rete tematica.",
      "B": "La condivisione di valori caratterizza piuttosto le comunità di policy o le advocacy coalitions; le issue network sono eterogenee.",
      "C": "Corretta: apertura e contingenza sono il tratto distintivo della rete tematica."
    }
  },
  {
    "id": 55,
    "corretta": "C",
    "suggerimento": "Cosa prevedeva il rapporto, e a quale condizione? Fai attenzione a parole come «certain» e «this century».",
    "spiegazione": "Il rapporto **«The Limits to Growth»** prevedeva che **continuando come al solito** (consumo di risorse, inquinamento, emissioni) si sarebbe arrivati a un declino improvviso e incontrollabile: cioè **conseguenze critiche dello sfruttamento dell'ambiente**. La previsione è **condizionata** («would»), non certa.",
    "perOpzione": {
      "A": "«Half a century ago» indica quando si riunì il gruppo, non una «finestra di 50 anni» prevista dal rapporto.",
      "B": "Il collasso non è dato per certo (è condizionato al «business as usual») e il declino è collocato entro la fine del secolo come scenario, non come certezza.",
      "C": "Corretta: il rapporto descrive le gravi conseguenze del continuare a sfruttare risorse e ambiente."
    }
  },
  {
    "id": 56,
    "corretta": "A",
    "suggerimento": "La frase è un periodo ipotetico con «continued» al passato: quali forme verbali sono compatibili con questo tipo di condizionale?",
    "spiegazione": "La frase è un **second conditional** (if + past simple, would + infinito), che esprime un'ipotesi. **Could** è compatibile (possibilità). **Was going to** può reggere un'ipotesi riferita al passato. **Will** invece appartiene al **first conditional** (if + present) e non si accorda con «continued».",
    "perOpzione": {
      "A": "Corretta come risposta: «will» richiederebbe il presente nella subordinata («if humanity continues») e non può stare con «continued».",
      "B": "«What was going to happen if…» è una costruzione possibile, riferita a un'ipotesi vista dal passato: può sostituire «would».",
      "C": "«What could happen if humanity continued…» è corretto: cambia solo la sfumatura (possibilità invece di conseguenza)."
    }
  },
  {
    "id": 57,
    "corretta": "B",
    "suggerimento": "«Continuing» qui è il soggetto della frase. Quale altra forma verbale può fare da soggetto con lo stesso significato?",
    "spiegazione": "In inglese un'azione può fare da **soggetto** sia con il **gerundio** («Continuing … would result») sia con l'**infinito con to** («To continue … would result»), con significato equivalente.",
    "perOpzione": {
      "A": "«Going to continue» non può fare da soggetto della frase: è una forma di futuro che richiede un soggetto proprio.",
      "B": "Corretta: l'infinito «to continue» può sostituire il gerundio come soggetto.",
      "C": "«Having continued» (gerundio perfetto) indica un'azione già compiuta e altera il senso della previsione."
    }
  },
  {
    "id": 58,
    "corretta": "C",
    "suggerimento": "«Tricky» significa difficile, spinoso, delicato. Quale opzione è un aggettivo che può descrivere una domanda di questo tipo?",
    "spiegazione": "**Tricky** vuol dire **difficile, spinoso, delicato da trattare**. Tra le opzioni, **controversial** (controverso, che suscita dibattito) è l'unico aggettivo che può descrivere una «question» in modo affine.",
    "perOpzione": {
      "A": "«Touching» significa commovente: cambia completamente il senso.",
      "B": "«Terribly» è un avverbio (terribilmente) e non può qualificare il sostantivo «question».",
      "C": "Corretta: «a controversial question» è una questione spinosa e discussa, vicina al senso di «tricky»."
    }
  },
  {
    "id": 59,
    "corretta": "C",
    "suggerimento": "Cerca il «falso amico»: una delle parole somiglia all'italiano ma ha un significato diverso da «famoso».",
    "spiegazione": "**Famous** = famoso, celebre. **Celebrated** e **distinguished** sono sinonimi accettabili (celebre, illustre). **Peculiar** invece significa **strano, insolito** (falso amico di «peculiare»): non può sostituire «famous».",
    "perOpzione": {
      "A": "«Distinguished» (illustre, prestigioso) può sostituire «famous».",
      "B": "«Celebrated» (celebre) è un sinonimo diretto di «famous».",
      "C": "Corretta come risposta: «peculiar» significa strano, bizzarro, e cambierebbe il senso della frase."
    }
  },
  {
    "id": 60,
    "corretta": "B",
    "suggerimento": "Basta un verbo che non funzioni con «the challenge» per scartare l'intera terna. Con quali verbi si «affronta» una sfida in inglese?",
    "spiegazione": "Con **challenge** si usano verbi come **meet** (raccogliere/vincere una sfida), **face** (affrontare) e **cope with** (far fronte a). **Deliver** (consegnare, realizzare) e **front** (che non significa «affrontare» in questo senso) non funzionano.",
    "perOpzione": {
      "A": "«Deliver the challenge» non è un'espressione corretta: «deliver» significa consegnare o realizzare.",
      "B": "Corretta: «cope with», «face» e «meet the challenge» sono tutte collocazioni appropriate.",
      "C": "«Front the challenge» non è idiomatico: «front» come verbo significa essere davanti a, condurre (un gruppo, un programma)."
    }
  }
];
