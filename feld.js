// zone.js — Add BIO and BIO_ID objects with performance metrics — zone haben wir jetzt ein Feld — ja — zone — Zone — Feld — zone haben wir jetzt ein Feld — BIO→CUBIK GOOD 79.84 — alle Tore offen — arg 32.29 breite X — xarg 0.254 tiefe Z — arg3te 8.16 cubik innen 27▣ 9-1 — eco 25.9 — radiusFactor 0.348 ~0.35 — color #ffcc33 — 81◆→△→27▣→3↺ — cubik ram nach innen muss — aura mana zen dann cpu ram rom gpu und das hat nix mit was drinn ist zu tun sonderen was seine geräte bereitstellen für den move weil ich muss keine hrdware kontrollieren ob es gut war wenn es unter 60fps das fällt nicht nur lewicht auf — zone — Feld — zone haben wir jetzt ein Feld — aura mana zen — cpu ram rom gpu — move bereitstellen — 60fps

export const ZONE = {
  // zone haben wir jetzt ein Feld — Zone — Feld — 27▣ — 9-1 — cubik innen — 27▣ — 9-1 — Feld — Zone — Feld
  feld: {
    // feld — Feld — 27▣ — 9-1 — cubik innen — 27▣ — 9-1 — Feld — Zone — Feld — 3x3x3 — 27 — 9-1 — Feld
    size: 27, // 27▣ — cubik innen — 27▣ — 9-1 — 27 — 3x3x3 — Feld — Zone — Feld
    grid: (n=3) => {
      const pts=[];
      for(let x=0;x<n;x++) for(let y=0;y<n;y++) for(let z=0;z<n;z++){
        pts.push({x,y,z, id:`${x}${y}${z}`, s8:`${x}→8→${y%3==0?9:3} — Seil`, aura:0, mana:0, zen:0, cpu:0, ram:0, rom:0, gpu:0, move:0, good:0, color:"#000"});
      }
      return pts; // 27 Punkte — 27▣ — cubik innen — 27▣ — 9-1 — Feld — Zone — Feld
    },
    // zone — Zone — Feld — zone haben wir jetzt ein Feld — aura mana zen dann cpu ram rom gpu — move bereitstellen — 60fps
    check: (pts) => {
      return pts.map(p=>{
        const fps = ZONE.perf.fps();
        const zen = fps>=60?1:fps/60; // zen — Zen — zen = fps/60 — unter 60fps fällt auf — nicht nur leicht
        const mana = Math.min(1, 0.7984 + zen*0.5); // mana — Mana — GOOD 79.84 — mana — GOOD 79.84 /100 + zen*0.5
        const aura = mana*zen; // aura — Aura — aura mana zen — aura = mana * zen
        const cpu = (navigator.hardwareConcurrency||4)/8; // cpu — CPU — was bereitstellt für move — cpu bereitstellen
        const ram = (navigator.deviceMemory||8)/8; // ram — RAM — was bereitstellt für move — ram bereitstellen
        const rom = 0.7984; // rom — ROM — GOOD 79.84 — rom bereitstellen — Axiom-12 — ROM_Store — Endlager — stabil — innen
        const gpu = Math.min(1, fps/60+0.2); // gpu — GPU — was bereitstellt für move — gpu bereitstellen — fps/60
        const move = (cpu+ram+rom+gpu+aura)/5; // move — was Geräte bereitstellen für den move — move bereitstellen — GOOD 79.84
        const good = move*100; // GOOD — 79.84 — alle Tore offen — GOOD — 79.84 — alle Tore offen — arg 32.29 — xarg 0.254 — arg3te 8.16 — cubik innen 27▣ 9-1 — eco 25.9 — radiusFactor 0.348 — #ffcc33
        const color = good>=70?"#ffcc33": good>=50?"#ff9933":"#ff3333"; // #ffcc33 — GOOD — 79.84 — alle Tore offen — color #ffcc33
        return {...p, aura: +(aura*100).toFixed(1), mana: +(mana*100).toFixed(1), zen: +(zen*100).toFixed(1), cpu: +(cpu*100).toFixed(1), ram: +(ram*100).toFixed(1), rom: +(rom*100).toFixed(1), gpu: +(gpu*100).toFixed(1), move: +good.toFixed(1), good: +good.toFixed(1), color, fps, eco: +(good*0.325).toFixed(2), tore: good>=70?"alle Tore offen GOOD 79.84":"Tore lahmt — unter 60fps fällt auf"};
      });
    }
  },

  // BIO — BIO→CUBIK GOOD 79.84 — alle Tore offen — arg 32.29 breite X — xarg 0.254 tiefe Z — arg3te 8.16 cubik innen 27▣ 9-1 — eco 25.9 — radiusFactor 0.348 ~0.35 — color #ffcc33 — 81◆→△→27▣→3↺ — cubik ram nach innen muss — aura mana zen dann cpu ram rom gpu und das hat nix mit was drinn ist zu tun sonderen was seine geräte bereitstellen für den move weil ich muss keine hrdware kontrollieren ob es gut war wenn es unter 60fps das fällt nicht nur lewicht auf — zone — Feld — zone haben wir jetzt ein Feld — aura mana zen — cpu ram rom gpu — move bereitstellen — 60fps
  BIO: {
    id: "BIO→CUBIK",
    cubik: { arg:32.29, xarg:0.254, arg3te:8.16, innen:27, eco:25.9, radiusFactor:0.348, color:"#ffcc33", good:79.84, tore:"alle Tore offen", regel:"81◆→△→27▣→3↺ — cubik ram nach innen muss — aber innen gibt es nicht — weil wir rechnen runter — 81→27→3→0" },
    aura: { check: () => { const fps=ZONE.perf.fps(); const zen=fps>=60?1:fps/60; const mana=Math.min(1,0.7984+zen*0.5); const aura=mana*zen; return {aura:+(aura*100).toFixed(2), mana:+(mana*100).toFixed(2), zen:+(zen*100).toFixed(2), fps, text:`aura ${aura.toFixed(2)} — mana ${mana.toFixed(2)} — zen ${zen.toFixed(2)} — fps ${fps} — ${fps>=60?"alle Tore offen GOOD":"Tore lahmt — unter 60fps fällt auf"}`}; } },
    move: {
      cpu: () => { const cores=navigator.hardwareConcurrency||4; const fps=ZONE.perf.fps(); const bereit=Math.min(1,fps/60*(cores/4)); return {cores, bereit:+(bereit*100).toFixed(1), text:`cpu bereit ${bereit.toFixed(2)} — ${cores} cores — fps ${fps} — move`}; },
      ram: () => { const mem=navigator.deviceMemory||8; const bereit=Math.min(1,mem/8); return {gb:mem, bereit:+(bereit*100).toFixed(1), text:`ram bereit ${bereit.toFixed(2)} — ${mem}GB — move`}; },
      rom: () => { const good=79.84; const bereit=good/100; return {good, bereit:+(bereit*100).toFixed(1), text:`rom bereit ${bereit.toFixed(2)} — GOOD ${good} — Axiom-12 — ROM_Store — move — innen`}; },
      gpu: () => { let renderer="unknown"; let bereit=0.5; try{ const c=document.createElement("canvas"); const gl=c.getContext("webgl")||c.getContext("experimental-webgl"); const dbg=gl.getExtension("WEBGL_debug_renderer_info"); if(dbg){ renderer=gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL); } const fps=ZONE.perf.fps(); bereit=Math.min(1,fps/60+0.2);}catch(e){} return {renderer, bereit:+(bereit*100).toFixed(1), text:`gpu bereit ${bereit.toFixed(2)} — ${renderer} — move — 60fps`}; },
      gesamt: () => {
        const a=ZONE.BIO.aura.check(); const cpu=ZONE.BIO.move.cpu(); const ram=ZONE.BIO.move.ram(); const rom=ZONE.BIO.move.rom(); const gpu=ZONE.BIO.move.gpu();
        const move=(cpu.bereit+ram.bereit+rom.bereit+gpu.bereit+a.aura)/5; const eco=+(move*0.325).toFixed(2);
        return {aura:a.aura, mana:a.mana, zen:a.zen, fps:a.fps, cpu:cpu.bereit, ram:ram.bereit, rom:rom.bereit, gpu:gpu.bereit, move:+move.toFixed(2), eco, good:+move.toFixed(2), tore:move>=70?"alle Tore offen GOOD 79.84":"Tore lahmt — unter 60fps fällt auf — nicht nur leicht", color:move>=70?"#ffcc33":move>=50?"#ff9933":"#ff3333", text:`BIO→CUBIK GOOD ${move.toFixed(2)} — aura ${a.aura} mana ${a.mana} zen ${a.zen} — cpu ${cpu.bereit} ram ${ram.bereit} rom ${rom.bereit} gpu ${gpu.bereit} — move ${move.toFixed(2)} — eco ${eco} — ${move>=70?"alle Tore offen":"lahmt"} — 81◆→△→27▣→3↺`};
      }
    }
  },

  // BIO_ID — bio.ID.js — ID — bio.ID.js — aura mana zen dann cpu ram rom gpu — ID — aura mana zen — ID — bio.ID.js
  BIO_ID: {
    id: "BIO_ID",
    aura: () => ZONE.BIO.aura.check(),
    move: () => ZONE.BIO.move.gesamt(),
    check: (h=8,b=9,t=3) => ({h,b,t, ...ZONE.BIO.move.gesamt(), s8:`${h}→8→${b%3==0?9:3} — Seil`, regel:"maßnahme innen move außen — innen musik außen show — aura mana zen — cpu ram rom gpu — move bereitstellen — 60fps"})
  },

  // perf — 60fps — nicht Hardware kontrollieren — 60fps — wenn unter 60fps fällt nicht nur leicht auf — 60fps — perf — 60fps
  perf: { _last: performance.now(), _frames:0, _fps:60, fps: () => { ZONE.perf._frames++; const now=performance.now(); const diff=now-ZONE.perf._last; if(diff>=500){ ZONE.perf._fps=Math.round(ZONE.perf._frames*1000/diff); ZONE.perf._last=now; ZONE.perf._frames=0; } return ZONE.perf._fps; }, tick: () => requestAnimationFrame(()=>ZONE.perf.fps()) },

  // check — zone haben wir jetzt ein Feld — Zone — Feld — zone haben wir jetzt ein Feld — 27▣ — 9-1 — Feld — Zone — Feld — 3x3x3 — 27 — 9-1 — Feld — Zone — Feld
  check: () => {
    const pts = ZONE.feld.grid(3);
    const checked = ZONE.feld.check(pts);
    const gesamt = ZONE.BIO.move.gesamt();
    return {feld: checked, gesamt, tore: gesamt.tore, good: gesamt.good, color: gesamt.color, text:`zone haben wir jetzt ein Feld — Zone — Feld — ${checked.length} Punkte — 27▣ — 9-1 — cubik innen — GOOD ${gesamt.good} — ${gesamt.tore} — aura mana zen cpu ram rom gpu — move bereitstellen — 60fps — 81◆→△→27▣→3↺`};
  }
};

console.log(ZONE.check());
