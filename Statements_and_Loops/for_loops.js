console.log();
console.log("regular for: when the index is needed")
for (let i = 0; i < 5; i++) {
    console.log(i);
}


console.log();
console.log();
console.log("for...of: iterate over values")
const numbers = [10, 20, 30];
for (const number of numbers) {
    console.log(number);
}
console.log();
for (const char of "Hello") {
    console.log(char);
}


console.log();
console.log();
console.log("for...in:iterate over keys")
const user = {
    name: "John",
    age: 30
};
for (const key in user) {
    console.log(key);
    console.log(user[key]);
}

console.log();
console.log();
console.log("for...each:iterate over array");
const result = [1, 2, 3];
result.forEach((value, index, array) => {
    console.log("value: ", value);
    console.log("index: ", index);
    console.log("array  ", array);
});

console.log();
console.log("this might result in undefined");
const temp = [2,3,4,5].forEach((x)=>{
    console.log(x);
});
console.log("temp   ", temp);


