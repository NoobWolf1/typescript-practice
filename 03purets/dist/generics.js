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
function getSearchProducts(products) {
    return products;
}
function getSearchProducts2(products) {
    return products;
}
function getSearchProducts3(products) {
    const myIndex = 3;
    return products[myIndex];
}
// now creating arrow function of above example
const getMoreSearchProducts3 = (val) => {
    const myIndex = 3;
    return val[myIndex];
};
// Using Type Parameters in Generic Constraints
function anotherFunction(val1, val2) {
    return {
        val1,
        val2
    };
}
function someotherFunction(val1, val2) {
    return {
        val1,
        val2
    };
}
someotherFunction(3, { connection: "", username: "", password: "" });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
// this class is not one shot for all
