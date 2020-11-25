//* Aula 084 - ForEach

/*
    #Nota#
    _ Somente disponível em arrays;
    _ Somente itera sobre os valores.
    _ recebe uma função de callback
    _ Também recebe o valor, índice e array.
    _ 
*/

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

array1.forEach((valor, index, array)=>{
    console.log(valor, index)
})

let total = 0;
array1.forEach( (valor)=>total += valor);
console.log(total);
