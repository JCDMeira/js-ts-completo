/* eslint-disable @typescript-eslint/prefer-as-const */
// * Aula 267 - tipos literais

/*
    _Nota_
    _ tipos literais vão usar valores como tipos, sendo que esses são
    _ subtipos dos tipos.
*/

// eslint-disable-next-line prefer-const
let x = 10;
x= 0b1010;
console.log(x);

// x = "10"  //_ O TS não deixa mudar o tipo de x (tipo declarado)

const y = 10; //_ TS usa um subtipo de number, que é o valor 10, ele nunca vai mudar
console.log(y);

// eslint-disable-next-line prefer-const
let a: 100 = 100; //_ forçando a ter comportamento de const, usando o tipo literal 100
console.log(a);     //_ não é recomendado

//  _ outra forma de usar, usa asserção, e em alguns casos é preferível assim.
const a1= 100 as const ;
console.log(a1);

const pessoa ={
    nome: "Luiz" as const,  //  # Usa tipo literal "Luiz" e trava o valor de nome
    sobrenome: "Miranda"
};
console.log(pessoa);

function escolhaCor(cor: "vermelho" | "amarelo" | "azul"): string {
    return cor;
}
console.log(escolhaCor("vermelho"));

//  @ muda par Module mode
export default 1;
