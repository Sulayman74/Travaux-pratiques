// let age = prompt ('Quel âge as tu?')

// if (age < 18) {
//     alert ('âge requis nécessaire non valide')
// }

// let Today = prompt('Quel jour est-on?')

// if (Today == 1 ) {
//     alert ('Lundi')
// }
// else if (Today == 2 ) {
//     alert ('Mardi')
// }
// else if (Today == 3 ) {
//     alert ('Mercredi')
// }
// else if (Today == 4 ) {
//     alert ('Jeudi')
// }
// else if (Today == 5 ) {
//     alert ('Vendredi')
// }
// else if (Today == 6 ) {
//     alert ('Samedi')
// }
// else if (Today == 7 ) {
//     alert ('Dimanche')
// }
// else alert ('Non Valide')

// switch (Today) {
//     case '1':
//         alert ('Lundi')
//         break;

//     case '2':
//         alert ('Mardi')
//         break;
//     case '3':
//         alert ('Mercredi')
//         break;
//     case '4':
//         alert ('Jeudi')
//         break;
//     case '5':
//         alert ('Vendredi')
//         break;
//     case '6':
//         alert ('Samedi')
//         break;
//     case '7':
//         alert ('Dimanche')
//         break;
// default: alert ('valeur non valide')
// }

// for (let counter = 30; counter >=0; counter--) {
//     console.log(counter)

// }

// let Devinette= prompt('Devinez le nombre')

// function RandomNumber (min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// var Nombres = RandomNumber (1,20);

// if ( Nombres < Devinette ) {
//     alert('try again!! your number is too big')
// }
// else if ( Nombres > Devinette ) {
//     alert ('try again!! your number is too small')

// }
// else {
//     alert('You won!!')
// }
// console.log(Nombres);

// var AttemptMax = 4;
// let Devinette
// let attempts = 0;

// function RandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// var Nombres = RandomNumber(1, 20);
// console.log(Nombres);

// while (attempts < AttemptMax && Nombres!=Devinette){

//      Devinette = prompt("Devinez le nombre");
//     if (Nombres < Devinette) {
//         alert("try again!! your number is too big");
//     } else if (Nombres > Devinette) {
//         alert("try again!! your number is too small");
//     } else if (Nombres == Devinette) {
//         alert("you won!!!!")
//     }
//     attempts ++

// }
// if (attempts == AttemptMax && Nombres!=Devinette) {
//     alert("Sorry too much attempts try again")
// }

// let mots = prompt('Ecrivez un mot');
// var siximèmefois = 6;
// let entre1et5 = [1, 2, 3, 4, 5]
// console.log(mots);

// for (let ChoseANumber6x = 0; ChoseANumber6x < siximèmefois; ChoseANumber6x++) {
//     // let Number = prompt('Choisissez un nombre entre 1 et 5');

// }

// if (UnderAge == AgeAccept) {
//     alert('You are welcome');
// }
// else if (UnderAge == Denied) {
//     alert('Acces Denied you are under age')
// }
// else {
//     while (UnderAge != AgeAccept || UnderAge != Denied) {
//     alert('choose yes or no');
//     UnderAge = prompt("Avez-vous au moins 18 ans?");

// }
// }
// while (UnderAge != AgeAccept || UnderAge != Denied) {

// }

//           let UnderAge = prompt("Are you at least 18 years old?");
//           let AgeAccept = "yes";
//           let Denied = "no";

// switch (UnderAge) {
//   case AgeAccept:
//     alert("You are welcome");
//     break;
//   case Denied:
//     alert("Acces Denied you are under age");
//     break;
//   default:
//     while (UnderAge != AgeAccept & UnderAge != Denied) {
//             alert('choose yes or no');
//       UnderAge = prompt("Are you at least 18 years old?");
//       switch (UnderAge) {
//         case AgeAccept:
//           alert("You are welcome");
//           break;
//         case Denied:
//           alert("Acces Denied you are under age");
//           break;
//       }
//     }
// }

let hamburgerButton = document.querySelector(".nav-toggler");
let navigation = document.querySelector("nav");
// let leave = document.querySelector(".naviBar")

// leave.addEventListener('mouseleave', function (e) {
//   leave.classList.toggle("leave");
// });

hamburgerButton.addEventListener("click", toggleNav);
function toggleNav() {
  hamburgerButton.classList.toggle("active");
  navigation.classList.toggle("active");
}

// Exercice 8 : Le jeu du pendu
// Les règles du jeu :
// Le script choisit au hasard un des mots (entre 7 et 10 lettres) qui ont été
// préalablement stockés dans un tableau.
// On affiche au joueur le nombre de lettres du mot dans un prompt (ex pour
// coucou on affiche : _ _ _ _ _ _)
// le joueur entre une lettre, si c'est une des lettres on l'affiche dans le prompt
// sinon on propose de nouveau de choisir une lettre
// le joueur n'a que 13 chances
// Une alerte avertira le joueur si il a gagné ou perdu
// Les chances restantes seront affichées en console

// let Words = ["casquette", "ordinateur", "montagne", "voiture", "telephone"];

// let random = Math.floor(Math.random() * Words.length);
// let RandomWords = Words[random];
// // console.log(RandomWords);

// let NbrLetter = RandomWords.length;
// // console.log(NbrLetter);

// let HiddenWords = [];

// for (let index = 0; index < NbrLetter; index++) {
//   // console.log(RandomWords[index]);
//   HiddenWords.push("_");
// }
// let gagne = false;
// let tentatives = 13;
// // var letters = prompt(HiddenWords);
// do {
//   let reponse = prompt("Choisis une lettre : " + HiddenWords);
//   console.log(RandomWords);
//   let hasBeenFound = false;

//   for (let index = 0; index < RandomWords.length; index++) {
//     if (RandomWords[index] == reponse) {
//       console.log("bonne lettre");
//       console.log(reponse);
//       HiddenWords[index] = reponse;
//       hasBeenFound = true;
//     }
//   }
//   if (!HiddenWords.includes("_")) {
//     gagne = true;
//     alert('Nice Job');
//   }
//   if (!hasBeenFound) {
//     tentatives --;
//   }
//   if (tentatives == 0) {
//     alert('c\'est perdu!');
//   }
// } while (gagne != true && tentatives != 0)
// alert(HiddenWords);

// let mot = "Gary Paul";
// let yesHere = prompt('choisis une lettre');
// let hiddenLetter = ''
// for (let index = 0; index < mot.length; index++) {
//   if (mot[index] == yesHere) {
//   console.log("oui il y a un " + yesHere);
//   hiddenLetter += '@';
// }
// else {
//   hiddenLetter += mot[index];
// }
// }
// console.log(mot);
// alert(hiddenLetter);
// EXercice 6

// let reponses = [];

// // let reponse1 = prompt('Mot 1');
// // reponses.push(reponse1);

// let nbMot = prompt('combien de mot voulez vous ? ');

// for (let index = 0; index < nbMot; index++) {
// reponses.push(prompt(`Mot ${index + 1}`));
// }

// let posMot = prompt(`choisissez un chiffre entre 1 et ${nbMot}`);

// var randomWordSplitted = RandomWords.split('');
// console.log(randomWordSplitted.map(l => '_').join());

// console.log(reponses[posMot - 1]);
