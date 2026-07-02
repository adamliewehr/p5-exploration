let mySound; // creating a sound variable to use later

function preload() {
  // Load the sound file
  mySound = loadSound("vine-boom.mp3");
}

// storage for the vertical and horizontal arrays
let vertLines = [];
let horzLines = [];

function setup() {
  createCanvas(600, 600);
  // createCanvas(windowWidth, windowHeight);
  // frameRate(1);

  background(200);

  // this creates lines on the very edge of the canvas.
  // this is mainly to avoid doing extra edge case checks down the line
  vertLines[0] = new Line(0, 0, 0, height);
  vertLines[width] = new Line(width, 0, width, height);

  horzLines[0] = new Line(0, 0, width, 0);
  horzLines[height] = new Line(0, height, width, height);
}

let flip = 1; // 1 for vert, -1 for horz

function draw() {
  background(200);

  // main loops that are drawing the lines each time
  for (let li of vertLines) {
    if (li) {
      li.display();
    }
  }
  for (let li of horzLines) {
    if (li) {
      li.display();
    }
  }
}

function mousePressed() {
  if (!vertLines[mouseX] && !horzLines[mouseY]) {
    // checks if the user clickes on another line. a line doesn't get drawn if they do

    // sometimes, your x and y position can be a float, so we round it to an int for easy indexing later
    let mouseX_save = Math.round(mouseX);
    let mouseY_save = Math.round(mouseY);

    let increment = 1; // we only need one increment variable since we are checking for lines in both directions at the same time

    // EXPLINATION FOR THE MAIN ALGORITHM:
    // to create the effect that a line's boundries are between the two closest lines to its left or right, or top or bottom, the following algo is used
    // we first check if the user clicked on the x or y value of another line, if they do, a line is not drawn, and a funny sound plays... (if statement above)
    // when the user clicks the canvas, we save the coords of the click
    // then, we save two variables upper and lower, or left and right, for vertical and horizontal lines respectively. these are the bounds
    // an increment variable is used to check the indicies away from the position you clicked
    // we check in both directions at the same time. if a bound is found, we save it, and continue until both bounds are found
    // once both bounds are found, we draw the line, saving the line to the index that coorosponds with the x or y value at which it was placed
    // this program utilizes a line class, that simply saves the x1, y1, x2, and y2 values

    // this algo allows us to skip having to traverse the whole list

    if (flip == 1) {
      // drawing vert line

      // place holder for the bounds
      let upper = undefined;
      let lower = undefined;

      while (upper == undefined || lower == undefined) {
        // keep looping until both bounds are found
        if (!upper && horzLines[mouseY_save - increment]) {
          // if there is no upper line let, and there is a horizontal line in this spot

          if (
            // if the mouseX position is in between the current line being checks bounds
            mouseX_save > horzLines[mouseY_save - increment].x1 &&
            mouseX_save < horzLines[mouseY_save - increment].x2
          ) {
            upper = mouseY_save - increment; // we found our upper bound!
          }
        }

        // same as above, but in the other direction
        if (!lower && horzLines[mouseY_save + increment]) {
          if (
            mouseX_save > horzLines[mouseY_save + increment].x1 &&
            mouseX_save < horzLines[mouseY_save + increment].x2
          ) {
            lower = mouseY_save + increment;
          }
        }

        increment += 1; // keep going

        // circle(mouseX_save, mouseY_save - increment, 10);
        // circle(mouseX_save, mouseY_save + increment, 10);
      }

      vertLines[Math.round(mouseX)] = new Line(mouseX, upper, mouseX, lower);
    } else {
      // horz line

      // the logic is largely the same as the vert line drawing

      let left = undefined;
      let right = undefined;

      while (left == undefined || right == undefined) {
        if (!left && vertLines[mouseX_save - increment]) {
          if (
            mouseY_save > vertLines[mouseX_save - increment].y1 &&
            mouseY_save < vertLines[mouseX_save - increment].y2
          ) {
            left = mouseX_save - increment;
          }
        }

        if (!right && vertLines[mouseX_save + increment]) {
          if (
            mouseY_save > vertLines[mouseX_save + increment].y1 &&
            mouseY_save < vertLines[mouseX_save + increment].y2
          ) {
            right = mouseX_save + increment;
          }
        }
        increment += 1;
      }

      horzLines[Math.round(mouseY)] = new Line(left, mouseY, right, mouseY);
    }

    flip *= -1;
  } else {
    mySound.play();
  }
}
