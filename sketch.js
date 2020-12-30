
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
   rope1=new rope(circle1.body,{x:691,y:159});
   rope2=new rope(circle2.body,{x:641,y:159})
   rope3=new rope(circle3.body,{x:591,y:159})
   rope4=new rope(circle4.body,{x:741,y:159})
   rope5=new rope(circle5.body,{x:791,y:159})

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


	function mouseDragged(){
    Matter.Body.setPosition(circle3.body,{x:mouseX,y:mouseY});
  }