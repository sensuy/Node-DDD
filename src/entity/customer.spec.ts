import { Address } from "./address";
import { Customer } from "./customer";

describe('Customer unit tests', () => {
    it('should should throw error if id is empty', () => {
        // Arrange
        const id = '';
        const name = 'John Doe';

        // Act
        // Assert
        expect(() => new Customer(id, name)).toThrow('ID is required');
    });

    it('should should throw error if name is empty', () => {
        // Arrange
        const id = '123';
        const name = '';

        // Act
        // Assert
        expect(() => new Customer(id, name)).toThrow('Name is required');
    });

    it('should be able to change name', () => {
        // Arrange
        const id = '123';
        const name = 'John Doe';
        const customer = new Customer(id, name);

        // Act
        customer.changeName('Jane Doe');

        // Assert
        expect(customer.name).toBe('Jane Doe');
    });

    it('should be able to activate customer', () => {
        // Arrange
        const id = '123';
        const name = 'John Doe';
        const customer = new Customer(id, name);

        // Act
        const address = new Address('123 Main St', 'Springfield', 'IL', '62701', 123);
        customer.Address = address;
        customer.activate();

        // Assert
        expect(customer.isActive()).toBe(true);
    });

    it('should throw error if address is not set', () => {
        // Arrange
        const id = '123';
        const name = 'John Doe';
        const customer = new Customer(id, name);

        // Act
        // Assert
        expect(() => customer.activate()).toThrow('Address is mandatory to activate the customer');
    });

    it('should be able to deactivate customer', () => {
        // Arrange
        const id = '123';
        const name = 'John Doe';
        const customer = new Customer(id, name);

        // Act
        customer.deactivate();

        // Assert
        expect(customer.isActive()).toBe(false);
    });

});