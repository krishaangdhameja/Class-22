const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;

var engine, world;
var object;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options = {
    isStatic: true
  }
  ground = Bodies.rectangle(200,380,400,20,ground_options);
  World.add(world,ground);

  var ball_options = {
    restitution: 1.0
  }
  ball = Bodies.circle(200,100,30,ball_options)
  World.add(world,ball);

  //console.log(object.type);
  //console.log(object.position.x);
  //console.log(object.position.y);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  
  rectMode(CENTER);
  Engine.update(engine);
  rect(ground.position.x,ground.position.y,400,20);
  circle(ball.position.x,ball.position.y,30);
  drawSprites();
}