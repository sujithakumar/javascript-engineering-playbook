

function countDown(n) {
    console.log("Entering Countdown(): Where n is:  ", n);
    if (n === 0) {
        return;
    }
    countDown(n - 1);
    console.log("Exiting Countdown(): Where n is:  ", n);
}

console.log("Count to 3");
countDown(3);
console.log();
console.log("Count to 0");
countDown(0);
console.log();
console.log("Count to 2");
countDown(2);

