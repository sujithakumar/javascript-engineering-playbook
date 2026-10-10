
class CoffeeMachine {

    // Private: external code can't tamper with this directly
    #waterTemperature = 0; 

    #boilWater() {
        this.#waterTemperature = 100;
    }

    brew() {
        this.#boilWater();
        return `Brewing coffee at ${this.#waterTemperature}°C!`;
    }
}

const machine = new CoffeeMachine();
console.log(machine.brew()); // "Brewing coffee at 100°C!"
//console.log(machine.#waterTemperature); // Syntax Error! It's truly private.