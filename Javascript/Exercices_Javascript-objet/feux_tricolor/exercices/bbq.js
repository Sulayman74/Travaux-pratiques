let barbecue = {
    etatDeLaMerguez: "crue",


    cuireMerguez: function () {

        setTimeout(() => {
            alert('Utilisez sortirMerguez');
            this.etatDeLaMerguez = "cuit";
        }, 10000);

        setTimeout(() => {
          if (this.etatDeLaMerguez == "") {
            alert("Bon appétit l'ami!!! Le barbecue c'est la vie");
                    }

                    else {
                     alert("c'est cramé Jo");
                     this.etatDeLaMerguez = "cramée";
                    }
  
        }, 15000);
          
    },
    sortirMerguez: function () {
this.etatDeLaMerguez = "";
    },

    ajouterMerguez : function () {
        this.etatDeLaMerguez = "crue";
      this.cuireMerguez();
        
    }
};





