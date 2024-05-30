const cloneSymbol = Symbol('clone');

export default class Car {
    constructor(brand, motor, color) {
        this._brand = brand;
        this._motor = motor;
        this._color = color;
    }

    // Method to clone the car
    cloneCar() {
        const clonedCar = new Car();
        Object.getOwnPropertyNames(this).forEach(prop => {
            if (prop !== cloneSymbol && prop !== '_clone') {
                clonedCar[prop] = this[prop];
            }
        });
        return clonedCar;
    }

    // Custom method to check if an object is an instance of Car
    static [cloneSymbol](obj) {
        return obj instanceof Car;
    }
}

