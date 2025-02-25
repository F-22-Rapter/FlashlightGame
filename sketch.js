let battery = 255

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight,true);
}
function draw() {
  background(0);
  print(battery)

  if(mouseIsPressed ){
    if(battery >0){
      battery = battery - 1
    }

    push() //creates one mask

    beginClip(); //creates a filter that will only show whats inside the circle
    ellipse(mouseX,mouseY, map(battery,0,255,0,255)); //only the circle is visible
    endClip();
    drawWorld() // draws all the shapes, which are shown based on the filter

    pop() // deleted the previous mask so then it can create a new mask and not overlay it
  }else if(battery <255){
    battery++
  } 

  drawBatteryLevel() // draws battery level over everything
//  drawWorld() // draws all the shapes, which are shown based on the filter

}

function drawWorld(){
  push() //draws all elements first

  //draw base flashlight first
  //draws flashlight
  strokeWeight(0)
  fill(100, 100, 50,battery)
  ellipse(mouseX,mouseY,map(battery,0,255,10,255)); // flashlight effect (yellow circle)
  
  //draw all element
  //draws square element
  fill(255)
  square(200,200,100)

  //draw inverse so elements seem to fade out
  //draws inverse flashlight
  strokeWeight(0)
  fill(0, 0, 0, 255-battery )
  ellipse(mouseX,mouseY, map(battery,0,255,10,255)); // flashlight effect (yellow circle)

  pop() // now draws player above everything
    

  //draws player image
  textAlign(CENTER)
  textSize(30)
  text("🔦",mouseX-4,mouseY+7)

  //draws collision frame for player
  push()
  translate(mouseX-8,mouseY-18)
  rotate(45)
  noFill()
  stroke(0,255,0)
  rect(0,0,30,15)
  pop()
}

function drawBatteryLevel(){
  fill(map(battery,0,255,255,0),map(battery,0,255,0,255),0)
  rect(20,20,map(battery,0,255,3,100),20)
}
