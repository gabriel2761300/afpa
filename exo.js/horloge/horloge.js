let heure;
let minutes;
let secondes;
let button = document.getElementById("button");
let message = document.getElementById("message");

function Heure(){
    heure = parseInt(document.getElementById("heure").value);
    minutes = parseInt(document.getElementById("minutes").value);
    secondes = parseInt(document.getElementById("secondes").value);

    secondes = secondes + 1;
    if(secondes == 60){
        secondes = "0";
        minutes = minutes + 1;
    }
    if(minutes == 60){
        minutes = "0";
        heure = heure + 1;
    }
    if(heure == 24){
        heure = "0";
    }
    message.innerHTML = `<p>Dans un seconde il sera ${heure}h${minutes}min${secondes}sec</p>`
    }
button.addEventListener('click',Heure,false)