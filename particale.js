class Particale{
constructor(x,y){
  var options ={
    restitution: 1
    
  

  }
     this.r=10;
     this.body = Bodies.circle(x, y, this.r, options);
     this.color =color(random(0,255),random(0,255),random(0,255));
     World.add(world, this.body);
}
display(){

    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    
    noStroke();
    fill(this.color);
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r);
    pop();






}



}