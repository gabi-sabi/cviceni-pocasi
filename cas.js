const cas = {
  id: "cas",
  otazka: "Kedy ste naposledy jedli?",
  odpoved1: "pred viac ako 3 hodinami",
  odpoved2:
    "pred hodinou",
  output1: "super, Váš hlad je fyziologický, najedzte sa",
  output2A: "ak ste pred hodinou jedli niečo malé, teraz je čas na kvalitné hlavné jedlo (250/300g)",
  output2B: "ak ste pred hodinou obedovali alebo večerali, tento Váš hlad je emočný, skúste:",
  output2B_1: "dôkladne si umyť zuby",
  output2B_2: "pripraviť si šálku kávy (po obede) alebo čaju (po večeri)",
  output2B_3: "dopriať si sprchu alebo horúci kúpeľ",
  output2B_4: "poliať kvety alebo urobiť niečo malé v záhrade",
  output2B_5:
    "odísť z miestnosti, kde je jedlo a sústrediť sa na niečo, čo Vás baví",
  output2B_6:
    "odísť z bytu alebo pracoviska bez peňazí a kreditnej karty aspoň na 30 min",
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
  <p>${cas.output2A}</p>
  <p>${cas.output2B}</p>
  <ul>
    <li>${cas.output2B_1}</li>
    <li>${cas.output2B_2}</li>
    <li>${cas.output2B_3}</li>
    <li>${cas.output2B_4}</li>
    <li>${cas.output2B_5}</li>
    <li>${cas.output2B_6}</li>
  </ul>
  `
};

btnOK.addEventListener("click", btnOKUpgrade);
btnNE.addEventListener("click", btnNEUpgrade);
