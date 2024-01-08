function setup() {//runs once
  createCanvas(720, 720);
  background ('pink');
  fill('lightblue');
  strokeWeight(8);
}

function draw() {//runs in a loop
  translate (60,60);
  
  for (var y = 0; y<600; y=y+300){//loop to create a row of squares in the y direction
  
  
  
  for (var x=8; x<600; x=x+300){//loop to create a row of squares in the x direction
    quad(x,y,
      x+300,y,
      x+300,y+300,
      x,y+300);  
    
  }
  }
  
}