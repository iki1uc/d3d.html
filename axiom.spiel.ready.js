// d3d kann Höhe Breite Tiefe nehmen wenn andere beiden sich einig wer a und b oder 1 und 2
// mit axiom.spiel.ready:

function d3d_mit_axiom_spiel_ready(a,b) {
  // andere beiden = f.rom (a=6 Westen Links) + d.rom (d=6 Osten Rechts)
  // müssen sich einig sein wer a und b ist
  
  const f_sagt_a = 'Westen Links' // f.rom
  const d_sagt_a = 'Westen Links' // d.rom sagt auch Westen Links = einig
  
  if(f_sagt_a !== d_sagt_a) {
    return {kann:false, grund:'doof - 3x innen - nicht einig'}
  }
  
  // einig = klug.doof = 81→27→3→0 runter
  return {
    kann:true,
    klugDoof: true,
    // Höhe Breite Tiefe nach Figur Regel
    figurRegel: AXIOM_SPIEL_READY.figurRegel.check({v:81}),
    hbt: {
      höhe: 81, // Raum ◆
      breite: 27, // Fläche △  
      tiefe: 3, // Linie ▣
      punkt: 0 // Punkt ↺ = Quelle q.rom
    },
    // 81→27→3→0 runter = nicht 3x innen
    runter: [81,27,3,0],
    text: '81◆→△→27▣→3↺ — cubik ram nach innen muss — aber innen gibt es nicht — weil wir rechnen runter — Wahrheit tiefer — master pi lächelt — meta=7sinn — drinn spielt die musik außen show'
  }
}

// Test:
d3d_mit_axiom_spiel_ready('Westen Links','Osten Rechts')
// → einig = f.rom und d.rom beide sagen a=Westen Links = klug.doof = darf Höhe Breite Tiefe
// → 81 Raum, 27 Fläche, 3 Linie, 0 Punkt = 8◆9▣3↺ GOOD 79.84
