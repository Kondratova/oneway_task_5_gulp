function closeMagnific() {
    $(document).on('click', '.close', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
}

export default function listenerMagnific() {
    closeMagnific();
}