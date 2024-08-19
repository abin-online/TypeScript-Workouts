"use strict";
// class User {
//     email: string;
//     name: string;
//     private readonly city: string = "Chennai"
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Chennai";
    }
    get getEmail() {
        return `apple ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error('Course count shoud be more than 1');
        }
    }
    deleteToken() {
        console.log('Token deleted');
    }
}
class subUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const abin = new User("abin@gmail.com", "abin");
//abin.city = "Chennai" bc its a readonly
abin.name;
// abin.deleteToken()  
console.log(abin);
