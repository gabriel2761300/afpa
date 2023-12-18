let prixDemande;
let monnaieDonne;
let calcul;
let billet10euro;
let billet5euro;
let piece1euro;

let message10 = document.getElementById("message10");
let message5 = document.getElementById("message5");
let message1 = document.getElementById("message1");
let button = document.getElementById("button");


function Calcul(){

    prixDemande = parseInt(document.getElementById("prixDemande").value);
    monnaieDonne = parseInt(document.getElementById("monnaieDonne").value);
    calcul = monnaieDonne - prixDemande

    billet10euro = 0;
    while(calcul >= 10){
        billet10euro = billet10euro + 1;
        calcul = calcul - 10;
    }
    
    billet5euro = 0;
    while(calcul >= 5){
        billet5euro = billet5euro + 1;
        calcul = calcul - 5;
    }
    
    
    message10.innerHTML = billet10euro
    message5.innerHTML = billet5euro
    message1.innerHTML = calcul
}

document.getElementById("button").addEventListener(`click`,Calcul,false)