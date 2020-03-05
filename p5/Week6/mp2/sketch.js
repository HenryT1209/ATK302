var myState = 0;
var timer = 0;
var back1;
var futura;
var x = 0;
var song1;

function preload() {
  song1 = loadSound('assets/mp2mk.mp3');
}

function setup() {
  // put setup code here
  createCanvas(800, 800);

  ftr = loadFont("fonts/futura.ttf");

  imageMode(CENTER);
  back1 = loadImage("assets/blueback.jpg");

}

function draw() {
  // put drawing code here
  textFont(ftr, 25);

  switch (myState) {
    case 0:
    background('blue')
    text("click to start!", 300, 300);
    break;


    case 1:
      image(back1, 400, 400, 800, 800);
      fill(255, 255, 255);
      text("hi friend", 300, 300);
      rect(200, 400, 100, 200)
      rect(180, 500, 50, 20)
      rect(280, 500, 50, 20)
      ellipse(230, 400, 30, 30)
      ellipse(270, 400, 30, 30)
      ellipse(245, 450, 30, 10)
      ellipse(270, 400, 30, 30)
      ellipse(245, 450, 30, 10)
  song1.play();

      timer = timer + 1;
      if (timer > 700) {
        myState = 2;
        timer = 0;
      }
      break;

    case 2:
      image(back1, 400, 400, 800, 800);
      fill(255, 255, 255);
      text("i know things may be tough and overwhelming...", 100, 100);
      rect(400, 400, 100, 200)
      rect(380, 500, 50, 20)
      rect(480, 500, 50, 20)
      ellipse(430, 400, 30, 30)
      ellipse(470, 400, 30, 30)
      ellipse(420, 450, 30, 10)

      timer = timer + 1;
      if (timer > 700) {
        myState = 3;
        timer = 0;
      }
      break;

    case 3:
      image(back1, 400, 400, 800, 800);
      fill(255, 255, 255);
      text("but you'll get through it. i know you can", 100, 300);
      rect(400, 400, 100, 200)
      rect(380, 500, 50, 20)
      rect(480, 500, 50, 20)
      ellipse(430, 400, 30, 30)
      ellipse(470, 400, 30, 30)
      ellipse(420, 460, 28, 12)

      timer = timer + 1;
      if (timer > 700) {
        myState = 4;
        timer = 0;
      }
      break;

    case 4:
      image(back1, 400, 400, 800, 800);
      fill(255, 255, 255);
      text("here, click this magic red ball to clear your mind", 100, 200);
      text("(or anywhere i guess)", 100, 250);
      rect(400, 400, 100, 200)
      rect(380, 500, 50, 20)
      rect(480, 500, 50, 20)
      ellipse(430, 400, 30, 30)
      ellipse(470, 400, 30, 30)
      ellipse(420, 460, 18, 32)
      fill(255, 0, 0)
      ellipse(300, 400, 50, 50)

      break;

    case 5:
      image(back1, 400, 400, 800, 800);
      fill(255, 255, 255);
      text("isn't that better?", 500, 450);
      rect(200, 400, 100, 200)
      rect(180, 500, 50, 20)
      rect(280, 500, 50, 20)
      ellipse(230, 400, 30, 30)
      ellipse(270, 400, 30, 30)
      ellipse(220, 460, 38, 10)

      timer = timer + 1;
      if (timer > 700) {
        myState = 5;
        timer = 0;
      }

      break;

    case 6:
      image(back1, 400, 400, 800, 800);
      fill(255, 255, 255);
      text("i believe in u bud", 300, 150);
      rect(200 + x, 400, 100, 200)
      rect(180 + x, 500, 50, 20)
      rect(280 + x, 500, 50, 20)
      ellipse(230 + x, 430, 30, 2)
      ellipse(270 + x, 430, 30, 2)
      ellipse(220 + x, 460, 38, 4)

      x += 1;

      break;

  }
}

function mouseReleased() {
  if (myState == 0) {
    myState = 1;
  }

  if (myState == 4) {
    myState = 5;
  }
}
