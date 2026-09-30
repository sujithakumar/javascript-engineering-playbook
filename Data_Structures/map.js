 

const map1 = new Map();

map1.set('name','Sujitha');
map1.set('age',35);
map1.set('isMarrried', false);
map1.set(100,'emergency');
map1.set(true,'valid');
map1.set({id:10},'Object key');

console.log();
console.log(map1);
console.log();
console.log('size',map1.size);

//acces map
console.log();
console.log('Keys:');
console.log(map1.keys());
map1.keys().forEach(element => {
    console.log(element);
});

console.log();
console.log('Values:');
console.log(map1.values());
map1.values().forEach(element => {
    console.log(element);
});

console.log();
console.log('Entries:');
console.log(map1.entries());
map1.entries().forEach(element => {
    console.log(element);
    console.log(element[1]);
});

// iterating on a map 
console.log();
console.log();
console.log("key is the second attr");
console.log("value is the first attr");
map1.forEach((value,Key) =>{
    console.log("key ", Key);
    console.log("value ", value);
    console.log();
})

console.log();
console.log();
console.log('size',map1.size);
console.log('map1.get(true)', map1.get(true));
console.log('map1.get(false)', map1.get(false));
console.log('map1.has(0)', map1.has(0));
console.log('map1.has(100)', map1.has(100));
console.log('map1.has({id:10})',map1.has({id:10}));
console.log('map1.delete(100)',map1.delete(100));
console.log('map1.has(100)',map1.has(100));
console.log('map1.clear()',map1.clear());
console.log('map1',map1);

