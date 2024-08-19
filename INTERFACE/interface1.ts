interface User {
    readonly dbId : number,
    email: string,
    userId: number,
    googleId?: string,
    startTrial(): string,
    getData(name: string)
}


interface User {
    token : string
}

const person : User = {dbId : 2344, email: 'abin@gmail.com' , userId: 234424, startTrial: ()=>{
    return 'started'
} , getData: (name: 'ABIN')=>{
    return !true
}, token : 'github'}



interface Admin extends User {
    role: 'admin' | "tutor"

}

export {}