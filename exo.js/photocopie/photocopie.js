let photocopie;
let prix;
let button = document.getElementById("button");
let message = document.getElementById("message");

function prixPhotocopie(){
    photocopie = document.getElementById("photocopie").value;
    if(photocopie <= 10){
        prix = photocopie*0.1;
        message.innerHTML = `<p> vous devrez payer : ${prix} </p>`
    }else if(photocopie <= 30){
        prix = 10*0.1+(photocopie-10)*0.09;
        message.innerHTML = `<p> vous devrez payer : ${prix} </p>`
    }else if(photocopie > 30){
        prix = 10*0.1+20*0.09+(photocopie-30)*0.08
        message.innerHTML = `<p> vous devrez payer : ${prix} </p>`
    }
}

button.addEventListener('click',prixPhotocopie,)