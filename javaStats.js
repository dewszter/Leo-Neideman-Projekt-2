let antalKlickStats = localStorage.getItem("antalKlick");


const KlickStats = document.querySelector(".KlickStats");
const FarmorStats = document.querySelector(".FarmorStats");
const UgnStats = document.querySelector(".UgnStats");
const KökStats = document.querySelector(".KökStats");
const IkeaStats = document.querySelector(".IkeaStats");
const FabrikStats = document.querySelector(".FabrikStats");
const KöttbulleRegnStats = document.querySelector(".KöttbulleRegnStats");

loop();

function loop() {
  uppdateraVärden();
  setTimeout(loop, 1000 / 60);
}

function uppdateraVärden() {
  KlickStats.innerHTML =
    "Total mängd hemmagjorda köttbullare (klicks): " + antalKlickStats;
}
