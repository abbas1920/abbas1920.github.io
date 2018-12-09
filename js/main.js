/* Adding event listener for menu */
document.getElementById("mnuHome").addEventListener("click", nav);
document.getElementById("mnuMusic").addEventListener("click", nav);
document.getElementById("mnuArtist").addEventListener("click", nav);
document.getElementById("mnuContactUs").addEventListener("click", nav);

/* Adding event listener for page scroll */
window.addEventListener("scroll", scrollPage);


/* Menu click event */
function nav(ev) {
    //var pageList = ['index.html', 'music.html', 'artist.html', 'contactus.html'];
    var cur = ev.currentTarget.id;
    cur = cur.replace('mnu', '').toLowerCase() + ".html";
    cur = cur.replace('home', 'index');
    window.open(cur, "_self");
}

/* Scroll page event is used to add scroll class to header.
    It will toggle header background-color to black */
function scrollPage(ev) {
    console.log(ev);
    if (ev.currentTarget.scrollY <= 0) {
        if (document.getElementById("header").classList.contains('scroll')) {
            document.getElementById("header").classList.remove("scroll");
        }
    } else {
        document.getElementById("header").classList.add("scroll");
    }
}