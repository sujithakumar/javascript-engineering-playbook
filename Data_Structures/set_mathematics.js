
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

const union = new Set([...setA, ...setB]);
const intersection = new Set(
    [...setA].filter(x=> setB.has(x)) 
);
const difference = new Set(
     [...setA].filter(x=> !setB.has(x)) 
);

console.log();
console.log("union - unique values in both set: ", union);
console.log();
console.log("intersection - present in both sets  :", intersection);
console.log();
console.log("difference: - opresent in set1 not set 2 ", difference);