let arr = [];
console.log("arr    ", arr);

arr[1] = 10;
console.log("arr    ", arr);

for (let a = 0; a < arr.length; a++) {
    console.log(arr[a]);
}



// let arr1 = [10, 20, 30];
// console.log();
//ways to empty an array

// arr1.length = 0;
// arr1 = [];
// arr1.splice(0, arr.length + 1);
// while (arr1.length >= 1) {
//     arr1.pop();
// }
// console.log("arr1    ", arr1);


//--------------------------------------------------------------
console.log();
console.log('Adding and Removing elements');
const fruits = ["apple", "banana"];

// add
console.log('Add');
fruits.push("mango");// to end
console.log(fruits);
fruits.unshift("orange"); //to beginning
console.log(fruits);

// remove
console.log();
console.log('remove');
fruits.pop();//  from end
console.log(fruits);
fruits.shift();// from beginning
console.log(fruits);

//--------------------------------------------------------------
console.log();
let arr1 = [10, 20, 30];
let arr2 = [1, 2, 5, 8, 3, 2, 1, 5];
console.log("arr1    ", arr1);
console.log("arr2    ", arr2);


arr2 = arr1;
arr2[1] = "sujitha";
console.log("arr1    ", arr1);
console.log("arr2    ", arr2);

arr1[0] = 100;
console.log("arr1    ", arr1);
console.log("arr2    ", arr2);

arr2.length = 0;
console.log("arr1    ", arr1);
console.log("arr2    ", arr2);

