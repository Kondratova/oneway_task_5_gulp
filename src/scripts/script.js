(function () {
    const imgs = document.querySelectorAll(".slider img");
    let current = 0;

    //Изменяет значение css переменной отвечающей за значение opacity
    function slider(imgs, current) {

        // for (let i = 0; i < imgs.length; i++) {
        imgs.forEach(function(element){
            element.style.setProperty("--hide-img", "0");
        });
        imgs[current].style.setProperty("--hide-img", "1");
    }

    slider(imgs, current);

    //Обработчик события нажатия левой кнопки - показать предыдущую картинку
    document.querySelector(".buttonLeft").onclick = function () {
        if (current === 0) {
            current = imgs.length - 1;
        } else {
            current--;
        }
        slider(imgs, current);
    };

    //Обработчик события нажатия правой кнопки - показать слудующую картинку
    document.querySelector(".buttonRight").onclick = function () {
        if (current === imgs.length - 1) {
            current = 0;
        } else {
            current++;
        }
        slider(imgs, current);
    };
})()