function calculate(operation, a, b) {
    return operation(a, b);
}

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

console.log(calculate(add, 10, 20));
console.log(calculate(sub, 100, 20));


function multiplier(value) {
    console.log("value passed to multiplier", value);
    return function (number) {
        console.log("value passed to return function", number);
        return number * value;
    };
}

const double = multiplier(2);

console.log("double(5)",double(5));
