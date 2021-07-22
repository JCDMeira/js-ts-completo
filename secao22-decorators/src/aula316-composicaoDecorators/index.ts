/* eslint-disable @typescript-eslint/no-unused-vars */
//  * Aula 316 - Composição de Decorator

/*
    _Nota_
    @ https://www.typescriptlang.org/docs/handbook/decorators.html
*/
type Constructor = new (...args: any[])=> any;

function inverteNomeECor(param1: string, param2: string) {
    return function <T extends Constructor>(target: T): T {
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
        return valor.split("").reverse().join("") + " "  + param1 + " " + param2;
    }
        };
    };
}

function outroDecorador(param1: string){
    return function (target: Constructor) {
        console.log("sou o outro decorador" + " " + param1);
        return target;
    };
}

@outroDecorador("parâmetro do segundo decorador") //  # chamado segundo
@inverteNomeECor("valor1", "valor2") // # chamado primeiro
export class Animal {
    constructor(public nome: string, public cor: string) {
        console.log("Sou a classe");
    }
}

// const AnimalDecorated = decorator(Animal)
// const animal = new AnimalDecorated("vaca", "roxo");

const animal = new Animal("vaca", "roxo");
console.log(animal);
