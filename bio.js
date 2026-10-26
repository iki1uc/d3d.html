- let _last = performance.now(); _frames=0 _fps=60
- fps(){ _frames++; ... return _fps } // SEITENEFFEKT — 5x call = 5x increment
+ let _last, _frames, _fps + loop() 1x + getFPS() nur lesen — kein increment

- aura.check(){ const fps=BIO.perf.fps(); ... } // callte fps() — increment
- move.cpu(){ const fps=BIO.perf.fps(); ... } // nochmal increment
- move.gpu(){ const fps=BIO.perf.fps(); ... } // nochmal increment
+ bio(){ const fps=getFPS(); // 1x — gecapped — kein increment — Math.min(1,fps/60) }

- zen = fps/60 // 120fps => zen=2 => aura=2 => move>1 => flackert
+ zen = Math.min(1, fps/60) // deckeln — max 1

- aura = mana*zen // konnte >1
+ aura = Math.min(1, mana*zen) // deckeln

- canUebertreten in zone.js import BIO → circular ZONE↔BIO
+ ZONE ist ROOT — BIO eingebettet — kein import — kein circular
