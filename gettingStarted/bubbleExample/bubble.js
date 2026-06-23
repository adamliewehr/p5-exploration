class Bubble {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    // eventually make it so that if you hold down for longer the bubble get bigger!
    this.d = 50;
    this.r = this.d / 2;
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
    this.r = this.d / 2; // update the radius
  }

  display() {
    stroke(0);
    circle(this.x, this.y, this.d);
  }

  checkColision() {
    // console.log(width);
    // console.log(this.y + this.r);
    if (this.y - this.r <= 0) {
      // circle collides with top of canvas
      this.dy *= -1;
    }
    if (this.y + this.r >= height) {
      this.dy *= -1;
    }
    if (this.x - this.r < 0) {
      this.dx *= -1;
    }
    if (this.x + this.r > width) {
      this.dx *= -1;
    }
  }

  checkForBugged() {
    if (this.x > width || this.x < 0 || this.y > height || this.y < 0) {
      this.x = width / 2;
      this.y = height / 2;
    }
  }
}
