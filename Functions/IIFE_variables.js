const counter = (function() {
    let count = 0; // Private variable
    return {
        increment: function() {
            count++;
            console.log(count);
        },
        decrement: function() {
            count--;
            console.log(count);
        }
    };
})();

counter.increment();
counter.increment(); 
counter.decrement(); 
console.log(count); //error


