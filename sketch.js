let spiderman;
let bullets = [];
let spoilers = [];
let score = 0;
var cnv;
var x, y;

function centerCanvas() 
{
    x = (windowWidth - width) / 2;
    y = (windowHeight - height) / 2;
    cnv.position(x, y);
}

function windowResized() 
{
    centerCanvas();
}

function preload(){
    bg = loadImage('background.jpeg');
    spidyImg = loadImage("yalahwyy_spiderman.png");
    swing = loadImage("swing.png");
}

function setup() 
{
    cnv = createCanvas(1350, 600);
    spiderman = new Spiderman()
    centerCanvas();
}

function draw() 
{
    // spoilers push
    if(random(1) < 0.025){
      spoilers.push(new Spoiler())
    }
  
  
    //background
    background(bg);
    fill(0,0,0,235)
    rect(0,0,width,height)
  
  
      //score
    fill(255,255,255)
    textSize(27);
    text(score,width - 30,100)
  

    // draw the player
    //
    spiderman.draw();
    spiderman.move();
  
  
    // draw the bullets
    for(let bullet of bullets)
    {
      bullet.draw();
      bullet.move()
      if(bullet.y < 0)
        bullets.splice(bullets.indexOf(bullet), 1);
    }
  
  
    // draw spoilers
    for(let spoil of spoilers)
    {  
        spoil.move();
        spoil.draw();
    }
  
    // collisions
    for(let spoil of spoilers)
    {
        // handle P x E collision & handle E x H
        if(hits(spiderman, spoil) || spoil.y >= height )  gameOver();
      
      
        for(let bullet of bullets)
        {
            // handle E x B collision
            if(hits(spoil, bullet))
            {
                bullets.splice(bullets.indexOf(bullet), 1);
                spoilers.splice(spoilers.indexOf(spoil), 1);
                score++;
            }
        }

    }
}

function gameOver()
{
  
    background(bg);
    fill(0,0,0,235)
    rect(0,0,width,height)
    textSize(25);
    fill(148, 26, 38);
    textAlign(RIGHT);
    text("Steps so you don't cry-lose again ya loser: ", width/2 + 70, height/2 - 30)
    textAlign(CENTER);
    text("1.block anyone who thinks it is funny to spoil.", width/2 - 50, height/2 + 10)
    text("2.watch any movie once it released or", width/2 - 88, height/2 + 35)
    text("just live in a cave until you watch it.", width/2 - 75, height/2 + 60)
    text("YOUR SCORE : " + score, width/2, height/2 + 125)
    noLoop();
}

function hits(obj1,obj2){
  return collideRectRect(obj1.x, obj1.y, obj1.w, obj1.h + 5 , obj2.x, obj2.y, obj2.w, obj2.h + 10);
}

function mousePressed()
{
    // spawn a bullet
    let bullet = new Bullet(mouseX, mouseY);
    bullets.push(bullet);
}
