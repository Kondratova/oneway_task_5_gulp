// Возьмём дебаунс из интернета, отложим в хелперы.
import {initSliderMain, initInterestingSliderCardProduct} from './parts/sliders';
import initCatalog from './parts/initCatalog';
import showTableSize from './parts/showTableSize';
import initCardProduct from './parts/initCardProduct'
import handleFormBuyProductSubmit from './parts/handleFormBuyProductSubmit';
import {showPurchasedItemsNumber} from './parts/showPurchasedItemsNumber';
import initCheckout from './parts/initCheckout'
import handleCheckoutFormSubmit from './parts/handleCheckoutFormSubmit';

// import listenerForm from './parts/listenerForm'


$(() => {
    showPurchasedItemsNumber();

    if ($('.js_home_page').length) {
        initSliderMain();
    }

    if ($('.js_catalog').length) {
        initCatalog();
    }

    if ($('.js_card_product').length) {
        let item = initCardProduct();
        showTableSize();
        handleFormBuyProductSubmit(item);
        initInterestingSliderCardProduct();
    }

    if ($('.js_checkout').length) {
        initCheckout();
        handleCheckoutFormSubmit();
    }
});

// localStorage.clear()