//Music App
var song1 = new Audio();
song1.src = "music/Ishq_Farzi_-_Jannat_Zubair_&_Rohan_Mehra__Ramji_Gulati__Kumaar__Zee_Music_Originals.mp3";

var song2 = new Audio();
song2.src = "music/music2.mp3";

var song3 = new Audio();
song3.src = "music/music3.mp3";

var song4 = new Audio();
song4.src = "music/music4.mp3";

var song5 = new Audio();
song5.src = "music/music5.mp3";

var song6 = new Audio();
song6.src = "music/music6.mp3";

var song7 = new Audio();
song7.src = "music/music7.mp3";

var song8 = new Audio();
song8.src = "music/music8.mp3";

var song9 = new Audio();
song9.src = "music/music9.mp3";


function pauseAllSong(){
    song1.pause()
    song2.pause()
    song3.pause()
    song4.pause()
    song5.pause()
    song6.pause()
    song7.pause()
    song8.pause()
    song9.pause()
}

function playSong(e) {
    // alert('hello');
    // song1.pause();
    // console.log(this);
    // console.log(e.target.id);

    var songId = e.target.id;

    pauseAllSong()

    switch (songId) {
        case "a":
            song1.play();
            break;
        case "b":
            song2.play();
            break;
        case "c":
            song3.play();
            break;
        case "d":
            song4.play();
            break;
        case "e":
            song5.play();
            break;
        case "f":
            song6.play();
            break;
        case "g":
            song7.play();
            break;
        case "h":
            song8.play();
            break;
        case "i":
            song9.play();
            break;
        default:
            console.log("Invalid input");
            break;
    }
}
function pauseSong(e) {
    // alert('pause');
    var songId = e.target.id;
    switch (songId) {
        case "a":
            song1.pause();
            break;
        case "b":
            song2.pause();
            break;
        case "c":
            song3.pause();
            break;
        case "d":
            song4.pause();
            break;
        case "e":
            song5.pause();
            break;
        case "f":
            song6.pause();
            break;
        case "g":
            song7.pause();
            break;
        case "h":
            song8.pause();
            break;
        case "i":
            song9.pause();
            break;
        default:
            console.log("Invalid input");
            break;
    }

}

var divLength = document.querySelectorAll('.song').length;
for (var i = 0; i < divLength; i++) {
    var demo = document.querySelectorAll('.song')[i].addEventListener('click', playSong);

    var dem = document.querySelectorAll('.song')[i].addEventListener('dblclick', pauseSong);
}
