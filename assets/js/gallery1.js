document.getElementById("img11").addEventListener("click", gallery1);
document.getElementById("img12").addEventListener("click", gallery1);
document.getElementById("img13").addEventListener("click", gallery1);
document.getElementById("img14").addEventListener("click", gallery1);
document.getElementById("img15").addEventListener("click", gallery1);
document.getElementById("img16").addEventListener("click", gallery1);

function gallery1(ev) {
    var imgList = ['bedroom_lrg', 'dinning_lrg', 'entrance2large', 'entrance3large', 'entrancehalllrg', 'entrancelarge'];
    var str = ev.currentTarget.id;
    var i = str.substr(str.length - 1);
    document.getElementById("dest1").src = "assets/gallery/" + imgList[i - 1] + ".jpg";
}