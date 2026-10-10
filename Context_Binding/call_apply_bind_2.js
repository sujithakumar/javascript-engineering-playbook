
function greet(greeting) {
  console.log(greeting,"I am ", this.name);
}

const person = { name: 'Alice' };
greet.call(person, 'Hello,'); // "Hello, I am Alice"
greet.call(person, ['Hi,']); // "[Hi,] I am Alice"

greet.apply(person, ['Hi,']); // "Hi, I am Alice"


const boundGreet = greet.bind(person);
boundGreet('Hey'); // "Hey, I am Alice"