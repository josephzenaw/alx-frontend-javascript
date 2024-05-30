import Car from './10-car.js';

const cloneSymbol = Symbol('clone');

export default class EVCar extends Car {
    constructor(brand, motor, color, range) {
        super(brand, motor, color);
        this._range = range;
    }

    // Override the cloneCar method to return an instance of Car
    cloneCar() {
        const clonedCar = super.cloneCar();
        Object.setPrototypeOf(clonedCar, Car.prototype); // Set the prototype to Car
        return clonedCar;
    }

    // Custom method to check if an object is an instance of EVCar
    static [cloneSymbol](obj) {
        return obj instanceof EVCar;
    }
}

