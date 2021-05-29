class Drops{
    constructor(x,y){
        var rain_options={
            restitution : 1,
            density: 1.5,
            friction : 0.001,
            isStatic : false
        }
        this.x = x;
        this.y = y;
        this.r = 3
        this.rain = Bodies.circle(x, y, 3, rain_options)
        World.add(world, this.rain);
    }
    
    update()
    {
        if(this.rain.position.y>700)
        {
            this.y=0
            this.x=Math.round(random(0,400));
            Matter.Body.setPosition(this.rain, { x:this.x, y:this.y});
        }
    }

    display(){
        var pos = this.rain.position;
        fill ("lightblue");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.r, this.r+1);
    }

}