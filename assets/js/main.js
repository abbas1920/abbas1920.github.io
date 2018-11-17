document.getElementById("bmenu_open").addEventListener("click", openMenu);
document.getElementById("bmenu_close").addEventListener("click", closeMenu);

document.getElementById("homeMenu").addEventListener("click", nav);
document.getElementById("aboutUsMenu").addEventListener("click", nav);
document.getElementById("takeTourMenu").addEventListener("click", nav);
document.getElementById("gallery1Menu").addEventListener("click", nav);
document.getElementById("gallery2Menu").addEventListener("click", nav);
document.getElementById("linkMenu").addEventListener("click", nav);
document.getElementById("contactMenu").addEventListener("click", nav);

function openMenu() {
    document.getElementsByClassName("menu")[0].style.left = "20%";
    document.getElementById("header").style.position = "static";
}

function closeMenu() {
    document.getElementsByClassName("menu")[0].style.left = "100%";
    document.getElementById("header").style.position = "relative";
}

function nav(ev) {
    _nav(ev.currentTarget.id);
    closeMenu();
}

function _nav(cur) {
    var pageList = ['index.html', 'aboutuspage.html', 'taketourpage.html', 'gallery1page.html', 'gallery2page.html', 'linkpage.html', 'contactpage.html'];
    cur = cur.replace('Menu', '');
    if (cur == "home") {
        cur = "index.html";
    } else {
        cur = cur.toLowerCase() + 'page.html';
    }
    window.open(cur, "_self");
}