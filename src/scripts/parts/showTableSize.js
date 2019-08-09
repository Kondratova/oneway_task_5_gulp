//Всплывашка
export default function showTableSize() {
    $('.js_link_table_size').magnificPopup({
        type: 'inline',
        preloader: false,
        showCloseBtn: false,

        callbacks: {
            beforeOpen: function () {
            }
        }
    });
    $(document).on('click', '.close', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
}