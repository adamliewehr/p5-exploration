let bubbles = [];

function setup() {
  createCanvas(900, 900);
  background(200);
}

function draw() {
  background(200);
  for (let bubble of bubbles) {
    bubble.display();
    bubble.move();
  }
}

function mousePressed() {
  bubbles.push(new Bubble(mouseX, mouseY));
  // console.log(mouseX, mouseY);
}
