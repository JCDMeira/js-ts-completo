/* eslint-disable @typescript-eslint/no-unused-vars */
//  * Aula 300 - Usando this como tipo

/*
    _Nota_
    _ usa um espelhamento de classes, em que
    _ uma chave de um objeto type é usado para
    _ definir o valor de outro.
*/

type Veiculo = {
  marca: string;
  ano: string;
}

type Car = {
  brand: Veiculo["marca"];
  year: Veiculo["ano"];
  name: string;
}

const carro: Car = {
    brand: "Ford",
    year: "2020",
    name: "Nome"
};
