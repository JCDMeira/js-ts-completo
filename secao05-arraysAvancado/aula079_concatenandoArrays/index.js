//* Aula 079 - Concatenando arrays

/*
    #Nota#
    _ .concat()  permite concatenar arrays, podendo ser eles alogados em variáveis/constantes
    _ arrays literais, ou mesmo array com algum elemento.
*/

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = array1.concat(array2, [7, 8, 9], 'Jean');
console.log(array3);

const array4 = [...array1, ...array2, 'Jean', ...[7, 8, 9]];
console.log(array4);
