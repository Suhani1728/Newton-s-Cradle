var bobObject1,bobObject2 ,bobObject3 ,bobObject4 ,bobObject5
var roof
var rope1,rope2,rop3,rope4,rope5


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bobObject1 = new Bob(250,400,25)
	bobObject2 = new Bob(300,400,25)
	bobObject3 = new Bob(350,400,25)
	bobObject4 = new Bob(400,400,25)
	bobObject5 = new Bob(450,400,25)
	roof = new Roof(400,200,500,20)
	rope1 = new Rope(bobObject1.body,roof.body,-100,0)
	rope2 = new Rope(bobObject2.body,roof.body,-50,0)
	rope3 = new Rope(bobObject3.body,roof.body,0,0)
	rope4 = new Rope(bobObject4.body,roof.body,50,0)
	rope5 = new Rope(bobObject5.body,roof.body,100,0)
	World.add(world,rope1)
	World.add(world,rope2)
	World.add(world,rope3)
	World.add(world,rope4)
	World.add(world,rope5)

	//-145,0
	//-105,0
	//-65,0
	//-25,0
	//15,0
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-700,y:0});
	}
}
