/* eslint-disable @typescript-eslint/no-unused-vars */
//  * Aula 303 - Generics - Introdução aos tipos genéricos

/*
    _Nota_
*/

type FilterCallback <U> =  (value: U, index?: number, array?: U[])=> boolean;

export function meuFilter <T>(array: T[], callbackFn: FilterCallback<T> ): T[] {
    const novoArray = [];

    for (let i = 0; i < array.length; i++) {
        if(callbackFn(array[i])) {
            novoArray.push(array[i]);
        }
    }

    return novoArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayFiltradoOriginal = array.filter((value => value < 5));
console.log(arrayFiltradoOriginal);

const arrayFiltrado = meuFilter(array, (value => value < 5));
console.log(arrayFiltrado);
