// https://iki1uc.github.io/d3d.html/ — BIO→CUBIK GOOD 79.84 — alle Tore offen — arg 32.29 breite X — xarg 0.254 tiefe Z — arg3te 8.16 cubik innen 27▣ 9-1 — eco 25.9 — radiusFactor 0.348 ~0.35 — color #ffcc33 — 81◆→△→27▣→3↺ — cubik ram nach innen muss — bio.js · bio.ID.js · ID · README · index.js — so das reicht mir nicht — ich will ein aura mana zen dann cpu ram rom gpu und das hat nix mit was drin ist zu tun sondern was seine Geräte bereitstellen für den move weil ich muss keine Hardware kontrollieren ob es gut war wenn es unter 60fps das fällt nicht nur leicht auf — ja — aura mana zen dann cpu ram rom gpu — move bereitstellen — 60fps — nicht Hardware kontrollieren — 60fps — aura mana zen — cpu ram rom gpu — move

export const BIO = {
  // BIO→CUBIK GOOD 79.84 — alle Tore offen — arg 32.29 — xarg 0.254 — arg3te 8.16 — cubik innen 27▣ — eco 25.9 — radiusFactor 0.348 — #ffcc33
  id: "BIO→CUBIK",
  cubik: { arg: 32.29, xarg: 0.254, arg3te: 8.16, innen: 27, eco: 25.9, radiusFactor: 0.348, color: "#ffcc33", good: 79.84, tore: "alle Tore offen", regel: "81◆→△→27▣→3↺ — cubik ram nach innen muss — aber innen gibt es nicht — weil wir rechnen runter — 81→27→3→0" },

  // aura — mana — zen — dann cpu ram rom gpu — was Geräte bereitstellen für den move — nicht was drin ist — move bereitstellen
  aura: {
    // aura — Aura — Aura — aura — was Geräte bereitstellen — aura — move
    check: () => {
      const fps = BIO.perf.fps();
      const zen = fps >= 60 ? 1 : fps / 60; // zen = 1 wenn 60fps — unter 60fps fällt auf — nicht nur leicht
      const mana = Math.min(1, BIO.cubik.good / 100 + zen*0.5); // mana — Mana — aura mana — good 79.84
      const aura = mana * zen; // aura — Aura — aura mana zen — aura = mana * zen
      return { aura: +(aura*100).toFixed(2), mana: +(mana*100).toFixed(2), zen: +(zen*100).toFixed(2), fps, text: `aura ${aura.toFixed(2)} — mana ${mana.toFixed(2)} — zen ${zen.toFixed(2)} — fps ${fps} — ${fps>=60?"alle Tore offen GOOD":"Tore lahmt — unter 60fps fällt auf"}` };
    }
  },

  // cpu ram rom gpu — was Geräte bereitstellen für den move — nicht was drin ist — move bereitstellen — cpu ram rom gpu
  move: {
    // cpu — CPU — was bereitstellt für move — nicht Hardware kontrollieren — cpu bereitstellen
    cpu: () => {
      const cores = navigator.hardwareConcurrency || 4;
      const fps = BIO.perf.fps();
      const bereit = Math.min(1, fps/60 * (cores/4)); // was bereitstellt für move — cpu bereitstellen — fps / 60 * cores
      return { cores, bereit: +(bereit*100).toFixed(1), text: `cpu bereit ${bereit.toFixed(2)} — ${cores} cores — fps ${fps} — move` };
    },
    // ram — RAM — was bereitstellt für move — ram bereitstellen
    ram: () => {
      const mem = navigator.deviceMemory || 8; // GB — was Gerät bereitstellt
      const bereit = Math.min(1, mem/8); // 8GB = 100% bereit
      return { gb: mem, bereit: +(bereit*100).toFixed(1), text: `ram bereit ${bereit.toFixed(2)} — ${mem}GB — move` };
    },
    // rom — ROM — Axiom-12 — ROM_Store — Endlager — stabil — innen — drinn spielt die musik — rom bereitstellen
    rom: () => {
      const good = BIO.cubik.good; // 79.84 — GOOD — rom bereitstellen — Axiom-12 — ROM — ROM_Store
      const bereit = good/100; // rom bereitstellen — good / 100 — 79.84% bereit
      return { good, bereit: +(bereit*100).toFixed(1), text: `rom bereit ${bereit.toFixed(2)} — GOOD ${good} — Axiom-12 — ROM_Store — move — innen` };
    },
    // gpu — GPU — was bereitstellt für move — gpu bereitstellen — nicht was drin ist — move bereitstellen — 60fps
    gpu: () => {
      let renderer="unknown"; let bereit=0.5;
      try{
        const c=document.createElement("canvas"); const gl=c.getContext("webgl")||c.getContext("experimental-webgl");
        const dbg = gl.getExtension("WEBGL_debug_renderer_info");
        if(dbg){ renderer = gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL); }
        // gpu bereitstellen — wenn 60fps — bereit 1 — sonst fps/60
        const fps = BIO.perf.fps();
        bereit = Math.min(1, fps/60 + 0.2); // +0.2 Basis — gpu immer etwas bereit
      }catch(e){}
      return { renderer, bereit: +(bereit*100).toFixed(1), text: `gpu bereit ${bereit.toFixed(2)} — ${renderer} — move — 60fps` };
    },
    // gesamt — was Geräte bereitstellen für den move — aura mana zen + cpu ram rom gpu — move bereitstellen — 60fps
    gesamt: () => {
      const a = BIO.aura.check();
      const cpu = BIO.move.cpu();
      const ram = BIO.move.ram();
      const rom = BIO.move.rom();
      const gpu = BIO.move.gpu();
      const move = (cpu.bereit + ram.bereit + rom.bereit + gpu.bereit + a.aura)/5; // move — was Geräte bereitstellen — move bereitstellen
      const eco = +(move * 0.325).toFixed(2); // eco 25.9 — eco = move * 0.325 — bei 79.84 good → 25.9 eco
      return {
        aura: a.aura, mana: a.mana, zen: a.zen, fps: a.fps,
        cpu: cpu.bereit, ram: ram.bereit, rom: rom.bereit, gpu: gpu.bereit,
        move: +move.toFixed(2), eco,
        good: +move.toFixed(2),
        tore: move>=70?"alle Tore offen GOOD 79.84":"Tore lahmt — unter 60fps fällt auf — nicht nur leicht",
        color: move>=70?"#ffcc33": move>=50?"#ff9933":"#ff3333", // #ffcc33 — GOOD — 79.84 — alle Tore offen
        text: `BIO→CUBIK GOOD ${move.toFixed(2)} — aura ${a.aura} mana ${a.mana} zen ${a.zen} — cpu ${cpu.bereit} ram ${ram.bereit} rom ${rom.bereit} gpu ${gpu.bereit} — move ${move.toFixed(2)} — eco ${eco} — ${move>=70?"alle Tore offen":"lahmt"} — 81◆→△→27▣→3↺`
      };
    }
  },

  // perf — 60fps — nicht Hardware kontrollieren — 60fps — wenn unter 60fps fällt nicht nur leicht auf — 60fps
  perf: {
    _last: performance.now(), _frames: 0, _fps: 60,
    fps: () => {
      BIO.perf._frames++;
      const now = performance.now();
      const diff = now - BIO.perf._last;
      if(diff>=500){ // alle 0.5s messen — 60fps — nicht Hardware kontrollieren — fps messen
        BIO.perf._fps = Math.round(BIO.perf._frames * 1000 / diff);
        BIO.perf._last = now;
        BIO.perf._frames = 0;
      }
      return BIO.perf._fps;
    },
    tick: () => requestAnimationFrame(()=>BIO.perf.fps())
  },

  // 81◆→△→27▣→3↺ — cubik ram nach innen muss — aber innen gibt es nicht — weil wir rechnen runter — 81→27→3→0 — runter — arg 32.29 — xarg 0.254 — arg3te 8.16 — cubik innen 27▣ 9-1 — eco 25.9 — radiusFactor 0.348 — #ffcc33
  check: () => BIO.move.gesamt()
};

// bio.ID.js — ID — bio.ID.js — aura mana zen dann cpu ram rom gpu — ID — aura mana zen
export const BIO_ID = {
  id: "BIO_ID",
  aura: () => BIO.aura.check(),
  move: () => BIO.move.gesamt(),
  check: (h=8,b=9,t=3) => ({h,b,t, ...BIO.move.gesamt(), s8:`${h}→8→${b%3==0?9:3} — Seil`, regel:"maßnahme innen move außen — innen musik außen show — aura mana zen — cpu ram rom gpu — move bereitstellen — 60fps"})
};

// index.js — index.js — BIO→CUBIK — GOOD — 79.84 — alle Tore offen — aura mana zen — cpu ram rom gpu — move bereitstellen
console.log(BIO.check());
console.log(BIO_ID.check(8,9,3));
// loop — 60fps — nicht Hardware kontrollieren — 60fps — wenn unter 60fps fällt nicht nur leicht auf
(function loop(){ BIO.perf.tick(); const g=BIO.move.gesamt(); if(g.fps<60){ console.log(`lahmt — fps ${g.fps} — aura ${g.aura} — move ${g.move} — unter 60fps fällt nicht nur leicht auf — ${g.tore}`); } requestAnimationFrame(loop); })();
