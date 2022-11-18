let feu_tricolor = {
    // on initialise les feux à l'étape 1
    feu1: 'rouge',
    feu2: 'vert',
    feu3: 'rouge',
    feu4: 'vert',
    // on commence à l'étape 1
    etapeActuel: 0,
    // on défini un tableau contenant toutes les étapes
    etapes: [
        ['rouge','rouge','rouge','vert','orange','rouge'],
        ['vert','orange','rouge','rouge','rouge','rouge'],
        ['rouge','rouge','rouge','vert','vert','orange'],
        ['vert','vert','orange','rouge','rouge','rouge'],
    ],
    etapeSuivante: function () {
        // si nous avons dépassé la dernière étape on reviens à la première
        if (this.etapeActuel == 6) {
            this.etapeActuel = 0;
        } 

        // on met à jours les feu en fonction de l'étape actuelle
        this.feu1 = this.etapes[0][this.etapeActuel];
        this.feu2 = this.etapes[1][this.etapeActuel];
        this.feu3 = this.etapes[2][this.etapeActuel];
        this.feu4 = this.etapes[3][this.etapeActuel];

        //on passe à l'étape suivante 
        this.etapeActuel++;

        return `feu 1 : ${this.feu1} feu 2 : ${this.feu2} feu 3 : ${this.feu3} feu 4 : ${this.feu4}`;

    },
    // on créer la méthode pour passer à l'étape suivante (version simple)
    etapeSuivante1: function () {

        this.etapeActuel++;

        // si nous sommes à l'étape 1 
        if (this.etapeActuel == 1) {
            this.feu1 = 'rouge';
            this.feu2 = 'vert';
            this.feu3 = 'rouge';
            this.feu4 = 'vert';
           
        }

        // si nous sommes à l'étape 1 
        if (this.etapeActuel == 2) {
            this.feu1 = 'rouge';
            this.feu2 = 'orange';
            this.feu3 = 'rouge';
            this.feu4 = 'vert';
          
        }

        // si nous sommes à l'étape 1 
        if (this.etapeActuel == 3) {
            this.feu1 = 'rouge';
            this.feu2 = 'rouge';
            this.feu3 = 'rouge';
            this.feu4 = 'orange';
        }

        // si nous sommes à l'étape 1 
        if (this.etapeActuel == 4) {
            this.feu1 = 'vert';
            this.feu2 = 'rouge';
            this.feu3 = 'vert';
            this.feu4 = 'rouge';
        }

        // si nous sommes à l'étape 1 
        if (this.etapeActuel == 5) {
            this.feu1 = 'orange';
            this.feu2 = 'rouge';
            this.feu3 = 'vert';
            this.feu4 = 'rouge';
        }

        if (this.etapeActuel == 6) {
            this.feu1 = 'rouge';
            this.feu2 = 'rouge';
            this.feu3 = 'orange';
            this.feu4 = 'rouge';
            this.etapeActuel = 0;
        }


       
        
        return `feu 1 : ${this.feu1} feu 2 : ${this.feu2} feu 3 : ${this.feu3} feu 4 : ${this.feu4}`;

    }
}
feu_tricolor.etapeSuivante1();




let feu_circulation = {
    feu1:"rouge",
    feu2:"vert",
    feu3:"rouge",
    feu4:'vert',
    etape:1,
    etapeSuivante: function () {
        this.etape++;
        this.etape == 1 ? this.changerFeu('rouge','vert','rouge','vert') : null
        this.etape == 2 ? this.changerFeu('rouge','orange','rouge','vert') : null
        this.etape == 3 ? this.changerFeu('rouge','rouge','rouge','orange') : null
        this.etape == 4 ? this.changerFeu('vert','rouge','vert','rouge') : null

        if (this.etape == 5) {
            this.feu1 = 'orange'
            this.feu3 = 'vert'
        }
        if (this.etape == 6) {
            this.feu1 = 'rouge'
            this.feu3 = 'orange'
            this.etape = 0;
        }
        
    },
    changerFeu:function (feu1,feu2,feu3,feu4) {
        this.feu1 = feu1;
        this.feu2 = feu2;
        this.feu3 = feu3;
        this.feu4 = feu4;
    },
    feuAutomatique : function() {
        setInterval(() => {
            this.etapeSuivante();
            console.log(this);
        }, 1000);
    }

}