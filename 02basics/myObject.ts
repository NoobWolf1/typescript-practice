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



// Type aliases
type User = {
    name: string,
    email: string,
    isActive: boolean
};

function createUser2(user: User): User {
    return user;
}

createUser2({name: '', email: '', isActive: true});


type MyUser = {
    readonly _id: string, // here _id is for mongo db, hence readonly
    name: string,
    email: string,
    isActive: boolean,
    cerditCardDetails?: number // optional field
}

let myUser: MyUser = {
    _id: "1234",
    name: "Malay",
    email: "ms@ms.com",
    isActive: true
}

myUser.email = "ms@gmail.com"; // allowed

// myUser._id = "2345"; // not allowed

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cardCvv: number
};

export{};