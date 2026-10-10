
const word = "awesome";
const name= 'sujitha';
const sentence = `This is ${word}`

console.log(sentence); //"This is awesome!"

function emphasize(strings, ...values) {
  return `${strings[0]} ${values[0]} ${strings[1]} ${values[1]}`;
}

const result = emphasize`This is ${word}! day ${name}`;
console.log(result); // This is  awesome ! day  sujitha

