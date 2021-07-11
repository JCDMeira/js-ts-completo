//  * Aula 293 - Implementando Type Alias em classes

/*
    _Nota_
*/

//  # Usando uma classe como tipo
// export abstract class TipoPessoa {
//   protected abstract nome: string;
//   protected abstract sobrenome: string;
//   protected abstract nomeCompleto(): string
// }

//  # usando um type alias
type TipoPessoa = {
  nome: string;
  sobrenome: string;
  nomeCompleto(): string
}
type TipoNome = {
  nome: string;
}
type TipoSobrenome = {
  sobrenome: string;
}
type TipoNomeCompleto = {
  nomeCompleto(): string
}

// class Pessoa extends TipoPessoa {  //  # para usar classe
class Pessoa implements TipoPessoa {
    constructor(
    public  nome: string,
    public  sobrenome: string,
    ){}

    nomeCompleto(): string{
        return this.nome + " " +this.sobrenome;
    }
}

//  _ É possível implementar mais de um tipo
class Pessoa2 implements TipoNome, TipoSobrenome, TipoNomeCompleto {
    constructor(
    public  nome: string,
    public  sobrenome: string,
    ){}

    nomeCompleto(): string{
        return this.nome + " " +this.sobrenome;
    }
}

const pessoa = new Pessoa("Jean", "Meira");
console.log(pessoa.nomeCompleto());

const pessoa2 = new Pessoa2("Jean", "Meira");
console.log(pessoa2.nomeCompleto());
