//global variables
var trex, trex_running
var groundImage;
var invisibleGround

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,400);
  
  // creating trex
  trex = createSprite(200,200,30,30);
  trex.addAnimation("running", trex_running)
  trex.scale = 0.7
  trex.x=100

  //ground
  ground = createSprite(width/2,height-50,width,10)
  ground.addImage("image", groundImage)
  invisibleGround = createSprite(width/2,height-45,width,10) 
  invisibleGround.visible = false
}

function draw(){
  background(200);
  
  if(keyDown("space")&& trex.y > height -92.5) {
    trex.velocityY = -13
  }
  console.log (trex.y)
  //gravity for trex so it comes down
  trex.velocityY += 0.5
  ground.velocityX = -10
  if (ground.x < 0){
   ground.x = ground.width/2 
  }
  trex.collide(invisibleGround)
  drawSprites();
}


