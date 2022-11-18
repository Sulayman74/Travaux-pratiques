// Exercice 1

// let age_user  = prompt("ton age ?");

// console.log(age_user);

// if (age_user >= 18) {
//     alert('welcome');
// }else {
//     alert('ciao');
// }

// EXercice 2



// switch (prompt("Jour ? ")) {
//   case "1":
//     alert("lundi");
//     break;

//   case "2":
//     alert("Mardi");
//     break;

//   case "3":
//     alert("mercredi");
//     break;

//   case "4":
//     alert("jeudi");
//     break;

//   case "5":
//     alert("Vendredi");

//     break;
//   case "6":
//     alert("Samedi");
//     break;

//   case "7":
//     alert("Dimanche");
//     break;

//   default:
//     alert('Mauvais chiffre')
//     break;
// }

// EXercice 3

// for (let index = 30; index >= 0; index--) {
//     console.log(index);    
// }


// let index = 30;
// let isLoopFinished = false;

// do {
    
//     console.log(index);
//     index--;

//     if (index == 0) {
//         isLoopFinished = true;
//     }

// } while (isLoopFinished != true);


// EXercice 4

// let random = Math.floor(Math.random() * 20) + 1;

// let reponse = '';

// let gagne = false;

// do {

// reponse = prompt('nombre entre 1 et 20');

// if (reponse > random) {
//     alert('Le nombre est plus petit')
// } else if (reponse < random) {
//     alert('Le nombre est plus grand')
    
// } else {
//     alert('c\'est gagné')
//     gagne = true;
    
// }
    
// } while (gagne != true);

// } while (gagne == false);
// } while (!gagne);
// } while (reponse != random);




// EXercice 5

// let random = Math.floor(Math.random() * 20) + 1;

// let reponse = '';

// let gagne = false;

// let tentatives = 0;

// do {

// reponse = prompt('nombre entre 1 et 20');

// if (reponse > random) {
//     alert('Le nombre est plus petit')
// } else if (reponse < random) {
//     alert('Le nombre est plus grand')
    
// } else {
//     alert('c\'est gagné')
//     gagne = true;
    
// }
//     tentatives++;
//     if (tentatives == 4) {
//         alert('perdu');
//     }
// } while (gagne != true && tentatives < 4 );



// EXercice 6


// let reponses = [];

// // let reponse1 = prompt('Mot 1');
// // reponses.push(reponse1);

// let nbMot = prompt('combien de mot voulez vous ? ');

// for (let index = 0; index < nbMot; index++) {
// reponses.push(prompt(`Mot ${index + 1}`));
// }


// let posMot = prompt(`choisissez un chiffre entre 1 et ${nbMot}`);

// console.log(reponses[posMot - 1]);

// EXercice 7

// var dates = [1990, 2001, 1950, 1998, 2004, 2018, 1989, 1884, 1968, 2021];

// let annee = new Date();

// annee = annee.getFullYear();

// dates.forEach(date => {

//     if ((annee - date) >= 30) {
//         console.log(date);
//     }

// });

// voitures.forEach(voiture => {
//     console.log(voiture);
// });

// let voitures = "ferrari";
// for (let index = 0; index < voitures.length; index++) {
//     const lettre = voitures[index];
//     console.log(lettre);
// }


let btnSubmit = document.getElementById('boutonPass');

btnSubmit.addEventListener('click', function (e) {
e.preventDefault();
generatePassword();
});


// var randomUp = Math.floor(Math.random() * uppercase.length);
// var randomlow = Math.floor(Math.random() * lowercase.length);
// var randomNbr = Math.floor(Math.random() * numbers.length);
// var randomSym = Math.floor(Math.random() * symbols.length);

let jauge = document.getElementById('longueurpwd');
jauge.addEventListener('click', function (e){
   console.log(jauge.value); 
for (let index = 0; index < jauge.length; index++) {
   generatePassword();
   console.log(index);
}
});



// jauge.addEventListener('click', function () {
//     document.getElementById('longueurpwd').value;
// });

function generatePassword() {

    let uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let lowercase = ['a','b','c','d','e','f','i','j','k','l','m','o','p','q','r','s','t','u','v','w','x','y','z'];
    let numbers = ['1','2','3','4','5','6','7','8','9','0'];
    let symbols = ['#','@','/','$','*','€'];
    let allChars =[];



    
    let isUpperTrue = document.getElementById('upper').checked;
    let isLowerTrue = document.getElementById('lower').checked; // rajouter le code pour true
    let isNumbererTrue = document.getElementById('num').checked; // rajouter le code pour document.getElementById('upper').checked;
    let isSymbolTrue = document.getElementById('symbol').checked; // rajouter le code pour true

    
    if (isUpperTrue) {
        allChars = allChars.concat(uppercase);
    }
 
    if (isLowerTrue == true) {
        allChars = allChars.concat(lowercase);
        
    }
    if (isNumbererTrue == true) {
        allChars = allChars.concat(numbers);
        
    }
    if (isSymbolTrue== true) {
        allChars = allChars.concat(symbols);
        
    }
    console.log(allChars);
    console.log(isUpperTrue);
}






    



// console.log(uppercase[randomUp]);
// console.log(lowercase[randomlow]);
// console.log(numbers[randomNbr]);
// console.log(symbols[randomSym]);



// console.log(password);

// let button = document.getElementById('boutonPass');

// button.addEventListener('click', function (e) {
//     console.log('hello');

// });


