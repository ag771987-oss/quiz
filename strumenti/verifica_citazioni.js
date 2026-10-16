// Controlla che le frasi tra «» delle spiegazioni siano letterali: ogni citazione deve
// comparire nel testo di una norma collegata (riferimenti) oppure nel testo della domanda,
// delle opzioni o del brano. Le citazioni con «...» intermedi sono controllate a pezzi.
// Si controllano le domande collegate a norme e quelle di comprensione del testo: altrove
// le «» servono anche per traduzioni ed esempi.
// Uso: node strumenti/verifica_citazioni.js
const fs = require("fs"), path = require("path"), vm = require("vm");
const ROOT = path.join(__dirname, "..");
const ctx = { window: {} };
for (const d of fs.readdirSync(path.join(ROOT, "norme"))) {
  const dir = path.join(ROOT, "norme", d);
  if (!fs.statSync(dir).isDirectory()) continue;
  for (const f of fs.readdirSync(dir)) if (f.endsWith(".js")) vm.runInNewContext(fs.readFileSync(path.join(dir, f), "utf8"), ctx);
}
const NORME = ctx.window.NORME;
const norm = s => String(s || "").replace(/\*\*/g, "").replace(/[’‘`´]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, " ")
  .replace(/[àáâ]/g, "a").replace(/[èéê]/g, "e").replace(/[ìí]/g, "i").replace(/[òó]/g, "o").replace(/[ùú]/g, "u").toLowerCase().trim();
const leggi = (f, n) => vm.runInNewContext(fs.readFileSync(path.join(ROOT, f), "utf8") + ";" + n);
const M = leggi("domande/manifest.js", "QUIZ_MANIFEST");
let tot = 0, ko = 0;
for (const p of M) {
  const D = Object.fromEntries(leggi(p.domande, "DOMANDE").map(d => [d.id, d]));
  for (const s of leggi(p.spiegazioni, "SPIEGAZIONI")) {
    const d = D[s.id] || {};
    if (!(s.riferimenti || []).length && d.materia !== "Comprensione del testo") continue;
    const fonti = norm([d.domanda, d.brano, ...Object.values(d.opzioni || {}), ...(s.riferimenti || []).map(r => (NORME[r.normaId] || {}).testo)].join(" \n "));
    const campi = { spiegazione: s.spiegazione, nota: s.nota, suggerimento: s.suggerimento };
    for (const [k, v] of Object.entries(s.perOpzione || {})) campi["perOpzione." + k] = v;
    for (const [campo, testo] of Object.entries(campi)) {
      for (const m of String(testo || "").matchAll(/«([^»]{12,})»/g)) {
        tot++;
        const pezzi = m[1].split(/\s*(?:\[\s*(?:\.\.\.|…)\s*\]|\.\.\.|…)\s*/).map(norm).filter(x => x.length >= 8);
        const manca = pezzi.filter(x => !fonti.includes(x.replace(/[.;,:]$/, "")));
        if (manca.length) { ko++; console.log(`${p.id} q${s.id} ${campo}: «${m[1].slice(0, 160)}»`); }
      }
    }
  }
}
console.log(`\nCitazioni tra «» controllate: ${tot}; non trovate alla lettera: ${ko}`);
