
function Person(name) {
  this.name = name;
}

// 1. Adding methods to prototypes
Person.prototype.sayHi = function() {
  return `Hi, I'm ${this.name}`;
};

const alex = new Person('Alex');

// Comparing the relationship
console.log(alex.__proto__ === Person.prototype); // true


//using obj.create 
// parent Obj
const animal = {
  isAlive: true,
  eat() {
    return 'Eating...';
  }
};

// Create a new object inheriting directly from 'animal'
const dog = Object.create(animal);
dog.bark = function() {
  return 'Woof!';
};

console.log(dog.bark());    // "Woof!"   (Own method)
console.log(dog.eat());     // "Eating..." (Inherited from animal)
console.log(dog.isAlive);   // true      (Inherited from animal)

console.log(dog.__proto__ === animal); // true

console.log();
//hasOwnProperty()
function Car(make) {
  this.make = make; // Own property
}

Car.prototype.wheels = 4; // Inherited property

const myCar = new Car('Toyota');

console.log(myCar.hasOwnProperty('make'));   // true  (Own property)
console.log(myCar.hasOwnProperty('wheels')); // false (Inherited from Car.prototype)
console.log(myCar.wheels);                  // 4     (Accessible via property lookup)