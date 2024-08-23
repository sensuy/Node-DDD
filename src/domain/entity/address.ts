// An object-value that represents an address
// - doesn't have and id
// - doesn't have behavior
// - is immutable
// - is validated in the constructor

export class Address {
    _street: string;
    _city: string;
    _state: string;
    _zip: string;
    _number: number = 0;

    constructor( street: string, city: string, state: string, zip: string, number: number) {
        this._street = street;
        this._city = city;
        this._state = state;
        this._zip = zip;
        this._number = number;

        this.validate();
    }

    validate() {    
        if (!this._street) {
            throw new Error("Street is required");
        }

        if (!this._city) {
            throw new Error("City is required");
        }

        if (!this._state) {
            throw new Error("State is required");
        }

        if (!this._zip) {
            throw new Error("Zip is required");
        }

        if (!this._number) {
            throw new Error("number is required");
        }
    }

    toString() {
        return `${this._street}, ${this._city}, ${this._state}, ${this._zip}`;
    }
}