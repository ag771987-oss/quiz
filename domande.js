const DOMANDE = [
  {
    id: 1,
    materia: "Comprensione",
    domanda: "Secondo il brano:",
    opzioni: {
      A: "Il comparto manifatturiero registra una flessione più contenuta rispetto al settore dei servizi ma non a quello delle costruzioni.",
      B: "Il comparto manifatturiero registra una flessione più contenuta rispetto ai settori dei servizi e a quello delle costruzioni.",
      C: "Il comparto manifatturiero registra una flessione più contenuta rispetto al settore delle costruzioni ma non a quello dei servizi."
    },
    corretta: "B",
    spiegazione: "La risposta corretta è la B, perché il brano afferma espressamente che il comparto manifatturiero registra una flessione più contenuta rispetto ai settori dei servizi e a quello delle costruzioni. Le opzioni A e C alterano questo rapporto comparativo."
  },
  {
    id: 2,
    materia: "Comprensione",
    domanda: "Nel comparto manifatturiero si rileva un peggioramento delle attese su:",
    opzioni: {
      A: "Saldo delle scorte di magazzino.",
      B: "Livello della domanda.",
      C: "Produzione."
    },
    corretta: "C",
    spiegazione: "La risposta corretta è la C, perché il brano dice che nel comparto manifatturiero si rileva un peggioramento delle attese sulla produzione, mentre giudizi sul livello della domanda e saldo delle scorte restano sostanzialmente stabili."
  },
  {
    id: 3,
    materia: "Logica",
    domanda: "Ilario e Irene sono figli di due fratelli. Che rapporto di parentela c'è tra il fratello minore di Ilario, Isidoro, e Isacco, il nonno materno del figlio di Irene?",
    opzioni: {
      A: "Isacco è lo zio di Isidoro.",
      B: "Non è possibile stabilirlo.",
      C: "Isidoro è lo zio di Isacco."
    },
    corretta: "B",
    spiegazione: "La risposta corretta è la B. Sappiamo solo che Ilario e Irene sono figli di due fratelli, quindi sono cugini. Tuttavia il riferimento a Isacco come nonno materno del figlio di Irene non consente di ricostruire con certezza un rapporto preciso tra Isacco e Isidoro."
  },
  {
    id: 4,
    materia: "Logica",
    domanda: "Rudy fa il venditore. Amedeo è loquace. Chi fa il venditore è loquace. Quale delle seguenti affermazioni NON rappresenta una conclusione corretta?",
    opzioni: {
      A: "Rudy è loquace.",
      B: "Tutti coloro che sono loquaci fanno i venditori.",
      C: "Non si può escludere che Amedeo faccia il venditore."
    },
    corretta: "B",
    spiegazione: "La risposta corretta è la B, perché dalla premessa sappiamo solo che chi fa il venditore è loquace, non il contrario. Quindi non si può concludere che tutti i loquaci facciano i venditori. A è corretta, e anche C è compatibile con le premesse."
  }
];