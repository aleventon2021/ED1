function setup() {//runs once
  createCanvas(720, 720);
  fill('lightblue');
  background ('pink')
  strokeWeight(8);
}

function draw() {//runs in a loop
  
  translate (60,60);
  
  quad(0,0,
      300,0,
      300,300,
      0,300);
  
  noLoop ();
  
}