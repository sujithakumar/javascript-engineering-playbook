console.log();
function sortBy(arr, fn) {

    return arr.sort((a, b) => fn(a) - fn(b))
}

let result = [];
result = sortBy([5, 4, 1, 2, 3], (x) => x);
console.log("INP Arr:  [5, 4, 1, 2, 3]" );
console.log("Function: (x) => x ");
console.log("result:    ",result);

console.log();
result = sortBy([12.5, 3.1, 8.9, 1.2], (x) => x);
console.log("INP Arr:  [12.5, 3.1, 8.9, 1.2]");
console.log("Function: (x) => x");
console.log("result:    ",result);

console.log();
result = sortBy([{ "x": 1 }, { "x": 0 }, { "x": -1 }], (d) => d.x);
console.log('INP Arr:  [{ "x": 1 }, { "x": 0 }, { "x": -1 }]');
console.log("Function: (d) => d.x");
console.log("result:    ",result);

console.log();
result = sortBy([{ age: 25 }, { age: 19 }, { age: 30 }], (x) => x.age);
console.log("INP Arr:  [{ age: 25 }, { age: 19 }, { age: 30 }]");
console.log("Function: (x) => x.age");
console.log("result:    ",result);

console.log();
result = sortBy([[3, 4], [5, 2], [10, 1]], (x) => x[0]);
console.log('INP Arr:  [[3, 4], [5, 2], [10, 1]], (x) => x[0]');
console.log("Function: sort by 0th el (x) => x[0]");
console.log("result:    ",result);

console.log();
result = sortBy([[3, 4], [5, 2], [10, 1]], (x) => x[1]);
console.log('INP Arr:  [[3, 4], [5, 2], [10, 1]], (x) => x[1]');
console.log("Function: sort by 1st el (x) => x[1]");
console.log("result:    ",result);

console.log();
result = sortBy([['apple', 3], ['banana', 1], ['kiwi', 2]], (x) => x[1]);
console.log("INP Arr:  [['apple', 3], ['banana', 1], ['kiwi', 2]]");
console.log("Function: (x) => x[1]");
console.log("result:    ",result);







