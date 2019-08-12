import {initInterestingSliderCheckout} from '.././parts/sliders';

//Скрываем форму
function hideForm() {
    $('#container_checkout, .wrapper_footer_checkout ').addClass("hide_block");
}

//На месте формы высвечиваем сообщение об успехе
function showMassageSuccess(orderNumber) {
    $('.checkout_header, .normal_wrapper_footer, .interesting_checkout, .container.container_checkout_success').removeClass("hide_block");
    $('.order_number').html(orderNumber);
}

export default function handleFormSubmit() {
    $('.js_form').on('submit', e => {
        e.preventDefault();

        const $fotm = $(e.target);

        //готовим данные для запроса а АПИ-файл
        const params = {
            formData: $fotm.serializeArray()
        };
        //данные о выбранном товаре
        const products = JSON.parse(localStorage.getItem("purchasedProducts"));

        const callbackSuccess = (orderNumber) => {
            console.log('Успешно!');
            hideForm();
            showMassageSuccess(orderNumber);
            initInterestingSliderCheckout();
        };

        const callbackError = errors => {
            console.group('Ошибка!');
            errors.forEach(error => {
                console.log(`${error.filedName}: ${error.message}`);
            });
            console.groupEnd();
        };

        window.API.onFormSubmit(params, products, callbackSuccess, callbackError);

    });
}