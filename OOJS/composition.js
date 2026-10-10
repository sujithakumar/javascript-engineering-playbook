
// Small, independent pieces (parts)
class Engine {
  start() {
    return "Engine started!";
  }
}

class MusicPlayer {
  play() {
    return "Playing music...";
  }
}

// Composition: Building a Car by combining parts together
class Car {
  constructor() {
    this.engine = new Engine();       // Car "has-a" engine
    this.musicPlayer = new MusicPlayer(); // Car "has-a" music player
  }

  drive() {
    return this.engine.start();
  }
}

var myCar = new Car();
console.log(myCar.drive()); 
// Output: Engine started!

