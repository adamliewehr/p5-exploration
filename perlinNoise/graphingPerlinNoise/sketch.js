// let xoff = 0;
// let yoff = 100;
let inc = 0;

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  background(0);
  // let x = random(width);

  stroke(255);
  noFill();
  beginShape();

  let i = 0;

  for (let x = inc; x < innerWidth; x++) {
    stroke(255);
    // let y = random(height);
    let y = noise(i) * height;
    i += 0.01;
    vertex(x, y);
  }

  endShape();

  inc -= 1;

  // we are moving across the perlin noise space over time

  // noLoop();
}
