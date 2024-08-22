"use strict";
class Animall {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log(`${this.name} makes sound`);
    }
}
class dog extends Animall {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    makeSound() {
        console.log(`${this.name} barks`);
    }
}
const dogg = new dog('dog', 'puppy');
console.log(dogg.makeSound);
