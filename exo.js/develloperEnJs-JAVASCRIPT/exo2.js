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
do{    
    do{
        reponse = prompt("etes vous celibataire OUI ou NON ?");
        if(reponse !=="oui" && reponse !=="non"){
            alert("la reponse " + reponse + " est fausse merci de repondre par OUI ou NON");
        }    
    }while(reponse !=="oui" && reponse !== "non");
    console.log(estCelibataire);

    do{
        reponse = prompt("nombres d'enfants ?");
        nombreEnfants = parseInt(reponse);
        if (isNaN(nombreEnfants)){
            alert("le reponse nombres d'enfant doit etre un chiffre");
        }
    }while(isNaN(nombreEnfants));
    console.log(nombreEnfants);

    do{
        reponse = prompt("quel est votre rémunération");
        montantRemuneration = parseFloat(reponse).toFixed(2);
        if(isNaN(montantRemuneration)){
            alert("merci d'écrire le rémunération avec des chiffres svp");
        }
    }while(isNaN(montantRemuneration))
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

}while(participation<60)
