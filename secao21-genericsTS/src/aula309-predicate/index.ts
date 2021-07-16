
/* eslint-disable @typescript-eslint/no-unused-vars */
//  * Aula 309 - Type predicate (predicado de tipos)

/*
    _Nota_
*/

export function isNumber(value: unknown): value is number {
    return typeof value === "number";
}

console.log(isNumber("123"));
console.log(isNumber(123));

export function soma<T>(...args: T[]): number{
    const retorno = args.reduce((sum, value) => {
        if(isNumber(sum) && isNumber(value)) {
            return sum + value;
        }
        return sum;
    }, 0);

    return retorno;
}

console.log(soma(1, 2, 3));
console.log(soma(...[1, 2, 3, 4, "a", "b", 5]));
console.log(soma("a", "b"));

