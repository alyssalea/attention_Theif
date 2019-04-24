function setup() {
  createCanvas(1000,1000);
  frameRate(50)
  //background(50,0,50)
}

function draw() {
  background(50,0,50)
  //wings
  strokeWeight(0)
  stroke(0)
  fill(142,random(150,200),255,200)
  triangle(100,random(255,345),200,random(450,550),500,425)
  triangle(900,random(255,345),800,random(450,550),500,425)
  
  //body
  strokeWeight(0)
  stroke(0)
  fill(random (0,255),random (0,255),random (0,255))
  triangle(350,300,650,300,500,700)
  
  //legs
  strokeWeight(25)
  stroke(75,75,75)
  line(515,600,550,850)
  line(485,600,450,850)
  
  //left arm
  line(400,400,300,500)
  line(300,500,250,350)
  strokeWeight(0)
  fill(75,75,75)
  triangle(257,350,238,350,210,280)
  triangle(243,350,260,350,260,270)
  
  //right arm
  strokeWeight(25)
  stroke(75,75,75)
  line(600,400,700,500)
  line(700,500,750,350)
  strokeWeight(0)
  fill(75,75,75)
  triangle(743,350,762,350,790,280)
  triangle(757,350,740,350,740,270)
  
  //left antenna
  strokeWeight(5)
  stroke(0)
  line(450,225,300,60)
  line(300,60,200,200)
  strokeWeight(0)
  fill(random (0,255),random (0,255),random (0,255))
  ellipse(200,200,50,50)
  
  //right antenna
  strokeWeight(5)
  stroke(0)
  line(550,225,700,60)
  line(700,60,800,200)
  strokeWeight(0)
  fill(random (0,255),random (0,255),random (0,255))
  ellipse(800,200,50,50)
  
  //head
  fill(75,75,75)
  ellipse(500,300,300,200)
  
  //eye
  fill(random (0,255),random (0,255),random (0,255))
  ellipse(500,275,100,60)
  strokeWeight(5)
  line(461,256,535,295)
  line(540,256,463,295)
  
  //mouth
  strokeWeight(0)
  fill(random (0,255),random (0,255),random (0,255))
  quad(370,270,500,325,630,270,500,400)
}