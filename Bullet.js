class Bullet{
  constructor(x,y){
    this.x = x - 40;
    this.y = y;
    this.w = 50;
    this.h = 20;
  }
  move(){
    this.y -= 5;
  }
  draw(){
     image(swing,this.x, this.y, this.w + 35, this.h)
  }
}