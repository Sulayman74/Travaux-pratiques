// on récupère le bouton d'envoie
let btnSubmit = document.querySelector('.pass_form > input');

// on écoute le click sur ce bouton
btnSubmit.addEventListener('click', function (e) {
    // on annule l'envoi de formulaire 
    e.preventDefault();
    
    // on execute notre fonctions de géneration de mot de passe
    generatePassword();
});



function generatePassword() {
    let uppercase = ['A','B','C','D'];
    let lowercase = ['a','b','c','d'];
    let numbers = [1,2,3,4,5];
    let symbols = ['$','@','#'];
    let allChars = [];
    let pwd = '';
    
    let pwdLength = document.getElementById("longueurpwd").value;
    let isLowerTrue = document.querySelector('#lower').checked; // remplacer par le code pour savoir si l'input est cohcé ou pas
    let isNumberTrue = document.querySelector('#num').checked; // remplacer par le code pour savoir si l'input est cohcé ou pas
    let isSymbolsTrue = document.querySelector('#symbol').checked; // remplacer par le code pour savoir si l'input est cohcé ou pas

    // si la case est cochée on ajoute le tableau à tous les caractères
    if (document.querySelector('#upper').checked) {
        allChars = allChars.concat(uppercase);
    }

    // si la case est cochée on ajoute le tableau à tous les caractères
    if (isLowerTrue) {
        allChars = allChars.concat(lowercase);
    }

      // si la case est cochée on ajoute le tableau à tous les caractères
      if (isNumberTrue) {
        allChars = allChars.concat(numbers);
    }

      // si la case est cochée on ajoute le tableau à tous les caractères
      if (isSymbolsTrue) {
        allChars = allChars.concat(symbols);
    }

    if (!document.querySelector('#upper').checked && !isLowerTrue && !isNumberTrue && !isSymbolsTrue) {
        pwd = 'Veuillez cocher une case'
    }else {
        for (let index = 0; index < pwdLength; index++) {
            let random = Math.floor(Math.random() * allChars.length);
            pwd += allChars[random];
            
        }
    }


    document.getElementById("password").value = pwd;
    
    console.log( pwd);

}

document.getElementById("longueurpwd").addEventListener('change', function (e) {
    document.getElementById("nb_lettres").value = document.getElementById("longueurpwd").value;
    
});


document.getElementById("nb_lettres").addEventListener('change', function (e) {
    document.getElementById("longueurpwd").value = document.getElementById("nb_lettres").value;
    
});