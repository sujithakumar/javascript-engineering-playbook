

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    login() {
        console.log(`${this.name} logged in`);
    }
}

const user1 = new User('sujitha', 30);
console.log('calling login - user 1');
user1.login();

console.log();

const user2 = new User('Rathi', 35);
console.log('calling login - user 2');
user2.login();

