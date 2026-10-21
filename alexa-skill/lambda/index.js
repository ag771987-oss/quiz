// Skill Alexa personale «Pillole normative»: legge con la voce di Alexa le pillole del Quiz SNA.
// Le pillole arrivano dal sito (pillole/alexa-skill.json, generato da strumenti/verifica_pillole.js):
// quando se ne aggiungono di nuove non serve modificare la skill.
// Ricorda quali pillole hai già ascoltato (tabella DynamoDB fornita da Alexa-hosted), così propone
// prima le nuove e il ripasso parte dalle meno recenti.
const Alexa = require("ask-sdk-core");
const https = require("https");

// Indirizzo del sito del quiz: da cambiare se si rinomina il repository (strumenti/cambia_link.sh).
const SITO = "https://ag771987-oss.github.io/quiz/";
const PER_TURNO = 3;          // pillole lette di fila prima di chiedere se continuare
const MASSIMO = 10;           // pillole al massimo per richiesta
const GIORNO = 86400000;

// ── Dati ──
let cache = null, scaricato = 0;
function scarica(url) {
  return new Promise((ok, ko) => {
    https.get(url, r => {
      if (r.statusCode !== 200) { r.resume(); return ko(new Error("HTTP " + r.statusCode)); }
      let d = ""; r.setEncoding("utf8");
      r.on("data", c => { d += c; });
      r.on("end", () => { try { ok(JSON.parse(d)); } catch (e) { ko(e); } });
    }).on("error", ko).setTimeout(5000, function () { this.destroy(new Error("timeout")); });
  });
}
async function dati() {
  if (cache && Date.now() - scaricato < 10 * 60000) return cache;
  try { cache = await scarica(SITO + "pillole/alexa-skill.json"); scaricato = Date.now(); }
  catch (e) { if (!cache) throw e; }   // senza rete si usa l'ultima copia
  return cache;
}
// Pillola del giorno: stessa regola dell'app (giorni dal 1/1/2026, ora italiana).
function delGiorno(pillole) {
  const d = new Date(new Date().toLocaleString("en-US", { timeZone: "Europe/Rome" }));
  const n = Math.floor((Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) - Date.UTC(2026, 0, 1)) / GIORNO);
  return pillole[((n % pillole.length) + pillole.length) % pillole.length];
}

// ── Stato: pillole ascoltate (persistente) e coda della conversazione (sessione) ──
async function ascoltate(h) {
  try { const a = await h.attributesManager.getPersistentAttributes(); return a.ascoltate || {}; }
  catch (e) { return h.attributesManager.getSessionAttributes().ascoltate || {}; }
}
async function segnaAscoltate(h, ids) {
  const s = h.attributesManager.getSessionAttributes();
  try {
    const a = await h.attributesManager.getPersistentAttributes();
    a.ascoltate = a.ascoltate || {};
    for (const id of ids) a.ascoltate[id] = Date.now();
    h.attributesManager.setPersistentAttributes(a);
    await h.attributesManager.savePersistentAttributes();
  } catch (e) {
    s.ascoltate = s.ascoltate || {};
    for (const id of ids) s.ascoltate[id] = Date.now();
  }
}

// ── Testo per la voce ──
const xml = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
function leggi(lista) {
  return lista.map(p => "<p>" + xml(p.parlato) + "</p>").join('<break time="1500ms"/>');
}
const plurale = (n, uno, molti) => n === 1 ? uno : n + " " + molti;

// Sceglie le pillole: «nuove» = mai ascoltate prima (in ordine), poi le meno recenti;
// «ripasso» = solo quelle già ascoltate, dalla meno recente.
function scegli(pillole, sentite, { numero, area, ripasso }) {
  let pool = pillole.filter(p => !area || p.area === area);
  const t = p => sentite[p.id] || 0;
  if (ripasso) pool = pool.filter(t).sort((a, b) => t(a) - t(b));
  else pool = pool.filter(p => !t(p)).concat(pool.filter(t).sort((a, b) => t(a) - t(b)));
  return pool.slice(0, Math.max(1, Math.min(numero || 1, MASSIMO)));
}

// Legge le prime pillole della coda e chiede se continuare.
async function leggiCoda(h, introduzione) {
  const s = h.attributesManager.getSessionAttributes();
  const { pillole } = await dati();
  const coda = (s.coda || []).map(id => pillole.find(p => p.id === id)).filter(Boolean);
  if (!coda.length) {
    return h.responseBuilder.speak("Non ci sono altre pillole in coda. Vuoi una pillola nuova?").reprompt("Vuoi una pillola nuova?").getResponse();
  }
  const ora = coda.slice(0, PER_TURNO), resto = coda.slice(PER_TURNO);
  s.coda = resto.map(p => p.id);
  s.ultime = ora.map(p => p.id);
  s.attesa = resto.length ? "continua" : "altra";
  await segnaAscoltate(h, s.ultime);
  const domanda = resto.length
    ? "Ne " + (resto.length === 1 ? "resta una" : "restano " + resto.length) + ". Continuo?"
    : "Vuoi un'altra pillola?";
  return h.responseBuilder
    .speak((introduzione ? xml(introduzione) + '<break time="700ms"/>' : "") + leggi(ora) + '<break time="1s"/>' + domanda)
    .reprompt(domanda)
    .withSimpleCard("Pillole normative", ora.map(p => "• " + p.titolo).join("\n") + "\n\n" + SITO)
    .getResponse();
}
async function preparaCoda(h, opzioni) {
  const { pillole, aree } = await dati();
  const sentite = await ascoltate(h);
  const scelte = scegli(pillole, sentite, opzioni);
  const area = aree.find(a => a.id === opzioni.area);
  if (opzioni.ripasso && !scelte.length) {
    return h.responseBuilder.speak("Non hai ancora ascoltato pillole " + (area ? "su " + xml(area.nome.toLowerCase()) + " " : "") + "da ripassare. Vuoi una pillola nuova?").reprompt("Vuoi una pillola nuova?").getResponse();
  }
  if (!scelte.length) return h.responseBuilder.speak("Non trovo pillole su questo argomento. Vuoi sentire quali argomenti ci sono?").reprompt("Vuoi sentire gli argomenti?").getResponse();
  h.attributesManager.getSessionAttributes().coda = scelte.map(p => p.id);
  const intro = scelte.length > 1 ? "Ecco " + scelte.length + " pillole" + (area ? " su " + area.nome.toLowerCase() : "") + (opzioni.ripasso ? " da ripassare" : "") + "." : "";
  return leggiCoda(h, intro);
}
function slot(h, nome) {
  const s = Alexa.getSlot(h.requestEnvelope, nome);
  if (!s) return null;
  if (nome === "argomento") {
    const r = s.resolutions && s.resolutions.resolutionsPerAuthority && s.resolutions.resolutionsPerAuthority[0];
    return r && r.status.code === "ER_SUCCESS_MATCH" ? r.values[0].value.id : null;
  }
  const n = parseInt(s.value, 10);
  return Number.isFinite(n) && n > 0 ? n : null;
}
const intento = nome => ({ canHandle: h => Alexa.getRequestType(h.requestEnvelope) === "IntentRequest" && Alexa.getIntentName(h.requestEnvelope) === nome });
const AIUTO = "Puoi dire: la pillola del giorno; una pillola nuova; tre pillole sul procedimento; ripasso; oppure: quali argomenti ci sono.";

// ── Gestori ──
const Avvio = {
  canHandle: h => Alexa.getRequestType(h.requestEnvelope) === "LaunchRequest",
  handle: h => h.responseBuilder.speak("Benvenuto in Pillole normative. " + AIUTO + " Cosa vuoi ascoltare?").reprompt("Cosa vuoi ascoltare? Per esempio: la pillola del giorno.").getResponse()
};
const DelGiorno = Object.assign(intento("PillolaDelGiornoIntent"), {
  async handle(h) {
    const { pillole } = await dati();
    h.attributesManager.getSessionAttributes().coda = [delGiorno(pillole).id];
    return leggiCoda(h, "Ecco la pillola del giorno.");
  }
});
const Pillole = Object.assign(intento("PilloleIntent"), {
  handle: h => preparaCoda(h, { numero: slot(h, "numero"), area: slot(h, "argomento") })
});
const Ripasso = Object.assign(intento("RipassoIntent"), {
  handle: h => preparaCoda(h, { numero: slot(h, "numero") || 3, area: slot(h, "argomento"), ripasso: true })
});
const Argomenti = Object.assign(intento("ArgomentiIntent"), {
  async handle(h) {
    const { pillole, aree } = await dati();
    const elenco = aree.map(a => a.nome.toLowerCase() + ", " + plurale(pillole.filter(p => p.area === a.id).length, "una pillola", "pillole"));
    return h.responseBuilder.speak("Gli argomenti sono: " + xml(elenco.join("; ")) + ". Per esempio, puoi dire: due pillole sull'anticorruzione.").reprompt("Quale argomento vuoi?").getResponse();
  }
});
// «sì», «continua», «la prossima»: prosegue la coda, oppure una pillola nuova
const Avanti = {
  canHandle: h => Alexa.getRequestType(h.requestEnvelope) === "IntentRequest" && ["AMAZON.YesIntent", "AMAZON.NextIntent"].includes(Alexa.getIntentName(h.requestEnvelope)),
  handle(h) {
    const s = h.attributesManager.getSessionAttributes();
    if ((s.coda || []).length) return leggiCoda(h);
    return preparaCoda(h, { numero: 1 });
  }
};
const Ripeti = Object.assign(intento("AMAZON.RepeatIntent"), {
  async handle(h) {
    const s = h.attributesManager.getSessionAttributes();
    if (!(s.ultime || []).length) return h.responseBuilder.speak("Non ho ancora letto nessuna pillola. " + AIUTO).reprompt("Cosa vuoi ascoltare?").getResponse();
    s.coda = s.ultime.concat(s.coda || []);
    return leggiCoda(h);
  }
});
const Aiuto = Object.assign(intento("AMAZON.HelpIntent"), {
  handle: h => h.responseBuilder.speak(AIUTO + " Per uscire, di' stop.").reprompt("Cosa vuoi ascoltare?").getResponse()
});
const Fine = {
  canHandle: h => Alexa.getRequestType(h.requestEnvelope) === "IntentRequest" && ["AMAZON.NoIntent", "AMAZON.StopIntent", "AMAZON.CancelIntent", "AMAZON.NavigateHomeIntent"].includes(Alexa.getIntentName(h.requestEnvelope)),
  handle: h => h.responseBuilder.speak("A presto, e buono studio!").withShouldEndSession(true).getResponse()
};
const NonCapito = Object.assign(intento("AMAZON.FallbackIntent"), {
  handle: h => h.responseBuilder.speak("Non ho capito. " + AIUTO).reprompt("Cosa vuoi ascoltare?").getResponse()
});
const FineSessione = {
  canHandle: h => Alexa.getRequestType(h.requestEnvelope) === "SessionEndedRequest",
  handle: h => h.responseBuilder.getResponse()
};
const Errore = {
  canHandle: () => true,
  handle(h, e) {
    console.log("Errore:", e && e.stack || e);
    return h.responseBuilder.speak("Non riesco a raggiungere le pillole in questo momento. Riprova tra poco.").withShouldEndSession(true).getResponse();
  }
};

// Persistenza: la tabella DynamoDB che Alexa-hosted crea per ogni skill. Senza tabella (prove
// in locale) la skill funziona lo stesso e ricorda le pillole solo per la conversazione in corso.
function persistenza() {
  if (!process.env.DYNAMODB_PERSISTENCE_TABLE_NAME) return null;
  const AWS = require("aws-sdk");
  const { DynamoDbPersistenceAdapter } = require("ask-sdk-dynamodb-persistence-adapter");
  return new DynamoDbPersistenceAdapter({
    tableName: process.env.DYNAMODB_PERSISTENCE_TABLE_NAME,
    createTable: false,
    dynamoDBClient: new AWS.DynamoDB({ apiVersion: "latest", region: process.env.DYNAMODB_PERSISTENCE_REGION })
  });
}
const builder = Alexa.SkillBuilders.custom()
  .addRequestHandlers(Avvio, DelGiorno, Pillole, Ripasso, Argomenti, Avanti, Ripeti, Aiuto, Fine, NonCapito, FineSessione)
  .addErrorHandlers(Errore)
  .withCustomUserAgent("pillole-normative/1.0");
const adattatore = persistenza();
if (adattatore) builder.withPersistenceAdapter(adattatore);
exports.handler = builder.lambda();
// per le prove in locale (strumenti/prova_skill.js)
exports._interni = { scegli, delGiorno, leggi };
