
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

function showNumberItemsPurchased() {
    let returnArr = JSON.parse(localStorage.getItem("purchasedProducts"));

    $('.js_link_basket').attr('data-before',`${returnArr.length-1}`);
}

export default function handleFormBuyProductSubmit() {

    showNumberItemsPurchased();

    $('.js_btn_buy_product').on('click', e => {
        e.preventDefault();

        let colorProduct = $("input[name=\"color\"]:checked").val();
        let sizeProduct = $("input[name=\"size\"]:checked").val();

        let obj ={
            colorProduct: colorProduct,
            sizeProduct: sizeProduct
        };

        rememberBuyProduct(obj);
        showNumberItemsPurchased();

        console.log("покупка работает");
    });
}