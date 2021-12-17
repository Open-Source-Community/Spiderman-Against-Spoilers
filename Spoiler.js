class Spoiler{
  constructor(){
    this.x = random(50, width - 50);
    this.y = 0;
    this.w = 80;
    this.h = -11;
  }
  move(){
    this.y += 1.5; 
  }
  draw(){
     fill(int(random(256)), 0, int(random(100)))
     textSize(17);
     text("SPOILER", this.x, this.y)
  }
}