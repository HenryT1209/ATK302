var myState = 0;
var timer = 0 ;
var x = 0 ;

function setup() {
  // put setup code here
  createCanvas(1200, 600) ;
  rectMode(CENTER) ;
  ellipseMode(CENTER) ;
}

function draw() {
  // put drawing code here
  background('white') ;

switch (myState) {
    case 0:
    fill(255, 0, 0);
    rect(600, 150, 50, 50)

    fill(255, 255, 0, 20);
    rect(600, 200, 50, 50)

    fill(0, 255, 0, 20);
    rect(600, 250, 50, 50)

    fill('grey')
    rect(50, 350, 100, 50)

    fill('grey')
    ellipse(20, 375, 25, 25, 25)

    fill('grey')
    ellipse(70, 375, 25, 25, 25)

    timer = timer + 1 ;
    if (timer > 200) {
      myState = 1 ;
      timer = 0 ;
    }
    break;

    case 1:
    fill(255, 0, 0, 20);
    rect(600, 150, 50, 50)

    fill(255, 255, 0, 20);
    rect(600, 200, 50, 50)

    fill(0, 255, 0);
    rect(600, 250, 50, 50)

    fill('grey')
    rect(50 + x, 350, 100, 50)

    fill('grey')
    ellipse(20 + x, 375, 25, 25, 25)

    fill('grey')
    ellipse(70 + x, 375, 25, 25, 25)

    x += 3 ;
    if (x > width + 100) {
    x = -100;
  }
    timer = timer + 1 ;
    if (timer > 200) {
      myState = 2 ;
      timer = 0 ;
    }
    break;

    case 2:
    fill(255, 0, 0, 20);
    rect(600, 150, 50, 50)

    fill(255, 255, 0);
    rect(600, 200, 50, 50)

    fill(0, 255, 0, 20);
    rect(600, 250, 50, 50)

    fill('grey')
    rect(50 + x, 350, 100, 50)

    fill('grey')
    ellipse(20 + x, 375, 25, 25, 25)

    fill('grey')
    ellipse(70 + x, 375, 25, 25, 25)

    x += 1 ;
    if (x > width + 100) {
    x = -100;
  }
    timer = timer + 1 ;
    if (timer > 200) {
      myState = 3 ;
      timer = 0 ;
    }
    break;

    case 3:
    textSize(50);
    text("Click to restart!", 100, 100)

    fill(255, 0, 0);
    rect(600, 150, 50, 50)

    fill(255, 255, 0, 20);
    rect(600, 200, 50, 50)

    fill(0, 255, 0, 20);
    rect(600, 250, 50, 50)

    fill('grey')
    rect(50 + x, 350, 100, 50)

    fill('grey')
    ellipse(20 + x, 375, 25, 25, 25)

    fill('grey')
    ellipse(70 + x, 375, 25, 25, 25)

    x += 0 ;
    if (x > width + 100) {
    x = -100;
  }
    break;


}

}
function mouseReleased() {

  if (myState == 3) {
    myState = 0;
    timer = 0;
    x = 0;
  }
}
