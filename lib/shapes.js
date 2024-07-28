// const index = require("../index.js")

// <svg width="300" height="200">

//   <circle cx="150" cy="100" r="100" fill="green" />

//   <rect x="125" y="75" width="50" height="50" />

//   <polygon points="100,150 150,200 200,150" fill="blue" />

//   <text x="150" y="122.5" font-size="60" text-anchor="middle" fill="white">svg</text>

// </svg>

// build the shape generator

class Shape {
    constructor(color) {
        this.color = color;
    }
    getSVG() {
        return '';
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    getSVG() {
        return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color);
        this.points = "100,150 150,200 200,150"; // Default points
    }
    getSVG() {
        return `<polygon points="${this.points}" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    constructor(color, width = 50, height = 50, x = 125, y = 75) {
        super(color);
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
    }
    getSVG() {
        return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.color}" />`;
    }
}

module.exports = { Circle, Triangle, Square };
