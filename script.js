var a;
var b;
var direction;



function setup() {
  createCanvas(1450, 860);
  colorMode(RGB, width);
  a = 0;
  b = width;
  direction = true;
  frameRate(50);
}

function draw() {
  a+=28;
  if(a > width) {
    a = 0;
    direction = !direction;
  }
  if(direction == true){
    stroke(a-90);
  } else {
    stroke(width+a);
  }
  line(a, a/2, a*3, height*3-30);

  b-=.50;
  if(b < 0) {
    b = width;
  }
  if(direction == true) {
    stroke(0, width-6*b, 4*width-b);
  } else {
    stroke(width-b, width*b, 2*width-b);
  }
  line(2*height-b, height/20+5, height+b, height);
}
