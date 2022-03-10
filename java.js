let antalKöttbullar = 0;
let perSek = 0;
let antalFarmödrar = 0;
let antalStekpannor = 0;
let antalKök = 0;
let antalIkeor = 0;
let antalFabriker = 0;
let antalBanker = 0;
let antalLänder = 0;

const KlickaKöttbulle = document.querySelector(".KlickaKöttbulle");
const Räknare = document.querySelector(".Räknare")
const KöttbullarPerSek = document.querySelector(".KöttbullarPerSek")

KlickaKöttbulle.addEventListener("click", Klickad)

uppdateraStatestik();
Klickad();


function Klickad(event)
{
    antalKöttbullar ++;
    uppdateraStatestik();c
}

function uppdateraStatestik()
{
    Räknare.innerHTML = antalKöttbullar.toFixed(0) + " k";
    KöttbullarPerSek.innerHTML = (persek + antalFarmödrar*0.2 + antalStekpannor*0.5 + antalKök + antalIkeor*1.8 + antalFabriker*3 + antalBanker*5 + antalLänder*10).toFixed(1);

}