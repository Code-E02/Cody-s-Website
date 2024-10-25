
function setup() {
  createCanvas(600, 600);
 
  
}

function draw() {
  //noFill();
  background('black');
  //BOTTOM
  
  
   
  
  //inner frame maroon for now
  
  fill('rgb(240,237,237)');
  stroke("null");
  square(84,85,440);
  
  
  
  
  //grey triangle top right
  fill('rgb(133,131,131)');
  noStroke();
  triangle(519,90,309,90,413,198);
  
  //yellow triangle!
  fill('rgb(253,173,35)');
  noStroke();
  triangle(85,522,165,424,87,357);
  
  //square under red tri
  
  fill("#DDDDF7");
  square(255, 341, 185);

  fill('red');
  noStroke();
  quad(522,86,522,524,406,524,255,340);
  
  //top left triangle 
   fill("#DDDDF7");
  noStroke();
  quad(89,246,88,90,256,90);
  
  //black triangle center
  fill('black');
  noStroke();
  quad(257,525,257,89,89,246,89,360);
  
  //outer white frame
   strokeWeight(7);
  
  //innter border ofbox
  stroke('black');
  noFill();
  square(86,86, 436, 0,);
  
  strokeWeight(7);
  stroke('rgb(255,255,255');
  noFill('white');
  square(79,79, 450);
  
  
  console.log("x", mouseX, "y", mouseY);
  //TOP
}