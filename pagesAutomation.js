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

  let markdownContent = `
# Links: 
`;

  // Process each line
  array.forEach((line, index) => {
    if (line.includes(".html")) {
      //   console.log(`Line ${index + 1}: ./${line}\n`);
      console.log(`https://adamliewehr.github.io/p5-exploration/${line.slice(0, line.indexOf(":"))}`);
      markdownContent += `https://adamliewehr.github.io/p5-exploration/${line.slice(0, line.indexOf(":"))}\n\n`;
    }
  });

  // Writes (and overwrites) the file synchronously
  try {
    fs.writeFileSync("LINKS.md", markdownContent, "utf-8");
    console.log("Markdown file successfully created!");
  } catch (error) {
    console.error("Error writing markdown file:", error);
  }

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
