class Spiderman{
  constructor(){
    this.x = 500;
    this.y = 640;
    this.w = 100;
    this.h = 80;
  }
  move(){
    this.x = mouseX - 43;
    this.y = mouseY;
    //this.x = constrain(this.x, 200, 400);
  }
  draw(){
    image(spidyImg,mouseX - 43, mouseY, this.w, this.h);
      
  }
}