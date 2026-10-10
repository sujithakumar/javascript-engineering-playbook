
console.log();

//string
const user = 'sujitha';
const splitUser = [...user];
console.log("split username", splitUser);

//combining Arr
console.log();
const fruits = ['apple', 'banana'];
const vegetables = ['carrot', 'spinach'];
const groceryList = [...fruits, ...vegetables];
console.log("Combined groceryList", groceryList);

//objects
console.log();
const emp = { name: 'Sujitha', role: 'Developer' };
//updated role
const updatedUser = {
    ...emp,
    role: 'Lead Dev',    //modify role
    salary: '2k'
};

console.log(updatedUser);
console.log();
console.log(emp);


