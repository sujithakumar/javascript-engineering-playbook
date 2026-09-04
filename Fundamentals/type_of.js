function returnTypeOfValue(inp) {
    return typeof (inp);
}

console.log("Basic");
console.log("value passed : 'aA'    ", returnTypeOfValue('aA'));
// console.log("value passed : a ", returnTypeOfValue(a)); -->undefined
console.log("value passed : \"aS\"   ", returnTypeOfValue("aS"));
console.log("value passed : \"a sentence\"   ", returnTypeOfValue("a sentence"));
console.log("value passed : 9   ", returnTypeOfValue(9));
console.log("value passed : 9.99    ", returnTypeOfValue(9.99));
console.log("value passed : 3.14    ", returnTypeOfValue(3.14));
console.log("value passed : \"3.14\"    ", returnTypeOfValue("3.14"));
console.log("value passed : 314n    ", returnTypeOfValue(314n));
console.log(" ");
console.log("Arithmetic");
console.log("value passed : '1+2'   ", returnTypeOfValue('1+2'));
console.log("value passed : 1+2     ", returnTypeOfValue(1 + 2));
console.log("value passed : 1.1+2   ", returnTypeOfValue(1.1 + 2));
console.log("value passed : 1.1-2   ", returnTypeOfValue(1.1 - 2));
console.log(" ");
console.log("spaces");
console.log("value passed : \" \"   ", returnTypeOfValue(" "));
console.log("value passed : \"\"    ", returnTypeOfValue(""));
console.log("value passed : ' '     ", returnTypeOfValue(' '));
console.log("value passed : ''  ", returnTypeOfValue(''));
console.log(" ");
console.log("Empty Objects");
console.log("value passed : {}  ", returnTypeOfValue({}));
console.log("value passed : []  ", returnTypeOfValue([]));
console.log("value passed : { }     ", returnTypeOfValue({}));
console.log("value passed : [ ]     ", returnTypeOfValue([]));
console.log(" ");
console.log("obj with values");
console.log("value passed : {age:10, name:\"sujitha\"}  ", returnTypeOfValue({age:10, name:"sujitha"}));
console.log("value passed : [1,2,'3']  ", returnTypeOfValue([1,2,'3']));
console.log(" ");
console.log("null undefined 0");
console.log("value passed : null    ", returnTypeOfValue(null));
console.log("value passed : undefined   ", returnTypeOfValue(undefined));
console.log("value passed : 0   ", returnTypeOfValue(0));
console.log(" ");
console.log("Boolean");
console.log("value passed : true    ", returnTypeOfValue(true));
console.log("value passed : false   ", returnTypeOfValue(false));
console.log(" ");
console.log("NaN");
console.log("value passed : NaN     ", returnTypeOfValue(NaN));
console.log("value passed : NaN + NaN     ", returnTypeOfValue(NaN + NaN));
console.log("value passed : NaN - NaN     ", returnTypeOfValue(NaN - NaN));
console.log("value passed : NaN * NaN     ", returnTypeOfValue(NaN * NaN));
console.log("value passed : NaN / NaN     ", returnTypeOfValue(NaN / NaN));
console.log("value passed : NaN % NaN     ", returnTypeOfValue(NaN % NaN));
console.log(" ");
console.log("functions");
console.log("value passed : returnTypeOfValue()     ", returnTypeOfValue(returnTypeOfValue()));
console.log("value passed : returnTypeOfValue('a')     ", returnTypeOfValue(returnTypeOfValue('a')));


