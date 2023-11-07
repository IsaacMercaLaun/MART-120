var headX = 250;
var headY = 100;
var headSpeed = 5;

var bodyX = 165;
var bodyY = 190;
var bodySpeed = 2;

var legX = 200;
var legY = 185;
var legSpeed = 6;

let eyeX = 180;
let eyeY = 100;
var eyeSpeed = 1;

var size = 22;
var count = 0;
var sizeSpeed = 1;

function setup() {
    createCanvas(400,400);
  }


function draw()
{
    background(220);
    textSize(size)
    size+= sizeSpeed;
    count++;
    if(count > 5)
    {
        sizeSpeed *=-1;
        count = 0;
    }
    text("My Self Portrait!", 110,20);

    //Head
    fill('brown');
    circle(headX,headY,150);
    headX+=headSpeed;
    if(headX >= 400 || headX <= 0)
    {
        headSpeed *= -1;
    }

    //Eyes
    eyeX+=5
    eyeY+=5
    strokeWeight(10);
    fill(0);
    point(eyeX,eyeY);
    point(240,100);
    eyeY+=eyeSpeed;
    if(eyeY > height)
    eyeY=0;
    {
      eyeSpeed *= -1;
    }

    //Nose
    triangle(330,150,180,130,215,110);
    
    //Mouth
    line(200,150,225,150);

    //Body
    fill('red');
    rect(bodyX,190,100,150);
    bodyX+=bodySpeed;
    if(bodyX >= 300 || bodyX <= 0)
    {
        bodySpeed *= -1;
    }
    
    //Legs
    fill(255);
    rect(165,legY,20,50);
    rect(255,legY,20,50);
    legY += legSpeed;
    if(legY <= 0 || legY >= 350 )
    {
        legSpeed *= -1;
    }

    //Bottom printed name
    fill(0);
    textSize(14);
    text("Isaac Mercado-Laundrie",0.5,390 );

}