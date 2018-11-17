document.getElementById("link1").addEventListener("click", externalLink);
document.getElementById("link2").addEventListener("click", externalLink);
document.getElementById("link3").addEventListener("click", externalLink);
document.getElementById("link4").addEventListener("click", externalLink);
document.getElementById("link5").addEventListener("click", externalLink);

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