const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var ground,circle,engine,world, dust,fakeobj
function preload()
{
 dust=loadImage("dustbingreen.png")
}

function setup() {
  createCanvas(800, 400);


  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  ground=new Ground(400,350,800,15)
    circle=new Circle(100,100,20)
    bin1=new Dustbin(580,300,20,100)
  
    bin3=new Dustbin(670,300,20,100)
    fakeobj=createSprite(630,305,160,20)
    fakeobj.addImage("green",dust)
    fakeobj.scale=0.35
    line1=new launcher(circle.body,{x:70,y:140})
  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  ground.display()
  
 
 
  
  circle.display()
  line1.display()
  drawSprites();
 
}

function keyPressed(){
if(keyCode===UP_ARROW)

Matter.Body.applyForce(circle.body,circle.body.position,{x:65,y:-65})
}

function mouseDragged(){
     
  Matter.Body.setPosition(circle.body,{x:mouseX,y:mouseY})
 }
 function mouseReleased(){
  line1.fly()
  }
