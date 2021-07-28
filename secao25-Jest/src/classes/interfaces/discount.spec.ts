import { Discount, FiftyPercentDiscount, NoDiscount, TenPercentDiscount } from "./discount";

const createSut = (className: new () => Discount): Discount => {
    return new className();
};

describe("Discount", () => {
    afterEach(() => jest.clearAllMocks());

    it("Should have no discount", () => {
        //! System under test
        const sut = createSut(NoDiscount);
        expect(sut.calculate(10.99)).toBeCloseTo(10.99);
    });

    it("Should apply 50% discount on price", () => {
        //! System under test
        const sut = createSut(FiftyPercentDiscount);
        expect(sut.calculate(150.5)).toBeCloseTo(75.25);
    });

    it("Should apply 10% discount on price", () => {
        //! System under test
        const sut = createSut(TenPercentDiscount);
        expect(sut.calculate(10)).toBeCloseTo(9);
    });
});
