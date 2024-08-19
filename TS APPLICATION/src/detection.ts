//"TYPE NARROWING"

function detectType(val : number | string){
    if(typeof val === 'string'){
        return val.toLowerCase()
    }else return val + 3
}
//type of "TYPE GUARDS"
function provideId(id: string | null){
    if(!id){
        console.log('provide Id');
        return
    }
    id.toLowerCase()
}

//type narrowing using in

interface User {
    name: string
    email : string
}

interface Admin {
    name : string
    email : string
    isAdmin : boolean
}

function isAdminMethod(account : User | Admin){
    if('isAdmin' in account){
        return account.isAdmin
    }
}

//INSTANCE OF NARROWING