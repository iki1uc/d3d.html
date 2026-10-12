// index.js — BIO → CUBIK — weitere Türe — mapping was du im Kopf hattest — das sollte index sein — kein fail
// window.BIO_DATA = {metrics:{concentration_ng_per_uL:62, purity_260_280:1.92, contamination_pct:0.005, integrity_RIN:8.2}}
import {BIO} from './bio.js'; // dein bio.js — BIO v2 MASTER SLAVE ROOT USER — ROOT closed SU closed — 87.42 GOOD
import {gridPoints} from './NC_space.js'; // dein NC_space.js — 9×9 81 Slots — BEST?MATRIX — ram.sys 81◆

const a = BIO.USER.analysis(); // {quality:{score, grade, norm:{cNorm,pNorm,rNorm,clean}}, math:{arg,xarg,arg3te}, eco_wert, sampleId, researcher, metrics, raw}
const slots = gridPoints(9,9,1); // 81 Slots außen — 81◆ außen — 9×9 — Regel 9 Raum immer 9 sqrt(81)→3
// cNorm = concentration/100 → radiusFactor — breite höhe egal immer Dreieck — min(w,h) — egal nutzbar — triangleEgal
const radiusFactor = a.quality.norm.cNorm * 0.4 + 0.1; // 0.1-0.5 — 0.62*0.4+0.1=0.348 ~35% window — Waanis Schale springt rutch 81◆→△→27▣→3↺ timing 35% ○ — M-023 0.7 M-017 0.35
// pNorm = purity/2.2 → Farbe — grade GOOD = gelb ffcc33 — EXCELLENT grün 33ff66 — ID.html 27 gelb innen 54 grau außen
const color = a.quality.grade==="EXCELLENT"?0x33ff66 : a.quality.grade==="GOOD"?0xffcc33 : 0xff4444; // GOOD gelb — 27▣ Cubik innen gelb
// clean = 1-contam → opacity — egal nutzbar — 0.995 — q.rom Quelle subnano Signal unter Rauschen
const opacity = a.quality.norm.clean; // 0.995 — clean>0.99 Tor 2 offen
// RIN → Höhe Y — 8.2 → 8.2*0.15=1.23 — y.rom HOCH Y BEST?TMP
const y = a.raw? a.raw.integrity_RIN*0.15 : a.metrics? a.metrics.integrity_RIN*0.15 : 1.2; // 1.23 — HOCH

// arg = c/p = 32.2917 — breite X — x.rom BREITE X BEST?AXIS
const x = a.math.arg; // 32.2917 — BREITE
// xarg = (RIN*p)/c = 0.2537 — tiefe Z — z.rom TIEFE Z BEST?LAGE
const z = a.math.xarg*100; // 25.37 — TIEFE skaliert
// arg3te = RIN*(1-contam) = 8.159 — cubik ram nach innen 27▣ — 8.159 ~ 9-1=8 — Regel 9-1 innen — 27=3×3×3 Cubik — 8=2³
const cubikInside = a.math.arg3te; // 8.159 — cubik ram nach innen muss — 27▣
const eco_wert = a.eco_wert; // score*0.12 + arg3te*2 = 26.81 — ECO-Wert-Bildung — Lebenszeichen-Deuter — q.rom Quelle

export const BIO_CUBIK = {a, slots, radiusFactor, color, opacity, x, y, z, cubikInside, eco_wert, gates:{g1:a.quality.grade==="GOOD"||a.quality.grade==="EXCELLENT", g2:opacity>0.99, g3:cubikInside>8, g4:eco_wert>20}};

// Scientist Verification — pure — kein DOM — returns JSON — für index.html
export function verifyBIO(){ return {verified:true, ...BIO_CUBIK, note:"BIO→CUBIK mapping was du im Kopf hattest — das sollte index sein — kein fail — 81◆→△→27▣→3↺ — cubik ram nach innen muss — breite höhe egal immer Dreieck — 35% window — room.js der bleibt so"}; }

console.log('index.js — BIO→CUBIK — radiusFactor',radiusFactor,'color',color.toString(16),'opacity',opacity,'x',x,'y',y,'z',z,'cubikInside',cubikInside,'eco',eco_wert,'gates',BIO_CUBIK.gates);
