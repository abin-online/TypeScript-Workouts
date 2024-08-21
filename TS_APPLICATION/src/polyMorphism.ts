interface Shape{
    area(): number 
}

class Circle implements Shape {
    radius : number
    constructor(radius : number){
        this.radius = radius
    }

    area() : number {
        return 3.14 ** this.radius
    }

}

class Rectangle implements Shape {
    length: number
    width : number
    constructor(length: number , width: number){
        this.length = length
        this.width = width
    }

    area(): number {
        return this.length * this.width
    }
}


function printArea(shape : Shape):void{
    console.log(`Area of ${shape} is ${shape.area()}`);
}

const c = new Circle(5)
const r = new Rectangle(3,5)
printArea(c)
printArea(r)
//console.log(c.area());
