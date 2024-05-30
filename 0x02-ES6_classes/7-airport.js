export default class Airport {
    constructor(name, code) {
        this._name = name;
        this._code = code;
    }

    // Getter for name
    get name() {
        return this._name;
    }

    // Getter for code
    get code() {
        return this._code;
    }

    // Default string description
    toString() {
        return `[object ${this._code}]`;
    }

    // Custom inspect method for Node.js
    inspect() {
        return `Airport [${this._code}] { _name: '${this._name}', _code: '${this._code}' }`;
    }
}

