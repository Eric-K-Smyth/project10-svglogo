const fs = require("fs");
const inquirer = require("inquirer");
const { Shape, Triangle, Circle, Square } = require("./lib/shapes");

async function promptUserForInput() {
  const shapeChoices = ["Triangle", "Circle", "Square"];
  const colorChoices = ["red", "green", "blue", "yellow", "white", "black"];
    // Use Inquirer to prompt the user for input
    // and collect the user's choices (text, text color, shape, and shape color).
    const userChoices = await inquirer.prompt([
      // Implemented Inquirer prompts here
        {
      type: "input",
      name: "text",
      message: "Enter up to three characters for the logo:",
      validate: function (value) {
        // Validate that the user has entered up to three characters
        return value.length > 0 && value.length <= 3 ? true : "Please enter up to three characters.";
      },
    },
    {
      type: "list",
      name: "textColor",
      message: "Select the text color:",
      choices: colorChoices,
    },
    {
      type: "list",
      name: "shape",
      message: "Select a shape for the logo:",
      choices: shapeChoices,
    },
    {
      type: "list",
      name: "shapeColor",
      message: "Select the shape color:",
      choices: colorChoices,
    },
  ]);

  
 // Generate the SVG string based on the user's choices
 const svgString = generateSVG(userChoices);
 return {
  svgString: svgString,
  userChoices: userChoices,
};
  }

  function generateSVG(userChoices) {
    // Create an instance of the chosen shape class
    let shape;
    if (userChoices.shape === "Triangle") {
      shape = new Triangle();
    } else if (userChoices.shape === "Circle") {
      shape = new Circle();
    } else if (userChoices.shape === "Square") {
      shape = new Square();
    }
  
    // Set the color for the shape
    shape.setColor(userChoices.shapeColor);
  
    // Call the render method to get the SVG string
    const shapeSVG = shape.render();
  
    // Combine the shapeSVG with the text SVG
    const textSVG = `<text x="50" y="100" fill="${userChoices.textColor}" font-size="50">${userChoices.text}</text>`;
  const svgString = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${shapeSVG}${textSVG}</svg>`;
  
    return svgString;
  }

  async function generateLogo() {
    try {
      const {svgString} = await promptUserForInput();
  
      // Save the SVG string to a file named logo.svg
      fs.writeFileSync("logo.svg", svgString);
  
      console.log("Generated logo.svg");
    } catch (error) {
      console.error("Error generating the logo:", error);
    }
  }
  
  // Call the main function to start the logo generation process
  generateLogo();
  