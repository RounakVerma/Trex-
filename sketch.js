var trex, trexrunning, trexcollided, ground, invisibleground, groundimage, cloudimage, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6
//preload is used for loading sounds, images and animations
//preload gets executed before the code execution begins
function preload(){
trexrunning=loadAnimation("trex1.png","trex3.png","trex4.png")
  trexcollided=loadImage("trex_collided.png")
  groundimage=loadImage("ground2.png")
  cloudimage=loadImage("cloud.png")
  obstacle1=loadImage("obstacle1.png")
  obstacle2=loadImage("obstacle2.png")
  obstacle3=loadImage("obstacle3.png")
  obstacle4=loadImage("obstacle4.png")
  obstacle5=loadImage("obstacle5.png")
  obstacle6=loadImage("obstacle6.png")
}
//setup is used for giving the initial value to the variable
//setup gets executed once, as the first thing when code execution begins
function setup() {
  createCanvas(600, 200);
  trex=createSprite(50,180,30,50)
  trex.addAnimation("running",trexrunning)
  trex.scale=1/2;
  ground=createSprite(300,180,600,10)
  ground.addImage(groundimage);
  ground.velocityX=-2;
  invisibleGround=createSprite(300,185,600,10)
  invisibleGround.visible=false;
}
//draw is used to write the code which will be executed for every frame
//draw is executed for every frame
function draw() {
  background(180);
  trex.collide(invisibleGround);
  if(ground.x<0){
  ground.x=ground.width/2;
  }
  if(keyDown("space")&&trex.y>=156.5){
    trex.velocityY=-12;
  }
  trex.velocityY=trex.velocityY+0.5
  console.log(trex.y);
  spawnClouds();
  spawnObstacles();
  drawSprites();
  }
function spawnClouds(){
  if(frameCount%60===0){
   var cloud=createSprite(600,80,40,10);
    cloud.addImage(cloudimage);
    cloud.velocityX=-2;
    cloud.scale=1/2;
    var rand=Math.round(random(80,120))
    cloud.y=rand;
    cloud.depth=trex.depth;
    trex.depth=trex.depth+1;
    cloud.lifetime=300;
  }
    
}
function spawnObstacles(){
  if(frameCount%60===0){
    var obstacle=createSprite(600,165,10,10);
    obstacle.scale=1/2;
    obstacle.velocityX=-4;
    var rand=Math.round(random(1,6))
    switch(rand){
      case 1:obstacle.addImage(obstacle1);
      break;
      case 2:obstacle.addImage(obstacle2);
      break;
      case 3:obstacle.addImage(obstacle3);
      break;
      case 4:obstacle.addImage(obstacle4);
      break;
      case 5:obstacle.addImage(obstacle5);
      break;
      case 6:obstacle.addImage(obstacle6);
      break;
      default: break
    }
  }
}

