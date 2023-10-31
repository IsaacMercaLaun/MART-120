function setup() {
    createCanvas(400,400);
  }


function draw()
{
    background(220);
    textSize(20)
    text("My Self Portrait!", 110,20);

    fill('brown');
    circle(210,115,150);
   
    strokeWeight(10);
    fill(0);
    point(180,100);
    point(240,100);

    triangle(330,150,180,130,215,110);
    
    line(200,150,225,150);

    fill('red');
    rect(165,190,100,150);
    
    fill(255);
    rect(165,340,20,50);
    rect(255,340,20,50);

    fill(0);
    textSize(14);
    text("Isaac Mercado-Laundrie",0.5,390 );

}