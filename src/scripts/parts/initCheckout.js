function showSelectedProducts(products) {
    $('.selected_products').html(products.map(item =>
        `<div class="item" id="${ item.id }">
                <img src="${ item.src }" alt="">
                <div class="info_item">
                    <p class="title"><a href="">${ item.title }</a></p>
                    <p class="subcategory">${ item.subcategory }</p>
                    <p class="price">${ item.price }</p>
                </div>
            </div>`
    ));
}

function showSelectedProductsPrice(products) {
    /*let prise = products.reduce( (sum, item) => {
        return sum + (+item.price);
    },0);*/

    $('.js_price').html(products.reduce((sum, item) => {
        return sum + (+item.price);
    }, 0) + ' ')
}

export default function initCheckout() {
    let products = JSON.parse(localStorage.getItem("purchasedProducts"));
    showSelectedProducts(products);
    showSelectedProductsPrice(products);
}