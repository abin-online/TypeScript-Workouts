"use strict";
// type color = {
//     first: string
//     second: number
// }
const color3 = { first: 'haii', second: 4, third: 6, fourth: "four" }; // Error
// let arr1: [string, number, boolean] 
// arr1 =  ['r',4,true]
let arr1 = ['ffd', 45];
let vib = [34, 34, 3, 2222, 344];
let data = [{ name: "abin", phone: 65352 }];
let col = { a: 4, b: 6, c: false };
const named = { email: "abin@gmail.com", phone: 45 };
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 1] = "up";
    Direction[Direction["down"] = 2] = "down";
    Direction[Direction["left"] = 3] = "left";
    Direction[Direction["right"] = 4] = "right";
})(Direction || (Direction = {}));
Direction.right;
class summation {
    add(a, b) {
        return a + b;
    }
}
const sum0 = new summation();
sum0.add("hello ", "world"); //METHOD OVERLOADING
class operator {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    ope() {
        console.log(this.first + this.second);
    }
}
class op1 extends operator {
    ope() {
        console.log(this.first - this.second);
    }
}
class op2 extends operator {
    ope() {
        console.log(this.first * this.second);
    }
}
const op1Instance = new op1(5, 9);
const op2Instance = new op2(5, 9);
// Assign the instances to a tuple
const opAns = [op1Instance, op2Instance];
// Example usage
opAns[0].ope(); // Output: -4 (5 - 9)
opAns[1].ope(); // Output: 45 (5 * 9)
