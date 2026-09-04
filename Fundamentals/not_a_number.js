


let result1 =  0 / 0;
let result2 =  'some string' / 1;
let result3 =  1.1 / 'some string';
console.log("result of 0 / 0   result1:  ", result1);
console.log("result of 0.1 / 'sujitha'  result2:    ",result2);
console.log("result of 'some string' / 1   result3:"    , result3);
console.log(" ");
console.log("Truthy / Falsy");
console.log("loose equals");
console.log("result1 == result2     ", result1 == result2 );
console.log("result2 == result3     ", result2 == result3 );
console.log("result3 == result1     ", result3 == result1 );
console.log("1 == result1     ", 1 == result1 );
console.log("strict equals");
console.log("result1 === result2     ", result1 === result2 );
console.log("result2 === result3     ", result2 === result3 );
console.log("result3 === result1     ", result3 === result1 );
console.log("1 === result1     ", 1 === result1 );
console.log(" ");
console.log("Ways to check not a number?");
console.log("Number.isNaN(result1)  ", Number.isNaN(result1));
console.log("Number.isNaN(\"result1\")  ", Number.isNaN("result1"));
console.log("Number.isNaN('')  ", Number.isNaN(''));



