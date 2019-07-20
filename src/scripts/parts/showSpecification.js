//Всплывашка
export default function showSpecification() {
    $('.js_show_specification').magnificPopup({
        type: 'inline',
        preloader: false,
        showCloseBtn: false,

        callbacks: {
            beforeOpen: function () {
            }
        }
    });
}