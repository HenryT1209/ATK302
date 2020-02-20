var mic;
var vol;
var x = 0 ;

function setup() {
  createCanvas(800, 800);

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background('maroon');

  //ears
  fill(0);
  ellipse(588-x, 300, 110, 110);

  fill(0);
  ellipse(420-x, 300, 110, 110);
  //body
  fill(255);
  ellipse(500-x, 520, 200, 200);
  //head
  fill(255);
  ellipse(500-x, 390, 295, 215);

  fill(0);
  ellipse(499-x, 404, 40, 20);

  //eyes
  fill(0);
  strokeWeight(1);

  fill(255);
  ellipse(506-x, 399, 15, 8);

  line(561-x, 312, 519, 339)

  line(451-x, 316, 490, 342)

  line(433-x, 452, 463, 423)

  line(463-x, 423, 472, 452)

  line(472-x, 452, 490, 429)

  line(490-x, 429, 535, 457)

  line(535-x, 457, 561, 429)

  noStroke();
  fill(255);
  ellipse(450-x, 362, 58, 58);

  fill(255);
  ellipse(555-x, 362, 58, 58);

  fill(0);
  ellipse(452.5-x, 360, 45, 45);

  fill(0);
  ellipse(552-x, 360, 45, 45);

  fill(255);
  ellipse(459.5-x, 350, 13, 13);

  fill(255);
  ellipse(545-x, 350, 13, 13);

  fill(255);
  ellipse(452.5-x, 357, 5, 5);

  fill(255);
  ellipse(552-x, 357, 5, 5);

  //arms
  fill(0);
  ellipse(450-x, 510.6285705566406, 100, 50);

  fill(0);
  ellipse(550-x, 510.6285705566406, 100, 50);
  //feet black
  fill(0);
  ellipse(566-x, 594, 100, 100);

  fill(0);
  ellipse(430-x, 594, 100, 100);
  //feet white
  fill(255);
  ellipse(563-x, 604, 75, 75);

  fill(255);
  ellipse(433-x, 604, 75, 75);

  vol = mic.getLevel(); // level is between 0 and 1
  vol = vol * 100; // you may need to change this

  if (vol > 3) {
    // do something
    x++ ;

  }


  textSize(28);
  text("Click the screen first then scream to scare the panda away!", 20, 150);

  textSize(18)
  text("My volume is " + vol, 400,770)


}


// you need to click the screen before the mic input will work.
function touchStarted() {
  getAudioContext().resume();
}
