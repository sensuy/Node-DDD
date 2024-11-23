import { Product } from "../entity/product";
import { ProductService } from "./product.service";

describe('Product Service unit test', () => {
    it("should change the prices of all products", () => {
        // Arrange
        const product1 = new Product("product1", "Product 1", 10);
        const product2 = new Product("product2", "Product 2", 20);
        const products = [product1, product2];

        // Act
        ProductService.increasePrices(products, 100);

        // Assert
        expect(product1.price).toBe(20);
        expect(product2.price).toBe(40);
    });
})