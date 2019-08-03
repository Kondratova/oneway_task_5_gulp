// Возьмём дебаунс из интернета, отложим в хелперы.
import initSliders from './parts/sliders';
import initCatalog from './parts/initCatalog';

// import showSpecification from './parts/showSpecification';
// import handleFormSubmit from './parts/handleFormSubmit';
// import listenerForm from './parts/listenerForm'
// import listenerMagnific from './parts/listenerMagnific'


$(() => {
    // handleFormSubmit();
    initSliders();
    initCatalog();

    // showSpecification();
    // listenerMagnific()
    // listenerForm ();
});

// localStorage.clear()