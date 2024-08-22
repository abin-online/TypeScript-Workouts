interface Shape {
  area(): number;
}

class Circle implements Shape {
  radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }

  area(): number {
    return 3.14 ** this.radius;
  }
}

class Rectangle implements Shape {
  length: number;
  width: number;
  constructor(length: number, width: number) {
    this.length = length;
    this.width = width;
  }

  area(): number {
    return this.length * this.width;
  }
}

function printArea(shape: Shape): void {
  console.log(`Area of ${shape} is ${shape.area()}`);
}

const c = new Circle(5);
const r = new Rectangle(3, 5);
printArea(c);
printArea(r);
//console.log(c.area());

//compile time polymorphism

class Calculator {
  add(a: number, b: number): number;
  add(a: string, b: string): string;
  add(a: any, b: any): any {
    return a + b;
  }
}

const calc = new Calculator();

console.log(calc.add(5, 23));
console.log(calc.add("Hello", "9"));

//Runtime Polymorphism

class Animal {
  makeSound(): void {
    console.log("Generic animal sound");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Bark");
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log("Meoww");
  }
}

const animals: Animal[] = [new Dog(), new Cat()];
animals.forEach((animal) => animal.makeSound());
console.log(animals);
