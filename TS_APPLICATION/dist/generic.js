"use strict";
function identity(arg) {
    return [arg];
}
//const num = identity(43)
const str = identity('Hello');
class Dictionary {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
function generic(arg) {
    return arg;
}
