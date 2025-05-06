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
    readonly city: string = "Jabalpur";
    constructor(public email: string,
        public name: string,
        private userId: string) {
    }
}


const malay = new User("ms@ms.com", "Malay", "2");

