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
//compile time polymorphism
class Calculator {
    add(a, b) {
        return a + b;
    }
}
const calc = new Calculator();
console.log(calc.add(5, 23));
console.log(calc.add("Hello", "9"));
//Runtime Polymorphism
class Animal {
    makeSound() {
        console.log("Generic animal sound");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Bark");
    }
}
class Cat extends Animal {
    makeSound() {
        console.log("Meoww");
    }
}
const animals = [new Dog(), new Cat()];
animals.forEach((animal) => animal.makeSound());
console.log(animals);
