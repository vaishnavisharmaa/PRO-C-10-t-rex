/*var weight;
var sum = 0;
var avg;

weight = [45,52,10,60,70,100];


function findavg (){
  sum = weight [0]+weight[1]+weight[2]+weight[3]+weight[4]+weight[5];
  avg = sum/weight.length;
  console.log ("avg"+avg);
}

function setup (){
  findavg();
}
*/



var trex, trex_running, edges;
var groundImage;
var ground;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50

  //creating ground
ground = createSprite(300,170,600,15);
ground.addImage(groundImage);
ground.velocityX = -6;

}


function draw(){
  //set background color 
  background("lightblue");
  
  //logging the y position of the trex
  console.log(trex.y)
  
  //jump when space key is pressed
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  
  //stop trex from falling down
  trex.collide(ground);
  //resettingground
  if (ground.x<0) {
    ground.x = ground.width/2;
  }
  drawSprites();
}
