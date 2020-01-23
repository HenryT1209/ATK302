var bubbles = [];

function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);
  for (var i = 0; i < 4; i++) {
    bubbles[i] = new Bubble();
  }
}

function draw() {
  background(204, 230, 255);
  noStroke();

  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }


  fill(255, 128, 128);
  rect(100, 225, 200, 250);

  fill(255, 255, 255);
  rect(125, 240, 45, 45);

  fill(255, 255, 255);
  rect(235, 240, 45, 45);

  fill(102, 68, 0);
  rect(180, 280, 45, 79);

  fill(128, 64, 0);
  rect(500, 200, 40, 200);

  fill(255, 255, 102);
  ellipse(620, 80, 200, 200);

  fill(153, 102, 0);
  triangle(100, 226, 300, 226, 200, 120);

  fill(179, 255, 179);
  arc(520, 400, 1240, 120, PI, TWO_PI);

  fill(0, 204, 0);
  arc(520, 200, 280, 320, PI, TWO_PI);

}

function Bubble() {
  this.x = random(0, width);
  this.y = random(0, height);

  this.display = function() {
    stroke(255);
    strokeWeight(1);
    fill(255);
    ellipse(this.x, this.y, 24, 24);
    ellipse(this.x + 10, this.y + 10, 24, 24);
    ellipse(this.x + 30, this.y + 10, 24, 24);
    ellipse(this.x + 30, this.y - 10, 24, 24);
    ellipse(this.x + 20, this.y - 10, 24, 24);
    ellipse(this.x + 40, this.y, 24, 24);
  }

  this.move = function() {
    this.x = this.x += 1;
    this.y = this.y + random(-1, 1);

    if (this.x >= width) {
      this.x = 0;
    }
  }
}


function mouseClicked() {
  bubbles.push(new Bubble());
}

function keyPressed() {
  bubbles.splice(Bubble.length - 1, 1);
}
