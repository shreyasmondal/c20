var fr,mr


function setup() {
  createCanvas(800,400);
  mr = createSprite(400, 200, 50, 50);
  fr = createSprite(500,200,50,50)
  fr.shapeColor = "red"
  mr.shapeColor = "blue"
}

function draw() {
  background(0);  
  
  mr.x = World.mouseX
  mr.y = World.mouseY
  
  if(mr.x - fr.x<fr.width/2+mr.width/2 && fr.x - mr.x<fr.width/2+mr.width/2
  &&mr.y - fr.y<fr.height/2+mr.height/2 && fr.y - mr.y<fr.height/2+mr.height/2){
    fr.shapeColor = "green"
    mr.shapeColor = "green"
  }else{
    fr.shapeColor = "red"
    mr.shapeColor = "blue"
  }
  
  
  
  drawSprites();
}