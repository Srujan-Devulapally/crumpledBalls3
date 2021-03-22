class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
    this.offsetX=offsetX
    this.offsetY=offsetY
    
    var options={
        bodyA:bodyA,
        bodyB:bodyB,
        pointB:{x:this.offsetX,y:this.offsetY}
    }
    this.rope=Constraint.create(options)
    World.add(world,this.rope)
    
    }
    display(){
    var pointA=this.rope.bodyA.position
    var pointB=this.rope.bodyB.position
    strokeWeight(2)
    stroke("black")
    var p1x=pointA.x
    var p1y=pointA.y
    var p2x=pointB.x+this.offsetX
    var p2y=pointB.y+this.offsety
    
    line(p1x,p1y,p2x,p2y)
    }
    }
    