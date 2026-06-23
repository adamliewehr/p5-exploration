// defines an array to store all the bubblese in
let bubbles = [];
// this is needed for the click and drag effect when spawning the bubbles
// we need this to check if its the first step that the use has pressed down the mouse
let firstStep = true;

function setup() {
  createCanvas(windowWidth, windowHeight);

  background(200);
}

// setting the initial bubble global so it can be acsessed anywhere
let bub;

function draw() {
  background(200);

  // main bubble drawing a movement loop
  for (let bubble of bubbles) {
    bubble.display();
    bubble.move();
    bubble.checkColision();
    bubble.checkForBugged();
  }

  if (mouseIsPressed) {
    // console.log(mouseX, mouseY);
    if (firstStep) {
      // if its the first step in this mouse press that the mouse is being held
      bub = new Bubble(mouseX, mouseY); // create a bubble
      bub.display();
    } else {
      // the bubble moves with the mouse and grows until the mouse is released
      bub.x = mouseX;
      bub.y = mouseY;
      bub.d += 1;
      bub.display();
    }

    firstStep = false;
  }
}

function mouseReleased() {
  firstStep = true;
  bubbles.push(bub); // push the released bubble to the array
}

// Automatically triggers whenever the browser window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
