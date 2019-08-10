// Возьмём дебаунс из интернета, отложим в хелперы.
import initSliders from './parts/sliders';
import initCatalog from './parts/initCatalog';
import showTableSize from './parts/showTableSize';
import initCardProduct from './parts/initCardProduct'
import handleFormBuyProductSubmit from './parts/handleFormBuyProductSubmit';

// import handleFormSubmit from './parts/handleFormSubmit';
// import listenerForm from './parts/listenerForm'
// import listenerMagnific from './parts/listenerMagnific'


$(() => {
    // handleFormSubmit();
    initSliders();
    initCatalog();
    showTableSize();
    initCardProduct();
    handleFormBuyProductSubmit();


    // listenerForm ();
});

// localStorage.clear()