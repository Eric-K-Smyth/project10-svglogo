class Shape {
    constructor() {
      this.color = "black"; // Default color if not specified by the user
    }
  
    setColor(color) {
      this.color = color;
    }
  
    // This method should be overridden by child classes to render the specific shape as an SVG string.
    render() {
      // Implement the rendering logic for the shape in the child classes.
      // Return an empty string as a placeholder for now.
      return "";
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon points="100,0 0,200 200,200" fill="${this.color}" />`;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="100" cy="100" r="100" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect x="0" y="0" width="200" height="200" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Shape, Triangle, Circle, Square };
  