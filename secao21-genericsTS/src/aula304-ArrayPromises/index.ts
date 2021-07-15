/* eslint-disable @typescript-eslint/no-unused-vars */
//  * Aula 304 - Array e Promises são generics

/*
    _Nota_
*/

type MeuTipo = number;

const arrayNumeros: Array<number> = [ 1, 2, 3, 4, 5, 6];

async function promiseAsync() {
    return 1;
}

function minhaPromise(): Promise<MeuTipo> {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(1);
        }, 1000);
    });
}

promiseAsync().then((resultado) => console.log(resultado + 1));
minhaPromise().then((resultado) => console.log(resultado + 1));
