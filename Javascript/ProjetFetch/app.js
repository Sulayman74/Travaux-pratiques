let url = "https://randomuser.me/api/?results=100&nat=FR";
// les images portrait des personnes
let portrait = document.querySelector("img");
// console.log(portrait);
// la carte original à cloner
let cardOriginal = document.querySelector(".card");
// console.log(cardOriginal);
//  le clone créé
//  création du clone de la carte
// console.log(cardClone);

// requete API de la variable url ligne 1
fetch(url)
  // quand c'est bon on recoit la réponse
  .then((response) => response.json())

  .then(function (data) {
    for (const users of data.results) {
      document.querySelector("h4").innerText = users.name.title;
      document.querySelector(".nom").innerText = users.name.last;
      document.querySelector(".prenom").innerText = users.name.first;
      document.querySelector(".age").innerText = users.dob.age;
      portrait.setAttribute("src", `${users.picture.medium}`);

      //   console.log(users.picture.medium + " " + users.name.last);
      //   console.log(users.dob.age);
      cardClone = cardOriginal.cloneNode(true);
      document.querySelector(".container").append(cardClone);
    }
    // console.log(data.results);
  })
  // sinon quand c'est pas bon
  .catch(function (error) {
    console.log(error);
    console.log("oups!!");
  });
