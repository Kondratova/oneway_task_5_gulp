//Скрываем форму
function hideForm() {
    $('.container_form').css("display", "none");
}

//На месте формы высвечиваем сообщение об успехе
function showMassageSuccess() {
    $('.js_calback_form').css("display", "block");
}


//запоминаем введенную почту в локал сторедж
function rememberMail() {
    let mailVal = $('.js_input_mail').val();
    let localValue = localStorage.getItem('mail');

    if (localValue === null) {
        let serialArr = JSON.stringify([mailVal]);

        localStorage.setItem('mail', serialArr);
    } else  {
        let returnArr = JSON.parse(localStorage.getItem("mail"));

        returnArr.push(`${mailVal}`);
        localStorage.setItem('mail', JSON.stringify(returnArr));
    }
}

export default function handleFormSubmit() {
    $('.js_form').on('submit', e => {
        e.preventDefault();

        const $fotm = $(e.target);

        //готовим данные для запроса а АПИ-файл
        const params = {
            formData: $fotm.serializeArray()
        };

        const  callbackSuccess = () => {
            console.log('Успешно!');
            hideForm();
            showMassageSuccess();
            rememberMail();
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