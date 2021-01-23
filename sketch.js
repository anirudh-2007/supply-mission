var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
packageOption={'restitution':2,
               'friction':0.3,
                 'density':0.5}

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.rectangle(width/2 , 200 , 5 , 5,{ restitution:1.2,friction:0.3,density:0.5,isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxrightSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxrightSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);


	Engine.run(engine);

	
  
}


function draw() {
  background(100);
  Engine.update(engine);
  packageSprite.collide(boxBase);
  packageSprite.collide(boxleftSprite);
  packageSprite.collide(boxrightSprite);
  rectMode(CENTER);

  console.log(  packageSprite.y);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  if(packageSprite.y > 1000 && packageBody.position.y > 1000){
	Matter.Body.setStatic(packageBody,true);
	

  }

  


   if(keyDown(RIGHT_ARROW)){
	helicopterSprite.x=helicopterSprite.x+5;
   }

   if(keyDown(LEFT_ARROW)){
	helicopterSprite.x=helicopterSprite.x-5;
   }

   if(keyDown(UP_ARROW)){
	Matter.Body.setStatic(packageBody,false);
	
   }

  packageSprite.x= helicopterSprite.x;

 
  
  drawSprites();
  
  
 
}
