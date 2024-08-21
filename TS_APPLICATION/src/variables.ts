let apple: number = 5
let person: string = 'roshan'

let pass : boolean = true

let variable : null = null

let time: Date = new Date()


//arrays 
let vibjyor: string[] = ['v','i','b','g','y','o','red']
let myNum: number[] = [3,4,2,4.234,55,3.14]
let truthyVal : boolean[] = [true, false]

class Car{

}

let benz: Car = new Car()  //instancces

let human : {hand: number, speak: boolean}= {hand: 2, speak: true} //object literals

//workout for variable declaration

let taskName : string = 'First Task'

let taskCompleted:boolean = false

function taskStatus(): void{
    let status = !taskCompleted

    if(status){
        taskName += ` (Completed)`
    }

    console.log(`Task Name : ${taskName}`);
    console.log(`Task Completed : ${taskCompleted}`);        
}

taskStatus()




const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

let name: string | null = null;

// we use the non-null assertion operator to tell the compiler that name will never be null
let nameLength = name!.length;
console.log(nameLength);


export {}

