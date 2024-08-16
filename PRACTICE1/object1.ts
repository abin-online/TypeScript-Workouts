//create a custom type called User

type User = {
    name: string;
    email: string;
    isActive: boolean;
}

//This declares a constant named myUser and explicitly 
//states that it is of type User.

const myUser : User = {
    name: 'Abin',
    email: 'ab@gmail.com',
    isActive: true
}

myUser.email = 'abin@gmail.com'

type cardNumber = {
    cardNumber : string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}
