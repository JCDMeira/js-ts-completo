import { Discount } from "./interfaces/discount";
import { ShoppingCart } from "./shopping-cart";
import { CartItem } from "../classes/interfaces/cart-item";

const createSut = () => {
    const discountMock = creteDiscountMock();
    const sut = new ShoppingCart(discountMock);
    return { sut, discountMock };
};

const creteDiscountMock = () => {
    class DiscountMock extends Discount {}
    return new DiscountMock();
};

const creteCartItemMock = (name: string, price: number) => {
    class CartItemMock implements CartItem {
        constructor(public name:string, public price:number){}
    }
    return new CartItemMock(name, price);
};

const createSutWithProducts = () => {
    const {sut, discountMock } = createSut();
    const cartItem1 = creteCartItemMock("camiseta", 40);
    const cartItem2 = creteCartItemMock("camiseta2", 40);
    sut.addItem(cartItem1);
    sut.addItem(cartItem2);
    return {sut, discountMock};
};

describe("ShoppingCart", () => {
    it("Should be an empty cart when no product is added", () => {
        const {sut } = createSut();
        expect(sut.isEmpty()).toBe(true);
    });

    it("Should have 2 cart items", () => {
        const {sut } = createSutWithProducts();
        expect(sut.items.length).toBe(2);
    });

    it("Should test total and totalWithDicount", () => {
        const {sut } = createSutWithProducts();
        expect(sut.total()).toBe(80);
        expect(sut.totalWithDiscount()).toBe(80);
    });

    it("Should add products and clear cart", () => {
        const {sut } = createSutWithProducts();
        expect(sut.items.length).toBe(2);
        sut.clear();
        expect(sut.items.length).toBe(0);
        expect(sut.isEmpty()).toBe(true);
    });

    it("Should remove", () => {
        const {sut } = createSutWithProducts();
        expect(sut.items.length).toBe(2);
        sut.removeItem(1);
        expect(sut.items.length).toBe(1);
    });
});
