//* Aula 236 - Começando com expressões regulares

/*
    @ https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
    
    _Nota_
    _  g - global (encontra todas as ocorrências)
    _  i - insensitive (não diferencia maiuscúlas e minúsculas)
    _  ( ) - divide em grupos
    _  | - ou
*/
const { texto } = require("../base");

const regExp1 = /(maria)(, hoje sua esposa)/;
const regExp2 = /(maria|joao|alguém)(, hoje sua esposa)/;
const found = regExp1.exec(texto);

// console.log(regExp1.test(texto));
// console.log(regExp1.exec(texto));

if( found ){
    console.log(found[0]);
    console.log(found[1]);
    console.log(found[2]);
} else {
    console.log("Não encontrado (null)");
}
