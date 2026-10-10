// BAD PRACTICE: Wastes memory
function User(name) {
  this.name = name;
  this.sayHi = function() {
    return `Hi, I am ${this.name}`;
  };
}
const u11 = new User('Alex');
const u22 = new User('Sarah');

console.log(u11.sayHi === u22.sayHi); 
// false (Two duplicate functions in memory)


// GOOD PRACTICE: Memory efficient
function User1(name) {
  this.name = name;
}
// Single function shared across all instances
User1.prototype.sayHi = function() {
  return `Hi, I am ${this.name}`;
};
const u1 = new User1('Alex');
const u2 = new User1('Sarah');

console.log(u1.sayHi === u2.sayHi); 
// true (Points to the exact same function)

console.log()

//missing new keyword:
function User2(name) {
  // Safety guard using new.target
  if (!new.target) {
    return new User2(name); 
    // Auto-instantiates with 'new' if omitted
  }
  this.name = name;
}

const user1 = User2('Alex'); 
// Forgot 'new', but safety check handles it
console.log(user1.name);   
// "Alex"



