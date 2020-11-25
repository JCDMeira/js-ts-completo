//* Aula 083 - Filter + Map + Reduce

/*
    #Nota#
    _ É possível encadear os métodos, ao invez de usar um por um criando novas variáveis.
    _ Ao executar um método o resultado será passado para o próximo que está encadeado.
*/

//| exemplo 1
// -> filtrar pares
// -> dobrar os valores
// -> reduzir (somar todos)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const pares = numeros.filter((valor)=>valor % 2 === 0)
const dobro = pares.map((valor)=> valor*2)
const soma = dobro.reduce((acc,valor)=> acc+=valor)

console.log(pares);
console.log(dobro);
console.log(soma);

const resultado = numeros
    .filter((valor)=>valor % 2 === 0)
    .map((valor)=> valor*2)
    .reduce((acc,valor)=> acc+=valor)
console.log(resultado);