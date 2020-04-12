var myCar;
var myCar2;
var cars = [];
var frogPos;
var myState = 0;
var maxTimer = 10 * 60;
var timer = maxTimer;
var wow;
var bk1;
var bk2;
var bk3;
var lose1;
var win1;
var menu;
var plane;
var corona;
var laugh;
var fart;

function preload() {
  laugh = loadSound("assets/laugh.mp3");
  corona = loadSound("assets/corona.mp3");
  fart = loadSound("assets/fart.mp3");
}

function setup() {
  // put setup code here
  createCanvas(800, 800);

  wow = loadImage("assets/needle.png");
  bk1 = loadImage("assets/bk1.jpg");
  bk2 = loadImage("assets/bk2.jpg");
  bk3 = loadImage("assets/bk3.jpg");
  lose1 = loadImage("assets/lose1.jpg");
  win1 = loadImage("assets/win1.jpg");
  menu = loadImage("assets/menu.jpg");
  plane = loadImage("assets/plane.jpg");

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

    case 0:
      corona.play(); // this is what starts the sound
      myState = 0.5
      break;

    case 0.5: //menu
      image(menu, 0, 0, 800, 800);
      textSize(50);
      fill('red')
      text("Help Save The World!", width / 2, height / 2);
      text("Click to Start!", width / 2, 500);
      textSize(25)
      text("Use arrow keys to move around and help cure the world!", width / 2, 600);
      break;

    case 1: //game
      game1();

      timer = timer - 1;
      if (timer <= 0) {
        timer = maxTimer;
        myState = 4.5;
      }
      break;

    case 1.5: //medium menu
      image(plane, 0, 0, 800, 800);
      fill('white')
      textSize(45);
      text("Next Difficulty! MEDIUM!", width / 2, height / 2);
      text("REMEMBER TO SOCIAL DISTANCE!", 400, 500);
      break;

    case 2: //game
      game2();

      timer = timer - 1;
      if (timer <= 0) {
        timer = maxTimer;
        myState = 4.5;
      }
      break;

    case 2.5: //hard menu
      image(plane, 0, 0, 800, 800);
      fill('white')
      textSize(45);
      text("Next Difficulty! HARD!", width / 2, height / 2);
      text("REMEMBER TO SOCIAL DISTANCE!", 400, 500);
      break;

    case 3: //game
      game3();

      timer = timer - 1;
      if (timer <= 0) {
        timer = maxTimer;
        myState = 4.5;
      }
      break;

    case 3.5:
      corona.stop();
      fart.play();
      myState = 4

      break;
    case 4: //win
      image(win1, 0, 0, 800, 800);
      fill('black')
      textSize(40);
      text("CONGRATULATIONS! YOU WON!", width / 2, 500);
      text("YOU SAVED THE WORLD!", width / 2, 600);
      textSize(20);
      text("Click if you want to play again!", width / 2, 700);

      break;

    case 4.5:
      corona.stop();
      laugh.play();
      myState = 5

      break;

    case 5: //lose
      image(lose1, 0, 0, 800, 800);
      fill('red')
      textSize(40);
      text("OH NO! YOU LOST!", width / 2, height / 2);
      text("CLICK TO RESTART", width / 2, 500);

      break;
  }

}

function mouseReleased() {
  switch (myState) {
    case 0.5:
      // reset timer
      timer = maxTimer;
      myState = 1;
      break;

    case 1.5: // they won!
      // reset timer
      timer = maxTimer;
      //respawn cars and reset array
      cars = [];
      for (var i = 0; i < 10; i++) {
        cars.push(new Car());
      }

      myState = 2;
      break;

    case 2.5: // they won!
      // reset timer
      timer = maxTimer;
      //respawn cars and reset array
      cars = [];
      for (var i = 0; i < 15; i++) {
        cars.push(new Car());
      }

      myState = 3;
      break;


    case 4: // they won!
      // reset timer
      timer = maxTimer;
      //respawn cars and reset array
      cars = [];
      for (var i = 0; i < 5; i++) {
        cars.push(new Car());
      }

      myState = 0;
      break;

    case 5: // they lost!
      //respawn cars and reset array
      // reset timer
      timer = maxTimer;
      cars = [];
      for (var i = 0; i < 5; i++) {
        cars.push(new Car());
      }
      myState = 0
      break;

  }
}

function game1() {

  image(bk2, 0, 0, 800, 800);

  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(frogPos) < 45) {
      cars.splice(i, 1);
    }
  }

  if (cars.length == 0) {
    myState = 1.5;

  }

  // frog
  image(wow, frogPos.x, frogPos.y, 50, 50, 50, 50);
  checkForKeys();

}

function game2() {

  image(bk1, 0, 0, 800, 800);

  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(frogPos) < 45) {
      cars.splice(i, 1);
    }
  }

  if (cars.length == 0) {
    myState = 2.5;

  }

  // frog
  fill('white')
  image(wow, frogPos.x, frogPos.y, 50, 50, 50, 50);
  checkForKeys();

}

function game3() {

  image(bk3, 0, 0, 800, 800);

  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(frogPos) < 45) {
      cars.splice(i, 1);
    }
  }

  if (cars.length == 0) {
    myState = 3.5;

  }

  // frog
  image(wow, frogPos.x, frogPos.y, 50, 50, 50, 50);
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
