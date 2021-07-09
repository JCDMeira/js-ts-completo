/* eslint-disable @typescript-eslint/no-unused-vars */
//  * Aula 282 - Herança com TypeScript

export class Pessoa {
    constructor(
        public nome: string,
        public sobrenome: string,
        private idade: number,
        protected cpf: string,
    ){}

    getIdade(): number{
        return this.idade;
    }

    getCpf(): string {
        return this.cpf;
    }

    getCompleto(): string {
        return this.nome + " " + this.sobrenome;
    }
}

export class Aluno extends Pessoa {
    getCompleto(): string {
        return "Isso vem do aluno: " + this.nome + " " + this.sobrenome;
    }
}
export class Cliente extends Pessoa {
    getCompleto(): string {
        return "Isso vem do cliente: " + this.nome + " " + this.sobrenome;
    }
}

const pessoa = new Pessoa("Jean", "Meira", 23, "111.111.111-11");
const aluno = new Aluno("Jean", "Meira", 23, "111.111.111-11");
const cliente = new Cliente("Jean", "Meira", 23, "111.111.111-11");

console.log(pessoa);
console.log(aluno);
console.log(cliente);

