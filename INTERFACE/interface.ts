interface User {
    email: string,
    userId: number,
    startTrial(): string,
    getData(name: string)
}

const abin : User = {email : 'abin@gmail.com' , userId: 1224234 , startTrial:()=>{
    return 'strated'
}, getData:(name: 'abin')=>{
    return !true 
}}

export {}

