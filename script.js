// Temperature Section

// Initial temperature value
let currentTemperature = 78;

// Function to update and display the temperature
function updateTemperature() {
    document.getElementById('temperatureDisplay').textContent = currentTemperature + '°F';
}

document.getElementById('increaseTemp').addEventListener('click', function() {
    // Increase temperature by 1 degree
    currentTemperature++;
    updateTemperature();
});

document.getElementById('decreaseTemp').addEventListener('click', function() {
    // Decrease temperature by 1 degree
    currentTemperature--;
    updateTemperature();
});

// Initial display of the temperature
updateTemperature();


// Music Section

// Array of funny song names
const allSongsList = [
  "Tell Me - Dru Hill",
  "Doin' Just Fine - Boyz II Men",
  "Closer - Ne-Yo",
  "Yeah! - Usher",
  "Can We Talk - Tevin Campbell",
  "Come & Talk To Me - Jodeci",
  "My Prerogative - Bobby Brown",
  "Pretty Brown Eyes - Mint Condition",
  "She Is - Carl Thomas",
  "Right & A Wrong Way - Keith Sweat",
  "All The Things - Joe",
  "Can You Stand The Rain - New Edition"
];

let isPlaying = false;
let currentSongIndex = 0;

// Play/Pause button click event
document.getElementById('playPause').addEventListener('click', () => {
    if (!isPlaying) {
        isPlaying = true;
        songNameDisplay.textContent = getRandomSong();
        document.getElementById('playPause').innerHTML = '<i class="fas fa-pause"></i> Pause';
    } else {
        isPlaying = false;
        document.getElementById('playPause').innerHTML = '<i class="fas fa-play"></i> Play';
    }
});

// Stop button click event
document.getElementById('stopMusic').addEventListener('click', () => {
  isPlaying = false;
  document.getElementById('playPause').innerHTML = '<i class="fas fa-play"></i> Play';
  songNameDisplay.textContent = "Press Play to start music!";
});

// Next button click event
document.getElementById('nextSong').addEventListener('click', () => {
  if (isPlaying) {
      songNameDisplay.textContent = getRandomSong();
  }
});

function getRandomSong() {
  const randomIndex = Math.floor(Math.random() * allSongsList.length);
  return allSongsList[randomIndex];
}

function updateSongDisplay() {
  document.getElementById('songDisplay').textContent = allSongsList[currentSongIndex];
}

