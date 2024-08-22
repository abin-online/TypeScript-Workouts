class Animall{
    name: string
    constructor(name:string){
        this.name = name
    }
    makeSound() : void{
        console.log(`${this.name} makes sound`);    
    }
}

class dog extends Animall{
    breed: string
    constructor(name: string , breed: string){
        super(name)
        this.breed = breed
    }
    makeSound(): void {
        console.log(`${this.name} barks`);
    }
}

const dogg = new dog('dog' , 'puppy')

console.log(dogg.makeSound);
