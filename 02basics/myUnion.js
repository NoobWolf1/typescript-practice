var score = 33; // this is union
score = 44;
score = "55";
var malay = { name: "Malay", id: 334 };
function getDbId(id) {
    if (typeof id === 'string') {
        id = id.toLowerCase();
    }
    else if (typeof id === 'number') {
        id = id + 2;
    }
    console.log("DB id is : ".concat(id));
}
getDbId(3);
getDbId("Boo");
// array
var data = [1, 2, 3, "4"]; // the right way to do it
var pi = 3.14;
// pi = 3.145;// not allowed
var seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "crew" // not allowed
