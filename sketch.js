var mr,fr
function setup() {
  createCanvas(800,400);
  mr=createSprite(400, 200, 70, 50);
  mr.shapeColor="red"
  fr=createSprite(200,200,50,50)
  fr.shapeColor="red"
}

function draw() {
      background(255,255,255);
      mr.x=World.mouseX
  mr.y=World.mouseY
    console.log(mr.x-fr.x)

    if (mr.x-fr.x<mr.width/2+fr.width/2 && fr.x-mr.x<mr.width/2+fr.width/2
      && mr.y-fr.y<mr.height/2+fr.height/2 && fr.y-mr.y<mr.height/2+fr.height/2){
      mr.shapeColor="green"
      fr.shapeColor="green"
    }
    else{
    mr.shapeColor="red"
    fr.shapeColor="red"
    }
  
    drawSprites();
}