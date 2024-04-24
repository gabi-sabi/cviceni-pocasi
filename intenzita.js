const intenzita = {
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
}
const btnOK = document.querySelector(".btn-ok");
const btnNE = document.querySelector(".btn-ne");

const textOK = document.querySelector(".textOK");
const textNE = document.querySelector(".textNE");

const btnOKUpgrade = () => {
  textOK.textContent += "super, Váš hlad je fyziologický, najedzte sa";
}

const btnNEUpgrade = () => {
  textNE.innerHTML += `
  <p>${intenzita.output2}</p>
  <ul>
    <li>${intenzita.output2_1}</li>
    <li>${intenzita.output2_2}</li>
    <li>${intenzita.output2_3}</li>
    <li>${intenzita.output2_4}</li>
    <li>${intenzita.output2_5}</li>
    <li>${intenzita.output2_6}</li>
  </ul>
  `
};

btnOK.addEventListener("click", btnOKUpgrade);
btnNE.addEventListener("click", btnNEUpgrade);

/*`
  <p>${intenzita.output2}</p>
  <ul>
    <li>${intenzita.output2_1}</li>
    <li>${intenzita.output2_2}</li>
    <li>${intenzita.output2_3}</li>
    <li>${intenzita.output2_4}</li>
    <li>${intenzita.output2_5}</li>
    <li>${intenzita.output2_6}</li>
  </ul>
  `*/
