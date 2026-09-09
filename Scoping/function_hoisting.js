console.log();
console.log("Function declaration");
greet(); // Output: "Hello, world!"
function greet() {
  console.log("Function declaration : Hello, world!");
}


// console.log();
// console.log("Function Expresion:VAR");
// varRun(); // Throws TypeError: varRun is not a function
// var varRun = function() {
//   console.log("Running...");
// };

console.log();
console.log("Function Expresion: LET");
letRun(); // Throws TypeError: letRun is not a function
let letRun = function() {
  console.log("Running...");
};

