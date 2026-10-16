const SPIEGAZIONI = [
  {
    "id": 1,
    "corretta": "C",
    "suggerimento": "Confronta i dati sull’Europa con quelli di ciascun altro continente citato: chi cresce e chi cala?",
    "spiegazione": "Il brano dice che la popolazione europea passerà da 738 a 646 milioni nel 2100, mentre per tutti gli altri continenti citati (Africa, Asia, America Latina, America Settentrionale, Oceania) prevede un **aumento**.",
    "perOpzione": {
      "A": "Falso: l’Europa ha 738 milioni di abitanti contro i 358 dell’America Settentrionale, cioè circa il doppio, non la metà.",
      "B": "Falso: nel 2100 l’Oceania avrà 71 milioni di abitanti, molto meno dei 646 milioni previsti per l’Europa.",
      "C": "Corretto: è l’unico continente per cui il brano prevede un calo; tutti gli altri crescono."
    }
  },
  {
    "id": 2,
    "corretta": "C",
    "suggerimento": "Cerchi l’affermazione FALSA: fai i conti per ciascuna (somme, raddoppi, triplicazioni).",
    "spiegazione": "Domanda in negativo: bisogna trovare l’unica affermazione che i dati **non** sostengono. Oceania: da 39 a 71 milioni, cioè meno del doppio, non il triplo (sarebbero 117 milioni).",
    "perOpzione": {
      "A": "Sostenibile: 721 + 500 = 1.221 milioni, cioè oltre 1 miliardo e 200 milioni.",
      "B": "Sostenibile: nel 2050 il mondo avrà 9,725 miliardi (poco sotto i 10) e l’Africa, raddoppiando 1,186 miliardi, circa 2,37 miliardi.",
      "C": "Non sostenibile, quindi è la risposta: 39 × 3 = 117 milioni, mentre la stima è di 71 milioni (meno del doppio)."
    }
  },
  {
    "id": 3,
    "corretta": "A",
    "suggerimento": "Sottrai la popolazione attuale da quella stimata per il 2100; e rileggi bene a cosa si riferisce il «mille volte».",
    "spiegazione": "Popolazione attuale 7.349 milioni, stima 2100 11.213 milioni: differenza **3.864 milioni**, cioè oltre 3,8 miliardi. Il «mille volte» riguarda lo spazio disponibile pro capite, non la popolazione.",
    "perOpzione": {
      "A": "Corretto: 11.213 − 7.349 = 3.864 milioni, più di 3,8 miliardi.",
      "B": "Falso: a ridursi di mille volte è lo spazio disponibile per ciascuno, non la popolazione, che anzi è cresciuta.",
      "C": "Falso: il brano parla di una distribuzione «sempre più diseguale»."
    }
  },
  {
    "id": 4,
    "corretta": "A",
    "suggerimento": "Applica i moltiplicatori indicati nel brano (raddoppio, quadruplicazione) ai dati attuali.",
    "spiegazione": "L’Africa ha oggi circa 1,186 miliardi di abitanti e nel 2100 li **quadruplicherà**: 1,186 × 4 ≈ 4,74 miliardi, oltre i 4 miliardi.",
    "perOpzione": {
      "A": "Corretto: quadruplicando 1,186 miliardi si arriva a circa 4,74 miliardi.",
      "B": "Falso: l’Asia passa da 4,393 a 4,889 miliardi, un aumento di circa l’11%, lontano dal raddoppio.",
      "C": "Falso: il brano dice l’opposto, cioè che le previsioni demografiche sono «meno inattendibili» di quelle economiche."
    }
  },
  {
    "id": 5,
    "corretta": "A",
    "suggerimento": "Rileggi la prima frase del brano: che cosa «determinò» la crescita dei prezzi?",
    "spiegazione": "Il brano si apre attribuendo l’aumento dei prezzi delle azioni allo «sfrenato **desiderio di arricchirsi in fretta**». Gli altri dati vanno controllati sull’anno esatto e sulle cifre.",
    "perOpzione": {
      "A": "Corretto: è la tesi esplicita della prima frase del brano.",
      "B": "Falso: le 1.200 emissioni diverse si riferiscono al 1929, non al 1928.",
      "C": "Falso: nel 1929 gli azionisti erano «fra 1,5 milioni e 2 milioni», quindi non oltre 2 milioni (e il dato non è riferito alla sola borsa di New York)."
    }
  },
  {
    "id": 6,
    "corretta": "B",
    "suggerimento": "Il brano descrive la fase che precede un evento: quale? E in che anni siamo?",
    "spiegazione": "Il testo descrive la **corsa al rialzo** dei titoli tra il 1926 e il 1929 «alla vigilia del disastro», cioè il crollo di Wall Street dell’ottobre 1929.",
    "perOpzione": {
      "A": "Sbagliata: il brano non descrive il crollo ma la crescita che lo precede, e i fatti si collocano negli anni Venti, non nella seconda metà degli anni Trenta.",
      "B": "Corretta: è proprio il tema del brano, la salita vorticosa dei prezzi prima del disastro.",
      "C": "Sbagliata: la International Postal Union è citata solo come esempio di investimento speculativo precedente, non per una crescita delle sue azioni nel 1925."
    }
  },
  {
    "id": 7,
    "corretta": "B",
    "suggerimento": "Calcola gli incrementi percentuali: (valore finale − valore iniziale) / valore iniziale × 100.",
    "spiegazione": "Posto da agente di borsa: da 76.000 a 625.000 dollari, aumento di 549.000, pari a circa il **722%**. Media dei titoli industriali: da 159 a 381 (300 + 81), circa +140%.",
    "perOpzione": {
      "A": "Falso: da 159 a 381 l’aumento è di 222 punti, circa il 140%, non oltre il 200%.",
      "B": "Corretto: 549 / 76 ≈ 7,22, cioè un incremento di circa il 722%.",
      "C": "Falso due volte: il dato riguarda la sola borsa di New York (non tutte le azioni statunitensi) e l’aumento da 34 a 64 miliardi è di circa l’88%, non il 50%."
    }
  },
  {
    "id": 8,
    "corretta": "B",
    "suggerimento": "Fai le sottrazioni: azioni elencate 1925→1928 e media dei titoli industriali 1925→ottobre 1929.",
    "spiegazione": "Media industriale: 159 nel 1925, 300 nel 1928, più altri 81 punti nel 1929, quindi 381: **+222 punti** in circa quattro anni.",
    "perOpzione": {
      "A": "Falso: da 500mila a 757mila l’incremento è di 257mila, non 157mila.",
      "B": "Corretto: 381 − 159 = 222 punti, oltre 200.",
      "C": "Falso: da 500mila a 757mila c’è un aumento di circa il 51%, non un raddoppio (che sarebbe 1 milione)."
    }
  },
  {
    "id": 9,
    "corretta": "B",
    "suggerimento": "Per ciascuna frase chiediti: è vera sempre, solo in certi casi, mai, oppure è un giudizio personale?",
    "spiegazione": "Bisogna trovare l’etichetta sbagliata. Che gli uomini vestano la calzamaglia è un fatto che accade **in certe situazioni** (sport, teatro, freddo): è «qualche volta vero», non «falso».",
    "perOpzione": {
      "A": "Classificata bene: i frutti del corbezzolo sono effettivamente commestibili.",
      "B": "Classificata male, quindi è la risposta: non è falso, perché talvolta accade; la categoria giusta è «qualche volta vero».",
      "C": "Classificata bene: «si vive bene» è un giudizio soggettivo, quindi un’opinione."
    }
  },
  {
    "id": 10,
    "corretta": "B",
    "suggerimento": "Fissa prima le date di Mario e Sara, poi ricava quella di Carla.",
    "spiegazione": "Mario: luglio 1973. Sara: tre anni più giovane, nata a gennaio, quindi gennaio 1976. Carla: mese successivo a quello di Mario (agosto) e sei anni prima di Sara (1970): **agosto 1970**.",
    "perOpzione": {
      "A": "Sbagliata: Luca è nato a dicembre (stesso mese di Mara, cinque mesi dopo luglio) del 1978, cinque anni dopo Mara.",
      "B": "Corretta: Carla nasce ad agosto (mese dopo luglio) del 1970 (sei anni prima del 1976).",
      "C": "Sbagliata: Sara è nata nel gennaio 1976."
    }
  },
  {
    "id": 11,
    "corretta": "A",
    "suggerimento": "Leggi le quattro lettere di ogni figura in senso orario partendo dall’alto: come cambia la sequenza da una figura all’altra?",
    "spiegazione": "Lette in senso orario dall’alto, le figure danno A-Q-O-R, poi Q-O-R-A, poi O-R-A-Q: ogni volta la sequenza scorre di un posto (ogni lettera ruota di una posizione in senso antiorario). La figura successiva è **R-A-Q-O**: R in alto, A a destra, Q in basso, O a sinistra.",
    "perOpzione": {
      "A": "Corretta: R in alto, A a destra, Q in basso, O a sinistra, cioè la sequenza R-A-Q-O attesa.",
      "B": "Sbagliata: Q in alto e R in basso non rispettano la rotazione; in alto deve arrivare la R.",
      "C": "Sbagliata: la A dovrebbe trovarsi a destra (prosegue il suo giro alto-sinistra-basso-destra), non in alto."
    }
  },
  {
    "id": 12,
    "corretta": "C",
    "suggerimento": "Dopo due ore, quanta strada hanno fatto in tutto i due ciclisti? Ricorda che i primi 5 km servono solo a incrociarsi.",
    "spiegazione": "Si avvicinano e poi si allontanano a velocità relativa 5 + 8 = 13 km/h. In due ore percorrono insieme 26 km: 5 km servono per incontrarsi, i restanti **21 km** sono la distanza che li separa dopo l’incrocio.",
    "perOpzione": {
      "A": "Sbagliata: 6 km non tiene conto della somma delle velocità per l’intero intervallo di due ore.",
      "B": "Sbagliata: 31 km si ottiene sommando i 5 km iniziali ai 26 percorsi, invece di sottrarli.",
      "C": "Corretta: 13 km/h × 2 h = 26 km; 26 − 5 = 21 km."
    }
  },
  {
    "id": 13,
    "corretta": "A",
    "suggerimento": "Cerca le lettere consecutive dell’alfabeto (A, B, C… e M, N…) e segui il loro percorso riga per riga.",
    "spiegazione": "Ci sono due catene alfabetiche intrecciate che si leggono «a serpentina»: prima riga da destra a sinistra (A-M-B-N), seconda da sinistra a destra (C-?-D-P-E), terza da destra a sinistra (F-Q-G-R). La prima catena è A-B-C-D-E-F-G, la seconda M-N-**O**-P-Q-R.",
    "perOpzione": {
      "A": "Corretta: tra N (prima riga) e P (seconda riga) manca proprio la O.",
      "B": "Sbagliata: la P compare già nella seconda riga, subito dopo la D.",
      "C": "Sbagliata: la F compare già nella terza riga ed appartiene all’altra catena (dopo la E)."
    }
  },
  {
    "id": 14,
    "corretta": "C",
    "suggerimento": "Che rapporto c’è tra GOLA e LAGO? Usano le stesse lettere?",
    "spiegazione": "GOLA e LAGO hanno esattamente le stesse lettere in ordine diverso: è un **anagramma** (regola b). L’unica alternativa che è anagramma di ASSO è OSSA.",
    "perOpzione": {
      "A": "Sbagliata: CUBO non ha le lettere di ASSO (manca la A, mancano le due S).",
      "B": "Sbagliata: GATTO ha cinque lettere diverse da quelle di ASSO; non è un anagramma.",
      "C": "Corretta: OSSA usa le stesse lettere di ASSO (A, S, S, O)."
    }
  },
  {
    "id": 15,
    "corretta": "C",
    "suggerimento": "Confronta lettera per lettera: le vocali cambiano? Di quanto si sposta ogni consonante nell’alfabeto italiano?",
    "spiegazione": "Regola comune: le **vocali restano uguali**, ogni consonante diventa la lettera successiva dell’alfabeto italiano (s→t, p→q, r→s, t→u, b→c). In «gloriare» la r diventa t (salto di due posti), quindi la regola non è rispettata.",
    "perOpzione": {
      "A": "Rispetta la regola: a-s-p-i-r-a-t-o diventa a-t-q-i-s-a-u-o (vocali ferme, consonanti +1).",
      "B": "Rispetta la regola: r→s, b→c, b→c, s→t, vocali invariate.",
      "C": "Non rispetta la regola, quindi è la risposta: g→h e l→m vanno bene, ma le due r diventano t invece di s."
    }
  },
  {
    "id": 16,
    "corretta": "B",
    "suggerimento": "Conta le lettere di TRE e di ETERNO.",
    "spiegazione": "TRE ha 3 lettere, ETERNO 6: il numero di lettere è **doppio** (regola a); non sono anagrammi e non condividono tutte le vocali o le consonanti. SOLO ha 4 lettere, quindi serve una parola di 8 lettere.",
    "perOpzione": {
      "A": "Sbagliata: FIUME ha 5 lettere, né il doppio né la metà di 4.",
      "B": "Corretta: CROSTATA ha 8 lettere, il doppio di SOLO.",
      "C": "Sbagliata: LAGO ha 4 lettere come SOLO, non il doppio; e non è nemmeno un suo anagramma."
    }
  },
  {
    "id": 17,
    "corretta": "B",
    "suggerimento": "Verifica ogni alternativa contro tutte e tre le righe: per ognuna conta quanti numeri sono nella stessa posizione.",
    "spiegazione": "La combinazione giusta deve avere **esattamente 2 numeri in posizione** con ciascuna delle tre righe. 3-1-2-4: con 3214 coincidono 3 e 4; con 2134 coincidono 1 e 4; con 4123 coincidono 1 e 2.",
    "perOpzione": {
      "A": "Sbagliata: 2-3-1-4 funziona con le prime due righe, ma con 4-1-2-3 non ha alcun numero in posizione (servono 2).",
      "B": "Corretta: dà 2 coincidenze con ciascuna delle tre righe.",
      "C": "Sbagliata: 1-2-3-4 non ha coincidenze con 4-1-2-3 (servono 2)."
    }
  },
  {
    "id": 18,
    "corretta": "B",
    "suggerimento": "Parti dalle righe con 0: ti dicono quali numeri NON possono stare in certe posizioni.",
    "spiegazione": "Dalle righe con 0: in prima posizione non possono esserci 3 e 1, in seconda né 1 né 3, in terza né 2 né 4, in quarta né 4 né 2. Quindi la terza posizione è 1 o 3 e la quarta 1 o 3. Tra le alternative solo **4-2-3-1** dà poi 2 coincidenze con 4132 (4 e 3) e con 3241 (2 e 1).",
    "perOpzione": {
      "A": "Sbagliata: 4-3-2-1 ha il 3 in seconda posizione e il 2 in terza, entrambe escluse dalle righe con zero.",
      "B": "Corretta: rispetta le righe con 0 e dà 2 coincidenze con ciascuna delle prime due righe.",
      "C": "Sbagliata: 4-2-1-3 con 4-1-3-2 ha solo una coincidenza (il 4), ne servono 2."
    }
  },
  {
    "id": 19,
    "corretta": "C",
    "suggerimento": "Guarda separatamente i numeri e i semi di ogni riga: di quanto crescono i numeri? In che ordine si susseguono i semi?",
    "spiegazione": "In ogni riga il numero cresce di **3** (2-5-8, 1-4-7, 4-?-10, quindi 7) e i semi seguono l’ordine ciclico I-L-M-N (I-L-M, M-N-I, quindi I-L-M). La carta mancante è **7L**.",
    "perOpzione": {
      "A": "Sbagliata: né il numero (2) né il seme (N) seguono la regola della riga.",
      "B": "Sbagliata: il seme L è giusto, ma il numero deve essere 7 (4 + 3), non 4.",
      "C": "Corretta: 4 + 3 = 7 e il seme tra I e M nella sequenza I-L-M-N è L."
    }
  },
  {
    "id": 20,
    "corretta": "B",
    "suggerimento": "Somma le percentuali note e ricava quella mancante.",
    "spiegazione": "Le quattro categorie coprono il 100%: 15% + 40% + 10% = 65%, quindi la licenza media inferiore riguarda il **35%**: 900 × 0,35 = 315.",
    "perOpzione": {
      "A": "Sbagliata: 360 è il 40% di 900, cioè i diplomati di scuola superiore.",
      "B": "Corretta: il 35% di 900 è 315.",
      "C": "Sbagliata: 345 non corrisponde ad alcuna percentuale coerente con i dati (sarebbe circa il 38%)."
    }
  },
  {
    "id": 21,
    "corretta": "A",
    "suggerimento": "Conta quante volte compare ciascuna lettera nelle prime due condizioni e cerca un’operazione tra quei conteggi che dia 6 e 12.",
    "spiegazione": "Conteggi: prima condizione X=4, Y=2, K=3 → 6; seconda X=6, Y=3, K=6 → 12. La regola che funziona per entrambe è **X × K ÷ Y**: 4×3÷2 = 6 e 6×6÷3 = 12. Nella terza X=5, Y=5, K=3: 5×3÷5 = 3.",
    "perOpzione": {
      "A": "Corretta secondo la regola X × K ÷ Y, che è coerente con entrambe le condizioni date: 5 × 3 ÷ 5 = 3.",
      "B": "Sbagliata: nessuna regola coerente con le prime due condizioni porta a 8 (ad esempio X+Y+K−3, che darebbe 6 e 12, nella terza dà 10).",
      "C": "Sbagliata: 9 non deriva da una regola che soddisfi entrambe le condizioni date."
    },
    "nota": "Chiave ricostruita: la regola X × K ÷ Y è l’unica semplice trovata che soddisfa le due condizioni e porta a un valore tra le opzioni; altre regole (es. 2×K, X+Y+K−3) danno 6 o 10, che non sono tra le alternative."
  },
  {
    "id": 22,
    "corretta": "B",
    "suggerimento": "Calcola la differenza tra termini consecutivi in ogni serie.",
    "spiegazione": "Due serie scendono con passo costante **−3** (95-92-89-86; 37-34-31-28). La terza ha differenze −5, −5, −15: non è una progressione regolare.",
    "perOpzione": {
      "A": "Segue la regola: ogni termine diminuisce di 3.",
      "B": "Non segue la regola, quindi è la risposta: 79-74-69 scende di 5, poi 69-54 scende di 15.",
      "C": "Segue la regola: ogni termine diminuisce di 3."
    }
  },
  {
    "id": 23,
    "corretta": "A",
    "suggerimento": "In ogni riga, guarda la relazione tra il primo numero, il secondo e l’ultimo.",
    "spiegazione": "In ogni riga il quarto numero è la differenza tra il secondo e il primo: 14 − 6 = 8, 51 − 42 = 9. Nella terza riga 43 − ? = 12, quindi **? = 31**.",
    "perOpzione": {
      "A": "Corretta: 31 è maggiore o uguale a 30.",
      "B": "Sbagliata: con 21 la differenza sarebbe 22, non 12.",
      "C": "Sbagliata: il valore è 31, quindi non minore di 30."
    }
  },
  {
    "id": 24,
    "corretta": "B",
    "suggerimento": "Guarda le colonne: come cambiano i numeri scendendo di riga?",
    "spiegazione": "Ogni colonna varia di 1 per riga: prima 7-6-5, seconda 9-8-7, quarta 3-4-5, e la terza 1-2-**3**. Lo conferma la regola di riga: il quarto numero è il terzo + 2 (1+2, 2+2, 3+2 = 5).",
    "perOpzione": {
      "A": "Sbagliata: con 4 la colonna non crescerebbe di 1 e 4 + 2 darebbe 6, non 5.",
      "B": "Corretta: il valore è 3, compreso tra 2 e 7.",
      "C": "Sbagliata: il valore cercato è 3, non maggiore di 6."
    }
  },
  {
    "id": 25,
    "corretta": "C",
    "suggerimento": "Pensa alla legge n. 400/1988 sull’ordinamento della Presidenza del Consiglio: quale criterio oggettivo usa in mancanza del Vicepresidente?",
    "spiegazione": "L’art. 8 della **l. 400/1988** prevede al comma 1 che, in caso di assenza o impedimento temporaneo del Presidente del Consiglio, la supplenza spetti al Vicepresidente; il comma 2 aggiunge: «Quando non sia stato nominato il Vicepresidente del Consiglio dei ministri, la supplenza di cui al comma 1 spetta, in assenza di diversa disposizione da parte del Presidente del Consiglio dei ministri, al **ministro più anziano secondo l'età**» (testo identico nel 2019 e oggi).",
    "perOpzione": {
      "A": "Sbagliata: il Ministro dell’Interno non ha per legge alcuna funzione di supplenza del Presidente del Consiglio.",
      "B": "Sbagliata: il sottosegretario alla Presidenza non è membro del Consiglio dei ministri e non supplisce il Presidente.",
      "C": "Corretta: è il criterio residuale dell’art. 8, comma 2, della l. 400/1988."
    },
    "riferimenti": [
      {
        "normaId": "l400_1988_art_8"
      }
    ]
  },
  {
    "id": 26,
    "corretta": "B",
    "suggerimento": "La Costituzione vieta davvero alla legge di avere contenuto particolare e concreto? Cosa dice la Corte costituzionale?",
    "spiegazione": "Le **leggi-provvedimento** (contenuto particolare e concreto) non sono di per sé incostituzionali: la Costituzione non impone che la legge sia generale e astratta, né prevede una riserva di amministrazione. La Corte costituzionale le sottopone però a uno **scrutinio stretto** di ragionevolezza e non arbitrarietà, per il rischio di disparità di trattamento (tra le altre, sent. n. 85/2013 e n. 275/2013).",
    "perOpzione": {
      "A": "Sbagliata: la Costituzione non impone i caratteri di generalità e astrattezza alla legge; per questo le leggi-provvedimento sono ammesse.",
      "B": "Corretta: sono legittime ma soggette a un controllo più rigoroso di ragionevolezza.",
      "C": "Sbagliata: secondo la Corte non esiste in Costituzione una riserva di amministrazione che impedisca al legislatore di provvedere su casi concreti."
    },
    "riferimenti": [
      {
        "normaId": "cost_art_97"
      }
    ]
  },
  {
    "id": 27,
    "corretta": "A",
    "suggerimento": "Ricorda la formula del secondo comma dell’art. 32: «Nessuno può essere obbligato… se non…»",
    "spiegazione": "L’art. 32, comma 2, Cost. stabilisce che «nessuno può essere obbligato a un determinato trattamento sanitario **se non per disposizione di legge**» (riserva di legge), che comunque non può violare i limiti imposti dal rispetto della persona umana.",
    "perOpzione": {
      "A": "Corretta: riproduce la riserva di legge dell’art. 32, comma 2, Cost.",
      "B": "Sbagliata: il trattamento obbligatorio è un’eccezione, ammessa solo se previsto da una legge.",
      "C": "Sbagliata: il consenso informato è la regola per i trattamenti volontari; quello obbligatorio, per definizione, prescinde dal consenso e si fonda sulla legge."
    },
    "riferimenti": [
      {
        "normaId": "cost_art_32"
      }
    ]
  },
  {
    "id": 28,
    "corretta": "A",
    "suggerimento": "L’art. 104 Cost. indica due categorie tra cui il Parlamento sceglie i membri «laici»: quali e con quali requisiti?",
    "spiegazione": "L’art. 104, quarto comma, Cost. stabilisce che gli altri componenti del CSM sono eletti «per un terzo dal Parlamento in seduta comune tra **professori ordinari di università in materie giuridiche** ed **avvocati dopo quindici anni di esercizio**».",
    "perOpzione": {
      "A": "Corretta: è una delle due categorie previste dall’art. 104 Cost.",
      "B": "Sbagliata: per gli avvocati sono richiesti quindici anni di esercizio, non dieci.",
      "C": "Sbagliata: per i professori conta la qualifica di ordinario, non un’anzianità di quindici anni (requisito previsto invece per gli avvocati)."
    },
    "riferimenti": [
      {
        "normaId": "cost_art_104"
      }
    ]
  },
  {
    "id": 29,
    "corretta": "C",
    "suggerimento": "L’art. 17-bis della l. 241/1990 è intitolato al «silenzio» tra amministrazioni: che valore dà al silenzio?",
    "spiegazione": "L’art. 17-bis della **l. 241/1990** (introdotto dalla l. 124/2015) disciplina il **silenzio-assenso tra amministrazioni pubbliche**: il comma 2 dispone che, «Decorsi i termini di cui al comma 1 senza che sia stato comunicato l'assenso, il concerto o il nulla osta, **lo stesso si intende acquisito**» (il termine è di regola di 30 giorni; testo identico nel 2019 e oggi). L’intervento del Presidente del Consiglio, previa deliberazione del Consiglio dei ministri, è previsto solo «In caso di mancato accordo tra le amministrazioni statali coinvolte».",
    "perOpzione": {
      "A": "Sbagliata: la conferenza di servizi non è la conseguenza del silenzio prevista dall’art. 17-bis, che invece fa scattare l’assenso.",
      "B": "Sbagliata: la decisione del Presidente del Consiglio, previa deliberazione del Consiglio dei ministri, riguarda il caso di dissenso espresso (mancato accordo) tra amministrazioni statali, non il silenzio.",
      "C": "Corretta: è il silenzio-assenso previsto dall’art. 17-bis."
    },
    "riferimenti": [
      {
        "normaId": "l241_1990_art_17_bis"
      },
      {
        "normaId": "l241_1990_art_14_ter"
      }
    ]
  },
  {
    "id": 30,
    "corretta": "B",
    "suggerimento": "Chi ha votato contro o si è astenuto ha contribuito alla decisione dannosa?",
    "spiegazione": "L’art. 1, comma 1-ter, della **l. 20/1994** stabilisce: «Nel caso di deliberazioni di organi collegiali la responsabilità si imputa **esclusivamente a coloro che hanno espresso voto favorevole**» (testo identico nel 2019 e oggi).",
    "perOpzione": {
      "A": "Sbagliata: i membri dissenzienti o assenti non rispondono della deliberazione.",
      "B": "Corretta: è la regola dell’art. 1, comma 1-ter, l. 20/1994.",
      "C": "Sbagliata: la sola partecipazione al voto non basta; chi ha votato contro non è responsabile."
    },
    "riferimenti": [
      {
        "normaId": "l20_1994_art_1"
      }
    ]
  },
  {
    "id": 31,
    "corretta": "B",
    "suggerimento": "La revoca guarda al passato o al futuro? Distinguila dall’annullamento d’ufficio.",
    "spiegazione": "Per l’art. 21-quinquies della **l. 241/1990** la revoca (per sopravvenuti motivi di pubblico interesse, mutamento della situazione di fatto o nuova valutazione dell’interesse pubblico originario) determina «la **inidoneità del provvedimento revocato a produrre ulteriori effetti**»: opera *ex nunc*. L’effetto retroattivo (*ex tunc*) è tipico dell’annullamento.",
    "perOpzione": {
      "A": "Sbagliata: la revoca non retroagisce al momento del mutamento dei fatti; produce effetti da quando viene adottata, per il futuro.",
      "B": "Corretta: è la formula testuale dell’art. 21-quinquies, efficacia ex nunc.",
      "C": "Sbagliata: l’eliminazione degli effetti fin dall’adozione (ex tunc) è propria dell’annullamento, non della revoca."
    },
    "riferimenti": [
      {
        "normaId": "l241_1990_art_21_quinquies"
      }
    ]
  },
  {
    "id": 32,
    "corretta": "A",
    "suggerimento": "Dopo la riforma del 2017, l’art. 5 distingue obiettivi comuni a tutte le PA da obiettivi propri di ciascuna amministrazione.",
    "spiegazione": "L’art. 5, comma 01, del **d.lgs. 150/2009** (inserito dal d.lgs. 74/2017, quindi già in vigore nel 2019) stabilisce: «Gli obiettivi si articolano in: a) **obiettivi generali**, che identificano [...] le priorità strategiche delle pubbliche amministrazioni [...]; b) **obiettivi specifici** di ogni pubblica amministrazione», individuati nel Piano della performance. Gli obiettivi generali sono fissati in coerenza con le priorità delle politiche pubbliche nazionali.",
    "perOpzione": {
      "A": "Corretta: è la distinzione prevista dall’art. 5 del d.lgs. 150/2009.",
      "B": "Sbagliata: la classificazione macro/micro non è utilizzata dalla norma.",
      "C": "Sbagliata: la distinzione tra obiettivi trasversali e settoriali non è quella dell’art. 5."
    },
    "riferimenti": [
      {
        "normaId": "dlgs150_2009_art_5"
      }
    ]
  },
  {
    "id": 33,
    "corretta": "A",
    "suggerimento": "I motivi aggiunti servono solo a rafforzare la domanda originaria o anche ad ampliarla?",
    "spiegazione": "L’art. 43, comma 1, del **c.p.a.** (d.lgs. 104/2010) dispone: «I ricorrenti, principale e incidentale, possono introdurre con motivi aggiunti **nuove ragioni** a sostegno delle domande già proposte, **ovvero domande nuove purché connesse** a quelle già proposte».",
    "perOpzione": {
      "A": "Corretta: riproduce il testo dell’art. 43 c.p.a.",
      "B": "Sbagliata: i motivi aggiunti possono contenere anche nuove ragioni a sostegno delle domande originarie, non solo domande nuove.",
      "C": "Sbagliata: oltre alle nuove ragioni sono ammesse anche domande nuove connesse."
    },
    "riferimenti": [
      {
        "normaId": "cpa_art_43"
      }
    ]
  },
  {
    "id": 34,
    "corretta": "C",
    "suggerimento": "Che differenza c’è tra procedura aperta e procedura ristretta?",
    "spiegazione": "Nella **procedura ristretta** ogni operatore può chiedere di partecipare, ma solo gli invitati presentano l’offerta. Nel 2019 l’art. 61, comma 3, del d.lgs. 50/2016 stabiliva: «A seguito della valutazione da parte delle amministrazioni aggiudicatrici delle informazioni fornite, **soltanto gli operatori economici invitati possono presentare un'offerta**». Oggi la stessa regola, con le stesse parole (salvo «stazioni appaltanti» al posto di «amministrazioni aggiudicatrici»), è nell’art. 72, comma 3, del d.lgs. 36/2023.",
    "perOpzione": {
      "A": "Sbagliata: non esiste un’autorizzazione dell’ANAC come requisito per presentare offerta.",
      "B": "Sbagliata: la legge non richiede una specifica esperienza quinquennale; i requisiti sono fissati dal bando e la selezione avviene tramite invito.",
      "C": "Corretta: è il tratto distintivo della procedura ristretta."
    },
    "riferimenti": [
      {
        "normaId": "dlgs50_2016_art_61"
      },
      {
        "normaId": "dlgs36_2023_art_72"
      }
    ]
  },
  {
    "id": 35,
    "corretta": "A",
    "suggerimento": "Si tratta di un’aspettativa senza assegni: ha senso che valga ai fini pensionistici?",
    "spiegazione": "Nel testo dell’art. 23-bis del **d.lgs. 165/2001** in vigore nel 2019, il comma 1 prevedeva il collocamento in aspettativa senza assegni dei «dirigenti delle pubbliche amministrazioni» (e di altre categorie) per svolgere attività presso soggetti e organismi pubblici o privati, e il comma 4 stabiliva: «Nel caso di svolgimento di attività presso soggetti diversi dalle amministrazioni pubbliche, il periodo di collocamento in aspettativa di cui al comma 1 **non può superare i cinque anni e non è computabile ai fini del trattamento di quiescenza e previdenza**». Oggi il comma 1 si riferisce ai «dipendenti delle pubbliche amministrazioni» e il comma 4 dice che il periodo «non può superare i cinque anni, è rinnovabile per una sola volta e non è computabile ai fini del trattamento di quiescenza e previdenza»: la risposta resta la stessa.",
    "perOpzione": {
      "A": "Corretta: cinque anni massimo e nessun computo a fini di quiescenza e previdenza.",
      "B": "Sbagliata: il limite è di cinque anni, non tre.",
      "C": "Sbagliata: il limite non è di sette anni e il periodo non è computabile ai fini previdenziali."
    },
    "riferimenti": [
      {
        "normaId": "dlgs165_2001_art_23_bis"
      }
    ]
  },
  {
    "id": 36,
    "corretta": "B",
    "suggerimento": "L’obbligo di motivazione è scritto nella Costituzione o nella legge generale sul procedimento?",
    "spiegazione": "L’obbligo generale di motivazione è stabilito dall’art. 3, comma 1, della **l. 241/1990**: «Ogni provvedimento amministrativo [...] **deve essere motivato**, salvo che nelle ipotesi previste dal comma 2» (atti normativi e a contenuto generale); la motivazione deve indicare «i presupposti di fatto e le ragioni giuridiche» della decisione (testo identico nel 2019 e oggi). L’art. 113 Cost. riguarda invece la tutela giurisdizionale contro gli atti della PA.",
    "perOpzione": {
      "A": "Sbagliata: l’art. 113 Cost. garantisce la tutela giurisdizionale, non impone espressamente la motivazione.",
      "B": "Corretta: è l’art. 3 della l. 241/1990.",
      "C": "Sbagliata: la motivazione è richiesta per ogni provvedimento amministrativo, non solo per quelli sanzionatori o ablatori."
    },
    "riferimenti": [
      {
        "normaId": "l241_1990_art_3"
      },
      {
        "normaId": "cost_art_113"
      }
    ]
  },
  {
    "id": 37,
    "corretta": "C",
    "suggerimento": "Scaduto il termine, la norma dice che l’amministrazione «può» o che «procede»? E ci sono pareri per cui la regola non vale?",
    "spiegazione": "Nel testo dell’**art. 16, co. 2, l. 241/1990** in vigore all’epoca della prova (2019), decorsi i 20 giorni senza parere né esigenze istruttorie «**è in facoltà** dell’amministrazione richiedente di procedere indipendentemente dall’espressione del parere»; il **comma 3** esclude questa possibilità per i pareri delle amministrazioni preposte alla tutela **ambientale, paesaggistica, territoriale e della salute**. Oggi, dopo il **d.l. 76/2020**, la norma dice che l’amministrazione «**procede**»: la facoltà è diventata un obbligo, con la stessa eccezione.",
    "perOpzione": {
      "A": "Descrive la regola **oggi vigente** («procede», dopo il d.l. 76/2020), non quella del 2019, quando la legge parlava di facoltà.",
      "B": "Coglie la facoltà prevista nel 2019, ma dimentica l’eccezione del comma 3 per i pareri in materia ambientale, paesaggistica, territoriale e sanitaria.",
      "C": "È il testo in vigore all’epoca della prova: facoltà di procedere, salvo i pareri delle amministrazioni preposte a ambiente, paesaggio, territorio e salute."
    },
    "nota": "Chiave secondo la norma in vigore nel 2019, data della prova. Con il testo attuale (d.l. 76/2020: «procede») la risposta sarebbe quella che parla di obbligo.",
    "riferimenti": [
      {
        "normaId": "l241_1990_art_16"
      }
    ]
  },
  {
    "id": 38,
    "corretta": "A",
    "suggerimento": "La cittadinanza europea si aggiunge a quella nazionale: da cosa dipende?",
    "spiegazione": "L’art. 20, paragrafo 1, del **TFUE** (come l’art. 9 TUE) stabilisce: «**È cittadino dell'Unione chiunque abbia la cittadinanza di uno Stato membro.** La cittadinanza dell'Unione si aggiunge alla cittadinanza nazionale e non la sostituisce». Sono gli Stati a decidere chi è loro cittadino.",
    "perOpzione": {
      "A": "Corretta: è la definizione dell’art. 20 TFUE.",
      "B": "Sbagliata: la cittadinanza UE non deriva dall’origine dei genitori ma dal possesso della cittadinanza di uno Stato membro, secondo le leggi nazionali.",
      "C": "Sbagliata: la nascita nel territorio dell’Unione non attribuisce di per sé la cittadinanza europea."
    },
    "riferimenti": [
      {
        "normaId": "tfue_art_20"
      },
      {
        "normaId": "tue_art_9"
      }
    ]
  },
  {
    "id": 39,
    "corretta": "C",
    "suggerimento": "La disapplicazione è possibile solo se la norma europea è direttamente applicabile. E se non lo è?",
    "spiegazione": "Secondo la giurisprudenza costituzionale (sent. n. 170/1984 «Granital» e successive, tra cui n. 284/2007), il giudice **disapplica** la norma interna solo se contrasta con una norma UE dotata di **effetto diretto**. Se la norma europea ne è priva, e l’interpretazione conforme non è possibile, il giudice deve **sollevare questione di legittimità costituzionale** per violazione degli artt. 11 e 117, comma 1, Cost.",
    "perOpzione": {
      "A": "Sbagliata: la disapplicazione è riservata al contrasto con norme UE con effetto diretto.",
      "B": "Sbagliata: il giudice comune non dichiara l’abrogazione di una legge per contrasto con il diritto UE.",
      "C": "Corretta: in mancanza di effetto diretto la via è l’incidente di costituzionalità (artt. 11 e 117 Cost.)."
    },
    "riferimenti": [
      {
        "normaId": "cost_art_11"
      },
      {
        "normaId": "cost_art_117"
      }
    ]
  },
  {
    "id": 40,
    "corretta": "B",
    "suggerimento": "Quanti sono i giudici dell’Aia e chi li elegge? Conta la nazionalità?",
    "spiegazione": "Lo **Statuto della Corte internazionale di giustizia** prevede **15 giudici** (art. 3), eletti senza riguardo alla loro nazionalità (art. 2 dello Statuto) dall’**Assemblea generale e dal Consiglio di sicurezza**, che votano separatamente (artt. 4 e 8). Non possono esserci due giudici della stessa nazionalità.",
    "perOpzione": {
      "A": "Sbagliata: i giudici sono 15 e li eleggono sia l’Assemblea generale sia il Consiglio di sicurezza, non il solo Consiglio.",
      "B": "Corretta: 15 giudici, eletti sia dall’Assemblea generale sia dal Consiglio di sicurezza (con votazioni separate), a prescindere dalla nazionalità.",
      "C": "Sbagliata: i giudici non devono provenire dai membri permanenti del Consiglio di sicurezza; la scelta prescinde dalla nazionalità."
    }
  },
  {
    "id": 41,
    "corretta": "B",
    "suggerimento": "Pensa all’illuminazione pubblica o alla difesa nazionale: si può impedire a qualcuno di goderne? Il consumo di uno riduce quello degli altri?",
    "spiegazione": "Un **bene pubblico puro** ha due caratteristiche: **non escludibilità** (non si può impedire a nessuno di fruirne) e **non rivalità** nel consumo (il consumo di uno non riduce la disponibilità per gli altri). Esempi classici: difesa nazionale, illuminazione stradale.",
    "perOpzione": {
      "A": "Sbagliata: i beni non escludibili ma rivali sono le risorse comuni (common pool), come i pesci in mare aperto.",
      "B": "Corretta: non escludibilità e non rivalità definiscono il bene pubblico puro.",
      "C": "Sbagliata: escludibilità e rivalità sono le caratteristiche dei beni privati."
    }
  },
  {
    "id": 42,
    "corretta": "C",
    "suggerimento": "Nel lungo periodo, con reddito al livello naturale e tasso d’interesse fissato dal mercato mondiale, da cosa dipendono le esportazioni nette?",
    "spiegazione": "Nel modello di piccola economia aperta con perfetta mobilità dei capitali, nel lungo periodo **NX = S − I(r*)**: il risparmio nazionale dipende dal reddito naturale e l’investimento dal tasso mondiale. Un aumento del reddito estero non tocca né S né I(r*): fa aumentare la domanda di beni nazionali, ma il **tasso di cambio reale si apprezza** e riporta le esportazioni nette al livello di partenza.",
    "perOpzione": {
      "A": "Sbagliata: lo shock estero non riduce le esportazioni nette; l’apprezzamento del cambio ne compensa esattamente l’effetto espansivo.",
      "B": "Sbagliata: l’aumento iniziale della domanda estera viene neutralizzato dall’apprezzamento del cambio reale, perché NX resta pari a S − I(r*).",
      "C": "Corretta: S e I(r*) non cambiano, quindi neppure le esportazioni nette; si aggiusta solo il cambio reale."
    }
  },
  {
    "id": 43,
    "corretta": "C",
    "suggerimento": "Nel modello salari-prezzi (WS-PS), un’imposta sul lavoro a carico delle imprese agisce come un aumento dei costi: come cambia il salario reale che le imprese sono disposte a pagare?",
    "spiegazione": "Nel modello WS-PS (Blanchard), un aumento delle imposte sul lavoro a carico delle imprese accresce il costo del lavoro: la relazione di fissazione dei prezzi si sposta verso il basso, cioè il **salario reale** compatibile con i prezzi **diminuisce**. Per far accettare ai lavoratori un salario reale più basso serve una disoccupazione più alta: il **tasso naturale di disoccupazione aumenta**.",
    "perOpzione": {
      "A": "Sbagliata: la disoccupazione aumenta, ma il salario reale dei lavoratori diminuisce, non aumenta.",
      "B": "Sbagliata: il tasso di disoccupazione aumenta, non si riduce.",
      "C": "Corretta: più disoccupazione naturale e salario reale più basso."
    }
  },
  {
    "id": 44,
    "corretta": "A",
    "suggerimento": "Con beni perfetti sostituti le curve di indifferenza sono rette: dove tocca il vincolo di bilancio la curva più alta?",
    "spiegazione": "Con **perfetti sostituti** le curve di indifferenza sono rette con inclinazione pari al saggio marginale di sostituzione (SMS). Se l’SMS è diverso dal rapporto tra i prezzi, l’ottimo è una **soluzione d’angolo**: il consumatore spende tutto il reddito sul bene relativamente più conveniente.",
    "perOpzione": {
      "A": "Corretta: soluzione d’angolo, si acquista solo il bene che dà più utilità per euro speso.",
      "B": "Sbagliata: il consumatore spende il suo reddito; con preferenze monotone non rinuncia a consumare.",
      "C": "Sbagliata: comprare entrambi i beni è ottimale solo se l’SMS è uguale al rapporto dei prezzi (in quel caso qualsiasi combinazione sul vincolo va bene)."
    }
  },
  {
    "id": 45,
    "corretta": "C",
    "suggerimento": "I costi fissi non cambiano con la produzione: cosa succede se li dividi per un numero di unità sempre più grande?",
    "spiegazione": "Il **costo fisso medio** è CFM = CF / Q: poiché il costo fisso è costante, all’aumentare della quantità prodotta il CFM **diminuisce sempre** (graficamente è un’iperbole equilatera).",
    "perOpzione": {
      "A": "Sbagliata: l’andamento a U (prima decrescente poi crescente) è tipico del costo medio totale e del costo medio variabile, non del costo fisso medio.",
      "B": "Sbagliata: il costo fisso totale è indipendente dalla quantità, ma quello medio no: si riduce al crescere di Q.",
      "C": "Corretta: CF/Q decresce al crescere di Q."
    }
  },
  {
    "id": 46,
    "corretta": "A",
    "suggerimento": "Nel breve periodo un’impresa produce anche in perdita, purché copra… quali costi?",
    "spiegazione": "Nel breve periodo l’impresa concorrenziale produce finché il prezzo copre almeno i **costi variabili medi** (i costi fissi vanno pagati comunque). La curva di offerta è quindi il tratto crescente della curva dei costi marginali **a partire dal minimo del costo medio variabile** (punto di chiusura).",
    "perOpzione": {
      "A": "Corretta: il minimo del costo medio variabile è la soglia di chiusura nel breve periodo.",
      "B": "Sbagliata: il minimo del costo medio totale è la soglia rilevante nel lungo periodo (punto di pareggio), non nel breve.",
      "C": "Sbagliata: il costo fisso medio è sempre decrescente e non ha un punto di minimo."
    }
  },
  {
    "id": 47,
    "corretta": "C",
    "suggerimento": "Con cambi fissi, se entrano più valute di quante ne escano, cosa deve fare la banca centrale per evitare che il cambio si apprezzi?",
    "spiegazione": "In **cambi fissi**, un avanzo della bilancia dei pagamenti crea un eccesso di offerta di valuta estera: per difendere la parità la banca centrale la **acquista** cedendo moneta nazionale. Aumentano quindi le **riserve ufficiali** e la **base monetaria** (in assenza di sterilizzazione).",
    "perOpzione": {
      "A": "Sbagliata: le riserve aumentano, ma l’acquisto di valuta con moneta nazionale fa crescere, non diminuire, l’offerta di moneta.",
      "B": "Sbagliata: la riduzione di riserve e moneta è l’effetto di un disavanzo.",
      "C": "Corretta: aumentano sia le riserve sia l’offerta di moneta."
    }
  },
  {
    "id": 48,
    "corretta": "B",
    "suggerimento": "Se i prezzi salgono, cosa succede all’offerta reale di moneta M/P? E quindi alla curva LM?",
    "spiegazione": "Un aumento esogeno di P riduce l’**offerta reale di moneta** M/P. A parità di reddito, per riequilibrare il mercato monetario il **tasso d’interesse deve salire**: la curva LM si sposta verso l’alto (a sinistra) e nell’equilibrio IS-LM il tasso aumenta.",
    "perOpzione": {
      "A": "Sbagliata: l’effetto è univoco; la contrazione della moneta reale fa salire il tasso.",
      "B": "Corretta: meno moneta reale, LM verso sinistra, tasso più alto.",
      "C": "Sbagliata: una riduzione del tasso si avrebbe con un calo dei prezzi o un aumento dell’offerta nominale di moneta."
    }
  },
  {
    "id": 49,
    "corretta": "B",
    "suggerimento": "Vendere significa incassare (entrata, non spesa). Se il prezzo è pari al valore contabile, c’è un guadagno?",
    "spiegazione": "Nella contabilità integrata la vendita di un immobile produce: sul piano finanziario un **accertamento di entrata** (in conto capitale); sul piano patrimoniale la **riduzione dell’immobilizzazione** e la nascita di un **credito** verso l’acquirente, poi riscosso. Poiché prezzo e valore contabile coincidono, **non c’è plusvalenza** né minusvalenza.",
    "perOpzione": {
      "A": "Sbagliata: l’impegno riguarda le spese; dalla vendita nasce un credito, non un debito.",
      "B": "Corretta: accertamento, riduzione dell’immobilizzazione e credito da riscuotere.",
      "C": "Sbagliata: la plusvalenza si ha solo se il prezzo supera il valore contabile; qui coincidono."
    }
  },
  {
    "id": 50,
    "corretta": "B",
    "suggerimento": "Chi decide gli obiettivi e chi agisce per raggiungerli, nel rapporto principale-agente?",
    "spiegazione": "La **teoria dell’agenzia** studia il rapporto in cui un soggetto (principale) **delega** a un altro (agente) il compito di perseguire i propri interessi. Poiché l’agente ha informazioni e interessi propri, nascono asimmetrie informative e costi di agenzia (controllo, incentivi).",
    "perOpzione": {
      "A": "Sbagliata: l’agente non è un mero esecutore di procedure; ha discrezionalità e informazioni proprie, ed è proprio questo a creare il problema di agenzia.",
      "B": "Corretta: è la definizione della relazione di agenzia.",
      "C": "Sbagliata: gli obiettivi sono del principale; l’agente non li fissa in autonomia."
    }
  },
  {
    "id": 51,
    "corretta": "C",
    "suggerimento": "Il campo organizzativo non è un gruppo societario né un settore specifico: pensa a tutti gli attori con cui un’organizzazione interagisce.",
    "spiegazione": "Per DiMaggio e Powell (1983) il **campo organizzativo** è l’insieme delle organizzazioni che, nel complesso, costituiscono un’**area riconosciuta di vita istituzionale**: fornitori chiave, consumatori di risorse e prodotti, agenzie di regolazione e altre organizzazioni che producono beni o servizi simili. Al suo interno operano le pressioni all’isomorfismo.",
    "perOpzione": {
      "A": "Sbagliata: il campo non è limitato al non profit né ai servizi sociali.",
      "B": "Sbagliata: descrive un gruppo d’imprese legato da partecipazioni, non un campo organizzativo.",
      "C": "Corretta: è la definizione classica di DiMaggio e Powell."
    }
  },
  {
    "id": 52,
    "corretta": "C",
    "suggerimento": "Alta specializzazione orizzontale = pochi compiti ripetuti; alta specializzazione verticale = nessun controllo sul proprio lavoro. Che tipo di mansione ne esce?",
    "spiegazione": "Secondo Mintzberg, le mansioni **specializzate sia orizzontalmente** (pochi compiti ristretti) **sia verticalmente** (separazione tra esecuzione e controllo) sono quelle **non qualificate**, ripetitive e standardizzate, tipiche del nucleo operativo (es. catena di montaggio).",
    "perOpzione": {
      "A": "Sbagliata: le mansioni qualificate (professionali) hanno alta specializzazione orizzontale ma bassa specializzazione verticale.",
      "B": "Sbagliata: le mansioni manageriali hanno bassa specializzazione sia orizzontale sia verticale.",
      "C": "Corretta: sono le mansioni poco qualificate e standardizzate."
    }
  },
  {
    "id": 53,
    "corretta": "B",
    "suggerimento": "La teoria di Vroom è una teoria «di processo», non dei bisogni: su cosa basa l’intensità della motivazione?",
    "spiegazione": "Nella **teoria aspettativa-valenza** di Vroom la forza motivazionale dipende dal **valore (valenza)** attribuito ai possibili risultati, **ponderato con l’aspettativa** (probabilità) di raggiungerli e con la strumentalità della prestazione.",
    "perOpzione": {
      "A": "Sbagliata: è la gerarchia dei bisogni di Maslow.",
      "B": "Corretta: valenza dei risultati per la probabilità di ottenerli.",
      "C": "Sbagliata: richiama la teoria dei bisogni di McClelland (successo, potere, affiliazione), non quella di Vroom."
    }
  },
  {
    "id": 54,
    "corretta": "C",
    "suggerimento": "«Path» = percorso, «dependency» = dipendenza: la storia passata conta per gli esiti futuri?",
    "spiegazione": "La **path dependency** (David, Arthur) indica che gli esiti economici e organizzativi dipendono dalla **sequenza degli eventi passati**: scelte iniziali, anche casuali, possono vincolare l’evoluzione successiva (esempio classico: la tastiera QWERTY).",
    "perOpzione": {
      "A": "Sbagliata: la one best way è il principio dell’organizzazione scientifica del lavoro di Taylor.",
      "B": "Sbagliata: descrive l’idea di un equilibrio unico ed efficiente, che la path dependency contesta (possono esistere più equilibri, anche inefficienti).",
      "C": "Corretta: gli esiti sono influenzati e spiegabili alla luce degli eventi passati."
    }
  },
  {
    "id": 55,
    "corretta": "B",
    "suggerimento": "Il ciclo delle politiche ha più fasi: agenda, formulazione, decisione, … valutazione. «Implementare» in italiano significa?",
    "spiegazione": "Nel ciclo delle politiche pubbliche (agenda, formulazione, decisione, **implementazione**, valutazione), l’implementazione è la fase di **attuazione concreta** delle scelte del decisore pubblico da parte degli apparati amministrativi e degli altri attori.",
    "perOpzione": {
      "A": "Sbagliata: la stima delle risorse rientra nella formulazione e programmazione dell’intervento.",
      "B": "Corretta: implementazione significa attuazione.",
      "C": "Sbagliata: la verifica dei risultati e degli impatti è la fase di valutazione."
    }
  },
  {
    "id": 56,
    "corretta": "C",
    "suggerimento": "Quale avverbio forma un’espressione fissa con «to put it» per introdurre un giudizio franco e diretto?",
    "spiegazione": "**To put it bluntly** significa «per dirla senza mezzi termini»: introduce un giudizio schietto e critico, come quello della frase (i funzionari hanno badato a spuntare caselle invece di aiutare i cittadini).",
    "perOpzione": {
      "A": "Sbagliata: «thoroughly» significa «accuratamente, a fondo» e non forma questa espressione.",
      "B": "Sbagliata: «to put it basically» non è un’espressione idiomatica; si dice «basically» da solo o «to put it simply».",
      "C": "Corretta: «to put it bluntly» è l’espressione idiomatica giusta per un giudizio franco."
    }
  },
  {
    "id": 57,
    "corretta": "A",
    "suggerimento": "Il libro bianco non cita un rapporto di novembre 2018: cosa se ne deduce logicamente sulla data in cui è stato scritto?",
    "spiegazione": "I modali al passato esprimono deduzioni: **must have been** = «deve essere stato» (deduzione quasi certa), **can't have been** = «non può essere stato», **should have been** = «avrebbe dovuto essere». Se il documento non cita il rapporto, la deduzione logica è che sia stato scritto prima.",
    "perOpzione": {
      "A": "Corretta: esprime la deduzione logica «deve essere stato scritto prima».",
      "B": "Sbagliata: «should have been» esprime un dovere non rispettato o un’aspettativa, non una deduzione.",
      "C": "Sbagliata: dice il contrario di ciò che si deduce dalla frase."
    }
  },
  {
    "id": 58,
    "corretta": "A",
    "suggerimento": "Quale verbo inglese si usa con «poverty» nel senso di «affrontare/combattere» un problema?",
    "spiegazione": "**To tackle** (a problem, poverty, inequality) significa «affrontare, combattere» un problema: è la collocazione standard. In questo caso il gerundio «Tackling» fa da soggetto della frase.",
    "perOpzione": {
      "A": "Corretta: «tackling poverty and inequality» = affrontare povertà e disuguaglianza.",
      "B": "Sbagliata: «to confound» significa «confondere, sconcertare» o «smentire».",
      "C": "Sbagliata: «to affront» significa «offendere, insultare»; è un falso amico dell’italiano «affrontare»."
    }
  },
  {
    "id": 59,
    "corretta": "C",
    "suggerimento": "Una delle espressioni contiene la parola «business» usata con un verbo che significa «intendere».",
    "spiegazione": "**To mean business** significa «fare sul serio», essere seri e determinati in ciò che si fa (es. «This time the government means business»).",
    "perOpzione": {
      "A": "Sbagliata: «stroke of business» non è un idioma con questo significato (esiste invece «stroke of luck», colpo di fortuna).",
      "B": "Sbagliata: «golden mean» è il «giusto mezzo», la via di mezzo tra due estremi.",
      "C": "Corretta: «mean business» = fare sul serio."
    }
  },
  {
    "id": 60,
    "corretta": "A",
    "suggerimento": "La frase parla di somiglianza fisica permanente (naso, mento): serve un verbo di stato.",
    "spiegazione": "**To look like** someone significa «assomigliare (fisicamente) a qualcuno». Esprime uno stato, quindi si usa il **present simple**, non il continuous.",
    "perOpzione": {
      "A": "Corretta: «Mary looks like her grandmother» = Mary assomiglia alla nonna.",
      "B": "Sbagliata: «is looking at» significa «sta guardando», un’azione in corso, non una somiglianza.",
      "C": "Sbagliata: «look like» nel senso di somigliare è un verbo di stato e non si usa alla forma progressiva in questo contesto."
    }
  }
];
