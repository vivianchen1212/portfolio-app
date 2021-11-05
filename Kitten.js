let xLeft = 130;
let xRight = 270;
let y = 320;
let  d ,r ,g, b;
let b1 =[];



function setup(){

  let cnv = createCanvas(400,400);
  for (let i =0; i < 20; i++){   
    let x = random(width);
    let y = random(height);
    let d = random(1 ,10);
        
  b1[i] = new Bubble(x,y,d);  
  }  
}


function draw(){
   
  background(r, g, b);
  
    for (let i = 0 ; i < b1.length ; i++){  
  b1[i].move();
  b1[i].show();  
  }
  
  drawface();   
  
  if  (( keyIsPressed == true ) & (keyCode == 32)) { 
         
   stroke(15);
   strokeWeight(2);    
   ellipse(130,320,70, 0);
   ellipse(270,320,70, 0);     
 }
    
  else{  
  drawRighteye(); 
  drawlefteye(); 
  drawPupils();    
  } 
  
} 


function changeColor(){

	r = random(255);
	g = random(165,228);
	b = random(205,255);  
}


function mousePressed() {
  
changeColor();
    
}


function drawface(){
//左耳
  fill(140, 123, 108);
  noStroke();
  beginShape();
  curveVertex(width*.12, width*.8); //外邊
  curveVertex(width*.1, width*.5); //頂點
  curveVertex(width*.12, width*.75); //

  curveVertex(width*.4, width*.6); //內邊
  curveVertex(width*.1, width*.45); //
  curveVertex(width*.2, width*.2);
  endShape();
  
  
  

//右耳
  fill(140, 123, 108);
  noStroke();
  beginShape(); 
  curveVertex(width*.88, width*.8); 
  curveVertex(width*.9, width*.5);
  curveVertex(width*.88, width*.75);  
  
  curveVertex(width*.6, width*.6);  
  curveVertex(width*.9, width*.45);  
  curveVertex(width*.8, width*.2); 
  endShape();
  
  
  
//臉
  fill(217, 201, 186);
  noStroke();
  circle(width*0.5, width*1.05, width*1); 
  fill(140, 123, 108);
  ellipse(width*0.5, width*.9, width*0.6, width*0.3);  

  
//左鬍鬚
  stroke(242, 242, 242);
  strokeWeight(2); 
  line(20, 360, 150, 370);
  line(20, 390, 150, 380);


//右鬍鬚
  strokeWeight(2); 
  line(250, 370, 380, 360);
  line(250, 380, 380, 390);  
  
  
//鼻子
  fill(191, 123, 117);
  noStroke();
  strokeWeight(.1);
  ellipse(200,375,65,30);
}


function drawPupils() {
  fill(137, 186, 217);  //藍
  ellipse(xLeft,y,55,55);
  ellipse(xRight,y,55,55);
  
  fill(10);  //黑
  ellipse(xLeft,y,30,50);
  ellipse(xRight,y,30,50);
    
  y = map(mouseY,0,height,314,327,true);
  xLeft = map(mouseX,0,width,123,137,true);
  xRight = map(mouseX,0, width,263,277 ,true); 
}  
  
 
function drawRighteye() {
  fill(255);
  stroke(50);
  strokeWeight(.1);
  circle(270,320,70); 
}


function drawlefteye() {
  fill(255);
  stroke(50);
  strokeWeight(.1);
  circle(130,320,70);
}







class Bubble {
  
  
  constructor(x,y,d){
    this.x = x;
    this.y = y;
    this.d = d;
   this.rainOffset = 0;
  }
  
  
  show(){
   
    strokeWeight(0.1);  
   
    fill(191, 123, 117);     
    
    ellipse(this.x , this.y -10 + this.rainOffset, 10);

  }   



move(){
    
    
  this.rainOffset += this.d;
    if(this.rainOffset > 400)
    {
      this.rainOffset = -1500;
    }   

  }
}
