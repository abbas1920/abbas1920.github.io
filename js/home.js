var audio = document.getElementById("myAudio");
var audioSrc = document.getElementById("myAudioSrc");

function slide(index) {
    var str1 = "The terms 'Tribute Act', 'Impersonator', 'Soundalike' and 'Lookalike' are used to describe a singer or band whose show is dedicated to the reproduction of a popular celebrity or famous band.";
    var str2 = "Tribute Ltd is a celebration of the music, movies and legacy. Join fans from around the world in Memphis as we remember the King of Rock 'n' Roll";
    var str3 = "WATCH THE CANDLELIGHT: Watch a broadcast of the annual Candlelight Vigil, held each year at Graceland on the evening of December 05";
    var txt = [str1, str2, str3];
    document.getElementById("imgSlider").style.backgroundImage = "url('images/slider" + index + ".jpg')";
    document.getElementById('txtSlider').innerHTML = txt[index - 1];
}

function play(index) {
    audioSrc.src = "audio/0" + index + ".mp3";
    audio.load();
    audio.play();
    document.getElementById('play' + index).classList.add('hideicon');
    if (document.getElementById("stop" + index).classList.contains('hideicon')) {
        document.getElementById("stop" + index).classList.remove("hideicon");
    }
}

function stop(index) {
    audio.pause();
    document.getElementById('stop' + index).classList.add('hideicon');
    if (document.getElementById("play" + index).classList.contains('hideicon')) {
        document.getElementById("play" + index).classList.remove("hideicon");
    }
}