/* eslint-disable @typescript-eslint/no-unused-vars */
//  * Aula 313 - Decorator de classes no TypeScript - introdução

/*
    _Nota_
    _ permite interceptar e alterar a formação da classe.
    _ podendo gerar alterações
    _ ao aderir um @(nome-do-decorator) o chamado da class
    _ automaticamente chama o decorator
*/

@decorator
export class Animal {
  constructor(public nome: string, public cor: string) {}
}

function decorator<T extends new (...args: any[])=> any>(target: T): T {
  return class extends target {
    cor: string;
    nome: string;

    constructor(...args: any[]) {
      super(...args);
      this.nome = this.inverte(args[0])
      this.cor = this.inverte(args[1])
    }

    inverte(valor: string): string {
      return valor.split("").reverse().join("");
    }
  };
}

// const AnimalDecorated = decorator(Animal)
// const animal = new AnimalDecorated("vaca", "roxo");

const animal = new Animal("vaca", "roxo");
console.log(animal);

