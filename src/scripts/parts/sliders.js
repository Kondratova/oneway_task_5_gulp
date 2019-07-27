//Первый слайдер
function initSlider1() {
    //Большое изображение
    $('.js_slider_1_for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        lazyLoad: 'ondemand',
        asNavFor: '.js_slider_1_nav'
    });

    //Навигация по изображениям
    $('.js_slider_1_nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.js_slider_1_for',
        accessibility: false,
        centerMode: true,
        focusOnSelect: true,
        vertical: true,
        verticalSwiping: true,
        lazyLoad: 'ondemand',
        arrows: false

    });
}

//Второй слайдер
function initSlider2() {
    $('.js_slider_2').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        lazyLoad: 'ondemand',
        variableWidth: true
    });
}

export default function initSliders() {
    initSlider1();
    initSlider2();
}