//Первый слайдер
function initSliderMain() {
    //Большое изображение
    $('.js_slider_main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
    });
}

function initSliderProductFor() {
    //Большое изображение
    $('.js_slider_product_for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows : false,
        asNavFor: '.js_slider_product_nav',
        swipe: false

    });
}

function initSliderProductNav() {
    //Большое изображение
    $('.js_slider_product_nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.js_slider_product_for',
        arrows : false,
        focusOnSelect: true,
        swipe: false
    });
}

function initSliderIinteresting() {
    //Большое изображение
    $('.js_slider_interesting').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        // focusOnSelect: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    swipeToSlide: true,

                }
            }
        ]

    });
}
export default function initSliders() {
    initSliderMain();
    initSliderProductFor();
    initSliderProductNav();
    initSliderIinteresting();
}