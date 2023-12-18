let prixht = prompt("donner le prix du produit")
let taxe = prompt("donné le prix de la taxe") 
let tauxDeTaxe = (taxe/100)+1;
let prixTtc = tauxDeTaxe * prixht;
document.body.innerText = prixTtc
