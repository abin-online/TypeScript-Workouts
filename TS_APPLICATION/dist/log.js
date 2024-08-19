"use strict";
console.log('hai');
const arr = [4, 3, 6, 7, 4];
function maxNumber(nums) {
    return nums.reduce((acc, curr) => {
        return acc + curr;
    });
}
