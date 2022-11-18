// let usine = {
//   // on défini la couleur par défaut de notre voiture
//   couleur: "blue",
//   //on créer une méthode qui changera notre couleur
//   changerCouleur: function (newColor, posVoiture = 0) {
//     // on change la valeur de l'attribut couleur de notre voiture
//     this.couleur = newColor;
//     // on récupère tous les élements de notre voiture
//     let elements;

//     if (posVoiture <= 0) {
//       elements = document.querySelectorAll(".voiture:nth-child(1) .element");
//     } else {
//       elements = document.querySelectorAll(
//         `.voiture:nth-child$(${posVoiture}) .element`
//       );
//     }
//     console.log(elements);
//     // pour chaque élement on change la couleur de background en
//     // fonction de l'attribut couleur
//     elements.forEach((element) => {
//       element.style.backgroundColor = this.couleur;
//     });
//   },

//   // on définit une valeur d'attribut par défaut en ajoutant =
//   dupliquer: function (posVoiture = 0) {
//     let voiture;
//     if (posVoiture <= 0) {
//       // on selectionne le premier élement qui possède la classe voiture
//       voiture = document.querySelector(".voiture");
//     } else {
//       // on selectionne toutes les voitures
//       let voitures = document.querySelectorAll(".voiture");
//       // parmi ces dernières, on récupère celle de l'utilisateur
//       voiture = voitures[posVoiture - 1];
//     }

//     //on créer un clone de la voiture
//     let clone = voiture.cloneNode(true);

//     // puis on l'insert après le dernier enfant de l'élement parking
//     document.querySelector(".parking").append(clone);
//   },
// };

let usine = {
  // on défini la couleur par défaut de notre voiture
  couleur: "blue",
  //on créer une méthode qui changera notre couleur
  changerCouleur: function (newColor, posVoiture = 0) {
    // on change la valeur de l'attribut couleur de notre voiture
    this.couleur = newColor;

    let elements;
    // on récupère tous les élements de notre voiture
    if (posVoiture <= 0) {
      elements = document.querySelectorAll(".voiture:nth-child(1) .element");
    } else {
      elements = document.querySelectorAll(
        `.voiture:nth-child(${posVoiture}) .element`
      );
    }

    // pour chaque élement on change la couleur de background en
    // fonction de l'attribut couleur
    elements.forEach((element) => {
      element.style.backgroundColor = this.couleur;
    });
  },
  changerCouleurFatiha: function (newColor, posVoiture = 1) {
    // on change la valeur de l'attribut couleur de notre voiture
    this.couleur = newColor;

    let voitures = document.querySelectorAll(".voiture");

    let voiture = voitures[posVoiture - 1];
    // on récupère tous les élements de notre voiture
    elements = voiture.querySelectorAll(".element");

    // pour chaque élement on change la couleur de background en
    // fonction de l'attribut couleur
    elements.forEach((element) => {
      element.style.backgroundColor = this.couleur;
    });
  },

  // on définit une valeur d'attribut par défaut en ajoutant =
  dupliquer: function (posVoiture = 0) {
    let voiture;
    if (posVoiture <= 0) {
      // on selectionne le premier élement qui possède la classe voiture
      voiture = document.querySelector(".voiture");
    } else {
      // on selectionne toutes les voitures
      let voitures = document.querySelectorAll(".voiture");
      // parmi ces dernières, on récupère celle de l'utilisateur
      voiture = voitures[posVoiture - 1];
    }

    //on créer un clone de la voiture
    let clone = voiture.cloneNode(true);

    // puis on l'insert après le dernier enfant de l'élement parking
    document.querySelector(".parking").append(clone);
  },

  newCarNcolor: function (color, posVoiture = 0) {
    let voitures = document.querySelectorAll(".voiture");
    let voiture;
    voiture = document.querySelector(".voiture:nth-child(1)");
    clone = voiture.cloneNode(true);
    let parking = document.querySelector(".parking");

    let elements = clone.querySelectorAll(".element");

    elements.forEach((element) => {
      element.style.backgroundColor = color;
    });
    if (voitures.length < posVoiture) {
      parking.append(clone);
    } else {
      parking.insertBefore(
        clone,
        document.querySelector(`.voiture:nth-child(${posVoiture}`)
      );
    }
  },
};

// Étape 1 : créer une méthode qui change la couleur de la voiture en changeant également la couleur dans l'objet
// Étape 2 : Créer une méthode qui permet de dupliquer la voiture
// Étape 3 : Si la méthode dupliquer n'a pas de numéro en paramètre on créer un élément qui possède la couleur de l'objet voiture
// Étape 4 : Si la méthode dupliquer possède un numéro x, on duplique la voiture x
// Étape 5 : On ajoute la possibilité de changer la couleur de la voiture X
// Étape 6 : On ajoute une voiture à la position X du parking avec la couleur désirée (création d'une nouvelle méthode)

usine.dupliquer();
usine.dupliquer();
usine.dupliquer();
usine.dupliquer();
usine.dupliquer();

usine.newCarNcolor("green", 4);
usine.newCarNcolor("green", 9);
usine.newCarNcolor("coral", 2);
