export function showPurchasedItemsNumber() {
    let returnArr = JSON.parse(localStorage.getItem("purchasedProducts"));

    if (returnArr !== null && returnArr.length) {
        $('.js_link_basket').attr('data-before', `${returnArr.length}`);
    }
}