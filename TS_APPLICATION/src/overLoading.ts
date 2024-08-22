class Addition{
    add(a:number, b: number):number
    add(a:string, b:string):string
    add(a:any, b:any): any{
        return a + b
    }
}

const ad = new Addition()

ad.add('hello',"4")