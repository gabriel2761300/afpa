let test = prompt("merci d'inscrire une chaine")
document.body.innerHTML = test;


let budget = prompt("indiquer votre budget");
let achats = prompt("indiquer le montant de votre achats");
if (budget>achats){
    alert("vous pouvez payer")
}else{
    alert("vous ne pouver pas payer")
}

let prix = prompt("indiquer le prix de votre achats HT")
let prixttc = prix*1.2
document.body.innerText = prixttc;

