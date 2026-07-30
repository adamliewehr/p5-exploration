let inc = 0.01;
let start = 0;

function setup() {
  createCanvas(500, 500);
  pixelDensity(1);
  background(51);
}

function draw() {
  loadPixels();
  // nosieDetail(16);
  let yoff = 0;

  for (let y = 0; y < height; y++) {
    let xoff = 0;
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;

      let r = noise(start + xoff, start + yoff) * 255;

      pixels[index] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = r;
      pixels[index + 3] = 255;
      xoff += inc;
    }
    yoff += inc;
  }

  start += 0.01;
  updatePixels();
}

function mousePressed() {
  background(random(255), 0, 0);
}
