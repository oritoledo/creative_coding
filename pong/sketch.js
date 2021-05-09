const width = 600;
const height = 800;
let xball = 300;
let yball = 400;
const diameter = 60;
let xballchange = 5;
let yballchange = 5;

//paddle position;
let toppadx = width/4;
let bottpadx =width/4;
const padw = 250;
const padh = 80;

//paddle-text
let printx = width/4;
let deadx = width/4;

let start = false;
let font;

function preload() {
  font = loadFont("./libraries/Bungee/Bungee-Regular.ttf");
}

function setup() {
  createCanvas(width, height);
  
}

function draw() {
  background(240);
  
  if (start){
  xball += xballchange;
  yball += yballchange;

  if (xball < diameter/2 || xball > 600 - diameter*0.5){
    xballchange *= -1;
  }
  if (yball < diameter/2 || yball > 800 - diameter){
    yballchange *= -1;
  }
  if ((xball > toppadx && xball < toppadx+padw) && (yball - (diameter/2) <= padh+50)){
    xballchange *= -1;
    yballchange *= -1;
  }
  if ((xball > bottpadx && xball < bottpadx + padw) && (yball + (diameter/2) >= 650)){
    xballchange *= -1;
    yballchange *= -1;

  }
}
  

//<=== Paddles ====>//
fill(240);
rect(toppadx, 50, padw, padh);
rect(bottpadx, 650, padw, padh);
//text
push();
 fill(0);
 noStroke();
 textSize(75);
 textFont(font);
 text("PRINT", printx, 130);
 text("DEAD.", deadx, 725);
 pop();

 //ball
 fill(0);
 noStroke();
 ellipse(xball,yball,diameter,diameter);
 //ball-text
 textSize(30);
 noStroke();
 textFont(font);
 fill(240);
 text("IS", xball-diameter*0.27, yball+diameter*0.21);

}

function keyPressed() {
  if (keyCode === LEFT_ARROW){
    toppadx -= 50;
    printx -= 50
  }
  else if (keyCode===RIGHT_ARROW){
    toppadx += 50;
    printx += 50
  }
  else if (keyCode === 88){
    bottpadx += 50;
    deadx += 50
  }
  else if (keyCode === 89){
    bottpadx -= 50;
    deadx -= 50;
  }
  if (keyCode===32){
    start = true;
  }
  
}


