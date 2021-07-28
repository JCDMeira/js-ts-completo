/*
escribe("testando alguma coisa", () => {
    it("should return one", ()=>{
        const number =1;
        expect(number).toBe(1);
    });

    describe("testando outra coisa", () =>{
        test("should return jean", ()=>{
            const nome ="jean";
            expect(nome).toBe("jean");
        });
    });

});

it("descrição do teste (IT)", ()=>{
    const number =1;
    expect(number).toBe(1);
});
test("descrição do teste (TESTE)", ()=>{
    const nome ="jean";
    expect(nome).not.toBe("não jean");
});
*/

import { Persistency } from "./persistency";

describe("Persistency", () => {
    afterEach(() => jest.clearAllMocks());

    it("Should return undefined", () => {
        //! System under test
        const sut = new Persistency();
        expect(sut.saveOrder()).toBeUndefined();
    });

    it("Should call console.log once", () => {
        const sut = new Persistency();
        const consoleSpy = jest.spyOn(console, "log");
        sut.saveOrder();
        expect(consoleSpy).toHaveBeenCalledTimes(1);
    });

    it("Should call console.log with 'Pedido salvo com sucesso'", () => {
        const sut = new Persistency();
        const consoleSpy = jest.spyOn(console, "log");
        sut.saveOrder();
        expect(consoleSpy).toHaveBeenCalledWith("Pedido salvo com sucesso");
    });
});
