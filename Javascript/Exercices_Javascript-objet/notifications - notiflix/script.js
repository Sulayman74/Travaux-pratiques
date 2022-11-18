let btnNotifi = document.querySelector('.bravo');

btnNotifi.addEventListener('click', function (e) {
    console.log('lié');
    Notiflix.Notify.success('hello');
});
let btnErreur = document.querySelector('.erreur');

btnErreur.addEventListener('click', function (e) {
    
    Notiflix.Notify.failure('Marche pas');
});
let btnValid = document.querySelector('.validation');

btnValid.addEventListener('click', function (e) {
    Notiflix.Report.success(
        'Notiflix Success',
        'Hello World!!!',
        'Okay',
        );
});
let btnConfirm = document.querySelector('.confirmation');

btnConfirm.addEventListener('click', function (e) {
    
    Notiflix.Confirm.show(
        'Notiflix Confirm',
        'Est ce que c\'est bon les bonbons?',
        'Yes',
        'No',
        function okCb() {
        alert('Tu crois?');
        },
        function cancelCb() {
        alert('Bizarre');
        },
        // {
        // },
        );
});

let btnLoad = document.querySelector('.loading');
let btnLoadInter = document.querySelector('.loadinginner');

btnLoad.addEventListener('click', function (e) {
    
    Notiflix.Loading.dots('Loading...Wait man', {
        backgroundColor: 'rgba(105,102,210, 0.4)',
    });
    Notiflix.Loading.remove(4000);
    Notiflix.Loading.change('Loading 100%');
     
});
btnLoadInter.addEventListener('click', function (e) {
    
    Notiflix.Block.arrows('.innerBlock', 'Please wait', {
        backgroundColor: 'rgba(105,102,210, 0.4)',
    });
    Notiflix.Block.remove('.innerBlock', 4000);
});