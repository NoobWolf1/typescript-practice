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
        this.city = "Jabalpur";
    }
}
const malay = new User("ms@ms.com", "Malay", "2");
