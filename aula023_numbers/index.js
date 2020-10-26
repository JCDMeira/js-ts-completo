//* Aula 23 - Mais sobre números

let num1 =1;    // numbe
let num2 =2.5;  // number

console.log(num1 + num2);
console.log(num1.toString()+ ' e ' + num2.toString());
console.log(typeof num1);

//_ É realizado a contenação, mas o tipo do número permanece inalterável.

//? para converter -> num1 = num1.toString();

num1 = 15;
console.log(num1.toString(2));  //? representa o número em base binária.

num1 = 10.872158137674;
console.log(num1.toFixed(2));   //? limita o número de casas após a vírgula que será mostrado
//#obs# o número é arredondado.
//#aviso# recomenda-se fazer todos os cálculos e apenas usar esse artifício ao exibir o resultado.

console.log(Number.isInteger(num1));    //? o número é um tipo inteiro ?
//_ Retorna verdadeiro ou falso.

let temp = num1 * 'olá';
console.log(temp, Number.isNaN(temp));  //? a conta é inválida, retornando um NaN;

//! padrão IEEE 754-2008 -> para imprecisão

num1 = 0.7;
num2 =0.1;

console.log(num1+num2);     //? resultado -> 0.79999...

//? o mesmo que num1 + num2;
num1 += num2;  //? 0.8
num1 += num2;  //? 0.9
num1 += num2;  //? 1.0

console.log(num1);  //? mas da o resultado 0.9999...

num1 = num1.toFixed(2); //? fixa apenas duas casas;
console.log(num1);      //? o resultado da 1.00, parecendo correto.
console.log(Number.isInteger(num1), Number.isInteger(1.00));    //? aqui nota-se a diferença.

//| Para corrigir o problema devemos...
num1 = 0.7;
num2 =0.1;

num1 += num2;  //? 0.8
num1 += num2;  //? 0.9
num1 += num2;  //? 1.0

num1 = Number(num1.toFixed(2));     //? fixar as casas garantindo que será um número

console.log(num1);
console.log(Number.isInteger(num1));    //? só será inteiro se as casas após o ponto forem .00

//| outra forma seria trabalhar com contas.
//_ não somando números com vírgulas
num1 = 0.7;
num2 =0.1;

num1 = ((num1*100)+(num2*100))/100;  
console.log(num1);  //? 0.8

num1 = ((num1*100)+(num2*100))/100;  
num1 = ((num1*100)+(num2*100))/100;  

console.log(num1);
console.log(Number.isInteger(num1));