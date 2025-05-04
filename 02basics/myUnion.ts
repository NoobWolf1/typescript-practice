let score: number | string = 33; // this is union

score = 44;
score = "55";

type User = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}

let malay: User | Admin = {name: "Malay", id: 334};

function getDbId(id: number | string)  {
    if(typeof id === 'string') {
        id = id.toLowerCase();
    } else if(typeof id === 'number') {
        id = id + 2;
    }
    console.log(`DB id is : ${id}`);
}

getDbId(3);
getDbId("Boo");

// array
const data: (number | string)[] = [1,2,3,"4"]; // the right way to do it

let pi: 3.14 = 3.14;
// pi = 3.145;// not allowed

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
// seatAllotment = "crew" // not allowed

