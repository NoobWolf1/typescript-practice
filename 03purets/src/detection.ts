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