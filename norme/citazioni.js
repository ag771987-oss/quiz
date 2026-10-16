// Riconosce le citazioni di articoli («art. 94 Cost.», «art. 2, co. 8-bis, l. 241/1990»,
// «artt. 104-105 Cost.», «art. 263 TFUE»...) in un testo semplice e le traduce in normaId
// (cost_art_94, l241_1990_art_2, tfue_art_263...). Usato dall'app per rendere cliccabili
// le citazioni e da strumenti/collega_norme.js per compilare i «riferimenti».
(function (root) {
  const NUM = "\\d+(?:-(?:bis|ter|quater|quinquies|sexies|septies|octies|novies|nonies|decies))?";
  const QUAL1 = "\\s*,?\\s*(?:(?:co\\.|comma|commi|par\\.|paragrafo|paragrafi|lett\\.|lettera|n\\.)\\s*[\\w-]+\\)?(?:\\s*(?:e|-)\\s*[\\w-]+\\)?)?|(?:primo|secondo|terzo|quarto|quinto|sesto|settimo|ultimo|ult\\.)\\s+comma)";
  const QUAL = "(?:" + QUAL1 + ")*";
  const ATTO = "(?:Cost\\.|Costituzione|TUE|TFUE|c\\.c\\.|c\\.p\\.a\\.|CAD|Carta(?: dei diritti fondamentali)?|Protocollo n\\. ?\\d+|Testo unico|[lL]\\. ?cost\\. ?\\d+\\/\\d{4}|[lL]\\. ?\\d+\\/\\d{4}|legge \\d+\\/\\d{4}|[dD]\\.\\s?[lL]gs\\.? ?\\d+\\/\\d{4}|[dD]\\.[lL]\\. ?\\d+\\/\\d{4}|[dD]\\.\\s?P\\.\\s?R\\.? ?\\d+\\/\\d{4}|TUEL)";
  const PREP = "(?:\\s*,?\\s*(?:del|della|dello|dal|dalla|nel|nella)?\\s*)";
  const RE_CIT = new RegExp("\\b([Aa]rtt?\\.|[Aa]rticol[oi])\\s*(" + NUM + ")((?:" + QUAL + "(?:\\s*,?\\s*(?:e|ed|-|,)\\s*(?:(?:all'|dall'|l')?artt?\\.\\s*)?" + NUM + "(?![\\d/]))?)*)" + QUAL + "(?:" + PREP + "(" + ATTO + ")(?![\\w]))?", "g");
  const RE_ATTO = new RegExp("(?:^|[^\\w])(" + ATTO + ")(?![\\w])", "g");

  function prefisso(atto) {
    if (!atto) return null;
    const a = atto.replace(/\s+/g, " ").trim();
    if (/^Cost|^Costituzione/.test(a)) return "cost";
    if (a === "TUE") return "tue";
    if (a === "TFUE") return "tfue";
    if (a === "c.c.") return "cc";
    if (a === "c.p.a.") return "cpa";
    if (a === "CAD") return "cad";
    if (/^Carta/.test(a)) return "cdfue";
    if (/^Testo unico/.test(a)) return null;
    if (a === "TUEL") return "dlgs267_2000";
    let m;
    if ((m = a.match(/^Protocollo n\. ?(\d+)/))) return "prot" + m[1];
    if ((m = a.match(/^[lL]\. ?cost\. ?(\d+)\/(\d{4})/))) return "lcost" + m[1] + "_" + m[2];
    if ((m = a.match(/^(?:[lL]\.|legge) ?(\d+)\/(\d{4})/))) return "l" + m[1] + "_" + m[2];
    if ((m = a.match(/^[dD]\.\s?[lL]gs\.? ?(\d+)\/(\d{4})/))) return m[1] === "82" && m[2] === "2005" ? "cad" : "dlgs" + m[1] + "_" + m[2];
    if ((m = a.match(/^[dD]\.[lL]\. ?(\d+)\/(\d{4})/))) return "dl" + m[1] + "_" + m[2];
    if ((m = a.match(/^[dD]\.\s?P\.\s?R\.? ?(\d+)\/(\d{4})/))) return "dpr" + m[1] + "_" + m[2];
    return null;
  }
  const idArt = (pre, n) => pre + "_art_" + n.replace(/-/g, "_");

  // Restituisce [{start, end, art, pre (prefisso esplicito o null), parti:[{start,end,art}]}]
  function trova(testo) {
    const out = [];
    RE_CIT.lastIndex = 0;
    let m;
    while ((m = RE_CIT.exec(testo))) {
      const parti = [{ start: m.index, end: m.index + m[1].length + (m[0].slice(m[1].length).match(/^\s*/)[0].length) + m[2].length, art: m[2] }];
      // i qualificatori («, commi 1-2», «, par. 4») non sono numeri di articolo: si mascherano
      const coda = (m[3] || "").replace(new RegExp(QUAL1, "g"), x => " ".repeat(x.length)), base = m.index + m[0].indexOf(m[2]) + m[2].length;
      const reNum = new RegExp("(?:\\s*,?\\s*(?:e|ed|-|,)\\s*(?:(?:all'|dall'|l')?artt?\\.\\s*)?)(" + NUM + ")(?![\\d/])", "g");
      let k;
      while ((k = reNum.exec(coda))) {
        // «104-105»: il trattino tra numeri è un intervallo di due articoli
        const s = base + k.index + k[0].length - k[1].length;
        parti.push({ start: s, end: s + k[1].length, art: k[1] });
      }
      out.push({ start: m.index, end: m.index + m[0].length, pre: prefisso(m[4]), parti });
    }
    return out;
  }

  // Menzioni di atti (anche senza articolo), con posizione: servono come contesto.
  function atti(testo) {
    const out = [];
    RE_ATTO.lastIndex = 0;
    let m;
    while ((m = RE_ATTO.exec(testo))) out.push({ pos: m.index + m[0].length - m[1].length, pre: prefisso(m[1]) });
    return out;
  }

  // Risolve le citazioni di più blocchi di testo (prima la spiegazione, poi le opzioni).
  // esiste(id) dice se il testo della norma è disponibile; per le citazioni senza atto
  // si usa l'atto citato più vicino prima (nello stesso blocco, poi nei precedenti),
  // altrimenti il primo dopo, scartando gli atti di cui non esiste il testo.
  // Ritorna per ogni blocco [{start,end,art,id|null}].
  function risolvi(blocchi, esiste) {
    const ris = [], storico = [];
    blocchi.forEach((testo, b) => {
      const cit = trova(testo || ""), ctx = atti(testo || "");
      const r = [];
      for (const c of cit) {
        for (const p of c.parti) {
          let id = null;
          if (c.pre) id = idArt(c.pre, p.art);
          else {
            const prima = ctx.filter(a => a.pos < c.start).reverse().concat(storico.slice().reverse());
            const dopo = ctx.filter(a => a.pos >= c.end);
            for (const a of prima.concat(dopo)) {
              if (a.pre && esiste(idArt(a.pre, p.art))) { id = idArt(a.pre, p.art); break; }
            }
          }
          r.push({ start: p.start, end: p.end, art: p.art, id, esplicito: !!c.pre });
        }
      }
      ris.push(r);
      storico.push(...ctx);
    });
    return ris;
  }

  const api = { trova, atti, risolvi, prefisso, idArt };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.CITAZIONI = api;
})(typeof window !== "undefined" ? window : this);
