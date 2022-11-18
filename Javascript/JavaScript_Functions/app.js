// let multiplicateur = 2;
// let DoubleGame = prompt('Entrez un chiffre je le double');
// function Double(DoubleGame) {
//   return multiplicateur * DoubleGame;
// }


// if (DoubleGame < 100000000000000 ) {
//   alert(Double(DoubleGame));
  
// }


// let nombres = prompt("Entrer un nombre positif ou negatif");

// function plusOuMoins(negatif, positif) {
//   if (nombres > 0) {
//     alert("Nombre positif");
//   } else if (nombres < 0) {
//     alert("Nombre negatif");
//   }
//   return negatif < 0, positif > 0;
// }

// console.log(plusOuMoins(-5, 5));

// let nombres = [];
// for (let index = 0; index < 10; index++) {
//   nombres.push(prompt("Entrez un nombre"));
// }

// function Ordre(nombres) {
//   let triArray = [nombres];
//   return triArray.sort((a, b) => a - b);
// }
// console.log(nombres);

// function capitalCountry(pays, capital) {
//   let TrouveMoiLaCapitale = prompt(
//     "Entrez un pays parmis ces 5 : France Laos Espagne Italie Maroc"
//   );
//   pays = ["France", "Maroc", "Laos", "Espagne", "Italie"];
//   capital = ["Paris", "Rabat", "Vientiane", "Madrid", "Rome"];
//   // switch (TrouveMoiLaCapitale) {
//   //   case pays[0]:
//   //     alert(capital[0]);
//   //     break;
//   //   case pays[1]:
//   //     alert(capital[1]);
//   //     break;
//   //   case pays[2]:
//   //     alert(capital[2]);
//   //     break;
//   //   case pays[3]:
//   //     alert(capital[3]);
//   //     break;
//   //   case pays[4]:
//   //     alert(capital[4]);
//   //     break;

//   //   default:
//   //     break;
//   // }

//   for (let index = 0; index < pays.length; index++) {
//     if (pays[index] == TrouveMoiLaCapitale) {
//       alert(capital[index]);
//     }
  
//   }
// }
// capitalCountry();


let resultat = multiplier('5x5');


function multiplier(multiplication) {
    // console.log(multiplication.split('x'));
    let operateurs = multiplication.split('x');
    return operateurs[0]*operateurs[1];
}

console.log(resultat);