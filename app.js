var overlay = document.getElementById('overlay');
var open_btn = document.getElementById('open-btn');
var close_btn = document.getElementById('close-btn');

open_btn.addEventListener('click', function () {
    // console.log('che che che');

    overlay.classList.add('show-menu');

});

close_btn.addEventListener('click', function () {
    // console.log('che che che');

    overlay.classList.remove('show-menu');

});