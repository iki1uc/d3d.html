id: FIGUR
cubik: arg 32.29 X BREITE X_ROM BEST?AXIS, xarg 0.254 Z TIEFE Z_ROM BEST?LAGE, arg3te 8.16 cubik innen 27▣ 9-1, eco 25.9 radiusFactor 0.348 ~0.35 color #ffcc33 good 79.84 tore alle Tore offen regel 81◆→△→27▣→3↺ cubik ram nach innen muss aber innen gibt es nicht weil wir rechnen runter 81→27→3→0

typen:
punkt v0 symbol ↺ name Punkt regel 0 Punkt Ende runter
linie v3 symbol ▣ name Linie regel 3 Linie 3▣ cubik innen
flaeche v27 symbol △ name Fläche regel 27 Fläche 27△
raum v81 symbol ◆ name Raum regel 81 Raum 81◆→△→27▣→3↺
runter [81,27,3,0] = 81→27→3→0 runter = Figur runter

aura.check(fps=60) => zen=fps>=60?1:fps/60, mana=min(1,0.7984+zen*0.5), aura=mana*zen = aura mana zen

create(type="raum",h=8,b=9,t=3) => typ, fps 60, a=aura.check(fps), cpu ram rom gpu move, eco=move*0.325, color move>=70 #ffcc33 else #ff9933, good move, aura mana zen cpu ram rom gpu move fps s8 h→8→b%3==0?9:3 Seil regel figur type symbol v h◆b▣t↺ aura mana zen cpu ram rom gpu move bereitstellen 60fps 81◆→△→27▣→3↺

alle(h=8,b=9,t=3) => [81,27,3,0] map raum flaeche linie punkt

zone.grid(n=3) => 27 Figuren raum flaeche linie x%2==0 raum y%2==0 flaeche else linie h=8+x b=9+y t=3+z = 27▣ Zone Feld 27▣ 9-1 cubik innen Feld

check(h=8,b=9,t=3) => figur create raum, alle alle(), zone grid(3), text figur.js FIGUR 81◆→△→27▣→3↺ cubik ram nach innen muss aber innen gibt es nicht weil wir rechnen runter 81→27→3→0 runter zone haben wir jetzt ein Feld 27▣ GOOD 79.84 alle Tore offen aura mana zen cpu ram rom gpu move bereitstellen 60fps drinn spielt die musik außen show maßnahme innen move außen Wahrheit tiefer master pi lächelt
