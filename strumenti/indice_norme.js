// Scrive norme/indice.js: l'elenco di tutti i testi in norme/ (articoli, versioni storiche,
// sentenze) con i dati che servono alla sezione «Norme» dell'app per mostrarli senza
// caricarli tutti. I collegamenti a pillole e domande li calcola l'app.
// Uso: node strumenti/indice_norme.js            → scrive norme/indice.js
//      node strumenti/indice_norme.js --controlla → errore se l'indice non è aggiornato
// Lo esegue anche strumenti/verifica_pillole.js --scrivi.
const fs = require("fs"), path = require("path"), vm = require("vm");
const ROOT = path.join(__dirname, "..");
const ESCLUSE = new Set(["statuto_isili"]);   // statuto comunale non usato dal quiz
const SUFFISSI = ["bis", "ter", "quater", "quinquies", "sexies", "septies", "octies", "novies", "nonies", "decies"];

function genera() {
  const voci = [];
  for (const dir of fs.readdirSync(path.join(ROOT, "norme")).sort()) {
    const d = path.join(ROOT, "norme", dir);
    if (!fs.statSync(d).isDirectory() || ESCLUSE.has(dir)) continue;
    for (const f of fs.readdirSync(d).filter(f => f.endsWith(".js")).sort()) {
      const ctx = { window: {} };
      vm.runInNewContext(fs.readFileSync(path.join(d, f), "utf8"), ctx);
      for (const [id, n] of Object.entries(ctx.window.NORME)) {
        const al = id.match(/_al_(\d{4})(\d{2})(\d{2})$/);
        const sentenza = dir === "sentenze";
        const atto = sentenza ? "Giurisprudenza" : n.fonte.split(" — ")[0];
        const sigla = n.sigla || (/^Costituzione/.test(n.fonte) ? "Cost." : "");
        // ordine dell'articolo nell'atto: numero, poi bis, ter...
        const m = id.match(/_art_(\d+)(?:_([a-z]+))?/);
        const ordine = m ? +m[1] * 20 + (m[2] ? SUFFISSI.indexOf(m[2]) + 1 : 0) : 0;
        voci.push({
          id, file: "norme/" + dir + "/" + f, titolo: n.titolo.replace(/\s*\(testo al [^)]*\)$/, ""), sigla, atto,
          base: al ? id.slice(0, al.index) : id, al: al ? `${al[1]}-${al[2]}-${al[3]}` : null, ordine
        });
      }
    }
  }
  // atti: Costituzione, Unione europea, poi leggi e codici per anno, infine la giurisprudenza
  const anno = a => +((a.match(/\b(1[89]\d\d|20\d\d)\b/) || [])[1] || 9999);
  const UE = ["Trattato sull'Unione", "Trattato sul funzionamento", "Carta dei diritti", "Protocollo", "Direttiva"];
  const ue = a => UE.findIndex(x => a.startsWith(x));
  const gruppo = a => /^Costituzione/.test(a) ? 0 : ue(a) >= 0 ? 1 : a === "Giurisprudenza" ? 3 : 2;
  const atti = [...new Set(voci.map(v => v.atto))].sort((a, b) => gruppo(a) - gruppo(b) || ue(a) - ue(b) || anno(a) - anno(b) || a.localeCompare(b));
  voci.sort((a, b) => atti.indexOf(a.atto) - atti.indexOf(b.atto) || a.ordine - b.ordine || (a.al || "0").localeCompare(b.al || "0") || a.id.localeCompare(b.id));
  for (const v of voci) delete v.ordine;
  return "// Generato da strumenti/indice_norme.js: non modificare a mano.\n" +
    "const NORME_ATTI = " + JSON.stringify(atti, null, 1) + ";\n" +
    "const NORME_INDICE = [\n" + voci.map(v => "  " + JSON.stringify(v)).join(",\n") + "\n];\n";
}

const FILE = path.join(ROOT, "norme", "indice.js");
const nuovo = genera();
if (process.argv.includes("--controlla")) {
  const vecchio = fs.existsSync(FILE) ? fs.readFileSync(FILE, "utf8") : "";
  if (vecchio !== nuovo) { console.log("✗ norme/indice.js non è aggiornato: node strumenti/indice_norme.js"); process.exit(1); }
  process.exit(0);
}
fs.writeFileSync(FILE, nuovo);
console.log("Scritto norme/indice.js: " + (nuovo.match(/"id":/g) || []).length + " testi");
