import { BIO, BIO_ID } from "./bio.js";
console.log(BIO.check());
console.log(BIO_ID.check(8,9,3));

// loop — 60fps — wenn unter 60fps fällt nicht nur leicht auf
(function loop(){
  BIO.perf.tick();
  const g=BIO.move.gesamt();
  if(g.fps<60) console.log(`lahmt — fps ${g.fps} — aura ${g.aura} — move ${g.move} — ${g.tore}`);
  requestAnimationFrame(loop);
})();
