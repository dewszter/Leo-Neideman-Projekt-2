let antalKöttbullar = 0;
let perSek = 0;
let antalFarmödrar = 0;
let antalUgnar = 0;
let antalKök = 0;
let antalIkeor = 0;
let antalFabriker = 0;
let antalBanker = 0;
let antalKöttbulleRegn = 0;

let farmorPris = 15;
let ugnPris = 50;
let kökPris = 100;
let ikeaPris = 250;
let fabrikPris = 600;
let bankPris = 1000;
let köttbulleRegnPris = 6000;

let antalKlick = 0;

const KlickaKöttbulle = document.querySelector(".KlickaKöttbulle");
const Räknare = document.querySelector(".Räknare");
const KöttbullarPerSek = document.querySelector(".KöttbullarPerSek");



const FarmödrarDiv = document.querySelector(".FarmödrarDiv");
const UgnarDiv = document.querySelector(".UgnarDiv");
const KökDiv = document.querySelector(".KökDiv");
const IkeorDiv = document.querySelector(".IkeorDiv");
const FabrikerDiv = document.querySelector(".FabrikerDiv");
const BankerDiv = document.querySelector(".BankerDiv");
const KöttbulleRegnDiv = document.querySelector(".KöttbulleRegnDiv");

const ExtraFarmödrar = document.querySelector(".ExtraFarmödrar");
const ExtraUgnar = document.querySelector(".ExtraUgnar");
const ExtraKök = document.querySelector(".ExtraKök");
const ExtraIkeor = document.querySelector(".ExtraIkeor");
const ExtraFabriker = document.querySelector(".ExtraFabriker");
const ExtraBanker = document.querySelector(".ExtraBanker");
const ExtraKöttbulleRegn = document.querySelector(".ExtraKöttbulleRegn");


const ButikKnappar = document
  .querySelectorAll("button")
  .forEach((ButikKnappar) => {
    ButikKnappar.addEventListener("click", ButikknappKlickad);
  });

KlickaKöttbulle.addEventListener("click", Klickad);

loop();

function loop() {
  antalKöttbullar += perSek / 60;
  uppdateraVärden();
  setTimeout(loop, 1000 / 60);
}

function Klickad(event) {
  antalKlick++;
  localStorage.setItem("click", antalKlick);
  antalKöttbullar++;
}

function NyFarmor() {
  const nyFarmor = document.createElement("img");
  nyFarmor.src = "Farmor.gif";
  FarmödrarDiv.appendChild(nyFarmor);
}
function NyUgn() {
  const nyUgn = document.createElement("img");
  nyUgn.src = "Ugn.gif";
  UgnarDiv.appendChild(nyUgn);
}
function NyKök() {
  const nyKök = document.createElement("img");
  nyKök.src = "Kök.png";
  KökDiv.appendChild(nyKök);
}
function NyIkea() {
  const nyIkea = document.createElement("img");
  nyIkea.src = "Ikea.gif";
  IkeorDiv.appendChild(nyIkea);
}
function NyFabrik() {
  const nyFabrik = document.createElement("img");
  nyFabrik.src = "Fabrik.gif";
  FabrikerDiv.appendChild(nyFabrik);
}
function NyBank() {
  const nyBank = document.createElement("img");
  nyBank.src = "Bank.gif";
  BankerDiv.appendChild(nyBank);
}
function NyKöttbulleRegn() {
  const nyKöttbulleRegn = document.createElement("img");
  nyKöttbulleRegn.src = "KöttbulleRegn.gif";
  KöttbulleRegnDiv.appendChild(nyKöttbulleRegn);
}

function uppdateraVärden() {
  Räknare.innerHTML = antalKöttbullar.toFixed(0) + " 🧆";
  perSek =
    antalFarmödrar * 0.2 +
    antalUgnar * 0.5 +
    antalKök +
    antalIkeor * 3 +
    antalFabriker * 10 +
    antalBanker * 30 +
    antalKöttbulleRegn * 150;
  KöttbullarPerSek.innerHTML = perSek.toFixed(1) + " 🧆/s";
}

function ButikknappKlickad(event) {
  switch (event.target.id) {
    case "farmor1":
      if (antalKöttbullar >= farmorPris) {
        antalKöttbullar -= farmorPris;
        antalFarmödrar += 1;
        if (antalFarmödrar <= 10) {
          NyFarmor();
        } else {
          ExtraFarmödrar.innerHTML = "+ " + (antalFarmödrar - 10);
        }
      }
      break;
    case "farmor10":
      if (antalKöttbullar >= farmorPris * 10) {
        antalKöttbullar -= farmorPris * 10;
        for (let i = 0; i < 10; i++) {
          antalFarmödrar++;
          if (antalFarmödrar <= 10) {
            NyFarmor();
          } else {
            ExtraFarmödrar.innerHTML = "+ " + (antalFarmödrar - 10);
          }
        }
      }
      break;
    case "farmor50":
      if (antalKöttbullar >= farmorPris * 50) {
        antalKöttbullar -= farmorPris * 50;

        for (let i = 0; i < 50; i++) {
          antalFarmödrar++;
          if (antalFarmödrar <= 10) {
            NyFarmor();
          } else {
            ExtraFarmödrar.innerHTML = "+ " + (antalFarmödrar - 10);
          }
        }
      }
      break;
    case "ugn1":
      if (antalKöttbullar >= ugnPris) {
        antalKöttbullar -= ugnPris;
        antalUgnar++;
        if (antalUgnar <= 10) {
          NyUgn();
        } else {
          ExtraUgnar.innerHTML = "+ " + (antalUgnar - 10);
        }
      }
      break;
    case "ugn10":
      if (antalKöttbullar >= ugnPris * 10) {
        antalKöttbullar -= ugnPris * 10;
        for (let i = 0; i < 10; i++) {
          antalUgnar++;
          if (antalUgnar <= 10) {
            NyUgn();
          } else {
            ExtraUgnar.innerHTML = "+ " + (antalUgnar - 10);
          }
        }
      }
      break;
    case "ugn50":
      if (antalKöttbullar >= ugnPris * 50) {
        antalKöttbullar -= ugnPris * 50;
        for (let i = 0; i < 50; i++) {
          antalUgnar++;
          if (antalUgnar <= 10) {
            NyUgn();
          } else {
            ExtraUgnar.innerHTML = "+ " + (antalUgnar - 10);
          }
        }
      }
      break;
    case "kök1":
      if (antalKöttbullar >= kökPris) {
        antalKöttbullar -= kökPris;
        antalKök++;
        if (antalKök <= 10) {
          NyKök();
        } else {
          ExtraKök.innerHTML = "+ " + (antalKök - 10);
        }
      }
      break;
    case "kök10":
      if (antalKöttbullar >= kökPris * 10) {
        antalKöttbullar -= kökPris * 10;
        for (let i = 0; i < 10; i++) {
          antalKök++;
          if (antalKök <= 10) {
            NyKök();
          } else {
            ExtraKök.innerHTML = "+ " + (antalKök - 10);
          }
        }
      }
      break;
    case "kök50":
      if (antalKöttbullar >= kökPris * 50) {
        antalKöttbullar -= kökPris * 50;
        for (let i = 0; i < 50; i++) {
          antalKök++;
          if (antalKök <= 10) {
            NyKök();
          } else {
            ExtraKök.innerHTML = "+ " + (antalKök - 10);
          }
        }
      }
      break;
    case "ikea1":
      if (antalKöttbullar >= ikeaPris) {
        antalKöttbullar -= ikeaPris;
        antalIkeor++;
        if (antalIkeor <= 10) {
          NyIkea();
        } else {
          ExtraIkeor.innerHTML = "+ " + (antalIkeor - 10);
        }
      }
      break;
    case "ikea10":
      if (antalKöttbullar >= ikeaPris * 10) {
        antalKöttbullar -= ikeaPris * 10;
        for (let i = 0; i < 10; i++) {
          antalIkeor++;
          if (antalIkeor <= 10) {
            NyIkea();
          } else {
            ExtraIkeor.innerHTML = "+ " + (antalIkeor - 10);
          }
        }
      }
      break;
    case "ikea50":
      if (antalKöttbullar >= ikeaPris * 50) {
        antalKöttbullar -= ikeaPris * 50;
        for (let i = 0; i < 50; i++) {
          antalIkeor++;
          if (antalIkeor <= 10) {
            NyIkea();
          } else {
            ExtraIkeor.innerHTML = "+ " + (antalIkeor - 10);
          }
        }
      }
      break;
    case "fabrik1":
      if (antalKöttbullar >= fabrikPris) {
        antalKöttbullar -= fabrikPris;
        antalFabriker++;
        if (antalFabriker <= 10) {
          NyFabrik();
        } else {
          ExtraFabriker.innerHTML = "+ " + (antalFabriker - 10);
        }
      }
      break;
    case "fabrik10":
      if (antalKöttbullar >= fabrikPris * 10) {
        antalKöttbullar -= fabrikPris * 10;
        for (let i = 0; i < 10; i++) {
          antalFabriker++;
          if (antalFabriker <= 10) {
            NyFabrik();
          } else {
            ExtraFabriker.innerHTML = "+ " + (antalFabriker - 10);
          }
        }
      }
      break;
    case "fabrik50":
      if (antalKöttbullar >= fabrikPris * 50) {
        antalKöttbullar -= fabrikPris * 50;
        for (let i = 0; i < 50; i++) {
          antalFabriker++;
          if (antalFabriker <= 10) {
            NyFabrik();
          } else {
            ExtraFabriker.innerHTML = "+ " + (antalFabriker - 10);
          }
        }
      }
      break;
    case "bank1":
      if (antalKöttbullar >= bankPris) {
        antalKöttbullar -= bankPris;
        antalBanker++;
        if (antalBanker <= 10) {
          NyBank();
        } else {
          ExtraBanker.innerHTML = "+ " + (antalBanker - 10);
        }
      }
      break;
    case "bank10":
      if (antalKöttbullar >= bankPris * 10) {
        antalKöttbullar -= bankPris * 10;
        for (let i = 0; i < 10; i++) {
          antalBanker++;
          if (antalBanker <= 10) {
            NyBank();
          } else {
            ExtraBanker.innerHTML = "+ " + (antalBanker - 10);
          }
        }
      }
      break;
    case "bank50":
      if (antalKöttbullar >= bankPris * 50) {
        antalKöttbullar -= bankPris * 50;
        for (let i = 0; i < 50; i++) {
          antalBanker++;
          if (antalBanker <= 10) {
            NyBank();
          } else {
            ExtraBanker.innerHTML = "+ " + (antalBanker - 10);
          }
        }
      }
      break;
    case "KöttbulleRegn1":
      if (antalKöttbullar >= köttbulleRegnPris) {
        antalKöttbullar -= köttbulleRegnPris;
        antalKöttbulleRegn++;
        if (antalKöttbulleRegn <= 10) {
          NyKöttbulleRegn();
        } else {
          ExtraKöttbulleRegn.innerHTML = "+ " + (antalKöttbulleRegn - 10);
        }
      }
      break;
    case "KöttbulleRegn10":
      if (antalKöttbullar >= köttbulleRegnPris * 10) {
        antalKöttbullar -= köttbulleRegnPris * 10;
        for (let i = 0; i < 10; i++) {
          antalKöttbulleRegn++;
          if (antalKöttbulleRegn <= 10) {
            NyKöttbulleRegn();
          } else {
            ExtraKöttbulleRegn.innerHTML = "+ " + (antalKöttbulleRegn - 10);
          }
        }
      }
      break;

    case "KöttbulleRegn50":
      if (antalKöttbullar >= köttbulleRegnPris * 50) {
        antalKöttbullar -= köttbulleRegnPris * 50;
        for (let i = 0; i < 50; i++) {
          antalKöttbulleRegn++;
          if (antalKöttbulleRegn <= 10) {
            NyKöttbulleRegn();
          } else {
            ExtraKöttbulleRegn.innerHTML = "+ " + (antalKöttbulleRegn - 10);
          }
        }
      }
      break;
  }
}
