"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree('3');
function identityFour(val) {
    return val;
}
identityFour({ brand: 'cola', type: 2 });
function getSearchProducts(products) {
    let myIndex = 3;
    return products[myIndex];
}
//const getMoreSearchProducts = <T>(): => {}
// generics function 
function largestNumber(arrays) {
    let max = arrays.reduce((acc, curr) => {
        if (acc > curr) {
            return acc;
        }
        else {
            return curr;
        }
    });
    return max;
}
console.log(largestNumber([4, 6, 4, 3, 5, 7,]));
