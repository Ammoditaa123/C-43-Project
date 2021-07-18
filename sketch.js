var backgroundImg;
var iss, spacecraft1, spacecraft2, spacecraft3, spacecraft4;
var hasDocked = false;

function preload() {
  backgroundImg = loadImage("Docking-undocking/spacebg.jpg");
  iss = loadImage("Docking-undocking/iss.png");
  spacecraft1 = loadImage("Docking-undocking/spacecraft1.png");
  spacecraft2 = loadImage("Docking-undocking/spacecraft2.png");
  spacecraft3 = loadImage("Docking-undocking/spacecraft3.png");
  spacecraft4 = loadImage("Docking-undocking/spacecraft4.png");
  
}

function setup() {
  createCanvas(800,400);
  iss = createSprite(400, 200, 50, 50);
  spacecraft1 = createSprite(300, 100, 50, 50);
}

function draw() {
  background(backgroundImg);  

  if (keyIsDown(UP_ARROW)) {
    spacecraft1.y += -10;
    console.log(spacecraft1.y);
  }
  if (keyIsDown(RIGHT_ARROW)) {
    spacecraft1.x += 10;
    console.log(spacecraft1.y);
  }
  if (keyIsDown(LEFT_ARROW)) {
    spacecraft1.x += -10;
    console.log(spacecraft1.y);
  }
  if (keyIsDown(DOWN_ARROW)) {
    spacecraft1.y += 10;
    console.log(spacecraft1.y);
  }

  drawSprites();
}
///Users/ammoditaa/Downloads/p5.play-boilerplate-master/sketch.js
