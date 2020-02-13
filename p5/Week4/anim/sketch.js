var x = 0;

function setup() {
  // put setup code here
  createCanvas(1525, 800);

}

function draw() {
  // put drawing code here
  background('white');

  push();
  translate(x, 0);
  henry();
  pop();

  x = x + 5
  if (x > width) {
    x = -800;
  }
}


function henry() {
  //violet
  fill(100, 0, 200)
  ellipse(503, 319, 500, 500)
  //indigo
  fill(150, 0, 200)
  ellipse(503, 319, 490, 490)
  //blue
  fill(0, 150, 250)
  ellipse(503, 319, 480, 480)
  //green
  fill(20, 250, 20)
  ellipse(503, 319, 470, 470)
  //yellow
  fill(250, 250, 0)
  ellipse(503, 319, 460, 460)
  //orange
  fill(250, 150, 40)
  ellipse(503, 319, 450, 450)
  //red
  fill(240, 20, 20)
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


}
