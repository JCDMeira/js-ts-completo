// * Aula 259 - tipo array

/*
    _Nota_
    _ pode criar com generics
    _ Arrat<T> ou T[]
*/

export function multiplicaArgs(...args: Array<number>): number {
    return args.reduce((ac, valor) => ac * valor, 1);
}

const result = multiplicaArgs(1, 2, 3);

console.log(result);

export function concatenaStrings(...args: string[]): string {
    return args.reduce((ac, valor) => ac + valor);
}

const concatenacao = concatenaStrings("a", "b", "c");

console.log(concatenacao);

export function upperCase(...args: string[]): string[] {
    return args.map((valor) => valor.toUpperCase());
}

const upper = upperCase("a", "b", "c");

console.log(upper);
