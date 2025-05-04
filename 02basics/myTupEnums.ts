// const user: (string | number)[] = ["ms", 1];
// order is mattering here, in tuples if it has multiple vals, here "ms", 1 and 1, "ms" both are allowed


const user: [string, number, boolean] = ["ms", 1, true]; // this is a tuple declaration

let rgb: [number, number, number, number?] = [255, 123, 112, 0.5]; // optional tuple declaration

type Person = [number, string];
const newPerson: Person = [12, "ms@ms.com"];

newPerson[1] = "ms.com"

// newPerson.push(true); // this got recently fixed, was an issue before as js was allowing the operation


export{}; 