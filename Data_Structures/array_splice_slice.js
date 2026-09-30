// --------------------------------------------------------------------
console.log();
console.log("Array Slice");
let result = [];
let array1 = [10, 20, 30, 40, 50];
console.log("Original array1:    ", array1);

result = array1.slice(0, 3);
console.log("result of slice:    ", result);
console.log("array1 after slice:    ", array1);

result = array1.slice(2, 4);
console.log("result of slice:    ", result);
console.log("array1 after slice:    ", array1);

console.log();
console.log("Replacing values using Array Slice");
let array = [100, 200, 300, 400, 500];
result = array.slice(0, 3, 'hi');
console.log("result:    ", result);
console.log("array:    ", array);
console.log("array slice doesnt have effect on replace")

console.log();
console.log("--------------------------------------------------------------------");
console.log();
console.log("Array Splice");
let array2 = [100, 200, 300, 400, 500];
console.log("Original array2:    ", array2);
result = array2.splice(1, 3);
console.log("result of splice:    ", result);
console.log("array2 after slice:    ", array2);

console.log();
console.log("Array Items Replacing");
let array3 = [100, 200, 300, 400, 500];
result = array3.splice(0, 3, 'hi');
console.log("result of splice:    ", result);
console.log("array3 after splice:    ", array3);
console.log();
array3 = [100, 200, 300, 400, 500];
result = array3.splice(3, 0, 'hi');
console.log("result of splice:    ", result);
console.log("array3 after splice:    ", array3);

console.log();
console.log("Newly formed array3:    ", array3);
result = array3.splice(1, 3, 'hi');
console.log("result of splice:    ", result);
console.log("array3 after splice:    ", array3);

