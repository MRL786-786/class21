function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200, 300, 50, 50);
  movingRect=createSprite(400, 100, 50, 50);
  obj1=createSprite(100, 150, 50, 50);
  obj2=createSprite(150, 200, 50, 50);
fixedRect.shapeColor="green";
movingRect.shapeColor="green";
obj1.shapeColor="green";
obj2.shapeColor="green";
obj1.velocityX=-1;
obj2.velocityX=-1;
}

function draw() {
  background(0); 
  movingRect.x= World.mouseX; 
  movingRect.y= World.mouseY; 


  if(isTouching(movingRect,obj1)){
    movingRect.shapeColor="red";
obj1.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
obj1.shapeColor="green";
  }

  if(isTouching(movingRect,obj2)){
    movingRect.shapeColor="red";
obj2.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
obj2.shapeColor="green";
  }

bounceOff(obj1,movingRect);


  drawSprites();
}

