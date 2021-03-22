class Circle{
    constructor(x,y,radius){
  
    
    var options={
       restitution:1,
       friction:2,
       density:4,
       isStatic:false
    }
    this.body=Bodies.circle(x,y,radius,options)
    World.add(world,this.body)
    
    }
    display(){
  var pos=this.body.position
  var angle=this.body.angle
push()
translate(pos.x,pos.y)
rotate(angle)
ellipseMode(RADIUS)
ellipse(0,0,this.radius,35)
pop()

    }
    }
