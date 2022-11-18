/*

Ex 1 

*/
/*
function multiplicationParDeux (chiffre){
  return chiffre * 2;
}


let resultat = multiplicationParDeux(4);

console.log(resultat);
*/
/*

Ex 2

*/
/*
function isPositive(chiffre) {
    
  if(chiffre >= 0) {
    return true;
  }else {
    return false;
  }
 
}

let resultat = isPositive(0);

console.log(resultat)
*/


/*

Ex 3

*/
/*
function sortNumbers (chiffre1, chiffre2 , chiffre3) {
  
  let orderedArray = [];
  
  if(chiffre1 < chiffre2 && chiffre1 < chiffre3)
   {
     orderedArray.push(chiffre1);
   }else if (chiffre2 < chiffre1 && chiffre2< chiffre3){
     orderedArray.push(chiffre2);
   }else {
      orderedArray.push(chiffre3);
   }
  
    if((chiffre1 > chiffre2 && chiffre1 < chiffre3) || ( chiffre1 < chiffre2 && chiffre1 > chiffre3 ))
   {
     orderedArray.push(chiffre1);
   }else if ((chiffre2 > chiffre1 && chiffre2 < chiffre3) || ( chiffre2 < chiffre1 && chiffre2 > chiffre3 )){
     orderedArray.push(chiffre2);
   }else {
      orderedArray.push(chiffre3);
   }
    

    if (orderedArray.indexOf(chiffre1) == -1){
       orderedArray.push(chiffre1);
    }else if (!orderedArray.indexOf(chiffre2)  == -1) {
       orderedArray.push(chiffre2);
    }else {
       orderedArray.push(chiffre3);
    }
     return orderedArray;
}

let result = sortNumbers (7, 2 , 10);

console.log(result);

*/

/*

Ex 4

*/

/*
function checkEmail(email) {
  
  // if(email.length > 7 && email.includes('@') &&  email.includes('.') ){
  
  if(email.length < 7 || email.includes('@') == -1 ||  email.indexOf('.') == -1){
    return false;
  }else {
    return true;
  }
  
  
}


let result = checkEmail('monemailsupercool@test.fr') 
console.log(result);

*/

/*

Ex 5

*/
/*
function getCapital(country) {
  
  switch (country) {
      
    case 'france':
      return  'paris';

      case 'espagne':
      return  'madrid';
 
      case 'italie':
       return  'rome';

      case 'hongrie':
        return  'budapest';
  
      case 'suisse':
        return  'berne';

      default : 
      return 'Pas dans notre tableau'
      
  }
  
}

let resultat = getCapital('test');

console.log(resultat)

*/

/*

Ex 6

*/

/*
function multiplication(calcul) {
  
  let numbers = calcul.split("x");
  
  return numbers[0] * numbers[1];
  
}

let result = multiplication("2x8");

console.log(result)

*/


// MEs fonctions : 

// exercice 5 

// let pays = prompt('Pays?');

// let capitale = capitalesDuPays(pays);

// alert(capitale);

// function capitalesDuPays(pays) { 
//     let capitales = [];

//     capitales.push(['France','Espagne','Italie','Portgual']);
//     capitales.push(['paris','madrid','rome','lisbonne']);
//     console.log(capitales);

//     for (let index = 0; index < capitales[0].length; index++) {
//         if (capitales[0][index] == pays) {
//             return capitales[1][index];
//         }
//     }

//     // capitales['France'] = "paris";
//     // capitales['Espagne'] = "madrid";
//     // capitales['Italie'] = "rome";
//     // capitales['Portugal'] = "lisbonne";
//     // return capitales[pays];

    
// }


// exercice 6

// on execute la fonction multiplier en mettant le resulta
// dans la variable resultat
// let resultat = multiplier('3x50');
// console.log(resultat);


// // on créer la fonction multiplier avec comme paramètre  multiplication

// function multiplier(multiplication) { // 3x5

//     // on sépare le param en fonction de x 
//     let operateurs = multiplication.split('x');

//     console.log(operateurs);

//     // on multiplie le premier index par le deuxieme 
//     // puis on renvoie le resultat
//     return operateurs[0] * operateurs[1];
// }