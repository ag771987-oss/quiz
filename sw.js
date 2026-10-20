// Service worker: fa funzionare il quiz anche offline.
// Pagina e dati (domande, risposte, spiegazioni, norme): prima la rete, così gli aggiornamenti arrivano
// subito; se manca la connessione si usa la copia salvata. Figure e PDF: prima la copia salvata.
// Audio delle pillole: sempre dalla rete (il lettore chiede pezzi del file); offline l'app usa la
// voce del telefono.
const CACHE = "quiz-sna-v2";
const BASE = ["./", "index.html", "domande/manifest.js", "pillole/pillole.js", "norme/citazioni.js", "manifest.webmanifest", "icone/icon-192.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(BASE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin || /\.mp3$/i.test(new URL(req.url).pathname)) return;
  const statico = /\.(png|jpe?g|gif|webp|pdf)$/i.test(new URL(req.url).pathname);
  e.respondWith(statico ? primaCache(req) : primaRete(req));
});
async function primaRete(req) {
  const c = await caches.open(CACHE);
  try {
    const r = await fetch(req);
    if (r.ok) c.put(req, r.clone());
    return r;
  } catch (err) {
    return (await c.match(req, { ignoreSearch: true })) || (req.mode === "navigate" && await c.match("index.html")) || Response.error();
  }
}
async function primaCache(req) {
  const c = await caches.open(CACHE);
  const hit = await c.match(req);
  if (hit) return hit;
  const r = await fetch(req);
  if (r.ok) c.put(req, r.clone());
  return r;
}
