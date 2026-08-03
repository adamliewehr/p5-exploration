let scl = 5;

let walkers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

let walker;

function draw() {
  for (let i = 0; i < walkers.length; i++) {
    walkers[i].display();
    walkers[i].move();
  }
}

function mousePressed() {
  // create a walker
  walker = new Walker(
    mouseX - (mouseX % scl),
    mouseY - (mouseY % scl),
    floor(map(mouseX, 0, width, 0, 255)),
    floor(map(mouseY, 0, height, 0, 255)),
  );
  walkers.push(walker);
}
