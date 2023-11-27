var x = 50;
var y = 250;
var diameter = 40;

var squareX = 30;
var squareY = 20;


var w = 87; 
var s = 83;
var a = 65;
var d = 68;

var playerX = 100;
var playerY = 100;

var mouseShapeX;
var mouseShapeY;

function setup() {
    createCanvas(600, 600);
}
function draw() {
    background(70);
    fill(100, 40, 20);
    circle(x, y, diameter);
    x += random(1, 10);

    fill(100, 80, 40);
    square(squareX, squareY,55);
    squareY += random(1, 10);


    drawPlayer();
    playerMovement();

    fill(120,130,140);
    circle(mouseShapeX, mouseShapeY, 25);

    createBorders(10);
    
    textSize(16);
    text("EXIT", width-50,height-50)
    
    if(playerX > width && playerY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }
}


function createPlayer(x,y)
{
    playerX = x;
    playerY = y;
    console.log(playerX);
}

function drawPlayer()
{
    fill(120,30,40);
    circle(playerX,playerY,25);
}



function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function playerMovement()
{
    if(keyIsDown(w))
    {
        playerY -= 10;   
    }
    if(keyIsDown(s))
    {
        playerY += 10;   
    }
    if(keyIsDown(a))
    {
        playerX -= 10;   
    }
    if(keyIsDown(d))
    {
        playerX += 10;   
    }
}

function createBorders(thickness)
{
    // top border
    rect(0,0,width,thickness);
    // left border
    rect(0,0,thickness,height);
    // bottom border
    rect(0, height-thickness,width, thickness);
    //right border
    rect(width-thickness,0,thickness,height-50);
}


