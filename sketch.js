const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg;
var snowflake,snowflake2,snowflake3,snowflake4,snowflake5,snowflake6;
var bgImage;
var snowflakeImg,snowflakeImg2,snowflakeImg3,snowflakeImg4,snowflakeImg5,snowflakeImg6;


function preload(){
bgImage=loadImage("snow3.jpg");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;

  snowflake=new snow(200,25,50,50);
  snowflake2=new snow(500,25,50,50);
  snowflake3=new snow(750,29,50,50);
  snowflake4=new snow(900,38,50,50);
  snowflake5=new snow(1100,42,50,50);
  snowflake6=new snow(1300,51,50,50);


}


function draw() {
  background(bgImage); 
  Engine.update(engine);

  snowflake.display();
  snowflake2.display();
  snowflake3.display();
  snowflake4.display();
  snowflake5.display();
  snowflake6.display();

 

}