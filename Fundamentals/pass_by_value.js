console.log("primitives");
let x = 10;
let y = x;
console.log("value of x     ", x);
console.log("value of y     ", y);
console.log(" ");
console.log("Modifying value of y= 20");
// Changing y does not affect x.
y = 20;
console.log("value of x     ", x);
console.log("value of y     ", y);


console.log(" ");
console.log("objects");

const a = {
    age: 10
};
// b & c copies the reference to the object a
const b = a;
const c = a;
console.log("value of a.age    ", a.age);
console.log("value of b.age    ", b.age);
console.log("value of c.age    ", c.age);
console.log(" ");
console.log("Modifying b.age = 30");
b.age = 30;
// Both variables refer to the same underlying object.
console.log("value of a.age    ", a.age);
console.log("value of b.age    ", b.age);
console.log("value of c.age    ", c.age);


