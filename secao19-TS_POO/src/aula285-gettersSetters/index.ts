/* eslint-disable @typescript-eslint/no-unused-vars */
//  * Aula 285 - Getters e Setters em TypeScript

/*
    _Nota_
*/

export class Pessoa {
    constructor(
      private nome: string,
      private sobrenome: string,
      private idade: number,
      protected _cpf: string,
    ){
        this.cpf = _cpf;  //  _ garate que mesmo na atribuição inicial passe pelo setter
    }

    //  _ modo antigo de fazer
    //  _ usaria chamando como função da classe
    // setCpf(valor: string): void {
    //     this.cpf = valor;
    // }

    // getCpf(): string {
    //     return this.cpf.replace(/\D/g, "");
    // }

    //  _ Modo novo proposto pelo Js e Ts
    //  _ usa chamando como se fosse um atributo normal
    set cpf(cpf: string) {
        this._cpf = cpf;
    }

    get cpf(): string {
        return this._cpf.replace(/\D/g, "");
    }
}

const pessoa = new Pessoa("Jean", "Meira", 23, "123.456.789-11");
console.log(pessoa.cpf);
pessoa.cpf = "123.456.789-10";
console.log(pessoa.cpf);
