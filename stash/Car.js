class Car {
    constructor(
        name,
        color,
        year,
        make,
        model,
        topSpeed,
        tireSizeFront,
        tireSizeBack,
        engineIsOn,
    ) {
        this.name = name;
        this.color = color;
        this.year = year;
        this.make = make;
        this.model = model;
        this.topSpeed = topSpeed
        this.tireSize = {
            front: tireSizeFront,
            back: tireSizeBack,
        };
        this.engineIsOn = engineIsOn
    }
    newEngineStatus(engineStatus) {
        this.engineIsOn = engineStatus
    }
    ageOfCar() {
        let now = new Date();
        let age = new Date(this.year)
        let elapsed = now - age;
        let totalAge = Math.round(elapsed / (1000 * 3600 * 24 * 365))
        return totalAge
    }
}

export default Car;