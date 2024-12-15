let currentCategory = '';  
let currentTrackIndex = 0; // Tracks the current track index  
const tracks = {  
    Afrobeats: [  
        { title: "Track 1 - Chiké & Mohbad - Egwu", src: "Afrobeats/Chiké & Mohbad - Egwu (Official Video).mp3" },  
        { title: "Track 2 - Rema - AZAMAN", src: "Afrobeats/Rema - AZAMAN.mp3" },  
        { title: "Track 3 - Tekno - Pana", src: "Afrobeats/Tekno - Pana (Official Music Video).mp3" },  
        { title: "Track 4 - Tems- Damages", src: "Afrobeats/Tems- Damages (Official Video).mp3" },  
        { title: "Track 5 - Wizkid - Joro", src: "Afrobeats/Wizkid - Joro (Official Video).mp3" }  
    ],  
    Amapiano: [  
        { title: "Track 1 - Asake, Olamide - Amapiano", src: "Amapiano/Asake, Olamide - Amapiano (Official Video).mp3" },  
        { title: "Track 2 - Kamo Mphela, Khalil Harrison & Tyler ICU - Dalie", src: "Amapiano/Kamo Mphela, Khalil Harrison & Tyler ICU - Dalie [Feat Baby S.O.N] (Official Music Video) - Amapiano.mp3" },  
        { title: "Track 3 - TitoM & Yuppe - Tshwala Bam [Ft. S.N.E & EeQue]", src: "Amapiano/TitoM & Yuppe - Tshwala Bam [Ft. S.N.E & EeQue] (Official Music Video).mp3" },  
        { title: "Track 4 - Tyler ICU & Tumelo.za----", src: "Amapiano/Tyler ICU & Tumelo.za - Mnike (Visualizer) ft. DJ Maphorisa, Nandipha808, Ceeka RSA & Tyron Dee.mp3" },  
        { title: "Track 5 - Uncle Waffles & Royal Musiq - Wadibusa ft. Ohp Sage, Pcee & DJY Biza", src: "Amapiano/Uncle Waffles & Royal Musiq - Wadibusa ft. Ohp Sage, Pcee & DJY Biza (Official Music Video).mp3" }  
    ],  
    Pop: [  
        { title: "Track 1 - BTS 'Dynamite'", src: "Pop/BTS (방탄소년단) 'Dynamite' Official MV.mp3" },  
        { title: "Track 2 - Doja Cat - Kiss Me More", src: "Pop/Doja Cat - Kiss Me More (Official Video) ft. SZA.mp3" }, 
        { title: "Track 3 - Dua Lipa - New Rules", src: "Pop/Dua Lipa - New Rules (Official Music Video).mp3" },  
        { title: "Track 4 - Lady Gaga, Bruno Mars - Die With A Smile", src: "Pop/Lady Gaga, Bruno Mars - Die With A Smile (Official Music Video).mp3" },  
        { title: "Track 5 - ROSE & Bruno Mars - APT.", src: "Pop/ROSE & Bruno Mars - APT. (Official Music Video).mp3" }  
    ],  
    RnB: [  
        { title: "Track 1 - Giveon - Heartbreak Anniversary", src: "Rnb/Giveon - Heartbreak Anniversary (Official Music Video).mp3" },  
        { title: "Track 2 - Giveon - Like I Want You", src: "Rnb/Giveon - Like I Want You (Official Music Video).mp3" }, 
        { title: "Track 3 - Justin Bieber - Peaches ft. Daniel Caesar, Giveon", src: "Rnb/Justin Bieber - Peaches ft. Daniel Caesar, Giveon.mp3" },  
        { title: "Track 4 - SZA - Hit Different ft. Ty Dolla $ign", src: "Rnb/SZA - Hit Different (Official Video) ft. Ty Dolla $ign.mp3" },  
        { title: "Track 5 - SZA - Kill Bill", src: "Rnb/SZA - Kill Bill (Official Video).mp3" }  
    ],  
    'Hip Hop': [  
        { title: "Track 1 - Travis Scott -Fein ft. Playboi Carti", src: "Hiphop/Travis Scott -Fein ft. Playboi Carti.mp3" },  
        { title: "Track 2 - Drake - Nice for what", src: "Hiphop/Drake - Nice for what.mp3" },  
        { title: "Track 3 - Kendrick Lamar - Not Like Us", src: "Hiphop/Kendrick Lamar - Not Like Us.mp3" },  
        { title: "Track 4 - Travis Scott - Sicko Mode ft. Drake", src: "Hiphop/Travis Scott - Sicko Mode ft. Drake.mp3" },  
        { title: "Track 5 - XXX Tentacion - Sad!", src: "Hiphop/XXX Tentacion - Sad!.mp3" }  
    ]  
};  

function displayCategory(category) {  
    currentCategory = category;  
    currentTrackIndex = 0; 
    const playlist = document.getElementById('playlist');  
    playlist.innerHTML = ''; 
    
    tracks[category].forEach((track, index) => {  
        const li = document.createElement('li');  
        li.innerHTML = `${track.title}`;  
        playlist.appendChild(li);  
    });  
    
    loadTrack(currentTrackIndex);  
}  

function loadTrack(index) {  
    const audioPlayer = document.getElementById('audioPlayer');  
    const audioSource = document.getElementById('audioSource');  
    
    audioSource.src = tracks[currentCategory][index].src;  
    audioPlayer.load();  
    audioPlayer.play();  
}  

function playAudio() {  
    const audioPlayer = document.getElementById('audioPlayer');  
    audioPlayer.play();  
}  

function pauseAudio() {  
    const audioPlayer = document.getElementById('audioPlayer');  
    audioPlayer.pause();  
}  

function skipTrack(direction) {  
    currentTrackIndex += direction;  
    if (currentTrackIndex < 0) {  
        currentTrackIndex = 0; 
    } else if (currentTrackIndex >= tracks[currentCategory].length) {  
        currentTrackIndex = tracks[currentCategory].length - 1; 
    }  
    loadTrack(currentTrackIndex);  
}  

function setVolume(value) {  
    const audioPlayer = document.getElementById('audioPlayer');  
    audioPlayer.volume = value;  
}  

function createPlaylist() {  
    alert("Feature to create a new playlist is coming soon!");  
}  

function showFavorites() {  
    alert("Feature to show favorites is coming soon!");  
}  