function addTwo(num) {
    num.toUpperCase() // i am allowed to do this which is wrong
    return num + 2;
}


addTwo(5);
addTwo("5"); // also allowed to do this 

// fix is

function addTwoUsingTypes(num: number) {
    return num + 2;
}

addTwoUsingTypes(5);
// addTwoUsingTypes("5"); // getting a error here

function getUpper(val: string) {
    return val.toUpperCase();
}

getUpper("abc");
// getUpper(4); // here error

function signUpUser(name: string, email: string, isPaid: boolean) {

}

// signUpUser(1,2,3); // here get error

let loginUser = (name: string, email: string, isPaid: boolean = false) => {} // here we gave isPaid a default value

loginUser("m", "m@m.com");

export{};