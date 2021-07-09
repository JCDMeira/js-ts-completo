/* eslint-disable @typescript-eslint/no-unused-vars */
//  * Aula 286 - Atributos e métodos estáticos

/*
    _Nota_
    _ Métodos estáticos não são vistos pela instância da classe
    _ Porém tem acesso pela classe.
*/

export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = "000.000.000-00";
  constructor(
      public nome: string,
      public sobrenome: string,
      public idade: number,
      public cpf: string,
  ){}

  metodoNormal(): void {
      console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);

  }

  static falaOi(): void {
      console.log("oi");
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
      return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao );
  }
}

const pessoa1 = new Pessoa("Jean", "Meira", 23, "123.456.789-11");
const pessoa2 =  Pessoa.criaPessoa("João", "Antônio");
console.log(pessoa1.cpf);
console.log(pessoa2);
console.log(Pessoa.cpfPadrao);
