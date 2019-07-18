// Возьмём дебаунс из интернета, отложим в хелперы.
// import { debounce } from 'parts/helpers';


//Первый слайдер
$('.js_slider_1_for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.js_slider_1_nav'
});

$('.js_slider_1_nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.js_slider_1_for',
    accessibility: false,
    centerMode: true,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    arrows: false

});

//Второй слайдер
$('.sl_2').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
});
