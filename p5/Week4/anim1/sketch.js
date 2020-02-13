var x = 0 ;

function setup() {
  // put setup code here
createCanvas(400, 400) ;

}

function draw() {
  // put drawing code here
  background('red')
  ellipse(x, 100, 100, 100)
  x += 5 ;
  if (x > width + 100) {
  x = -100;
}


}
