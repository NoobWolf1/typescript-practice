"use strict";
// const user: (string | number)[] = ["ms", 1];
// order is mattering here, in tuples if it has multiple vals, here "ms", 1 and 1, "ms" both are allowed
Object.defineProperty(exports, "__esModule", { value: true });
var user = ["ms", 1, true]; // this is a tuple declaration
var rgb = [255, 123, 112, 0.5]; // optional tuple declaration
var newPerson = [12, "ms@ms.com"];
newPerson[1] = "ms.com";
