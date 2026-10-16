// Salva nella cartella di cache le pagine HTML di EUR-Lex (TUE, TFUE, Carta, Protocolli)
// elencate in strumenti/norme_catalogo.json. EUR-Lex risponde con una verifica anti-bot
// che richiede un browser vero: si usa Playwright con Chromium.
// Uso: node strumenti/scarica_eurlex.js <cartella_cache>
const fs = require("fs"), path = require("path");
const { chromium } = require(require("child_process").execSync("npm root -g").toString().trim() + "/playwright");
const cache = process.argv[2];
const cat = JSON.parse(fs.readFileSync(path.join(__dirname, "norme_catalogo.json"), "utf8"));
const celex = [...new Set(Object.values(cat.fonti).filter(f => f.celex).map(f => f.celex))];
(async () => {
  const opts = fs.existsSync("/opt/pw-browsers/chromium") ? { executablePath: "/opt/pw-browsers/chromium" } : {};
  const b = await chromium.launch(opts), p = await b.newPage();
  for (const c of celex) {
    const dest = path.join(cache, "eurlex_" + c.replace(/\W/g, "_") + ".html");
    if (fs.existsSync(dest)) { console.log(c, "già in cache"); continue; }
    await p.goto("https://eur-lex.europa.eu/legal-content/IT/TXT/HTML/?uri=CELEX:" + c, { waitUntil: "networkidle", timeout: 120000 });
    await p.waitForSelector("p.ti-art, p.oj-ti-art", { timeout: 60000 });
    const h = await p.content();
    fs.writeFileSync(dest, h);
    console.log(c, h.length);
  }
  await b.close();
})();
