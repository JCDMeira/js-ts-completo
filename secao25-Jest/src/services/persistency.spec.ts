describe("testando alguma coisa", () => {
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
