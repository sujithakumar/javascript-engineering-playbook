function add(a, b = 50, c) {
    let d = 100;
    console.log("From Function Add:");
    console.log("a is   ", a);
    console.log("b is   ", b);
    console.log("c is   ", c);
    console.log("d is   ", d);
    return a + b + c + d;
}

console.log(" ");
console.log("General / Usual way:");
console.log("add(10,20,30,40)     ", add(10, 20, 30, 40));
console.log(" ");
console.log("Less arguments passed");
console.log("add(10)     ", add(10));
console.log(" ");
console.log("More arguments passed:");
console.log("add(10,20,30,40,200)     ", add(10, 20, 30, 40, 200));
console.log(" ");