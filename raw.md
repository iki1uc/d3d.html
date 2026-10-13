// q continuum d dimension f faktor — q continuum d dimension f faktor — q continuum — d dimension — f faktor — q continuum — d dimension — f faktor — q — d — f — q continuum — d dimension — f faktor — q continuum d dimension f faktor

export const QDF = {
  // q continuum — d dimension — f faktor — q continuum — d dimension — f faktor — q — d — f — q continuum — d dimension — f faktor
  q: {
    name: "Q — CONTINUUM — Q — CONTINUUM — Q — continuum — Q — continuum — Q — continuum",
    code: 0x51, // 0x51 — 81◆ — Q — continuum — 81 Slots — continuum — Q — continuum — 81◆ — continuum — 81 Slots — continuum — Q — 0x51 — Q — continuum — 81◆ — continuum
    def: "Q — continuum — Q — continuum — Q — continuum — Q — continuum — continuum — endlos — continuum — endlos — Q — continuum — endlos — Q — continuum — Q — continuum — Q — continuum — Q — continuum — continuum — Q — 81◆ — 81 Slots — continuum — 81 Slots — continuum — Q — 81◆ — continuum",
    geo: { x: 32.29, z: 0.254, y: 8.16, r: 0.348, c: 0xFFCC33, eco: 25.9 },
    sys: { RAUM: 0x51, CUBIK: 0x1B, PI: 0x03, IN: 0x00, OUT: 0x01, S8: 0x08 },
    runter: "Q — 81→27→3→0 — Q — 81◆→△→27▣→3↺ — Q — 81→27→3→0 — Q — continuum — Q — 81◆→△→27▣→3↺ — cubik ram nach innen muss — aber innen gibt es nicht — weil wir rechnen runter — 81→27→3→0 — Q — continuum — Q — continuum",
    text: "Q — continuum — Q — 81◆ — 81 Slots — Raum — Q — continuum — 81◆→△→27▣→3↺ — cubik ram nach innen muss — Q — continuum — 81→27→3→0 — runter — Q — continuum — Q — continuum — Q — continuum — continuum — endlos — Q — continuum"
  },

  // d dimension — d dimension — d dimension — d dimension — d — dimension — d dimension — d dimension — d dimension
  d: {
    name: "D — DIMENSION — D — DIMENSION — D — dimension — D — dimension — D — dimension",
    code: 0x1B, // 0x1B — 27▣ — D — dimension — 27▣ — 3x3x3 — D — dimension — 27▣ — 9-1 — Feld — Zone — D — 0x1B — D — dimension — 27▣ — D — dimension
    def: "D — dimension — D — dimension — D — dimension — D — dimension — dimension — D — dimension — D — dimension — D — dimension — D — dimension — dimension — D — dimension — D — dimension — D — dimension — 27▣ — 3x3x3 — D — dimension — 27▣ — 9-1 — Feld — Zone — D — dimension",
    geo: { x: 32.29, z: 0.254, y: 8.16, r: 0.348, c: 0xFFCC33, eco: 25.9 },
    sys: { CUBIK: 0x1B, ZONE: 0x1B, RAUM: 0x51, PI: 0x03, IN: 0x00, OUT: 0x01, S8: 0x08 },
    runter: "D — 27→3→0 — D — 27▣→3↺→0 — D — 27→3→0 — D — dimension — D — 27▣→3↺→0 — cubik ram nach innen muss — aber innen gibt es nicht — weil wir rechnen runter — 27→3→0 — D — dimension — D — dimension",
    text: "D — dimension — D — 27▣ — 3x3x3 — cubik innen — 27▣ — 9-1 — Feld — Zone — D — dimension — 27▣→3↺→0 — D — dimension — D — dimension — D — dimension — dimension — D — dimension — zone haben wir jetzt ein Feld — Zone — Feld — D — dimension"
  },

  // f faktor — f faktor — f faktor — f faktor — f — faktor — f faktor — f faktor — f faktor
  f: {
    name: "F — FAKTOR — F — FAKTOR — F — faktor — F — faktor — F — faktor",
    code: 0x03, // 0x03 — 3↺ — F — faktor — 3↺ — Linie — 3↺ — F — faktor — 3↺ — Linie — F — 0x03 — F — faktor — 3↺ — F — faktor
    def: "F — faktor — F — faktor — F — faktor — F — faktor — faktor — F — faktor — F — faktor — faktor — F — faktor — F — faktor — F — faktor — F — faktor — 3↺ — Linie — F — faktor — 3↺ — Linie — F — faktor — faktor — F — faktor",
    geo: { x: 32.29, z: 0.254, y: 8.16, r: 0.348, c: 0xFFCC33, eco: 25.9 },
    sys: { PI: 0x03, S8: 0x08, CUBIK: 0x1B, RAUM: 0x51, IN: 0x00, OUT: 0x01 },
    runter: "F — 3→0 — F — 3↺→0 — F — 3→0 — F — faktor — F — 3↺→0 — Linie — F — faktor — F — 3→0 — F — faktor — F — faktor — faktor — F — faktor",
    text: "F — faktor — F — 3↺ — Linie — 3↺ — F — faktor — 3↺ — Linie — F — faktor — F — 3↺→0 — F — faktor — F — faktor — F — faktor — faktor — F — faktor — 3↺ — Linie — F — faktor"
  },

  // q continuum d dimension f faktor — q continuum d dimension f faktor — q continuum d dimension f faktor — q — d — f — q continuum d dimension f faktor
  check: (h=8,b=9,t=3) => ({
    h,b,t,
    q: QDF.q.text,
    d: QDF.d.text,
    f: QDF.f.text,
    qdf: `Q:${QDF.q.code.toString(16)} D:${QDF.d.code.toString(16)} F:${QDF.f.code.toString(16)} — Q continuum D dimension F faktor — 0x51 0x1B 0x03 — 81→27→3→0 — QDF — Q continuum D dimension F faktor — 81◆→△→27▣→3↺ — QDF — Q continuum D dimension F faktor`,
    runter: `Q→D→F→0 — 81→27→3→0 — 0x51→0x1B→0x03→0x00 — QDF — Q continuum D dimension F faktor — Q→D→F→0 — 81→27→3→0 — QDF — Q continuum D dimension F faktor — ${h}→8→${b%3==0?9:3} — Seil — Uni 8 Code — QDF — Q continuum D dimension F faktor`,
    geo: `X:32.29 Z:0.254 Y:8.16 R:0.348 C:#ffcc33 ECO:25.9 — GEO — modular — QDF — Q continuum D dimension F faktor — GEO — X:32.29 Z:0.254 Y:8.16 — QDF — GEO — modular`,
    sys: `0x51 RAUM Q continuum 0x1B CUBIK D dimension 0x03 PI F faktor 0x08 S8 Uni8 0x00 IN musik 0x01 OUT show — RAW — Maschine Code — roh — QDF — Q continuum D dimension F faktor — RAW — Maschine Code — roh`,
    text: `q continuum d dimension f faktor — Q:${QDF.q.code.toString(16)} D:${QDF.d.code.toString(16)} F:${QDF.f.code.toString(16)} — Q continuum D dimension F faktor — 0x51 0x1B 0x03 — 81→27→3→0 — QDF — Q continuum D dimension F faktor — 81◆→△→27▣→3↺ — cubik ram nach innen muss — aber innen gibt es nicht — weil wir rechnen runter — 81→27→3→0 — runter — ${h}→8→${b%3==0?9:3} — Seil — Uni 8 Code — GOOD 79.84 — alle Tore offen — aura mana zen cpu ram rom gpu — move bereitstellen — 60fps — zone haben wir jetzt ein Feld — Zone — Feld — QDF — Q continuum D dimension F faktor — Q→D→F→0 — 81→27→3→0 — QDF — Q continuum D dimension F faktor — mir dir — ich dir du mir — GitHub Slang — RAW — roh — GEO — modular — nicht Kill Bill — Hitchcock — Spannung ohne Kill — Show ohne Kill — q continuum d dimension f faktor`
  })
};

console.log(QDF.check(8,9,3));
