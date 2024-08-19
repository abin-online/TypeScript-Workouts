interface Person {
    name: string
    age: number
    id: number
}

class personClass implements Person{
    name: string
    age: number
    id: number
    constructor(name: string, age: number, id: number){
        this.name = name
        this.age = age
        this.id = id
    }

    getName():void{
        console.log(this.name);    
    }

    getDetails():string{
        return `My name is ${this.name} and I am ${this.age} years old`
    }
}

const abin = new personClass('abin', 23, 878);

abin.getName()
console.log(abin.getDetails());

export{}