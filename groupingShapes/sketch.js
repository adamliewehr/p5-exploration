function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawFlower(mouseX, mouseY);
}

// Custom function grouping shapes into a flower
function drawFlower(x, y) {
  fill("yellow");
  circle(x, y, 30); // Center

  fill("pink");
  circle(x, y - 20, 20); // Petals
  circle(x, y + 20, 20);
  circle(x - 20, y, 20);
  circle(x + 20, y, 20);
}
