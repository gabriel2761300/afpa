/*constance*/

const seuilMajorationSalaire = 1800.0;
const majorationBasSalaire = 0.1;
const tauxCelibataire = 0.2;
const tauxEnCouple =0.25;
const tauxParEnfant = 0.15;
const tauxMaximalParticipation = 0.5;

/*variable*/

let reponse;
let nombreEnfants;
let estCelibataire;
let montantRemuneration;
let tauxParticipation = 0;
let participation = 0;

//obtention des reponses demander pour le calcul//

reponse = prompt("etes vous celibataire OUI ou NON ?");
if(reponse==="oui"){
    estCelibataire = true;
} 
else {
    estCelibataire = false;
}
console.log(estCelibataire);

reponse = prompt("nombres d'enfants ?");
nombreEnfants = parseInt(reponse);
console.log(nombreEnfants);

reponse = prompt("quel est votre rémunération");
montantRemuneration = parseFloat(reponse).toFixed(2);
console.log(montantRemuneration);

//calcul//

if(estCelibataire){
    tauxParticipation = tauxCelibataire;
}
else{
    tauxParticipation = tauxEnCouple;
}
tauxParticipation = tauxParticipation+(nombreEnfants*tauxParEnfant);

if(montantRemuneration<seuilMajorationSalaire){
    tauxParticipation+=majorationBasSalaire;
}
if(tauxParticipation>tauxMaximalParticipation){
    tauxParticipation=tauxMaximalParticipation;
}

//resultats//

participation = (tauxParticipation*100).toFixed(2);
console.log(participation);

alert("votre participation est de " + participation + "%"
)
