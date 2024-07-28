const inquirer = require("inquirer");
const colors = require("colors");
const fs = require("fs");
const { Circle, Triangle, Square } = require('./lib/shapes.js')

inquirer
    .prompt([
        {
            type: "input",
            message: "Type up to three characters you want in your logo.",
            name: "acronym",
            validate: function (input) {
                if (input.length > 3) {
                    return "input must be no more than 3 characters.";
                }
                if (!/^[a-zA-Z0-9]*$/.test(input)) {
                    return "input must contain only letters or numbers.";
                }
                return true;
            },
            filter: function (input) {
                return input.toUpperCase();
            },
        },
        {
            type: "input",
            message: "For your text, type a color OR hexadecimal number",
            name: "textColor",
            validate: function (textColor) {
                if (colors[textColor]) {
                    return true;
                } else if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(textColor)) {
                    return true;
                } else {
                    return "Not a valid color!";
                }
            }
        },
        {
            type: "list",
            message: "Choose your preferred shape.",
            choices: ["circle", "triangle", "square"],
            name: "shape",

        },
        {
            type: "input",
            message: "For your shape, type a color OR hexadexical number",
            name: "shapeColor",
            validate: function (shapeColor) {
                if (colors[shapeColor]) {
                    return true;
                } else if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(shapeColor)) {
                    return true;
                } else {
                    return "Not a valid color!";
                }
            }
        }
    ])
    .then((data) => {
        const svgStart = `<svg width="300" height="200">`;
        const svgEnd = `</svg>`;
        const textElement = `<text x="150" y="100" text-anchor="middle" fill="${data.textColor}">${data.acronym}</text>`;

        let shape;
        switch (data.shape) {
            case 'circle':
                shape = new Circle(data.shapeColor, 100);
                break;
            case 'triangle':
                shape = new Triangle(data.shapeColor);
                break;
            case 'square':
                shape = new Square(data.shapeColor);
                break;
            default:
                throw new Error('Invalid shape selection');
        }

        const svgContent = svgStart + shape.getSVG() + textElement + svgEnd;
        const filename = `${data.acronym.toUpperCase().split(" ").join("")}.svg`;

        fs.writeFile(filename, svgContent, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log(`Generated ${filename}`);
            }
        });
    });