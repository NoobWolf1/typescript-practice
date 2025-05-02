let greetings: string = "Hello Malay";

console.log(greetings)

// number
let userId: number = 334466;
userId.toFixed();

// boolean
let isLoggedIn: boolean = false;


// type inference, here we dont directly add number(type to the ts code ie.,)
// let userId: number = 334466;
// userId.toFixed();


// any

let hero: string;
function getHero() {
    return "Thor";
}

hero = getHero();

export {};