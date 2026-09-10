

console.log("calling add");
console.log(add(10, 20)); 
function sub(a, b) {
    console.log("SUB: Executes only when called!!");
    return a - b;
}

(function () {
    console.log();
    console.log("IIFE 1");
    console.log("Executed immediately");
})();

function add(a, b) {
    console.log("ADD : Executes only when called!!");
    return a + b;
}

(() => {
    console.log();
    console.log("IIFE 2");
    console.log("Executed immediately");
})();

function multiply(a, b) {
    console.log("MULTIPLY: Executes only when called!!");
    return a * b;
}
console.log();
console.log("calling multiply");
console.log(multiply(10, 20)); 
console.log("calling sub");
console.log(sub(50, 20)); 


