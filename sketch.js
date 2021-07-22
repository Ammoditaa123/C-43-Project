var backgroundImg;
var iss, issImg, spacecraft1, spacecraft2, spacecraft3, spacecraft4;
var inv;
var hasDocked = false;

function preload() {
  backgroundImg = loadImage("spacebg.jpg");
  issImg = loadImage("iss.png");
  spacecraft1Img = loadImage("spacecraft1.png");
  spacecraft2Img = loadImage("spacecraft2.png");
  spacecraft3Img = loadImage("spacecraft3.png");
  spacecraft4Img = loadImage("spacecraft4.png");

}

function setup() {
  createCanvas(800, 400);
  iss = createSprite(400, 200, 50, 50);
  iss.addImage(issImg);
  iss.scale = 0.7;
  spacecraft1 = createSprite(300, 100, 50, 50);
  spacecraft1.addImage(spacecraft1Img);
  spacecraft1.scale = 0.15;
  inv=createSprite(410,230,30,30);
  inv.visible=false

}

function draw() {
  background(backgroundImg);
 
  if (!hasDocked) {
    spacecraft1.x += random(-1, 1);

    if (keyIsDown(UP_ARROW)) {
      spacecraft1.y += -5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      spacecraft1.x += 5;
      spacecraft1.addImage(spacecraft4Img);
    }
    if (keyIsDown(LEFT_ARROW)) {
      spacecraft1.x += -5;
      spacecraft1.addImage(spacecraft3Img);
    }
    if (keyIsDown(DOWN_ARROW)) {
      spacecraft1.y += 5;
      spacecraft1.addImage(spacecraft2Img);
    }
    console.log("This is iss.x" + iss.x);
    console.log("This is iss.y" + iss.y);
    console.log("This is spacecraft1.x" + spacecraft1.x);
    console.log("This is spacecraft1.y" + spacecraft1.y);

  }

  if (spacecraft1.isTouching(inv)) {
    hasDocked = true;
    fill("white")
    text("DOCKING SUCESSFULL", 100, 100)
  }


  drawSprites();
  text(mouseX+","+mouseY,mouseX,mouseY)
}


