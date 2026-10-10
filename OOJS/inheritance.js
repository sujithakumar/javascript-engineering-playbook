
//base class
class CoffeeMachine {
    constructor(brand) {
        this.brand = brand;
    }

    powerOn() {
        return `${this.brand} machine is turning on.`;
    }
}

//child class
class SmartCoffeeMachine extends CoffeeMachine {
    connectWiFi() {
        return `${this.brand} is connected to Wi-Fi!`;
    }
}

const myMachine = new SmartCoffeeMachine("StarBucks");
console.log(myMachine.powerOn());
console.log(myMachine.connectWiFi());

//ex 2:
console.log();
class Vehicle {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    describe() {
        return `${this.name} travels at ${this.speed} km/h`;
    }
    static info() {
        return "Vehicle base class";
    }
}

class ElectricCar extends Vehicle {
    constructor(name, speed, batteryLife) {
        super(name, speed);
        this.batteryLife = batteryLife;
    }

    describe() {
        const baseDescription = super.describe();
        return `${baseDescription} with a ${this.batteryLife}-hour battery life.`;
    }

    static info() {
        return `${super.info()} -> ElectricCar sub-class`;
    }
}

const myTesla = new ElectricCar("Tesla Model 3", 220, 8);

console.log(myTesla.describe());
console.log(ElectricCar.info());




