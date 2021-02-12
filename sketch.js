var balloon, database, position;

function preload() {
  bgImage = loadImage("images/Hot Air Balloon-01.png");
  balloonImage1=loadAnimation("images/Hot Air Balloon-02.png");
  balloonImage2=loadAnimation("images/Hot Air Balloon-02.png","images/Hot Air Balloon-02.png",
  "images/Hot Air Balloon-02.png","images/Hot Air Balloon-03.png","images/Hot Air Balloon-03.png",
  "images/Hot Air Balloon-03.png","images/Hot Air Balloon-04.png","images/Hot Air Balloon-04.png",
  "images/Hot Air Balloon-04.png");
}

function setup() {
  createCanvas(500,500);
  database = firebase.database();
  balloon = createSprite(250, 250, 50, 50);
  balloon.addAnimation("balloonImg", balloonImage1);
  balloon.scale = 0.3
  /*var balloonPosition = = database.ref('balloon/height');
  balloonPosition.on("value", getBalloonPosition, showError);
  */
}

function draw() {
  background(bgImage);
  fill("black");
  text("*Use the arrow keys to move the air balloon!", 10, 20);

  //database is to be written in the setup function
  
  //these controls are used when we dont access the database.
  if (keyDown(UP_ARROW)) {
    balloon.y = balloon.y-10;
  }
  
  if (keyDown(DOWN_ARROW)) {
    balloon.y = balloon.y+10;
  }
  
  if (keyDown(RIGHT_ARROW)) {
    balloon.x = balloon.x+10;
  }
  
  if (keyDown(LEFT_ARROW)) {
    balloon.x = balloon.x-10;
  }
/*
//the height is to be updated when you click the arrows
  if(keyDown(LEFT_ARROW)){
    updateHeight(-10,0);
    balloon.addAnimation("hotAirBalloon",balloonImage2);
  }
  else if(keyDown(RIGHT_ARROW)){
    updateHeight(10,0);
    balloon.addAnimation("hotAirBalloon",balloonImage2);
  }
  else if(keyDown(UP_ARROW)){
    updateHeight(0,-10);
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.scale=balloon.scale -0.005;
  }
  else if(keyDown(DOWN_ARROW)){
    updateHeight(0,+10);
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.scale=balloon.scale+0.005;
  }
*/
  drawSprites();
}

/*function updateHeight(x,y) {
  database.ref('balloon/height').set({
    'x': height.x+x,
    'y': height.y+y
  });
}

function getBalloonPosition(data) {
  height = data.val();
  balloon.x = height.x;
  balloon.y = height.y;
}

function showError() {
  console.log("Error in writing to the database");
}

in database (FYR)
  balloon
    height
      x: 200
      y: 100
*/