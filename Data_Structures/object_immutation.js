

let person = {
    name: "sujitha",
    age: 35,
    address: { city: "Chennai" },
    greet: function () { console.log("Hello Guys!"); },
    greeting: function () {
        return "Hello from Greeting!";
    },
    name: "Joe"
}

console.log();
let obj1 = {};
console.log('person: Before freeze    ', person);
console.log('obj1:  Before freeze   ', obj1);

console.log('object.freeze(obj)');
Object.freeze(person);
obj1 = person;
console.log();
console.log('person: After freeze    ', person);
console.log('obj1:  After freeze   ', obj1);
console.log();

//working on frozen obj
console.log('--------------working on frozen obj----------');
person.age = 100;
person.pincode = '600042'; //new val
delete person.greet;
let res = person.address.city;
person.address.city = 'BLR';
console.log(res);
console.log('person: After freeze and modification    ', person);
console.log();
console.log('obj1:  After freeze  and modification    ', obj1);

//working on copied obj
console.log('--------------working on Copied obj----------');
obj1.age = 100;
obj1.pincode = '600042'; //new val
delete obj1.greet;
let res1 = obj1.address.city;
obj1.address.city = 'KOC';
console.log(res1);
console.log('person: After freeze and modification    ', person);
console.log();
console.log('obj1:  After freeze  and modification    ', obj1);

console.log('---------------------------------------------------------------------------------------------------------------------');
let newPerson = {
    name: "sujitha",
    age: 35,
    address: { city: "Chennai" },
    greet: function () { console.log("Hello Guys!"); },
    greeting: function () {
        return "Hello from Greeting!";
    },
    name: "Joe"
};
let clone = {};

console.log();
console.log('object.seal(obj)');
Object.seal(newPerson);
clone = newPerson;
console.log();
console.log('person: After Seal    ', person);
console.log('clone:  After Seal   ', clone);
console.log();

//working on Seal obj
console.log('--------------working on Seal obj----------');
newPerson.age = 100;
newPerson.pincode = '600042'; //new val
delete newPerson.greet;
let res2 = newPerson.address.city;
newPerson.address.city = 'BLR';
console.log(res2);
console.log('newPerson: After seal and modification    ', newPerson);
console.log();
console.log('clone:  After seal  and modification    ', clone);

//working on copied obj
console.log('--------------working on Copied obj----------');
clone.age = 100;
clone.pincode = '600042'; //new val
delete clone.greet;
let res3 = clone.address.city;
clone.address.city = 'KOC';
console.log(res3);
console.log('newPerson: After seal and modification    ', newPerson);
console.log();
console.log('clone:  After seal  and modification    ', clone);



