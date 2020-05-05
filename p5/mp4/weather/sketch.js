var weather;
var temp = 0;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var ws = 0;
var temperature = 0;

function setup() {
  createCanvas(400, 400);

  // HERE Is the call to get the weather. PLEASE PUT YOUR OWN ID IN HERE!!!
  // MINE WILL STOP WORKING IF EVERYONE USES IT!!!

  var myJSONString = 'http://api.openweathermap.org/data/2.5/weather?zip=91801,us&units=imperial&appid=79e058050626933cca749385ca69d4a5';
  var myIDString = 'appid=79e058050626933cca749385ca69d4a5'; // Take out the x’s and ADD YOUR ID!!!
  loadJSON(myJSONString + myIDString, gotData); // look - that gotData function happens when JSON comes back.

}


function gotData(data) {
  weather = data;
  console.log(data); // for debugging purposes, print out the JSON data when we get it.
  ws = weather.wind.speed;
  temperature = weather.main.temp;
}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      background(200);
      fill('black');
      text("This is the weather for Alhambra, California", 20, 20);
      // parse the weather object and put some text or images using at least 3 different weather data!
      text("The temperature is " + weather.main.temp, 20, 40);
      text("The humidity is " + weather.main.humidity, 20, 60);
      text("The windspeed is " + weather.wind.speed, 20, 80);

      fill('white');
      noStroke();
      ellipse(x, 250, 300, 150);
      x = x + ws / 3;
      if (x > width) x = 0;

      fill('blue');
      var tmp = 0;
      tmp = map(temperature, -10, 90, 2, height - 10);
      rect(width - 40, height - 10, 30, -tmp);
      break;

  }
}
