const pocity = {
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
};

const btnOK = document.querySelector(".btn-ok");
const btnNE = document.querySelector(".btn-ne");

const textOK = document.querySelector(".textOK");
const textNE = document.querySelector(".textNE");

const btnOKUpgrade = () => {
  textOK.textContent += "super, Váš hlad je fyziologický, najedzte sa";
};

const btnNEUpgrade = () => {
  textNE.innerHTML += `
  <p>${pocity.output2}</p>
  <ul>
    <li>${pocity.output2_1}</li>
    <li>${pocity.output2_2}</li>
    <li>${pocity.output2_3}</li>
    <li>${pocity.output2_4}</li>
    <li>${pocity.output2_5}</li>
  </ul>
  `;
};

btnOK.addEventListener("click", btnOKUpgrade);
btnNE.addEventListener("click", btnNEUpgrade);
