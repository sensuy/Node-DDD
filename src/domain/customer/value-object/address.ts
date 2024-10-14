// An object-value that represents an address
// - doesn't have and id
// - doesn't have behavior
// - is immutable
// - is validated in the constructor

export class Address {
    _street: string;
    _city: string;
    _zip: string;
    _number: number = 0;

    constructor( street: string, number: number, zip: string, city: string) {
        this._street = street;
        this._number = number;
        this._zip = zip;
        this._city = city;

        this.validate();
    }

    get street() {
        return this._street;
    }

    get number() {
        return this._number;
    }

    get zip() {
        return this._zip;
    }
    
    get city() {
        return this._city;
    }


    validate() {    
        if (!this._street) {
            throw new Error("Street is required");
        }

        if (!this._city) {
            throw new Error("City is required");
        }

        if (!this._zip) {
            throw new Error("Zip is required");
        }

        if (!this._number) {
            throw new Error("number is required");
        }
    }

    toString() {
        return `${this._street}, ${this._city}, ${this._zip}`;
    }
}