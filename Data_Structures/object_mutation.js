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
let person1 = person;
console.log('person: Before Modifying    ', person);
console.log('person1:  Before Modifying   ', person1);
person1.age = 25;
console.log();
console.log('person: After Modifying    ', person);
console.log('person1:  After Modifying   ', person1);


//object.assign - shallow copy - one step 
let person2 = {};
Object.assign(person2, person);
console.log();
console.log('object.assign(target, source)');
console.log();
console.log('person: Before Modifying    ', person);
console.log('person2:  Before Modifying   ', person2);
person2.age = 10;
person2.address['city'] = 'TVM';
console.log();
console.log('person: After Modifying    ', person);
console.log('person2:  After Modifying   ', person2);

//make it shallow - one step only 
let shallow = Object.assign({}, person);
console.log();
console.log('res = Object.assign({}, source)');
console.log();
console.log('person: Before Modifying    ', person);
console.log('shallow:  Before Modifying   ', shallow);
shallow.age = 50;
shallow.address['city'] = 'BLR';
console.log();
console.log('person: After Modifying    ', person);
console.log('shallow:  After Modifying   ', shallow);

//using JSON
let jsonObj = JSON.parse(JSON.stringify(person));
console.log();
console.log('res = JSON.parse(JSON.stringify(source))');
console.log();
console.log('person: Before Modifying    ', person);
console.log('jsonObj:  Before Modifying   ', jsonObj);
jsonObj.age = 100;
jsonObj.address['city'] = 'CHN';
console.log();
console.log('person: After Modifying    ', person);
console.log('jsonObj:  After Modifying   ', jsonObj);
delete jsonObj.name;
console.log();
console.log('person: After deleting name    ', person);
console.log('jsonObj:  After deleting name   ', jsonObj);



//using structuredClone
person = {
    name: "sujitha",
    age: 35,
    address: { city: "Chennai" },
    name: "Joe",
    country:'IN',
    country_code : 0
}


let clone = structuredClone(person);
console.log();
console.log('res = structuredClone(person)');
console.log();
console.log('person: Before Modifying    ', person);
console.log('clone:  Before Modifying   ', clone);
clone.age = 1;
clone.address['city'] = 'KOC';
console.log();
console.log('person: After Modifying    ', person);
console.log('clone:  After Modifying   ', clone);
delete clone.name;
console.log();
console.log('person: After deleting name    ', person);
console.log('clone:  After deleting name   ', clone);

