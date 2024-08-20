export class OrderItem {
    _id: string;
    _productId: string;
    _price: number;

    constructor(id: string, productId: string, price: number) {
        this._id = id;
        this._productId = productId;
        this._price = price;
    }
}