var mot
var lettre;
var nbEchec = 0;
var nbTrouve = 0;
var tableau;
var listeLettreSaisie = new Array();
var flagPremiereFois = true;
var canvas;
var ctx;

/*********************functions*********************************/

/*initialisation du tableau affichage mot du pendu */

function initialiserTableau(mot) {

    tableau = new Array(mot.length);

    for (let index = 0; index < mot.length; index++) {
        tableau[index] = '_ ';
    }
}

/* fontion de recherche de lettre dans le mot du pendu*/

function trouveLettre(mot, lettre) {
    let compteur = 0;

    if (!lettreDejaSaisie(lettre)) {

        listeLettreSaisie.push(lettre.toUpperCase());

        for (let index = 0; index < mot.length; index++) {
            if (mot[index].toUpperCase() === lettre.toUpperCase()) {
                compteur++;
                tableau[index] = lettre.toUpperCase() + " ";
            }
        }
        if (compteur > 0) {
            nbTrouve += compteur;
            console.log("nb trouvé = " + nbTrouve);
            console.log("longueur du mot = " + mot.length);
            if (nbTrouve == mot.length) { btnLettre.disabled = true; dessinerPendu(12); }
            return true;
        }
        else {

            nbEchec++;
            dessinerPendu(nbEchec);
            return false;
        }
    }
    else alert("la lettre a déjà été saisie");

}

/* fontion de gestion des lettres deja saisie*/

function lettreDejaSaisie(lettre) {
    flag = false;
    listeLettreSaisie.forEach(element => {
        if (element.toUpperCase() == lettre.toUpperCase()) flag = true;
    });
    return flag;
}

function saisieMot() {

    //recuperation du mot
    mot = document.querySelector("#motDuPendu").value;
    console.log("le mot récupéré vaut =" + mot);

    // vidange du champ de saisie
    document.querySelector("#motDuPendu").value = "";

    // agencer les div champsaisie pour demarrer le jeu

    document.querySelector("#champSaisie").style.display = "none";
    document.querySelector("#champSaisie2").style.display = "block";
    document.querySelector("#lettreDuPendu").focus();
    document.querySelector("#Message").textContent = ("Entrez une lettre et devinez le mot !");

    // initialisation tableau

    initialiserTableau(mot);
    flagPremiereFois = false;

    // afficher le resultat "tableau" de recherche
    var fragment = document.createDocumentFragment();
    var div = document.createElement("div");
    div.setAttribute("id", "affichageResultat");
    var text = document.createTextNode(tableau.join(" "));
    div.append(text);
    fragment.append(div);
    document.getElementById("motTrouve").prepend(fragment);

}

function lancerJeu() {


    // récupération la saisie de l'utilisateur

    let lettreSaisie = document.getElementById("lettreDuPendu");

    // lancement du jeu

    trouveLettre(mot, lettreSaisie.value);


    // remplacer le resultat tableau de recherche

    let verif = tableau.join(" ");

    document.getElementById("affichageResultat").textContent = verif;

    //vidange du champ de saisie de lettre du pendu

    document.querySelector("#lettreDuPendu").value = "";

    //afficher les lettres déjà saisi
    document.querySelector("#Message").textContent = ("Lettres Déjà Saisies:" + listeLettreSaisie);

    // redonner le focus au champ de saisie

    document.querySelector("#lettreDuPendu").focus();

    // affichage des compteurs nb de coup et nb de lettres trouvées

    document.querySelector("#NbCoup").textContent = ("Nombre coup joué : " + (nbEchec + nbTrouve));

    // affichage des compteurs nb de coup et nb de lettres trouvées
    essaiRestant = 11 - nbEchec;
    document.querySelector("#NbRestant").textContent = ("Il vous reste " + essaiRestant + " essai(s)!");


}


function dessinerPendu(nbEchec) {
    canvas = document.getElementById("dessinPendu");
    if (canvas.getContext) ctx = canvas.getContext("2d");
    switch (nbEchec) {
        case 1:
            ctx.fillStyle = 'black';
            ctx.fillRect(50, 295, 100, 10);
            break;
        case 2:
            ctx.fillStyle = '#black';
            ctx.fillRect(75, 295, 10, -295);
            break;
        case 3:
            ctx.fillStyle = '#black';
            ctx.fillRect(75, 0, 150, 10);
            ctx.strokeStyle = '#black';
            ctx.lineWidth = 8;
            ctx.beginPath();
            ctx.moveTo(185, 0)
            ctx.lineTo(77, 50);
            ctx.stroke();
            break;
        case 4:
            ctx.fillStyle = 'black';
            ctx.fillRect(200, 0, 5, 50);
            break;
        case 5:
            ctx.beginPath();
            ctx.strokeStyle = '#FD0';
            ctx.lineWidth = 3;
            ctx.arc(200, 75, 25, 0, Math.PI * 2, true);  
            ctx.moveTo(185, 65);
            ctx.arc(185, 65, 5, 0, Math.PI * 2, true);
            ctx.moveTo(215, 65);
            ctx.arc(215, 65, 5, 0, Math.PI * 2, true);
            ctx.moveTo(215, 75);
            ctx.arc(200, 75, 20, 0, Math.PI, false);
            ctx.stroke();
            break;
        case 6:
            ctx.fillStyle = '#FD0';
            ctx.fillRect(200, 100, 5, 100);
            break;
        case 7:
            ctx.strokeStyle = '#FD0';
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(202, 200)
            ctx.lineTo(150, 250);
            ctx.stroke();
            break;
        case 8:
            ctx.strokeStyle = '#FD0';
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(204, 200)
            ctx.lineTo(250, 250);
            ctx.stroke();
            break;
        case 9:
            ctx.strokeStyle = '#FD0';
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(202, 130)
            ctx.lineTo(150, 114);
            ctx.stroke();
            break;
        case 10:
            ctx.strokeStyle = '#FD0';
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(204, 130)
            ctx.lineTo(254, 114);
            ctx.stroke();
            break;
        case 11:
            ctx.clearRect(130, 30, 150, 240);
            ctx.fillStyle = 'black';
            ctx.fillRect(200, 0, 5, 70);
            ctx.beginPath();
            ctx.strokeStyle = '#FD0';
            ctx.lineWidth = 3;
            ctx.arc(200, 95, 25, 0, Math.PI * 2, true);  // Cercle extérieur
            ctx.moveTo(185, 95);
            ctx.arc(185, 95, 5, 0, Math.PI * 2, true);
            ctx.moveTo(215, 95);
            ctx.arc(215, 95, 5, 0, Math.PI * 2, true);
            ctx.moveTo(220, 120);
            ctx.arc(200, 120, 20, 0, Math.PI, true);
            ctx.stroke();
            ctx.fillStyle = '#FD0';
            ctx.fillRect(200, 120, 5, 100);
            ctx.fillRect(195, 200, 5, 75);
            ctx.fillRect(210, 200, -5, 75);
            ctx.fillRect(190, 130, 25, 5);
            ctx.fillRect(190, 130, 5, 40);
            ctx.fillRect(215, 130, -5, 40);
            ctx.fillStyle = "rgba(255, 0, 0, .8)";
            ctx.font = '48px serif';
            ctx.fillText('PERDU !', 90, 180);
            btnLettre.disabled = true;
            break;
        case 12:
            ctx.fillStyle = 'green';
            ctx.font = '48px serif';
            ctx.fillText('GAGN\u00c9 !', 80, 150);
            break;
        default:
            break;
    }
}

/**************instruction principale ********************************/
// recupération des boutons Mot et Lettre

let btnMot = document.forms[0].elements[1]
let btnLettre = document.forms[0].elements[3];
console.log(document.forms[0]);

// Donner le focus au champ de saisie du mot

document.querySelector("#motDuPendu").focus();

// ne pas afficher le champ saisie2 des lettres
document.querySelector("#champSaisie2").style.display = "none";

// gestion du btnMot : saisie du mot a trouvé

btnMot.onclick = saisieMot;

// gestion du bouton btnLettre :saisie de la lettre 

btnLettre.onclick = lancerJeu;