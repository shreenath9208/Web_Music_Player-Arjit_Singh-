// console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');

// This is the actully code for the making an array for iterating throught the all the songs 
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName: "Kesariya", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "O Bedardeya", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Deva Deva", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Kahani Suno", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Tera yar Hoon Main", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Dil Galti Kar Baitha Hain", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Bom Diggy Diggy", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Chote Chote Peg", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Ami Je Tomar", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Tere Pyar Mein", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        // Here is the use of the classlist tag to manipulate the content of the class attribute 
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 

    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-play-circle');
        element.classList.add('fa-pause-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;

        // This is actully the code of line for the bottom play buttons 
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})