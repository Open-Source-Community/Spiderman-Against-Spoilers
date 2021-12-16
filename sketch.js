let bullets = [];
let enemies = [];
let spawningRate = 1;
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

function setup() 
{
    cnv = createCanvas(900, 900);
    centerCanvas();
    spawnEnemies(5);
}

function draw() 
{
    background(40);
    rectMode(CENTER);
    fill(255);
    noStroke();
    
    textSize(30);
    textAlign(CENTER);
  
    text(score, 30, 40)
  
    // draw the player
    circle(mouseX, mouseY, 40);
  
    // draw the bullets
    for(let bullet of bullets)
    {
      circle(bullet.x, bullet.y, 10);
      bullet.y -= 5;
      if(bullet.y < 0)
        splice(bullets.indexOf(bullet), 1);
    }
  
    // draw enemies
    for(let enemy of enemies)
    {  
        
        fill(int(random(256)), 0, int(random(256)))
        rect(enemy.x, enemy.y, 30, 20);
        enemy.y += 1.5; 
    }
    fill(255);
  
    // collisions
    for(let enemy of enemies)
    {
        for(let bullet of bullets)
        {
            // handle E x B collision
            if(dist(enemy.x, enemy.y, bullet.x, bullet.y) <= 20)
            {
                bullets.splice(bullets.indexOf(bullet), 1);
                enemies.splice(enemies.indexOf(enemy), 1);
                
                spawnEnemies(spawningRate);
                score++;
              
                if(score % 20 == 0)
                  spawningRate++;
            }
          
            // handle P x E collision
            if(dist(enemy.x, enemy.y, mouseX, mouseY) <= 10)
              gameOver();
            
            // handle E x H
            if(enemy.y >= height)
              gameOver();
        }
    }
}

function gameOver()
{
    textSize(30);
    textAlign(CENTER);
    fill(255, 0, 0);
    text("GAME OVER YA LOSER ", width/2, height/2)
    text("YOUR SCORE : " + score, width/2, height/2 + 30)
    noLoop();
}
function spawnEnemies(n)
{
    for(let i = 0; i < n; i++)
    {
        let enemy = 
         {
           x: random(0, width),
           y: 0,
           w: random(20, 60)
         };
        enemies.push(enemy);
    }
}
function mousePressed()
{
    // spawn a bullet
    let bullet = 
        {
          x: mouseX,
          y: mouseY
        };
    bullets.push(bullet)  
}
