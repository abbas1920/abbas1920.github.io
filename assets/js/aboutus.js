document.getElementById("general").addEventListener("click", abouttab);
document.getElementById("services").addEventListener("click", abouttab);
document.getElementById("catering").addEventListener("click", abouttab);
document.getElementById("mission").addEventListener("click", abouttab);

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