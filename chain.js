class Chain{
    constructor(a,b){
        var options={
            bodyA: a,
            bodyB: b,
            length:70,
            stiffness:0.5
        }

        this.chain=Constraint.create(options);
        World.add(world,this.chain);


    }

    display(){
        var posA=this.chain.bodyA.position;
        var posB=this.chain.bodyB.position;
        strokeWeight(5);
        line(posA.x,posA.y,posB.x,posB.y);

    }
} 
