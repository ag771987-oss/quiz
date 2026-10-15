const DOMANDE = [
  {
    "id": 1,
    "materia": "Situazionale",
    "brano": "",
    "domanda": "Il tuo principale fornitore di componenti elettronici annuncia con un preavviso di 48 ore che non potrà consegnare il lotto critico per la produzione della prossima settimana.",
    "paginaPdf": 1,
    "opzioni": {
      "A": "Chiedi al fornitore una consegna parziale e riorganizzi il piano di produzione per concentrare il lavoro sulle linee non impattate, rimandando il resto",
      "B": "Convochi d’urgenza una task-force interfunzionale, analizzi il fabbisogno minimo, cerchi fornitori alternativi e avvii spedizioni expedited con monitoraggio giornaliero",
      "C": "Insisti con il fornitore e attendi nuove comunicazioni da lui, confidando in una rapida soluzione e informerai i clienti solo se i ritardi saranno inevitabili"
    }
  },
  {
    "id": 2,
    "materia": "Situazionale",
    "brano": "",
    "domanda": "Bisogna adottare politiche di lavoro flessibile; alcuni manager temono cali di performance",
    "paginaPdf": 1,
    "opzioni": {
      "A": "Rimandi la decisione aspettando “tempi più maturi” e normative di supporto.",
      "B": "Introduci lo smart-working solo al personale senior e valuti successivamente se estenderlo sulla base delle tue impressioni",
      "C": "Definisci KPI chiari, avvii una fase pilota con report di produttività, training su gestione a distanza e survey periodiche di engagement"
    }
  },
  {
    "id": 3,
    "materia": "Situazionale",
    "brano": "",
    "domanda": "La produzione è in ritardo, devi consegnare 3.000 pezzi entro fine mese",
    "paginaPdf": 1,
    "opzioni": {
      "A": "Sposti la scadenza con il cliente , confidando nella comprensione reciproca e nella capacità di recupero della linea",
      "B": "Introduci straordinari su tutti i turni senza rivedere il flusso di lavoro, visto che in precedenza le scadenze sono sempre state rispettate",
      "C": "Analizzi colli di bottiglia, riallinei layout, riorganizzi i turni e avvii manutenzione preventiva modulare per evitare fermi macchina"
    }
  },
  {
    "id": 4,
    "materia": "Situazionale",
    "brano": "",
    "domanda": "Come head of supply-chain di un’azienda di componentistica auto, scopri che un fornitore critico avrà ritardi di 3 settimane.",
    "paginaPdf": 1,
    "opzioni": {
      "A": "Ricordi al fornitore le penali contrattuali e lo inviti a dare a te priorità rispetto ad altri clienti, lasciando invariato il piano produttivo",
      "B": "Sposti la produzione sugli articoli con stock sufficiente, aspetti che il fornitore torni nei tempi e informi i clienti che possano essere maggiormente colpiti",
      "C": "Attivi subito un dual sourcing temporaneo, condividendo con R&D e qualità i requisiti minimi; informi i principali clienti dell’impatto possibile e del piano di mitigazione"
    }
  },
  {
    "id": 5,
    "materia": "Situazionale",
    "brano": "",
    "domanda": "Sei il/la responsabile HR di una grande azienda retail. I dati di clima evidenziano un calo di engagement fra gli addetti in negozio.",
    "paginaPdf": 1,
    "opzioni": {
      "A": "Incontri i direttori di negozio e chiedi loro di “spronare” le squadre e aumenti le visite presso i punti vendita",
      "B": "Implementi un piano di incentivi sulle vendite per aumentare motivazione e spirito competitivo visto che in passato, in altre esperienze, questa strategia ha funzionato",
      "C": "Organizzi incontri focus-group in più punti vendita per comprendere le cause e co-progettare iniziative correttive con il personale"
    }
  },
  {
    "id": 6,
    "materia": "Situazionale",
    "brano": "",
    "domanda": "Hai un collaboratore con grande potenziale ma poca fiducia in sé stesso",
    "paginaPdf": 1,
    "opzioni": {
      "A": "Gli assegni un ruolo importante confidando che l’esperienza lo aiuti a maturare leadership e solidità professionale",
      "B": "Organizzi incontri periodici per discutere i suoi progressi e crei un piano di sviluppo personalizzato",
      "C": "Lo lasci lavorare al suo ritmo, dandogli il tempo perché acquisisca sicurezza e si senta più a suo agio"
    }
  },
  {
    "id": 7,
    "materia": "Situazionale",
    "brano": "",
    "domanda": "Sei il/la direttore R&S di un’azienda farmaceutica. Un team propone di adottare una nuova piattaforma di laboratorio ancora in versione sperimentale.",
    "paginaPdf": 2,
    "opzioni": {
      "A": "Avvii uno studio pilota controllato, definendo metriche di sicurezza ed efficacia, e valuti i risultati prima di ogni estensione",
      "B": "Rimandi l'adozione finché la piattaforma non sia in versione definitiva, preferisci essere certo/a del suo funzionamento",
      "C": "Faciliti l’adozione immediata per guadagnare vantaggio competitivo prima dei concorrenti"
    }
  },
  {
    "id": 8,
    "materia": "Situazionale",
    "brano": "",
    "domanda": "Sei il/la responsabile di una PMI del settore agro-alimentare che ha appena ottenuto una grossa commessa dall’estero con tempi di consegna strettissimi. Il tuo direttore vendite propone di accorciare il controllo qualità per rispettare la deadline.",
    "paginaPdf": 2,
    "opzioni": {
      "A": "Riduci temporaneamente i controlli a campione, ma richiedi al cliente di firmare un accordo che riconosca il rischio aggiuntivo. Fai sopralluoghi periodici sulle linee per intervenire su eventuali ulteriori emergenze",
      "B": "Convochi subito un tavolo tecnico con qualità, produzione e vendite per riprogettare il flusso, mantenendo gli standard minimi indispensabili e, se necessario, negoziando con il cliente una consegna scaglionata",
      "C": "Accetti la proposta del direttore vendite e riduci i controlli qualità, confidando nell’esperienza del team di produzione e nella capacità dei responsabili dei team"
    }
  },
  {
    "id": 9,
    "materia": "Situazionale",
    "brano": "",
    "domanda": "Come plant manager, vieni a sapere che un operaio veterano salta sistematicamente alcune procedure di sicurezza “per fare prima”",
    "paginaPdf": 2,
    "opzioni": {
      "A": "Chiedi al caporeparto di monitorarlo più da vicino al fine di prevenire ulteriori trasgressioni confidando che questo comportamento scoraggi dalle deviazioni",
      "B": "Intervieni direttamente con l’operaio, ricordando le norme e programmando un coaching; poi condividi il caso in un safety-meeting per prevenire emulazioni",
      "C": "Invii una mail disciplinare e lo sospendi dal lavoro; al rientro organizzi un colloquio di approfondimento per comprendere le ragioni del comportamento"
    }
  },
  {
    "id": 10,
    "materia": "Situazionale",
    "brano": "",
    "domanda": "Sei il/la project manager di una software house. Un cliente strategico chiede di aggiungere una nuova funzionalità “non prevista” a due settimane dal go-live",
    "paginaPdf": 2,
    "opzioni": {
      "A": "Valuti con il tuo team l’impatto tecnico ed economico; se sostenibile, proponi al cliente un micro-rilascio post-go-live con un ordine di modifica formale",
      "B": "Accogli la richiesta e inserisci la nuova feature nel piano attuale, facendo straordinari per rispettare la data di rilascio",
      "C": "Chiedi di riconsiderare la modifica spiegando che non era nel perimetro contrattuale e inviti il cliente a discuterne in un futuro progetto, facendogli presenti i potenziali ritardi"
    }
  },
  {
    "id": 11,
    "materia": "Situazionale",
    "brano": "",
    "domanda": "Sei il/la CFO di una scale-up tech che sta cercando nuovi investitori. Un analista pubblica un report che mette in dubbio la sostenibilità del tuo modello di business.",
    "paginaPdf": 2,
    "opzioni": {
      "A": "Contatti l’analista chiedendo di ritirare il report, ricordando la possibilità di azioni legali per diffamazione",
      "B": "Minimizzi la portata del report, confidando che gli attuali investitori conoscano già la validità del modello e si fidino dato che tu non hai alcun dubbio su di esso",
      "C": "Prepari con investor-relations una nota ufficiale che spiega dati e ipotesi, offri un webinar Q&A e inviti l’analista a un confronto aperto sui numeri"
    }
  },
  {
    "id": 12,
    "materia": "Situazionale",
    "brano": "",
    "domanda": "Sei il/la responsabile marketing di una catena di ristorazione; un tuo influencer partner pubblica online un commento offensivo che coinvolge indirettamente il brand.",
    "paginaPdf": 2,
    "opzioni": {
      "A": "Per evitare di amplificare la polemica decidi di ignorare l’accaduto. Sai che a volte più si tenta di difendersi più è facile venire attaccati",
      "B": "Risolvi il contratto con l’influencer senza comunicare pubblicamente la ragione certo che la cosa si saprà e che ci sarà una ricaduta positiva sul brand",
      "C": "Contatti subito l’influencer, chiedi la rimozione del commento e pubblichi una nota di distanziamento dai contenuti offensivi, ribadendo i valori del brand"
    }
  },
  {
    "id": 13,
    "materia": "Ragionamento logico",
    "brano": "",
    "domanda": "Quale figura completa coerentemente la sequenza logica?",
    "immagine": true,
    "paginaPdf": 2,
    "opzioni": {
      "A": "Fig. 4",
      "B": "Fig. 2",
      "C": "Fig. 1",
      "D": "Fig. 3",
      "E": "Fig. 5"
    }
  },
  {
    "id": 14,
    "materia": "Ragionamento logico",
    "brano": "",
    "domanda": "Quale figura completa coerentemente la sequenza logica?",
    "immagine": true,
    "paginaPdf": 3,
    "opzioni": {
      "A": "Fig. 4",
      "B": "Fig. 1",
      "C": "Fig. 3",
      "D": "Fig. 2",
      "E": "Fig. 5"
    }
  },
  {
    "id": 15,
    "materia": "Ragionamento logico",
    "brano": "",
    "domanda": "Quale figura completa coerentemente la sequenza logica?",
    "immagine": true,
    "paginaPdf": 3,
    "opzioni": {
      "A": "Fig. 1",
      "B": "Fig. 5",
      "C": "Fig. 3",
      "D": "Fig. 4",
      "E": "Fig. 2"
    }
  },
  {
    "id": 16,
    "materia": "Ragionamento logico",
    "brano": "",
    "domanda": "Quale figura completa coerentemente la serie?",
    "immagine": true,
    "paginaPdf": 4,
    "opzioni": {
      "A": "Figura 2",
      "B": "Figura 5",
      "C": "Figura 1",
      "D": "Figura 4",
      "E": "Figura 3"
    }
  },
  {
    "id": 17,
    "materia": "Ragionamento logico",
    "brano": "",
    "domanda": "Quale figura completa coerentemente la serie?",
    "immagine": true,
    "paginaPdf": 4,
    "opzioni": {
      "A": "Figura 2",
      "B": "Figura 5",
      "C": "Figura 1",
      "D": "Figura 4",
      "E": "Figura 3"
    }
  },
  {
    "id": 18,
    "materia": "Ragionamento logico",
    "brano": "",
    "domanda": "Quale figura completa coerentemente la serie?",
    "immagine": true,
    "paginaPdf": 5,
    "opzioni": {
      "A": "Figura 1",
      "B": "Figura 2",
      "C": "Figura 5",
      "D": "Figura 3",
      "E": "Figura 4"
    }
  },
  {
    "id": 19,
    "materia": "Comprensione del testo",
    "istruzioni": "Questo brano viene ripetuto per 3 domande che presentano 4 alternative di risposta ciascuna. Il compito è di leggere attentamente ciascun brano e le domande poste, decidendo, tra le alternative presenti, quale sia quella corretta, facendo riferimento esclusivamente alle informazioni contenute nel brano o deducibili da esse, senza attingere alle proprie conoscenze relativamente agli argomenti di cui trattano i brani. Vi è sempre una e una sola risposta esatta tra quelle proposte.",
    "brano": "Un altro modello tacito concettualizza l’infinito come qualcosa di inesauribile. Compare per esempio nelle risposte fornite da studenti che frequentano la scuola secondaria di secondo grado (Fischbein, 2001), che risolvono il seguente problema: “sia C un punto arbitrario sul segmento AB. Dividiamo il segmento AB a metà e continuiamo a dividere a metà ogni segmento così ottenuto: arriveremo a una situazione tale che uno dei punti di divisione coincida con il punto C?”. La maggioranza degli studenti fornisce risposte affermative. Nell’indagine presentata da Fischbein, tutti gli studenti conoscevano i numeri razionali e irrazionali, tuttavia, non sembra che abbiano tenuto conto del fatto che un numero C irrazionale non possa essere raggiunto da una tale divisione e che, contemporaneamente, non tutti i punti razionali possono essere raggiunti. Secondo Fischbein, il motivo di tali risposte risiede nel fatto che l’infinito appare intuitivamente come qualcosa di equivalente all’inesauribile, cioè, se si continuasse il processo di divisione all’infinito, tutti i punti potrebbero essere raggiunti. Questa interpretazione di infinito porta, intuitivamente, a supporre l’esistenza un solo tipo di infinito, infatti un infinito che equivale all’inesauribile non può essere superato da un infinito più ricco.",
    "domanda": "In base alle indicazioni fornite nel brano, qual è la risposta corretta alla domanda posta nel problema?",
    "paginaPdf": 5,
    "opzioni": {
      "A": "Sì",
      "B": "Solo se il punto C è raggiungibile con il sistema di divisione usato",
      "C": "No",
      "D": "Sì, purché il punto C corrisponda a un numero razionale"
    }
  },
  {
    "id": 20,
    "materia": "Comprensione del testo",
    "istruzioni": "Questo brano viene ripetuto per 3 domande che presentano 4 alternative di risposta ciascuna. Il compito è di leggere attentamente ciascun brano e le domande poste, decidendo, tra le alternative presenti, quale sia quella corretta, facendo riferimento esclusivamente alle informazioni contenute nel brano o deducibili da esse, senza attingere alle proprie conoscenze relativamente agli argomenti di cui trattano i brani. Vi è sempre una e una sola risposta esatta tra quelle proposte.",
    "brano": "Un altro modello tacito concettualizza l’infinito come qualcosa di inesauribile. Compare per esempio nelle risposte fornite da studenti che frequentano la scuola secondaria di secondo grado (Fischbein, 2001), che risolvono il seguente problema: “sia C un punto arbitrario sul segmento AB. Dividiamo il segmento AB a metà e continuiamo a dividere a metà ogni segmento così ottenuto: arriveremo a una situazione tale che uno dei punti di divisione coincida con il punto C?”. La maggioranza degli studenti fornisce risposte affermative. Nell’indagine presentata da Fischbein, tutti gli studenti conoscevano i numeri razionali e irrazionali, tuttavia, non sembra che abbiano tenuto conto del fatto che un numero C irrazionale non possa essere raggiunto da una tale divisione e che, contemporaneamente, non tutti i punti razionali possono essere raggiunti. Secondo Fischbein, il motivo di tali risposte risiede nel fatto che l’infinito appare intuitivamente come qualcosa di equivalente all’inesauribile, cioè, se si continuasse il processo di divisione all’infinito, tutti i punti potrebbero essere raggiunti. Questa interpretazione di infinito porta, intuitivamente, a supporre l’esistenza un solo tipo di infinito, infatti un infinito che equivale all’inesauribile non può essere superato da un infinito più ricco.",
    "domanda": "In che modo possono essere sintetizzate le opinioni di Fischbein così come riportate nel brano?",
    "paginaPdf": 5,
    "opzioni": {
      "A": "La problematicità dei numeri irrazionali viene spesso sottovalutata nella didattica",
      "B": "La distinzione tra numeri razionali e numeri irrazionali non viene sufficientemente trattata nel percorso formativo",
      "C": "Gli studenti hanno difficoltà nell’inquadrare l’esistenza di un unico tipo di infinito",
      "D": "I modelli taciti possono fuorviare anche gli studenti che conoscono appropriate definizioni formali"
    }
  },
  {
    "id": 21,
    "materia": "Comprensione del testo",
    "istruzioni": "Questo brano viene ripetuto per 3 domande che presentano 4 alternative di risposta ciascuna. Il compito è di leggere attentamente ciascun brano e le domande poste, decidendo, tra le alternative presenti, quale sia quella corretta, facendo riferimento esclusivamente alle informazioni contenute nel brano o deducibili da esse, senza attingere alle proprie conoscenze relativamente agli argomenti di cui trattano i brani. Vi è sempre una e una sola risposta esatta tra quelle proposte.",
    "brano": "Un altro modello tacito concettualizza l’infinito come qualcosa di inesauribile. Compare per esempio nelle risposte fornite da studenti che frequentano la scuola secondaria di secondo grado (Fischbein, 2001), che risolvono il seguente problema: “sia C un punto arbitrario sul segmento AB. Dividiamo il segmento AB a metà e continuiamo a dividere a metà ogni segmento così ottenuto: arriveremo a una situazione tale che uno dei punti di divisione coincida con il punto C?”. La maggioranza degli studenti fornisce risposte affermative. Nell’indagine presentata da Fischbein, tutti gli studenti conoscevano i numeri razionali e irrazionali, tuttavia, non sembra che abbiano tenuto conto del fatto che un numero C irrazionale non possa essere raggiunto da una tale divisione e che, contemporaneamente, non tutti i punti razionali possono essere raggiunti. Secondo Fischbein, il motivo di tali risposte risiede nel fatto che l’infinito appare intuitivamente come qualcosa di equivalente all’inesauribile, cioè, se si continuasse il processo di divisione all’infinito, tutti i punti potrebbero essere raggiunti. Questa interpretazione di infinito porta, intuitivamente, a supporre l’esistenza un solo tipo di infinito, infatti un infinito che equivale all’inesauribile non può essere superato da un infinito più ricco.",
    "domanda": "Nella prima frase del brano, che significato ha verosimilmente l’aggettivo “tacito”?",
    "paginaPdf": 6,
    "opzioni": {
      "A": "Silenzioso, non dichiarabile",
      "B": "Assimilato, compreso",
      "C": "Implicito, inconscio",
      "D": "Sconsigliato, inadatto"
    }
  },
  {
    "id": 22,
    "materia": "Comprensione del testo",
    "istruzioni": "Questo brano viene ripetuto per 3 domande che presentano 4 alternative di risposta ciascuna. Il compito è di leggere attentamente ciascun brano e le domande poste, decidendo, tra le alternative presenti, quale sia quella corretta, facendo riferimento esclusivamente alle informazioni contenute nel brano o deducibili da esse, senza attingere alle proprie conoscenze relativamente agli argomenti di cui trattano i brani. Vi è sempre una e una sola risposta esatta tra quelle proposte.",
    "brano": "Per circa vent’anni, Tim Friede si è fatto mordere da più di 200 serpenti. Non si tratta di uno scienziato: Tim, ex meccanico, è un appassionato di serpenti, a tal punto che non solo si è lasciato mordere per più di 200 volte, ma si è perfino auto-iniettato del veleno nel tentativo di diventarne immune. Sembrerebbe che abbia iniziato dal morso di un cobra egiziano, serpente altamente velenoso, per poi lasciarsi mordere poco dopo da un cobra monocolo, altro serpente altamente velenoso. Dopo aver trascorso quattro giorni in coma, senza aver riportato importanti conseguenze, ha così dato il via alla sua “collezione di morsi” e alla conseguente produzione di anticorpi che lo hanno reso immune al veleno di tantissimi serpenti, tra cui i serpenti corallo, i serpenti a sonagli e il mamba nero. Il suo sangue oggi è oggetto di studio di numerose ricerche in quanto potrebbe rappresentare la chiave per la produzione di un antidoto universale: un’interessante alternativa al classico processo di sviluppo degli antiveleni basato sulla mungitura dei serpenti e la conseguente raccolta degli anticorpi prodotti dalle specie di animali ai quali veniva iniettato il veleno. L'antidoto universale prodotto con gli anticorpi presenti nel sangue di Tim, tuttavia, non è attualmente sicuro e pronto per la somministrazione.",
    "domanda": "In base alle informazioni contenute esclusivamente nel brano proposto, è corretto affermare che Tim Friede:",
    "paginaPdf": 6,
    "opzioni": {
      "A": "All’età di vent’anni ha dato il via alla sua “collezione di morsi”",
      "B": "È un ex meccanico, ormai in pensione, originario della California",
      "C": "Si è fatto mordere da più di 200 serpenti ed oggi il suo sangue è oggetto di studio",
      "D": "È uno scienziato appassionato di serpenti, originario dell’Ohio"
    }
  },
  {
    "id": 23,
    "materia": "Comprensione del testo",
    "istruzioni": "Questo brano viene ripetuto per 3 domande che presentano 4 alternative di risposta ciascuna. Il compito è di leggere attentamente ciascun brano e le domande poste, decidendo, tra le alternative presenti, quale sia quella corretta, facendo riferimento esclusivamente alle informazioni contenute nel brano o deducibili da esse, senza attingere alle proprie conoscenze relativamente agli argomenti di cui trattano i brani. Vi è sempre una e una sola risposta esatta tra quelle proposte.",
    "brano": "Per circa vent’anni, Tim Friede si è fatto mordere da più di 200 serpenti. Non si tratta di uno scienziato: Tim, ex meccanico, è un appassionato di serpenti, a tal punto che non solo si è lasciato mordere per più di 200 volte, ma si è perfino auto-iniettato del veleno nel tentativo di diventarne immune. Sembrerebbe che abbia iniziato dal morso di un cobra egiziano, serpente altamente velenoso, per poi lasciarsi mordere poco dopo da un cobra monocolo, altro serpente altamente velenoso. Dopo aver trascorso quattro giorni in coma, senza aver riportato importanti conseguenze, ha così dato il via alla sua “collezione di morsi” e alla conseguente produzione di anticorpi che lo hanno reso immune al veleno di tantissimi serpenti, tra cui i serpenti corallo, i serpenti a sonagli e il mamba nero. Il suo sangue oggi è oggetto di studio di numerose ricerche in quanto potrebbe rappresentare la chiave per la produzione di un antidoto universale: un’interessante alternativa al classico processo di sviluppo degli antiveleni basato sulla mungitura dei serpenti e la conseguente raccolta degli anticorpi prodotti dalle specie di animali ai quali veniva iniettato il veleno. L'antidoto universale prodotto con gli anticorpi presenti nel sangue di Tim, tuttavia, non è attualmente sicuro e pronto per la somministrazione.",
    "domanda": "In base alle informazioni contenute esclusivamente nel brano proposto, è corretto affermare che Tim Friede:",
    "paginaPdf": 7,
    "opzioni": {
      "A": "Possiede diverse specie di cobra",
      "B": "Non è immune al veleno del mamba nero",
      "C": "È stato morso prima da una vipera, poi da un cobra egiziano ed infine da un cobra monocolo",
      "D": "Si è fatto mordere, tra l’altro, da un cobra monocolo"
    }
  },
  {
    "id": 24,
    "materia": "Comprensione del testo",
    "istruzioni": "Questo brano viene ripetuto per 3 domande che presentano 4 alternative di risposta ciascuna. Il compito è di leggere attentamente ciascun brano e le domande poste, decidendo, tra le alternative presenti, quale sia quella corretta, facendo riferimento esclusivamente alle informazioni contenute nel brano o deducibili da esse, senza attingere alle proprie conoscenze relativamente agli argomenti di cui trattano i brani. Vi è sempre una e una sola risposta esatta tra quelle proposte.",
    "brano": "Per circa vent’anni, Tim Friede si è fatto mordere da più di 200 serpenti. Non si tratta di uno scienziato: Tim, ex meccanico, è un appassionato di serpenti, a tal punto che non solo si è lasciato mordere per più di 200 volte, ma si è perfino auto-iniettato del veleno nel tentativo di diventarne immune. Sembrerebbe che abbia iniziato dal morso di un cobra egiziano, serpente altamente velenoso, per poi lasciarsi mordere poco dopo da un cobra monocolo, altro serpente altamente velenoso. Dopo aver trascorso quattro giorni in coma, senza aver riportato importanti conseguenze, ha così dato il via alla sua “collezione di morsi” e alla conseguente produzione di anticorpi che lo hanno reso immune al veleno di tantissimi serpenti, tra cui i serpenti corallo, i serpenti a sonagli e il mamba nero. Il suo sangue oggi è oggetto di studio di numerose ricerche in quanto potrebbe rappresentare la chiave per la produzione di un antidoto universale: un’interessante alternativa al classico processo di sviluppo degli antiveleni basato sulla mungitura dei serpenti e la conseguente raccolta degli anticorpi prodotti dalle specie di animali ai quali veniva iniettato il veleno. L'antidoto universale prodotto con gli anticorpi presenti nel sangue di Tim, tuttavia, non è attualmente sicuro e pronto per la somministrazione.",
    "domanda": "In base alle informazioni contenute esclusivamente nel brano proposto, è corretto affermare che:",
    "paginaPdf": 7,
    "opzioni": {
      "A": "Il cobra egiziano è più velenoso del mamba nero",
      "B": "Il veleno del cobra monocolo ha salvato Tim dal veleno del cobra egiziano",
      "C": "Il cobra egiziano e il cobra monocolo sono serpenti altamente velenosi",
      "D": "Il cobra egiziano è più velenoso del cobra monocolo"
    }
  },
  {
    "id": 25,
    "materia": "Diritto",
    "brano": "",
    "domanda": "I decreti legislativi adottati dal Governo ai sensi dell’art. 76 Cost., devono indicare nel preambolo:",
    "paginaPdf": 7,
    "opzioni": {
      "A": "la legge di delegazione, la deliberazione del Consiglio dei ministri e gli altri adempimenti del procedimento prescritti dalla legge di delegazione",
      "B": "le circostanze straordinarie di necessità ed urgenza che ne giustificano l’adozione e l’avvenuta deliberazione del Consiglio dei ministri",
      "C": "la legge di delegazione, la deliberazione del Consiglio dei ministri e la controfirma ministeriale"
    }
  },
  {
    "id": 26,
    "materia": "Diritto",
    "brano": "",
    "domanda": "Chi può fare richiesta di referendum costituzionale?",
    "paginaPdf": 8,
    "opzioni": {
      "A": "Un quinto dei membri di una Camera o cinquantamila elettori o sei Consigli regionali",
      "B": "Un terzo dei membri di una Camera o cinquantamila elettori o cinque Consigli regionali",
      "C": "Un quinto dei membri di una Camera o cinquecentomila elettori o cinque Consigli regionali"
    }
  },
  {
    "id": 27,
    "materia": "Diritto",
    "brano": "",
    "domanda": "Ai sensi dell’art. 117 Cost., la materia «ordinamento civile» è di competenza:",
    "paginaPdf": 8,
    "opzioni": {
      "A": "residuale regionale",
      "B": "esclusiva statale",
      "C": "concorrente"
    }
  },
  {
    "id": 28,
    "materia": "Diritto",
    "brano": "",
    "domanda": "Il principio di buon andamento è rispettato quando:",
    "paginaPdf": 8,
    "opzioni": {
      "A": "la pubblica amministrazione si organizza e agisce secondo criteri di economicità, efficienza ed efficacia",
      "B": "gli utenti dei servizi pubblici agiscono collettivamente in giudizio a tutela dei loro interessi",
      "C": "i beni pubblici vengono lasciati alla fruizione collettiva della generalità dei consociati"
    }
  },
  {
    "id": 29,
    "materia": "Diritto",
    "brano": "",
    "domanda": "Sono enti pubblici economici gli enti che:",
    "paginaPdf": 8,
    "opzioni": {
      "A": "erogano finanziamenti alle imprese in stato di insolvenza o di dissesto",
      "B": "dipendono funzionalmente dal Ministero dell'Economia e delle Finanze",
      "C": "hanno ad oggetto esclusivo o principale l'esercizio di un'attività d'impresa"
    }
  },
  {
    "id": 30,
    "materia": "Diritto",
    "brano": "",
    "domanda": "Per autorità amministrative indipendenti si intendono:",
    "paginaPdf": 8,
    "opzioni": {
      "A": "le entità private che vengono preposte all'esercizio di funzioni amministrative in ragione dell'elevato grado di competenza specialistica richiesto",
      "B": "le amministrazioni pubbliche che esercitano le loro funzioni in maniera indipendente dall'indirizzo politico-amministrativo del Governo",
      "C": "le agenzie del Governo di cui agli articoli 8 e 9 del d.lgs. n. 300 del 1999 cui sono attribuite funzioni di carattere tecnico-operativo di interesse nazionale"
    }
  },
  {
    "id": 31,
    "materia": "Diritto",
    "brano": "",
    "domanda": "Il presidente della Provincia:",
    "paginaPdf": 8,
    "opzioni": {
      "A": "è eletto dai cittadini a suffragio universale diretto con sistema elettorale a due turni con ballottaggio tra i due candidati che hanno ottenuto il maggior numero di voti",
      "B": "è scelto dal Prefetto entro una terna di nomi di eminenti personalità proposta, a maggioranza, dai sindaci dei Comuni della Provincia",
      "C": "è eletto dai sindaci e dai consiglieri dei Comuni della Provincia tra i sindaci dei Comuni della Provincia"
    }
  },
  {
    "id": 32,
    "materia": "Diritto",
    "brano": "",
    "domanda": "Il responsabile della prevenzione della corruzione e della trasparenza:",
    "paginaPdf": 8,
    "opzioni": {
      "A": "non ha competenza né per la vigilanza né per le conseguenti segnalazioni all'ANAC in materia di inconferibilità e incompatibilità degli incarichi dirigenziali all'interno dell'amministrazione di appartenenza",
      "B": "può incorrere in responsabilità dirigenziale e disciplinare, qualora vengano commessi, all'interno dell'amministrazione di appartenenza, reati di corruzione accertati con sentenza passata in giudicato",
      "C": "coincide di diritto, per la rilevanza strategia dei compiti ad esso attribuiti, con l'organo di indirizzo politico amministrativo posto al vertice di ciascuna amministrazione pubblica o con il relativo presidente, se tale organo è collegiale"
    }
  },
  {
    "id": 33,
    "materia": "Diritto",
    "brano": "",
    "domanda": "Qualora la proposta legislativa giunga dalla Commissione europea, per il raggiungimento della maggioranza qualificata in sede di Consiglio dell’Unione è necessario il voto favorevole di almeno:",
    "paginaPdf": 8,
    "opzioni": {
      "A": "il 55% degli Stati membri che rappresentino almeno il 65% della popolazione residente dell’Unione",
      "B": "il 72% degli Stati membri che rappresentino almeno il 65% della popolazione residente dell’Unione",
      "C": "il voto favorevole di almeno il 75% degli Stati membri"
    }
  },
  {
    "id": 34,
    "materia": "Diritto",
    "brano": "",
    "domanda": "Nell’azione in carenza di cui all’art. 265 TFUE, i legittimati attivi possono contestare i seguenti vizi:",
    "paginaPdf": 8,
    "opzioni": {
      "A": "violazione del principio di attribuzione",
      "B": "violazione dei trattati",
      "C": "violazione del principio di sussidiarietà"
    }
  },
  {
    "id": 35,
    "materia": "Diritto",
    "brano": "",
    "domanda": "La celebre sentenza Costa c. Enel ha sancito la prevalenza del diritto unionale sul diritto nazionale degli Stati membri. Nell’affermare questo principio i giudici di Lussemburgo si sono fondati:",
    "paginaPdf": 9,
    "opzioni": {
      "A": "sulle tradizioni costituzionali comuni degli Stati membri",
      "B": "sull’esigenza di assicurare l’effettività del diritto unionale",
      "C": "su di una dichiarazione allegata ai trattati istitutivi"
    }
  },
  {
    "id": 36,
    "materia": "Economia",
    "brano": "",
    "domanda": "L’inclinazione della retta di bilancio dipende da:",
    "paginaPdf": 9,
    "opzioni": {
      "A": "il rapporto fra il reddito monetario del consumatore ed il prezzo del bene che desidera consumare",
      "B": "il rapporto fra i prezzi dei due beni",
      "C": "il rapporto fra le utilità marginali dei due beni"
    }
  },
  {
    "id": 37,
    "materia": "Economia",
    "brano": "",
    "domanda": "In un mercato di monopolio, la discriminazione di prezzo di secondo grado:",
    "paginaPdf": 9,
    "opzioni": {
      "A": "viene effettuata dal monopolista che applica tariffe orarie al bene venduto",
      "B": "viene effettuata dal monopolista che applica un prezzo diverso a seconda della tipologia di consumatore",
      "C": "viene effettuata dal monopolista che può stabilire dei prezzi di vendita differenti a seconda della quantità di acquisto di un bene"
    }
  },
  {
    "id": 38,
    "materia": "Economia",
    "brano": "",
    "domanda": "L’indice dei prezzi al consumo (IPC) è:",
    "paginaPdf": 9,
    "opzioni": {
      "A": "una media semplice dei prezzi di produzione di un certo paniere (o insieme) di beni considerati rappresentativi del consumo delle famiglie",
      "B": "una media ponderata dei prezzi di un certo paniere (o insieme) di beni considerati rappresentativi del consumo delle famiglie",
      "C": "una media semplice dei prezzi di un certo paniere (o insieme) di beni considerati rappresentativi del consumo delle famiglie"
    }
  },
  {
    "id": 39,
    "materia": "Economia",
    "brano": "",
    "domanda": "Nel modello AD-AS la curva di domanda aggregata rappresenta la relazione che sussiste:",
    "paginaPdf": 9,
    "opzioni": {
      "A": "tra il livello della domanda aggregata e il livello generale dei prezzi",
      "B": "tra il livello della domanda aggregata e il tasso di interesse nominale",
      "C": "tra il livello della domanda aggregata e il tasso di interesse reale"
    }
  },
  {
    "id": 40,
    "materia": "Economia",
    "brano": "",
    "domanda": "La curva IS ha un’inclinazione negativa perché un aumento del tasso di interesse determina:",
    "paginaPdf": 9,
    "opzioni": {
      "A": "una diminuzione della domanda di beni di consumo da parte delle famiglie",
      "B": "una diminuzione della tassazione e del reddito disponibile da parte delle famiglie",
      "C": "una diminuzione della domanda di investimenti delle imprese e delle esportazioni nette"
    }
  },
  {
    "id": 41,
    "materia": "Economia",
    "brano": "",
    "domanda": "Secondo la teoria dello skill-biased technological change:",
    "paginaPdf": 9,
    "opzioni": {
      "A": "il progresso tecnico penalizza i lavoratori a più elevato livello di abilità (skilled)",
      "B": "il progresso tecnico penalizza i lavoratori a basso livello di abilità (unskilled)",
      "C": "il progresso tecnico è complementare ai lavori a basso contenuto di abilità e sostituto di quelli ad alto contenuto di abilità"
    }
  },
  {
    "id": 42,
    "materia": "Contabilità pubblica",
    "brano": "",
    "domanda": "Il costo primo include:",
    "paginaPdf": 9,
    "opzioni": {
      "A": "i soli costi diretti",
      "B": "i costi diretti e i costi indiretti",
      "C": "i soli costi del personale"
    }
  },
  {
    "id": 43,
    "materia": "Contabilità pubblica",
    "brano": "",
    "domanda": "Il ciclo finanziario delle entrate si compone delle seguenti fasi:",
    "paginaPdf": 9,
    "opzioni": {
      "A": "previsione, ingiunzione, riscossione, liquidazione",
      "B": "previsione, obbligazione, impegno, pagamento",
      "C": "previsione, accertamento, riscossione, versamento"
    }
  },
  {
    "id": 44,
    "materia": "Organizzazione",
    "brano": "",
    "domanda": "Tra gli studiosi più discussi e dibattuti in campo manageriale, vi è Herbert Simon i cui contributi allo studio delle organizzazioni sono utili per comprendere le dinamiche di funzionamento delle organizzazioni complesse, quali sono le amministrazioni pubbliche.\nIl contributo teorico di Herbert Simon viene associato, in maniera più diretta:",
    "paginaPdf": 10,
    "opzioni": {
      "A": "alla teoria della razionalità limitata dei decisori organizzativi",
      "B": "alla teoria del new public management",
      "C": "alla teoria dell’organizzazione scientifica del lavoro"
    }
  },
  {
    "id": 45,
    "materia": "Organizzazione",
    "brano": "",
    "domanda": "Tra le teorie più discusse e dibattute in campo manageriale, utili per comprendere le dinamiche di funzionamento delle organizzazioni complesse, quali sono le amministrazioni pubbliche, vi è anche la Teoria della Dipendenza dalle Risorse. Tale teoria si può collegare prevalentemente ai contributi dei seguenti autori:",
    "paginaPdf": 10,
    "opzioni": {
      "A": "Pfeffer e Salancik",
      "B": "Mayo e Williamson",
      "C": "Kahneman e Butera"
    }
  },
  {
    "id": 46,
    "materia": "Organizzazione",
    "brano": "",
    "domanda": "Lo studio e l’analisi delle determinanti del comportamento organizzativo rappresentano elementi essenziali per comprendere, in modo utile, le dinamiche di funzionamento delle organizzazioni complesse, quali sono le amministrazioni pubbliche. In particolare, un passaggio molto importante riguarda lo studio della motivazione. Tra le teorie più discusse e dibattute in campo manageriale, vi è quella di Herzberg che può associarsi alla teoria",
    "paginaPdf": 10,
    "opzioni": {
      "A": "dei presidi neo-istituzionali",
      "B": "dei fattori igienici e dei fattori motivanti",
      "C": "dei volumi contingenti e strutturali"
    }
  },
  {
    "id": 47,
    "materia": "Organizzazione",
    "brano": "",
    "domanda": "Lo studio e l’analisi delle determinanti del comportamento organizzativo rappresentano elementi essenziali per comprendere, in modo utile, le dinamiche di funzionamento delle organizzazioni complesse, quali sono le amministrazioni pubbliche. In particolare, un passaggio molto importante riguarda lo studio del burnout che può tipicamente intendersi come:",
    "paginaPdf": 10,
    "opzioni": {
      "A": "la reazione prolungata dell’individuo a fattori cronici di stress emotivo e interattivo",
      "B": "la reazione prolungata dell’individuo a condizioni di costante benessere organizzativo",
      "C": "il ridisegno dei processi organizzativi in una prospettiva di organizzazione snella"
    }
  },
  {
    "id": 48,
    "materia": "Organizzazione",
    "brano": "",
    "domanda": "Lo studio e l’analisi dei meccanismi di coordinamento delle attività e di gestione delle interdipendenze rappresentano elementi fondamentali per la comprensione delle dinamiche di funzionamento delle organizzazioni complesse, quali sono le amministrazioni pubbliche. In tal senso, il meccanismo di coordinamento delle attività rappresentato dalla standardizzazione delle procedure e delle attività risulta tipicamente più efficace quando le stesse attività sono caratterizzate da:",
    "paginaPdf": 10,
    "opzioni": {
      "A": "elevata imprevedibilità, alta complessità e numerosissime eccezioni",
      "B": "elevata prevedibilità e assenza di eccezioni",
      "C": "alta complessità e numero di eccezioni molto elevato"
    }
  },
  {
    "id": 49,
    "materia": "Informatica",
    "brano": "",
    "domanda": "L’Agenzia per l’Italia Digitale (AgID) è stata istituita nel",
    "paginaPdf": 10,
    "opzioni": {
      "A": "2012",
      "B": "2004",
      "C": "2021"
    }
  },
  {
    "id": 50,
    "materia": "Politiche pubbliche",
    "brano": "",
    "domanda": "Le politiche redistributive:",
    "paginaPdf": 10,
    "opzioni": {
      "A": "riequilibrano le risorse all'interno della società sottraendole a certi gruppi sociali e attribuendole ad altri",
      "B": "assegnano risorse a favore di specifiche categorie di persone o gruppi sociali a scapito di altri",
      "C": "riequilibrano il bilancio attraverso manovre specifiche che incidono su tutta la popolazione a favore di alcuni gruppi sociali"
    }
  },
  {
    "id": 51,
    "materia": "Politiche pubbliche",
    "brano": "",
    "domanda": "Secondo la teoria dei flussi multipli di Kingdon (1964) un problema pubblico ottiene l’attenzione dei policy makers quando:",
    "paginaPdf": 10,
    "opzioni": {
      "A": "le comunità epistemiche sviluppano nuove tecniche di analisi e implementazione di politiche pubbliche",
      "B": "tre flussi tra loro interdipendenti si trovano a convergere: il flusso dei problemi, il flusso delle politiche e il flusso della politica",
      "C": "avvengono mutamenti radicali nella sfera della politica"
    }
  },
  {
    "id": 52,
    "materia": "Politiche pubbliche",
    "brano": "",
    "domanda": "Un indicatore utile per valutare l’efficienza di una politica pubblica è costituito:",
    "paginaPdf": 11,
    "opzioni": {
      "A": "dal rapporto (O/I) fra output e input della politica, moltiplicato per un coefficiente che misuri lo scostamento da uno standard prestabilito di buona qualità",
      "B": "dalla quantificazione degli output prodotti dalla misura, poiché l’efficienza riguarda esclusivamente la sfera della produzione degli effetti attesi di una politica pubblica",
      "C": "dalla capacità di una politica pubblica di raggiungere i risultati attesi prefissati, dati i mezzi disponibili"
    }
  },
  {
    "id": 53,
    "materia": "Politiche pubbliche",
    "brano": "",
    "domanda": "L’approccio top-down all’implementazione di una politica pubblica indica:",
    "paginaPdf": 11,
    "opzioni": {
      "A": "un processo di attuazione di politiche pubbliche che parte dai burocrati delle amministrazioni pubbliche",
      "B": "un processo di attuazione di politiche pubbliche che parte dall’operare di gruppi di pressione organizzati",
      "C": "un processo di attuazione di politiche pubbliche che parte dai livelli gerarchici più elevati"
    }
  },
  {
    "id": 54,
    "materia": "Politiche pubbliche",
    "brano": "",
    "domanda": "La valutazione economica di una politica pubblica presenta come obiettivi:",
    "paginaPdf": 11,
    "opzioni": {
      "A": "l’efficienza, l’efficacia e l’equità",
      "B": "la stima dei benefici attesi dall’attuazione di una politica pubblica, entro un predeterminato periodo di tempo",
      "C": "la stima dello scostamento fra costi previsti e costi effettivamente sostenuti"
    }
  },
  {
    "id": 55,
    "materia": "Inglese",
    "brano": "",
    "domanda": "The Finnish and Spanish proposals were excellent, but the Swiss concept was _____ the best.",
    "paginaPdf": 11,
    "opzioni": {
      "A": "at all",
      "B": "by far",
      "C": "in outstanding"
    }
  },
  {
    "id": 56,
    "materia": "Inglese",
    "brano": "",
    "domanda": "The spending review required all the ministries to cut ______ on new projects.",
    "paginaPdf": 11,
    "opzioni": {
      "A": "off",
      "B": "out",
      "C": "back"
    }
  },
  {
    "id": 57,
    "materia": "Inglese",
    "brano": "",
    "domanda": "The course encouraged participants to draw their own ______ rather than accept everything they read or were told.",
    "paginaPdf": 11,
    "opzioni": {
      "A": "conclusions",
      "B": "opinions",
      "C": "judgements"
    }
  },
  {
    "id": 58,
    "materia": "Inglese",
    "brano": "",
    "domanda": "The negotiating team all arrived together, ______ from Alex, who was already there.",
    "paginaPdf": 11,
    "opzioni": {
      "A": "apart",
      "B": "besides",
      "C": "except"
    }
  },
  {
    "id": 59,
    "materia": "Inglese",
    "brano": "",
    "domanda": "Rather strangely, the budget set aside precisely €687,365 (______) for training next year.",
    "paginaPdf": 11,
    "opzioni": {
      "A": "six thousand eighty-seven hundred and three sixty-five euros",
      "B": "six hundreds eighty-seven thousand and three hundreds sixty-five euros",
      "C": "six hundred and eighty-seven thousand, three hundred and sixty-five euros"
    }
  },
  {
    "id": 60,
    "materia": "Inglese",
    "brano": "",
    "domanda": "The department was just ______ introduce AI agents for routine tasks when new cybersecurity regulations were published.",
    "paginaPdf": 11,
    "opzioni": {
      "A": "on the point of",
      "B": "about to",
      "C": "at the staging to"
    }
  }
];
