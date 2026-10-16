const SPIEGAZIONI = [
  {
    "id": 1,
    "corretta": "C",
    "suggerimento": "Il problema ha più facce (fatturato, clima interno, clienti): una risposta efficace le affronta tutte o solo una?",
    "spiegazione": "Davanti a una crisi con più cause si premia chi **diagnostica con i dati**, **coinvolge il team** nelle soluzioni e interviene **subito** anche sui punti critici esterni (i clienti a rischio).",
    "perOpzione": {
      "A": "Diagnosi e coinvolgimento corretti, ma si limita a piccoli correttivi e rimanda il cambiamento vero a quando il fatturato risalirà: così il problema rischia di aggravarsi.",
      "B": "Cerca nuovi clienti e chiede più impegno senza capire le cause interne: ignora malcontento, processi e qualità, e rinvia l'analisi a dopo.",
      "C": "Analisi delle cause, strategie condivise con il team, ottimizzazione delle procedure e contatto diretto con i clienti a rischio: affronta tutti i fronti della crisi."
    }
  },
  {
    "id": 2,
    "corretta": "C",
    "suggerimento": "Integrare persone di culture diverse: meglio cancellare le differenze o valorizzarle?",
    "spiegazione": "Nei contesti multiculturali funziona un approccio **inclusivo**: formazione interculturale, scambio tra culture e affiancamento tra veterani e nuovi arrivati, non l'omologazione.",
    "perOpzione": {
      "A": "Punta solo sull'omogeneizzazione delle pratiche e considera le difficoltà passeggere: ignora le differenze culturali invece di gestirle.",
      "B": "Prevede formazione e condivisione di esperienze, ma resta centrata sull'uniformità delle pratiche e dell'onboarding: valorizza poco la diversità.",
      "C": "Approccio inclusivo completo: formazione interculturale, scambi tra dipendenti di diversa provenienza e incontri tra veterani e nuovi arrivati per socializzare le pratiche."
    }
  },
  {
    "id": 3,
    "corretta": "A",
    "suggerimento": "Il cambiamento è deciso e alcuni dipendenti sono perplessi: come accompagnarli invece di frenarli?",
    "spiegazione": "Nella trasformazione digitale si premia chi **analizza il contesto**, introduce le novità **adattandole** al servizio e **coinvolge** le persone con ascolto, comunicazione e formazione.",
    "perOpzione": {
      "A": "Analisi di opportunità e rischi, processi digitali adattati al servizio, ascolto, comunicazione e formazione: gestisce sia il cambiamento sia le perplessità.",
      "B": "Buona (valutazione, gradualità, formazione), ma non prevede ascolto né comunicazione sul senso del cambiamento: affronta meno le perplessità dei dipendenti.",
      "C": "Si schiera contro la trasformazione decisa dall'azienda e sostiene i dipendenti nel «resistere al cambiamento»: atteggiamento non coerente con il ruolo."
    },
    "nota": "Anche la risposta che introduce gradualmente le tecnologie con formazione è difendibile; si è scelta quella che aggiunge ascolto, comunicazione e supporto informativo."
  },
  {
    "id": 4,
    "corretta": "B",
    "suggerimento": "Contaminanti potenzialmente dannosi in un prodotto: chi deve sapere e chi deve essere coinvolto?",
    "spiegazione": "Quando è in gioco la **sicurezza** dei consumatori si sospende, si indaga con il team, si comunica in modo **trasparente** e si collabora con le **autorità**.",
    "perOpzione": {
      "A": "Sospende e indaga, ma comunica «con discrezione» solo all'interno e con i fornitori: esclude clienti e autorità competenti.",
      "B": "Indagine con produzione e qualità, sospensione di produzione e lancio, comunicazione trasparente con clienti e partner e collaborazione con le autorità: risposta completa.",
      "C": "Continua a produrre, limita le comunicazioni ed evita le autorità regolatorie: espone i consumatori a rischi e viola gli obblighi di conformità."
    }
  },
  {
    "id": 5,
    "corretta": "B",
    "suggerimento": "Tempi stretti e obiettivo ambizioso: come organizzi il lavoro per non sacrificare né qualità né scadenza?",
    "spiegazione": "Su un progetto sfidante con scadenza fissa funzionano un **team multidisciplinare**, un **piano realistico** con priorità chiare, **scadenze intermedie** di controllo e il supporto del responsabile.",
    "perOpzione": {
      "A": "Sacrifica innovazione e qualità (standard «essenziali») e delega parti cruciali all'esterno: rischia di non raggiungere l'obiettivo di un prodotto innovativo.",
      "B": "Squadra multidisciplinare, requisiti essenziali e aree di innovazione definiti, milestone intermedie e disponibilità a sostenere il team: pianificazione e monitoraggio.",
      "C": "L'idea del compromesso è ragionevole ma resta generica: non dice come organizzare il lavoro, il team e il controllo dei tempi."
    }
  },
  {
    "id": 6,
    "corretta": "B",
    "suggerimento": "Il problema del fornitore è un guasto al veicolo: la merce esiste. Qual è la soluzione più diretta?",
    "spiegazione": "Nella gestione di un imprevisto si premia chi **informa** il cliente, **prende in carico** il problema e lo risolve con una **soluzione concreta** coordinando le persone coinvolte.",
    "perOpzione": {
      "A": "Trasparente e attiva, ma generica («soluzioni alternative»): non sfrutta il fatto che la merce c'è e manca solo il mezzo.",
      "B": "Informa e rassicura il cliente, risolve la causa precisa (noleggio di un furgone) coordinando fornitore e team e offre un gesto di cortesia: soluzione mirata e completa.",
      "C": "Nasconde il problema al cliente sperando che nessuno se ne accorga e accentra tutto su di sé: poca trasparenza e alto rischio."
    },
    "nota": "Anche la risposta che mobilita il team per trovare alternative e tiene informato il cliente è difendibile; si è preferita quella che risolve la causa specifica (il trasporto)."
  },
  {
    "id": 7,
    "corretta": "C",
    "suggerimento": "Un ingrediente non è conforme: oltre a capire la causa, chi va informato e quando?",
    "spiegazione": "Nelle crisi di qualità si premia chi **indaga**, adotta **misure correttive immediate**, coinvolge tutte le funzioni interessate (anche gli acquisti) e **comunica con trasparenza** ai clienti.",
    "perOpzione": {
      "A": "Buona gestione interna (indagine, sospensione, ricerca di fornitori), ma rinvia ogni comunicazione esterna ai risultati dell'indagine: poca trasparenza verso i clienti.",
      "B": "Minimizza il problema, non ritira il prodotto e aspetta una «risoluzione spontanea»: comportamento passivo e rischioso per clienti e reputazione.",
      "C": "Indagine, riunione urgente per misure correttive, approvvigionamento coinvolto per fornitori alternativi e comunicazione trasparente ai clienti: risposta completa."
    }
  },
  {
    "id": 8,
    "corretta": "B",
    "suggerimento": "Il bisogno emerso è un approccio «più personalizzato»: quale risposta lo realizza davvero?",
    "spiegazione": "Lo sviluppo delle competenze è efficace se parte da una **valutazione individuale** e prevede **percorsi mirati** sui bisogni di ciascuno, accompagnati da **feedback** continui.",
    "perOpzione": {
      "A": "Valuta individualmente ma poi propone una formazione uniforme; la personalizzazione arriva solo dopo e solo «eventualmente».",
      "B": "Valutazione individuale, corsi tecnici a chi ne ha bisogno, workshop relazionali agli altri e feedback a 360°: risponde esattamente al bisogno di personalizzazione.",
      "C": "Uniforma le competenze con la stessa formazione per tutti: ignora le differenze individuali appena rilevate."
    }
  },
  {
    "id": 9,
    "corretta": "B",
    "suggerimento": "Davanti a un cambiamento radicale e a dipendenti perplessi: da dove conviene partire?",
    "spiegazione": "Per gestire le **resistenze al cambiamento** si parte dall'**ascolto** delle preoccupazioni, si offre **formazione** e si procede con **gradualità**, spiegando i benefici.",
    "perOpzione": {
      "A": "Accelera il passaggio e confida che i dubbi spariscano col tempo: ignora le perplessità e aumenta la resistenza.",
      "B": "Parte dall'ascolto, forma le persone sulle nuove tecnologie e gestisce gradualmente la transizione illustrandone i vantaggi: accompagna davvero il cambiamento.",
      "C": "Valida, ma mette in primo piano la comunicazione dei benefici (unidirezionale) e affianca l'ascolto solo «in parallelo», senza gradualità esplicita."
    },
    "nota": "Anche la risposta con sessioni informative più ascolto e formazione in parallelo è difendibile; si è preferita quella che parte dall'ascolto e prevede una transizione graduale."
  },
  {
    "id": 10,
    "corretta": "C",
    "suggerimento": "C'è un rischio per la sicurezza e il team è diviso: cosa va fatto subito e come gestisci le opinioni contrastanti?",
    "spiegazione": "Con un difetto che mette a rischio la **sicurezza** si sospende subito, si **indaga sulle cause** coinvolgendo fornitori e qualità e si **informa** chi è esposto; il conflitto nel team si gestisce ascoltando entrambe le posizioni.",
    "perOpzione": {
      "A": "Valida (sospensione, trasparenza, coinvolgimento delle funzioni), ma mette sullo stesso piano sicurezza e reputazione e non affronta il disaccordo emerso nel team.",
      "B": "Continua a produrre un modello pericoloso e limita le comunicazioni per tutelare l'immagine: antepone la reputazione alla sicurezza dei passeggeri.",
      "C": "Sospende subito, ascolta le due posizioni del team, indaga sulle cause con fornitori e qualità, corregge materiali e processi e informa i passeggeri."
    },
    "nota": "Anche la risposta con comunicazione trasparente, sospensione e programma di assistenza/risarcimento è difendibile; si è preferita quella che gestisce anche il disaccordo nel team e le cause del difetto."
  },
  {
    "id": 11,
    "corretta": "A",
    "suggerimento": "Prenderai la guida tra poco: puoi già muoverti? E attraverso quale canale è corretto informarsi?",
    "spiegazione": "Chi sta per assumere la guida di un team si informa **per tempo** tramite i **canali istituzionali** (l'attuale responsabile), poi pianifica, assegna obiettivi chiari e **sostiene** le persone.",
    "perOpzione": {
      "A": "Si informa subito dal team manager attuale, poi pianifica, assegna obiettivi individuali tenendo conto delle difficoltà e investe su persone e tecnologie: approccio completo e corretto.",
      "B": "Aspetta passivamente di insediarsi e punta solo sulla velocità, sacrificando l'innovazione che è il cuore del prodotto.",
      "C": "Collaborativa e flessibile, ma si informa tramite un canale informale (un ex collega) scavalcando l'attuale responsabile del team."
    }
  },
  {
    "id": 12,
    "corretta": "A",
    "suggerimento": "Team interno multidisciplinare e partner esterno: meglio tenerli separati o farli lavorare insieme?",
    "spiegazione": "Nei progetti con partner esterni funzionano **incontri congiunti**, un **piano condiviso** di compiti e un **monitoraggio costante**: l'integrazione crea sinergie, la separazione crea disallineamenti.",
    "perOpzione": {
      "A": "Incontri periodici tra team e partner, piano dettagliato e concordato di assegnazione dei compiti e monitoraggio costante: integrazione piena.",
      "B": "Tiene separati interni ed esterni e vede l'eterogeneità come fonte di confusione: fa da collo di bottiglia e spreca il valore della partnership.",
      "C": "Riunioni separate e un confronto congiunto solo mensile: i disallineamenti emergono tardi e il coordinamento resta tutto sul responsabile."
    }
  },
  {
    "id": 13,
    "corretta": "A",
    "suggerimento": "Cerca nel brano le date: quando avviene la scoperta e quando il primo forno? E cosa succede invece negli anni Settanta?",
    "spiegazione": "Il brano colloca la scoperta nel **1945** e il brevetto e la commercializzazione nel **1947**: l'invenzione è degli **anni Quaranta**. Gli anni Settanta riguardano la miniaturizzazione e la diffusione domestica.",
    "perOpzione": {
      "A": "Corretta: scoperta casuale nel 1945, brevetto e messa in commercio nel 1947, quindi negli anni Quaranta.",
      "B": "Inverte il rapporto: era il magnetron a essere già usato come radar; il forno nasce dopo, dagli esperimenti con quell'apparecchio.",
      "C": "Negli anni Settanta il forno viene miniaturizzato e si diffonde nelle case, ma era già stato inventato.",
      "D": "Il brano non lo afferma: i primi forni erano anzi destinati a ristoranti e usi commerciali, l'uso domestico arriva dopo."
    }
  },
  {
    "id": 14,
    "corretta": "A",
    "suggerimento": "L'ultima frase del brano spiega il successo nelle case americane: con quale motivazione?",
    "spiegazione": "Il brano chiude spiegando che il forno si diffuse nel 95% delle case «**grazie alla capacità di riscaldare il cibo in modo rapido ed efficiente**».",
    "perOpzione": {
      "A": "Corretta: è la motivazione riportata testualmente nel brano.",
      "B": "La facilità di riparazione non è mai menzionata.",
      "C": "Il brano non parla del forno come simbolo di scoperta americana.",
      "D": "La notorietà di Spencer non è indicata come causa del successo; inoltre il brevetto è della Raytheon."
    }
  },
  {
    "id": 15,
    "corretta": "D",
    "suggerimento": "Verifica una per una le affermazioni sul brano: sono tutte riscontrabili?",
    "spiegazione": "Quando c'è l'opzione «tutte le risposte sono corrette» bisogna controllare **ogni** affermazione. Il brano dice che Spencer era un ingegnere statunitense della Raytheon, che nel 1945 lavorava con il magnetron (usato come radar nella guerra) e che ipotizzò di usarne le onde per riscaldare il cibo.",
    "perOpzione": {
      "A": "Vera, ma non è l'unica: il brano lo afferma esplicitamente, così come le altre informazioni.",
      "B": "Vera, ma non è l'unica: «un ingegnere statunitense che lavorava per la Raytheon Corporation».",
      "C": "Deducibile: ingegnere statunitense che nel 1945, in tempo di guerra, lavorava con apparecchi usati come radar. Anche questa è vera, quindi non è l'unica.",
      "D": "Corretta: tutte e tre le affermazioni trovano riscontro nel brano."
    },
    "nota": "L'affermazione «in servizio durante la Seconda guerra mondiale» è la meno letterale (il brano dice che nel 1945 conduceva esperimenti con un apparecchio usato come radar in guerra), ma è deducibile: per questo la chiave è «tutte corrette»."
  },
  {
    "id": 16,
    "corretta": "A",
    "suggerimento": "Cosa dice il brano sul rapporto tra energia solare e programma spaziale?",
    "spiegazione": "Il brano afferma che l'energia solare ha svolto «**un ruolo importante nel programma spaziale**» statunitense, alimentando numerose missioni tra cui l'Apollo; il Vanguard 1 fu il primo oggetto spaziale a usarla.",
    "perOpzione": {
      "A": "Corretta: è l'unica affermazione supportata dal brano (Vanguard 1, missioni spaziali, Apollo).",
      "B": "Il brano non parla dei costi passati dei pannelli né di un accesso facile «solo ora».",
      "C": "Il primo utilizzo citato è sul satellite Vanguard 1, non nelle fabbriche.",
      "D": "Il brano parla di crescita dell'industria solare, non del fatto che i pannelli siano fondamentali per l'industria."
    }
  },
  {
    "id": 17,
    "corretta": "D",
    "suggerimento": "Rileggi l'ultima frase del brano: che cosa dice dei pannelli oggi?",
    "spiegazione": "Il brano conclude che oggi i pannelli sono «una fonte di energia **sempre più diffusa** e competitiva»: cioè sempre più utilizzati.",
    "perOpzione": {
      "A": "Il brano non dice che siano «ancora oggetto di interesse»: l'interesse è citato solo per il 1973.",
      "B": "Non tutte sono corrette: l'affermazione sui costi è contraria al brano.",
      "C": "Il brano li definisce «competitivi», non costosi.",
      "D": "Corretta: «sempre più diffusa» equivale a sempre più utilizzati."
    }
  },
  {
    "id": 18,
    "corretta": "B",
    "suggerimento": "Il brano descrive l'effetto fotovoltaico: che cosa consente di fare a certi materiali?",
    "spiegazione": "L'**effetto fotovoltaico** (Becquerel, 1839) è la capacità di determinati materiali di **generare corrente elettrica quando esposti alla luce solare**.",
    "perOpzione": {
      "A": "Il brano non descrive il funzionamento del pannello per uso domestico e spaziale.",
      "B": "Corretta: riprende quasi alla lettera la definizione data nel brano.",
      "C": "Il brano non spiega perché i pannelli vengono messi sui tetti né collega la teoria alla loro diffusione.",
      "D": "Falsa: il brano spiega la teoria (principio dell'effetto fotovoltaico)."
    }
  },
  {
    "id": 19,
    "corretta": "B",
    "suggerimento": "Osserva righe e colonne: quali combinazioni di forma esterna e figura interna compaiono, e quante volte?",
    "spiegazione": "La griglia usa tre «tipi» fissi: **esagono con triangolo**, **rombo con quadrato**, **stella con farfalla**; ogni riga e ogni colonna li contiene una sola volta. Nella terza riga manca il **rombo con il quadrato dritto**.",
    "perOpzione": {
      "A": "La figura 4 è l'esagono con il triangolo, che nella terza riga è già presente.",
      "B": "Corretta: la figura 3 è il rombo con il quadrato orientato come negli altri riquadri, l'unico tipo che manca nella terza riga.",
      "C": "La figura 2 è un rombo, ma il quadrato interno è ruotato di 45°: nella griglia i quadrati sono sempre dritti.",
      "D": "La figura 1 è una stella con farfalla (già presente in riga) e ha in più un'ellisse estranea alla serie.",
      "E": "La figura 5 è la stella con la farfalla, già presente nella terza riga."
    }
  },
  {
    "id": 20,
    "corretta": "B",
    "suggerimento": "Guarda separatamente il colore del cerchio centrale, la sua dimensione, la forma esterna e i raggi.",
    "spiegazione": "Ogni riga ha un colore del cerchio (bianco, grigio, nero) che **diminuisce di dimensione** da sinistra a destra; le forme esterne (quadrato, rombo, esagono) compaiono una volta per riga e colonna; i raggi alternano **a X** e **a croce**. Manca il **rombo con piccolo cerchio nero e raggi a X**.",
    "perOpzione": {
      "A": "La figura 3 ha forma e cerchio giusti, ma i raggi sono a croce: nella terza colonna i raggi sono a X.",
      "B": "Corretta: la figura 1 è un rombo, con cerchio nero piccolo e raggi a X.",
      "C": "La figura 5 ripete l'esagono con cerchio bianco della prima riga.",
      "D": "La figura 4 ha il quadrato (già presente nella riga) e il cerchio grigio.",
      "E": "La figura 2 ha il cerchio bianco e quattro pallini esterni estranei alla serie."
    },
    "nota": "Una seconda risoluzione indipendente ha scelto la figura 3, applicando la regola «il rombo ha sempre i raggi a croce». La regola a scacchiera dei raggi (X / croce alternati) spiega però tutte le otto figure, quadrati compresi, e porta alla figura 1."
  },
  {
    "id": 21,
    "corretta": "C",
    "suggerimento": "Ogni figura interna è sempre abbinata alla stessa forma esterna? Conta quante volte compare ciascun tipo in ogni riga.",
    "spiegazione": "I tipi sono fissi: **triangolo** con cerchio grigio e quadrato tratteggiato chiaro, **pentagono** con cerchio nero e quadrato continuo, **ellisse** con cerchio bianco e quadrato tratteggiato. Ogni riga li contiene tutti e tre: nella terza manca il **pentagono con cerchio nero**.",
    "perOpzione": {
      "A": "La figura 3 è il triangolo con cerchio grigio, già presente nella terza riga.",
      "B": "La figura 5 è l'ellisse con cerchio bianco, già presente nella terza riga.",
      "C": "Corretta: la figura 4 è il pentagono con quadrato continuo e cerchio nero, identico agli altri pentagoni della griglia.",
      "D": "La figura 1 è un'ellisse (già in riga) con quattro pallini neri estranei alla serie.",
      "E": "La figura 2 è un pentagono, ma con il cerchio bianco: nella griglia il pentagono ha sempre il cerchio nero."
    }
  },
  {
    "id": 22,
    "corretta": "D",
    "suggerimento": "Confronta la prima e la seconda figura di ogni riga: la terza contiene tutto, o solo una parte di ciò che hanno?",
    "spiegazione": "In ogni riga la terza figura contiene **solo gli elementi comuni** alle prime due: lati del quadrato, spicchi del cerchio e pallini agli angoli. Terza riga: cerchio intero e semicerchio in alto a sinistra hanno in comune il **semicerchio**; i lati non coincidono (nessun lato); i **pallini** ci sono in entrambe.",
    "perOpzione": {
      "A": "La figura 4 ha il semicerchio giusto ma non ha i pallini, che invece sono comuni alle prime due figure della riga.",
      "B": "La figura 3 contiene un fiore estraneo alla serie e tre lati che non sono comuni alle prime due figure.",
      "C": "La figura 5 ha lati del quadrato e un semicerchio orientato diversamente: non corrisponde agli elementi comuni.",
      "D": "Corretta: la figura 1 ha i quattro pallini e il semicerchio in alto a sinistra, senza lati.",
      "E": "La figura 2 ha i pallini ma un solo spicchio, rivolto a destra: non è l'intersezione di cerchio pieno e semicerchio."
    }
  },
  {
    "id": 23,
    "corretta": "D",
    "suggerimento": "Lavora per colonne: sovrapponi le prime due figure. Che cosa succede alle parti che compaiono in entrambe?",
    "spiegazione": "In ogni colonna la terza figura è la **sovrapposizione** delle prime due in cui le **parti comuni si annullano** (spicchi e pallini). Terza colonna: i due semicerchi sono complementari e formano un **cerchio intero**; i pallini, presenti in entrambe, **scompaiono**.",
    "perOpzione": {
      "A": "La figura 1 contiene un fiore estraneo e ha uno spicchio mancante.",
      "B": "La figura 3 ripete la figura in alto a sinistra: è un cerchio con uno spicchio mancante, non il cerchio intero.",
      "C": "La figura 4 ha i pallini (che dovrebbero annullarsi) e solo metà del cerchio.",
      "D": "Corretta: la figura 5 è il cerchio intero, a linea sottile e senza pallini.",
      "E": "La figura 2 manca dello spicchio superiore: i due semicerchi della colonna insieme coprono tutto il cerchio."
    }
  },
  {
    "id": 24,
    "corretta": "B",
    "suggerimento": "Nelle prime due righe, confronta lati del rombo e pallini agli angoli delle prime due figure con quelli della terza.",
    "spiegazione": "In ogni riga la terza figura conserva **solo i lati del rombo e i pallini d'angolo comuni** alle prime due. Terza riga: i lati comuni sono solo i **due lati in basso** e i **quattro pallini** sono presenti in entrambe (fiore e punto centrale sono uguali in tutte le candidate).",
    "perOpzione": {
      "A": "La figura 5 non ha il punto centrale né quattro petali, e ha lati non comuni alle prime due figure.",
      "B": "Corretta: la figura 4 ha i quattro pallini e soltanto i due lati inferiori del rombo.",
      "C": "La figura 1 contiene un quadrato estraneo e un fiore a tre petali.",
      "D": "La figura 3 ha anche il lato in alto a destra, che non è comune alle prime due figure della riga.",
      "E": "La figura 2 ha i lati giusti ma solo due pallini: nella terza riga i quattro pallini sono comuni a entrambe le figure."
    },
    "nota": "Petali e punto centrale non seguono la stessa regola nelle prime righe, ma non distinguono le alternative."
  },
  {
    "id": 25,
    "corretta": "B",
    "suggerimento": "Su quale articolo della Costituzione si fondano i regolamenti delle Camere, e chi altro può disciplinare quelle materie?",
    "spiegazione": "I **regolamenti parlamentari** (art. 64 Cost.) sono **fonti primarie** a **competenza riservata**: disciplinano l'organizzazione e il funzionamento delle Camere, ambito in cui la legge ordinaria non può intervenire.",
    "perOpzione": {
      "A": "I regolamenti governativi sono fonti secondarie, subordinate alla legge; quelli parlamentari sono fonti primarie.",
      "B": "Corretta: sono fonti primarie e operano in una sfera riservata dalla Costituzione all'autonomia di ciascuna Camera.",
      "C": "Sono atti scritti approvati a maggioranza assoluta, non fonti consuetudinarie."
    },
    "riferimenti": [
      {
        "normaId": "cost_art_64"
      }
    ]
  },
  {
    "id": 26,
    "corretta": "B",
    "suggerimento": "La guerra è la decisione politica più grave: spetta all'organo rappresentativo o all'esecutivo?",
    "spiegazione": "Ai sensi dell'**art. 78 Cost.** sono **le Camere** a deliberare lo stato di guerra e a conferire al Governo i poteri necessari; il Presidente della Repubblica lo dichiara (art. 87).",
    "perOpzione": {
      "A": "Il Presidente del Consiglio non delibera lo stato di guerra.",
      "B": "Corretta: lo prevede l'art. 78 Cost.",
      "C": "Il Governo riceve i poteri necessari dalle Camere, ma non delibera lo stato di guerra."
    },
    "riferimenti": [
      {
        "normaId": "cost_art_78"
      },
      {
        "normaId": "cost_art_87"
      }
    ]
  },
  {
    "id": 27,
    "corretta": "B",
    "suggerimento": "Ricorda il caso del Ministro sfiduciato individualmente (caso Mancuso) e il ruolo della Corte dei conti in sede di controllo.",
    "spiegazione": "Nei **conflitti di attribuzione tra poteri dello Stato** la Corte costituzionale riconosce la legittimazione della **Corte dei conti** (in sede di controllo) e, per i singoli ministri, solo in casi particolari: il **Ministro della giustizia** per le sue attribuzioni costituzionali (art. 110 Cost.) e il ministro colpito da **sfiducia individuale** (sent. n. 7/1996).",
    "perOpzione": {
      "A": "Falsa: la Corte dei conti è stata più volte ritenuta legittimata a sollevare conflitto, in particolare nell'esercizio della funzione di controllo.",
      "B": "È l'affermazione corretta: la regola generale esclude i singoli ministri, con l'eccezione riconosciuta per la sfiducia individuale.",
      "C": "Falsa per l'avverbio «mai»: anche il singolo ministro sfiduciato individualmente è stato ritenuto legittimato."
    },
    "nota": "La formulazione è imprecisa perché anche il Ministro della giustizia è legittimato; resta comunque l'unica affermazione corretta tra quelle proposte.",
    "riferimenti": [
      {
        "normaId": "cost_art_110"
      }
    ]
  },
  {
    "id": 28,
    "corretta": "B",
    "suggerimento": "Orizzontale: il rapporto è tra istituzioni e livelli di governo, o tra istituzioni e cittadini?",
    "spiegazione": "La **sussidiarietà orizzontale** (art. 118, ultimo comma, Cost.) impone a Stato, Regioni ed enti locali di **favorire l'autonoma iniziativa dei cittadini**, singoli e associati, per attività di interesse generale.",
    "perOpzione": {
      "A": "Riguarda i rapporti tra livelli di governo (piano verticale) e la composizione della Conferenza Stato-Regioni, non la sussidiarietà orizzontale.",
      "B": "Corretta: è il contenuto dell'art. 118, ultimo comma, Cost.",
      "C": "Riguarda la tutela dell'ambiente e la responsabilità delle imprese, non la sussidiarietà."
    },
    "riferimenti": [
      {
        "normaId": "cost_art_118"
      }
    ]
  },
  {
    "id": 29,
    "corretta": "A",
    "suggerimento": "La discrezionalità tecnica implica una scelta tra interessi o una valutazione secondo saperi specialistici?",
    "spiegazione": "Si ha **discrezionalità tecnica** quando l'amministrazione valuta fatti e presupposti applicando **criteri tecnico-scientifici** (es. medicina, ingegneria), senza ponderare interessi come nella discrezionalità amministrativa.",
    "perOpzione": {
      "A": "Corretta: la valutazione dei presupposti avviene sulla base di regole e conoscenze tecniche.",
      "B": "I pareri obbligatori riguardano l'istruttoria del procedimento e possono esistere anche senza discrezionalità tecnica.",
      "C": "Non serve un organo straordinario né una nomina «per competenza tecnica»: la valuta l'amministrazione competente."
    }
  },
  {
    "id": 30,
    "corretta": "A",
    "suggerimento": "Sono atti atipici ed eccezionali: quali limiti ha fissato la Corte costituzionale per renderli compatibili con l'ordinamento?",
    "spiegazione": "Le **ordinanze contingibili e urgenti** sono ammesse se previste dalla legge, ma devono rispettare i **principi generali dell'ordinamento** e la riserva di legge, essere **motivate**, adeguatamente **pubblicate** e di **durata limitata** (Corte cost. sent. n. 8/1956, n. 4/1977, n. 115/2011).",
    "perOpzione": {
      "A": "Corretta: riassume i limiti fissati dalla giurisprudenza costituzionale.",
      "B": "Falsa: sono previste da varie leggi (es. per sindaco e protezione civile) e ammesse entro i limiti indicati.",
      "C": "Falsa: possono derogare a norme di legge (non solo organizzative) e spesso incidono in senso restrittivo sui destinatari."
    }
  },
  {
    "id": 31,
    "corretta": "B",
    "suggerimento": "Le misure cautelari si fondano su due presupposti classici: quali?",
    "spiegazione": "Per l'**art. 55 c.p.a.** la misura cautelare richiede il **periculum in mora** (pregiudizio grave e irreparabile) e il **fumus boni iuris** (ragionevole previsione sull'esito del ricorso).",
    "perOpzione": {
      "A": "La cauzione è solo eventuale (il giudice «può» subordinarvi la misura), non un requisito necessario.",
      "B": "Corretta: descrive periculum in mora e fumus boni iuris.",
      "C": "La sentenza in forma semplificata (art. 60 c.p.a.) è una possibilità, non l'unico modo di dare tutela cautelare."
    },
    "riferimenti": [
      {
        "normaId": "cpa_art_55"
      },
      {
        "normaId": "cpa_art_60"
      }
    ]
  },
  {
    "id": 32,
    "corretta": "B",
    "suggerimento": "Accesso «difensivo»: a che cosa serve conoscere il documento?",
    "spiegazione": "L'**accesso difensivo** (art. 24, comma 7, L. 241/1990) è il diritto di chi ha un **interesse diretto, concreto e attuale** di accedere ai documenti la cui conoscenza è **necessaria per curare o difendere i propri interessi giuridici**; prevale anche su alcune esigenze di riservatezza.",
    "perOpzione": {
      "A": "Descrive l'accesso alle informazioni ambientali (d.lgs. 195/2005), un istituto diverso.",
      "B": "Corretta: combina la legittimazione dell'art. 22 e la finalità difensiva dell'art. 24, comma 7, L. 241/1990.",
      "C": "Descrive il diritto di petizione o di presentare istanze, non l'accesso ai documenti."
    },
    "riferimenti": [
      {
        "normaId": "l241_1990_art_24"
      },
      {
        "normaId": "l241_1990_art_22"
      }
    ]
  },
  {
    "id": 33,
    "corretta": "B",
    "suggerimento": "Nei settori in cui l'Unione è l'unica competente, ha senso chiedersi se gli Stati farebbero meglio?",
    "spiegazione": "Ai sensi dell'**art. 5, par. 3, TUE** il principio di **sussidiarietà** si applica nei **settori che non sono di competenza esclusiva** dell'Unione: l'UE interviene solo se l'obiettivo non può essere raggiunto meglio dagli Stati.",
    "perOpzione": {
      "A": "Nelle competenze esclusive solo l'Unione può agire, quindi la sussidiarietà non si applica.",
      "B": "Corretta: lo prevede l'art. 5, par. 3, TUE.",
      "C": "Non esiste un'eccezione per la cooperazione giudiziaria penale; il criterio è la natura non esclusiva della competenza."
    },
    "riferimenti": [
      {
        "normaId": "tue_art_5"
      }
    ]
  },
  {
    "id": 34,
    "corretta": "A",
    "suggerimento": "La cittadinanza europea è autonoma o dipende da quella di uno Stato membro?",
    "spiegazione": "L'**art. 9 TUE** (e l'art. 20 TFUE) stabilisce che la cittadinanza dell'Unione **si aggiunge** alla cittadinanza nazionale **e non la sostituisce**.",
    "perOpzione": {
      "A": "Corretta: è la formula testuale dell'art. 9 TUE.",
      "B": "Falsa: non sostituisce la cittadinanza nazionale, che resta il presupposto per avere quella europea.",
      "C": "Falsa: è un status aggiuntivo, non incorpora la cittadinanza nazionale."
    },
    "riferimenti": [
      {
        "normaId": "tue_art_9"
      },
      {
        "normaId": "tfue_art_20"
      }
    ]
  },
  {
    "id": 35,
    "corretta": "C",
    "suggerimento": "Chi propone e chi elegge il Presidente della Commissione dopo il Trattato di Lisbona?",
    "spiegazione": "Per l'**art. 17, par. 7, TUE** il **Consiglio europeo**, a maggioranza qualificata e tenendo conto delle elezioni europee, **propone** il candidato; il **Parlamento europeo lo elegge a maggioranza dei membri** che lo compongono.",
    "perOpzione": {
      "A": "Non serve l'unanimità degli Stati: il Consiglio europeo decide a maggioranza qualificata.",
      "B": "Il Consiglio dell'Unione non nomina il Presidente, e il Parlamento non vota a maggioranza semplice.",
      "C": "Corretta: corrisponde all'art. 17, par. 7, TUE."
    },
    "riferimenti": [
      {
        "normaId": "tue_art_17"
      }
    ]
  },
  {
    "id": 36,
    "corretta": "C",
    "suggerimento": "Il surplus misura un «guadagno» del consumatore: rispetto a cosa?",
    "spiegazione": "Il **surplus del consumatore** è la differenza tra il **prezzo massimo che è disposto a pagare** (disponibilità a pagare) e il **prezzo effettivamente pagato**; graficamente è l'area tra curva di domanda e prezzo.",
    "perOpzione": {
      "A": "Prezzo di vendita meno prezzo di acquisto descrive un margine del venditore, non il benessere del consumatore.",
      "B": "Il confronto con il prezzo di equilibrio non misura il beneficio del consumatore: il riferimento è la sua disponibilità a pagare.",
      "C": "Corretta: è la definizione di surplus del consumatore."
    }
  },
  {
    "id": 37,
    "corretta": "A",
    "suggerimento": "Cosa succede alla quantità domandata di un bene inferiore quando il reddito aumenta?",
    "spiegazione": "Per un **bene inferiore** la domanda **diminuisce all'aumentare del reddito**: la curva reddito-consumo, che lega reddito e paniere scelto, ha quindi andamento **decrescente** rispetto a quel bene.",
    "perOpzione": {
      "A": "Corretta: la curva reddito-consumo si costruisce variando il reddito, e per il bene inferiore la quantità cala.",
      "B": "La curva reddito-consumo tiene fermi i prezzi: le variazioni di prezzo riguardano la curva prezzo-consumo.",
      "C": "Stesso errore: il prezzo è costante lungo la curva reddito-consumo."
    }
  },
  {
    "id": 38,
    "corretta": "A",
    "suggerimento": "Con rendimenti crescenti, per raddoppiare la produzione servono più o meno del doppio dei fattori?",
    "spiegazione": "Con **rendimenti di scala crescenti** un aumento proporzionale dei fattori fa crescere la produzione più che proporzionalmente: gli isoquanti corrispondenti a livelli crescenti di output equidistanti sono **sempre più vicini**.",
    "perOpzione": {
      "A": "Corretta: servono incrementi sempre minori di fattori per ogni unità in più di prodotto.",
      "B": "Gli isoquanti si allontanano con rendimenti decrescenti.",
      "C": "Distanza costante corrisponde a rendimenti costanti."
    }
  },
  {
    "id": 39,
    "corretta": "C",
    "suggerimento": "Le aspettative adattive guardano avanti al modello o indietro agli errori passati?",
    "spiegazione": "Con **aspettative adattive** gli agenti formano le previsioni **correggendo gli errori passati**: dipendono dalla **storia** della variabile e possono generare errori sistematici, a differenza delle aspettative razionali.",
    "perOpzione": {
      "A": "L'assenza di errori sistematici caratterizza le aspettative razionali.",
      "B": "La conoscenza del modello economico è propria delle aspettative razionali.",
      "C": "Corretta: le aspettative adattive dipendono dai valori passati."
    }
  },
  {
    "id": 40,
    "corretta": "C",
    "suggerimento": "Il cambio nominale confronta le monete; quello reale che cosa confronta?",
    "spiegazione": "Il **tasso di cambio reale** esprime il **prezzo relativo dei beni** di due Paesi: tasso di cambio nominale corretto per il rapporto tra i livelli dei prezzi. Misura la competitività di prezzo.",
    "perOpzione": {
      "A": "Il rapporto tra i PIL non ha nulla a che vedere con il tasso di cambio.",
      "B": "Il rapporto di scambio tra le valute è il tasso di cambio nominale.",
      "C": "Corretta: è il rapporto tra i prezzi dei beni dei due Paesi espressi nella stessa valuta."
    }
  },
  {
    "id": 41,
    "corretta": "A",
    "suggerimento": "Il tasso di partecipazione misura quante persone «partecipano» al mercato del lavoro: chi ne fa parte, oltre agli occupati?",
    "spiegazione": "Il **tasso di partecipazione** (o di attività) è il rapporto tra **forze di lavoro** (occupati + disoccupati) e **popolazione in età lavorativa**.",
    "perOpzione": {
      "A": "Corretta: è la definizione del tasso di attività.",
      "B": "Occupati su forze di lavoro è il complemento a uno del tasso di disoccupazione.",
      "C": "Occupati su popolazione in età lavorativa è il tasso di occupazione."
    }
  },
  {
    "id": 42,
    "corretta": "C",
    "suggerimento": "Il New Public Management guarda a quale modello per rendere più efficiente la PA?",
    "spiegazione": "Il **New Public Management** (anni '80-'90) introduce nella PA strumenti **mutuati dal settore privato**: orientamento ai risultati, autonomia manageriale, controllo di gestione, concorrenza ed esternalizzazioni.",
    "perOpzione": {
      "A": "Al contrario, il NPM ha favorito decentramento e autonomia gestionale.",
      "B": "La partecipazione dei cittadini è tipica di approcci successivi come la New Public Governance.",
      "C": "Corretta: è il tratto distintivo del NPM."
    }
  },
  {
    "id": 43,
    "corretta": "A",
    "suggerimento": "Due caratteristiche tecniche definiscono il bene pubblico in senso economico: quali?",
    "spiegazione": "I **beni pubblici puri** sono **non escludibili** (non si può impedire a nessuno di fruirne) e **non rivali** (il consumo di uno non riduce quello degli altri), ad esempio la difesa nazionale.",
    "perOpzione": {
      "A": "Corretta: è la definizione economica di bene pubblico.",
      "B": "Il costo di produzione dei beni pubblici non è nullo; è nullo, semmai, il costo marginale di un utente in più.",
      "C": "La definizione economica non dipende dalla proprietà o dalla gestione pubblica del bene."
    }
  },
  {
    "id": 44,
    "corretta": "C",
    "suggerimento": "Gli esperimenti di Hawthorne di Elton Mayo: in quale epoca si collocano?",
    "spiegazione": "La **Scuola delle Relazioni Umane** nasce dagli **esperimenti di Hawthorne** (Western Electric, 1924-1932) guidati da **Elton Mayo**, cioè tra gli **anni Venti e Trenta del Novecento**, come reazione al taylorismo.",
    "perOpzione": {
      "A": "Gli anni '80-'90 sono l'epoca del New Public Management, non delle Relazioni Umane.",
      "B": "Periodo recente, del tutto estraneo alla nascita della scuola.",
      "C": "Corretta: gli studi di Mayo risalgono agli anni Venti-Trenta del Novecento."
    }
  },
  {
    "id": 45,
    "corretta": "C",
    "suggerimento": "La teoria di Alderfer è nota con la sigla ERG: a quali parole inglesi corrispondono le lettere?",
    "spiegazione": "La **teoria ERG** di Alderfer riduce i bisogni di Maslow a tre categorie: **Existence** (esistenziali), **Relatedness** (relazionali) e **Growth** (di crescita).",
    "perOpzione": {
      "A": "Classificazione inventata, non riconducibile ad Alderfer.",
      "B": "Categorie prive di fondamento nella letteratura sulla motivazione.",
      "C": "Corretta: corrisponde alla teoria ERG."
    }
  },
  {
    "id": 46,
    "corretta": "B",
    "suggerimento": "Il groupthink (Janis) è un pregio o una patologia dei gruppi molto coesi?",
    "spiegazione": "Il **groupthink** (Irving Janis) è la tendenza dei gruppi molto **coesi** a cercare l'**unanimità** a scapito della valutazione critica delle alternative, sopprimendo il dissenso.",
    "perOpzione": {
      "A": "Descrive un vantaggio della diversità di competenze, non il groupthink.",
      "B": "Corretta: è la definizione di groupthink.",
      "C": "È il contrario: il groupthink scoraggia il dissenso anziché valorizzarlo."
    }
  },
  {
    "id": 47,
    "corretta": "B",
    "suggerimento": "Il ciclo di Deming è composto da quattro fasi in sequenza: pianificare, fare, verificare, ...?",
    "spiegazione": "Il **ciclo PDCA** (Deming) per il miglioramento continuo si articola in **Plan** (pianificare), **Do** (attuare), **Check** (verificare) e **Act** (agire per consolidare o correggere).",
    "perOpzione": {
      "A": "Sigla inventata.",
      "B": "Corretta: Plan, Do, Check, Act.",
      "C": "Sigla inventata."
    }
  },
  {
    "id": 48,
    "corretta": "A",
    "suggerimento": "Il PIAO è previsto dall'art. 6 del d.l. 80/2021: quale orizzonte temporale ha? E vale per tutte le PA?",
    "spiegazione": "Il **PIAO** (art. 6 d.l. 80/2021) ha **durata triennale** ed è **aggiornato annualmente** entro il 31 gennaio; è obbligatorio per le PA con **più di 50 dipendenti** (con modalità semplificate per le altre), escluse le scuole.",
    "perOpzione": {
      "A": "Corretta: durata triennale con aggiornamento annuale.",
      "B": "Non riguarda tutte le PA: sono escluse le istituzioni scolastiche e per le PA con meno di cinquanta dipendenti sono previste modalità semplificate.",
      "C": "È uno strumento stabile di programmazione integrata, non una misura transitoria legata al Covid."
    },
    "riferimenti": [
      {
        "normaId": "dl80_2021_art_6"
      }
    ]
  },
  {
    "id": 49,
    "corretta": "C",
    "suggerimento": "Mintzberg individua configurazioni tipiche: quante sono e quale forma è adatta all'innovazione?",
    "spiegazione": "Mintzberg distingue **cinque configurazioni**: **struttura semplice**, **burocrazia meccanica**, **burocrazia professionale**, **soluzione divisionale** e **adhocrazia**.",
    "perOpzione": {
      "A": "Numero e nomi errati: «mega-struttura» non è una configurazione di Mintzberg.",
      "B": "Falsa: il contributo di Mintzberg consiste proprio nell'individuare configurazioni tipiche.",
      "C": "Corretta: sono le cinque configurazioni di Mintzberg."
    }
  },
  {
    "id": 50,
    "corretta": "B",
    "suggerimento": "Le politiche pubbliche si basano su ipotesi causali certe o su previsioni in condizioni di incertezza?",
    "spiegazione": "L'attuazione di una **politica pubblica** avviene in condizioni di **incertezza**: le ipotesi causa-effetto possono rivelarsi errate e si possono produrre **effetti inattesi o perversi**; per questo servono monitoraggio e valutazione.",
    "perOpzione": {
      "A": "Falsa: le teorie causali delle politiche non sono mai certe e gli effetti non si realizzano «sempre».",
      "B": "Corretta: riconosce l'incertezza e la possibilità di effetti collaterali negativi.",
      "C": "Falsa: l'incertezza non è sempre misurabile oggettivamente."
    }
  },
  {
    "id": 51,
    "corretta": "A",
    "suggerimento": "Lindblom parla di «partisan mutual adjustment»: chi sono gli attori e come interagiscono?",
    "spiegazione": "Per l'**incrementalismo** di Lindblom la decisione nasce dall'**aggiustamento reciproco** tra una **pluralità di attori «partigiani»**, portatori di interessi diversi, che negoziano e si influenzano procedendo per piccoli passi.",
    "perOpzione": {
      "A": "Corretta: è il partisan mutual adjustment.",
      "B": "Gli attori sono numerosi e partigiani, non un numero limitato di attori neutrali.",
      "C": "Non si tratta di uno sviluppo tra attori istituzionali con competenze distinte, ma di una negoziazione tra interessi in competizione."
    }
  },
  {
    "id": 52,
    "corretta": "B",
    "suggerimento": "La negoziazione presuppone un voto o un accordo tra le parti?",
    "spiegazione": "La **negoziazione** è la modalità con cui attori con posizioni contrastanti cercano una **soluzione comune** che soddisfi almeno in parte ciascuno, tramite **accordi distributivi** (si spartisce una posta fissa) o **integrativi** (si crea valore per tutti).",
    "perOpzione": {
      "A": "Mescola negoziazione e voto a maggioranza, che è un meccanismo decisionale diverso.",
      "B": "Corretta: è la definizione di negoziazione.",
      "C": "Sovrappone la negoziazione al modello incrementale di Lindblom, che è una teoria della decisione, non la definizione di negoziazione."
    }
  },
  {
    "id": 53,
    "corretta": "A",
    "suggerimento": "Nell'Advocacy Coalition Framework di Sabatier le coalizioni sono stabili o occasionali? Competono o cooperano?",
    "spiegazione": "L'**Advocacy Coalition Framework** (Sabatier e Jenkins-Smith) spiega il mutamento delle politiche con la **competizione tra coalizioni** di attori che condividono credenze e valori, **stabili nel lungo periodo** (dieci anni o più) all'interno di un sottosistema.",
    "perOpzione": {
      "A": "Corretta: coalizioni coese, contrapposte tra loro e durature.",
      "B": "Le coalizioni non nascono in periodi eccezionali tra attori tradizionalmente contrapposti: si basano su credenze condivise e sono stabili.",
      "C": "Il modello si fonda sulla competizione tra coalizioni, non sulla cooperazione."
    }
  },
  {
    "id": 54,
    "corretta": "A",
    "suggerimento": "Per monitorare serve uno strumento di misura: quale, e coerente con cosa?",
    "spiegazione": "Il **monitoraggio** richiede un **sistema di indicatori** coerente con gli obiettivi e i contenuti della politica, per seguirne nel tempo realizzazioni e risultati.",
    "perOpzione": {
      "A": "Corretta: gli indicatori sono l'elemento fondamentale del monitoraggio.",
      "B": "Misurare solo gli input è riduttivo: il monitoraggio riguarda anche realizzazioni e risultati.",
      "C": "Quantificare e monetizzare costi e benefici è tipico dell'analisi costi-benefici, non del monitoraggio."
    }
  },
  {
    "id": 55,
    "corretta": "B",
    "suggerimento": "Il testo parla di problemi ancora da risolvere e di tecnologie «in arrivo»: cosa implica sullo stato attuale del settore?",
    "spiegazione": "Le domande *stated or implied* chiedono ciò che il testo **dice o lascia intendere**, senza aggiungere conoscenze esterne. Il testo parla di innovazioni **impending**, di investimenti in ricerca «**to solve current problems**» e di veicoli che **are being improved**: il lavoro è ancora in corso.",
    "perOpzione": {
      "A": "Il testo non menziona nuove leggi: i governi sono citati solo come investitori in ricerca e sviluppo.",
      "B": "Corretta: innovazioni imminenti, problemi attuali da risolvere e miglioramenti in corso implicano che resta molto lavoro da fare.",
      "C": "Il testo non parla di profitti delle aziende, solo dei loro investimenti."
    }
  },
  {
    "id": 56,
    "corretta": "A",
    "suggerimento": "In una domanda diretta con «how long», quale ausiliare serve e dove si colloca?",
    "spiegazione": "Nelle domande dirette l'ausiliare precede il soggetto: «**How long does it take** to get from A to B?» è la forma standard per chiedere la durata di un viaggio.",
    "perOpzione": {
      "A": "Corretta: forma interrogativa con l'ausiliare does e l'espressione it takes.",
      "B": "«Is wanted» non si usa per indicare il tempo necessario per uno spostamento.",
      "C": "Manca l'inversione con l'ausiliare: è la forma di una domanda indiretta, non di una diretta."
    }
  },
  {
    "id": 57,
    "corretta": "A",
    "suggerimento": "Per i mezzi di trasporto si dice «by car», «by bus»... e per andare a piedi?",
    "spiegazione": "Si dice «**on foot**»: è l'eccezione alla regola «by + mezzo di trasporto».",
    "perOpzione": {
      "A": "Corretta: «I go to the office on foot».",
      "B": "«By walking» non è l'espressione idiomatica per «a piedi».",
      "C": "«By feet» è errato: si usa il singolare con la preposizione on."
    }
  },
  {
    "id": 58,
    "corretta": "A",
    "suggerimento": "Pensa a collocazioni fisse: un breve viaggio, sfuggire al caldo, l'ora di punta, un ingorgo.",
    "spiegazione": "Collocazioni corrette: **short trip** (breve viaggio), **get away from** (allontanarsi da), **rush hour** (ora di punta), **traffic jam** (ingorgo).",
    "perOpzione": {
      "A": "Corretta: tutte e quattro le parole sono le collocazioni naturali.",
      "B": "«Relieve from the heat» è innaturale e «point hour» non esiste.",
      "C": "«Voyage» si usa per i viaggi lunghi (via mare), «exodus» e «motorcade» (corteo di auto) non si adattano al contesto."
    }
  },
  {
    "id": 59,
    "corretta": "C",
    "suggerimento": "Cosa fa un'auto per fermarsi in tempo? E come si chiama la parte posteriore che assorbe i piccoli urti?",
    "spiegazione": "**To brake** = frenare; **rear bumper** = paraurti posteriore.",
    "perOpzione": {
      "A": "«Halt» significa fermarsi, ma non è il verbo usato per la frenata; «sender» (mittente) non c'entra.",
      "B": "«Arrest» significa arrestare; «gear» (marcia) non è una parte che si danneggia in un tamponamento.",
      "C": "Corretta: «didn't brake in time» e «rear bumper»."
    }
  },
  {
    "id": 60,
    "corretta": "B",
    "suggerimento": "Quale phrasal verb si usa per indicare il totale di una spesa?",
    "spiegazione": "**To come to** + importo significa «ammontare a»: «our travel expenses came to more than £3000».",
    "perOpzione": {
      "A": "«Reach» è transitivo: «reached at» è errato.",
      "B": "Corretta: «came to» = ammontarono a.",
      "C": "«Arrive to» è errato (si dice arrive at/in) e non indica un importo."
    }
  }
];
