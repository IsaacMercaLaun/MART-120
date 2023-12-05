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

var myXs = [];
var myYs = [];
var myDiameters = [];

function setup() 
{
    createCanvas(600, 600);

    for(var i = 0; i < 3; i++)
        {
            myXs[i] = getRandomNumber(600);
            myYs[i] = getRandomNumber(600);
            myDiameters[i] = getRandomNumber(100);
        }
}

function draw() 
{
    background(70);
    fill(100, 40, 20);
    circle(x, y, diameter);
    x += random(1, 10);

    fill(100, 80, 40);
    square(squareX, squareY,55);
    squareY += random(1, 10);

    for(var i = 0; i < myXs.length; i++)
        {
            newCircles(myXs[i],myYs[i],myDiameters[i]);
        }


    drawPlayer();
    playerMovement();

    mouseClickedAction();

    createBorders(10);

    createExit();
    
    //CircleSquareP(30, 38, 50, 50, 100, 10);

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

function mouseClickedAction()
{
    fill(120,130,140);
    circle(mouseShapeX, mouseShapeY, 25);
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

function createExit()
{
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

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}

function newCircles(x,y,diameter)
{
    circle(x,y,diameter);
}

//function CircleSquareP(circleX, circleY, diameter, squareX, squareY, sideLength) 
    //{
    //circle(circleX, circleY, diameter);
    //square(squareX, squareY, sideLength);
  //}