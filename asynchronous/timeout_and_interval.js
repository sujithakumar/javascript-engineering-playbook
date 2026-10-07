let add = function (a, b) {
    console.log("executing add function");
    return a + b;
}
// console.log();
// setTimeout(() => {
//     console.log("calling add after 100ms -100 milli second");
//     console.log("add called     ", add(2, 3));
// }, 100);

// console.log();
// setInterval(() => {
//     console.log("calling add for every 2000ms - 2000 milli second ");
//     console.log("add called     ", add(2, 3));
// }, 2000);

const timeOutId = setTimeout(() => {
    console.log("Timer: I might execute if not cleared by next timer");
}, 300);

console.log();
const intervalID = setInterval(() => {
     console.log("Interval : I will execute until cleared");
}, 100);

console.log();
setTimeout(() => {
    console.log("I will cancel your timeout & interval in 500ms")
    clearTimeout(timeOutId);
    clearInterval(intervalID);
}, 500);



