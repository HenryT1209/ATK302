var drops = [];
var axisY = 1;
var axisX = 0;
var c1, c2;

function setup() {
  createCanvas(800, 800, P2D);
  for (var i = 0; i < 400; i++) {
    drops[i] = new Drop();
  }
  c1 = color(30, 30, 50);
  c2 = color(0, 150);
}

//Create thunderbolts
setInterval(thunder, 3500);

function thunder() {
  stroke(255, 255, 180, 150);
  strokeWeight(random(6, 10));
  noFill();
  frameRate(12);
  beginShape();
  vertex(random(0, width), 0);
  vertex(random(0, width), height / 10);
  vertex(random(0, width), height / 8);
  vertex(random(0, width), height / 6);
  vertex(random(0, width), height / 4);
  vertex(width / 2 + 100, height / 2);
  endShape();
}

function Drop() {
  //display drops
  this.x = random(0, width);
  this.y = random(-10, height);
  this.d = 2;
  this.h = random(2, 10);
  this.col = map(this.h, 2, 10, 100, 255);

  this.show = function() {
    noStroke();
    fill(this.col, 100);
    ellipse(this.x, this.y, this.d, this.h);
  }

  //move object
  this.vel = 0;
  this.grv = map(this.h, 2, 10, 3, 10);
  this.off = map(this.h, 2, 10, height / 2, height);

  this.move = function() {
    this.y += this.vel;
    this.vel = this.grv;
    if (this.y > this.off) {
      this.y = -10;
    }
  }
}

function draw() {
  // put drawing code here
  background(120)
  strokeWeight(2);
  stroke(0);

  fill(128, 64, 0);
  rect(125, 300, 40, 350);

  fill(25, 97, 21);
  arc(520, 660, 1240, 120, PI, TWO_PI);

  fill(50, 168, 82);
  arc(146, 350, 280, 320, PI, TWO_PI);

  if (mouseIsPressed) {
    // this is the "pressed" state
    background(255)

    textSize(20)
    let s = 'He realized how much he took his life for granted and learned to enjoy it. He gained the ability to spread this vibrancy to others, uplifting the lives of many. (Move mouse around)                                     "Stay Vibrant friends"';
    fill(0);
    text(s, 10, 10, 600, 150);

    fill(128, 64, 0);
    rect(125, 300, 40, 350);

    fill(117, 255, 16);
    arc(520, 660, 1240, 120, PI, TWO_PI);

    fill(101, 252, 81);
    arc(146, 350, 280, 320, PI, TWO_PI);

noStroke()

    X = mouseY - 100

    //violet
    fill(100, 0, 200, X)
    ellipse(503, 319, 500, 500)
    //indigo
    fill(150, 0, 200, X)
    ellipse(503, 319, 490, 490)
    //blue
    fill(0, 150, 250, X)
    ellipse(503, 319, 480, 480)
    //green
    fill(20, 250, 20, X)
    ellipse(503, 319, 470, 470)
    //yellow
    fill(250, 250, 0, X)
    ellipse(503, 319, 460, 460)
    //orange
    fill(250, 150, 40, X)
    ellipse(503, 319, 450, 450)
    //red
    fill(240, 20, 20, X)
    ellipse(503, 319, 440, 440)

stroke(1)

    fill(0);
    ellipse(588, 300, 110, 110);

    fill(0);
    ellipse(420, 300, 110, 110);
    //body
    fill(255);
    ellipse(500, 520, 200, 200);
    //head
    fill(255);
    ellipse(500, 390, 295, 215);

    fill(0);
    ellipse(499, 404, 40, 20);

    line(499.20001220703125, 413.73333740234375, 499.20001220703125, 443.73333740234375)

    curve(482.20001220703125, 428.73333740234375, 499.20001220703125, 443.73333740234375, 529.2000122070312, 440.73333740234375, 547.2000122070312, 441.73333740234375)

    curve(482.20001220703125, 428.73333740234375, 499.20001220703125, 443.73333740234375, 473.2000122070312, 440.73333740234375, 547.2000122070312, 441.73333740234375)

    //eyes
    fill(0);
    strokeWeight(1);

    fill(255);
    ellipse(506, 399, 15, 8);

    noStroke();
    fill(255);
    ellipse(450, 362, 58, 58);

    fill(255);
    ellipse(555, 362, 58, 58);

    fill(0);
    ellipse(452.5, 360, 45, 45);

    fill(0);
    ellipse(552, 360, 45, 45);

    fill(255);
    ellipse(459.5, 350, 13, 13);

    fill(255);
    ellipse(545, 350, 13, 13);

    fill(255);
    ellipse(452.5, 357, 5, 5);

    fill(255);
    ellipse(552, 357, 5, 5);

    //arms
    fill(0);
    ellipse(400, 510.6285705566406, 100, 50);

    fill(0);
    ellipse(600, 510.6285705566406, 100, 50);
    //feet black
    fill(0);
    ellipse(566, 594, 100, 100);

    fill(0);
    ellipse(430, 594, 100, 100);
    //feet white
    fill(255);
    ellipse(563, 604, 75, 75);

    fill(255);
    ellipse(433, 604, 75, 75);


  } else {
    //non-pressed state
    textSize(25)
    let s = 'There once was a panda named Greg. He was always an angry panda. One day he wandered off angrily into the woods and got lost. A heavy thunderstorm came upon and a lighting struck him! Ever since, his life has changed forever...';
    fill(0);
    text(s, 10, 10, 600, 300);

    //ears
    fill(0);
    ellipse(588, 300, 110, 110);

    fill(0);
    ellipse(420, 300, 110, 110);
    //body
    fill(255);
    ellipse(500, 520, 200, 200);
    //head
    fill(255);
    ellipse(500, 390, 295, 215);

    fill(0);
    ellipse(499, 404, 40, 20);

    //eyes
    fill(0);
    strokeWeight(1);

    fill(255);
    ellipse(506, 399, 15, 8);

    line(561, 312, 519, 339)

    line(451, 316, 490, 342)

    line(433, 452, 463, 423)

    line(463, 423, 472, 452)

    line(472, 452, 490, 429)

    line(490, 429, 535, 457)

    line(535, 457, 561, 429)

    noStroke();
    fill(255);
    ellipse(450, 362, 58, 58);

    fill(255);
    ellipse(555, 362, 58, 58);

    fill(0);
    ellipse(452.5, 360, 45, 45);

    fill(0);
    ellipse(552, 360, 45, 45);

    fill(255);
    ellipse(459.5, 350, 13, 13);

    fill(255);
    ellipse(545, 350, 13, 13);

    fill(255);
    ellipse(452.5, 357, 5, 5);

    fill(255);
    ellipse(552, 357, 5, 5);

    //arms
    fill(0);
    ellipse(450, 510.6285705566406, 100, 50);

    fill(0);
    ellipse(550, 510.6285705566406, 100, 50);
    //feet black
    fill(0);
    ellipse(566, 594, 100, 100);

    fill(0);
    ellipse(430, 594, 100, 100);
    //feet white
    fill(255);
    ellipse(563, 604, 75, 75);

    fill(255);
    ellipse(433, 604, 75, 75);

  }

}

function mousePressed() {
  console.log(mouseX + ", " + mouseY);
}
