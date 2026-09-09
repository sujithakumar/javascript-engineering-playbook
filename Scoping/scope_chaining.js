const globalNum = 10;
console.log("globalNum:  ", globalNum);

function add() {
    let a = 2;
    let b = 3;
    console.log();
    console.log("Inside add() function:");

    function addition() {
        let c = 100;
        console.log();
        console.log("Inside addition() function (Scope Chain):");
        console.log("Total sum:  ", a + b + c);
    }

    console.log();
    console.log("calling addition function:");
    addition();
}

console.log();
console.log("calling add function:");
add();

