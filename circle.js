class circle{
    constructor(x,y){
      
        this.x=x;
        this.y=y;
    
      
        var options={
       isStatic:false,
       restitution:1,
       friction:0.01
       }
       
      
      // this.img=loadImage("paper.png");
       this.body=Bodies.circle(x,y,25,options);
       this.r=50;
       World.add(world,this.body);
    }
    display(){
   
        var pos=this.body.position;
        
       
     
       fill("pink");
      
        ellipse(pos.x,pos.y,this.r,this.r); 
       
    }

};