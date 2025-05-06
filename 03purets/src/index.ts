class User {
    email: string;
    name: string;
    readonly city: string = "";
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
}


const malay = new User("ms@ms.com", "Malay");

// malay.city = "Jabalpur"
