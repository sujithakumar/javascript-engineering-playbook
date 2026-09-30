console.log();
let arr = [9, 2, 3, 3, 4, 4, 0, 1, 0.1, 8, 9];
let arr1 = [90, 20, 10, 30, 40, 80, 95];
console.log('Original Array:    ', arr);
let set1 = new Set(arr);
console.log('set:    ', set1);

// console.log();
// console.log('Converting back to Arr');
// arr = [...set1];
// console.log('Unique Array:    ', arr);

// OR in single line
arr = [...new Set(arr)];
console.log('Unique Array:    ', arr);

//converting back to ARR 
arr = Array.from(set1);
console.log('Unique Array:    ', arr);

console.log();
arr.sort();
console.log('sorted Array:  ',arr);

console.log();
arr.reverse();
console.log('Reverse Array:  ',arr);

//remove duplicates from 2 arr and combine
console.log();
console.log('Original Array Arr:' );
console.log(arr);
console.log('Original Array Arr1:' );
console.log(arr1);

let result = [...new Set(arr),...new Set(arr1)];
console.log('Unique Array:');
console.log(result.sort());




