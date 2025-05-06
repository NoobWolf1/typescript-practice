// narrowing

function detectType(val: number | string) {
    // return val.toLowerCase(); 
    if(typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}

// for creating typeof type guards
function provideId(id: string | null) {
    if(!id) {
        console.log("Please provide ID");
        return;
    }
    id.toLowerCase();
}

// the operator in narrowing
interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

function idAminAccount(account: User | Admin) {
    if("isAmin" in account) {
        return account.isAmin;
    }
}

function logValue(x: Date | string) {
    if(x instanceof Date) {
        console.log(x.toUTCString);
    } else {
        console.log(x.toUpperCase());
    }
}
// instanceof is used when we use new keyword

// now using type predicates

type Fish = { swim: () => void};
type Bird = { fly: () => void};

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird) {
    if(isFish(pet)) {
        pet
        return "fish food"
    } else {
        pet
        return "bird food"
    }
}

// discriminated union
interface Circle {
    kind: "circle",
    radius: number,
}
interface Square {
    kind: "square" // we can check that whether circle has a kind of circle/square property
    side: number
}

interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle;

function getTrueShape(shape: Shape) {
    if(shape.kind === "circle") {
        shape
        return Math.PI * shape.radius ** 2;
    }
    shape
    return shape.side * shape.side; // this breaks when I add rectangle
    
}

// never type and exhaustive switch
function getArea(shape: Shape) {
    switch(shape.kind) {
        case "circle":
            shape
            return Math.PI * shape.radius ** 2;
        case "square": 
            shape
            return shape.side * shape.side;
        case "rectangle":
            shape
            return shape.width * shape.length;
        default: 
            const _defaultForShape : never = shape; // this is also breaked when added never
            return _defaultForShape; 
        
    }
}