//* Aula 242 - Exercícios com CPFs e IPs (com solução)

/*
    @ https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
    
    _Nota_
    _ exercício deve buscar e separar os cpfs e ips

    _ ^ no começo indica que começa com
    _ $ termina com
*/

const { cpfs, cpfs2, ips } = require("../base");

// const expReng1 = /[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/g
// const expReng1 = /\d{3}\.\d{3}\.\d{3}\-\d{2}/g
const expReng1 = /(\d{3}\.){2}\d{3}\-\d{2}/g

// console.log(cpfs);
// console.log(cpfs.match(expReng1));

// const expReng2 = /^(25[0-5]|2[0-4][0-9]|1\d{2}|\d{2}|\d)(\.)/g
// const expReng2 = /^(25[0-5]|2[0-4][0-9]|\d{1,})(\.)/g

// const expReng2 = /^((25[0-5]|2[0-4][0-9]|1\d{2}|\d{2}|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|\d{2}|\d)/g
const expReng2 = /((25[0-5]|2[0-4][0-9]|1\d{2}|\d{2}|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|\d{2}|\d)/g
// console.log(ips);
console.log(ips.match(expReng2));

// for ( let i = 0; i <= 300; i++) {
//     const ip = `${i}.${i}.${i}.${i}`;
//     if(!ip.match(expReng2)) continue;
//     console.log(ip, ip.match(expReng2));
// }