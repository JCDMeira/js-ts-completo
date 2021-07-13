/* eslint-disable @typescript-eslint/no-unused-vars */
//  * Aula 301 - Overload de métodos e funções em typeScript

/*
    _Nota_
*/

type Adder = {
  (x: number): number;
  (x: number, y: number): number;
  (...arg: number[]): number;
}

const adder: Adder = (x: number, y?: number, ...args: number[]) => {
    if(args.length > 0) return args.reduce((acc, valor) => acc + valor, 0) + x + (y || 0);
    return x + (y || 0);
};

console.log(adder(1));
console.log(adder(1, 2));
console.log(adder(1, 2, 3, 4));
