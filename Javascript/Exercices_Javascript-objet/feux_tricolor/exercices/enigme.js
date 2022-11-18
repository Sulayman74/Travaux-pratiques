let enigme = {
  riveGauche: ["berger", "loup", "chou", "chèvre"],
  riveDroite: [],
  traverser: function (matelot = 0) {
    let bergerIsLeft = this.riveGauche.includes("berger");
    let matelotIsLeft = this.riveGauche.includes(matelot);

    if (bergerIsLeft && matelotIsLeft && matelot != 0) {
      let indexMatelot = this.riveGauche.indexOf(matelot);
      this.riveGauche.splice(indexMatelot, 1);
      this.riveDroite.push(matelot);

  
      let indexBerger = this.riveGauche.indexOf("berger");
      this.riveGauche.splice(indexBerger, 1);
      this.riveDroite.push("berger");


    } else if (bergerIsLeft == false && !matelotIsLeft && matelot != 0) {
      let indexMatelot = this.riveDroite.indexOf(matelot);
      this.riveDroite.splice(indexMatelot, 1);
      this.riveGauche.push(matelot);
      
      let indexBerger = this.riveDroite.indexOf("berger");
      this.riveDroite.splice(indexBerger, 1);

      this.riveGauche.push("berger");
    } else if (bergerIsLeft && matelot == 0) {
      let indexBerger = this.riveGauche.indexOf("berger");

      this.riveGauche.splice(indexBerger, 1);
      this.riveDroite.push("berger");
      
    } else if (!bergerIsLeft && matelot == 0) {
      let indexBerger = this.riveDroite.indexOf("berger");

      this.riveDroite.splice(indexBerger, 1);

      this.riveGauche.push("berger");
    }
    this.verifierRives();
  },
  initialisation: function () {
    this.riveDroite = [];
    this.riveGauche = ["berger", "loup", "chou", "chèvre"];
    // console.log(enigme);
  },

  get afficherRives(){
    return `Rive gauche : ${this.riveGauche} et Rive droite : ${this.riveDroite}`
  //  console.log(this.riveDroite);
  // console.log(this.riveGauche);

},

verifierRives : function() {
  let bergerIsLeft = this.riveGauche.includes("berger");
  let wolfLeft = this.riveGauche.includes("loup");
  let goatLeft = this.riveGauche.includes("chèvre");
  let cabbageLeft = this.riveGauche.includes("chou");

  if (wolfLeft && goatLeft && !bergerIsLeft || !wolfLeft && !goatLeft && bergerIsLeft) {
    alert('the wolf ate the goat');
    this.initialisation();
  }
  if (cabbageLeft && goatLeft && !bergerIsLeft || !cabbageLeft && !goatLeft && bergerIsLeft) {
    alert('the goat ate the cabbage');
    this.initialisation();
  }
if (!bergerIsLeft && !wolfLeft && !goatLeft && !cabbageLeft) {
  alert("c'est gagné!!");
  this.initialisation();
}

}
};


// let objet = {
//   nom : "Nems",
//   prix : "1,50",
//   ingredients: ['carotte','poulet','oignons'],

// };
// let burger = {
//   nom : "Whooper",
//   prix : "6,50",
//   ingredients: ['steak','tomate','oignons'],

// };
// let bigMac = {
//   nom : "BigMac",
//   prix : "6,50",
//   ingredients: ['double steak','pain','oignons'],

// };

// let menu = [ objet,burger,bigMac];

// let menu1 = [{ nom:"Nems",  prix : "1,50",ingredients: ['carotte','poulet','oignons']}, {nom : "Whooper",
// prix : "6,50",
// ingredients: ['steak','tomate','oignons']}, {
//   nom : "BigMac",
//   prix : "6,50",
//   ingredients: ['double steak','pain','oignons'],

// },{
//   nom : "McChicken",
//   prix : "6,50",
//   ingredients: ['poulet pané','pain','oignons'],

// },{
//   nom : "BigMac",
//   prix : "6,50",
//   ingredients: ['double steak','pain','oignons'],

// }];

// console.log(menu1[1].nom);

// menu1.forEach(nom => {
// console.log(nom.nom);  
// });

// for (const burger of menu1) {
//   console.log(burger.nom);  
// }
// // menu1.push(burger);

// // menu1.push(objet);

// // menu1.push(bigMac);

// console.log(menu1[1].ingredients[1]);

// - Une liste de burger contenant un nom, une liste d’ingrédients et un prix de burger

let burger = {
  ingredients : [],
  prix : 0,
  burgers : [{nom: "Whopper", ingredients : ["steak","sauce","tomate","salade","oignon"],prix :"6€"},{nom: "Doublecheese", ingredients : ["steak","sauce","tomate","double cheddar","oignon"],prix :"6,50€"},{nom: "Double Whopper", ingredients : ["steakx2","sauce","tomate","salade","oignon"],prix :"7€"}],

composerBurger : function (myBurger) {

  if (Array.isArray(myBurger) == true) {
    this.ingredients = myBurger.ingredients;
    this.prix= myBurger.prix;
    myBurger.prix = myBurger.length + 5;
    alert('Bon choix');
 
  }else {

    for (const burger of this.burgers) {
      if (myBurger == burger.nom) {
        this.ingredients=burger.ingredients;
        this.prix=burger.prix;
      }
      
    }
}

  
}

};
// burger.composerBurger(["pain","poulet pané","mayo"]);
// console.log(burger);