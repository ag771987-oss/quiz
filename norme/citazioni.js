// Riconosce le citazioni di articoli («art. 94 Cost.», «art. 2, co. 8-bis, l. 241/1990»,
// «artt. 104-105 Cost.», «art. 263 TFUE»...) in un testo semplice e le traduce in normaId
// (cost_art_94, l241_1990_art_2, tfue_art_263...). Usato dall'app per rendere cliccabili
// le citazioni e da strumenti/collega_norme.js per compilare i «riferimenti».
(function (root) {
  const NUM = "\\d+(?:-(?:bis|ter|quater|quinquies|sexies|septies|octies|novies|nonies|decies))?";
  const QUAL1 = "\\s*,?\\s*(?:(?:co\\.|comma|commi|par\\.|paragrafo|paragrafi|lett\\.|lettera|n\\.)\\s*[\\w-]+\\)?(?:\\s*(?:e|-)\\s*[\\w-]+\\)?)?|(?:primo|secondo|terzo|quarto|quinto|sesto|settimo|ottavo|nono|decimo|ultimo|ult\\.)\\s+comma)";
  const QUAL = "(?:" + QUAL1 + ")*";
  // numero e anno di un atto: «241/1990», «n. 241/1990», «n. 241 del 1990», «7 agosto 1990, n. 241»
  const MESI = "(?:gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|settembre|ottobre|novembre|dicembre)";
  const NA = "(?:(?:n\\.\\s?)?\\d+\\s?\\/\\s?\\d{4}|n\\.\\s?\\d+ del \\d{4}|\\d{1,2}°? " + MESI + " \\d{4},? n\\.\\s?\\d+)";
  const ATTO = "(?:Carta (?:ONU|delle Nazioni Unite)|Statuto della Corte internazionale di giustizia|Costituzione dell[’']ILO|Cost\\.|Costituzione|TUE|TFUE|c\\.c\\.|codice civile|c\\.p\\.a\\.|codice del processo amministrativo|c\\.p\\.(?!a)|codice penale|CAD|Carta(?: dei diritti fondamentali)?|Protocollo n\\. ?\\d+|Testo unico|TUEL|[Cc]odice del Terzo settore|preleggi|disposizioni sulla legge in generale|disp\\. prel\\.|direttiva \\d{4}\\/\\d+\\/UE|legge 241(?![\\d\\/])"
    + "|(?:[lL]\\.|legge) ?cost(?:\\.|ituzionale) ?" + NA + "|(?:[lL]\\.|legge) ?" + NA + "|(?:[dD]\\.\\s?[lL]gs\\.?|decreto legislativo) ?" + NA
    + "|(?:[dD]\\.\\s?[lL]\\.|decreto-legge) ?" + NA + "|(?:[dD]\\.\\s?P\\.\\s?R\\.?|decreto del Presidente della Repubblica) ?" + NA + ")";
  const PREP = "(?:\\s*,?\\s*(?:del|della|dello|delle|dei|degli|dal|dalla|nel|nella)?\\s*)";
  const RE_CIT = new RegExp("\\b([Aa]rtt?\\.|[Aa]rticol[oi])\\s*(" + NUM + ")((?:" + QUAL + "(?:\\s*,?\\s*(?:e|ed|-|,)\\s*(?:(?:all'|dall'|l')?artt?\\.\\s*)?" + NUM + "(?![\\d/]))?)*)" + QUAL + "(?:" + PREP + "(" + ATTO + ")(?![\\w]))?", "g");
  const RE_ATTO = new RegExp("(?:^|[^\\w])(" + ATTO + ")(?![\\w])", "g");

  // numero e anno da «241/1990», «n. 241 del 1990», «7 agosto 1990, n. 241»
  function numAnno(a) {
    let m;
    if ((m = a.match(/(\d+)\s?\/\s?(\d{4})/))) return m[1] + "_" + m[2];
    if ((m = a.match(/n\.\s?(\d+) del (\d{4})/))) return m[1] + "_" + m[2];
    if ((m = a.match(/(\d{4}),? n\.\s?(\d+)/))) return m[2] + "_" + m[1];
    return null;
  }
  function prefisso(atto) {
    if (!atto) return null;
    const a = atto.replace(/\s+/g, " ").trim();
    if (/^Carta (ONU|delle Nazioni)/.test(a)) return "onu";
    if (/^Statuto della Corte internazionale/.test(a)) return "cig";
    if (/^Costituzione dell/.test(a)) return "ilo";
    if (/^Cost|^Costituzione/.test(a)) return "cost";
    if (a === "TUE") return "tue";
    if (a === "TFUE") return "tfue";
    if (a === "c.c." || a === "codice civile") return "cc";
    if (a === "c.p.a." || a === "codice del processo amministrativo") return "cpa";
    if (a === "c.p." || a === "codice penale") return "cp";
    if (a === "CAD") return "cad";
    if (/^Carta/.test(a)) return "cdfue";
    if (/^Testo unico/.test(a)) return null;
    if (a === "TUEL") return "dlgs267_2000";
    if (/^[Cc]odice del Terzo settore$/.test(a)) return "dlgs117_2017";
    if (/^(preleggi|disposizioni sulla legge|disp\. prel)/.test(a)) return "preleggi";
    if (a === "legge 241") return "l241_1990";
    let m;
    if ((m = a.match(/^Protocollo n\. ?(\d+)/))) return "prot" + m[1];
    if ((m = a.match(/^direttiva (\d{4})\/(\d+)\/UE/))) return "dir" + m[1] + "_" + m[2];
    const na = numAnno(a);
    if (!na) return null;
    if (/^(?:[lL]\.|legge) ?cost/.test(a)) return "lcost" + na;
    if (/^(?:[lL]\.|legge)/.test(a)) return "l" + na;
    if (/^(?:[dD]\.\s?[lL]gs|decreto legislativo)/.test(a)) return na === "82_2005" ? "cad" : na === "267_2000" ? "dlgs267_2000" : "dlgs" + na;
    if (/^(?:[dD]\.\s?[lL]\.|decreto-legge)/.test(a)) return "dl" + na;
    if (/^(?:[dD]\.\s?P|decreto del Presidente)/.test(a)) return "dpr" + na;
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
  // Ritorna per ogni blocco [{start,end,art,id|null,esplicito,inCitazione}].
  function risolvi(blocchi, esiste) {
    const ris = [], storico = [];
    blocchi.forEach((testo, b) => {
      const cit = trova(testo || ""), ctx = atti(testo || "");
      // i rinvii dentro un testo di legge riportato tra «» appartengono a quella norma: si segnano
      const virgolette = [...(testo || "").matchAll(/«[^»]*»/g)].map(m => [m.index, m.index + m[0].length]);
      const r = [];
      for (const c of cit) {
        const inCitazione = virgolette.some(([a, b]) => c.start > a && c.start < b);
        for (const p of c.parti) {
          let id = null, dedotto = false;
          if (c.pre) id = idArt(c.pre, p.art);
          else {
            const prima = ctx.filter(a => a.pos < c.start).reverse().concat(storico.slice().reverse());
            const dopo = ctx.filter(a => a.pos >= c.end);
            for (const a of prima.concat(dopo)) {
              if (a.pre && esiste(idArt(a.pre, p.art))) { id = idArt(a.pre, p.art); break; }
            }
            // nessun testo disponibile: si attribuisce comunque all'atto citato subito prima (serve
            // a dire quale norma manca; l'app collega solo le norme di cui ha il testo)
            if (!id) { const a0 = prima.find(a => a.pre); if (a0) { id = idArt(a0.pre, p.art); dedotto = true; } }
          }
          r.push({ start: p.start, end: p.end, art: p.art, id, esplicito: !!c.pre, inCitazione, dedotto });
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
