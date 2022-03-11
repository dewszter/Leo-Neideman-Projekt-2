let antalKöttbullar = 0;
let antalKlick = 0;
let perSek = 0;
let antalFarmödrar = 0;
let antalugnar = 0;
let antalKök = 0;
let antalIkeor = 0;
let antalFabriker = 0;
let antalBanker = 0;
let antalLänder = 0;

const KlickaKöttbulle = document.querySelector(".KlickaKöttbulle");
const Räknare = document.querySelector(".Räknare");
const KöttbullarPerSek = document.querySelector(".KöttbullarPerSek");

const ButikKnappar = document.querySelectorAll("button").forEach((ButikKnappar) => {
    ButikKnappar.addEventListener("click", ButikknappKlickad);
});

KlickaKöttbulle.addEventListener("click", Klickad);


  
  loop();
  

  function loop(){
    antalKöttbullar += perSek/60;
    uppdateraStatestik();
    setTimeout(loop, 1000/60);
  }   

  function Klickad(event) {
    antalKöttbullar++;
    antalKlick++;
  }
  
  function uppdateraStatestik() {
    Räknare.innerHTML = antalKöttbullar.toFixed(0) + " k";
    perSek = antalFarmödrar * 0.2 + antalugnar * 0.5 + antalKök +   antalIkeor * 3 + antalFabriker * 10 + antalBanker * 30 + antalLänder * 150;
    KöttbullarPerSek.innerHTML = perSek.toFixed(1) + " k/s";
  }


function ButikknappKlickad(event) {
  switch (event.target.id) {
    case "farmor1":
      if (antalKöttbullar >= 15) {
        antalKöttbullar -= 15;
        antalFarmödrar += 1;
      }
      break;
    case "farmor10":
      if (antalKöttbullar >= 150) {
        antalKöttbullar -= 150;
        antalFarmödrar += 10;
      }
      break;
    case "farmor50":
      if (antalKöttbullar >= 750) {
        antalKöttbullar -= 750;
        antalFarmödrar += 50;
      }
      break;
    case "ugn1":
      if (antalKöttbullar >= 50) {
        antalKöttbullar -= 50;
        antalugnar++;
      }
      break;
    case "ugn10":
      if (antalKöttbullar >= 500) {
        antalKöttbullar -= 500;
        antalugnar += 10;
      }
      break;
    case "ugn50":
      if (antalKöttbullar >= 2500) {
        antalKöttbullar -= 2500;
        antalugnar += 50;
      }
      break;
    case "kök1":
      if (antalKöttbullar >= 100) {
        antalKöttbullar -= 100;
        antalKök++;
      }
      break;
    case "kök10":
      if (antalKöttbullar >= 1000) {
        antalKöttbullar -= 1000;
        antalKök += 10;
      }
      break;
    case "kök50":
      if (antalKöttbullar >= 5000) {
        antalKöttbullar -= 5000;
        antalKök += 50;
      }
      break;
    case "ikea1":
      if (antalKöttbullar >= 250) {
        antalKöttbullar -= 250;
        antalIkeor++;
      }
      break;
    case "ikea10":
      if (antalKöttbullar >= 2500) {
        antalKöttbullar -= 2500;
        antalIkeor += 10;
      }
      break;
    case "ikea50":
      if (antalKöttbullar >= 12500) {
        antalKöttbullar -= 12500;
        antalIkeor += 50;
      }
      break;
    case "fabrik1":
      if (antalKöttbullar >= 600) {
        antalKöttbullar -= 600;
        antalFabriker++;
      }
      break;
    case "fabrik10":
      if (antalKöttbullar >= 6000) {
        antalKöttbullar -= 6000;
        antalFabriker += 10;
      }
      break;
    case "fabrik50":
      if (antalKöttbullar >= 30000) {
        antalKöttbullar -= 30000;
        antalFabriker += 50;
      }
      break;
    case "bank1":
      if (antalKöttbullar >= 1000) {
        antalKöttbullar -= 1000;
        antalBanker++;
      }
      break;
    case "bank10":
      if (antalKöttbullar >= 10000) {
        antalKöttbullar -= 10000;
        antalBanker += 10;
      }
      break;
    case "bank50":
      if (antalKöttbullar >= 50000) {
        antalKöttbullar -= 50000;
        antalBanker += 50;
      }
      break;
    case "land1":
      if (antalKöttbullar >= 6000) {
        antalKöttbullar -= 6000;
        antalLänder++;
      }
      break;
    case "land10":
      if (antalKöttbullar >= 60000) {
        antalKöttbullar -= 60000;
        antalLänder += 10;
      }
      break;

    case "land50":
      if (antalKöttbullar >= 300000) {
        antalKöttbullar -= 300000;
        antalLänder += 50;
      }
      break;
  }
 
}
