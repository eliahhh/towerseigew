var ground1, ground2, block8, block9, block10, block11, block12, block13, block14, block15, block16;
var score = 0;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world
  
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot = new SlingShot(this.polygon,{x:100,y:200});

  ground1 = new Ground(400,380,800,20);
  ground2 = new Ground(400,300,200,20);
  block8 = new Box(330,235,30,40);
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);
  block13 = new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15 = new Box(420,195,30,40);
  block16 = new Box(390,155,30,40);
}

function draw() {
  background(255,255,255);  

  textSize(20);
  text("SCORE: "+score,500,50);
  Engine.update(engine);

  imageMode(CENTER);
  
  ground1.display();
  ground2.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  slingShot.display();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();


  drawSprites();
}

function mouseDragged(){

Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});

}

function mouseReleased(){

slingShot.fly();

}