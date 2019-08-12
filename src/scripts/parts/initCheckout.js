function showSelectedProducts(products) {
    $('.selected_products').html(products.map(item =>
        `<div class="item" id="${ item.id }">
                <img src="${ item.src }" alt="${ item.title }">
                <div class="info_item">
                    <p class="title"><a href="">${ item.title }</a></p>
                    <p class="subcategory">${ item.subcategory }</p>
                    <p class="price">${ item.price }</p>
                </div>
            </div>`
    ));
}

function showSelectedProductsPrice(products) {
    if (products !== null) {
        $('.js_price').html(products.reduce((sum, item) => {
            return sum + (+item.price);
        }, 0) + ' ')
    }

    /*if (returnArr !== null && returnArr.length) {
        $('.js_link_basket').attr('data-before', `${returnArr.length}`);
    }*/
}

export default function initCheckout() {
    let products = JSON.parse(localStorage.getItem("purchasedProducts"));
    showSelectedProducts(products);
    showSelectedProductsPrice(products);
}