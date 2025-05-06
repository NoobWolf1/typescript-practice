"use strict";
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
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = 1; // as soon as we use protected it is accessible in this class and other class which extends the User, for private it is accessible only with the elements of this class not outside not the other classes which extends this class
        this.city = "Jabalpur";
    }
    deleteToken() {
        console.log("Token Deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get getCourseCount() {
        return this._courseCount;
    }
    set setCourseCount(courseNumber) {
        if (courseNumber <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNumber;
    }
}
const malay = new User("ms@ms.com", "Malay", "2");
// now when you think about inheritance
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
