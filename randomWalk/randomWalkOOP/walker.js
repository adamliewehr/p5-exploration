// i want to have a walker get spawned in whenever the user clicks a location
// each walker draws the color based on where it was spawned in (just choose x y or both)
// they are drawing their path but with the alpha value not at 1, so their colors mix!

// have a scale so it can be adjusted

// it would be cool to have the color scale with the x
// and have the scl (size) scale with the y!

let directions = [
  [0, -scl], // up
  [0, scl], // down
  [-scl, 0], // left
  [scl, 0], // right
];

class Walker {
  constructor(x, y, color1, color2) {
    this.x = x;
    this.y = y;
    this.color1 = color1;
    this.color2 = color2;
  }

  display() {
    noStroke();
    fill(this.color2, 100, this.color1, 10);
    rect(this.x, this.y, scl, scl);
  }

  move() {
    let direction = random(directions);

    this.x += direction[0];
    this.y += direction[1];

    if (this.x > width || this.x < 0) {
      this.x = floor(width / 2) - (floor(width / 2) % scl);
      this.y = floor(height / 2) - (floor(height / 2) % scl);
    }
    if (this.y > height || this.y < 0) {
      this.x = floor(width / 2) - (floor(width / 2) % scl);
      this.y = floor(height / 2) - (floor(height / 2) % scl);
    }
  }
}
