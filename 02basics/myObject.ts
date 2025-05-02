const User = {
    name: "Malay",
    email: "ms@ms.com",
    isActive: true
}

function createUser({name: string, isPaid: boolean}) {}

createUser({name: "Malay", isPaid: false}); // works

// createUser({name: "Malay", isPaid: false, email: "m@m.com"}); // this gives error but

let newUser = {name: "Malay", isPaid: false, email: "m@m.com"};

createUser(newUser); // this is allowed, this is a weird behaviour of Typescript





function createCourse(): {name: string, price: number}{
    return {name: "typescript", price: 399};
}







export{};