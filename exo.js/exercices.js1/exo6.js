let ht = prompt("Montant HT ?");
let taux_tva = prompt("Taux de TVA ?");
let ttc = ht * (taux_tva / 100) + 1;
if(ttc > 100) {
   document.body.innerHTML = '<h1 style="color: red;">' + ttc + '</h1>';
} else {
   document.body.innerHTML = '<h1 style="color: green;">' + ttc + '</h1>';
}