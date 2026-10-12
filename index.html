// BIO → CUBIK — weitere Türe — mapping was du im Kopf hattest
// window.BIO_DATA = {metrics:{concentration_ng_per_uL:62, purity_260_280:1.92, contamination_pct:0.005, integrity_RIN:8.2}}
import {BIO} from './BIO.js';
import {gridPoints} from './NC_space.js';

const a = BIO.USER.analysis(); // {quality:{score, grade, norm:{cNorm,pNorm,rNorm,clean}}, math:{arg,xarg,arg3te}, eco_wert}
const slots = gridPoints(9,9,1); // 81 Slots außen
// cNorm = concentration/100 → radiusFactor — breite höhe egal immer Dreieck
const radiusFactor = a.quality.norm.cNorm * 0.4 + 0.1; // 0.1-0.5 — 35% window — Waanis Schale springt
// pNorm = purity/2.2 → Farbe — grade GOOD = gelb — EXCELLENT grün
const color = a.quality.grade==="EXCELLENT"?0x33ff66 : a.quality.grade==="GOOD"?0xffcc33 : 0xff4444;
// clean = 1-contam → opacity — egal nutzbar
const opacity = a.quality.norm.clean; // 0.995
// RIN → Höhe Y — 8.2 → 8.2*0.15
const y = a.raw? a.raw.integrity_RIN*0.15 : 1.2; // 1.23

// arg = c/p = 32.2917 — breite X
// xarg = (RIN*p)/c = 0.2537 — tiefe Z
// arg3te = RIN*(1-contam) = 8.159 — cubik ram nach innen 27▣ — 8.159 ~ 9-1 = 8 — Regel 9-1 innen
// eco_wert = score*0.12 + arg3te*2 — ECO-Wert-Bildung — Lebenszeichen-Deuter
