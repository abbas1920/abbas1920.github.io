/* Adding event listener to Submit From */
document.getElementById("submit").addEventListener("click", submit);

/* Adding event listener to Close Popup */
document.getElementById("closePopup").addEventListener("click", closePopup);

/* Submit Form Event */
function submit(ev) {
    var elName = document.getElementById("userName");
    var elMobile = document.getElementById("userMobile");
    var elEMail = document.getElementById("userEMail");

    var errorName = document.getElementById("errorName");
    var errorMobile = document.getElementById("errorMobile");
    var errorEMail = document.getElementById("errorEMail");
    /* User Name Validation */
    if (!elName.validity.valid) {
        errorName.classList.add("show");
    } else {
        removeClassShow(errorName);
    }

    /* User Mobile No Validation */
    if (!elMobile.validity.valid) {
        errorMobile.classList.add("show");
    } else {
        removeClassShow(errorMobile);
    }

    /* User EMail Validation */
    if (!elEMail.validity.valid) {
        errorEMail.classList.add("show");
    } else {
        removeClassShow(errorEMail);
    }

    if (elName.validity.valid && elMobile.validity.valid && elEMail.validity.valid) {
        /* Show Popup */
        document.getElementById("popup").classList.add("show");
    }
}

/* Common Utility function to remove class */
function removeClassShow(el) {
    if (el.classList.contains('show'))
        el.classList.remove("show");
}

/* Close Popup and reseting Form values */
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