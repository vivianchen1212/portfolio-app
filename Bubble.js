
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