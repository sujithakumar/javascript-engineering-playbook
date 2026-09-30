
console.log();
const numbers = new Set([1, 2, 3, 3, 4, 5, 1 ]);
console.log('numbers    ',numbers);

console.log();
const numberSet = new Set();
numberSet.add(2);
numberSet.add(2.5);
numberSet.add(0);
numberSet.add(-2);
numberSet.add(2);
numberSet.add('5');
numberSet.add(0);
console.log('numberSet     ',numberSet);

console.log();
const stringSet = new Set();
stringSet.add('5');
stringSet.add('Hello World');
stringSet.add('Hi');
stringSet.add("Learning Sets");
stringSet.add(5);
stringSet.add('Hi');
console.log('stringSet     ',stringSet);


console.log();
console.log('--------------------------Operations-----------------------------------');
console.log('numberSet     ',numberSet);
console.log(numberSet.add(12));
console.log(numberSet.has(2));
console.log(numberSet.size);
console.log(numberSet.delete(0));
console.log('numberSet     ',numberSet);
console.log(numberSet.clear());
console.log('numberSet     ',numberSet);

console.log();
console.log('numbers     ',numbers);
console.log(numbers.entries());
console.log('Returns Set Iterator');


console.log();
console.log('---------------------Iteration---------------------------');
for (const number of numbers) {
    console.log(number);
}
console.log();
stringSet.forEach(element => {
    console.log(element);
});

