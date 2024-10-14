
import { Order } from "./order";
import { OrderItem } from "./order-item";

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
            new OrderItem('1', 'Product 1', 10, 'productId1', 1),
            new OrderItem('2', 'Product 2', 20, 'productId2', 2),
            new OrderItem('3', 'Product 3', 30, 'productId3', 3)
            
        ];

        // Act
        const order = new Order(id, customerId, items);

        // Assert
        expect(order.total()).toBe(140);
    });

    it('should throw error if item quantity is less than 0', () => {
        // Arrange
        const id = '123';
        const customerId = '123';
        const items: OrderItem[] = [
            new OrderItem('1', 'Product 1', 10, 'productId1', -1)
        ];

        // Act
        // Assert
        expect(() => new Order(id, customerId, items)).toThrow('Item quantity should be greater than 0');
    });

});