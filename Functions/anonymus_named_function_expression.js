
console.log("function is stored in a obj");
const greet = function () {
  console.log("function doesnt have a name");
};
console.log("calling the function with the variable name: greet",greet());


console.log();
const myFunc = function sayHi() {
  console.log("Hi!");
  console.log(sayHi.name); 
};
console.log();
console.log("calling the function with the variable name myFunc()");
myFunc(); 
sayHi();//ReferenceError

