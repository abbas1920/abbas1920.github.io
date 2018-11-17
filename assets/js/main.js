var i = 1;
var screenMode = (window.innerWidth < 768) ? "1" : "2";
var prevMode = screenMode;

current();

document.getElementById("prev").addEventListener("click", prev);
document.getElementById("next").addEventListener("click", next);
document.getElementById("bmenu_open").addEventListener("click", openMenu);
document.getElementById("bmenu_close").addEventListener("click", closeMenu);

document.getElementById("homeMenu").addEventListener("click", nav, 'homeSec');
document.getElementById("aboutUsMenu").addEventListener("click", nav);
document.getElementById("takeTourMenu").addEventListener("click", nav);
document.getElementById("gallery1Menu").addEventListener("click", nav);
document.getElementById("gallery2Menu").addEventListener("click", nav);
document.getElementById("linkMenu").addEventListener("click", nav);
document.getElementById("contactMenu").addEventListener("click", nav);
document.getElementById("general").addEventListener("click", abouttab);
document.getElementById("services").addEventListener("click", abouttab);
document.getElementById("catering").addEventListener("click", abouttab);
document.getElementById("mission").addEventListener("click", abouttab);

document.getElementById("img11").addEventListener("click", gallery1);
document.getElementById("img12").addEventListener("click", gallery1);
document.getElementById("img13").addEventListener("click", gallery1);
document.getElementById("img14").addEventListener("click", gallery1);
document.getElementById("img15").addEventListener("click", gallery1);
document.getElementById("img16").addEventListener("click", gallery1);

document.getElementById("img21").addEventListener("click", gallery2);
document.getElementById("img22").addEventListener("click", gallery2);
document.getElementById("img23").addEventListener("click", gallery2);
document.getElementById("img24").addEventListener("click", gallery2);
document.getElementById("img25").addEventListener("click", gallery2);
document.getElementById("img26").addEventListener("click", gallery2);

document.getElementById("link1").addEventListener("click", externalLink);
document.getElementById("link2").addEventListener("click", externalLink);
document.getElementById("link3").addEventListener("click", externalLink);
document.getElementById("link4").addEventListener("click", externalLink);
document.getElementById("link5").addEventListener("click", externalLink);

function removeImageActive(idx) {
    document.getElementById("ind" + idx).classList.remove("active");
    document.getElementById("slider" + idx).classList.remove("active");
}

function addImageActive(idx) {
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
    var pageList = ['homeSec', 'aboutUsSec', 'takeTourSec', 'gallery1Sec', 'gallery2Sec', 'linkSec', 'contactSec'];
    cur = cur.replace('Menu', '') + 'Sec';
    for (var i = 0; i < pageList.length; i++) {
        var e = document.getElementById(pageList[i]);
        if (e.classList.contains('active'))
            e.classList.remove("active");
    }
    document.getElementById(cur).classList.add("active");
}

function abouttab(ev) {
    var tabList = ['general', 'services', 'catering', 'mission'];
    var cur = ev.currentTarget.id + 'Content';
    for (var i = 0; i < tabList.length; i++) {
        var e1 = document.getElementById(tabList[i]);
        if (e1.classList.contains('active'))
            e1.classList.remove("active");
        var e2 = document.getElementById(tabList[i] + 'Content');
        if (e2.classList.contains('active'))
            e2.classList.remove("active");
    }
    document.getElementById(ev.currentTarget.id).classList.add("active");
    document.getElementById(cur).classList.add("active");
}

function gallery1(ev) {
    var imgList = ['bedroom_lrg', 'dinning_lrg', 'entrance2large', 'entrance3large', 'entrancehalllrg', 'entrancelarge'];
    var str = ev.currentTarget.id;
    var i = str.substr(str.length - 1);
    document.getElementById("dest1").src = "assets/gallery/" + imgList[i - 1] + ".jpg";
}

function gallery2(ev) {
    var imgList = ['garden1_lrg', 'garden2_lrg', 'lounge_lrg', 'lounge2_lrg', 'lounge3_lrg', 'waterfeaturelrg'];
    var str = ev.currentTarget.id;
    var i = str.substr(str.length - 1);
    document.getElementById("dest2").src = "assets/gallery/" + imgList[i - 1] + ".jpg";
}

function externalLink(ev) {
    var urlList = ['https://www.hse.ie/eng/',
        'https://www2.hse.ie/services/fair-deal-scheme/about-the-fair-deal-scheme.html',
        'https://www.hiqa.ie/',
        'https://www.ageaction.ie/',
        'http://www.nhi.ie/'
    ];
    var str = ev.currentTarget.id;
    var i = str.substr(str.length - 1);
    window.open(urlList[i - 1], "_blank");
}

window.addEventListener("resize", function() {
    document.getElementById("tourFrame").style.height = (screen.height - 100) + "px";
    screenMode = (window.innerWidth < 768) ? "1" : "2";
    if (prevMode != screenMode) {
        current();
        prevMode = screenMode;
    }
});