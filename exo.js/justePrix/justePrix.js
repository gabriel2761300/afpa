const  nomObjet = [`lunette`,`tee-shirt`];
const  Image = [`lunette.png`,`tee-shirt.png`];

//  Sélectionner nos éléments
let input = document.querySelector('#prix');
let error = document.querySelector('small');
let formulaire = document.querySelector('#formulaire');
let nbrAléatoire;
let image = document.getElementById(`objet`);
let nomImage = document.getElementById(`nomObjet`);

//  Cacher l'erreur
error.style.display = 'none';

//  Générer un nombre aléatoire
let nombreAléatoire = Math.floor(Math.random() * 100)
let coups = 0;
let nombreChoisi;

//afficher un image
nbrAléatoire = Math.floor(Math.random() * 1)
function afficherImage(valeur){
  return `<img src="/justePrix/img/${valeur}" class="img-fluid" width="30%">`
}
image.innerHTML = afficherImage(Image[nbrAléatoire]);
nomImage.innerHTML = nomObjet[nbrAléatoire];
// Etape Création de la fonction vérifier
function verifier(nombre) { 
    let instruction = document.createElement('div');
if(coups >10){
  instruction.textContent = "vous avez perdu"

  }else if(nombre < nombreAléatoire) {
        //c'est plus
        instruction.textContent = "#" + coups + " ( " + nombre + " ) C'est plus !"
        instruction.className = 'instruction plus'

  }else if(nombre > nombreAléatoire) {
        //c'est moin
        instruction.textContent = "#" + coups + " ( " + nombre + " ) C'est moin !"
        instruction.className = 'instruction moins'

  }else {
        //Gagné
        instruction.textContent = "#" + coups + " ( " + nombre + " ) Vous avez gagné !"
        instruction.className = 'instruction fini'
        input.disabled = true
   }

    document.querySelector('#instructions').prepend(instruction);

}

//  Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup', () => {
    if(isNaN(input.value)) {
        //message d'erreur
        error.style.display = 'inline';
    }else {
        error.style.display = 'none';
    }
})

//  Agir à l'envoi du formulaire
formulaire.addEventListener('submit', (e) => {
    e.preventDefault();

    if(isNaN(input.value) || input.value == '') {
        //bordure en rouge
        input.style.borderColor = 'red';
    }else {
        // Bordure en gris
        coups++;
        input.style.borderColor = 'silver';
        nombreChoisi = input.value;
        input.value = '';
        verifier(nombreChoisi);
     }
})