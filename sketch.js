//Rachel
//Call Her

var font;
var vehicles = [];
var fontSize = 3;
var wideText = 0;
function preload() {
  font = loadFont('AvenirNextLTPro-Demi.otf');
}

function setup() {
    textAlign(CENTER);

fill(255);
stroke(0);
  createCanvas(windowWidth, windowHeight);
  print(fontSize);
  wideText = font.textBounds("Rachel",width/2,0,fontSize).w;
  while(wideText < width-50){
      fontSize++;
      wideText = font.textBounds("Rachel",width/2,0,fontSize).w;
      print("Font size is: "+fontSize);
      print("Rachel width is: "+wideText);
      print("windowWidth is: "+windowWidth);

  }
  background(51);
  // textFont(font);
  // textSize(192);
  // fill(255);
  // noStroke();
  // text('train', 100, 200);

  var points = font.textToPoints('Rachel', 0, width/2-font.textBounds("Rachel",width/2,0,fontSize).h/2, fontSize, {
    sampleFactor: 0.25
  });

  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
    // stroke(255);
    // strokeWeight(8);
    // point(pt.x, pt.y);
  }
}

function draw() {
  background(51);
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
}
