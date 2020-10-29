//* Aula 24 - Objeto Math

/*
    _ Math é um objeto embutido que tem propriedades 
    _ e métodos para constantes e funções matemáticas. 
    _ Não é um objeto de função.
    _ Todas as propriedades e métodos de Math são estáticas.
*/

let num1 = 9.54578;

//| arredondamento
//_ Para baixo
let num2 = Math.floor(num1); //? arredondando para baixo.
console.log(num2);  //? resultado esperado -> 9;

//_ Para cima
num2 = Math.ceil(num1); //? arredonda pra cima.
console.log(num2);  //? resultado esperado ->  10;

//_ Para o que estiver mais próximo
num2 = Math.round(num1); //? arredonda para o mais próximo
console.log(num2);  //? resultado esperado -> 10

num1 = 9.44578;
num2 = Math.round(num1);
console.log(num2);  //? resultado esperado -> 9

num1 = 9.50;
num2 = Math.round(num1);
console.log(num2);  //? resultado esperado -> 10
//#obs# Se o número estiver na metade será considerado para cima

//| O maior e menor número de uma sequência
console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6));  //? resultado esperado -> 1500
console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6));  //? resultado esperado -> -50

//| gerando um número aleatório entre 0 e 1, sem incluir o 1;
console.log(Math.random());

//_ é possível trabalhar para gerar outros resultados
const aleatorio = Math.round(Math.random() * (10-5) + 5);
console.log(aleatorio); //? aleatório entre 5 e 10.

//| o Math tem constantes
console.log(Math.PI);   //? o pi = 3.14158...
console.log(Math.E)     //? o número de Euler = 2,71828...

//| Potenciação
console.log(Math.pow(2, 10));   //? 2 elevado a 10
//#obs# pode-se dizer que é o mesmo que 
console.log(2 ** 10);      //? 2 elevado a 10

//| Raiz
num1 = 9;
console.log(num1 ** (1/2));
console.log(Math.sqrt(num1));

//! Cuidado com divisões por 0, pois no Js isso é possível.
//? ex:
console.log(100 / 0); //? o número retornará infinity