
class User {
    static count = 0;

    constructor(name) {
        this.name = name;
        User.count++;
    }

    greet() {
        console.log(`Hi, I am ${this.name}`);
    }

    static getUserCount() {
        return User.count;
    }
}

const user1 = new User("Sujitha");

console.log("instance name ", user1.name);
user1.greet();

//calling static method
console.log("get count:",User.getUserCount())


//calling static e=method using instance
user1.getUserCount(); //err
user1.count;          //err

