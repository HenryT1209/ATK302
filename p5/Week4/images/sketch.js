var san1 ;
var san2 ;
var san3 ;


function setup() {
  // put setup code here
  createCanvas(windowWidth, 900) ;

  imageMode(CENTER) ;

  san1 = loadImage("assets/San 1.jpg") ;
  san2 = loadImage("assets/San 2.jpg") ;
  san3 = loadImage("assets/San 3.png") ;

}

function draw() {
  // put drawing code here
  image(san1, width/2, 150, 600, 300) ;
  image(san2, width/2, 450, 600, 300) ;
  image(san3, width/2, 750, 600, 300) ;
}
