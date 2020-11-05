//* Aula 46 - Atribuição via desestruturação (Arrays)

//? ex:
let a = 'A';    //B
let b = 'B';    //C 
let c = 'C';    //A

const letras = [b, c, a];
[a, b, c]=letras;

console.log(a, b, c);

//| mais detalhes

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//const primeiroNum = num[0];

const [primeiro, , terceiro, ...resto] = num;
console.log(primeiro, terceiro, resto);
/* 
    #nota# 
    _ A desestruturação pega como se fosse as possições, comendando no primeiro indíce.
    _ e atribui a cada elemento contido no array a esquerda.
    _ se quiser pular valores precisa deixar espaços vazios.
    _ O operador ...(nomeDaVarivel) faz com que tudo que não foi atribuindo ainda
    _ seja salvo na variável.
    _ Todos os elementos citados no array a esquerda terão o tipo que foi usado para declarar,
    _ podendo ser let ou const (no caso todos são const)
    _ o operador ... tem o nome de rest (rest operator), 
    _ se usar em contexto diferente pode se chamar spread
*/


//| atribuição por desestruturação com arrays multiplos

const num2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(num2[1][2]) ;   //? resultado -> 6
//_ Para acessar elementos de um array dentro de um array.

const [, [, , seis]] = num2;
console.log(seis);
