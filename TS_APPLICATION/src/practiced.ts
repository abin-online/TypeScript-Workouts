// type color = {
//     first: string
//     second: number
// }

// type color2 = {
//     third: number
//     fourth: string
// }

// const color3 : color | color2 = {first: 'haii' , third: 4}

type color = {
    first: string;
    second: number;
};

type color2 = {
    third: number;
    fourth: string;
};

const color3: color & color2 = { first: 'haii', second: 4, third: 6 , fourth: "four" }; // Error

// let arr1: [string, number, boolean] 

// arr1 =  ['r',4,true]

let arr1 : [string, number] = ['ffd', 45]


let vib : number[] = [34,34,3,2222,344]

type User5 = {
    name: string
    phone: number
}

let data : User5[] = [{name: "abin" , phone: 65352}]


type A = {
    a: number
}

type B = {
    b:number
}

type C = A & B & {
    c : boolean
}

let col : C = {a:4,b:6,c:false}



interface User6 {
    email: string
    phone : number
}

const named : User6 = {email: "abin@gmail.com" , phone : 45}


enum Direction {
    up = 1,
    down,
    left,
    right
}

Direction.right



class summation{
    add(a: number , b: number): number
    add(a: string, b: string): string
    add(a: any, b:any){
        return a + b
    }
}

const sum0 = new summation()
sum0.add("hello " , "world") //METHOD OVERLOADING


class operator{
    first: number
    second : number
    constructor(first : number , second : number){
        this.first = first
        this.second = second
    }

    ope(): void{
        console.log(this.first + this.second);
    }
}

class op1 extends operator{
    ope(): void {
        console.log(this.first - this.second)
    }
}

class op2 extends operator{
    ope(): void {
        console.log(this.first * this.second)
    }
}

const op1Instance = new op1(5, 9);
const op2Instance = new op2(5, 9);

// Assign the instances to a tuple
const opAns: [op1, op2] = [op1Instance, op2Instance];

// Example usage
opAns[0].ope(); // Output: -4 (5 - 9)
opAns[1].ope(); // Output: 45 (5 * 9)




