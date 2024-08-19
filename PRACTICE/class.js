"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var personClass = /** @class */ (function () {
    function personClass(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
    personClass.prototype.getName = function () {
        console.log(this.name);
    };
    personClass.prototype.getDetails = function () {
        return "My name is ".concat(this.name, " and I am ").concat(this.age, " years old");
    };
    return personClass;
}());
var abin = new personClass('abin', 23, 878);
abin.getName();
console.log(abin.getDetails());
