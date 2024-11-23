import { Customer } from "../../customer/entity/customer";
import { Order } from "../entity/order";
import { OrderItem } from "../entity/order-item";
import { OrderService } from "./order.service";

describe("Order Service unit test", () => {

    it("should place an order", () => {
        // Arrange
        const customer = new Customer("c1", "John Doe");
        const item1 = new OrderItem("i1", "Item 1", 10, "p1", 1);

        // Act
        const order = OrderService.placeOrder(customer, [item1]);

        // Assert
        expect(customer.rewardPoints).toBe(5);
        expect(order.total()).toBe(10);
    });

    it("should get total price of all orders", () => {
        // Arrange
        const item1 = new OrderItem("i1", "Item 1", 100, "p1", 1);
        const item2 = new OrderItem("i2", "Item 2", 200, "p2", 2);

        const order = new Order("o1", "c1", [item1]);
        const order2 = new Order("o2", "c2", [item2]);

        // Act
        const total = OrderService.total([order, order2]);

        // Assert
        expect(total).toBe(500);
    });
})