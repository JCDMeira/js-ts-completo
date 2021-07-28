import { EnterpriseCustomer, IndividualCustomer } from "./customer";

const createIndividualCustomer= (firstName: string , lastName: string, cpf: string): IndividualCustomer => {
    return new IndividualCustomer(firstName, lastName, cpf);
};

const createEntrepriceCustumer= (name: string ,cnpj: string): EnterpriseCustomer => {
    return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe("IndividualCustomer", () => {

    it("Should have firstName, lastName and cpf", () => {
        //! System under test
        const sut = createIndividualCustomer("Jean", "Meira", "111.111");
        expect(sut).toHaveProperty("firstName", "Jean");
        expect(sut).toHaveProperty("lastName", "Meira");
        expect(sut).toHaveProperty("cpf", "111.111");
    });

    it("Should have methods to get name and idn for individual customers", () => {
        //! System under test
        const sut = createIndividualCustomer("Jean", "Meira", "111.111");
        expect(sut.getName()).toBe("Jean Meira");
        expect(sut.getIDN()).toBe("111.111");
    });
});

describe("EnterpriseCustomer", () => {

    it("Should have name and cnpj", () => {
        //! System under test
        const sut = createEntrepriceCustumer("Domia", "222");
        expect(sut).toHaveProperty("name", "Domia");
        expect(sut).toHaveProperty("cnpj", "222");
    });

    it("Should have methods to get name and idn for enterprice customers", () => {
        //! System under test
        const sut = createEntrepriceCustumer("Domia", "222");
        expect(sut.getName()).toBe("Domia");
        expect(sut.getIDN()).toBe("222");
    });
});
