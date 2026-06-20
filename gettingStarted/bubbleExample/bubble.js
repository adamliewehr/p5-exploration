class Bubble {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    // eventually make it so that if you hold down for longer the bubble get bigger!
    this.r = 50;
    this.dx = 0;
    this.dy = -10;
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
  }

  display() {
    stroke(0);
    circle(this.x, this.y, this.r);
  }
}
