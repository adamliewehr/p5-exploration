function setup() {
  createCanvas(400, 400);
  pixelDensity(1); // making the display equal for all users
  background(51);
}

// how does the pixel array work?
// we have a canvas on every p5 drawing
// this is a rectangular thing, and its a grid of pixels that has a width and a height
// p5 has functions get() and set(), that you can get the pixels and set the pixels

// but, there is a pixel array, which has numbers that corospond to all the colors on the canvas
// the problem is, the pixel array is just a 1D array, and we need to do some math to get the pixel from that 1d array

// this array contains just numbers, not an array or tuple or whatever for each pixle, just one number
// so, each number in this array is actually just 1 of 4 rgb and alpha values for each pixel

// [R, G, B, A], each pixel takes 4 spots of the array
// so, to get or set a value in the pixel array, the formula is x + y * width * 4

function draw() {
  background(51);

  loadPixels();

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;
      // pixels[index + 0] = random() * 255;
      // pixels[index + 1] = random() * 255;
      // pixels[index + 2] = random() * 255;
      // pixels[index + 3] = random() * 255;

      pixels[index + 0] = x;
      pixels[index + 1] = (x * y) % 255;
      pixels[index + 2] = y;
      pixels[index + 3] = 255;
      // pixels[index + 3] = random() * 255;
    }
  }

  updatePixels();

  // noLoop();
}
