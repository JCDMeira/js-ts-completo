/* eslint-disable @typescript-eslint/no-unused-vars */
//  * Aula 317 - Decoradores de método (method decorator)

/*
    _Nota_
*/
function decorator(classPrototipe: any, nomeMetodo: string, descriptor: PropertyDescriptor): PropertyDescriptor | void {
    console.log(classPrototipe);
    console.log(nomeMetodo);
    console.log(descriptor);
    return {
        value: function(...args: string[]) {
            return args[0].toUpperCase();
        },
    };
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

  @decorator
  metodo(msg: string): string {
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
// pessoa.metodo = () => "eiiiiiiii";
const metodo = pessoa.metodo("Olá mundo");
console.log(metodo);
