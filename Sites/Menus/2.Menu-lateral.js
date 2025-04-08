var ul = document.querySelector('nav ul');
var menubtn = document.querySelector ('.menu-btn img');

function menushow(){
if (ul.classList.contains('open')) {
    ul.classList.remove('open');
    document.querySelector('.menu-btn img').src = "img/menu_white_36dp.svg";
}

else{
    ul.classList.add('open');
    document.querySelector('.menu-btn img').src = "img/close_white_36dp.svg";
}

}