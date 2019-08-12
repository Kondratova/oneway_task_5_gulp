function showCategory() {
    $('.js_category_name h1').html('Обувь');

}

// Показывает колличесво страниц каталога
function showNumberOfPages() {
    let numberOfPages = window.API.numberOfPages('Обувь');
    // Объявляем массив с первой страницей и задем ей стиль активной
    let numbers = [`<a href="" class="js_active_page">1</a>`];
    // Добавляем следующие страницы если они есть
    if (numberOfPages > 1) {
        for (let i = 2; i <= numberOfPages; i++) {
            numbers.push(`<a href="">${i}</a>`);
        }
    }

    $('.js_pages_numbers').html(numbers.join(' '));
}

// изменяем активный номер страницы
function changeActiveNumber(event) {

    if ($('.js_pages_numbers a').hasClass('js_active_page')) {
        $('.js_pages_numbers a').removeClass('js_active_page');
    }

    if (!$(event).hasClass('js_active_page')) {
        $(event).addClass('js_active_page');
    }
}

function changeItemCatalog(numberPage) {
    let itemsValue = window.API.onCatalogPage(numberPage);

    $('.catalog').html(itemsValue.map(item =>
        `<div class="item" id="${ item.id }">
                <img src="${ item.src }" alt="">
                <p class="title"><a href="">${ item.title }</a></p>
                <p class="subcategory">${ item.subcategory }</p>
                <p class="price">${ item.price }</p>
            </div>`
    ));

    // console.log(arrItems);
}

// Показываем страницу по номеру которой нажали
function showActivePage() {

    changeItemCatalog(1);

    $('.js_pages_numbers a').on('click', function (event) {
        event.preventDefault();

        let numberPage = this.innerHTML;

        changeItemCatalog(numberPage);
        changeActiveNumber(this);

        // console.log(this.innerHTML)
    })
}

export default function initCatalog() {
    showCategory();
    showNumberOfPages ();
    showActivePage();
}