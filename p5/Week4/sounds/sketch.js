var song1;
var san1;
var san2;

function preload() {
  song1 = loadSound('assets/San Honest.mp3');
}

function setup() {

  createCanvas(windowWidth, 700);

  imageMode(CENTER);

  san1 = loadImage("assets/San 1.jpg");
  san2 = loadImage("assets/san3.gif");

  song1.play(); // this is what starts the sound

}

function draw() {
  image(san1, width/2, height/2, 900, 500);

}
