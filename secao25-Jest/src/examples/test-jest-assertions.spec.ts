describe("Primitive values", ()=> {
    it("sould test jest assertions", () => {
        const number = 10;

        expect(number).toBe(10);
        expect(number).toEqual(10);
        expect(number).not.toBeNull;
        expect(number).not.toBeFalsy;
        expect(number).toBeTruthy;
        expect(number).toBeGreaterThan(9);
        expect(number).toBeLessThan(11);
        expect(number).toBeGreaterThanOrEqual(10);
        expect(number).toBeLessThanOrEqual(10);
        expect(number).toBeCloseTo(10.001, 1);
        expect(number).toHaveProperty("toString");
        expect(number);
    });
});

describe("Objects", ()=> {
    it("sould test jest assertions with objects", () => {
        const person = {name: "jean", age: 30};
        const anotherPerson = {... person};

        // expect(person).toBe(anotherPerson);
        expect(person).toEqual(anotherPerson);
        expect(person).toHaveProperty("age");
        expect(person).toHaveProperty("age", 30);
        expect(person.name).toBe("jean");

    });
});
