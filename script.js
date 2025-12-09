let index = 0;
let playingsong = false;
let track = document.createElement('audio');
let songname = document.querySelector("#song-name");
let songimage = document.querySelector(".song-image");
let artistname = document.querySelector("#song-artist");
let playpauseimage = document.querySelector("#play");
let volumerange = document.querySelector("#volume-range");
let volumeicon = document.querySelector("#volume-img");
let songrange = document.querySelector("#duration");
let playlistimg = document.querySelector("#playlist-icon");
let playlist = document.querySelector(".playlist");
let playlistsong = document.querySelectorAll(".playlist-song");
let songs = [
    {
        name: "Iraaday",
        path: "songs/Iraaday.mp3",
        image: "images/iraaday.jpg",
        artist: "Abdul Hanan"
    },
    {
        name: "Behkana",
        path: "songs/Behkana.mp3",
        image: "images/behkana.jpg",
        artist: "Ali Tariq & Harshdeep Kaur"
    },
    {
        name: "Chaap Tilak",
        path: "songs/Chaaptilak.mp3",
        image: "images/chaaptilak.jpg",
        artist: "Sargam Jassu & Nakash Aziz"
    },
    {
        name: "Arz Kiya Hai",
        path: "songs/Arzkiyahai.mp3",
        image: "images/arzkiyahai.jpg",
        artist: "Anuv Jain"
    },
]

function loadtrack(index) {
    track.src = songs[index].path;
    songname.innerHTML = songs[index].name;
    artistname.innerHTML = songs[index].artist;
    songimage.style = `background-image:url("${songs[index].image}");`
    volume();
    setduration();
    setInterval(() => {
        songrange.max = track.duration;
        songrange.value = track.currentTime;
    }, 1000);
    track.loop = true;
}
loadtrack(index);

function playpause() {
    if (playingsong == false) {
        playsong()
    }
    else {
        pausesong()
    }
}

function playsong() {
    track.play();
    playingsong = true;
    playpauseimage.src = "svgs/pause.svg";
}
function pausesong() {
    track.pause();
    playingsong = false;
    playpauseimage.src = "svgs/play.svg";
}
function next() {
    if (index < songs.length - 1) {
        index += 1;
        loadtrack(index);
        playsong();
    }
    else {
        index = 0;
        loadtrack(index);
        playsong();
    }
}
function previous() {
    if (index > 0) {
        index -= 1;
        loadtrack(index);
        playsong();
    }
    else {
        index = songs.length - 1;
        loadtrack(index);
        playsong();
    }
}
function volume() {
    track.volume = volumerange.value / 100;
    if (track.volume == 0) {
        volumeicon.src = "svgs/mute.svg";
    }
    else {
        volumeicon.src = "svgs/volume.svg";
    }
}
function setduration() {
    track.currentTime = songrange.value;
}
playlistimg.addEventListener("click", () => {
    playlist.classList.toggle("playlist-active");
    if (playlist.classList.contains("playlist-active")) {
        playlistimg.src = "svgs/cross.svg";
    }
    else {
        playlistimg.src = "svgs/playlist.svg";
    }
})
playlistsong.forEach((song, index) => {
    song.addEventListener("click", () => {
        loadtrack(index);
        playsong();
    })
})