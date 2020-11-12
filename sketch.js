let sounds = [];
let lastPlayedSound = 29;
let soundPaused = false;
let autoPlay = false;

function preload() {
  for (let i = 0; i < 30; i++) {
    sounds[i] = loadSound('/sounds/yamaha' + (i + 1) + '.wav');
    sounds[i].rate(10);
  }
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {}

function mousePressed() {
  if (sounds[lastPlayedSound].isPlaying()) {
    sounds[lastPlayedSound].pause();
    soundPaused = true;
  } else {
    if (soundPaused) {
      sounds[lastPlayedSound].play();
      soundPaused = false;
    } else {
      let nextSound = (lastPlayedSound + 1) % 30;
      sounds[nextSound].play();
      lastPlayedSound = nextSound;
    }
  }
}
