console.log();
console.log("Array Methods");
let array = [1, 2, 0, 10, 0.1];
let result = [];
console.log("Original Array:    ", array);

console.log();
console.log("---------------------------FIND---------------------------");
result = array.find(x => x > 2);
console.log("Find x>2:    ", result);
console.log();
console.log("---------------------------FIND INDEX---------------------------");
result = array.findIndex(x => x > 3);
console.log("findIndex x>2:    ", result);
console.log();
console.log("---------------------------SOME---------------------------");
result = array.some(x => x < 0);
console.log("Some x<0:    ", result);
console.log();
console.log("---------------------------SOME---------------------------");
result = array.some(x => x > 2);
console.log("Some x>2:    ", result);
console.log();
console.log("---------------------------Every---------------------------");
result = array.every(x => x % 2 == 0);
console.log("Every x % 2 == 0:    ", result);
console.log();
console.log("---------------------------Includes---------------------------");
result = array.includes(x => x = 'hi');
console.log("Includes x = 'hi':    ", result);


console.log();
console.log("---------------------------MAP---------------------------");
result = array.map(x => x + 2);
console.log("Map x + 2:    ", result);

console.log();
console.log("---------------------------FILTER---------------------------");
result = array.filter(x => x > 1);
console.log("Filter x > 1:    ", result);



