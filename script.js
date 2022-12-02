const array = [1, 2, 3, 4, 5];

// création de fonction callback une fonction dans une fonction

function multiplier(arr, fonction) {
  const newArr = [];

  // ** création d'un tableau qu'on remplit avec push

  for (let index = 0; index < arr.length; index++) {
    newArr.push(fonction(arr[index]));
  }

  return newArr;
}

//  sur une ligne qui retourne qu'une seule chose on peut simplifier la syntaxe
const resultat = multiplier(array, (value) => value * 3);

const result = multiplier(array, (value) => {
  return value * 4;
});

console.log(resultat);
console.log(result);

//  ** ici avec la méthode .map

const output = array.map((valeur) => valeur * 2);
console.log(output);
