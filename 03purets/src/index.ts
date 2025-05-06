// class User {
//       email: string;
//     private name: string;
//     readonly city: string = "";
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }



// malay.city = "Jabalpur"
// if you dont even want to access the city then use Private
// default is public

// equivalent of above code is 
class User {
    
    protected _courseCount: number = 1; // as soon as we use protected it is accessible in this class and other class which extends the User, for private it is accessible only with the elements of this class not outside not the other classes which extends this class

    readonly city: string = "Jabalpur";
    constructor(public email: string,
        public name: string,
        private userId: string
    ){
    }

    private deleteToken() {
        console.log("Token Deleted")
    }

    get getAppleEmail(): string { // this is a getter
        return `apple${this.email}`
    }

    get getCourseCount(): number {
        return this._courseCount;
    }

    set setCourseCount(courseNumber: number) { // setter cannot have a return type annotation, not even void
        if(courseNumber <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNumber;

    }
}


const malay = new User("ms@ms.com", "Malay", "2");


// now when you think about inheritance

class SubUser extends User { // it can acquire all the properties except the private property

    isFamily: boolean = true;
    changeCourseCount() {
        this._courseCount = 4;
    }

}