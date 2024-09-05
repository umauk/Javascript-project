const playlist = {
    panja: [
        { name: 'Anukoneledhuga', artist: 'Artist 1', file: './panja/Anukoneledhuga.mp3' },
        { name: 'Ela Ela', artist: 'Artist 2', file: './panja/Ela Ela.mp3' },
        { name: 'Kshanam Kshanam', artist: 'Artist 3', file: './panja/Kshanam Kshanam.mp3' },
        { name: 'Panja', artist: 'Artist 4', file: './panja/panja.mp3' },
        { name: 'Paparayudu', artist: 'Artist 5', file: './panja/Paparayudu.mp3' },
        { name: 'Veyira Cheyyi', artist: 'Artist 6', file: './panja/Veyira Cheyyi.mp3' }
    ],
    srimanthudu: [
        { name: 'Charuseela', artist: 'Artist 7', file: './srimantudu/Charuseela.mp3' },
        { name: 'Dhimmathirigae', artist: 'Artist 8', file: './srimantudu/Dhimmathirigae.mp3' },
        { name: 'Jaago', artist: 'Artist 9', file: './srimantudu/Jaago.mp3' },
        { name: 'Jatha kalisey', artist: 'Artist 10', file: './srimantudu/Jatha kalisey.mp3' },
        { name: 'Rama Rama', artist: 'Artist 11', file: './srimantudu/Rama Rama.mp3' },
        { name: 'Srimanthuda', artist: 'Artist 12', file: './srimantudu/Srimanthuda.mp3' }
    ],
    mirchi: [
        { name: 'Chitti Aayire', artist: 'Artist 13', file: './mirchi/Chitti Aayire.mp3' },
        { name: 'Guchchi Guchchi', artist: 'Artist 14', file: './mirchi/Guchchi Guchchi.mp3' },
        { name: 'Love Me', artist: 'Artist 15', file: './mirchi/Love Me.mp3' },
        { name: 'Sudu Sude', artist: 'Artist 16', file: './mirchi/Sudu Sude.mp3' },
        { name: 'Talaiva', artist: 'Artist 17', file: './mirchi/Talaiva.mp3' }
    ]
};

let currentPlaylist = playlist.panja;
let currentSongIndex = 0;

// Function to change playlist
function changePlaylist(playlistName) {
    currentPlaylist = playlist[playlistName];
    currentSongIndex = 0; // Reset to start from the first song
    loadSong(playlistName);
}

// Function to load a song from the playlist
function loadSong(playlistName) {
    const song = currentPlaylist[currentSongIndex];
    const audioPlayer = document.getElementById(`audio-player-${playlistName}`);
    const songNameElement = document.getElementById(`song-name-${playlistName}`);
    const artistNameElement = document.getElementById(`artist-name-${playlistName}`);

    audioPlayer.src = song.file;
    songNameElement.textContent = song.name;
    artistNameElement.textContent = song.artist;
    audioPlayer.play();
}

// Function to play or pause the audio
function playPause(playlistName) {
    const audioPlayer = document.getElementById(`audio-player-${playlistName}`);
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
}

// Function to play the next song
function nextSong(playlistName) {
    const audioPlayer = document.getElementById(`audio-player-${playlistName}`);
    currentSongIndex = (currentSongIndex + 1) % currentPlaylist.length;
    loadSong(playlistName);
}

// Function to play the previous song
function previousSong(playlistName) {
    const audioPlayer = document.getElementById(`audio-player-${playlistName}`);
    currentSongIndex = (currentSongIndex - 1 + currentPlaylist.length) % currentPlaylist.length;
    loadSong(playlistName);
}

// Function to set the volume of the audio player
function setVolume(playlistName, volume) {
    const audioPlayer = document.getElementById(`audio-player-${playlistName}`);
    audioPlayer.volume = volume;
}

// Initialize with the first playlist (panja)
loadSong('panja');