const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
let array = [1, 2, 0, 10, 0.1];
let result = [];
console.log();
console.log("---------------------------REDUCE---------------------------");
result = array.reduce((x, y) => x + y);
console.log("reduce((x, y) => x + y):    ", result);
result = array.reduce((x, y) => x + y, 2);
console.log("reduce((x, y) => x + y, 2):    ", result);


console.log();
console.log("---------------------------FLAT---------------------------");
let a = [[2, 3], [4, [5, 6, [7]]]];
console.log("Original Array:    ", a);
result = a.flat();
console.log("Flatten: flat():    ", result);
result = a.flat(1);
console.log("Flatten: flat(1):    ", result);
result = a.flat(2);
console.log("Flatten: flat(2):    ", result);
result = a.flat(3);
console.log("Flatten: flat(3):    ", result);
result = a.flat(4);
console.log("Flatten: flat(4):    ", result);
console.log("Original Array:    ", a);


console.log();
console.log("---------------------------SORT---------------------------");
const FArr = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
let NArr = [1, 2, 0, 10, 0.1];
console.log("Original FArr:    ", FArr);
result = FArr.sort();
console.log("sorted FArr:    ", result);
console.log();
console.log("Original NArr:    ", NArr);
result = NArr.sort();
console.log("sorted NArr:    ", result);


