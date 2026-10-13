// figur.js — figur — Figur — figur.js — BIO→CUBIK GOOD 79.84 — alle Tore offen — arg 32.29 breite X — xarg 0.254 tiefe Z — arg3te 8.16 cubik innen 27▣ 9-1 — eco 25.9 — radiusFactor 0.348 ~0.35 — color #ffcc33 — 81◆→△→27▣→3↺ — cubik ram nach innen muss — zone haben wir jetzt ein Feld — Zone — Feld — zone haben wir jetzt ein Feld — aura mana zen dann cpu ram rom gpu — move bereitstellen — 60fps — figur — Figur — figur.js — drinn spielt die musik — außen show — maßnahme innen move außen — Wahrheit tiefer — master pi lächelt — meta = 7sinn

export const FIGUR = {
  // figur — Figur — 81◆→△→27▣→3↺ — cubik ram — Figur — Figur — aura mana zen — cpu ram rom gpu — move
  id: "FIGUR",
  cubik: { arg:32.29, xarg:0.254, arg3te:8.16, innen:27, eco:25.9, radiusFactor:0.348, color:"#ffcc33", good:79.84, tore:"alle Tore offen", regel:"81◆→△→27▣→3↺ — cubik ram nach innen muss — aber innen gibt es nicht — weil wir rechnen runter — 81→27→3→0" },

  // Figur — Typen — 81◆→△→27▣→3↺ — 81=Raum 27=Fläche 3=Linie 0=Punkt — Figur — Figur
  typen: {
    punkt: { v:0, symbol:"↺", name:"Punkt", regel:"0 — Punkt — 0 — Ende — runter — 0 — Punkt — Figur" },
    linie: { v:3, symbol:"▣", name:"Linie", regel:"3 — Linie — 3 — Linie — 3▣ — cubik innen — 3 — Linie — Figur" },
    flaeche: { v:27, symbol:"△", name:"Fläche", regel:"27 — Fläche — 27△ — 27 — Fläche — 27 — Fläche — Figur" },
    raum: { v:81, symbol:"◆", name:"Raum", regel:"81 — Raum — 81◆ — 81 — Raum — 81◆→△→27▣→3↺ — cubik ram nach innen muss" },
    runter: [81,27,3,0] // 81→27→3→0 — runter — Figur — runter — 81→27→3→0 — runter
  },

  // aura mana zen — cpu ram rom gpu — was Geräte bereitstellen für den move — Figur — Aura Mana Zen — Figur
  aura: {
    check: (fps=60) => {
      const zen = fps>=60?1:fps/60; // zen — Zen — 60fps — unter 60fps fällt auf
      const mana = Math.min(1, 0.7984+zen*0.5); // mana — GOOD 79.84
      const aura = mana*zen; // aura — Aura
      return { aura:+(aura*100).toFixed(1), mana:+(mana*100).toFixed(1), zen:+(zen*100).toFixed(1), fps, color:aura>=0.7?"#ffcc33":"#ff9933", text:`figur aura ${aura.toFixed(2)} — mana ${mana.toFixed(2)} — zen ${zen.toFixed(2)} — fps ${fps}` };
    }
  },

  // Figur erstellen — aura mana zen dann cpu ram rom gpu — move bereitstellen — 60fps — Figur — Figur erstellen
  create: (type="raum", h=8,b=9,t=3) => {
    const typ = FIGUR.typen[type]||FIGUR.typen.raum;
    const fps = 60; // wird von ZONE.perf überschrieben — 60fps
    const a = FIGUR.aura.check(fps);
    const cpu = (navigator.hardwareConcurrency||4)/8*100;
    const ram = (navigator.deviceMemory||8)/8*100;
    const rom = 79.84;
    const gpu = fps/60*100;
    const move = (cpu+ram+rom+gpu+a.aura)/5;
    return {
      type, symbol: typ.symbol, v: typ.v,
      h,b,t, arg:32.29, xarg:0.254, arg3te:8.16, innen:27, eco:+(move*0.325).toFixed(2), radiusFactor:0.348, color: move>=70?"#ffcc33":"#ff9933", good: +move.toFixed(1),
      aura: a.aura, mana: a.mana, zen: a.zen, cpu: +cpu.toFixed(1), ram: +ram.toFixed(1), rom: +rom.toFixed(1), gpu: +gpu.toFixed(1), move: +move.toFixed(1), fps,
      s8: `${h}→8→${b%3==0?9:3} — Seil`,
      regel: `figur ${type} — ${typ.symbol} — ${typ.v} — ${h}◆${b}▣${t}↺ — aura mana zen cpu ram rom gpu — move bereitstellen — 60fps — 81◆→△→27▣→3↺`,
      text: `FIGUR ${type} ${typ.symbol} ${typ.v} — GOOD ${move.toFixed(1)} — aura ${a.aura} mana ${a.mana} zen ${a.zen} — cpu ${cpu.toFixed(0)} ram ${ram.toFixed(0)} rom ${rom.toFixed(0)} gpu ${gpu.toFixed(0)} — move ${move.toFixed(1)} — 81◆→△→27▣→3↺`
    };
  },

  // alle Figuren — 81◆→△→27▣→3↺ — 81→27→3→0 — runter — alle Figuren — Figur — alle Figuren
  alle: (h=8,b=9,t=3) => {
    return [81,27,3,0].map(v=>{
      const type = v===81?"raum": v===27?"flaeche": v===3?"linie":"punkt";
      return FIGUR.create(type,h,b,t);
    });
  },

  // Zone Feld — 27▣ — 9-1 — cubik innen — 27▣ — 9-1 — Feld — Zone — Feld — 27 Punkte — Figur — 27 Figuren — Zone Feld — 27▣
  zone: {
    grid: (n=3) => {
      const pts=[];
      for(let x=0;x<n;x++) for(let y=0;y<n;y++) for(let z=0;z<n;z++){
        pts.push(FIGUR.create(x%2==0?"raum":y%2==0?"flaeche":"linie", 8+x, 9+y, 3+z));
      }
      return pts; // 27 Figuren — 27▣ — Zone Feld — 27▣ — 9-1 — cubik innen — Feld
    }
  },

  // check — figur.js — Figur — check — 81◆→△→27▣→3↺ — cubik ram nach innen muss — aber innen gibt es nicht — weil wir rechnen runter — 81→27→3→0 — runter
  check: (h=8,b=9,t=3) => ({
    figur: FIGUR.create("raum",h,b,t),
    alle: FIGUR.alle(h,b,t),
    zone: FIGUR.zone.grid(3),
    text: `figur.js — FIGUR — 81◆→△→27▣→3↺ — cubik ram nach innen muss — aber innen gibt es nicht — weil wir rechnen runter — 81→27→3→0 — runter — zone haben wir jetzt ein Feld — 27▣ — GOOD 79.84 — alle Tore offen — aura mana zen cpu ram rom gpu — move bereitstellen — 60fps — drinn spielt die musik — außen show — maßnahme innen move außen — Wahrheit tiefer — master pi lächelt`
  })
};

console.log(FIGUR.check(8,9,3));
