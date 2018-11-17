var i = 1;
var screenMode = (window.innerWidth < 768) ? "1" : "2";
var prevMode = screenMode;

current();

document.getElementById("prev").addEventListener("click", prev);
document.getElementById("next").addEventListener("click", next);

function removeImageActive(idx) {
    if (!document.getElementById("ind" + idx)) { return; }
    document.getElementById("ind" + idx).classList.remove("active");
    document.getElementById("slider" + idx).classList.remove("active");
}

function addImageActive(idx) {
    if (!document.getElementById("ind" + idx)) { return; }
    document.getElementById("ind" + idx).classList.add("active");
    document.getElementById("slider" + idx).classList.add("active");
}

function prev() {
    if (screenMode == 1) {
        prev1();
    } else {
        prevNext2();
    }
}

function next() {
    if (screenMode == 1) {
        next1();
    } else {
        prevNext2();
    }
}

function current() {
    i = 1;
    addImageActive(1);
    if (screenMode == 2) {
        addImageActive(2);
    } else {
        removeImageActive(2);
    }
    removeImageActive(3);
    removeImageActive(4);
}

function prev1() {
    removeImageActive(i);
    if (i == 1)
        i = 4;
    else
        i--;
    addImageActive(i);
}

function next1() {
    removeImageActive(i);
    if (i == 4)
        i = 1;
    else
        i++;
    addImageActive(i);
}

function prevNext2() {
    removeImageActive(i);
    removeImageActive(i + 1);
    i = (i == 1) ? 3 : 1;
    addImageActive(i);
    addImageActive(i + 1);
}

window.addEventListener("resize", function() {
    screenMode = (window.innerWidth < 768) ? "1" : "2";
    if (prevMode != screenMode) {
        current();
        prevMode = screenMode;
    }
});