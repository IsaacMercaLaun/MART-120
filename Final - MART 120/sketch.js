var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = 50;
var diameter = 50;

var xBallSpeed = 5;
var yBallSpeed = 5;

var xPaddle;
var yPaddle;
var paddleWidth = 100;
var paddleHeight = 25;

var started = false;

var score = 0;

function setup() 
{
    createCanvas(400, 400);
}

function draw()
{
    background(70);
    fill(100, 40, 20);

    ellipse(xBall, yBall, diameter, diameter);

    BallMovement();
    bounce();
    paddle();
    keyPressed();
    collision();
    Score();
}

function BallMovement()
{
    xBall += xBallSpeed;
    yBall += yBallSpeed;
}

function bounce()
{
    if (xBall < diameter/2 || xBall > 400 - 0.5*diameter) 
        {
            xBallSpeed *= -1;
        }
    if (yBall < diameter/2 || yBall > 400 - diameter) 
        {
            yBallSpeed *= -1;
        }
}

function paddle()
{
    if (!started) 
    {
        xPaddle = 400 / 2;
        yPaddle = 400 - 27;
        started = true;
    }

    fill(0, 255, 255);
    rect(xPaddle, yPaddle, paddleWidth, paddleHeight);
}

function keyPressed() 
{
    if (keyCode === LEFT_ARROW) 
        {
            xPaddle -= 5;
        } 
    else if (keyCode === RIGHT_ARROW) 
        {
            xPaddle += 5;
        }
}

function collision()
{
    if ((xBall > xPaddle && xBall < xPaddle + paddleWidth) && (yBall + (diameter/2) >= yPaddle)) 
    {
        xBallSpeed *= -1;
        yBallSpeed *= -1;
        score++;
    }
}

function Score()
{
    fill(0, 255, 255);
    textSize(24);
    text("Score: " + score, 10, 25);
}