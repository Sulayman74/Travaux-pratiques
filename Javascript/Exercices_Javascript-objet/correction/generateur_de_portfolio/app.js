
let idCarte = 3;

// on ajoute un écouteur d'event au click sur la classe create
document.querySelector('.create').addEventListener('click', function (e) {

    // on récupère la première carte
    let carte = document.querySelector('.card');

    // on clone cette carte 
    let dolly = carte.cloneNode(true);

    // on change la source de l'image du clone en fonction de la variable idCarte
    dolly.querySelector('img').src = `https://picsum.photos/id/${idCarte}/300/300`;

    // on insert le clone dans l'élement cards juste avant l'élement create
    document.querySelector('.cards').appendChild(dolly, document.querySelector('.create'));

    // on incrémente idCarte afin de ne pas avoir deux fois la même image
    idCarte++;
});