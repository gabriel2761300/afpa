let genre;
let age;
let button = document.getElementById("button");
let message = document.getElementById("message");

function verification(){
    genre = document.getElementById("genre").value;
    age = document.getElementById("age").value;
    if (genre == "H" && age >= 18){
        message.innerHTML = "<p>vous etes impossable</p>";
    }else if((genre == "F" && age >= 20) && (genre == "F" && age <= 35)){
        message.innerHTML = "<p>vous etes impossable</p>";
    }else{
        message.innerHTML = "<p>vous n'etes pas impossable</p>";
    }
}
button.addEventListener('click',verification,false)