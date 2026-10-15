// Elenco delle prove. Ogni prova è una fonte separata.
// ufficiale: true = risposte pubblicate dalla SNA; false = chiave ricostruita.
const QUIZ_MANIFEST = [
  {
    "id": "sna-cc11-busta1",
    "gruppo": "11° corso-concorso — prova del 26/11/2025",
    "label": "Busta 1",
    "breve": "11° CC · Busta 1",
    "ufficiale": false,
    "domande": "domande/sna-cc11-busta1/sna-cc11-busta1_d.js",
    "risposte": "domande/sna-cc11-busta1/sna-cc11-busta1_r.js",
    "spiegazioni": "domande/sna-cc11-busta1/sna-cc11-busta1_s.js",
    "pdf": "domande/sna-cc11-busta1/sna-cc11-busta1.pdf",
    "norme": [
      "norme/costituzione/cost_art_77.js",
      "norme/costituzione/cost_art_94.js",
      "norme/costituzione/cost_art_113.js",
      "norme/costituzione/cost_art_117.js"
    ]
  },
  {
    "id": "sna-cc09-prova1",
    "gruppo": "9° corso-concorso — prova del 27/06/2023",
    "label": "Prova 1",
    "breve": "9° CC · Prova 1",
    "ufficiale": true,
    "domande": "domande/sna-cc09-prova1/sna-cc09-prova1_d.js",
    "risposte": "domande/sna-cc09-prova1/sna-cc09-prova1_r.js",
    "spiegazioni": "domande/sna-cc09-prova1/sna-cc09-prova1_s.js",
    "pdf": "https://www.sitiarcheologici.palazzochigi.it/sna.gov.it/sna.gov.it/fileadmin/files/Amministrazione_trasparente/Bandi/2023/Corso-concorso_IX/Prove_preselettiva/PRESELETTIVA_prova_1_non_estratta.pdf"
  },
  {
    "id": "sna-cc09-prova2",
    "gruppo": "9° corso-concorso — prova del 27/06/2023",
    "label": "Prova 2",
    "breve": "9° CC · Prova 2",
    "ufficiale": true,
    "domande": "domande/sna-cc09-prova2/sna-cc09-prova2_d.js",
    "risposte": "domande/sna-cc09-prova2/sna-cc09-prova2_r.js",
    "spiegazioni": "domande/sna-cc09-prova2/sna-cc09-prova2_s.js",
    "pdf": "https://www.sitiarcheologici.palazzochigi.it/sna.gov.it/sna.gov.it/fileadmin/files/Amministrazione_trasparente/Bandi/2023/Corso-concorso_IX/Prove_preselettiva/PRESELETTIVA_prova_2_non_estratta.pdf"
  },
  {
    "id": "sna-cc09-prova3",
    "gruppo": "9° corso-concorso — prova del 27/06/2023",
    "label": "Prova 3 (estratta)",
    "breve": "9° CC · Prova 3",
    "ufficiale": true,
    "domande": "domande/sna-cc09-prova3/sna-cc09-prova3_d.js",
    "risposte": "domande/sna-cc09-prova3/sna-cc09-prova3_r.js",
    "spiegazioni": "domande/sna-cc09-prova3/sna-cc09-prova3_s.js",
    "pdf": "https://www.sitiarcheologici.palazzochigi.it/sna.gov.it/sna.gov.it/fileadmin/files/Amministrazione_trasparente/Bandi/2023/Corso-concorso_IX/Prove_preselettiva/PRESELETTIVA_prova_estratta.pdf"
  },
  {
    "id": "sna-cc08-busta3",
    "gruppo": "8° corso-concorso — prova del 15/03/2022",
    "label": "Busta 3 (estratta)",
    "breve": "8° CC · Busta 3",
    "ufficiale": true,
    "domande": "domande/sna-cc08-busta3/sna-cc08-busta3_d.js",
    "risposte": "domande/sna-cc08-busta3/sna-cc08-busta3_r.js",
    "spiegazioni": "domande/sna-cc08-busta3/sna-cc08-busta3_s.js",
    "pdf": "https://www.sitiarcheologici.palazzochigi.it/sna.gov.it/sna.gov.it/fileadmin/files/8CC/Test_prova_preselettiva/busta_3_domande.pdf"
  }
];
