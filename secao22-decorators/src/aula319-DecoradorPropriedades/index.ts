/* eslint-disable @typescript-eslint/no-unused-vars */
//  * Aula 319 - Decoradores de propriedades (properties decorator)

/*
    _Nota_
*/

function decorador(classPrototype: any, nome: string | symbol): any {
    let valorPropriedades: any;

    console.log(classPrototype);
    console.log(nome);
    return{
        get: () => valorPropriedades,
        set: (valor: any) => {
            if(typeof valor !== "string") return valorPropriedades = valor;
            valorPropriedades = valor.split("").reverse().join("");
        },
    };
}
export class UmaPessoa {
  @decorador
  nome: string;
  @decorador
  sobrenome: string;
  @decorador
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
      this.nome = nome;
      this.sobrenome = sobrenome;
      this.idade = idade;
  }

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
const metodo = pessoa.metodo("Olá mundo");
console.log(metodo);

