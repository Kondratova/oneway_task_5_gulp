// Возьмём дебаунс из интернета, отложим в хелперы.
import initSliders from './parts/sliders';
import showSpecification from './parts/showSpecification';
import handleFormSubmi from './parts/handleFormSubmi';

$(document).ready(() => {
    handleFormSubmi();
    initSliders();
    showSpecification();

    $(document).on('click', '.close', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
});

