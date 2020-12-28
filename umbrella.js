class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("Walking Frame/walking_1.png");
        this.image = loadImage("images/Walking Frame/walking_1"); 
        this.image = loadImage("images/Walking Frame/walking_2");
        this.image = loadImage("images/Walking Frame/walking_3");
        this.image = loadImage("images/Walking Frame/walking_4");
        this.image = loadImage("images/Walking Frame/walking_5");
        this.image = loadImage("images/Walking Frame/walking_6");
        this.image = loadImage("images/Walking Frame/walking_7");
        this.image = loadImage("images/Walking Frame/walking_8");

        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella)
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+70,300,300);
    }
}