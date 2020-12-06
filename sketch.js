
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var circle1,circle2,circle3,circle4,circle5;
var bar1;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   circle1=new circle(700,550);
   circle2=new circle(650,550);
   circle3=new circle(600,550);
   circle4=new circle(750,550);
   circle5=new circle(800,550);


   bar1=new bar(700,150,300,20);
   rope1=new rope(circle1.body,bar1.body,-50*0,0)
   rope2=new rope(circle2.body,bar1.body,-25*2,0)
   rope3=new rope(circle3.body,bar1.body,-25*4,0)
   rope4=new rope(circle4.body,bar1.body,2*25,0)
   rope5=new rope(circle5.body,bar1.body,2*50,0)

	Engine.run(engine);
  
}


function draw() {
  
  background("white");
  drawSprites();
  
  circle1.display();
  circle2.display();
  circle3.display();
  circle4.display();
  circle5.display();
  bar1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
 
 
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(circle3.body,circle3.body.position,{x:65,y:-15}); } 
} 