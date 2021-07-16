
/* eslint-disable @typescript-eslint/no-unused-vars */
//  * Aula 307 - Generics com classes (estrutura de dados pilha)

/*
    _Nota_
    _ quando se chama uma função ou cria uma classe os tipos só são inferidos
    _ acaso sejam enviados junto, se for criado posteriormente interno a classe/função
    _ pode ser que não seja inferido, então deve-se passar explicitamente ao usar.
    _ como no caso do new Pilha que declara o tipo como number.
*/

// export class Pessoa<T, U> {
//     constructor(public nome: T, public idade: U){}
// }

// const pessoa1 = new Pessoa ("Luiz", 30);
// const pessoa2 = new Pessoa (["Luiz"], 30);
// const pessoa3 = new Pessoa ("Luiz", {idade: 30});
// const pessoa4 = new Pessoa<string, number> ("Luiz", 30);

export class Pilha<T> {
  private contador = 0;
  private elementos: {[k: number]: T} = {};

  push(elemento: T): void{
      this.elementos[this.contador] = elemento;
      this.contador++;
  }

  pop(): T | void{
      if(this.estaVazia()) return undefined;

      this.contador--;
      const elemento = this.elementos[this.contador];
      delete this.elementos[this.contador];
      return elemento;
  }

  estaVazia(): boolean {
      return this.contador === 0;
  }

  tamanho(): number {
      return this.contador;
  }

  mostrarPilha(): void {
      for(const chave in this.elementos) {
          console.log(this.elementos[chave]);

      }
  }
}

const pilha = new Pilha<number>();
pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);
pilha.mostrarPilha();
pilha.pop();
pilha.mostrarPilha();
