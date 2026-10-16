// Collega le spiegazioni ai testi delle norme.
// - legge le citazioni («art. 94 Cost.», «art. 2, co. 8-bis, l. 241/1990»...) da spiegazione,
//   perOpzione e nota di ogni domanda, più quelle con l'atto indicato nella domanda e nelle opzioni (norme/citazioni.js);
// - scrive in ogni spiegazione l'elenco «riferimenti» [{normaId}] delle norme disponibili;
// - scrive nel manifest, per ogni prova, la lista «norme» dei file da caricare.
// Uso: node strumenti/collega_norme.js          → solo resoconto
//      node strumenti/collega_norme.js --scrivi → aggiorna i file
const fs = require("fs"), path = require("path"), vm = require("vm");
const ROOT = path.join(__dirname, "..");
const CIT = require(path.join(ROOT, "norme", "citazioni.js"));
const scrivi = process.argv.includes("--scrivi");

// indice delle norme presenti: normaId -> percorso relativo
const indice = {};
for (const dir of fs.readdirSync(path.join(ROOT, "norme"))) {
  const d = path.join(ROOT, "norme", dir);
  if (!fs.statSync(d).isDirectory() || dir === "statuto_isili") continue;
  for (const f of fs.readdirSync(d)) if (f.endsWith(".js")) indice[f.slice(0, -3)] = "norme/" + dir + "/" + f;
}
const esiste = id => id in indice;

function leggi(file, nome) {
  const src = fs.readFileSync(path.join(ROOT, file), "utf8");
  return { src, val: vm.runInNewContext(src + ";" + nome) };
}
function salva(file, src, nome, val) {
  const i = src.indexOf("const " + nome + " = ");
  fs.writeFileSync(path.join(ROOT, file), src.slice(0, i) + "const " + nome + " = " + JSON.stringify(val, null, 2) + ";\n");
}
const piano = s => String(s || "").replace(/\*\*/g, "").replace(/(^|[\s(])_([^_\s][^_]*?)_/g, "$1$2");

const man = leggi("domande/manifest.js", "QUIZ_MANIFEST");
const mancanti = {};
// trattati internazionali senza testo ufficiale italiano su normattiva o EUR-Lex
// (Carta ONU, Statuto della Corte internazionale di giustizia, Costituzione dell'ILO)
const ESTERNE = /^(onu|cig|ilo)_/, esterne = {};
let totRif = 0, domandeCollegate = 0;
for (const p of man.val) {
  const sp = leggi(p.spiegazioni, "SPIEGAZIONI");
  const domande = Object.fromEntries(leggi(p.domande, "DOMANDE").val.map(d => [d.id, d]));
  const usate = new Set();
  for (const s of sp.val) {
    const blocchi = [s.spiegazione, ...Object.values(s.perOpzione || {}), s.nota].map(piano);
    // anche le norme citate (con l'atto indicato) nel testo della domanda e delle opzioni
    const dom = domande[s.id] || {};
    const testoDomanda = [dom.domanda, ...Object.values(dom.opzioni || {})].map(piano);
    const ris = CIT.risolvi(blocchi, esiste).flat()
      .concat(CIT.risolvi(testoDomanda, esiste).flat().filter(r => r.esplicito));
    const ids = [];
    for (const r of ris) {
      if (r.id && esiste(r.id)) { if (!ids.includes(r.id)) ids.push(r.id); }
      else if (r.inCitazione) continue; // rinvio interno a un testo di legge citato tra «»
      else if (r.id && ESTERNE.test(r.id)) (esterne[r.id] = esterne[r.id] || []).push(p.id + " q" + s.id);
      else (mancanti[r.id || "?art. " + r.art] = mancanti[r.id || "?art. " + r.art] || []).push(p.id + " q" + s.id);
    }
    // versione storica: se la spiegazione cita il testo in vigore alla data della prova e in archivio
    // c'è quell'articolo «_al_<data della prova>», lo si collega prima della versione vigente
    const data = (p.dataProva || "").replace(/-/g, "");
    const storico = data && new RegExp("all['’]epoca|alla data della prova|in vigore (?:nel|al|all['’]epoca)|previgente|testo (?:del|di allora)|\\b" + data.slice(0, 4) + "\\b", "i")
      .test(blocchi.join(" "));
    if (storico) for (const id of [...ids]) {
      const st = id + "_al_" + data;
      if (esiste(st) && !ids.includes(st)) ids.splice(ids.indexOf(id), 0, st);
    }
    if (ids.length) {
      s.riferimenti = ids.map(normaId => ({ normaId }));
      ids.forEach(i => usate.add(i)); totRif += ids.length; domandeCollegate++;
      if (!scrivi) console.log(p.id, "q" + s.id, ids.join(" "));
    } else delete s.riferimenti;
  }
  const norme = [...usate].map(i => indice[i]).sort((a, b) => a.localeCompare(b, "it", { numeric: true }));
  if (norme.length) p.norme = norme; else delete p.norme;
  if (scrivi) salva(p.spiegazioni, sp.src, "SPIEGAZIONI", sp.val);
}
if (scrivi) salva("domande/manifest.js", man.src, "QUIZ_MANIFEST", man.val);
console.log(`\nDomande collegate: ${domandeCollegate}, riferimenti: ${totRif}, norme disponibili: ${Object.keys(indice).length}`);
console.log("Citazioni senza testo disponibile:");
for (const [k, v] of Object.entries(mancanti)) console.log("  " + k + "  ←  " + v.join(", "));
if (Object.keys(esterne).length) {
  console.log("Fonti internazionali senza testo ufficiale italiano su normattiva/EUR-Lex (non scaricate):");
  for (const [k, v] of Object.entries(esterne)) console.log("  " + k + "  ·  " + v.join(", "));
}
