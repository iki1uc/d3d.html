// https://iki1uc.github.io/d3d.html/ — BIO→CUBIK GOOD 79.84 — alle Tore offen — arg 32.29 breite X — xarg 0.254 tiefe Z — arg3te 8.16 cubik innen 27▣ 9-1 — eco 25.9 — radiusFactor 0.348 ~0.35 — color #ffcc33 — 81◆→△→27▣→3↺
export const BIO = {
  id: "BIO→CUBIK",
  cubik: { arg: 32.29, xarg: 0.254, arg3te: 8.16, innen: 27, eco: 25.9, radiusFactor: 0.348, color: "#ffcc33", good: 79.84, tore: "alle Tore offen", regel: "81◆→△→27▣→3↺ — cubik ram nach innen muss — aber innen gibt es nicht — weil wir rechnen runter — 81→27→3→0" },

  aura: {
    check: () => {
      const fps = BIO.perf.fps();
      const zen = fps >= 60 ? 1 : fps / 60; // zen = fps/60 — unter 60fps fällt auf
      const mana = Math.min(1, 0.7984 + zen * 0.5); // mana = 0.7984+zen*0.5 — nicht BIO.cubik.good/100 sonst >1
      const aura = mana * zen; // aura = mana*zen — was Geräte bereitstellen
      return { aura: +(aura*100).toFixed(2), mana: +(mana*100).toFixed(2), zen: +(zen*100).toFixed(2), fps, text: `aura ${aura.toFixed(2)} — mana ${mana.toFixed(2)} — zen ${zen.toFixed(2)} — fps ${fps} — ${fps>=60?"alle Tore offen GOOD":"Tore lahmt — unter 60fps fällt auf"}` };
    }
  },

  move: {
    cpu: () => {
      const cores = navigator.hardwareConcurrency || 4;
      const fps = BIO.perf.fps();
      const bereit = Math.min(1, fps/60 * (cores/4));
      return { cores, bereit: +(bereit*100).toFixed(1), text: `cpu bereit ${bereit.toFixed(2)} — ${cores} cores — fps ${fps} — move` };
    },
    ram: () => {
      const mem = navigator.deviceMemory || 8;
      const bereit = Math.min(1, mem/8);
      return { gb: mem, bereit: +(bereit*100).toFixed(1), text: `ram bereit ${bereit.toFixed(2)} — ${mem}GB — move` };
    },
    rom: () => {
      const good = BIO.cubik.good; // 79.84 — Axiom-12 — ROM_Store — innen musik
      const bereit = good/100;
      return { good, bereit: +(bereit*100).toFixed(1), text: `rom bereit ${bereit.toFixed(2)} — GOOD ${good} — Axiom-12 — ROM_Store — innen` };
    },
    gpu: () => {
      let renderer="unknown"; let bereit=0.5;
      try{
        const c=document.createElement("canvas"); const gl=c.getContext("webgl")||c.getContext("experimental-webgl");
        const dbg=gl.getExtension("WEBGL_debug_renderer_info");
        if(dbg) renderer=gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL);
        const fps=BIO.perf.fps();
        bereit=Math.min(1,fps/60+0.2);
      }catch(e){}
      return { renderer, bereit: +(bereit*100).toFixed(1), text: `gpu bereit ${bereit.toFixed(2)} — ${renderer} — move — 60fps` };
    },
    gesamt: () => {
      const a=BIO.aura.check(), cpu=BIO.move.cpu(), ram=BIO.move.ram(), rom=BIO.move.rom(), gpu=BIO.move.gpu();
      const move=(cpu.bereit+ram.bereit+rom.bereit+gpu.bereit+a.aura)/5; // move = (cpu+ram+rom+gpu+aura)/5 — was bereitstellt
      const eco=+(move*0.325).toFixed(2); // 79.84→25.9 — triangleEgal
      return {
        aura:a.aura, mana:a.mana, zen:a.zen, fps:a.fps,
        cpu:cpu.bereit, ram:ram.bereit, rom:rom.bereit, gpu:gpu.bereit,
        move:+move.toFixed(2), eco, good:+move.toFixed(2),
        tore:move>=70?"alle Tore offen GOOD 79.84":"Tore lahmt — unter 60fps fällt auf — nicht nur leicht",
        color:move>=70?"#ffcc33":move>=50?"#ff9933":"#ff3333",
        text:`BIO→CUBIK GOOD ${move.toFixed(2)} — aura ${a.aura} mana ${a.mana} zen ${a.zen} — cpu ${cpu.bereit} ram ${ram.bereit} rom ${rom.bereit} gpu ${gpu.bereit} — move ${move.toFixed(2)} — eco ${eco} — ${move>=70?"alle Tore offen":"lahmt"} — 81◆→△→27▣→3↺`
      };
    }
  },

  perf: {
    _last:performance.now(), _frames:0, _fps:60,
    fps(){this._frames++;const n=performance.now(),d=n-this._last;if(d>=500){this._fps=Math.round(this._frames*1000/d);this._last=n;this._frames=0}return this._fps;},
    tick(){requestAnimationFrame(()=>BIO.perf.fps());}
  },

  check:()=>BIO.move.gesamt()
};

// bio.ID.js — pure bioID() — ID — 8→8→9 Seil
export const BIO_ID = {
  id:"BIO_ID",
  aura:()=>BIO.aura.check(),
  move:()=>BIO.move.gesamt(),
  check:(h=8,b=9,t=3)=>({h,b,t,...BIO.move.gesamt(),s8:`${h}→8→${b%3==0?9:3} — Seil`,regel:"maßnahme innen move außen — innen musik außen show — aura mana zen — cpu ram rom gpu — move bereitstellen — 60fps"})
};
