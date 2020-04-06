var myState = 0 ;

function setup() {
  // put setup code here
  createCanvas(800, 800);

}

function draw() {
  // put drawing code here

  switch (myState) {
    case 0:
      background(255, 0, 0);
      textSize(100);
      text("Hello", width / 2, 100);
      break;

    case 1:
      background(0, 255, 0);
      textSize(100);
      text("I'm Here", 100, 100);
      break;

    case 2:
      background(0, 0, 255);
      textSize(100);
      text("Good Bye", 100, 100);
      break;

}
}

function mouseReleased() {

  myState = myState + 1;

  if (myState > 2) {
    myState = 0;
  }
}
