import { Address } from "./address";

describe('Address unit tests', () => {
    it('should throw error if street is empty', () => {
        // Arrange
        const street = '';
        const number = 10;
        const zip = '12345';
        const city = 'City 1';

        // Act
        // Assert
        expect(() => new Address(street, number, zip, city)).toThrow('Street is required');
    });

    it('should throw error if city is empty', () => {
        // Arrange
        const street = 'Street 1';
        const city = '';
        const zip = '12345';
        const number = 10;

        // Act
        // Assert
        expect(() => new Address(street, number, zip, city)).toThrow('City is required');
    });

    it('should throw error if zip is empty', () => {
        // Arrange
        const street = 'Street 1';
        const city = 'City 1';
        const zip = '';
        const number = 10;

        // Act
        // Assert
        expect(() =>new Address(street, number, zip, city)).toThrow('Zip is required');
    });

    it('should throw error if number is empty', () => {
        // Arrange
        const street = 'Street 1';
        const city = 'City 1';
        const state = 'State 1';
        const zip = '12345';
        const number = 0;

        // Act
        // Assert
        expect(() => new Address(street, number, zip, city)).toThrow('number is required');
    });

    it('should return address string', () => {
        // Arrange
        const street = 'Street 1';
        const city = 'City 1';
        const state = 'State 1';
        const zip = '12345';
        const number = 10;

        // Act
        const address = new Address(street, number, zip, city);

        // Assert
        expect(address.toString()).toBe('Street 1, City 1, 12345');
    });
});