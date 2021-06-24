//* Aula 243 - Começa com e termina com

/*
    @ https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
    
    _Nota_
    _ ^ no começo indica que começa com
    ! não pode estão demtro de parênteses, pois aí significa negação -> [^]
    _ $ termina com

    _ garante que não terá nada antes ou depois, ideal para uso de recepção de inputs
    _ do usuário. Para validações de campos de formulários.

    _ m - multiline -> flag que muda o comportamento do começa com e termina com
    _ faz o ^e $ ser por linha.
*/
const { cpfs2 } = require("../base");
const cpf = "254.224.887-45";
const expReng1 = /^(\d{3}\.){2}\d{3}\-\d{2}$/g;
const expReng2 = /^(\d{3}\.){2}\d{3}\-\d{2}$/gm;

console.log(cpf.match(expReng1));
console.log(cpfs2.match(expReng1));
console.log(cpfs2.match(expReng2));
