class rope{
   
    constructor(bodyA,bodyB,offsetX,offsetY) {
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX,y:this.offsetY},
            
        }
        this.chain = Constraint.create(options);
        
        
        World.add(world, this.chain);
      }
      display(){
       var point1=this.chain.bodyA.position;
       var point2=this.chain.bodyB.position;
       var Anchor1X = point1.x
        var Anchor1Y = point1.y

        var Anchor2X = point2.x+this.offsetX
        var Anchor2Y = point2.y+this.offsetY
        

     push();
       fill("orange");
       strokeWeight(5);

       stroke("blue");
        
line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
pop();
      }
}
