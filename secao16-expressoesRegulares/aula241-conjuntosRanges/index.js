//* Aula 241 - conjuntos e ranges

/*
    @ https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
    
    _Nota_
    _ tudo dentro de [] são conjuntos, e neles se pode usar ranges
    _ + define que pode ser em sequência.
    _ ^ é uma negação no início do conjunto
    _ [0-9] - range, nunca pode ser invertido
    _ [0-9a-zA-z] - múltiplos ranges, nunca pode ser invertido
*/

const { alfabeto } = require("../base");

console.log(alfabeto);
console.log(alfabeto.match(/[abc123]/g));  //  # só procura o conjunto
console.log(alfabeto.match(/[abc123]+/g));  //  # só procura o conjunto
console.log(alfabeto.match(/[^abc123]+/g)); //  # tudo menos o conjunto
console.log(alfabeto.match(/[0-9]/g));      //  # tudo dentro do conjunto, só que separado
console.log(alfabeto.match(/[0-9]+/g));     //  # tudo dentro do conjunto, em sequência
console.log(alfabeto.match(/[a-zA-Z0-9]+/g)); //    # múltiplas sequências
console.log(alfabeto.match(/[^a-zA-Z0-9]+/g)); //    # nega múltiplas sequências
console.log(alfabeto.match(/[\u00A0-\u00BA]+/g)); //    # busca range de caracteres unicode

//_ pode usar unicode para achar letras acentuadas
//_ ou indicar diratamente [Çã]

console.log(alfabeto.match(/\w+/g)); //    # igual ao que foi feito em múltiplas sequências
//! igual no sentido de equivalente
console.log(alfabeto.match(/\W+/g)); //    # igual ao que foi feito em negação múltiplas sequências
//! igual no sentido de equivalente

console.log(alfabeto.match(/\s+/g)); // # encontra todos os espaços
console.log(alfabeto.match(/\S+/g)); // # encontra tudo menos os espaços