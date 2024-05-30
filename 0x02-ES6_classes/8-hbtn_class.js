export default class HolbertonClass {
    constructor(size, location) {
        this._size = size;
        this._location = location;
    }

    // Getter for size
    get size() {
        return this._size;
    }

    // Getter for location
    get location() {
        return this._location;
    }

    // Custom conversion to Number
    valueOf() {
        return this._size;
    }

    // Custom conversion to String
    toString() {
        return this._location;
    }
}

