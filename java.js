let antalKöttbullar = 0;
let perSek = 0;
let antalFarmödrar = 0;
let antalugnar = 0;
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

const KlickStats = document.querySelector(".KlickStats");
const FarmorStats = document.querySelector(".FarmorStats");
const UgnStats = document.querySelector(".UgnStats");
const KökStats = document.querySelector(".KökStats");
const IkeaStats = document.querySelector(".IkeaStats");
const FabrikStats = document.querySelector(".FabrikStats");
const KöttbulleRegnStats = document.querySelector(".KöttbulleRegnStats");

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
  antalKöttbullar++;
}

function uppdateraVärden() {
  Räknare.innerHTML = antalKöttbullar.toFixed(0) + " 🧆";
  perSek =
    antalFarmödrar * 0.2 +
    antalugnar * 0.5 +
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
      }
      break;
    case "farmor10":
      if (antalKöttbullar >= farmorPris * 10) {
        antalKöttbullar -= farmorPris * 10;
        antalFarmödrar += 10;
      }
      break;
    case "farmor50":
      if (antalKöttbullar >= farmorPris * 50) {
        antalKöttbullar -= farmorPris * 50;
        antalFarmödrar += 50;
      }
      break;
    case "ugn1":
      if (antalKöttbullar >= ugnPris) {
        antalKöttbullar -= ugnPris;
        antalugnar++;
      }
      break;
    case "ugn10":
      if (antalKöttbullar >= ugnPris * 10) {
        antalKöttbullar -= ugnPris * 10;
        antalugnar += 10;
      }
      break;
    case "ugn50":
      if (antalKöttbullar >= ugnPris * 50) {
        antalKöttbullar -= ugnPris * 50;
        antalugnar += 50;
      }
      break;
    case "kök1":
      if (antalKöttbullar >= kökPris) {
        antalKöttbullar -= kökPris;
        antalKök++;
      }
      break;
    case "kök10":
      if (antalKöttbullar >= kökPris * 10) {
        antalKöttbullar -= kökPris * 10;
        antalKök += 10;
      }
      break;
    case "kök50":
      if (antalKöttbullar >= kökPris * 50) {
        antalKöttbullar -= kökPris * 50;
        antalKök += 50;
      }
      break;
    case "ikea1":
      if (antalKöttbullar >= ikeaPris) {
        antalKöttbullar -= ikeaPris;
        antalIkeor++;
      }
      break;
    case "ikea10":
      if (antalKöttbullar >= ikeaPris * 10) {
        antalKöttbullar -= ikeaPris * 10;
        antalIkeor += 10;
      }
      break;
    case "ikea50":
      if (antalKöttbullar >= ikeaPris * 50) {
        antalKöttbullar -= ikeaPris * 50;
        antalIkeor += 50;
      }
      break;
    case "fabrik1":
      if (antalKöttbullar >= fabrikPris) {
        antalKöttbullar -= fabrikPris;
        antalFabriker++;
      }
      break;
    case "fabrik10":
      if (antalKöttbullar >= fabrikPris * 10) {
        antalKöttbullar -= fabrikPris * 10;
        antalFabriker += 10;
      }
      break;
    case "fabrik50":
      if (antalKöttbullar >= fabrikPris * 50) {
        antalKöttbullar -= fabrikPris * 50;
        antalFabriker += 50;
      }
      break;
    case "bank1":
      if (antalKöttbullar >= bankPris) {
        antalKöttbullar -= bankPris;
        antalBanker++;
      }
      break;
    case "bank10":
      if (antalKöttbullar >= bankPris * 10) {
        antalKöttbullar -= bankPris * 10;
        antalBanker += 10;
      }
      break;
    case "bank50":
      if (antalKöttbullar >= bankPris * 50) {
        antalKöttbullar -= bankPris * 50;
        antalBanker += 50;
      }
      break;
    case "land1":
      if (antalKöttbullar >= köttbulleRegnPris) {
        antalKöttbullar -= köttbulleRegnPris;
        antalKöttbulleRegn++;
      }
      break;
    case "land10":
      if (antalKöttbullar >= köttbulleRegnPris * 10) {
        antalKöttbullar -= köttbulleRegnPris * 10;
        antalKöttbulleRegn += 10;
      }
      break;

    case "land50":
      if (antalKöttbullar >= köttbulleRegnPris * 50) {
        antalKöttbullar -= köttbulleRegnPris * 50;
        antalKöttbulleRegn += 50;
      }
      break;
  }
}
