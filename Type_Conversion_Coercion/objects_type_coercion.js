console.log("ARRAY TO STRING COERCION");
console.log("String([]) =    ", String([]));
console.log("String([1]) =    ", String([1]));
console.log("String([1, 2]) =    ", String([1, 2]));

console.log("");
console.log("ARRAY TO NUMBER COERCION");
console.log("Number([]) =    ", Number([]));
console.log("Number([1]) =    ", Number([1]));
console.log("Number([10]) =    ", Number([10]));
console.log("Number([1, 2]) =    ", Number([1, 2]));

console.log("");
console.log("ARRAY IN ARITHMETIC");
console.log("[] + 1 =    ", [] + 1);
console.log("[1] + 2 =    ", [1] + 2);
console.log("[1, 2] + 3 =    ", [1, 2] + 3);
console.log("[] - 1 =    ", [] - 1);
console.log("[1] - 1 =    ", [1] - 1);
console.log("[2] * 3 =    ", [2] * 3);
console.log("[10] / 2 =    ", [10] / 2);

console.log("");
console.log("OBJECT TO STRING COERCION");
console.log("String({}) =    ", String({}));
console.log("'hello' + {} =    ", 'hello' + {});
console.log("{} + 'hello' =    ", {} + 'hello');

console.log("");
console.log("OBJECT TO NUMBER COERCION");
console.log("Number({}) =    ", Number({}));
console.log("{} - 1 =    ", {} - 1);
console.log("{} * 2 =    ", {} * 2);

console.log("");
console.log("ARRAY AND OBJECT COMBINATION");
console.log("[] + {} =    ", [] + {});
console.log("{} + [] =    ", {} + []);
console.log("[1] + {} =    ", [1] + {});