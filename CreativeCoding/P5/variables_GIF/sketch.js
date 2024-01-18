let gif;

function preload (){
gif = load image('assets/ALeventon_Final copy.gif');
}



function setup() {//runs once
  createCanvas(windowWidth, windowHeight);
  fill('lightblue');
  background ('lightgray');
  strokeWeight(1);
}

function draw() {//runs in a loop

  var num = 8;//variable for the number of squares
  var sideLen = windowWidth/num;//variable for the side length of each square

  for (var y = 0; y<windowWidth; y=y+sideLen){//loop to create a row of squares in the y direction

  for (var x=0; x<windowWidth; x=x+sideLen){//loop to create a row of squares in the x direction
  image(gif, x, y, sideLen, sideLen);
  }
  }

}

function windowResized (){
  resizeCanvas (windowWidth, windowHeight);
}
