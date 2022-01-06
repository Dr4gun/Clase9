var pelota;
function setup() {
  createCanvas(400,400);
  pelota = createSprite(200,200, 20 ,20);
}

function draw() 
{
  background(30);
  drawSprites();
  if (keyDown("left")) {

    pelota.x=pelota.x -3
  }
  if (keyDown("right")) {

    pelota.x=pelota.x +3
  }
  if (keyDown("up")) {

    pelota.y=pelota.y -3
  }
  if (keyDown("down")) {

    pelota.y=pelota.y +3
  }

}




