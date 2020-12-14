//* Aula 98 - Criando Classes.

/*
    #Nota#
    _ A criação remete ao mesmo padrão de uma constructor function, mas usa o class
    _ Criação de métodos não precisam de ; e também são adicionados diretamente ao 
    _ prototype da classe em questão.
    _ A diferença é que o constructor será uma classe.
*/

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} está falando`);
    }
    comer(){
        console.log(`${this.nome} está comendo`);
    }
    beber(){
        console.log(`${this.nome} está bebendo`);
    }
}
const p1 = new Pessoa('Jean', 'Meira');

console.log(p1);
