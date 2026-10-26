// overdrive.js — index.html — Move — Schach — Feld — Figur — Ball — Schiedsrichter — Rabe Spatz Käfer — Real Live — Einstieg Ausstieg — alle Maßnahmen

export const INDEX_MOVE = {
  // Einstieg Ausstieg alle Maßnahmen
  einstieg: {
    text: "BIO→CUBIK loading init bio.js bio.ID.js ID README index.js Einstieg",
    from: "bio.js",
    to: "index.js",
    regel: "BIO→CUBIK Einstieg"
  },
  ausstieg: {
    text: "show nur nach außen show funktioniert immer nur nach außen außen index.html directR.html show Nebel außen Licht innen",
    show: "directR.html",
    licht: "innen",
    nebel: "außen",
    regel: "show nur nach außen Ausstieg"
  },
  massnahmen: {
    text: "massnahme innen move außen innen musik außen show drinn musik außen show so rum so bleibt besser so",
    innen: "move musik",
    außen: "show",
    fps: 60,
    regel: "massnahme innen move außen"
  },

  // Schach Feld Figur Ball Schiedsrichter Move
  schach: {
    feld: { v:27, symbol:"▣", name:"Feld", isIndex:true, is:"Feld", not:"Figur Ball Schiedsrichter", regel:"Feld 27▣ 3x3x3 Zone zone haben wir jetzt ein Feld 27 Punkte index.html ist Feld", note:"Feld — 27▣ — Feld — Zone — zone haben wir jetzt ein Feld — ist Feld — nicht Figur — nicht Ball — nicht Schiedsrichter" },
    figur: { v:81, symbol:"◆", name:"Figur", isIndex:false, is:"bewegt sich", not:"Feld", regel:"Figur FIGUR 81◆△27▣3↺ 81=Raum 27=Fläche 3=Linie 0=Punkt", note:"Figur — figur.js — FIGUR — ist nicht Figur weil Figur bewegt sich index.html bewegt sich nicht index.html ist Feld nicht Figur" },
    ball: { v:0, symbol:"↺", name:"Ball", isIndex:false, is:"0 Punkt", not:"27▣", regel:"Ball ist 0 Punkt ↺ Ball bewegt sich", note:"Ball — Ball bewegt sich — ist nicht Ball weil Ball ist 0 Punkt index.html ist nicht 0 index.html ist 27▣ Feld nicht Ball" },
    schiedsrichter: { v:"show", symbol:"⚑", name:"Schiedsrichter", isIndex:false, is:"außen Show", not:"Feld", regel:"Schiedsrichter ist außen Show directR.html show nur nach außen", note:"Schiedsrichter — pfeift — ist nicht Schiedsrichter weil Schiedsrichter ist außen Show index.html ist nicht Show index.html ist Feld Zone Feld nicht Show Show ist directR.html" },
    move: { v:"move", symbol:"↻", name:"Move", isIndex:true, aura:90, mana:85, zen:100, cpu:50, ram:100, rom:79.84, gpu:100, move:79.84, fps:60, regel:"Move aura mana zen cpu ram rom gpu move bereitstellen 60fps Feld stellt Move bereit", note:"Move — Move — index.html ist Feld Move ist aura mana zen cpu ram rom gpu move bereitstellen 60fps Move ist Feld stellt Move bereit" }
  },

  // Real Live Rabe Spatz Käfer
  realLive: {
    rabe: { v:81, symbol:"◆", name:"Rabe", isIndex:false, role:"schaut von oben", regel:"Rabe 81◆ Raum 81 Slots schaut von oben 81◆→△→27▣→3↺", note:"Rabe — Rabe schaut von oben — Rabe 81◆ Raum — Rabe ist Raum — Rabe ist 81◆ — Rabe ist nicht index.html" },
    spatz: { v:27, symbol:"▣", name:"Spatz", isIndex:true, role:"hüpft auf Feld", regel:"Spatz 27▣ Feld Zone Spatz hüpft auf Feld Spatz ist auf Feld", note:"Spatz — Spatz hüpft auf Feld — Spatz 27▣ Feld — Spatz ist auf Feld — zone haben wir jetzt ein Feld — Spatz ist nicht index.html aber Spatz ist auf index.html Spatz hüpft auf Feld index.html ist Feld" },
    kaefer: { v:3, symbol:"↺", name:"Käfer", isIndex:false, role:"krabbelt 3↺ Linie", regel:"Käfer 3↺ Linie krabbelt", note:"Käfer — Käfer krabbelt 3↺ Linie — Käfer ist nicht index.html Käfer ist 3↺ Linie index.html ist 27▣ Feld nicht 3↺" },
    jetzige: { amEhesten:"Spatz", v:27, symbol:"▣", beweis:"JETZIGE index.html ist Feld 27▣ Zone Feld zone haben wir jetzt ein Feld nicht Figur nicht Ball nicht Schiedsrichter Feld JETZIGE ist Feld in Real Live am ehesten Spatz Spatz hüpft auf Feld 27▣ Feld Spatz ist auf Feld Rabe schaut Käfer krabbelt Spatz hüpft index.html ist Feld Spatz ist auf Feld am ehesten Spatz nicht Rabe Rabe ist 81◆ Raum nicht 27▣ nicht Käfer Käfer ist 3↺ Linie nicht 27▣ am ehesten Spatz Spatz 27▣ Feld Spatz JETZIGE ist Feld am ehesten Spatz Real Live Spatz hüpft auf Feld 27▣ Feld Spatz" }
  },

  // check fix ohne Doppelkomma Bug
  check: (h=8,b=9,t=3) => {
    return {
      einstieg: INDEX_MOVE.einstieg,
      ausstieg: INDEX_MOVE.ausstieg,
      massnahmen: INDEX_MOVE.massnahmen,
      feld: INDEX_MOVE.schach.feld,
      figur: INDEX_MOVE.schach.figur,
      ball: INDEX_MOVE.schach.ball,
      schiedsrichter: INDEX_MOVE.schach.schiedsrichter,
      move: INDEX_MOVE.schach.move,
      rabe: INDEX_MOVE.realLive.rabe,
      spatz: INDEX_MOVE.realLive.spatz,
      kaefer: INDEX_MOVE.realLive.kaefer,
      jetzige: INDEX_MOVE.realLive.jetzige,
      s8: `${h}→8→${b%3==0?9:3} — Seil`,
      runter: [81,27,3,0],
      regel: "81◆→△→27▣→3↺ 81→27→3→0 runter GOOD 79.84 alle Tore offen aura mana zen cpu ram rom gpu move bereitstellen 60fps zone haben wir jetzt ein Feld Zone Feld Real Live Rabe Spatz Käfer am ehesten Spatz Spatz hüpft auf Feld 27▣ Feld Spatz mir dir ich dir du mir GitHub Slang RAW roh GEO modular nicht Kill Bill Hitchcock Spannung ohne Kill Show ohne Kill",
      text: `index.html Move Schach Feld Figur Ball Schiedsrichter Rabe Spatz Käfer Real Live Einstieg Ausstieg alle Maßnahmen — Einstieg ${INDEX_MOVE.einstieg.text} — Ausstieg ${INDEX_MOVE.ausstieg.text} — Massnahmen ${INDEX_MOVE.massnahmen.text} — Feld ${INDEX_MOVE.schach.feld.v}${INDEX_MOVE.schach.feld.symbol} isIndex=${INDEX_MOVE.schach.feld.isIndex} — Figur ${INDEX_MOVE.schach.figur.v}${INDEX_MOVE.schach.figur.symbol} isIndex=${INDEX_MOVE.schach.figur.isIndex} — Ball ${INDEX_MOVE.schach.ball.v}${INDEX_MOVE.schach.ball.symbol} isIndex=${INDEX_MOVE.schach.ball.isIndex} — Schiedsrichter isIndex=${INDEX_MOVE.schach.schiedsrichter.isIndex} — Move aura ${INDEX_MOVE.schach.move.aura} mana ${INDEX_MOVE.schach.move.mana} zen ${INDEX_MOVE.schach.move.zen} move ${INDEX_MOVE.schach.move.move} — Rabe ${INDEX_MOVE.realLive.rabe.v}${INDEX_MOVE.realLive.rabe.symbol} isIndex=${INDEX_MOVE.realLive.rabe.isIndex} — Spatz ${INDEX_MOVE.realLive.spatz.v}${INDEX_MOVE.realLive.spatz.symbol} isIndex=${INDEX_MOVE.realLive.spatz.isIndex} — Käfer ${INDEX_MOVE.realLive.kaefer.v}${INDEX_MOVE.realLive.kaefer.symbol} isIndex=${INDEX_MOVE.realLive.kaefer.isIndex} — JETZIGE amEhesten ${INDEX_MOVE.realLive.jetzige.amEhesten} — ${h}→8→${b%3==0?9:3} Seil Uni 8 Code 81◆→△→27▣→3↺ 81→27→3→0 GOOD 79.84 alle Tore offen aura mana zen cpu ram rom gpu move bereitstellen 60fps zone haben wir jetzt ein Feld Zone Feld Real Live Rabe Spatz Käfer am ehesten Spatz Spatz hüpft auf Feld 27▣ Feld Spatz`
    };
  }
};

console.log(INDEX_MOVE.check(8,9,3));
