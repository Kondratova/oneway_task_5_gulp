window.API = {
    //Отправка формы
    
    onFormSubmit: function (params, callbackSuccess, callbackFailed) {
        //Отслеживание запросов на сервер
        console.groupCollapsed(('onFormSubmit'));
        console.log(params);
        console.groupEnd();

        //эмуляция ответа сервера на фронтенде
        setTimeout( function () {
            var serverResponseSuccess = true;

            if(serverResponseSuccess) {
                callbackSuccess();
            } else  {
                var errors = [{fieldName: 'pasword', message: "Неверная эл. почта или пароль"}];
                callbackFailed(errors);
            }
        }, 500)
    }
};