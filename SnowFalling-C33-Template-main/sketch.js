var g,b,gi,inv,boy
var engine,myworld
array=[]
function preload(){
 g=loadImage("g.png")
 b=loadImage("bo.png")
 bg=loadImage("w.jpg")

}
function setup() {
  createCanvas(1000,700);
gi=createSprite(400,550,50,50);
gi.addImage(g)
gi.scale=0.6
boy=createSprite(200,550)
boy.addImage(b)
boy.scale=0.6
inv = createSprite(width/2,680,width, 10);
inv.visible = false;
engine=Matter.Engine.create()
myworld=engine.world
}

function draw() {
  background(bg); 
  textSize(20)
  fill("black")
  text("press spacebar to make the boy jump",10,20)
  text("press up key to make the girl jump",10,40)
  text("press left and right to make the girl move",10,60)
  text("press a and d to make the boy move",10,80)

  if (keyDown("up") ) {
   
    gi.velocityY = -15;
  }
  if (keyDown("space") ) {
    boy.velocityY = -15;
  }
  gi.velocityY = gi.velocityY + 0.5
  boy.velocityY = boy.velocityY + 0.5
  gi.collide(inv);
  boy.collide(inv);
 
  gi.velocityX = 0
  if (keyDown("left")) {
    gi.velocityX = -2
  }
  if (keyDown("right")) {
    gi.velocityX = 2
  }
  boy.velocityX = 0
  if (keyDown("a")) {
    boy.velocityX = -2
  }
  if (keyDown("d")) {
    boy.velocityX = 2
  }
  Matter.Engine.update(engine)
  if(frameCount% 10==0){
    s=new Snow(random(20,width-40),0,10,10)
    array.push(s)
  }
  for(var f=0;f<array.length;f++){
    if(array[f].body.position.y>height){
      Matter.World.remove(myworld,array[f].body)
      array.splice(f,1)
    }
    array[f].display()
  }
 
  drawSprites();
  
}
