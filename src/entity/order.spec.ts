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

    it('should throw error if items is empty', () => {
        // Arrange
        const id = '123';
        const customerId = '123';
        const items: OrderItem[] = [];

        // Act
        // Assert
        expect(() => new Order(id, customerId, items)).toThrow('Items quantity should be greater than 0');
    });

    it('should calculate total', () => {
        // Arrange
        const id = '123';
        const customerId = '123';
        const items: OrderItem[] = [
            new OrderItem('123', '123', 10),
            new OrderItem('123', '123', 20),
            new OrderItem('123', '123', 30),
        ];

        // Act
        const order = new Order(id, customerId, items);

        // Assert
        expect(order.total).toBe(60);
    });

    

});