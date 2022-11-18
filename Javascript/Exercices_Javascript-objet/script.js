

let tricolore = { 
   feux1 :"rouge",
   feux2 :"vert",
   feux3 :"rouge",
   feux4 :"vert",
   etapeActuel :0,

    etapeSuivante : function() {
        this.etapeActuel ++;
   if (this.etapeActuel == 1) {
    this.feux1 = 'rouge';
    this.feux2 = 'vert';
    this.feux3 = 'rouge';
    this.feux4 = 'vert';
   }

   if (this.etapeActuel == 2) {
    this.feux1 = 'rouge';
    this.feux2 = 'orange';
    this.feux3 = 'rouge';
    this.feux4 = 'vert';
   }
   if (this.etapeActuel == 3) {
    this.feux1 = 'rouge';
    this.feux2 = 'rouge';
    this.feux3 = 'rouge';
    this.feux4 = 'orange';
   }
   if (this.etapeActuel == 4) {
    this.feux1 = 'vert';
    this.feux2 = 'rouge';
    this.feux3 = 'vert';
    this.feux4 = 'rouge';

   }
   if (this.etapeActuel == 5) {
    this.feux1 = 'orange';
    this.feux2 = 'rouge';
    this.feux3 = 'vert';
    this.feux4 = 'rouge';

   }
   if (this.etapeActuel == 6) {
    this.feux1 = 'rouge';
    this.feux2 = 'rouge';
    this.feux3 = 'orange';
    this.feux4 = 'rouge';
    this.etapeActuel = 0;

   }


   
    return `feu 1 : ${this.feux1} feu 2: ${this.feux2} feu 3: ${this.feux3} feu 4: ${this.feux4}`;
}  
}
// console.log(tricolore.etapeSuivante);

console.log(tricolore);
tricolore.etapeSuivante();
console.log(tricolore);
tricolore.etapeSuivante();
console.log(tricolore);
tricolore.etapeSuivante();
console.log(tricolore);
tricolore.etapeSuivante();
console.log(tricolore);
tricolore.etapeSuivante();
console.log(tricolore);
tricolore.etapeSuivante();
console.log(tricolore);
tricolore.etapeSuivante();
console.log(tricolore);
tricolore.etapeSuivante();
console.log(tricolore);
tricolore.etapeSuivante();
console.log(tricolore);