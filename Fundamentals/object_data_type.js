let person = {
    name: "sujitha",
    age: 35,
    address: { city: "Chennai" },
    greet: function () { console.log("Hello Guys!"); },
    greeting: function () {
        return "Hello from Greeting!";
    }
}

console.log("Name: ", person.name);
console.log("Age: ", person.age);
console.log("Address: ", person['address']);
console.log("Greet: ", person.greet());
console.log("Greet: ", person.greeting());
console.log(" ");

//listing properties
console.log("person - keys", Object.keys(person));
console.log(" ");
console.log("person - values", Object.values(person));
console.log(" ");
console.log("person - entries", Object.entries(person));
console.log(" ");



let dummyObject = {
    name: "dummy",
    age: 10,
    area: "chennai"
}
console.log("dummy Object ", dummyObject);
console.log(" ");

//adding values
console.log("adding values");
dummyObject.age = 10;
dummyObject.area = {
    city: "chennai",
    state: "tamil nadu"
}
console.log("dummy Object ", dummyObject);
console.log(" ");

//updating value
console.log("Updating values");
dummyObject.age = 30;
console.log("dummy Object ", dummyObject);
console.log(" ");

//deleting value
console.log("Deleting values");
delete dummyObject.age;
console.log("dummy Object ", dummyObject);
console.log(" ");


//Emptying 
console.log("emptying values");
dummyObject = {};
console.log("dummy Object ", dummyObject);
console.log(" ");


