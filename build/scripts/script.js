const img = document.querySelectorAll(".slider img");
let curent = 0;

//Изменяет значение css переменной отвечающей за значение opacity
function slider (){
    for (let i = 0; i < img.length; i++) {
        img[i].style.setProperty("--hide-img", "0");
    }
    img[curent].style.setProperty("--hide-img", "1");
}

slider();
//Обработчик события нажатия левой кнопки - показать предыдущую картинку
document.querySelector(".buttonLeft").onclick = function () {
    curent == 0 ? curent = img.length-1 : curent-- ;
    slider();
};

//Обработчик события нажатия правой кнопки - показать слудующую картинку
document.querySelector(".buttonRight").onclick = function () {
    curent == img.length-1 ? curent = 0 : curent++ ;
    slider();
};
