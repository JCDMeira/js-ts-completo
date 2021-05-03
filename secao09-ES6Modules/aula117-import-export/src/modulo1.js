//_ também é possível exportar diretamente na declaração
export const nome = "Jean";
export const sobrenome = "Meira";
export const idade = 23;

export default function soma(x,y){
    return x + y;
}

export class Pessoa{
    constructor(nome,sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

// _ uma das formas de fazer uma exportação
//? export{nome as nome2, sobrenome, idade, soma};