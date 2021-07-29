/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { CartItem } from "./interfaces/cart-item";
import { CustomerOrder } from "./interfaces/costumer-protocol";
import { MessagingProtocol } from "./interfaces/messaging-protocol";
import { PersistencyProtocol } from "./interfaces/persistency-protocol";
import { ShoppingCartProtocol } from "./interfaces/shopping-cart-protocol";
import { Order } from "./order";

class ShoppingCartMock implements ShoppingCartProtocol {
    get items(): readonly CartItem[] {
        return [];
    }
    addItem(item: CartItem): void { }
    removeItem(index: number): void {}
    total(): number {return 2;}
    totalWithDiscount(): number {return 1;}
    isEmpty(): boolean {return false;}
    clear(): void {}
}

class MessagingMock implements MessagingProtocol {
    sendMessage(msg: string): void {}
}

class PersistencyMock implements PersistencyProtocol {
    saveOrder(): void {}
}

class CustomerMock implements CustomerOrder {
    getName(): string { return "";}
    getIDN(): string {return"";}
}

const createSut = () => {
    const shoppingCartMock = new ShoppingCartMock();
    const messagingMock = new MessagingMock();
    const persistencyMock = new PersistencyMock();
    const customerMock = new CustomerMock();
    const sut = new Order(
        shoppingCartMock,
        messagingMock,
        persistencyMock,
        customerMock,
    );
    return {
        sut,
        shoppingCartMock,
        messagingMock,
        persistencyMock,
        customerMock
    };
};

describe("Order", () => {
    it("Should not checkout if cart is empty", () =>{
        const {sut, shoppingCartMock } = createSut();
        const shoppingCartMockSPy = jest
            .spyOn(shoppingCartMock, "isEmpty")
            .mockReturnValueOnce(true);
        sut.checkOut();
        expect(shoppingCartMockSPy).toHaveBeenCalledTimes(1);
        expect(sut.orderStatus).toBe("open");
    });

    it("Should checkout if cart is not empty", () =>{
        const {sut, shoppingCartMock } = createSut();
        const shoppingCartMockSPy = jest
            .spyOn(shoppingCartMock, "isEmpty")
            .mockReturnValueOnce(false);
        sut.checkOut();
        expect(shoppingCartMockSPy).toHaveBeenCalledTimes(1);
        expect(sut.orderStatus).toBe("closed");
    });

    it("Should send an email to customer", () =>{
        const {sut, messagingMock } = createSut();
        const messagingMockSPy = jest.spyOn(messagingMock, "sendMessage");
        sut.checkOut();
        expect(messagingMockSPy).toHaveBeenCalledTimes(1);
    });

    it("Should save order", () =>{
        const {sut, persistencyMock } = createSut();
        const persistencyMockSPy = jest.spyOn(persistencyMock, "saveOrder");
        sut.checkOut();
        expect(persistencyMockSPy).toHaveBeenCalledTimes(1);
    });

    it("Should clear cart", () =>{
        const {sut, shoppingCartMock } = createSut();
        const shoppingCartMockSPy = jest.spyOn(shoppingCartMock, "clear");
        sut.checkOut();
        expect(shoppingCartMockSPy).toHaveBeenCalledTimes(1);
    });
});
