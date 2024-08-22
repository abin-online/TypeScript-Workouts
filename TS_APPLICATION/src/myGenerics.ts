const score : Array <number> = []
const names : Array <string> = []

function identityOne(val : boolean | number) : boolean | number{
    return val
}

function identityTwo(val: any): any {
    return val
}

function identityThree<Type>(val: Type) {
    return val
}

identityThree('3')

function identityFour<T>(val: T): T {
    return val
}

interface Bootle{
    brand: string
    type: number
}

identityFour<Bootle>({ brand: 'cola' , type: 2})


function getSearchProducts<T>(products: T[]): T {
    
    let myIndex = 3
    return products[myIndex]
}

//const getMoreSearchProducts = <T>(): => {}


// generics function 

function largestNumber<T,>(arrays: T[]): T{
    let max = arrays.reduce((acc,curr)=>{
        if(acc > curr){
            return acc
        }else{
            return curr
        }
    })
    return max
}

console.log(largestNumber([4,6,4,3,5,7,]));


