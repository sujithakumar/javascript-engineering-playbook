

console.log();
//unknown number of arg
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(100));  
console.log(sum(5, 10));         
console.log(sum(10, 20, 40, 50));


console.log();
//objects
const project = {
  id: 101,
  title: 'Dashboard',
  status: 'Active',
  client: 'Acme Corp'
};
const { id, ...details } = project;
console.log(id);      
console.log(details); 

