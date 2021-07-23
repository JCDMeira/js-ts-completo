/* eslint-disable @typescript-eslint/no-unused-vars */
//  * Aula 326 - Estendendo tipos de bibliotecas de terceiros
/*
    _Nota_
    @ https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html
*/
import _ from "./modulo";

const array = [100, 200, 300, 400];

// console.log(global.MINHAGLOBAL);

console.log(_.sum(array));
console.log(_.min(array));
console.log(_.max(array));
console.log(_.mean(array));
console.log(_.mul(array));
