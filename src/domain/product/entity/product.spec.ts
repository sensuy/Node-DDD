import { Product } from "./product";

describe('Product unit tests', () => {
    it('should throw error if id is empty', () => {
        // Arrange
        const id = '';
        const name = 'Product 1';
        const price = 10;

        // Act
        // Assert
        expect(() => new Product(id, name, price)).toThrow('ID is required');
    });

    it('should throw error if name is empty', () => {
        // Arrange
        const id = '123';
        const name = '';
        const price = 10;

        // Act
        // Assert
        expect(() => new Product(id, name, price)).toThrow('Name is required');
    });

    it('should throw error if price is empty', () => {
        // Arrange
        const id = '123';
        const name = 'Product 1';
        const price = 0;

        // Act
        // Assert
        expect(() => new Product(id, name, price)).toThrow('Price should be greater than 0');
    });

    it('should be able to change product name', () => {
        // Arrange
        const id = '123';
        const name = 'Product 1';
        const price = 10;

        // Act
        const product = new Product(id, name, price);
        product.changeName('Product 2');

        // Assert
        expect(product.name).toBe('Product 2');
    });

    it('should be able to change product price', () => {
        // Arrange
        const id = '123';
        const name = 'Product 1';
        const price = 10;

        // Act
        const product = new Product(id, name, price);
        product.changePrice(20);

        // Assert
        expect(product.price).toBe(20);
    });

    it('should return product name', () => {
        // Arrange
        const id = '123';
        const name = 'Product 1';
        const price = 10;

        // Act
        const product = new Product(id, name, price);

        // Assert
        expect(product.name).toBe('Product 1');
    });

    it('should return product price', () => {
        // Arrange
        const id = '123';
        const name = 'Product 1';
        const price = 10;

        // Act
        const product = new Product(id, name, price);

        // Assert
        expect(product.price).toBe(10);
    });
});