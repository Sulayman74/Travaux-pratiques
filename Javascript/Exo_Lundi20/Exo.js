let age = 10;
let taille = 1.5;
let nbRouesVelo = 4;
let carambars = 25;

// si plus vieux que 10 afficher Bienvenue

// si plus grand que 1.1 afficher Bienvenue

// si plus grand que 1.1 et plus vieux que 8 afficher Bienvenue

// si plus grand que 1.1 ou moins de 4 roues afficher Bienvenue
// sinon afficher ciao

// si plus grand que 1.5 et plus vieux que 12 afficher Bienvenue
// sinon si plus de 2 roues afficher Bienvenue
// sinon donne 10 carambars pour passer

/*
  si moins vieux que 10 déduire 2 carambars

  si moins grand que 1.7 déduire 3 carambars

  si plus de 2 roues afficher Bienvenue 5 carambars

  afficher le nombre de carambars restants

*/
// if ( age > 10) {
// console.log('Bienvenue');
// }

// if (taille > 1.1 ) {
//   console.log('Bienvenue');

// }

// if (taille > 1.1 && age > 8) {
//   console.log('Bienvenue');

// }

// if ( taille > 1.1 || nbRouesVelo < 4) {
//   console.log('bienvenue');

// }
// else console.log('Ciao');

// if (taille > 1.5 && age > 12 || nbRouesVelo > 2) {
//   console.log('Bienvenue');

// } else  {
//   carambars -=10;

// }

// if (age < 10) {
//   carambars -=2;

// } else if (taille < 1.7) {
//   carambars -=3;

// }
//  else if ( nbRouesVelo > 2 ) {
//   carambars-=5;

// }
// console.log(carambars);

// let couleur = ['rouge','bleu','vert'];

// let formes = ['carré','rond','triangle','trepèze','ovale','rectangle' ];

// let tableaux = [couleur,formes];

// console.log(couleur[0]);
// console.log(formes[4]);
// couleur.push('orange','jaune')
// console.log(couleur);
// formes.shift();
// console.log(formes);

// console.log(tableaux[1][1]);
// tableaux[0].shift();
// console.log(tableaux);

// Depuis la variable couleur afficher rouge dans la console

// Depuis la variable formes afficher ovale dans la console

// ajouter 2 couleurs dans le tableau couleur

// supprimer carré du tableau formes

// afficher triangle depuis la vairable tableaux

// supprimer rouge depuis la variable tableaux

// let couleurs = [ ["rouge",250,"bleu"], 234, "orange"]

// for (let i = 6; i != 0; i--) {

//   console.log("hello,world!!" +  i ) ;

// }

// let couleurs = ["rouge","bleu",'vert','jaune'];

// let tailles = ['xs','s','m','l','xl'];

// let styles = ['coton','synthétiques','laines']

// let pulls = [couleurs,tailles,styles];

// en utilisant la variable pulls afficher xl

// en utilisant une boucle for afficher :
// Salut 0
// Salut 1
// Salut 2
// Salut 3

// en utilisant une boucle for afficher :
// Salut 3
// Salut 2
// Salut 1
// Salut 0

// en utilisant une boucle for afficher le contenu de la variable couleurs

// en utilisant une boucle for dans une boucle for afficher le contenu de la variable pulls

// console.log(pulls[1][4]);

// for (let index = 0; index < 4; index++) {
//   console.log("Salut " + index);

// }
// for (let index = 3; index>=0; index--) {
//   console.log("Salut " + index);

// }

// for (let index = 0; index < couleurs.length; index++) {
//   console.log(couleurs[index]);
// }

// for (let index = 0; index < pulls.length; index++) {
//   for (let a = 0; a < pulls[index].length ; a++) {
//     console.log(pulls[index][a]);
//   }
// }

// Bonne mémoire Exo6
// let Mots;
// let Chiffres;
// let index = 0;
// let i = 0;

// for (let index = 0; index < 5; index++) {
//   Mots = prompt("Write a word");
//   console.log(Mots);
//   if (index >= 4) {
//     Chiffres = prompt("Choose a number from 1 to 5");
//     for (let i = 0; i < Mots.length; i++) {
//       Chiffres;
//     }
//   }
// }
// let Resultat = [Mots, Chiffres];
// console.log(Resultat);

let element1 = document.querySelector(".cls_coucou");
console.log(element1);

let element2 = document.getElementById("testId"); // retourne l'élément avec l'id testId
element2.classList.remove("testClass"); // Supprime une classe
console.log(element2);

let element3 = document.querySelector("#testId2 > h2");
element3.style.color = "blue";
console.log(element3);

let element4 = document.querySelector("#testId2 > img"); // retourne l'élément avec l'id testId
element4.setAttribute("src", "https://picsum.photos/300/300?random");
console.log(element4);
//  Modifie le texte d'un élément

let element = document.querySelector("#testId"); // retourne l'élément avec l'id testId
element.innerHTML = "<p> Bonjour </p>"; // modifie le html contenu par cette balise

let i = 0;
element4.setAttribute("src", "https://picsum.photos/300/300?random" + i);
setInterval(() => {
  element4.setAttribute("src", "https://picsum.photos/300/300?random" + i);
  i++;
}, 2000);

document.addEventListener("load", function (e) {});

// ExoAddlistner

// ajouter un listener au click sur l'image: changer la font-size du h2

let image = document.querySelector("#testId2 > img");
image.addEventListener("click", function (e) {
  console.log(e);
});

// let Changeh2 = document.querySelector("#testId2 > h2")
// Changeh2.addEventListener('click', function (e) {
// Changeh2.style.font-style = "50px";
// });

// quand la souris entre sur l'image on écris 'souris sur image' dans le h2

// quand la souris sort de l'image on écris   'souris hors image'

// au click sur le bouton btn_image on ajoute une image à la place de <p>coucou</p>
// puis au click sur le bouton on change toutes les images (voir foreach)
