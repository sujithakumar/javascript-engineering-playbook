//string
let name = "sujitha";
//number
let age = 35;
//BigInt 
let bigVal = 123n;
//Boolean
let cute = true;

console.log(" ");
console.log(" ");

let a = undefined;
console.log("undefined a ", a);
let b = null;
console.log("null b ", b);
let c;
console.log("c is declared but not defined ", c);
let d = 0;
console.log("d is 0 ", d);

console.log("a == b : is undefined == null? ",a == b);
console.log("a === b : is undefined === null? ",a === b);
//because type of null is object

console.log(" ");
console.log(" ");

//symbol - used to create unique values 
let symbol1 = Symbol("id");
console.log(symbol1);
let symbol2 = Symbol("id");
console.log(symbol2);
console.log("symbol - used to create unique values")
console.log("symbol1 == symbol2", symbol1 == symbol2);
console.log("symbol1 === symbol2", symbol1 === symbol2);

