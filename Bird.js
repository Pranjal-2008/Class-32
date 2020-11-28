class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.pos = [];
    
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();

    if (this.body.velocity.x>10&this.body.position.x>250){
      var p = [this.body.position.x, this.body.position.y];
      this.pos.push(p);
    }
    for(var i = 0; i<this.pos.length;i++){
      //imageMode(CENTER);
      image(this.smoke,this.pos[i][0],this.pos[i][1]);
    }
  }
}
