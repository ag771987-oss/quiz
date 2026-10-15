const DOMANDE = [
  {
    "id": 1,
    "materia": "Situazionale",
    "brano": "",
    "domanda": "Sei il direttore di un dipartimento IT in un’azienda multinazionale. Un aggiornamento del software ha causato interruzioni nei sistemi, rallentando il lavoro di diversi team",
    "paginaPdf": 1,
    "opzioni": {
      "A": "Fai pressione sul team IT per risolvere il problema il prima possibile, senza coinvolgere gli altri reparti per evitare allarmismi",
      "B": "Decidi di ripristinare la versione precedente del software e posticipi l’aggiornamento fino a quando il problema non sarà completamente risolto",
      "C": "Crei una task force dedicata per analizzare rapidamente il problema e fornisci aggiornamenti regolari agli stakeholder"
    }
  },
  {
    "id": 2,
    "materia": "Situazionale",
    "brano": "",
    "domanda": "In qualità di responsabile customer-service di un’azienda di e-commerce, noti un aumento improvviso dei tempi di risposta alle email.",
    "paginaPdf": 1,
    "opzioni": {
      "A": "Informi il marketing di sospendere le campagne per ridurre il volume di richieste",
      "B": "Inserisci un turno extra di operatori nelle ore di punta senza modificare il processo",
      "C": "Analizzi i dati per individuare colli di bottiglia, chiedi input agli operatori e implementi subito un processo di triage con priorità e template di risposta rapida"
    }
  },
  {
    "id": 3,
    "materia": "Situazionale",
    "brano": "",
    "domanda": "Il tuo team sta lavorando su una proposta per un importante cliente, ma a pochi giorni dalla scadenza uno dei membri chiave si ammala e il lavoro è indietro",
    "paginaPdf": 1,
    "opzioni": {
      "A": "Riassegni i compiti critici agli altri membri, organizzi una riunione urgente per ridefinire le priorità e valutare soluzioni per rispettare i tempi",
      "B": "Ti fai carico del lavoro del collega assente, senza coinvolgere troppo il team per non sovraccaricarlo ulteriormente",
      "C": "Decidi di aspettare il rientro del collega, assumendo che il resto del team possa gestire le attività comunque, dato che si tratta di persone che hanno vasta esperienza"
    }
  },
  {
    "id": 4,
    "materia": "Situazionale",
    "brano": "",
    "domanda": "Un membro del tuo team mostra interesse per ruoli di maggiore responsabilità, ma non ha ancora avuto esperienze dirette di leadership",
    "paginaPdf": 1,
    "opzioni": {
      "A": "Lo promuovi ad un ruolo superiore per motivarlo e stimolarne la crescita",
      "B": "Assegni un progetto importante per testarne la leadership sul campo lasciandolo completamente autonomo in modo da poter valutarne al meglio la performance",
      "C": "Avvii un percorso di mentoring e formazione mirata, dandogli la possibilità di gestire progetti pilota con supervisione"
    }
  },
  {
    "id": 5,
    "materia": "Situazionale",
    "brano": "",
    "domanda": "Una giovane risorsa del tuo team ha grandi potenzialità, ma durante le presentazioni ai clienti appare insicura e poco incisiva.",
    "paginaPdf": 1,
    "opzioni": {
      "A": "Le chiedi di partecipare a tutte le prossime riunioni con clienti per “fare pratica”, confidando che migliorerà con l’esposizione",
      "B": "Le proponi un affiancamento con un collega esperto e un piano di crescita specifico sulla comunicazione, con feedback costanti",
      "C": "Continui per il momento ad assegnarle compiti tecnici, lasciando che si occupi delle presentazioni in futuro"
    }
  },
  {
    "id": 6,
    "materia": "Situazionale",
    "brano": "",
    "domanda": "Stai introducendo un nuovo sistema digitale per la gestione delle attività, ma il personale più senior è restio ad abbandonare i vecchi metodi",
    "paginaPdf": 1,
    "opzioni": {
      "A": "Applichi il cambiamento, dando per scontata l’adattabilità e il successo del nuovo sistema",
      "B": "Organizzi workshop pratici con supporto tecnico e discussione aperta, evidenziando benefici e ascoltando le resistenze",
      "C": "Avvii l’implementazione con un gruppo pilota e prevedi formazione standard per il resto dei dipendenti, prevedendo tempi di adozione più lunghi"
    }
  },
  {
    "id": 7,
    "materia": "Situazionale",
    "brano": "",
    "domanda": "La tua azienda vuole introdurre una nuova policy di lavoro ibrido. Alcuni dipendenti sono entusiasti, altri mostrano diffidenza o confusione",
    "paginaPdf": 2,
    "opzioni": {
      "A": "Incontri i team per raccogliere dubbi e suggerimenti, promuovi un confronto aperto e offri un workshop per aiutare la transizione",
      "B": "Applichi la nuova policy confidando nella adattabilità dei dipendenti e nella loro soddisfazione futura",
      "C": "Mandi una mail con le linee guida ufficiali e dai disponibilità per chiarimenti su richiesta; integri con videolezioni di supporto"
    }
  },
  {
    "id": 8,
    "materia": "Situazionale",
    "brano": "",
    "domanda": "Scopri che un fornitore storico sta violando alcuni standard etici che l’azienda promuove pubblicamente. Il contratto è però economicamente vantaggioso",
    "paginaPdf": 2,
    "opzioni": {
      "A": "Avvii un’indagine interna, sospendi temporaneamente il contratto e valuti soluzioni alternative nel rispetto dei valori aziendali",
      "B": "Decidi di monitorare la situazione ma continui il rapporto finché non ci sono prove certe dato che sai che spesso alcuni allarmi risultano essere ingiustificati",
      "C": "Metti in stand-by la questione perché il fornitore è strategico e i vantaggi economici sono prioritari"
    }
  },
  {
    "id": 9,
    "materia": "Situazionale",
    "brano": "",
    "domanda": "Un partner commerciale ti propone una collaborazione che porterebbe grandi vantaggi economici, ma implica pratiche discutibili sul piano etico",
    "paginaPdf": 2,
    "opzioni": {
      "A": "Esprimi delle riserve ma decidi di posticipare la decisione in attesa di ulteriori chiarimenti, intanto provi a chiedere informazioni sull' azienda",
      "B": "Valuti la proposta perché i benefici per l’azienda sono molto superiori ai rischi reputazionali",
      "C": "Valuti l'offerta insieme al team legale ed etico dell'azienda, coinvolgendo il management per una decisione condivisa"
    }
  },
  {
    "id": 10,
    "materia": "Situazionale",
    "brano": "",
    "domanda": "Stai gestendo una commessa con un nuovo cliente che ha richieste particolarmente stringenti sui tempi di consegna",
    "paginaPdf": 2,
    "opzioni": {
      "A": "Assegni i compiti e lasci ampia autonomia al team, facendo check a metà progetto ed eventualmente attuando azioni correttive",
      "B": "Definisci obiettivi SMART, suddividi le attività e coinvolgi il team in revisioni frequenti per garantire qualità e tempi",
      "C": "Focalizzi tutto sul rispetto dei tempi, sacrificando revisioni e dettagli per consegnare il prima possibile"
    }
  },
  {
    "id": 11,
    "materia": "Situazionale",
    "brano": "",
    "domanda": "Durante un progetto con un cliente strategico, emergono disallineamenti tra i reparti interni e si rischiano ritardi nella consegna.",
    "paginaPdf": 2,
    "opzioni": {
      "A": "Organizzi aggiornamenti via e-mail tra reparti e pianifichi meeting solo in caso di problemi, così eviti la microgestione e stimoli l'autonomia dei team",
      "B": "Crei un team interfunzionale con incontri regolari, nomini un referente unico per il cliente e garantisci un flusso continuo di comunicazione",
      "C": "Lasci che i singoli reparti comunichino autonomamente tra loro e con il cliente, evitando di centralizzare il coordinamento"
    }
  },
  {
    "id": 12,
    "materia": "Situazionale",
    "brano": "",
    "domanda": "Un tuo cliente chiave si lamenta della poca reattività dell’assistenza post-vendita. Internamente, il team customer care sostiene di non avere abbastanza risorse.",
    "paginaPdf": 2,
    "opzioni": {
      "A": "Ti scusi col cliente, prometti miglioramenti, gestisci la questione internamente senza coinvolgerlo direttamente",
      "B": "Incontri sia il cliente sia il team per ascoltare entrambi i punti di vista e trovare una soluzione condivisa che migliori il servizio",
      "C": "Dai ragione al cliente e richiedi formalmente al team di assistenza di riorganizzarsi, ricordando le possibili conseguenze negative per l'azienda e per il reparto"
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
      "A": "Fig. 3",
      "B": "Fig. 4",
      "C": "Fig. 1",
      "D": "Fig. 2",
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
      "A": "Fig. 3",
      "B": "Fig. 1",
      "C": "Fig. 2",
      "D": "Fig. 4",
      "E": "Fig. 5"
    }
  },
  {
    "id": 15,
    "materia": "Ragionamento logico",
    "brano": "",
    "domanda": "Osserva le figure nella seguente sequenza e individua quella da eliminare perché incoerente con le restanti:",
    "immagine": true,
    "paginaPdf": 3,
    "opzioni": {
      "A": "Figura e)",
      "B": "Figura c)",
      "C": "Figura b)",
      "D": "Figura d)",
      "E": "Figura a)"
    }
  },
  {
    "id": 16,
    "materia": "Ragionamento logico",
    "brano": "",
    "domanda": "Quale figura completa coerentemente la serie?",
    "immagine": true,
    "paginaPdf": 3,
    "opzioni": {
      "A": "Figura 4",
      "B": "Figura 1",
      "C": "Figura 5",
      "D": "Figura 2",
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
      "A": "Figura 5",
      "B": "Figura 1",
      "C": "Figura 3",
      "D": "Figura 2",
      "E": "Figura 4"
    }
  },
  {
    "id": 18,
    "materia": "Ragionamento logico",
    "brano": "",
    "domanda": "Quale figura completa coerentemente la serie?",
    "immagine": true,
    "paginaPdf": 4,
    "opzioni": {
      "A": "Figura 2",
      "B": "Figura 3",
      "C": "Figura 4",
      "D": "Figura 5",
      "E": "Figura 1"
    }
  },
  {
    "id": 19,
    "materia": "Comprensione del testo",
    "istruzioni": "Questo brano viene ripetuto per 3 domande che presentano 4 alternative di risposta ciascuna. Il compito è di leggere attentamente ciascun brano e le domande poste, decidendo, tra le alternative presenti, quale sia quella corretta, facendo riferimento esclusivamente alle informazioni contenute nel brano o deducibili da esse, senza attingere alle proprie conoscenze relativamente agli argomenti di cui trattano i brani. Vi è sempre una e una sola risposta esatta tra quelle proposte.",
    "brano": "Nell’agosto del 1945 per la prima volta venne adoperata in guerra un’arma nucleare: la bomba atomica che distrusse la città di Hiroshima. Questa bomba atomica, soprannominata Little boy, uccise all’istante tra le 60.000 e le 80.000 persone, ma molte altre morirono nei mesi successivi sia a causa di gravi complicazioni dovute alle ferite riportate durante l’esplosione, sia a causa degli effetti delle radiazioni. La stima del bilancio delle vittime ammonta a più di 130.000 persone. A pochi giorni di distanza dall’esplosione della prima bomba atomica, ne venne sganciata una seconda sulla città di Nagasaki. A causa di questa seconda esplosione morirono all’incirca 50.000 persone. Molti dei sopravvissuti alle esplosioni, gli hibakusha, hanno spesso rilasciato interviste e raccontato le proprie esperienze per tramandare alle nuove generazioni l’importanza della pace. Hiroshima stessa, ad oggi ricostruita, rappresenta un simbolo di pace: la città ospita numerosi parchi, musei e monumenti che raccontano la sua storia, tra cui l’importantissimo Parco della Pace dove è situata la famosa Cupola della bomba atomica, una delle poche strutture architettoniche a non essere crollate dopo l’esplosione.",
    "domanda": "In base alle informazioni contenute esclusivamente nel brano proposto, è corretto affermare che la prima bomba atomica:",
    "paginaPdf": 4,
    "opzioni": {
      "A": "Sganciata dall’esercito americano, causò in totale la morte di circa 50.000 persone",
      "B": "Distrusse la città di Hiroshima nell’agosto del 1945",
      "C": "Soprannominata Little boy, distrusse la città di Nagasaki",
      "D": "Fu sganciata dall’esercito americano sulla città di Nagasaki la mattina del 6 agosto 1945"
    }
  },
  {
    "id": 20,
    "materia": "Comprensione del testo",
    "istruzioni": "Questo brano viene ripetuto per 3 domande che presentano 4 alternative di risposta ciascuna. Il compito è di leggere attentamente ciascun brano e le domande poste, decidendo, tra le alternative presenti, quale sia quella corretta, facendo riferimento esclusivamente alle informazioni contenute nel brano o deducibili da esse, senza attingere alle proprie conoscenze relativamente agli argomenti di cui trattano i brani. Vi è sempre una e una sola risposta esatta tra quelle proposte.",
    "brano": "Nell’agosto del 1945 per la prima volta venne adoperata in guerra un’arma nucleare: la bomba atomica che distrusse la città di Hiroshima. Questa bomba atomica, soprannominata Little boy, uccise all’istante tra le 60.000 e le 80.000 persone, ma molte altre morirono nei mesi successivi sia a causa di gravi complicazioni dovute alle ferite riportate durante l’esplosione, sia a causa degli effetti delle radiazioni. La stima del bilancio delle vittime ammonta a più di 130.000 persone. A pochi giorni di distanza dall’esplosione della prima bomba atomica, ne venne sganciata una seconda sulla città di Nagasaki. A causa di questa seconda esplosione morirono all’incirca 50.000 persone. Molti dei sopravvissuti alle esplosioni, gli hibakusha, hanno spesso rilasciato interviste e raccontato le proprie esperienze per tramandare alle nuove generazioni l’importanza della pace. Hiroshima stessa, ad oggi ricostruita, rappresenta un simbolo di pace: la città ospita numerosi parchi, musei e monumenti che raccontano la sua storia, tra cui l’importantissimo Parco della Pace dove è situata la famosa Cupola della bomba atomica, una delle poche strutture architettoniche a non essere crollate dopo l’esplosione.",
    "domanda": "In base alle informazioni contenute esclusivamente nel brano proposto, è corretto affermare che a causa dell'esplosione della prima bomba atomica:",
    "paginaPdf": 5,
    "opzioni": {
      "A": "A Nagasaki morirono tra le 60.000 e le 80.000 persone",
      "B": "Tutte le alternative proposte sono corrette",
      "C": "Molte persone morirono nei mesi successivi per le gravi complicazioni dovute alle ferite riportate",
      "D": "Il Giappone si arrese e pose fine alla Prima guerra mondiale"
    }
  },
  {
    "id": 21,
    "materia": "Comprensione del testo",
    "istruzioni": "Questo brano viene ripetuto per 3 domande che presentano 4 alternative di risposta ciascuna. Il compito è di leggere attentamente ciascun brano e le domande poste, decidendo, tra le alternative presenti, quale sia quella corretta, facendo riferimento esclusivamente alle informazioni contenute nel brano o deducibili da esse, senza attingere alle proprie conoscenze relativamente agli argomenti di cui trattano i brani. Vi è sempre una e una sola risposta esatta tra quelle proposte.",
    "brano": "Nell’agosto del 1945 per la prima volta venne adoperata in guerra un’arma nucleare: la bomba atomica che distrusse la città di Hiroshima. Questa bomba atomica, soprannominata Little boy, uccise all’istante tra le 60.000 e le 80.000 persone, ma molte altre morirono nei mesi successivi sia a causa di gravi complicazioni dovute alle ferite riportate durante l’esplosione, sia a causa degli effetti delle radiazioni. La stima del bilancio delle vittime ammonta a più di 130.000 persone. A pochi giorni di distanza dall’esplosione della prima bomba atomica, ne venne sganciata una seconda sulla città di Nagasaki. A causa di questa seconda esplosione morirono all’incirca 50.000 persone. Molti dei sopravvissuti alle esplosioni, gli hibakusha, hanno spesso rilasciato interviste e raccontato le proprie esperienze per tramandare alle nuove generazioni l’importanza della pace. Hiroshima stessa, ad oggi ricostruita, rappresenta un simbolo di pace: la città ospita numerosi parchi, musei e monumenti che raccontano la sua storia, tra cui l’importantissimo Parco della Pace dove è situata la famosa Cupola della bomba atomica, una delle poche strutture architettoniche a non essere crollate dopo l’esplosione.",
    "domanda": "In base alle informazioni contenute esclusivamente nel brano proposto, è corretto affermare che:",
    "paginaPdf": 5,
    "opzioni": {
      "A": "Dopo lo scoppio delle due bombe atomiche il Giappone si arrese, ma la Germania continuava a combattere",
      "B": "Durante lo scoppio della seconda bomba atomica, molte persone trovarono riparo nella città di Nagasaki presso la famosa Cupola oggi situata all’interno del Museo della Pace",
      "C": "Ad Hiroshima si trova l’importantissimo Parco della Pace",
      "D": "Nell’estate del 1945, un bombardiere americano sganciò una bomba soprannominata Little Boy su Nagasaki"
    }
  },
  {
    "id": 22,
    "materia": "Comprensione del testo",
    "istruzioni": "Questo brano viene ripetuto per 3 domande che presentano 4 alternative di risposta ciascuna. Il compito è di leggere attentamente ciascun brano e le domande poste, decidendo, tra le alternative presenti, quale sia quella corretta, facendo riferimento esclusivamente alle informazioni contenute nel brano o deducibili da esse, senza attingere alle proprie conoscenze relativamente agli argomenti di cui trattano i brani. Vi è sempre una e una sola risposta esatta tra quelle proposte.",
    "brano": "Giosuè Carducci è stato il primo italiano a vincere il Premio Nobel per la Letteratura nel 1906, ossia un’onorificenza internazionale, istituita con testamento nel 1895 dallo svedese Alfred Nobel, assegnata annualmente ad individui che si sono distinti nei campi della letteratura, della pace, della chimica, della fisica e della medicina, e dal 1969 anche nel campo dell’economia. Nato in Versilia, nel 1835, Giosuè ha un’infanzia molto modesta ed in seguito al trasferimento della sua famiglia presso la città di Firenze riesce a frequentare le Scuole Pie degli Scolopi di San Giovannino. Nel 1853 una volta diplomato si iscrive alla Facoltà di Lettere e dopo aver conseguito la laurea, nel 1856, accetta un lavoro come insegnante in una scuola pubblica in provincia di Pisa. Tuttavia, tale esperienza si rivela fallimentare al punto che Carducci si dimette da quell’istituto dopo aver concluso meno di un anno di servizio. Accetta poi, nel 1860, una cattedra di eloquenza italiana, oggi equipollente alla cattedra in letteratura italiana, presso l’Università di Bologna, dove si ferma ad insegnare fino al 1904. Giosuè Carducci è stato un poeta, scrittore, critico letterario ed accademico italiano, autore di numerose opere diventate famose. “San Martino” è senz’altro la sua poesia più famosa, fa parte della raccolta Rime nuove, composta dal 1861 al 1887.",
    "domanda": "In base alle informazioni contenute esclusivamente nel brano proposto, è corretto affermare che il Premio Nobel:",
    "paginaPdf": 6,
    "opzioni": {
      "A": "È un’onorificenza internazionale assegnata annualmente ad individui che si sono distinti in alcuni specifici campi, tra cui anche la letteratura",
      "B": "Può essere vinto solo da individui di spicco di origine europea",
      "C": "Per la Letteratura è stato vinto da dieci autori italiani; il primo è stato Giosuè Carducci",
      "D": "È stato assegnato per la prima volta a Giosuè Carducci direttamente dal suo istitutore Alfred Nobel"
    }
  },
  {
    "id": 23,
    "materia": "Comprensione del testo",
    "istruzioni": "Questo brano viene ripetuto per 3 domande che presentano 4 alternative di risposta ciascuna. Il compito è di leggere attentamente ciascun brano e le domande poste, decidendo, tra le alternative presenti, quale sia quella corretta, facendo riferimento esclusivamente alle informazioni contenute nel brano o deducibili da esse, senza attingere alle proprie conoscenze relativamente agli argomenti di cui trattano i brani. Vi è sempre una e una sola risposta esatta tra quelle proposte.",
    "brano": "Giosuè Carducci è stato il primo italiano a vincere il Premio Nobel per la Letteratura nel 1906, ossia un’onorificenza internazionale, istituita con testamento nel 1895 dallo svedese Alfred Nobel, assegnata annualmente ad individui che si sono distinti nei campi della letteratura, della pace, della chimica, della fisica e della medicina, e dal 1969 anche nel campo dell’economia. Nato in Versilia, nel 1835, Giosuè ha un’infanzia molto modesta ed in seguito al trasferimento della sua famiglia presso la città di Firenze riesce a frequentare le Scuole Pie degli Scolopi di San Giovannino. Nel 1853 una volta diplomato si iscrive alla Facoltà di Lettere e dopo aver conseguito la laurea, nel 1856, accetta un lavoro come insegnante in una scuola pubblica in provincia di Pisa. Tuttavia, tale esperienza si rivela fallimentare al punto che Carducci si dimette da quell’istituto dopo aver concluso meno di un anno di servizio. Accetta poi, nel 1860, una cattedra di eloquenza italiana, oggi equipollente alla cattedra in letteratura italiana, presso l’Università di Bologna, dove si ferma ad insegnare fino al 1904. Giosuè Carducci è stato un poeta, scrittore, critico letterario ed accademico italiano, autore di numerose opere diventate famose. “San Martino” è senz’altro la sua poesia più famosa, fa parte della raccolta Rime nuove, composta dal 1861 al 1887.",
    "domanda": "In base alle informazioni contenute esclusivamente nel brano proposto, è corretto affermare che Giosuè Carducci:",
    "paginaPdf": 6,
    "opzioni": {
      "A": "Nel 1853, accetta un lavoro come insegnante in una scuola pubblica in provincia di Pisa",
      "B": "Preferiva svolgere l’attività di insegnate privato, per questo lasciò la scuola pubblica dopo aver concluso meno di un anno di servizio",
      "C": "Si laurea alla Facoltà di Lettere all’Università di Bologna nel 1856",
      "D": "Ha insegnato presso l’Università di Bologna fino al 1904"
    }
  },
  {
    "id": 24,
    "materia": "Comprensione del testo",
    "istruzioni": "Questo brano viene ripetuto per 3 domande che presentano 4 alternative di risposta ciascuna. Il compito è di leggere attentamente ciascun brano e le domande poste, decidendo, tra le alternative presenti, quale sia quella corretta, facendo riferimento esclusivamente alle informazioni contenute nel brano o deducibili da esse, senza attingere alle proprie conoscenze relativamente agli argomenti di cui trattano i brani. Vi è sempre una e una sola risposta esatta tra quelle proposte.",
    "brano": "Giosuè Carducci è stato il primo italiano a vincere il Premio Nobel per la Letteratura nel 1906, ossia un’onorificenza internazionale, istituita con testamento nel 1895 dallo svedese Alfred Nobel, assegnata annualmente ad individui che si sono distinti nei campi della letteratura, della pace, della chimica, della fisica e della medicina, e dal 1969 anche nel campo dell’economia. Nato in Versilia, nel 1835, Giosuè ha un’infanzia molto modesta ed in seguito al trasferimento della sua famiglia presso la città di Firenze riesce a frequentare le Scuole Pie degli Scolopi di San Giovannino. Nel 1853 una volta diplomato si iscrive alla Facoltà di Lettere e dopo aver conseguito la laurea, nel 1856, accetta un lavoro come insegnante in una scuola pubblica in provincia di Pisa. Tuttavia, tale esperienza si rivela fallimentare al punto che Carducci si dimette da quell’istituto dopo aver concluso meno di un anno di servizio. Accetta poi, nel 1860, una cattedra di eloquenza italiana, oggi equipollente alla cattedra in letteratura italiana, presso l’Università di Bologna, dove si ferma ad insegnare fino al 1904. Giosuè Carducci è stato un poeta, scrittore, critico letterario ed accademico italiano, autore di numerose opere diventate famose. “San Martino” è senz’altro la sua poesia più famosa, fa parte della raccolta Rime nuove, composta dal 1861 al 1887.",
    "domanda": "In base alle informazioni contenute esclusivamente nel brano proposto, è corretto affermare che:",
    "paginaPdf": 6,
    "opzioni": {
      "A": "Giosuè Carducci ha composto la raccolta Rime nuove dal 1861 al 1887",
      "B": "Giosuè Carducci è l’autore di numerose opere diventate famose, tutte composte principalmente tra il 1861 e il 1887",
      "C": "Giosuè Carducci è stato eletto senatore della Repubblica italiana nel 1900",
      "D": "Il secondo nome di Giosuè Carducci era Giacomo"
    }
  },
  {
    "id": 25,
    "materia": "Diritto",
    "brano": "",
    "domanda": "Con riferimento alla libertà personale, l’art. 13 Cost. pone:",
    "paginaPdf": 7,
    "opzioni": {
      "A": "una riserva di legge relativa",
      "B": "una riserva di assemblea",
      "C": "una riserva di legge assoluta"
    }
  },
  {
    "id": 26,
    "materia": "Diritto",
    "brano": "",
    "domanda": "Il potere sostitutivo dello Stato nei confronti delle Regioni e degli enti locali si esercita:",
    "paginaPdf": 7,
    "opzioni": {
      "A": "quando lo richiedono la tutela dell’unità giuridica o dell’unità economica, nel caso di pericolo grave per l’incolumità e la sicurezza pubblica e nel caso di mancato rispetto di norme e di trattati internazionali o della normativa comunitaria",
      "B": "quando lo richiedono il rispetto dell’equilibrio di bilancio, nel caso di pericolo grave per l’incolumità e la sicurezza pubblica e nel caso di mancato rispetto di norme e di trattati internazionali o della normativa comunitaria",
      "C": "quando lo richiedono la tutela del buon costume, nel caso di pericolo grave per l’incolumità e la sicurezza pubblica e nel caso di mancato rispetto di norme e di trattati internazionali o della normativa comunitaria"
    }
  },
  {
    "id": 27,
    "materia": "Diritto",
    "brano": "",
    "domanda": "Ai sensi dell’art. 100 Cost., il Consiglio di Stato:",
    "paginaPdf": 7,
    "opzioni": {
      "A": "è organo di consulenza giuridico-amministrativa e di tutela della giustizia nell’amministrazione",
      "B": "è organo di consulenza contabile e di tutela della giustizia nell’amministrazione",
      "C": "è organo di consulenza tecnico-giuridica e di controllo preventivo di legittimità sugli atti del Governo"
    }
  },
  {
    "id": 28,
    "materia": "Diritto",
    "brano": "",
    "domanda": "Il potere amministrativo è discrezionale quando la norma:",
    "paginaPdf": 7,
    "opzioni": {
      "A": "ne conferisce l'esercizio alle autonomie locali",
      "B": "provvede ai mezzi finanziari per farvi fronte",
      "C": "lascia all'amministrazione pubblica spazi di scelta"
    }
  },
  {
    "id": 29,
    "materia": "Diritto",
    "brano": "",
    "domanda": "Nelle amministrazioni dello Stato, ai sensi dell'art. 19, commi 3 e 8, del d.lgs. n. 165 del 2001, gli incarichi di Segretario generale di ministeri, gli incarichi di direzione di strutture articolate al loro interno in uffici dirigenziali generali e quelli di livello equivalente:",
    "paginaPdf": 7,
    "opzioni": {
      "A": "sono riservati esclusivamente ai dirigenti di prima fascia inclusi nei ruoli dei dirigenti delle amministrazioni stesse",
      "B": "non sono rinnovabili per più di due volte consecutive",
      "C": "cessano decorsi novanta giorni dal voto sulla fiducia al Governo"
    }
  },
  {
    "id": 30,
    "materia": "Diritto",
    "brano": "",
    "domanda": "I beni del demanio pubblico:",
    "paginaPdf": 7,
    "opzioni": {
      "A": "comprendono, tra gli altri, anche tutte le acque superficiali e sotterranee, ancorché non estratte dal sottosuolo",
      "B": "possono essere espropriati dai creditori dell'amministrazione pubblica cui appartengono",
      "C": "comprendono anche gli edifici sedi degli uffici pubblici con i loro arredi e i beni destinati a un pubblico servizio"
    }
  },
  {
    "id": 31,
    "materia": "Contabilità pubblica",
    "brano": "",
    "domanda": "Il diritto al risarcimento del danno erariale:",
    "paginaPdf": 8,
    "opzioni": {
      "A": "si prescrive nell'ordinario termine decennale di prescrizione dei diritti, decorrente dal momento in cui il diritto può essere fatto valere",
      "B": "è imprescrittibile nel caso in cui i responsabili abbiano conseguito un illecito arricchimento o abbiano agito con dolo",
      "C": "si prescrive in cinque anni, decorrenti dalla data in cui si è verificato il fatto dannoso, ovvero, in caso di occultamento doloso del danno, dalla data della sua scoperta"
    }
  },
  {
    "id": 32,
    "materia": "Diritto",
    "brano": "",
    "domanda": "Per controllo preventivo di legittimità si intende:",
    "paginaPdf": 8,
    "opzioni": {
      "A": "il controllo cui sono sottoposti taluni provvedimenti amministrativi, volto a verificare che non siano affetti da vizi di legittimità e il cui positivo superamento consente agli stessi di acquistare efficacia",
      "B": "il controllo cui sono sottoposte le attività economiche pubbliche e private, affinché le stesse non si svolgano in modo da recare danno alla salute, all'ambiente, alla sicurezza, alla libertà e alla dignità umana",
      "C": "il controllo cui è sottoposta l'attività di taluni organi amministrativi, che può provocarne lo scioglimento anticipato qualora siano accertate specifiche violazioni di estrema gravità"
    }
  },
  {
    "id": 33,
    "materia": "Diritto",
    "brano": "",
    "domanda": "In base all’art. 108 TFUE, competente a verificare la compatibilità delle pertinenti misure nazionali con il regime applicabile agli aiuti di Stato è:",
    "paginaPdf": 8,
    "opzioni": {
      "A": "il Consiglio dell’Unione",
      "B": "la Commissione europea",
      "C": "il Comitato economico e sociale"
    }
  },
  {
    "id": 34,
    "materia": "Diritto",
    "brano": "",
    "domanda": "Gli accordi di Schengen rappresentano una forma di integrazione differenziata che con il Trattato di Lisbona è stata incorporata nel sistema ordinamentale dell’Unione europea. In particolare, il Protocollo n. 19:",
    "paginaPdf": 8,
    "opzioni": {
      "A": "autorizza una cooperazione rafforzata nelle materie da esso coperte tra gli Stati membri che vi partecipano",
      "B": "impone scadenze fisse per l’ammissione di nuovi membri",
      "C": "esclude espressamente la possibilità per Stati terzi di partecipare al sistema Schengen"
    }
  },
  {
    "id": 35,
    "materia": "Diritto",
    "brano": "",
    "domanda": "In materia di immigrazione l’Unione Europea gode di competenze specifiche. Più segnatamente, conformemente all’art. 79 TFUE il Parlamento europeo e il Consiglio dell’Unione possono:",
    "paginaPdf": 8,
    "opzioni": {
      "A": "adottare misure relative alla definizione dei diritti dei cittadini dei paesi terzi regolarmente soggiornanti in uno Stato membro",
      "B": "adottare direttive che armonizzano i motivi di espulsione dei cittadini dei paesi terzi dal territorio degli Stati membri",
      "C": "determinare il volume di ingressi (quote)"
    }
  },
  {
    "id": 36,
    "materia": "Economia",
    "brano": "",
    "domanda": "Una curva di domanda parallela all’asse delle ordinate rappresenta una curva:",
    "paginaPdf": 8,
    "opzioni": {
      "A": "infinitamente elastica",
      "B": "perfettamente anelastica",
      "C": "con elasticità negativa"
    }
  },
  {
    "id": 37,
    "materia": "Economia",
    "brano": "",
    "domanda": "La perdita secca causata dall’imposizione di un limite massimo al prezzo è dovuta:",
    "paginaPdf": 8,
    "opzioni": {
      "A": "alla diminuzione della quantità prodotta dovuta ad un’insufficiente offerta",
      "B": "alla diminuzione della quantità prodotta dovuta ad un’insufficiente domanda",
      "C": "al trasferimento di surplus dai consumatori ai produttori"
    }
  },
  {
    "id": 38,
    "materia": "Economia",
    "brano": "",
    "domanda": "La differenza tra il valore della produzione di beni e servizi conseguita dalle singole branche produttive e il valore dei beni e servizi intermedi dalle stesse consumate (materie prime e ausiliarie impiegate e servizi forniti da altre unità produttive) viene definita come:",
    "paginaPdf": 8,
    "opzioni": {
      "A": "Reddito Nazionale Lordo",
      "B": "Prodotto Interno Lordo",
      "C": "Valore Aggiunto"
    }
  },
  {
    "id": 39,
    "materia": "Economia",
    "brano": "",
    "domanda": "Definiamo fallimenti del mercato:",
    "paginaPdf": 9,
    "opzioni": {
      "A": "i fallimenti dell’autorità pubblica nello stabilizzare il mercato",
      "B": "i fallimenti delle imprese che non riescono a stare in maniera profittevole sul mercato",
      "C": "i fallimenti del sistema dei prezzi nel determinare l’allocazione efficiente delle risorse"
    }
  },
  {
    "id": 40,
    "materia": "Economia",
    "brano": "",
    "domanda": "Se, in un’economia chiusa, la sensibilità degli investimenti rispetto alle variazioni del tasso d’interesse è nulla allora:",
    "paginaPdf": 9,
    "opzioni": {
      "A": "la curva IS è verticale e la politica monetaria è del tutto inefficace",
      "B": "la curva IS è verticale e la politica monetaria è efficace",
      "C": "la curva IS è orizzontale e la politica monetaria è massimamente efficace"
    }
  },
  {
    "id": 41,
    "materia": "Economia",
    "brano": "",
    "domanda": "Gli investimenti diretti all’estero sono definiti greenfield se:",
    "paginaPdf": 9,
    "opzioni": {
      "A": "prevedono la fusione con un’impresa estera",
      "B": "prevedono l’acquisizione del portafoglio azionario di un’impresa estera",
      "C": "prevedono la creazione di nuove unità produttive"
    }
  },
  {
    "id": 42,
    "materia": "Contabilità pubblica",
    "brano": "",
    "domanda": "Le immobilizzazioni immateriali sono:",
    "paginaPdf": 9,
    "opzioni": {
      "A": "beni e attività intangibili aventi utilità pluriennale",
      "B": "investimenti nel capitale di rischio",
      "C": "attività prive di utilità pluriennale"
    }
  },
  {
    "id": 43,
    "materia": "Contabilità pubblica",
    "brano": "",
    "domanda": "Il controllo di gestione mira a:",
    "paginaPdf": 9,
    "opzioni": {
      "A": "valutare le performance individuali",
      "B": "verificare efficienza, efficacia ed economicità dell'azione amministrativa",
      "C": "definire gli ambiti delle deleghe conferite al management"
    }
  },
  {
    "id": 44,
    "materia": "Organizzazione",
    "brano": "",
    "domanda": "Tra le teorie più discusse e dibattute in campo manageriale, utili per comprendere le dinamiche di funzionamento delle organizzazioni complesse, quali sono le amministrazioni pubbliche, vi è anche la Teoria del Neo-istituzionalismo. Tale teoria si può collegare prevalentemente ai contributi dei seguenti autori:",
    "paginaPdf": 9,
    "opzioni": {
      "A": "Meyer, Rowan, DiMaggio e Powell",
      "B": "Simon, Fayol, Butera e Willmott",
      "C": "Maslow, Herzberg, Weick e Quattrone"
    }
  },
  {
    "id": 45,
    "materia": "Organizzazione",
    "brano": "",
    "domanda": "Per comprendere le dinamiche di funzionamento interne delle organizzazioni complesse, quali sono le amministrazioni pubbliche, lo studio della cultura organizzativa rappresenta un passaggio molto importante. In tal senso, tra i contributi più discussi e dibattuti sul tema della cultura organizzativa vi sono quelli di:",
    "paginaPdf": 9,
    "opzioni": {
      "A": "Söderlund",
      "B": "Schein",
      "C": "Taylor"
    }
  },
  {
    "id": 46,
    "materia": "Organizzazione",
    "brano": "",
    "domanda": "Lo studio e l’analisi delle determinanti del comportamento organizzativo rappresentano elementi essenziali per comprendere, in modo utile, le dinamiche di funzionamento delle organizzazioni complesse, quali sono le amministrazioni pubbliche. In particolare, un passaggio molto importante riguarda lo studio della leadership. In tal senso, il modello teorico della leadership contingente si associa prevalentemente ai contributi di:",
    "paginaPdf": 9,
    "opzioni": {
      "A": "Fiedler",
      "B": "Ferraro",
      "C": "Fayol"
    }
  },
  {
    "id": 47,
    "materia": "Organizzazione",
    "brano": "",
    "domanda": "Lo studio e l’analisi delle politiche e degli strumenti di gestione delle risorse umane rappresentano elementi essenziali per comprendere, in modo utile, le dinamiche di funzionamento interno delle organizzazioni complesse quali sono le amministrazioni pubbliche. In particolare, un passaggio molto importante riguarda lo studio della valutazione del lavoro in senso ampio. In particolare, il job ranking implica:",
    "paginaPdf": 9,
    "opzioni": {
      "A": "la costruzione di una graduatoria dei singoli compiti o singole posizioni lavorative",
      "B": "la costruzione di un percorso di carriera ad hoc",
      "C": "l’assegnazione di un premio in denaro al migliore dipendente"
    }
  },
  {
    "id": 48,
    "materia": "Organizzazione",
    "brano": "",
    "domanda": "Lo studio e l’analisi dei diversi parametri di progettazione micro e macro organizzativa rappresentano elementi essenziali per comprendere, in modo utile, le dinamiche di funzionamento delle organizzazioni complesse quali sono le amministrazioni pubbliche. In tal senso, la presenza di un sistema di regole e procedure definite in modo chiaro e trasparente e con un alto grado di formalizzazione costituisce, tipicamente, una caratteristica saliente delle organizzazioni burocratiche nel pensiero di:",
    "paginaPdf": 10,
    "opzioni": {
      "A": "Alderfer",
      "B": "Weber",
      "C": "Mayo"
    }
  },
  {
    "id": 49,
    "materia": "Informatica",
    "brano": "",
    "domanda": "L’Agenzia per la cybersicurezza nazionale (ACN) è stata istituita nel:",
    "paginaPdf": 10,
    "opzioni": {
      "A": "2015",
      "B": "2021",
      "C": "2001"
    }
  },
  {
    "id": 50,
    "materia": "Politiche pubbliche",
    "brano": "",
    "domanda": "Le politiche regolative sono politiche che:",
    "paginaPdf": 10,
    "opzioni": {
      "A": "definiscono i criteri da applicare nel finanziamento delle varie politiche pubbliche",
      "B": "definiscono regole, obblighi e divieti",
      "C": "definiscono le regole che le Amministrazioni pubbliche sono tenute a seguire nei processi di allocazione di risorse scarse"
    }
  },
  {
    "id": 51,
    "materia": "Politiche pubbliche",
    "brano": "",
    "domanda": "Agenda pubblica ed agenda istituzionale:",
    "paginaPdf": 10,
    "opzioni": {
      "A": "mutano nel tempo e non coincidono necessariamente",
      "B": "indicano entrambe l’insieme dei problemi pubblici sui quali i policy makers sono chiamati a decidere",
      "C": "indicano le soluzioni tecniche e gli strumenti necessari per l’implementazione delle politiche pubbliche"
    }
  },
  {
    "id": 52,
    "materia": "Politiche pubbliche",
    "brano": "",
    "domanda": "Gli strumenti utilizzabili per mettere in atto le politiche pubbliche si possono classificare in:",
    "paginaPdf": 10,
    "opzioni": {
      "A": "interventi, di regolazione e di gestione diretta e indiretta, oltre che sui mercati di beni e servizi anche sui mercati finanziari",
      "B": "interventi di regolazione diretta sui mercati di beni e servizi, interventi di regolazione indiretta sui mercati di beni e servizi",
      "C": "regolazione, gestione pubblica diretta, incentivi o disincentivi, campagne di informazione"
    }
  },
  {
    "id": 53,
    "materia": "Politiche pubbliche",
    "brano": "",
    "domanda": "La valutazione di una politica pubblica:",
    "paginaPdf": 10,
    "opzioni": {
      "A": "è condotta solo ex-post per valutare lo scostamento fra costi effettivamente sostenuti e costi preventivati",
      "B": "è condotta solo ex-post per valutare lo scostamento fra benefici effettivamente prodotti e benefici attesi",
      "C": "può essere condotta ex-ante, in itinere ed ex-post"
    }
  },
  {
    "id": 54,
    "materia": "Politiche pubbliche",
    "brano": "",
    "domanda": "I policy networks:",
    "paginaPdf": 10,
    "opzioni": {
      "A": "costituiscono reti fra attori pubblici di diverso livello per il coordinamento delle politiche pubbliche",
      "B": "costituiscono reti formali ed informali fra attori governativi, di vario livello, e altri attori sociali che formano accordi per il perseguimento di obiettivi di politica pubblica",
      "C": "costituiscono reti formali ed informali fra attori privati per il perseguimento di specifici obiettivi di politica pubblica"
    }
  },
  {
    "id": 55,
    "materia": "Inglese",
    "brano": "",
    "domanda": "The law ______ far more difficult to draft than the ministry’s legal department initially thought.",
    "paginaPdf": 10,
    "opzioni": {
      "A": "established as",
      "B": "proved",
      "C": "demonstrated"
    }
  },
  {
    "id": 56,
    "materia": "Inglese",
    "brano": "",
    "domanda": "We’d better call ______ the meeting next Tuesday because there’s a strike.",
    "paginaPdf": 11,
    "opzioni": {
      "A": "on",
      "B": "out",
      "C": "off"
    }
  },
  {
    "id": 57,
    "materia": "Inglese",
    "brano": "",
    "domanda": "I am always ready to help when needed, ______ I?",
    "paginaPdf": 11,
    "opzioni": {
      "A": "aren't",
      "B": "don't",
      "C": "am not"
    }
  },
  {
    "id": 58,
    "materia": "Inglese",
    "brano": "",
    "domanda": "Despite strict academic ______, some of the published papers were scientifically inaccurate.",
    "paginaPdf": 11,
    "opzioni": {
      "A": "standards",
      "B": "laws",
      "C": "ordinances"
    }
  },
  {
    "id": 59,
    "materia": "Inglese",
    "brano": "",
    "domanda": "The planning unit calculated the project would cost €369,257 (______) more than originally foreseen.",
    "paginaPdf": 11,
    "opzioni": {
      "A": "three hundred and sixty-nine thousands, two hundred fifty-seven euros",
      "B": "three hundreds sixty-nine thousand and two hundreds fifty-seven euros",
      "C": "three hundred and sixty-nine thousand, two hundred and fifty-seven euros"
    }
  },
  {
    "id": 60,
    "materia": "Inglese",
    "brano": "",
    "domanda": "______, the department doesn’t deal with individual complaints.",
    "paginaPdf": 11,
    "opzioni": {
      "A": "As a general rule",
      "B": "With normal circumstances",
      "C": "Under current edict"
    }
  }
];
