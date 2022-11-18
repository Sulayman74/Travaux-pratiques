
// ! test 1
// ** création de class en JS avec le nom "class"

class voiture {
    // ? ici on appelle le constructeur
    constructor(color, brand) {
        this.couleur = color;
        this.marque = brand;
        this.modele = "308";
        this.reservoir = 0;
        this.capaciteMax = 65;
    }
    remplir(quantite) {
        if (this.reservoir + quantite > this.capaciteMax) {
            console.log("Mec stop la pompe!!!");
        }
        else {
            this.reservoir += quantite;
        }

    }

}

const myCar = new voiture("red", "Peugeot");
myCar.remplir(40);
// console.log(myCar);
// ! test 1 fin

// ? exercice 1

// ** class fastFood {
//     constructor() {
//         this.ingredients = [];
//         this.prix = "";
//         this.nom= "";
//         this.burgerList = [{nom :"Whopper", ingredients:["salade","tomate","oignon","steak"], prix:"5"},{nom :"BigMac", ingredients:["salade","tomate","oignon","steak"], prix:"4"},{nom :"Crispy", ingredients:["salade","tomate","oignon","poulet pané"], prix:"5"},{nom :"McChicken", ingredients:["salade","tomate","poulet pané"], prix:"4"}];

//     }
//     composerBurger(newBurger) {
//         if (Array.isArray(newBurger)) {
//             this.ingredients = newBurger.ingredients;
//             this.prix = newBurger.prix;
//             newBurger.prix = newBurger.length + 5.
//             // console.log("bon choix l'ami");
//             console.log(newBurger);
//         } else {
//             for (const burger of this.burgerList) {
//                 if (newBurger == burger.nom) {
//                   this.ingredients=burger.ingredients;
//                   this.prix=burger.prix;
//                   this.nom = burger.nom
//                   console.log(burger);
//                 }
//               }
//         }
//     }
//     commander(order)
// }

// const myBurger = new fastFood();
// // myBurger.composerBurger(["salade","tomate","oignon","poulet pané"]);

// myBurger.composerBurger("Crispy");

// ! exercice 2

// class fastFood {
//     constructor() {
//         this.ingredients = [];
//         this.priceOrder = "";
//         this.yourOrder = [];
//         this.nom= "";
//         this.burgerList = [{nom :"Whopper", ingredients:["salade","tomate","oignon","steak"], prix: 5 },{nom :"BigMac", ingredients:["salade","tomate","oignon","steak"], prix: 4 },{nom :"Crispy", ingredients:["salade","tomate","oignon","poulet pané"], prix: 5 },{nom :"McChicken", ingredients:["salade","tomate","poulet pané"], prix: 4 }];

//     }
//     composerBurger(newBurger) {
//         if (Array.isArray(newBurger)) {
//             this.ingredients = newBurger.ingredients;
//             this.priceOrder = newBurger.prix;
//             newBurger.prix = newBurger.length + 5.
//             // console.log("bon choix l'ami");
//             console.log(newBurger);
//         } else {
//             for (const burger of this.burgerList) {
//                 if (newBurger == burger.nom) {
//                   this.ingredients=burger.ingredients;
//                   this.priceOrder=burger.prix;
//                   this.nom = burger.nom
//                 //   console.log(burger);
//                 }
//               }
//         }
//     }
//     commander(order,orderName) {
//         if (Array.isArray(order)) {

//            for (const uniqueOrder of order) {

//                for (const burger of this.burgerList) {
//                    if (burger.nom == uniqueOrder) {
//                     this.yourOrder.push(burger);
//                     this.priceOrder += burger.prix;
//                 }
//             }

//         }
//         console.log(orderName);
//             // console.log("bon choix l'ami");
//             // console.log(order);
//         } else{
//             for (const burger of this.burgerList) {
//                 if (burger.nom == order) {
//                     this.yourOrder.push(burger);
//                     this.priceOrder += burger.prix;
//                 }
//             }
//             console.log(orderName);
//         } 
//     }
// }

// const burgerKing = new fastFood();
// // burgerKing.composerBurger(["salade","tomate","oignon","poulet pané"]);

// // ** burgerKing.composerBurger("Crispy");
// burgerKing.commander(["Whopper","BigMac","Crispy"],"Jo")

// TODO 

// let tableau = [1, 2, 3, 4, 5]

// for (const nombre of tableau) {
//     console.log(nombre);
// }

// let tableau1 = [1, 'test', [], false, 5];

// for (let index = 0; index < tableau1.length; index++) {
//     const element = tableau1[index];
//     console.log(element);

// }

// let tableau2 = [1, 20, 3, 54, 5];

// for (const nbr of tableau2) {
//     if (nbr > 10) {
//         console.log(` ${nbr} celui ci est plus grand que 10`);
//     } else {
//         console.log(`${nbr}` + " " + "est plus petit");
//     }
// }

// let tableau3 = [1, 'salut', 3, 'abdess', 5];

// for (const items of tableau3) {
//     if (typeof items == "string") {
//         console.log(items);
//     }
// }

// let tableau4 = [1, 'salut', 3, 'abdess', 5];

// for (const items of tableau4) {
//     if (typeof items == "number") {
//         console.log(items);
//     }
// }

// let tableau5 = [1, 'salut', 3, 'abdess', [1, 40, 50]];

// for (const items of tableau5) {
//     if (Array.isArray(items)) {
//         console.log(items);
//     }
// }

// let tableau6 = [1, 'salut', 3, [16, 36, 56], 'abdess', [1, 40, 50]];

// for (let index = 0; index < tableau6.length; index++) {
//     const element = tableau6[index];

//     if (Array.isArray(element)) {  
//         console.log(element);
//         for (const nbr of element) {
//             console.log(nbr);
//         }
//     }

// }

let tableau7 = [
    { nom: "Whopper", ingredients: ["steak", "sauce", "tomate", "salade", "oignon"], prix: "6€" },
    { nom: "Doublecheese", ingredients: ["steak", "sauce", "tomate", "double cheddar", "oignon"], prix: "6,50€" },
    { nom: "Double Whopper", ingredients: ["steakx2", "sauce", "tomate", "salade", "oignon"], prix: "7€" }
];

// ? for (let index = 0; index < tableau7.length; index++) {
//     let element = tableau7[index];
//     if (element.nom == "Doublecheese") {
//         console.log(element.ingredients);
//         console.log(element.nom);

//         for (let index = 0; index < element.ingredients.length; index++) {
//             let newElement = element.ingredients[index];
//             console.log(newElement);

//         }
//     }
// }

// let tableau10 = [1, true, 5, false, 8];
// for (const iterator of tableau10) {
//     // console.log(iterator);
//     if (typeof iterator == "boolean" ) {
//         tableau10[1] = tableau10[0] + 1 ;
//         tableau10[3] = tableau10[2] + 1;
//         console.log(tableau10);
//     }
// }

// for (let index = 0; index < tableau10.length; index++) {
//     const element = tableau10[index];
//     if (typeof element == "boolean") {
//         // console.log(element);
//         tableau10[index] = index + 1;

//     }
// }
// console.log(tableau10);

// 11) changer les valeurs du tableau pour qu'il resemble à : [1,2,3,4,[5,6]]

// ? let tableau11 = [20,true,23,false,true];

// for (let index = 0; index < tableau11.length; index++) {
//     let element = tableau11[index];
//     // console.log(element);
//     if (typeof element == "boolean") {
//         tableau11[index] = tableau11[index -1 ] + 1;
//         // console.log( tableau11[tableau11.length - 1]);
//         tableau11[tableau11.length - 1] = [tableau11[index] + 1,tableau11[index] + 2];

//     }
// }
// console.log(tableau11);
// 12)  changer les valeurs du tableau x pour qu'il resemble au tableau y

// let tableaux = [1, true, 3, false, true];
// let tableauy = ['a', 'b', 17, '$', 5];

// for (let index = 0; index < tableaux.length; index++) {
//     let element = tableauy[index];
//     console.log(element);
//     tableaux[index] = tableauy[index]

// }
// console.log(tableaux);
// 13)  changer les valeurs du tableau a pour qu'il resemble au tableau b

let tableaua = [1, true, 3, [1, 2, 3], true];
let tableaub = ['a', 'b', 17, ['a', 'b', 'c'], 5];


for (let index = 0; index < tableaub.length; index++) {
    let element = tableaub[index];
   
   
            if (Array.isArray(element)) {
                // console.log(element);
                for (let i = 0; i < element.length; i++) {
                    let item = element[i];
                    console.log(item);
                     
                    
                }
            }
      

}
console.log(tableaua);


