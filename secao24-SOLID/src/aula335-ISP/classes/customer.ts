import { EnterpriseCustumerProtocol,IndividualCustumerProtocol } from "./interfaces/costumer-protocol";

export class IndividualCostumer implements IndividualCustumerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;

  constructor(
      firstName: string,
      lastName: string,
      cpf: string,
  ){
      this.firstName = firstName;
      this.lastName = lastName;
      this.cpf = cpf;
  }
}
export class EnterpriseCostumer implements EnterpriseCustumerProtocol{
  name: string;
  cnpj: string;

  constructor(
      name: string,
      cnpj: string,
  ){
      this.name = name;
      this.cnpj = cnpj;
  }
}
