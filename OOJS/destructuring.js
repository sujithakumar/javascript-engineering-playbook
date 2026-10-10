const uName = 'Sujitha';
const age = 20;

//old way
const user = {
    uName: uName,
    age: age,
    greet: function () {
        console.log("hello from greet");
    }
};
console.log("user.uName", user.uName);
console.log("calling function");
user.greet()

console.log();

//new way
const person = {
    uName,
    age,
    greet() {
        console.log("hello from greet");
    }
}

console.log("person.uName", person.uName);
console.log("calling function");
person.greet();

console.log();

//object destruction
const user1 = {
    name: 'Sujitha',
    attempt: 2,
    city: 'Chennai'
};

const { name, city } = user1;
console.log(city);

//renaming
const { name: userName, city: userCity } = user1;
console.log(userName);

//default values 
const { name: userName1, attempt = 3, country = 'IN' } = user1;
console.log("attempt", attempt); //no change
console.log("country:", country); //new value

