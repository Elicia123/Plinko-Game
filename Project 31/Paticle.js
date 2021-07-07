class Particles{
    constructor(x,y){
         var options = {
            restitution: 1,
            friction: 0,
            isStatic: true
        }
        this.body = Bodies.circle(x,y,this.r,options);
        this.color = color(random(0,225),random(0,225),random(0,225));
        World.add(world,this.body)
    }
    display() {
      
    }
       
}


