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
    }
    getSVG() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color);
        this.points = "150,1,1,150,300,150";
    }
    getSVG() {
        return `<polygon points="${this.points}" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    constructor(color, width = 150, height = 150, x = 80, y = 30) {
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
