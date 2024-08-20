"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let apple = 5;
let person = 'roshan';
let pass = true;
let variable = null;
let time = new Date();
//arrays 
let vibjyor = ['v', 'i', 'b', 'g', 'y', 'o', 'red'];
let myNum = [3, 4, 2, 4.234, 55, 3.14];
let truthyVal = [true, false];
class Car {
}
let benz = new Car(); //instancces
let human = { hand: 2, speak: true }; //object literals
//workout for variable declaration
let taskName = 'First Task';
let taskCompleted = false;
function taskStatus() {
    let status = !taskCompleted;
    if (status) {
        taskName += ` (Completed)`;
    }
    console.log(`Task Name : ${taskName}`);
    console.log(`Task Completed : ${taskCompleted}`);
}
taskStatus();
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates);
let name = null;
// we use the non-null assertion operator to tell the compiler that name will never be null
let nameLength = name.length;
console.log(nameLength);
