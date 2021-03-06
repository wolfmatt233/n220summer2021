//set up canvas
function setup() {
    createCanvas(400, 300);
}

//set up background and line in the middle to offer visual separation between sides
function draw() {
    background(0,0,0)

    //color, weight, and dimensions of line
    stroke(255)
    strokeWeight(2)
    line(200, 0, 200, 300)

    //lines to make it look like pong
    line(20, 20, 20, 70)
    line(380, 150, 380, 200)

    //clear the outline for the circle 
    noStroke() 

    //place the circle on mouse movement and set the size
    circle(mouseX, mouseY, 15)

    //if mouse position x is greater than the middle (more than 200 is right side)
    if (mouseX > 200) {
        //then make the circle blue
        fill(217, 55, 37)
    } 
    //otherwise make the circle red (less than 200 is left side)
    else {
        fill(70, 88, 224)
    }
}