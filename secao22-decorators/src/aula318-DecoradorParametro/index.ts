/* eslint-disable @typescript-eslint/no-unused-vars */
//  * Aula 318 - Decoradores de parâmetro (parameter decorator)

/*
    _Nota_
*/

function decorador(classProototype: any, nomeMetodo: string | symbol, index: number): any {
    console.log(classProototype);
    console.log(nomeMetodo);
    console.log(index);

}

export class UmaPessoa {
  nome: string;
  sobrenome: string;
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
      this.nome = nome;
      this.sobrenome = sobrenome;
      this.idade = idade;
  }

  metodo(@decorador msg: string): string {
      return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  get nomeCompleto(): string {
      return this.nome + " " + this.sobrenome;
  }

  set nomeCompleto(valor: string) {
      const palavras = valor.split(/\s+/g);
      const primeiroNome = palavras.shift();
      if (!primeiroNome) return;
      this.nome = primeiroNome;
      this.sobrenome = palavras.join(" ");
  }
}

const pessoa = new UmaPessoa("Luiz", "Otávio", 30);
const metodo = pessoa.metodo("Olá mundo");
console.log(metodo);

