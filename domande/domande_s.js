// File spiegazioni collegato a domande/domande.js
// Convenzione: ogni file di domande XYZ.js ha il suo file spiegazioni XYZ_s.js
//
// Formato di ogni voce:
//   chiave numerica = id della domanda in domande.js
//   testo          = testo della spiegazione
//   riferimenti    = array (vuoto [] se nessuno) di etichette normative cliccabili:
//                    { etichetta: "Art. 48 Cost.", normaId: "cost_art_48" }
//                    (normaId deve corrispondere a una chiave in window.NORME)
//
// Le domande prive di voce mostrano automaticamente "Spiegazione non disponibile."
(window._QUIZ_SPIEGAZIONI = window._QUIZ_SPIEGAZIONI || {})["domande"] = {

  1: {
    testo: "La risposta corretta è la B. Il brano afferma esplicitamente che il comparto manifatturiero registra una flessione più contenuta rispetto ai settori dei servizi e a quello delle costruzioni (entrambi). Le opzioni A e C alterano questo confronto includendo o escludendo erroneamente uno dei due settori.",
    riferimenti: []
  },

  2: {
    testo: "La risposta corretta è la C. Il brano precisa che nel comparto manifatturiero si rileva un peggioramento delle attese sulla produzione. Il livello della domanda e il saldo delle scorte di magazzino restano invece sostanzialmente stabili rispetto a ottobre 2018.",
    riferimenti: []
  },

  17: {
    testo: "La risposta corretta è la C. L'art. 48 Cost. stabilisce che il diritto di voto può essere limitato solo per incapacità civile, per effetto di sentenza penale irrevocabile e nei casi di indegnità morale indicati dalla legge. Le altre ipotesi (ordine pubblico, violazioni di legge generiche) non sono previste dalla Costituzione come cause di limitazione del voto.",
    riferimenti: [
      { etichetta: "Art. 48 Cost.", normaId: "cost_art_48" }
    ]
  },

  28: {
    testo: "La risposta corretta è la A. Ai sensi dell'art. 20 TFUE, è cittadino dell'Unione chiunque abbia la cittadinanza di uno Stato membro. La cittadinanza dell'Unione si aggiunge, senza sostituirla, alla cittadinanza nazionale. Non è sufficiente essere nati sul territorio UE né avere un genitore con cittadinanza di uno Stato membro.",
    riferimenti: []
  },

  49: {
    testo: "La risposta corretta è la C. 'No matter what happens' significa 'qualunque cosa accada / indipendentemente da quello che succede'. 'Along with' significa 'insieme a', mentre 'Even though' introduce una concessiva ma richiederebbe soggetto e verbo espliciti nella subordinata.",
    riferimenti: []
  },

  50: {
    testo: "La risposta corretta è la A. La question tag per 'Let's...' è sempre 'shall we?'. La struttura Let's + infinito suggerisce una proposta e richiede 'shall we' come tag interrogativo.",
    riferimenti: []
  }

};
