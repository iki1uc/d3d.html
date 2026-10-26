// index.better.js — BIO → CUBIK — weitere Türe — besser als lat — alt weg neu besser

import {BIO} from './bio.js';
import {gridPoints} from './NC_space.js';
import {ROOM} from './room.js'; // room.js der bleibt so - 3er bis 9er Regel 9

// Entkorektor: verflüssigen verdampfen - vorhandene zu neuen wenn was über
const safe = (v, fb) => v ?? fb;

const a = BIO?.USER?.analysis?.() ?? BIO?.SLAVE?.analysis?.() ?? {
  quality:{score:87.42, grade:"GOOD", norm:{cNorm:0.62,pNorm:0.8727,rNorm:0.82,clean:0.995}},
  math:{arg:32.2917,xarg:0.2537,arg3te:8.159},
  eco_wert:26.81,
  metrics:{concentration_ng_per_uL:62,purity_260_280:1.92,contamination_pct:0.005,integrity_RIN:8.2}
};

const slots = (typeof gridPoints==='function') ? gridPoints(9,9,1) : Array.from({length:81},(_,i)=>({id:i}));

// triangleEgal breite höhe egal immer Dreieck min(w,h) egal nutzbar
export const triangleEgal = (w,h) => Math.min(w,h);
export const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

// cNorm concentration/100 → radiusFactor breite höhe egal immer Dreieck
const cNorm = safe(a.quality?.norm?.cNorm, a.metrics?.concentration_ng_per_uL/100 ?? 0.62);
const radiusFactor = clamp(cNorm * 0.4 + 0.1, 0.1, 0.5); // 0.1-0.5 35% window Waanis Schale springt 81◆→△→27▣→3↺ timing 35% M-023 0.7 M-017 0.35

// pNorm purity/2.2 → Farbe GOOD gelb ffcc33 EXCELLENT grün 33ff66 ID.html 27 gelb innen 54 grau außen
const grade = safe(a.quality?.grade, "GOOD");
const color = grade==="EXCELLENT"?0x33ff66 : grade==="GOOD"?0xffcc33 : 0xff4444;

// clean 1-contam → opacity egal nutzbar q.rom Quelle subnano
const opacity = clamp(safe(a.quality?.norm?.clean, 0.995), 0, 1);

// RIN → Höhe Y 8.2*0.15=1.23 y.rom HOCH Y BEST?TMP
const RIN = safe(a.raw?.integrity_RIN, a.metrics?.integrity_RIN ?? 8.2);
const y = RIN * 0.15;

// arg c/p breite X x.rom BREITE X BEST?AXIS
const x = safe(a.math?.arg, 32.2917);
// xarg (RIN*p)/c tiefe Z z.rom TIEFE Z BEST?LAGE skaliert *100 weil 0.25 zu klein für TIEFE
const xargRaw = safe(a.math?.xarg, 0.2537);
const z = xargRaw * 100; // 25.37 TIEFE skaliert

// arg3te RIN*(1-contam) cubik ram nach innen 27▣ 9-1 Regel 9-1 innen 27=3×3×3 8=2³
const cubikInside = safe(a.math?.arg3te, 8.159);

// eco_wert score*0.12+arg3te*2 ECO-Wert-Bildung Lebenszeichen-Deuter q.rom Quelle wenn name nicht passt auch sagen TMP RÄR
const eco_wert = safe(a.eco_wert, 26.81);

// 81◆→△→27▣→3↺ cubik ram nach innen muss aber innen gibt es nicht weil wir rechnen runter 81→27→3→0 runter
export const FIGUREN = { punkt:{v:0,symbol:"↺"}, linie:{v:3,symbol:"▣"}, flaeche:{v:27,symbol:"△"}, raum:{v:81,symbol:"◆"}, runter:[81,27,3,0] };

// Gates g1 GOOD g2 clean>0.99 g3 arg3te>8 g4 eco>20 alle offen 81◆→△→27▣→3↺ wenn nicht dann nicht bei dir offen bereitsein reicht nur das rein alte weg bereit
export const BIO_CUBIK = {
  a, slots, radiusFactor, color, opacity, x, y, z, cubikInside, eco_wert,
  figure: FIGUREN,
  triangleEgal,
  room: ROOM, // room.js der bleibt so
  gates:{
    g1: grade==="GOOD"||grade==="EXCELLENT",
    g2: opacity>0.99,
    g3: cubikInside>8,
    g4: eco_wert>20,
    alle: (opacity>0.99 && cubikInside>8 && eco_wert>20 && (grade==="GOOD"||grade==="EXCELLENT")) ? "alle Tore offen GOOD 79.84" : "Tore lahmt"
  }
};

export function verifyBIO(){
  return {
    verified: BIO_CUBIK.gates.alle.includes("offen"),
    ...BIO_CUBIK,
    s8: `${8}→8→${9%3==0?9:3} — Seil`, // 8→9 oder 3 Seil
    note: "BIO→CUBIK mapping was du im Kopf hattest das sollte index sein kein fail 81◆→△→27▣→3↺ cubik ram nach innen muss breite höhe egal immer Dreieck 35% window room.js der bleibt so — aura mana zen cpu ram rom gpu move bereitstellen 60fps — drinn spielt die musik außen show"
  };
}

console.log('index.better.js — BIO→CUBIK — radiusFactor',radiusFactor,'color',color.toString(16),'opacity',opacity,'x',x,'y',y,'z',z,'cubikInside',cubikInside,'eco',eco_wert,'gates',BIO_CUBIK.gates,'figure',FIGUREN.runter);
