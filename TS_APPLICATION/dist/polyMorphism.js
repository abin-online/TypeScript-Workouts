"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        return 3.14 ** this.radius;
    }
}
class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    area() {
        return this.length * this.width;
    }
}
function printArea(shape) {
    console.log(`Area of ${shape} is ${shape.area()}`);
}
const c = new Circle(5);
const r = new Rectangle(3, 5);
printArea(c);
printArea(r);
//console.log(c.area());
