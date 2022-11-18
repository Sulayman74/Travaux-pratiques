// var elem = document.querySelector('.filter');
// var iso = new Isotope( elem, {
  
//   itemSelector: '.filter__item',
//   layoutMode: 'fitRows'
// });

// element argument can be a selector string
//   for an individual element
var iso = new Isotope( '.grid', {
  itemSelector : '.grid__item',

  
});
// var filterFns = {

//   shoes: function( itemElem ) {
//     var shoes = itemElem.querySelector('.shoes').textContent;
//     return shoes.match( /shoes$/ );
//   }
// };



let bouttons = document.querySelectorAll('.filter__item');

bouttons.forEach(boutton => {
  boutton.addEventListener('click', function (e) {
    // body
    iso.arrange( { filter: boutton.getAttribute('data-filter') } );
  });
  
});