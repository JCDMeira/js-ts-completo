/* eslint-disable @typescript-eslint/no-unused-vars */
//  * Aula 283 - super - Acesso à super classe

/*
    _Nota_
    _ Com a palavra super,  é possível acessar a classe que foi extendida
    _ e suas características imutáveis.
    _ é possível então fazer algo antes do método e então retornar o método
    _ da classe super, ou ainda salvar o resultado do método em uma constante
    _ e adicionar modificadores no return da sub-classe.
*/

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
    constructor(
        nome: string,
        sobrenome: string,
        idade: number,
        cpf: string,
        public sala: string
    ){
        super(nome, sobrenome, idade, cpf);
    }

    getCompleto(): string {
        console.log("fazendo algo antes");
        return super.getCompleto();
    }
}

export class Cliente extends Pessoa {
    getCompleto(): string {
        const result = super.getCompleto();
        return result + "heyyyyyy";
    }
}

const pessoa = new Pessoa("Jean", "Meira", 23, "111.111.111-11");
const aluno = new Aluno("Jean", "Meira", 23, "111.111.111-11", "0001");
const cliente = new Cliente("Jean", "Meira", 23, "111.111.111-11");

console.log(pessoa.getCompleto());
console.log(aluno.getCompleto());
console.log(cliente.getCompleto());

