var myState = 0 ;

function setup() {
  // put setup code here
  createCanvas(800, 800) ;
}

function draw() {
  // put drawing code here
  background('grey') ;

  switch (myState) {

      case 0:
      textSize(20);
      text("What's the best thing about Switzerland?", 50, 100);
      break;

      case 1:
      textSize(20);
      text("I don't know, but their flag is a huge plus.", 50, 100);
      rect(200, 200, 200, 30)
      rect(285, 125, 30, 200)
      break;

}
}

  function mouseReleased() {

    myState = myState + 1;

    if (myState > 1) {
      myState = 0;
    }
}
