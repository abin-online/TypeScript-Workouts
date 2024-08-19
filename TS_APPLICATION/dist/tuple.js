"use strict";
function showDetails(person) {
    const [name, age, place] = person;
    return `${name} is ${age} years old and lives in ${place}`;
}
const detailArr = ['Abin', 23, 'Chennai'];
console.log(showDetails(detailArr));
function cityOptional(person) {
    const [name, age, city] = person;
    if (city) {
        return `${name} is ${age} years old and lives in ${city}`;
    }
    else {
        return `${name} is ${age} years old`;
    }
}
const personArr = ['Abin', 23, 'Chennai'];
const personArr1 = ['Abin', 23,];
console.log(cityOptional(personArr));
console.log(cityOptional(personArr1));
