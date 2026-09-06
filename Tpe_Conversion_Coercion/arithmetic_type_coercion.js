console.log("");
console.log("STRING CONCATENATION WITH +");
console.log("1 + '1' =  ", 1 + '1');
console.log("'2' + 1 =  ", '2' + 1);
console.log("'2' + '2' =    ", '2' + '2');

console.log("");
console.log("LEFT-TO-RIGHT + EVALUATION");
console.log("'2' + '2' + 2 + 3 + '4' + 5 =  ", '2' + '2' + 2 + 3 + '4' + 5);
console.log("2 + '3' + 4 + 5 =  ", 2 + '3' + 4 + 5);
console.log("2 + 3 + '5' + 7 =  ", 2 + 3 + '5' + 7);
console.log("1 + 2 + '3' =  ", 1 + 2 + '3');
console.log("'1' + 2 + 3 =  ", '1' + 2 + 3);
console.log("1 + '2' + 3 =  ", 1 + '2' + 3);

console.log("");
console.log("STRING TO NUMBER COERCION");
console.log("'5' - 2 =    ", '5' - 2);
console.log("'5' * 2 =    ", '5' * 2);
console.log("'10' / 2 =    ", '10' / 2);
console.log("'10' % 3 =    ", '10' % 3);

console.log("");
console.log("UNARY + COERCION");
console.log("+'10' =    ", +'10');
console.log("+'10.5' =    ", +'10.5');
console.log("+'hello' =    ", +'hello');
console.log("+'' =    ", +'');
console.log("+' ' =    ", +' ');

console.log("");
console.log("NaN PROPAGATION");
console.log("'hello' - 2 =    ", 'hello' - 2);
console.log("'hello' * 2 =    ", 'hello' * 2);
console.log("'hello' / 2 =    ", 'hello' / 2);
console.log("NaN + 10 =    ", NaN + 10);
console.log("NaN - 10 =    ", NaN - 10);
console.log("NaN * 10 =    ", NaN * 10);

console.log("");
console.log("STRING + NUMBER VS STRING - NUMBER");
console.log("'10' + 5 =    ", '10' + 5);
console.log("'10' - 5 =    ", '10' - 5);
console.log("'10' + true =    ", '10' + true);
console.log("'10' - true =    ", '10' - true);
console.log("'10' + null =    ", '10' + null);
console.log("'10' - null =    ", '10' - null);