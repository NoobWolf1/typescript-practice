function addTwo(num) {
    num.toUpperCase(); // i am allowed to do this which is wrong
    return num + 2;
}
addTwo(5);
addTwo("5"); // also allowed to do this 
// fix is
function addTwoUsingTypes(num) {
    return num + 2;
}
addTwoUsingTypes(5);
// addTwoUsingTypes("5"); // getting a error here
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("abc");
// getUpper(4); // here error
function signUpUser(name, email, isPaid) {
}
// signUpUser(1,2,3); // here get error
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}; // here we gave isPaid a default value
loginUser("m", "m@m.com");
