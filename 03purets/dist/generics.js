"use strict";
const score = [];
const names = [];
//Without generics, we would either have to give the identity function a specific type:
function identityOne(val) {
    return val;
}
//Try Or, we could describe the identity function using the any type:
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
function identityFour(val) {
    return val;
}
console.log(identityFour({ brand: "Milton", type: 2 }));
