var myCar;
var myCar2;
var cars = [];
var frogPos;
var myState = 0 ;
var maxTimer = 10*60 ;
var timer = maxTimer ;

function setup() {
  // put setup code here
  createCanvas(800, 800);

  //spawn cars
  for (var i = 0; i < 5; i++) {
    cars.push(new Car());

  }

  frogPos = createVector(400, height - 100);


  textAlign(CENTER)

}

function draw() {
  // put drawing code here

  switch (myState) {

    case 0: //menu
      background(255, 0, 0);
      textSize(24);
      fill('white')
      text("Welcome to my game! Click to Start!", width / 2, height / 2);
      break;

    case 1: //game
      game();

      timer = timer - 1 ;
      if (timer <= 0) {
        timer = maxTimer ;
        myState = 3 ;
      }
      break;

    case 2: //win
      background('yellow');
      textSize(50);
      text("YAY YOU WON!!!", width / 2, height / 2);
      break;

    case 3: //lose
      background('purple');
      textSize(50);
      text("OOPS YOU LOST", width / 2, height / 2);
      break;
  }

}

function mouseReleased() {
  switch (myState) {
    case 0:
    // reset timer
      timer = maxTimer ;
      myState = 1;
      break;

    case 2: // they won!
    // reset timer
      timer = maxTimer ;
    //respawn cars and reset array
    cars = [] ;
    for (var i = 0; i < 5; i++) {
      cars.push(new Car());
      }

      myState = 0;
      break;

    case 3: // they lost!
    //respawn cars and reset array
    // reset timer
      timer = maxTimer ;
    cars = [] ;
    for (var i = 0; i < 5; i++) {
      cars.push(new Car());
      }
      myState = 0
      break;

  }
}

function game() {

  background('lightblue');

  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(frogPos) < 45) {
      cars.splice(i, 1);
    }
  }

  if (cars.length == 0) {
    myState = 2 ;

  }

  // frog
  fill('green');
  ellipse(frogPos.x, frogPos.y, 50, 50);
  checkForKeys();

}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 10;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 10;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 10;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 10;

}



//our Car class!!!!
function Car() {
  // attributes
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  // methods
  this.display = function() {
    fill(this.r, this.g, this.b);

    ellipse(this.pos.x + 50, this.pos.y + 50, 50);
    ellipse(this.pos.x + 70, this.pos.y + 70, 20);
    ellipse(this.pos.x + 70, this.pos.y + 30, 20);
    ellipse(this.pos.x + 25, this.pos.y + 60, 20);
  }

  this.drive = function() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > width) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}
