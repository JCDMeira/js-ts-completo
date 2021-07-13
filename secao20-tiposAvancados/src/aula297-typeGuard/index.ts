/* eslint-disable @typescript-eslint/no-unused-vars */
//  * Aula 297 - Type Guard - refinando tipos

/*
    _Nota_
    _ Os tipe guards são como uma garantia de que o tipo
    _ é aquele, como os if's mostrados no código abaixo
    _ como se após a checagem de tipo, o tipo só pode
    _ ser aquele que a checagem atestou, e assim o typeScript
    _ já infere que o tipo é aquele, entendendo a dinâmica do
    _ código.
    _ Também pode criar uma chave passando o tipo para o objeto.
*/

export function add(a: unknown, b:unknown): number | string{
    if(typeof a === "number" && typeof b === "number") return a + b;
    return `${a} + ${b}`;
}

console.log(add(1, 2));
console.log(add("a", "b"));

type Pessoa = { tipo: "pessoa", nome: string};
type Animal = { tipo: "animal", cor: string};

type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
    constructor(public nome: string){}
    tipo: "pessoa" = "pessoa";
}

function mostraNome(obj: PessoaOuAnimal): void {
    // if("nome" in obj) console.log(obj.nome);
    // if(obj instanceof Aluno) console.log(obj.nome);
    switch(obj.tipo) {
    case "pessoa":
        console.log(obj.nome);
        return;
    case "animal":
        console.log("Isso é um animal",obj.cor);
        return;
    }
}

mostraNome(new Aluno("João"));
mostraNome({tipo:"animal",cor: "laranja"});
