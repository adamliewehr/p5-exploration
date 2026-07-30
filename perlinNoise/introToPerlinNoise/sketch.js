// the noise function takes a number, and gives you the value at the point in time for that number

// we are starting the x and y offset at different times along the time axis of the perlin noise
let xoff = 0;
let yoff = 100;
let r;

function setup() {
  createCanvas(500, 500);
  background(220);
  r = width / 2;
}

function draw() {
  background(0);

  // let x = random(width);

  let x = noise(xoff) * width;
  let y = noise(yoff) * height;

  // they are being inceremented at the same rate
  // if we were to make one more or less, that axis would be more or less eratic
  xoff += 0.005;
  yoff += 0.005;

  if (dist(mouseX, mouseY, x, y) < r / 2) {
    // background(0, 255, 0);
    r -= 1;
  }

  ellipse(x, y, r, r);
}
