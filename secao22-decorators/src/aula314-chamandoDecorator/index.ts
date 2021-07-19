/* eslint-disable @typescript-eslint/no-unused-vars */
//  * Aula 314 - Quando o decorator de classe é chamado

/*
    _Nota_
    _ Quando a classe é criada o decorador já é chamado
*/

@inverteNomeECor
export class Animal {
    constructor(public nome: string, public cor: string) {
        console.log("Sou a classe");
    }
}

function inverteNomeECor<T extends new (...args: any[])=> any>(target: T): T {
    console.log("Sou o decorador e recebi: ", target);

    return class extends target {
    cor: string;
    nome: string;

    constructor(...args: any[]) {
        super(...args);
        this.nome = this.inverte(args[0]);
        this.cor = this.inverte(args[1]);
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

