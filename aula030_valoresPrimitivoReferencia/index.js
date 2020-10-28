//* Aula 30 - Valores primitivos e por referência

/*
    _ Primitivos (imutáveis) - string, nuber, boolean, undefined, null
    _ também existem os bigint e symbol
    _ dado é o valor, a variável é somento uma caixa que contém o valor.
*/

let nome = 'Luiz';
nome = 'Otávio';
console.log(nome);
//#Obs# apesar de trocar o que está escrito, não se altera o dado / valor primitivo

let a = 'A';
let b = a; // é feito uma cópia
console.log(a, b);

a ='Outra coisa';
console.log(a, b);
//_ b não se altera por ser uma cópia de a, então alterando a o b não é afetado.

/*
    _ Por Referência (mutável) - array, object , function
    ! são passados por referência
    _ O que na verdade quando são atribuidos a outras variáveis,
    _ significa que vão apontar para a mesma referência, o mesmo local
    _ na memória.
*/

let c = [1, 2, 3];
let d=c;    // d vai apontar para o mesmo lugar na memória
console.log(c,d);

c.push(4);
console.log(c,d);

//_ b é afetado, pois o locar na memória é o mesmo, então mudando por a ou por b, afeta ambos
//? exemplo
d.pop();
console.log(c,d);

//| para cópiar o valor e mudar o local apontado na memória

let e = [1, 2, 3];
let f= [...e];
e.push(4);
console.log(e,f);
