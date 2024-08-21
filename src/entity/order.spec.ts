import { Order } from "./order";
import { OrderItem } from "./order_item";

describe('Order unit tests', () => {

    it('should should throw error if id is empty', () => {
        // Arrange
        const id = '';
        const customerId = '123';
        const items: OrderItem[] = [];

        // Act
        // Assert
        expect(() => new Order(id, customerId, items)).toThrow('ID is required');
    });

    it('should throw error if customerId is empty', () => {
        // Arrange
        const id = '123';
        const customerId = '';
        const items: OrderItem[] = [];

        // Act
        // Assert
        expect(() => new Order(id, customerId, items)).toThrow('Customer ID is required');
    });

});