var futura ;

function setup() {
  // put setup code here
  createCanvas(800, 800) ;

  ftr = loadFont("assets/futura.ttf") ;

}

function draw() {
  // put drawing code here
  background(255, 255, 255) ;
  textFont(ftr, 100) ;
  text("San Holo", 100, height/2) ;
}
