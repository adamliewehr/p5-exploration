function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  //   fill(random(255), random(255), random(255));
  //   circle(random(width), random(height), random(10, width / 5));
}

let initialX;
let initialY;

function mousePressed() {
  //   initialX = mouseX
  // initialY = mouseY
  fill(0);

  rect(mouseX, mouseY, -50, -50);
}

function mouseDragged() {
  background(220);

  if (keyIsDown(SHIFT)) {
    resizeCanvas(mouseX, mouseY);
    console.log(mouseX, mouseY);
  } else {
    // rect(initialX, initialY, mouseX, mouseY)
  }
}

function mouseReleased() {}
