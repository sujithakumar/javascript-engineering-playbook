function add(a, b) {
    console.log("From Function Add:");
    console.log("a is   ", a);
    console.log("b is   ", b);
    return a + b;
}

console.log(" ");
console.log("General / Usual way:");
console.log("add(10,20)     ", add(10, 20));
console.log(" ");
console.log("Less arguments passed");
console.log("add(10)     ", add(10));
console.log(" ");
console.log("More arguments passed:");
console.log("add(10,20,30,40)     ", add(10, 20, 30, 40));
console.log(" ");