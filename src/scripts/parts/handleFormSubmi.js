
export default function handleFormSubmi() {
    $('.js_form').on('submit', e => {
        e.preventDefault();

        const $fotm = $(e.target);

        //готовим данные для запроса а АПИ-файл
        const params = {
            formData: $fotm.serializeArray()
        };

        const  callbackSuccess = () => {
            console.log('Успешно!');
        };

        const callbackError = errors => {
            console.group('Ошибка!');
            errors.forEach(error => {
                console.log(`${error.filedName}: ${error.message}`);
            });
            console.groupEnd();
        };

        window.API.onFormSubmit(params, callbackSuccess, callbackError);
    });
}