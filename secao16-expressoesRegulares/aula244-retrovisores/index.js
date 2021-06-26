//* Aula 244 - Retrovisores com match e replace

/*
    @ https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
    
    _Nota_
    _ $1 $2 $3 -> retrovisores
    _ é possível selecionar como se fossem variáveis
    _ o ?: evita do retrovisor ser contado
*/
const { html2 } = require("../base");

// console.log(html2.match(/<(\w+)[\s\S]*?>([\s\S]*?)<\/\1>/g));
console.log(html2.replace(/(<(\w+)(?:[\s\S]*?)>)([\s\S]*?)(<\/\2>)/g, "$1 HAHA$3HAHA $4"));
