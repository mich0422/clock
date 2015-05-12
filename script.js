
//THIS IS THE HOURGLASS for final(color change, timing change)
 



var a;
var b;
var c;
var direction;
var d;
var randomColorChange = "";



function setup() {
  createCanvas(1450, 860);
  colorMode(RGB, width);
  a = 0;
  b = width;
  c = 0;
  d = height;
  direction = true;
  frameRate(50);
}

function draw() {
  // d=mouseY;




//this is the SECONDS hourglass

  a+=29;
  if(a > width) {
    a = 0;
    direction = !direction;
  }
  if(direction == true){
    stroke(a, width-a);
  } else {
    stroke(width+a, width*a+200);
  }

  line(0, 20+a*9, 450-a, height*0.00001);



//this is the MINUTES hourglass

  b-=.52;
  if(b < 0) {
    b = width;
  }
  if(direction == true) {
    stroke(height-b, 0, 20);
  } else {
    stroke(40*width+b, b, b);
  }

  line(1.7*height-b, height/500+5, height+0.75*b, height);



//this is the HOUR hourglass

  c+=.00933;
  if(c < 0) {
  c = width;
  }
  if(direction == true) {
    stroke(d*400, d/200, 0);
  } else {
    stroke(400*width+c, c, c);
  }

  line(1.7*d-c, d/100+5, c/2, d);
  

}
