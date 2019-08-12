import {showPurchasedItemsNumber} from '.././parts/showPurchasedItemsNumber';

//запоминаем купленный товар
function rememberBuyProduct(item) {

    let localValue = localStorage.getItem('purchasedProducts');

    if (localValue === null) {
        let serialArr = JSON.stringify([item]);

        localStorage.setItem('purchasedProducts', serialArr);
    } else {
        let returnArr = JSON.parse(localStorage.getItem("purchasedProducts"));
        returnArr.push(item);
        localStorage.setItem('purchasedProducts', JSON.stringify(returnArr));
    }
}


export default function handleFormBuyProductSubmit(item) {
    $('.js_btn_buy_product').on('click', e => {
        e.preventDefault();

        let product = {
            id: item.id,
            title: item.title,
            subcategory: item.subcategory,
            price: item.price,
            src: item.srcSmall[0],
            color: $("input[name=\"color\"]:checked").val(),
            size: $("input[name=\"size\"]:checked").val(),
        };

        rememberBuyProduct(product);
        showPurchasedItemsNumber();
    });
}