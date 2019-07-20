function showUsedMail() {

    let localValue = localStorage.getItem('mail');

    if (localValue !== null) {
        let arrMail = JSON.parse(localStorage.getItem("mail"));
        arrMail.forEach((item) => {
            $('#js_mail_list').append(` <option value=\"${ item }\" /> `);
        })
    }
}

function cleanMessageValidate() {
    $('.js_massage_valid_mail p').remove();
}

function showMessageValidateError() {
    $('.js_massage_valid_mail').append('<p>Введите корректный e-mail</p>')
}

function showMessageValidateSaccess() {
    $('.js_massage_valid_mail').append('<p>E-mail верный</p>')
}

function locksButton(a) {
    $(".button").prop( "disabled", a );
}

function showMessageValidate() {
    $(".js_input_mail").on("change", function() {
        let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let address = $(".js_input_mail").val();

        if(reg.test(address) === false) {
            cleanMessageValidate();
            showMessageValidateError();
            locksButton(true);
        } else {
            cleanMessageValidate();
            showMessageValidateSaccess();
            locksButton(false);
        }

    });
}

export  default function listenerForm() {
    showUsedMail();
    showMessageValidate();
}