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
  rect(10, 10, 10, 10);
  pop();

  x = x + 5
  if (x > width) {
    x = -800;
  }



}
