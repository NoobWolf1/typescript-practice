const score: Array<number> = [];
const names: Array<string> = [];


//Without generics, we would either have to give the identity function a specific type:

function identityOne(val: number | boolean): number | boolean {
    return val;
}


//Try Or, we could describe the identity function using the any type:

function identityTwo(val: any): any {
    return val;
}



function identityThree<Type>(val: Type): Type {
    return val;
}

function identityFour<T>(val: T): T {
    return  val;
}

interface Bottle{
    brand: string,
    type: number
}

console.log(identityFour<Bottle>({brand: "Milton", type: 2}));