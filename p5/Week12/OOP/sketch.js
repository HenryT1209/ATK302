var myCar;
var myCar2;
var cars = [] ;
var frogPos ;

function setup() {
  // put setup code here
  createCanvas(800, 800);

for (var i = 0; i < 20; i++) {
  cars.push(new Car()) ;

  }

  frogPos = createVector(400, height-100) ;
}

function draw() {
  // put drawing code here
  background('lightblue');

  for (var i = 0; i < cars.length; i++) {
  cars[i].display();
  cars[i].drive();
  if (cars[i].pos.dist(frogPos) < 45) {
    cars.splice(i, 1) ;
  }

}



// frog
  fill('green') ;
  ellipse(frogPos.x, frogPos.y, 50, 50) ;
  checkForKeys();

}


function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -=10 ;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x +=10 ;
  if (keyIsDown(UP_ARROW)) frogPos.y -=10 ;
  if (keyIsDown(DOWN_ARROW)) frogPos.y +=10 ;

}



//our Car class!!!!
function Car() {
  // attributes
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(random(-5,5), random(-5,5)) ;
  this.r = random(255) ;
  this.g = random(255) ;
  this.b = random(255) ;
  // methods
  this.display = function() {
    fill(this.r, this.g, this.b) ;

    ellipse(this.pos.x + 50, this.pos.y + 50, 50);
    ellipse(this.pos.x + 70, this.pos.y + 70, 20);
    ellipse(this.pos.x + 70, this.pos.y + 30, 20);
    ellipse(this.pos.x + 25, this.pos.y + 60, 20);
  }

  this.drive = function() {
    this.pos.add(this.vel) ;
    if (this.pos.x > width) this.pos.x = 0 ;
    if (this.pos.x < 0) this.pos.x = width ;
    if (this.pos.y > width) this.pos.y = 0 ;
    if (this.pos.y < 0) this.pos.y = height ;

    }

}
