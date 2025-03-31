function menushow() {
    let ul = document.querySelector('.navbar ul');

    if (ul.classList.contains("open")) {
        ul.classList.remove("open");
        document.querySelector('.menu-icon img').src = "./Imagens/menu_white_36dp.svg";
    }
    else {
        ul.classList.add("open");
        document.querySelector('.menu-icon img').src = "./Imagens/close_white_36dp.svg";
    }
}