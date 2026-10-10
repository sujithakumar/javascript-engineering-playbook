
const counter = {
  count: 0,
  start() {
    console.log("Level 1    ", this.count);
    setTimeout(function() {
      // `this` here is NOT `counter`! 
      // It points to the global window or is undefined.
      this.count++; 
      console.log("Level 2  ",this.count); // NaN or error
    }, 1000);
  }
};

counter.start();


//Arrow Function
const counter1 = {
    count: 0,
    start() {
        console.log("Level 1    ", this.count);
        // Arrow function inherits `this` from `start()` 
        // (which is the `counter` object)
        setTimeout(() => {
            console.log("Level 2   ", this.count);
            this.count++;
            console.log("Level 3   ", this.count);
        }, 1000);
    }
};

counter1.start();

