// type User = {
//     name: string;
//     email: string;
//     isActice: boolean
// }


// function createUser(user: string): User{
//     return {name: "" , email: "", isActiVe: true}
// }

// createUser({name: "", email: "", isActive: true})

// export {}


type User = {
    name: string;
    email: string;
    isActive: boolean; // Fixed typo
}

function createUser(user: User): User { // Fixed the parameter type
    return { 
        name: user.name, 
        email: user.email, 
        isActive: true // Fixed typo
    };
}

createUser({ name: "", email: "", isActive: true }); // Fixed typo

export {};
