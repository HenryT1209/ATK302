var x = 0 ;


function setup() {
  // put setup code here
  createCanvas(500, 500) ;
}

function draw() {
  // put drawing code here
  background ('red') ;
  rect(x, 10, 10, 10);
  ellipse(x-5, 18, 10, 10);
  ellipse(x+10, 18, 10, 10);

  x = x + 1 ;

  if (x > width) {
    x = 0
  }
}
