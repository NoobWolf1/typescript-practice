"use strict";
// narrowing
function detectType(val) {
    // return val.toLowerCase(); 
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
// for creating typeof type guards
function provideId(id) {
    if (!id) {
        console.log("Please provide ID");
        return;
    }
    id.toLowerCase();
}
function idAminAccount(account) {
    if ("isAmin" in account) {
        return account.isAmin;
    }
}
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString);
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird food";
    }
}
