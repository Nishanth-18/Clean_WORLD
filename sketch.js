
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var Floor;
var TrashL;
var TrashB;
var TrashR;
var Waste;

var DustbinImage;

function preload()
{
	DustbinImage = loadImage("dustbingreen.png");
}

function setup() 
{
	createCanvas(1515, 700);


	engine = Engine.create();
	world = engine.world;

	TrashL = new Dustbin (1150,630,3,100);
	TrashB = new Dustbin (1200,684,100,10);
	TrashR = new Dustbin (1240,630,3,100);

	Floor = new Ground (1000,690,2016,20);

	Waste = new Paper (100,400,60);
	


	Engine.run(engine);
  
}


function draw() 
{

  background("white");
  TrashL.display();
  TrashB.display();
  TrashR.display();

  Floor.display();

  Waste.display();
  imageMode(CENTER);
  image(DustbinImage,1196,628,100,100);
  drawSprites();
 
}

function keyPressed()
{
 if ( keyCode === RIGHT_ARROW){
	 Matter.Body.applyForce(Waste.body,Waste.body.position,{x: 210,y: -210})
 }

}



