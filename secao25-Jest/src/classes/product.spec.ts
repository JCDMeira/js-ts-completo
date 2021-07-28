import { Product } from "./product";

const createSut = (name: string, price: number): Product => {
    return new Product(name, price);
};

describe("Product", () => {
    afterEach(() => jest.clearAllMocks());

    it("Should have properties name and price", () => {
        //! System under test
        const sut = createSut("camiseta", 49.9);
        expect(sut).toHaveProperty("name", "camiseta");
        expect(sut.price).toBeCloseTo(49.9);
    });
});
