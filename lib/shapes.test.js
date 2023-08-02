const { Triangle, Circle, Square } = require("./shapes");

describe("Shape Classes Test", () => { //triangle test
  test("Triangle should render the correct SVG string", () => {
    const triangle = new Triangle();
    triangle.setColor("blue");
    const svgString = triangle.render();
    expect(svgString).toEqual('<polygon points="100,0 0,200 200,200" fill="blue" />');
  });

  test("Circle should render the correct SVG string", () => {
    const circle = new Circle(); //circle test
    circle.setColor("red");
    const svgString = circle.render();
    expect(svgString).toEqual('<circle cx="100" cy="100" r="100" fill="red" />');
  });

  test("Square should render the correct SVG string", () => {
    const square = new Square(); //square test
    square.setColor("green");
    const svgString = square.render();
    expect(svgString).toEqual('<rect x="0" y="0" width="200" height="200" fill="green" />');
  });
});
