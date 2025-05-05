if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "/login.html";
}


const musicList = [
    { title: "Cartoon", mp3: "/sound/Cartoon.mp3", image: "/images/musicImages/cartoon.jpg" },
    { title: "Plastic", mp3: "/sound/Plastic.mp3", image: "/images/musicImages/plastic.jpg" },
    { title: "Sam Day", mp3: "/sound/SamDay.mp3", image: "/images/musicImages/samday.jpg" },
    { title: "Zeli", mp3: "/sound/Zeli.mp3", image: "/images/musicImages/zeli.jpg" }
];

let currentAudio = null; // Tracks the currently playing audio

function loadMusic() {
    const container = document.getElementById("row-music-container");
    container.innerHTML = ""; // Clear previous content
    
    musicList.forEach((music, index) => {
        // Create the music item
        const colDiv = document.createElement("div");
        colDiv.className = "col-md-4 text-center"; // Bootstrap column styling
        
        const img = document.createElement("img");
        img.src = ".."+music.image;
        img.className = "img-fluid rounded";
        img.alt = music.title;
        img.onclick = () => playMusic(".."+music.mp3, img); // Assign click event
        
        const title = document.createElement("h5");
        title.innerText = music.title;

        colDiv.appendChild(img);
        colDiv.appendChild(title);
        container.appendChild(colDiv);
    });
}


function playMusic(mp3, clickedImage) {
    if (currentAudio) {
        if (!currentAudio || currentAudio.src !== mp3 || currentAudio.paused) {
            currentAudio.pause();
            currentAudio = null;
            return;
        }
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    
    currentAudio = new Audio(mp3);
    currentAudio.play();
}


document.addEventListener("DOMContentLoaded", loadMusic);