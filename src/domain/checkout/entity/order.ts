import { OrderItem } from "./order-item";

export class Order {
    private _id: string;
    private _customerId: string;
    private _items: OrderItem[] = [];
    private _total: number = 0;

    constructor(id: string, customerId: string, items: OrderItem[]) {
        this._id = id;
        this._customerId = customerId;
        this._items = items;
        this._total = this.total();

        this.validate();
    }

    get id(): string {
        return this._id;
    }

    get customerId(): string {
        return this._customerId;
    }

    get items(): OrderItem[] {
        return this._items;
    }

    validate(): boolean {
        if (!this._id) {
            throw new Error("ID is required");
        }

        if (!this._customerId) {
            throw new Error("Customer ID is required");
        }

        if (!this._items || this._items.length === 0) {
            throw new Error("Items quantity should be greater than 0");
        }

        if (this._items.some(item => item.quantity <= 0)) {
            throw new Error("Item quantity should be greater than 0");
        }

        return true;
    }

    total() {
        return this._items.reduce((acc, item) => acc + item.price, 0);
    }
}