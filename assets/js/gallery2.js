document.getElementById("img21").addEventListener("click", gallery2);
document.getElementById("img22").addEventListener("click", gallery2);
document.getElementById("img23").addEventListener("click", gallery2);
document.getElementById("img24").addEventListener("click", gallery2);
document.getElementById("img25").addEventListener("click", gallery2);
document.getElementById("img26").addEventListener("click", gallery2);

function gallery2(ev) {
    var imgList = ['garden1_lrg', 'garden2_lrg', 'lounge_lrg', 'lounge2_lrg', 'lounge3_lrg', 'waterfeaturelrg'];
    var str = ev.currentTarget.id;
    var i = str.substr(str.length - 1);
    document.getElementById("dest2").src = "assets/gallery/" + imgList[i - 1] + ".jpg";
}