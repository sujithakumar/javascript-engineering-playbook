console.log();
console.log('Math.max(10, 20)   ', Math.max(10, 20));
console.log('Math.PI    ', Math.PI);

//Rounding off 
console.log();
console.log(
    Math.round(4.6), '  ',
    Math.round(4.4), '  ',
    Math.round(4.5), '  '
);

console.log();
console.log(
    '  Ceil ', Math.ceil(4.2), '   ',
    ' Floor  ', Math.floor(4.8), '  ',
    ' Trunc  ', Math.trunc(4.9), '   ',
    Math.floor(-4.2)
);

console.log();
console.log(
    'absolute values    ',
    Math.abs(-1), ' ',
    Math.abs(0), '   ',
    Math.abs(100 * 100), '   ',
    Math.abs(-2.2)

)


console.log();
//find max value in a array 
let arr = [1, -2, -10, 0, 8, 9, 0, 3, 1, 100, 4, 7, 8];
let temp = [...new Set(arr)];
console.log(temp);
console.log(
    ' ',
    Math.max(...temp),
    ' ',
    Math.min(...temp)
);

