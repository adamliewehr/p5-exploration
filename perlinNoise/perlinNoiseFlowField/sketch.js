let inc = 0.1;
let scl = 10; // this is so we can scale the grid down
let col, rows;

let fr; // to keep track of the frame rate

function setup() {
  createCanvas(200, 200);
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP(); // creating a paragraph element on the page
}

function draw() {
  let yoff = 0;

  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      let index = (x + y * width) * 4;
      let r = noise(xoff, yoff) * 255;
      xoff += inc;

      let v = p5.Vector.fromAngle(0); // creating a vector from angle 0

      stroke(random(255));
      push();
      rotate();
      translate(x * scl, y * scl);
      rotate(v.heading());
      line(0, 0, scl, 0);

      pop();

      // fill(r);
      // rect(x * scl, y * scl, scl, scl);
    }
    yoff += inc;
  }
  fr.html(floor(frameRate()));
  noLoop();
}
