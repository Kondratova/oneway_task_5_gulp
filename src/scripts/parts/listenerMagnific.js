function closeMagnific() {
    $(document).on('click', '.js_close', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
}

export default function listenerMagnific() {
    closeMagnific();
}