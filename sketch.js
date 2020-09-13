var wall,bullet,gr;
var speed,weight,thickness;
//var deformation;
function setup() {
  createCanvas(1600,400);
speed = random(223,321);
weight = random(30,52);
thickness = random(22,83);


bullet = createSprite(50,200,70,20);
bullet.shapeColor = color("brown");
gr = createSprite(800,400,1600,10);
wall = createSprite(1200,200,thickness,height/2);
wall.shapeColor = color(80,80,80);
bullet.velocityX = speed;

}

function draw() {
  background(255,255,255);  
  if(hasCollided(bullet,wall) ) 
  {
bullet.velocityX = 0;
var damage= 0.5 *weight *speed *speed/(thickness*thickness*thickness);

if(damage>10){
  wall.shapeColor =color(255,0,0);
    }

    if(damage<10){
wall.shapeColor =color(0,255,0);
    }

}
  drawSprites();
}

function hasCollided(lbullet, lwall){
  bulletRightEdge =lbullet.x +lbullet.width;
  wallLeftEdge =lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}
