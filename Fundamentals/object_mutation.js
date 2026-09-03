let person = {
    name: "sujitha",
    age: 35,
    address: { city: "Chennai" },
    greet: function () { console.log("Hello Guys!"); },
    greeting: function () {
        return "Hello from Greeting!";
    },
    name : "Joe"
}

console.log("Person: ", person);
console.log("Person.greeting : ", person.greeting());
console.log(" ");

let person1 = person;
console.log("Person1: ", person1);
console.log(" ");
console.log("modifying age and greeting message")
person1.age = 40;
person1.greeting = function greeting() {
    return "Hello from Person 1";
}
console.log("Person1: ", person1);
console.log("Person1.greeting : ", person1.greeting());
console.log(" ");

console.log("Person: ", person);
console.log("Person.greeting : ", person.greeting());
console.log(" ");


