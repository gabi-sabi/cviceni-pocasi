const oblasti = [
  {
    id: "cas",
    otazka: "Kedy ste naposledy jedli?",
    odpoved1: "pred viac ako 3 hodinami",
    odpoved2: "pred hodinou",
    output1: "super, Váš hlad je fyziologický, najedzte sa",
    output2a:
      "ak ste pred hodinou jedli niečo malé, teraz je čas na kvalitné hlavné jedlo (250/300g)",
    output2b:
      "ak ste pred hodinou obedovali alebo večerali, tento Váš hlad je emočný, skúste:",
    output2b1: "dôkladne si umyť zuby",
    output2b2: "pripraviť si šálku kávy (po obede) alebo čaju (po večeri)",
    output2b3: "dopriať si sprchu alebo horúci kúpeľ",
    output2b4: "poliať kvety alebo urobiť niečo malé v záhrade",
    output2b5:
      "odísť z miestnosti, kde je jedlo a sústrediť sa na niečo, čo Vás baví",
    output2b6:
      "odísť z bytu alebo pracoviska bez peňazí a kreditnej karty aspoň na 30 min",
  },
  {
    id: "intenzita",
    otazka: "Nakoľko je Váš hlad intenzívny?",
    odpoved1: "cítim hlad, ale v pohode sa sústredím na to, čo práve robím",
    odpoved2:
      "náhle ma prepadol taký hlad, že sa nedokážem sústrediť na nič iné, len na jedlo",
    output1: "super, Váš hlad je fyziologický, najedzte sa",
    output2: "Váš hlad je emočný, skúste:",
    output2_1:
      "zhlboka sa nadýchnuť, zavrieť oči a zhlboka dýchať niekoľko minút, pri nádychu si opakujte „Zvládnem to“,  pri výdychu „Zbavujem sa svojho hnevu, strachu, napätia, hanby, smútku, nudy...“",
    output2_2:
      "ísť k umývadlu a pustiť si na ruky prúd teplej vody aspoň na 3 minúty",
    output2_3:
      "dať si na čelo / na zátylok studený obklad a zhlboka dýchať aspoň 3 minúty",
    output2_4:
      "vystaviť svoju tvár na 10 minút slnku alebo intenzívnemu svetlu lampy ",
    output2_5:
      "zapáliť si sviečku alebo si dopriať extra dávku obľúbeného parfumu",
    output2_6: "pustiť si obľúbenú relaxačnú hudbu",
  },
  {
    id: "chut",
    otazka: "Na čo máte chuť?",
    odpoved1: "na nič konkrétne, chcem sa len dobre najesť",
    odpoved2:
      "mám chuť len na jedno jediné jedlo, nič iné mi neprinesie uspokojenie",
    output1: "super, Váš hlad je fyziologický, najedzte sa",
    output2: "Váš hlad je emočný, skúste:",
    output2_1: "vypiť veľký pohár čistej vody",
    output2_2: "užiť magnézium (300-400mg denne)",
    output2_3: "užiť vitamín B6 (100mg denne)",
    output2_4: "pripraviť si zázvorový čaj",
    output2_5:
      "vypiť pohár studeného (acidofilného) mlieka alebo teplého kakaa",
    output2_6:
      "dať si do úst 3 ks žuvačky bez cukru a poctivo žuť minimálne 15 minút",
  },
  {
    id: "pocit",
    otazka: "Ako sa cítite, keď jete?",
    odpoved1: "proste sa najem, pochutnám si a idem ďalej",
    odpoved2: "mám pocit viny, zlyhania, hanby",
    output1: "super, Váš hlad je fyziologický, najedzte sa",
    output2: "Váš hlad je emočný, skúste:",
    output2_1: "naložiť si jedlo vždy úhľadne na tanier alebo do misky",
    output2_2: "jesť vždy sediac za stolom, mimo dosahu televízie",
    output2_3: "sústrediť sa iba na jedlo ( odložiť tablet, mobil, knihu...)",
    output2_4:
      "po jedle si vždy dôkladne umyť zuby a upratať stôl, na ktorom ste jedli",
    output2_5:
      "medzi jedlami nemať jedlo (najmä drobné pochutiny) vo svojej blízkosti",
  },
];

/*const mainElement = document.querySelector("main");

oblasti.forEach((oblast) => {
  mainElement.innerHTML += `
  <a href ="detail.html#${oblast.id}"><button class="btn btn-main">${oblast.otazka}</button></a>
  `;
});

console.log(mainElement);*/


