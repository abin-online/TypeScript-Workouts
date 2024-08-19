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

    protected _courseCount = 1

    readonly city : string = "Chennai"
    constructor(public email : string , public name : string){

    }

    get getEmail():string{
        return `apple ${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum) { //there will be no return type for setter
        if (courseNum <= 1) {
            throw new Error('Course count shoud be more than 1');
        }
    }

    private deleteToken(){
        console.log('Token deleted');
        
    }


}


class subUser extends User {
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}


const abin = new User("abin@gmail.com", "abin");



//abin.city = "Chennai" bc its a readonly
abin.name 
// abin.deleteToken()  
console.log(abin);
