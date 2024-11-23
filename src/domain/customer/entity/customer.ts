import { Address } from "../value-object/address";

export class Customer {
    private _id: string;
    private _name: string;
    private _address!: Address;
    private _active: boolean = true;
    private _rewardPoints: number = 0;

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

    get rewardPoints() {
        return this._rewardPoints;
    }

    get Address() {
        return this._address;
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

    changeAddress(address: Address) {
        this._address = address;
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

    addRewardPoints(points: number) {
        this._rewardPoints += points;
    }

    
}