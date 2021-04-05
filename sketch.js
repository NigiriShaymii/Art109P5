function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(225);
  
  fill(159, 207, 227);
  ellipse(width * 0.1, height * 0.1, width * 0.9, height * 0.3);
  ellipse(width * 0.7, height * 0.5, width * 0.9, height * 0.3);
  
  fill(146, 200, 100);
  rect(0, height * 0.8, width, height);
  
  fill(255, 255, 0);
  circle(width *0.8, height * 0.2, 100);
  
  fill(105, 60, 25);
  square(width * 0.3, height *0.7, 160);
  
  fill(255, 0, 0);
  triangle(width * 0.5, height * 0.3, width * 0.3, height * 0.7, width * 0.7, height * 0.7);
  
  circle(width *0.8, height * 0.2, 50);
  
  fill(0, 100, 100);
  circle(width *0.8, height * 0.2, 25);
  
  fill(0);
  square(width * .4,  height * .85, 80);
  
  fill(255);
  circle(width * 0.55, height * 0.95, 10);
}