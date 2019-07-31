//Первый слайдер
function initSlider1() {
    //Большое изображение
    $('.js_slider_main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
    });
}


export default function initSliders() {
    initSlider1();
}