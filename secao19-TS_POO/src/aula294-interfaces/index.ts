//  * Aula 294 - Interface em TypeScript

/*
    _Nota_
    _ Interfaces são quase sempre iguais a type alias
    _ É uma espécie contrato ou definição para o objeto
    _ Interface são usadas para modelar objetos (uma forma)
    _ Também pode usar o type alias, mas no geral se usa
    _ interface (para POO)
    _ interface pode extender mais de uma outra interface
*/

interface TipoNome1 {
  nome: string;
}
interface TipoSobrenome1 {
  sobrenome: string;
}
interface TipoNomeCompleto1 {
  nomeCompleto(): string
}

interface TipoPessoa1 extends   TipoNome1 , TipoSobrenome1 , TipoNomeCompleto1{

}

class Pessoa3 implements TipoPessoa1 {
    constructor(
    public  nome: string,
    public  sobrenome: string,
    ){}

    nomeCompleto(): string{
        return this.nome + " " +this.sobrenome;
    }
}

const pessoaOBJ: TipoPessoa1 = {
    nomeCompleto() {
        return this.nome + this.sobrenome;
    },
    nome: "Jean",
    sobrenome: "meira (dentro do obj)"

};

const pessoa3 = new Pessoa3("Jean", "Meira");
console.log(pessoa3.nomeCompleto());

console.log(pessoaOBJ);
