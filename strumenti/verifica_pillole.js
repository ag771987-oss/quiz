// Controlla le pillole normative (pillole/pillole.js) e genera i file per gli altoparlanti.
// Controlli:
//   - ogni fonte (norma o sentenza) ha il testo in norme/; ogni pillola collegata esiste;
//   - le frasi tra «» del testo compaiono alla lettera in una delle fonti della pillola;
//   - le citazioni di articoli nel testo hanno il testo in norme/ e sono tra le fonti;
//   - il parlato non contiene abbreviazioni o sigle numeriche che la voce leggerebbe male
//     e sta nel limite di Alexa (4500 caratteri).
// Uso: node strumenti/verifica_pillole.js           → solo controlli
//      node strumenti/verifica_pillole.js --scrivi  → aggiorna PILLOLE_NORME in pillole.js,
//                                                     pillole/alexa.json e pillole/podcast.xml
//      node strumenti/verifica_pillole.js --json    → stampa id e parlato (per genera_audio.py)
// L'indirizzo pubblico si ricava dal remote git (https://<utente>.github.io/<repository>/);
// si può forzare con SITO=https://.../ .
const fs = require("fs"), path = require("path"), vm = require("vm"), { execSync } = require("child_process");
const ROOT = path.join(__dirname, "..");
const CIT = require(path.join(ROOT, "norme", "citazioni.js"));
const FILE = path.join(ROOT, "pillole", "pillole.js");
const scrivi = process.argv.includes("--scrivi");

// indice e testi delle fonti: id -> percorso, id -> oggetto
const indice = {}, ctx = { window: {} };
for (const dir of fs.readdirSync(path.join(ROOT, "norme"))) {
  const d = path.join(ROOT, "norme", dir);
  if (!fs.statSync(d).isDirectory()) continue;
  for (const f of fs.readdirSync(d)) if (f.endsWith(".js")) {
    indice[f.slice(0, -3)] = "norme/" + dir + "/" + f;
    vm.runInNewContext(fs.readFileSync(path.join(d, f), "utf8"), ctx);
  }
}
const NORME = ctx.window.NORME;
const src = fs.readFileSync(FILE, "utf8");
const { PILLOLE, PILLOLE_AREE } = vm.runInNewContext(src + ";({ PILLOLE, PILLOLE_AREE })");

if (process.argv.includes("--json")) {
  console.log(JSON.stringify(PILLOLE.map(p => ({ id: p.id, titolo: p.titolo, parlato: p.parlato }))));
  process.exit(0);
}

const norm = s => String(s || "").replace(/\*\*/g, "").replace(/[’‘`´]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, " ")
  .replace(/[àáâ]/g, "a").replace(/[èéê]/g, "e").replace(/[ìí]/g, "i").replace(/[òó]/g, "o").replace(/[ùú]/g, "u").toLowerCase().trim();
const piano = s => String(s || "").replace(/\*\*/g, "").replace(/(^|[\s(])\*([^*]+)\*/g, "$1$2");
// abbreviazioni e forme che la sintesi vocale legge male
const NO_PARLATO = [/\bartt?\.\s/i, /\bco\.\s/, /\bl\.\s?\d/, /\bd\.\s?lgs/i, /\bd\.\s?l\.\s/i, /\bd\.P\.R/i, /\bCost\./, /\blett\.\s/, /\bpar\.\s/, /\d+\s?\/\s?\d+/, /\bTUE\b|\bTFUE\b/, /[«»*_]/];

let errori = 0;
const errore = (p, msg) => { errori++; console.log(`✗ ${p.id}: ${msg}`); };
const ids = new Set(), aree = new Set(PILLOLE_AREE.map(a => a.id));
for (const p of PILLOLE) {
  if (ids.has(p.id)) errore(p, "id ripetuto");
  ids.add(p.id);
}
const usate = new Set();
for (const p of PILLOLE) {
  for (const k of ["titolo", "sintesi", "testo", "parlato"]) if (!(p[k] || "").trim()) errore(p, "manca " + k);
  if (!aree.has(p.area)) errore(p, "area sconosciuta: " + p.area);
  for (const c of p.collegate || []) if (!ids.has(c)) errore(p, "pillola collegata inesistente: " + c);
  const fonti = p.fonti || [];
  if (!fonti.length) errore(p, "nessuna fonte");
  for (const f of fonti) {
    if (f.tipo === "lezione") { if (!f.titolo) errore(p, "lezione senza titolo"); continue; }
    if (!NORME[f.id]) errore(p, `fonte senza testo in norme/: ${f.id}`);
    else usate.add(f.id);
  }
  // citazioni letterali (testo e approfondimento)
  const testi = norm(fonti.map(f => (NORME[f.id] || {}).testo).join(" \n "));
  const appr = (p.approfondimento || []).map(a => [a.testo || "", ...((a.tabella || {}).righe || []).flat(), ...((a.tabella || {}).colonne || [])].join("\n")).join("\n\n");
  for (const a of p.approfondimento || []) if (!a.titolo || !(a.testo || a.tabella)) errore(p, "sezione di approfondimento senza titolo o contenuto");
  for (const m of (p.testo + "\n" + appr).matchAll(/«([^»]{12,})»/g)) {
    const pezzi = m[1].split(/\s*(?:\[\s*(?:\.\.\.|…)\s*\]|\.\.\.|…)\s*/).map(norm).filter(x => x.length >= 8);
    if (pezzi.some(x => !testi.includes(x.replace(/[.;,:]$/, "")))) errore(p, `citazione non trovata alla lettera nelle fonti: «${m[1].slice(0, 120)}»`);
  }
  // articoli citati nel testo
  const [cit] = CIT.risolvi([piano(p.testo + "\n\n" + appr)], id => id in indice);
  const idFonti = new Set(fonti.map(f => f.id));
  for (const c of cit) {
    if (!c.id) continue;
    if (!(c.id in indice)) errore(p, `citato ${c.testo || c.id} ma il testo non è in norme/`);
    else if (!idFonti.has(c.id)) errore(p, `citato ${c.id} ma manca tra le fonti`);
  }
  // domande del quiz collegate: devono esistere norme con quel prefisso
  for (const q of p.quiz || []) if (!Object.keys(indice).some(id => id.startsWith(q))) errore(p, `quiz: nessuna norma ${q}`);
  // parlato
  for (const re of NO_PARLATO) {
    const m = p.parlato.match(re);
    if (m) errore(p, `parlato: «${m[0]}» va scritto per esteso`);
  }
  if (p.parlato.length > 4500) errore(p, `parlato troppo lungo (${p.parlato.length} caratteri, massimo 4500)`);
}
console.log(`Pillole: ${PILLOLE.length}; fonti con testo: ${usate.size}; errori: ${errori}`);
if (errori) process.exit(1);
if (!scrivi) process.exit(0);

// ── File generati ──
const listaNorme = [...usate].map(id => indice[id]).sort();
const i = src.indexOf("const PILLOLE_NORME = ");
fs.writeFileSync(FILE, src.slice(0, i) + "const PILLOLE_NORME = " + JSON.stringify(listaNorme, null, 2) + ";\n");

function sito() {
  if (process.env.SITO) return process.env.SITO.replace(/\/?$/, "/");
  const u = execSync("git remote get-url origin", { cwd: ROOT }).toString().trim();
  const m = u.match(/github\.com[:/]([^/]+)\/([^/.]+)/);
  if (!m) throw new Error("Impossibile ricavare l'indirizzo dal remote git: imposta SITO");
  return `https://${m[1].toLowerCase()}.github.io/${m[2]}/`;
}
const SITO = sito();
const audio = id => fs.existsSync(path.join(ROOT, "pillole", "audio", id + ".mp3")) ? "pillole/audio/" + id + ".mp3" : null;

// Pillola del giorno: stessa regola dell'app (giorni dal 1/1/2026, ora italiana, modulo il numero di pillole).
const giornoRoma = t => new Date(new Date(t).toLocaleString("en-US", { timeZone: "Europe/Rome" }));
const indiceGiorno = t => { const d = giornoRoma(t); return Math.floor((Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) - Date.UTC(2026, 0, 1)) / 86400000); };
const delGiorno = t => PILLOLE[((indiceGiorno(t) % PILLOLE.length) + PILLOLE.length) % PILLOLE.length];

// Alexa (Flash Briefing): solo la pillola di oggi, così Alexa ne legge una al giorno.
// Alexa ignora le voci più vecchie di 7 giorni: il file va rigenerato ogni giorno
// (.github/workflows/pillola-del-giorno.yml).
const feed = [];
{
  const t = Date.now(), p = delGiorno(t), d = giornoRoma(t);
  const data = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), 4, 0, 0));
  const voce = {
    uid: "pillola-" + data.toISOString().slice(0, 10) + "-" + p.id,
    updateDate: data.toISOString().replace(/\.\d{3}Z$/, ".0Z"),
    titleText: p.titolo,
    mainText: p.parlato,
    redirectionUrl: SITO + "#pillola=" + p.id
  };
  // niente streamUrl: Alexa legge mainText con la sua voce italiana, più naturale dei file audio
  feed.push(voce);
}
fs.writeFileSync(path.join(ROOT, "pillole", "alexa.json"), JSON.stringify(feed, null, 2) + "\n");

// Podcast (RSS 2.0 con estensioni iTunes): un episodio per ogni pillola con file audio.
const x = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const episodi = PILLOLE.map((p, n) => ({ p, n, a: audio(p.id) })).filter(e => e.a);
const FILE_IMPRONTE = path.join(ROOT, "pillole", "audio", "impronte.json");
const impronte = fs.existsSync(FILE_IMPRONTE) ? JSON.parse(fs.readFileSync(FILE_IMPRONTE, "utf8")) : {};
const durata = id => (impronte[id] || {}).secondi;
const area = Object.fromEntries(PILLOLE_AREE.map(a => [a.id, a.nome]));
// la data di pubblicazione di ogni episodio è fissa (1/1/2026 + n giorni), così le app non lo riscaricano
const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>Pillole normative</title>
  <link>${SITO}</link>
  <atom:link href="${SITO}pillole/podcast.xml" rel="self" type="application/rss+xml"/>
  <language>it</language>
  <description>Concetti di diritto amministrativo, costituzionale ed europeo spiegati in un paio di minuti, con le fonti: norme e sentenze. Per lo studio dei concorsi pubblici.</description>
  <itunes:author>Quiz SNA</itunes:author>
  <itunes:image href="${SITO}icone/icon-512.png"/>
  <itunes:category text="Education"/>
  <itunes:explicit>false</itunes:explicit>
${episodi.map(({ p, n, a }) => {
    const byte = fs.statSync(path.join(ROOT, a)).size, sec = durata(p.id);
    return `  <item>
    <title>${x(p.titolo)}</title>
    <description>${x(area[p.area] + ". " + p.sintesi)}</description>
    <link>${SITO}#pillola=${p.id}</link>
    <guid isPermaLink="false">pillola-${p.id}</guid>
    <pubDate>${new Date(Date.UTC(2026, 0, 1 + n, 6)).toUTCString()}</pubDate>
    <enclosure url="${SITO}${a}" length="${byte}" type="audio/mpeg"/>${sec ? `\n    <itunes:duration>${sec}</itunes:duration>` : ""}
  </item>`;
  }).join("\n")}
</channel>
</rss>
`;
fs.writeFileSync(path.join(ROOT, "pillole", "podcast.xml"), rss);
console.log(`Scritti: PILLOLE_NORME (${listaNorme.length} file), pillole/alexa.json (${feed.length} voci), pillole/podcast.xml (${episodi.length} episodi) per ${SITO}`);
