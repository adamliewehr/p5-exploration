// Importing the fs module
const fs = require("fs");

// Reading file asynchronously
fs.readFile("allFolders.txt", "utf8", function (err, data) {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  // Convert file content to array
  const array = data.toString().split("./");

  // Process each line
  array.forEach((line, index) => {
    if (line.includes(".html")) {
      console.log(`Line ${index + 1}: ./${line}\n`);
    }
  });

  //   for (const directory of array) {
  // console.log(directory);
  // let numOfSlashes = 0;
  // for (const char of directory) {
  //   if (char == "/") {
  //     numOfSlashes++;
  //   }
  // }

  // console.log(numOfSlashes);
  //   }
});
