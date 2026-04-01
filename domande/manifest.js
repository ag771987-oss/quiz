// Aggiungi qui un oggetto per ogni file di domande nella cartella domande/.
// Convenzione nomi:
//   file domande  → domande/NOME.js
//   file spiegaz. → domande/NOME_s.js
//
// "id"         → identificativo univoco (stringa, no spazi)
// "label"      → nome visualizzato nel selettore
// "file"       → percorso domande, relativo a index.html
// "spiegazioni" → percorso spiegazioni (NOME_s.js), relativo a index.html
// "norme"      → array di file norma da caricare (percorsi relativi a index.html)
const QUIZ_MANIFEST = [
  {
    id: "domande",
    label: "Domande SNA",
    file: "domande/domande.js",
    spiegazioni: "domande/domande_s.js",
    norme: [
      "norme/costituzione/cost_art_48.js"
    ]
  },
  {
    id: "sna2025",
    label: "SNA 2025",
    file: "domande/sna2025.js",
    spiegazioni: "domande/sna2025_s.js",
    norme: []
  }
];
