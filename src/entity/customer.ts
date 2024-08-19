class Customer {
    _id: string;
    _name: string;
    _address: string = "";
    _actove: boolean = true;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;

        this.validate();
    }

    validate() {    
        if (!this._name) {
            throw new Error("Name is required");
        }

        if (!this._id) {
            throw new Error("ID is required");
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
        this._actove = true;
    }

    deactivate() {
        this._actove = false;
    }
}