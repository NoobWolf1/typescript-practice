"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Malay",
    email: "ms@ms.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "Malay", isPaid: false }); // works
// createUser({name: "Malay", isPaid: false, email: "m@m.com"}); // this gives error but
var newUser = { name: "Malay", isPaid: false, email: "m@m.com" };
createUser(newUser); // this is allowed, this is a weird behaviour of Typescript
function createCourse() {
    return { name: "typescript", price: 399 };
}
function createUser2(user) {
    return user;
}
createUser2({ name: '', email: '', isActive: true });
var myUser = {
    _id: "1234",
    name: "Malay",
    email: "ms@ms.com",
    isActive: true
};
myUser.email = "ms@gmail.com"; // allowed
