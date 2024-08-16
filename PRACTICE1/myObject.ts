const User = {
    name:'Abin',
    email: "abin@gmail.com",
    isActive: true
}

function createUser({name: string, isPaid: boolean}){}

createUser({name: "Abin" , isPaid: false});


function createCourse():{name: string, price: number}{
    return {name: "nodejs" , price: 2999}
}


export {}

