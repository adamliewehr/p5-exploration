let x, y;
let scl = 25;
let visited = new Set();

const dir = [
  [0, -scl],
  [0, scl],
  [scl, 0],
  [-scl, 0],
];

function setup() {
  createCanvas(400, 400);
  background(0);
  x = floor(width / 2);
  y = floor(height / 2);
}

function draw() {
  // stroke(x % 255, y % 255, (x * y) % 255);
  fill(map(x, 0, width, 0, 255), map(y, 0, height, 0, 255), 0);
  rect(x, y, scl, scl);
  visited.add(JSON.stringify([x, y]));

  let directions = [];

  if (!visited.has(JSON.stringify([x, y - 1]))) {
    directions.push([0, -scl]);
  }
  if (!visited.has(JSON.stringify([x, y + 1]))) {
    directions.push([0, scl]);
  }
  if (!visited.has(JSON.stringify([x - 1, y]))) {
    directions.push([-scl, 0]);
  }
  if (!visited.has(JSON.stringify([x + 1, y]))) {
    directions.push([scl, 0]);
  }

  // print(directions);

  let r = random(directions);

  if (r === undefined) {
    r = random(dir);
    x += r[0];
    y += r[1];
  } else {
    x += r[0];
    y += r[1];
  }

  if (dist(x, y, width / 2, height / 2) > width / 2) {
    x = floor(width / 2);
    y = floor(height / 2);
  }

  // if (visited.has([x, y])) {
  //   console.log("test");
  // }

  // console.log(visited);
  // noLoop();
}
