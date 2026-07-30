let x, y;
function setup() {
  createCanvas(400, 400);
  background(0);
  x = floor(width / 2);
  y = floor(height / 2);
}

function draw() {
  stroke(x % 255, y % 255, (x * y) % 255);
  circle(x, y, 2);

  let directions = [
    [0, -1], // up
    [0, 1], // down
    [-1, 0], // left
    [1, 0], // right
  ];

  if (x - mouseX < 0) {
    // we are to the right of the walker
    directions.push([1, 0]);
  } else {
    // we are to the left of the walker
    directions.push([-1, 0]);
  }

  if (y - mouseY < 0) {
    directions.push([0, 1]);
  } else {
    directions.push([0, -1]);
  }

  let r = random(directions);

  x += r[0];
  y += r[1];
}
