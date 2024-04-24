const chut = {
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
  <p>${chut.output2}</p>
  <ul>
    <li>${chut.output2_1}</li>
    <li>${chut.output2_2}</li>
    <li>${chut.output2_3}</li>
    <li>${chut.output2_4}</li>
    <li>${chut.output2_5}</li>
    <li>${chut.output2_6}</li>
  </ul>
  `
};

btnOK.addEventListener("click", btnOKUpgrade);
btnNE.addEventListener("click", btnNEUpgrade);
