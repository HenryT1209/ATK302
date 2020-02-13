function setup() {
  // put setup code here
  createCanvas(800, 800);

}

function draw() {
  // put drawing code here


  case 2:
  background('red');
  text("I'm in state 2", 100, 100) ;
  break ;

  case 3:
  break ;

  case 4:
  break ;

}

function mouseReleased() {
  myState = myState + 1;
    myState = 0 ;
  }
}
