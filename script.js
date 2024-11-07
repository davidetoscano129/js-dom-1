// Identifico l'img e il btn da modificare
const firstImg = document.getElementById("whiteLamp");
const onOffBtn = document.getElementById("btn")

// Definisco la funzione per modificare img al click di btn
function onAndOff(){
    if(firstImg.src.includes("img/white_lamp.png")) {
        firstImg.src = "img/yellow_lamp.png"; // Img lampadina accesa
    } else {
        firstImg.src = "img/white_lamp.png"; // Img lampadina spenta
        }
}

// al click richiamo la funzione lightOnOff
onOffBtn.addEventListener('click', onAndOff);
