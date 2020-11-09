
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 600);
   FoodGroup= new Group();
    
    obstacleGroup= new Group();
  
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10)
  ground.velocittyX=-4;
  ground.x=ground.width/2;
  console.log(ground.y)
}


function draw() {
   background(255);
   spawnObstacle();
spawnbanana();
  
var survivalTime=0;
  stroke("white");
textSize(20);
  fill("white");
text("score:"+ score,500,50);
  
      stroke("black");
  textSize(20);
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+ survivalTime,100,50);
  
  if(keyDown("space")&& monkey.y >= 310) {
        monkey.velocityY = -14;
 }
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  
  
  drawSprites();
  
}

function spawnObstacle() {
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(600,330,40,10);
    
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.5;
    obstacle.velocityX = -5;
    obstacle.scale=0.1
     obstacle.setLifeTime=100
     obstacleGroup.add(obstacle);
  }
}

function spawnbanana() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,330,40,10);
     banana.y = Math.round(random(150,300));
    banana.addImage(bananaImage);
    banana.scale = 0.5;
    banana.velocityX = -3;
    banana.scale=0.1
    banana.setLifeTime=200
     FoodGroup.add(banana);
  }
}




