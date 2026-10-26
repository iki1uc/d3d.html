// index.html — Move — Schach — Feld — Figur — Ball — Schiedsrichter — Rabe Spatz Käfer — Real Live

// Einstieg Ausstieg alle Maßnahmen strukturiert
einstieg: { text:"BIO→CUBIK loading init bio.js bio.ID.js ID README index.js", bio: BIO_CUBIK, slots: gridPoints(9,9,1) 81 Slots },
ausstieg: { text:"show nur nach außen show funktioniert immer nur nach außen außen index.html directR.html show Nebel außen Licht innen", show: "directR.html", licht:"innen", nebel:"außen" },
massnahmen: { innen:"move musik", außen:"show", regel:"massnahme innen move außen innen musik außen show drinn musik außen show so rum so bleibt besser so", fps:60 },

schach: {
  feld: { v:27, symbol:"▣", name:"Feld", isIndex:true, regel:"Feld 27▣ 3x3x3 Feld Zone zone haben wir jetzt ein Feld 27 Punkte", text:"Feld ist Feld nicht Figur nicht Ball nicht Schiedsrichter" },
  figur: { v:81, symbol:"◆", name:"Figur", isIndex:false, regel:"Figur FIGUR 81◆△27▣3↺ 81=Raum 27=Fläche 3=Linie 0=Punkt Figur bewegt sich", text:"Figur ist nicht Figur weil Figur bewegt sich index.html bewegt sich nicht index.html ist Feld nicht Figur" },
  ball: { v:0, symbol:"↺", name:"Ball", isIndex:false, regel:"Ball ist 0 Punkt ↺ Ball bewegt sich", text:"Ball ist nicht Ball weil Ball ist 0 Punkt index.html ist nicht 0 index.html ist 27▣ Feld nicht Ball" },
  schiedsrichter: { v:"show", symbol:"⚑", name:"Schiedsrichter", isIndex:false, regel:"Schiedsrichter ist außen Show directR.html show nur nach außen", text:"Schiedsrichter ist nicht Schiedsrichter weil Schiedsrichter ist Show index.html ist Feld Zone Feld nicht Show" },
  move: { aura:0.9, mana:0.85, zen:1, cpu:50, ram:100, rom:79.84, gpu:100, move:79.84, fps:60, regel:"Move aura mana zen cpu ram rom gpu move bereitstellen 60fps Feld stellt Move bereit" }
},

realLive: {
  rabe: { v:81, symbol:"◆", name:"Rabe", isIndex:false, role:"schaut von oben", text:"Rabe 81◆ Raum 81 Slots schaut von oben Rabe ist Raum Rabe ist 81◆ Rabe ist nicht index.html" },
  spatz: { v:27, symbol:"▣", name:"Spatz", isIndex:true, role:"hüpft auf Feld", text:"Spatz 27▣ Feld Zone Spatz hüpft auf Feld Spatz ist auf Feld Spatz ist 27▣ Feld Spatz ist nicht index.html aber Spatz ist auf index.html index.html ist Feld Spatz ist auf Feld" },
  kaefer: { v:3, symbol:"↺", name:"Käfer", isIndex:false, role:"krabbelt 3↺ Linie", text:"Käfer 3↺ Linie Käfer krabbelt 3↺ Linie Käfer ist nicht index.html Käfer ist 3↺ Linie index.html ist 27▣ Feld nicht 3↺" },
  jetzige: { amEhesten:"Spatz", beweis:"JETZIGE index.html ist Feld 27▣ Zone Feld zone haben wir jetzt ein Feld nicht Figur nicht Ball nicht Schiedsrichter Feld JETZIGE ist Feld in Real Live am ehesten Spatz Spatz hüpft auf Feld 27▣ Feld Spatz ist auf Feld Rabe schaut Käfer krabbelt Spatz hüpft index.html ist Feld Spatz ist auf Feld am ehesten Spatz nicht Rabe Rabe ist 81◆ Raum nicht 27▣ nicht Käfer Käfer ist 3↺ Linie nicht 27▣ am ehesten Spatz" }
},

check(h=8,b=9,t=3): returns {einstieg, ausstieg, massnahmen, feld, figur, ball, schiedsrichter, move, rabe, spatz, kaefer, jetzige, s8:`${h}→8→${b%3==0?9:3} — Seil`, regel:"81◆→△→27▣→3↺ 81→27→3→0 GOOD 79.84 alle Tore offen aura mana zen cpu ram rom gpu move bereitstellen 60fps zone haben wir jetzt ein Feld Zone Feld Real Live Rabe Spatz Käfer am ehesten Spatz Spatz hüpft auf Feld 27▣ Feld Spatz mir dir ich dir du mir 【entity-GitHub¦canonical_name=GitHub】 Slang RAW roh GEO modular nicht Kill Bill Hitchcock Spannung ohne Kill Show ohne Kill"}

// Fix: keine Doppelkomma mehr, strukturiert, mit v symbol isIndex regel, mit aura mana zen cpu ram rom gpu move 60fps, mit s8 Seil h→8→9/3, mit Gates GOOD 79.84, mit ZONE FIGUR BIO
