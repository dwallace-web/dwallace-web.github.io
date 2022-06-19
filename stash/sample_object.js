import Car from './Car.js';

const thecar = {
    name: 'Moon Knight',
    color: 'grey',
    year: '2018',
    make: 'ford',
    model: 'Mach-E',
    topSpeed: 140,
    tireSize: {
        front: 40,
        back: 40
    },
    engineIsOn: false,
    newTireSize: function (frontSize, backSize) {
        this.tireSize.front = frontSize
        this.tireSize.back = backSize
        console.log("new tire size " + this.tireSize.front + " on front & back is " + this.tireSize.back)
    },
    newEngineStatus: function (engineStatus) {
        this.engineIsOn = engineStatus;
        console.log("engine status is " + this.engineIsOn)
    },
    ageOfCar() {
        let now = new Date();
        let age = new Date(this.year)
        console.log(`now ${now} and then ${age}`)
        let elapsed = now - age;
        let totalAge = Math.round(elapsed / (1000 * 3600 * 24 * 365))
        console.log("age of car: ", totalAge)
        return totalAge
    }
}

console.log(thecar.tireSize)
console.log(thecar.engineIsOn)
thecar.newEngineStatus(true)
thecar.newTireSize(38, 38)
thecar.ageOfCar();

const blockBusterCar = new Car(
    "Blockbuster",
    "blue",
    '1992',
    "Toyta",
    "Corolla",
    120,
    16,
    16,
    true
);
console.log("The Blockbuster Car:", blockBusterCar, "car is ", blockBusterCar.ageOfCar())