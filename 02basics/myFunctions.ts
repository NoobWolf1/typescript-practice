function addTwo(num) {
    num.toUpperCase() // i am allowed to do this which is wrong
    return num + 2;
}


addTwo(5);
addTwo("5"); // also allowed to do this 

// fix is

function addTwoUsingTypes(num: number): number {
    return num + 2;
    // return "hello" // errors out now
}

addTwoUsingTypes(5);
// addTwoUsingTypes("5"); // getting a error here

function getUpper(val: string): string {
    return val.toUpperCase();
}

getUpper("abc");
// getUpper(4); // here error

function signUpUser(name: string, email: string, isPaid: boolean) {

}

// signUpUser(1,2,3); // here get error

let loginUser = (name: string, email: string, isPaid: boolean = false) => {} // here we gave isPaid a default value

loginUser("m", "m@m.com");

// function getValue(myVal: number) {
//     if(myVal > 5) {
//         return true;
//     } 
//     return "200 OK";
// }
// this is an example of union type

const getHello = (s: string): string => {
    return `Hello ${s}`;
}

// const heroes = ["thor", "spiderman", "ironman"];
const heroes = [1, 2, 3];

heroes.map((hero): string => { // here we dont need to explicitly add type here for hero, though we can add return type
    return `Hero is: ${hero}`
}); 

function consoleError(errorMessage: string): void {
    console.log(errorMessage);
}

function handleError(errorMessage: string): never {
    throw new Error(errorMessage);
}

export{};