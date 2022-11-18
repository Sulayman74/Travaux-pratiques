//  Exo 1 : 

// function double(nombre) {
//  return nombre * 2;
// }
// console.log(double(4)); // 2 est un exemple. Il retournera 4 en console.


//  Exo 2 : 

// function posOuNeg() {
//   let reponse = prompt('Entre un chiffre positif ou negatif');
//   console.log(reponse);

//   if (reponse >= 0) {
//   console.log('Ce chiffre est positif');
//   } else {
//   console.log('Ce chiffre est négatif');
//   }
// }
// posOuNeg();

// alternative en correction :

// let reponse = prompt('Entre un nombre');
// console.log(reponse);

// function isPositive(reponse) {
//    if (reponse >= 0){
//   return true;
//   } else {
//   return false;
//   }
// }
// console.log(isPositive(reponse));



//  Exo 3 : 

// let tab = [5, 14, 7, 22, 3, 6];

// function grandTri (tab) {
//   return tab.sort((a, b) => a - b);
// }
// console.log(grandTri(tab));


//  Exo 4 : 

var motDePasse = [];
motDePasse = prompt("Définissez un mot de passe. Il doit avoir plus de 7 carctères et contenir un arobas et un point");
console.log(motDePasse);

function checkPass (motDePasse) {
 if (motDePasse.length > 7 && motDePasse.includes("@" && ".") // includes fonction avec ou sans tableau
)
return true;
else {
  return false
};
};
console.log(checkPass(motDePasse));

// Exo5 : 

// var paysPropose = prompt("Choisis un pays parmis les suivants et je te donne  sa capitale : France, Espagne, Portugal, Bresil et Suede");
// console.log(paysPropose);
// let listePays = ["France", "Espagne", "Portugal", "Bresil", "Suede"]
// let listeCapitles = ["Paris", "Madrid", "Lisbonne", "Brasilia", "Stockholm"];

// function nomCapitale (paysPropose) {
//   for (var i= 0; i<5; i++) {
//     if  (paysPropose === listePays[i])
//     return listeCapitles[i];
//   }
// };
// console.log(nomCapitale(paysPropose));


// Exo6 : 

