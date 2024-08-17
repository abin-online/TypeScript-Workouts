//In TypeScript, a union type is a powerful feature that allows a variable to be one of several types. You can define a union type using the | (pipe) symbol between the types.

let score: number | string | boolean = 33

score = true

score = '44'

type User = {
    name : string;
    id: number
}

type Admin = {
    username : string;
    id: number
}

let Abin: User | Admin = {name: 'Abin', id: 443}

Abin = {username : 'ab' , id : 334}

function getDbId(id: number|string){
    // console.log(`DB ID is ${id}`);
    if(typeof id == 'number'){
        id.toLocaleString
    }else{
        id.toLowerCase()
    }
}

getDbId('aa')
getDbId(5656)

//union in array

const data: (string | number | boolean)[] = [1,2,3,true,4,'5']

let seatAllotment: 'aisle' | 'middle' | 'window'

seatAllotment = 'aisle'
//seatAllotment = 'crew'

 

















export{}