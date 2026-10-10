const user = {
    name: "Alice"
};

console.log();
function greet(age, city) {
    console.log(this.name, age, city);
}
console.log('call and apply');
greet.call(user, 30, "Chennai");
greet.apply(user, [30, "Chennai"]);


console.log();
console.log('Apply');
const employee = {
    name: "John"
};
function showLeaveDetails(type, days, reason) {
    console.log(
        this.name + " requested " +
        days + " days of " + type + " leave for " + reason
    );
}
const leaveDetails = ["Annual", 5, 'vacation', 'Paid Leave'];
showLeaveDetails.apply(employee, leaveDetails);



console.log();
console.log('bind');
function greet() {
  console.log("Hello " + this.name);
}
const newGreet = greet.bind(user);
//calling new function later
newGreet();


