
/* eslint-disable @typescript-eslint/no-unused-vars */
//  * Aula 305 - Generics com interfaces e Type Alias

/*
    _Nota_
*/

interface PessoaProtocolo <T = string, U= number> {
  nome: T;
  sobrenome: T;
  idade: U
}

type PessoaProtocolo2 <T = string, U= number> = {
  nome: T;
  sobrenome: T;
  idade: U
}

const Aluno1: PessoaProtocolo = {
    nome: "Luiz",
    sobrenome: "miranda",
    idade: 30
};

const Aluno2: PessoaProtocolo<number, number> = {
    nome: 123,
    sobrenome: 456,
    idade: 30
};

const Aluno3: PessoaProtocolo2 = {
    nome: "Luiz",
    sobrenome: "miranda",
    idade: 30
};

const Aluno4: PessoaProtocolo2<number, number> = {
    nome: 123,
    sobrenome: 456,
    idade: 30
};

console.log(Aluno1, Aluno2);
console.log(Aluno3, Aluno4);
