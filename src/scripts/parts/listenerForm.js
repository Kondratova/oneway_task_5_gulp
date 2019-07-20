function showUsedForm() {

    let localValue = localStorage.getItem('mail');

    if (localValue !== null) {
        let arrMail = JSON.parse(localStorage.getItem("mail"));
        arrMail.forEach((item) => {
            //alert(item); //value = "${ item }";

            $('#js_mail_list').append(` <option value=\"${ item }\" /> `);
        })
    }
}

export  default function listenerForm() {
    showUsedForm();
}