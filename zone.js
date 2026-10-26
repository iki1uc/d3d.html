// https://iki1uc.github.io/d3d.html/ — ZONE v81 FINAL — 81↔27↔3↔0 — nicht 81→27→3→0 — übertreten
// Übergangsmodell: 81◆ RAUM AUSSEN SHOW ↓↑ 27▣ FLÄCHE MITTE GATE ↓↑ 3↺ LINIE INNEN MUSIK ↓↑ 0 PUNKT URSPRUNG

let _last = performance.now();
let _frames = 0;
let _fps = 60;

function loop() {
  _frames++;
  const now = performance.now();
  const d = now - _last;
  if (d >= 500) {
    _fps = Math.round((_frames * 1000) / d);
    _last = now;
    _frames = 0;
  }
  requestAnimationFrame(loop);
}
loop(); // nur 1x — kein double

function getFPS() { return _fps; } // nur lesen — kein Seiteneffekt

export const ZONE = {
  id: "ZONE v81 FINAL",
  dim: { 81: "81◆ RAUM AUSSEN SHOW", 27: "27▣ FLÄCHE MITTE GATE", 3: "3↺ LINIE INNEN MUSIK", 0: "0 PUNKT URSPRUNG" },
  levels: [81, 27, 3, 0],

  // === BIO — aura mana zen cpu ram rom gpu move — was bereitstellt — nicht Hardware kontrollieren ===
  bio() {
    const fps = getFPS(); // 1x lesen — nicht 5x increment
    const zen = Math.min(1, fps / 60); // FIX: deckeln — 120fps nicht zen=2
    const mana = Math.min(1, 0.7984 + zen * 0.5);
    const aura = Math.min(1, mana * zen);
    const cores = navigator.hardwareConcurrency || 4;
    const mem = navigator.deviceMemory || 8;
    const cpu = Math.min(1, fps / 60 * (cores / 4));
    const ram = Math.min(1, mem / 8);
    const rom = 0.7984; // GOOD 79.84
    const gpu = Math.min(1, fps / 60 + 0.2);
    const move = (cpu + ram + rom + gpu + aura) / 5;
    return {
      fps,
      aura: +(aura.toFixed(4)), mana: +(mana.toFixed(4)), zen: +(zen.toFixed(4)),
      cpu: +(cpu.toFixed(4)), ram: +(ram.toFixed(4)), rom: +(rom.toFixed(4)), gpu: +(gpu.toFixed(4)),
      move: +(move.toFixed(4)), good: +(move * 100).toFixed(2),
      color: move >= 0.70 ? "#ffcc33" : move >= 0.50 ? "#ff9933" : "#ff3333",
      eco: +(move * 0.325 * 100).toFixed(2), // 79.84 → 25.9
      arg: 32.29, xarg: 0.254, arg3te: 8.16, r: 0.348
    };
  },

  // === Gate-Bedingung — exakt deine Logik ===
  canUebertreten() {
    const g = this.bio();
    return (
      g.aura >= 0.70 &&
      g.mana >= 0.70 &&
      g.zen >= 0.90 &&
      g.move >= 0.70 &&
      g.fps >= 60
    );
  },

  // === Übertreten — 81↔27↔3↔0 ===
  go(from, to) {
    const g = this.bio();
    if (!this.canUebertreten()) {
      return { ok: false, from, to, gate: "geschlossen", good: g.good, fps: g.fps, aura: g.aura, mana: g.mana, zen: g.zen, move: g.move, txt: `Gate geschlossen — fps ${g.fps} — move ${g.move} — unter 60fps fällt auf` };
    }
    return { ok: true, from, to, gate: "alle Tore offen", good: 79.84, fps: g.fps, aura: g.aura, mana: g.mana, zen: g.zen, move: g.move, dimFrom: this.dim[from], dimTo: this.dim[to], txt: `${from} ↔ ${to} — übertreten erlaubt — ${this.dim[from]} → ${this.dim[to]}` };
  },

  // === Feldprüfung — exakt deine Logik ===
  check(x, y, z) {
    if (x === 1 && y === 1 && z === 1) {
      return { zone: "MITTE", level: "27▣", dim: 27, gate: true, txt: "MITTE 27▣ FLÄCHE GATE — übertreten Gate — aura mana zen" };
    }
    if (x === 0 || x === 2 || y === 0 || y === 2 || z === 0 || z === 2) {
      return { zone: "AUSSEN", level: "81◆", dim: 81, gate: false, txt: "AUSSEN 81◆ RAUM SHOW — cpu ram rom gpu move" };
    }
    return { zone: "INNEN", level: "3↺", dim: 3, gate: false, txt: "INNEN 3↺ LINIE MUSIK — innen musik" };
  },

  // === Black Jedi ===
  jedi() {
    const g = this.bio();
    const win = g.move >= 0.70 && g.fps >= 60;
    return {
      white: "White Jedi = Aura Mana Zen — Innen Musik",
      black: "Black Jedi = CPU RAM ROM GPU — Move bereitstellen — Außen Show",
      win4all: win ? "Win4All = Move >=70% und FPS >=60 — alle Tore offen — übertreten erlaubt" : `wartet — GOOD ${g.good} fps ${g.fps}`,
      win, ...g
    };
  }
};

export const FIGUR = {
  create(typ = 81, breite = 32.29, tiefe = 0.254, hoehe = 8.16) {
    const g = ZONE.bio();
    return {
      typ: ZONE.dim[typ] || "81◆",
      breite, tiefe, hoehe,
      arg: breite, xarg: tiefe, arg3te: hoehe,
      radiusFactor: 0.348, r: 0.348,
      color: "#ffcc33", eco: 25.9,
      canUebertreten: g.move >= 0.70,
      move: g.move, good: g.good, aura: g.aura, mana: g.mana, zen: g.zen, fps: g.fps,
      txt: `FIGUR ${typ} — breite ${breite} tiefe ${tiefe} hoehe ${hoehe} — r 0.348 #ffcc33 — canUebertreten ${g.move >= 0.70}`
    };
  }
};

// === TEST — sollte stabil bleiben — nicht fps 60 120 240 300 600 ===
export function test() {
  const a = ZONE.bio();
  const b = ZONE.bio();
  const c = ZONE.bio();
  console.log("FPS stabil?", a.fps, b.fps, c.fps, "— sollte gleich — nicht 60 120 240");
  console.log("Gate?", ZONE.canUebertreten(), ZONE.go(81, 27), ZONE.go(27, 81), ZONE.go(27, 3), ZONE.go(3, 0), ZONE.go(0, 81));
  console.log("Check:", ZONE.check(1, 1, 1), ZONE.check(0, 0, 0), ZONE.check(1, 0, 1));
  console.log("FIGUR:", FIGUR.create(81, 32.29, 0.254, 8.16));
  console.log("JEDI:", ZONE.jedi());
}
