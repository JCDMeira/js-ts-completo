/* eslint-disable @typescript-eslint/no-unused-vars */
//  * Aula 296 - Declaration merging em interfaces

/*
    _Nota_
    _ não pode ter conflito de nome com um type e uma
    _ interfac, mas pode haver duas interfaces com
    _ nome iguais.
    _ Ao usar duas interfaces de nomes iguais acontece
    _ um fenômeno chamado de declaration merging, ou seja,
    _ ambos os objetos são unidos em um objeto maior, e todos
    _ que usarem a interface vão precisar ter todas as características
    _ aprensentadas na junção de ambas interfaces.
*/

type Pessoa296 = {
  nome: string;
}

//  # da erro, conflitando com o typ
// interface Pessoa296 {
//   sobrenome: string;
// }

interface PessoaAgora {
  readonly nome: string;
}

interface PessoaAgora {
  readonly sobrenome: string;
}

interface PessoaAgora {
  readonly enderecos: string[];
}

interface PessoaAgora {
  readonly idade?: number;
}

const pessoaAgora: PessoaAgora = {
    nome: "jean",
    sobrenome: "meira",
    enderecos: ["Av. Brasil"]
};

console.log(pessoaAgora);
