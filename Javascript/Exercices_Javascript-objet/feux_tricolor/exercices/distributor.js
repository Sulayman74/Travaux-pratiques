// faire un script pour un distributeur automatique
// 8 éléments par catégories (liquide et solide) et 10 articles maximum.
//  liquide 3€
//  solide 3,5€

// création de l'objet DISTRIBUTEUR avec des attributs méthodes et getter setter.


let distributeur = {
//  objet dans un objet c'est un attribut items(objet aussi) qui contient deux objets avec des attributs coca pour les liquides mars pour les solides par exemple


    items : {

        liquides: {
            coca: { prix: 3, qte: 10 },
            pepsi: { prix: 3, qte: 10 }, fanta: { prix: 3, qte: 10 }, evian: { prix: 3, qte: 10 }, sprite: { prix: 3, qte: 10 }, drPepper: { prix: 3, qte: 10 }, redBull: { prix: 3, qte: 10 }, monster: { prix: 3, qte: 10 }
        },

        solides: {
            mars: { prix: 2.5, qte: 10 },
            snickers: { prix: 2.5, qte: 10 }, twix: { prix: 2.5, qte: 10 }, kitKat: { prix: 2.5, qte: 10 }, lion: { prix: 2.5, qte: 10 }, madeleine: { prix: 2.5, qte: 10 }, cookie: { prix: 2.5, qte: 10 }, nuts: { prix: 2.5, qte: 10 }
        }
    },
    // liquidItems : [{ marque : "Coca", prix : 3, quantityMax : 10},{ marque : "Pepsi", prix : 3, quantityMax : 10},{ marque : "Fanta", prix : 3, quantityMax : 10},{ marque : "Dr Pepper", prix : 3, quantityMax : 10},{ marque : "7up", prix : 3, quantityMax : 10},{ marque : "Evian", prix : 3, quantityMax : 10},{ marque : "RedBull", prix : 3, quantityMax : 10},{ marque : "Monster", prix : 3, quantityMax : 10}],

    // solidItems : [{ marque : "KitKat", prix : 2.5, quantityMax : 10 },{ marque : "Mars", prix : 2.5, quantityMax : 10 },{ marque : "Snickers", prix : 2.5, quantityMax : 10 },{ marque : "Lion", prix : 2.5, quantityMax : 10 },{ marque : "Chips", prix : 2.5, quantityMax : 10 },{ marque : "Madeleine", prix : 2.5, quantityMax : 10 },{ marque : "Twix", prix : 2.5, quantityMax : 10 },{ marque : "Skittles", prix : 2.5, quantityMax : 10 },{ marque : "Cookie", prix : 2.5, quantityMax : 10 },{ marque : "Nuts", prix : 2.5, quantityMax : 10 }],

    remplir: function (articles) {
       let myLiquids = this.items.liquides;
       let mySolids = this.items.solides;
        for (const elements in myLiquids) {
        //    console.log(elements);
        }
if (articles == myLiquids && mySolids) {
    console.log('hello');
} else {
    console.log('ça marche pas tonton Fouad');
}
        for (const elements in mySolids ) {
        //    console.log(elements);
        }
    }

        // if (articles == this.items) {
        // this.items.liquides = articles
        // this.items.solides = articles
        // }


};
distributeur.remplir(["coca", "pepsi"],["mars","lion"]);




