//* Aula 123 - Módulos (1)

/*
    _Nota_
*/
const mod1 = require('./mod1');

//# é possí usar desestruturação também
// const {nome, sobrenome, falaNome} = require('./mod1');

// const falaNome = require('./mod1').falaNome; //# Se fosse importar só uma função

// const mod1 = require('./mod1');  //# se fosse pegar um função com base na importação
// const falaNome = mod1.falaNome;  //# do objeto todo.

//@ Módulos padrões do node não precisam do caminho.

console.log(mod1);
console.log(mod1.falaNome());
