document.getElementById("submit").addEventListener("click", submit);
document.getElementById("closePopup").addEventListener("click", closePopup);


function submit(ev) {
    var elName = document.getElementById("userName");
    var elMobile = document.getElementById("userMobile");
    var elEMail = document.getElementById("userEMail");

    var errorName = document.getElementById("errorName");
    var errorMobile = document.getElementById("errorMobile");
    var errorEMail = document.getElementById("errorEMail");

    if (!elName.validity.valid) {
        errorName.classList.add("show");
    } else {
        removeClassShow(errorName);
    }

    if (!elMobile.validity.valid) {
        errorMobile.classList.add("show");
    } else {
        removeClassShow(errorMobile);
    }

    if (!elEMail.validity.valid) {
        errorEMail.classList.add("show");
    } else {
        removeClassShow(errorEMail);
    }

    if (elName.validity.valid && elMobile.validity.valid && elEMail.validity.valid) {
        document.getElementById("popup").classList.add("show");
    }
}

function removeClassShow(el) {
    if (el.classList.contains('show'))
        el.classList.remove("show");
}

function closePopup(ev) {
    var elName = document.getElementById("userName");
    var elMobile = document.getElementById("userMobile");
    var elEMail = document.getElementById("userEMail");
    var elMsg = document.getElementById("userMsg");
    elName.value = '';
    elMobile.value = '';
    elEMail.value = '';
    elMsg.value = '';
    if (document.getElementById("popup").classList.contains('show')) {
        document.getElementById("popup").classList.remove("show");
    }
}