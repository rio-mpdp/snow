  class Snow{
    constructor(x,y,w,h){
    this.w=20
    this.h=20
    this.body=Matter.Bodies.circle(x,y,this.w,{
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
    })
    Matter.World.add(myworld,this.body)
    this.img=loadImage("ss.png")
    this.t=255
    }
    display(){
    push()
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    imageMode(CENTER) 
    image(this.img,0,0,this.w,this.h) 
    pop()
   
    }
    }
    
    