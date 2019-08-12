//Первый слайдер
export function initSliderMain() {
    //Большое изображение
    $('.js_slider_main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
    });
}

export function initInterestingSliderCardProduct() {
    //Большое изображение
    $('.js_slider_interesting_card_product').slick({
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

                    arrows: false,
                }
            }
        ]

    });
}

export function initInterestingSliderCheckout() {
    //Большое изображение
    $('.js_slider_interesting_checkout').slick({
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

                    arrows: false,
                }
            }
        ]

    });
}

export function initSliderProductFor() {
    //Большое изображение
    $('.js_slider_product_for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows : false,
        asNavFor: '.js_slider_product_nav',
        swipe: false

    });
}

export function initSliderProductNav() {
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