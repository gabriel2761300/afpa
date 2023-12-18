function valider() { 
    var message; 
    var str = document.getElementById("mdp").value; 
    if (str.match( /[0-9]/g) && str.match( /[A-Z]/g) && str.match(/[a-z]/g) && str.match( /[^a-zA-Z\d]/g) && str.length >= 8){ 
        message = "<p style='color:green'>Mot de passe tres Sécurisé.</p>"; 
    }else if(str.match( /[0-9]/g) && str.match( /[A-Z]/g) && str.match(/[a-z]/g) && str.match( /[^a-zA-Z\d]/g)){
        message = "<p style='color:bleu'>Mot de passe Sécurisé.</p>";  
    }else if (str.match( /[0-9]/g) && str.match( /[A-Z]/g) && str.match(/[a-z]/g)){
        message = "<p style='color:orange'>Mot de passe Moyen.</p>";  
    }else{
        message = "<p style='color:red'>Mot de passe dangereux.</p>"; 
    }
        document.getElementById("message").innerHTML= message; 
}