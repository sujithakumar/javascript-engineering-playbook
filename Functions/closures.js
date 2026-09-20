
function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}
const increment = counter();


function greet(name) {
  return function () {
    console.log("Hello " + name);
  };
}
const sayHello = greet("John");
const increment2 = counter();

console.log("increment(); 1st call:     ", );
increment()
sayHello();
console.log("increment2(); 1st call:     ", );
increment2();
console.log("increment(); 2nd call:     ", );
increment(); 
console.log("increment2(); 2nd call:     ", );
increment2();


