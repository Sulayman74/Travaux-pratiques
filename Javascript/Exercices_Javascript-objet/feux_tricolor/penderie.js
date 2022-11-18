let linge = [
  {
    nom: "laitvis",
    estPropre: true,
    type: "jean",
  },
  {
    nom: "de nîmes",
    estPropre: false,
    type: "jean",
  },
  {
    nom: "kaparole",
    estPropre: true,
    type: "jean",
  },
  {
    nom: "saperdry",
    estPropre: false,
    type: "tee-shirt",
  },
  {
    nom: "nike-l",
    estPropre: false,
    type: "tee-shirt",
  },
  {
    nom: "hard rap cofee",
    estPropre: true,
    type: "tee-shirt",
  },
  {
    nom: "nazeA",
    estPropre: true,
    type: "tee-shirt",
  },
  {
    nom: "pumba",
    estPropre: true,
    type: "chaussette",
  },
  {
    nom: "nike-l",
    estPropre: false,
    type: "chaussette",
  },
  {
    nom: "ribok",
    estPropre: false,
    type: "chaussette",
  },
  {
    nom: "filo",
    estPropre: true,
    type: "chaussette",
  },
  {
    nom: "le poulet sportif",
    estPropre: true,
    type: "chaussette",
  },
];

let caravane = {
  tiroir: [],
  penderie: [],
  etagere: [],
  panierLingeSale: [],
  machineAlaver: {
    estVerouillee: false,
    contenu: [],

    laverLeLinge: function () {
      this.estVerouillee = true;
      setTimeout(() => {
        for (const laundry of this.contenu) {
          laundry.estPropre = true;
        }
        this.estVerouillee = false;
      }, 1000);
    },
  },

  rangerLeLinge: function (laundries) {
    for (const laundry of laundries) {
      if (laundry.estPropre) {
        switch (laundry.type) {
          case "jean":
            this.etagere.push(laundry);
            break;
          case "chaussette":
            this.tiroir.push(laundry);
            break;
          case "tee-shirt":
            this.penderie.push(laundry);
            break;

          default:
            break;
        }
      } else {
        this.panierLingeSale.push(laundry);
      }
    }
  },
  lancerLaMachine: function () {
    if (this.machineAlaver.estVerouillee == false) {
      for (const laundry of this.panierLingeSale) {
        this.machineAlaver.contenu = this.panierLingeSale;
      }

      this.panierLingeSale = [];
      this.machineAlaver.laverLeLinge();
    }
  },

  viderLaMachine: function () {
    // if (this.machineAlaver.estVerouillee == false) {
    //   this.rangerLeLinge(linge);
    // }
    this.machineAlaver.estVerouillee == false
      ? this.rangerLeLinge(this.machineAlaver.contenu)
      : null;
    this.machineAlaver.contenu = this.machineAlaver.contenu = [];
  },
};

let bouton = document.getElementById("onpower");
let bouton1 = document.getElementById("firstbtn");
let bouton2 = document.getElementById("secondbtn");
let bouton3 = document.getElementById("thirdbtn");
let mesBoutons = document.querySelectorAll("button");
let screen = document.querySelector(".ecran");
let washingAnim = document.querySelector(".machinecentre");

bouton.addEventListener("click", function (e) {
  let affichage = (screen.innerText = "machine allumée");
  setTimeout(() => {
    affichage = screen.innerText = " ";
  }, 1500);

  mesBoutons.forEach((bouton) => {
    bouton.classList.add("active");
  });
});
bouton1.addEventListener("click", function (e) {
  affichage = screen.innerText = "linge rangée";
  caravane.rangerLeLinge(linge);
  setTimeout(() => {
    affichage = screen.innerText = " ";
  }, 1500);
});
bouton2.addEventListener("click", function (e) {
  caravane.lancerLaMachine();
  affichage = screen.innerText = "machine lancée";
  washingAnim.classList.add("active");

  setTimeout(() => {
    affichage = screen.innerText = " ";
  }, 1500);
});
bouton3.addEventListener("click", function (e) {
  caravane.viderLaMachine();
  affichage = screen.innerText = "machine vidée";
  washingAnim.classList.remove("active");
  setTimeout(() => {
    affichage = screen.innerText = " ";
    mesBoutons.forEach((bouton) => {
      bouton.classList.remove("active");
    });
  }, 1500);
});
