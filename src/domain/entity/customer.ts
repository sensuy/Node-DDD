import { Address } from "./address";

export class Customer {
    private _id: string;
    private _name: string;
    private _address!: Address;
    private _active: boolean = true;
    private _rewardsPoints: number = 0;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;

        this.validate();
    }

    get id() {
        return this._id;
    }
    
    get name() {
        return this._name;
    }

    get rewardsPoints() {
        return this._rewardsPoints;
    }

    set Address(address: Address) {
        this._address = address;
    }

    validate() {
        if (!this._id) {
            throw new Error("ID is required");
        }

        if (!this._name) {
            throw new Error("Name is required");
        }
    }

    changeName(name: string) {
        this._name = name;
        this.validate();
    }

    activate() {
        if (!this._address) {
            throw new Error("Address is mandatory to activate the customer");
        }
        this._active = true;
    }

    deactivate() {
        this._active = false;
    }

    isActive() {
        return this._active;
    }

    addRewardsPoints(points: number) {
        this._rewardsPoints += points;
    }

    
}