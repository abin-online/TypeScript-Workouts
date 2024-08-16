// function getValue(myVal: number) : string{
//     if(myVal > 5){
//         return true
//     }
//     return '200 OK'
// }


const getHello = (s: string): string=>{
    return ''
}

 const hero = ['SR Raina' ,'MS Dhoni' , 'Virat Kohli', 'Rohit Sharma']
//const hero = [1,2,3,4]


hero.map((hero) : string =>{
    return `hero is ${hero}`
})



function consoleError(errmsg: string): void{
    console.log(errmsg)
    return 
}

function handleError(errmsg: string): never{
    throw new Error(errmsg);
}



export {}