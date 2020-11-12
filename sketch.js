let sounds = [];
let lastPlayedSound = 29;
let soundPaused = false;
let firstPlay = false;

function preload() {
  for (let i = 0; i < 30; i++) {
    sounds[i] = loadSound('/sounds/yamaha' + (i + 1) + '.wav');
    sounds[i].onended(endOfSample);
  }
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
}
function draw() {
  background(100);
  playBar();
  if (firstPlay) {
    text(
      'File ' +
        lastPlayedSound +
        (sounds[lastPlayedSound].isPlaying()
          ? ' is playing'
          : sounds[lastPlayedSound].isPaused()
          ? ' is paused'
          : ' has finished'),
      width / 2,
      height / 2
    );
    line(10, height / 2, width - 10, height / 2);
  }
}

function mousePressed() {
  firstPlay = true;
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

function endOfSample() {}

function playBar() {
  rectMode(CENTER);
  fill(0);
  rect(
    map(
      sounds[lastPlayedSound].currentTime(),
      0,
      sounds[lastPlayedSound].duration(),
      10,
      width - 10
    ),
    height / 2,
    10,
    40
  );
}
