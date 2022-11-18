




let parentNode = document.querySelector('.cards');
// let referenceNode = document.querySelector('.create');

let counter = 3;
let createCard = document.querySelector('.create');
createCard.addEventListener('click', function (e){
    let card = document.querySelector('.card');
    let clonedCard = card.cloneNode(true);
// console.log(card);
// console.log(clonedCard);
// let newPlace = parentNode.insertBefore(clonedCard, createCard);

clonedCard.querySelector('img').src = `https://picsum.photos/id/${counter}/300/300`;
parentNode.insertBefore(clonedCard, createCard);
counter ++;
// image.setAttribute('src',"https://picsum.photos/id/6/300/300");
// console.log(newPlace);


});






// var insertedNode = parentNode.insertBefore(newNode, referenceNode);
