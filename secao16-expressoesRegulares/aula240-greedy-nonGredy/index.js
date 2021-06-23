//* Aula 240 - Greedy e non-greedy (lazy)

/*
    @ https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
    
    _Nota_
    _ versão greedy e non-greedy dos quantificadores
*/

const { texto, arquivos, html } = require("../base");

console.log(html);
console.log(html.match(/<.+>.+<\/.+>/g));   //greedy
console.log(html.match(/<.+?>.+?<\/.+?>/g));   //non-greedy
