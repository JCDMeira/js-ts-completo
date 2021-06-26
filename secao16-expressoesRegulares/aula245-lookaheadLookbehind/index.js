//* Aula 245 - Lookahead e Lookbehind (Lookaround)

/*
    @ https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
    
    _Nota_
    _ 
*/
const { lookahead } = require("../base");

// console.log(lookahead);
// console.log(lookahead.match(/.+[^in]active$/gim));

//_ positive lookahead (frases que tem active)
// console.log(lookahead.match(/.+(?=[^in]active)/gim));

//_ positive lookahead (frases que tem inactive)
// console.log(lookahead.match(/.+(?=\s+inactive)/gim));

//_ negative lookahead (frases que não tem inactive)
// console.log(lookahead.match(/^(?!.+[^in]active).+$/gim));

//_ negative lookahead (frases que não tem inactive)
// console.log(lookahead.match(/^(?!.+inactive).+$/gim));

//_ positive lookbehind (frases começam com online)
// console.log(lookahead.match(/(?<=ONLINE\s+)\S+.*/gim));

//_ negative lookbehind (frases não começam com online)
console.log(lookahead.match(/^.+(?<!online.+)$/gim));

const cpf = `
012.250.796-10
000.000.000-01
111.111.111-11
999.999.999-99
555.555.555-55
147.285.963-10
aaa.bbb.ccc-dd
`

console.log(cpf.match(/^(?!^(\d)\1{2}\.\1{3}\.\1{3}-\1{2}$)\d{3}\.\d{3}\.\d{3}\-\d{2}$/gm));
