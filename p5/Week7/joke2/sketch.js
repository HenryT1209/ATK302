var myState = 0 ;
var timer = 0 ;

function setup() {
  // put setup code here
  createCanvas(800, 800);

}

function draw() {
  // put drawing code here

  switch (myState) {
    case 0:
      background('grey');
      textSize(25);
      text("Click only once for the joke and wait!", 20, 100);
      break;

    case 1:
      background('cyan');
      textSize(20);
      text("Two fishes are sitting in a tank.", 20, 100);
      timer = timer + 1 ;
      if (timer > 200) {
        myState = 2 ;
        timer = 0 ;
      }
      break;

    case 2:
      background('cyan');
      textSize(20);
      text("One looks over at the other and says, Hey, do you know how to drive this thing?", 20, 100);
      break;


}
}

function mouseReleased() {

  myState = myState + 1;

  if (myState > 2) {
    myState = 0;
  }
}
