document.getElementById("mnuHome").addEventListener("click", nav);
document.getElementById("mnuMusic").addEventListener("click", nav);
document.getElementById("mnuConcrete").addEventListener("click", nav);
document.getElementById("mnuContactUs").addEventListener("click", nav);
window.addEventListener("scroll", scrollPage);



function nav(ev) {
    //var pageList = ['index.html', 'music.html', 'concrete.html', 'contactus.html'];
    var cur = ev.currentTarget.id;
    cur = cur.replace('mnu', '').toLowerCase() + ".html";
    cur = cur.replace('home', 'index');
    window.open(cur, "_self");
}

function scrollPage(ev) {
    console.log(ev);
    if(ev.currentTarget.scrollY <= 0) {
        if(document.getElementById("header").classList.contains('scroll')) {
            document.getElementById("header").classList.remove("scroll");
        }
    } else {
        document.getElementById("header").classList.add("scroll");
    }
}