class bola {
constructor  (x, y) {

    var options = {
        isStatic: false,
        restitution: 0.3, 
        friction: 0, 
        density: 1.2
    }
    this.image = loadImage ("paper.png");

    this.body=Bodies.circle(x,  y, 1,  options);
    this.r= 1;
    World.add (world, this.body);
}
display (){
    var ppos = this.body.position; 
    push();
    translate(ppos.x, ppos.y);
    rectMode (CENTER);
    ellipse (0, 0, this.r, this.r);
    image(this.image, -45, -80, 100, 100);
    pop ();
}
};