console.log("BITWISE AND (&)");

console.log("");
console.log("Basic bitwise AND");
console.log("1 & 1  ", 1 & 1);
console.log("1 & 0  ", 1 & 0);
console.log("0 & 1  ", 0 & 1);
console.log("0 & 0  ", 0 & 0);

console.log("");
console.log("Numbers");
console.log("2 & 1  ", 2 & 1);
console.log("3 & 3  ", 3 & 3);
console.log("5 & 1  ", 5 & 1);
console.log("5 & 4  ", 5 & 4);
console.log("5 & 5  ", 5 & 5);
console.log("10 & 10    ", 10 & 10);

console.log("");
console.log("Negative numbers");
console.log("-5 & 3 ", -5 & 3);
console.log("-10 & 5    ", -10 & -5);

console.log("");
console.log("Boolean operands");
console.log("true & true    ", true & true);
console.log("true & false   ", true & false);
console.log("false & true   ", false & true);
console.log("false & false  ", false & false);

console.log("");
console.log("true & 5   ", true & 5);
console.log("false & 5  ", false & 5);

console.log("");
console.log("null, undefined, NaN");
console.log("null & 5   ", null & 5);
console.log("undefined & 5  ", undefined & 5);
console.log("NaN & 5    ", NaN & 5);
console.log("null & 0   ", null & 0);
console.log("undefined & 0  ", undefined & 0);
console.log("NaN & 0    ", NaN & 0);

console.log("");
console.log("Numeric strings");
console.log('"5" & 3    ', "5" & 3);
console.log('"10" & 3   ', "10" & 3);


console.log("");
console.log("Non-numeric strings");
console.log('"hello" & 3    ', "hello" & 3);
console.log('"abc" & 5  ', "abc" & 5);

console.log("");
console.log("Special numeric values");
console.log("Infinity & 5   ", Infinity & 5);
console.log("-Infinity & 5  ", -Infinity & 5);

console.log("");
console.log("Logical AND vs Bitwise AND");
console.log("true && 5  ", true && 5);
console.log("true & 5   ", true & 5);
console.log("true && 2  ", true && 2);
console.log("true & 2   ", true & 2);
console.log("false && 5 ", false && 5);
console.log("false & 5  ", false & 5);