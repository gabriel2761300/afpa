//tableau félin//
let monTableauFélins = ["Tigre", "Lion", "Panthère", "Ocelot", "Puma"];

//tableau de chaînes de caractères inférieure ou égale à 5//
let filtreChaines = monTableauFélins.filter(ch => ch.length <= 5);

//tableau push léopard//
monTableauFélins.push("Léopard");
console.log(filtreChaines);
console.log(monTableauFélins);

//tableau indices impairs//
let monTableauFélinsImpair = monTableauFélins.filter((el,indice)=>
   indice%2 !=0
);
console.log(monTableauFélinsImpair);

//tableau poissons//
let monTableauPoissons = ["Truite", "Ablette", "Brochet", "Carpe", "Gardon"];
console.log(monTableauPoissons);

//tableau animaux//
let monTableauAnimaux = monTableauFélins.concat(monTableauPoissons);

console.log(monTableauAnimaux);

//tableau nombre éléments total//
console.log(monTableauAnimaux.length);

//tableau déparation félins-poissons//
console.log(monTableauAnimaux.slice(0, 6));

//tableau remplacement et ajouts des poissons//
monTableauPoissons.splice(2, 1, "Tanche", "Barbeau");

console.log(monTableauPoissons);

//tableau vérification suppréssion élément//
console.log(monTableauPoissons.includes("Brochet"));

//tableau alternatif (mélanger les tableaux)//
let monTableauAlternatif = [];
for(let i=0; i<monTableauFélins.length; i++) {
    monTableauAlternatif.push(monTableauFélins[i]);
    monTableauAlternatif.push(monTableauPoissons[i]);
}
console.log(monTableauAlternatif);

//tableau nombre//
let monTableauNombre = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(monTableauNombre);

//tableau nombres pairs//
let monTableauNombrePair = monTableauNombre.filter((el,indice)=>
   indice%2 !=0
);
console.log(monTableauNombrePair);

//tableau nombres (méthode map)//
let monTableauNombreMap = monTableauNombrePair.map((x) => (x*3)+2);
console.log(monTableauNombreMap);

//tableau d'objets littéraux//
let utilisateurs = [
    {prenom : "Sacha", nom : "RESTOUEIX"},
    {prenom : "Remi", nom : "CHOCO"},
    {prenom : "Pierre", nom : "KIROULE"},
];
console.log(utilisateurs);

let utilisateursMap = utilisateurs.map((utilisateurs) => utilisateurs.prenom + " " + utilisateurs.nom);

console.log(utilisateursMap);

// let utilisateursMap = utilisateurs.map(nomComplet);
// function nomComplet(item) {
// return [item.prenom, item.nom].join(" "); 
// };
// console.log(utilisateursMap);


//tableau longeur de chaîne de caractères//
 let tableaulongeur =utilisateursMap.map(function(element){
    return element.length;
 });
 console.log(tableaulongeur);

 //tableau racine carrée//
 let monTableauRacineCarrée = tableaulongeur.map(function(longeur) {
    return Math.round(Math.sqrt(longeur));
 });
console.log(monTableauRacineCarrée);

//tableau somme des éléments//
let monTableauFinal = monTableauRacineCarrée.reduce(function(acc, val) {
    return acc + val;
}, 0);
console.log(monTableauFinal);