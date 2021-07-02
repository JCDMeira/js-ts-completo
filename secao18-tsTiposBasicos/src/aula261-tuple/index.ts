// * Aula 261 - tipo tuple

/*
    _Nota_
    _ arrays com tipos bem específicos e tamanho definido
    - pode ter quantidade e tipos definidos (caso 1)
    - pode ter vários tamanhos (caso 2)
    - pode ter parâmetros opcionais com o ? (caso 3)
    - pode usar o rest operator para definir os tipos dos demais valores (caso 4)

    @ tuplas ainda são afetados por pop, push e métodos similares. O que quebra o comportamento

    - Então pode tornar a tupla imutável com o readonly (caso 5)

    @ então não será mais afetado por nenhum tipo de alteração
*/

const dadosCliente1: [number, string] = [1, "jean"];
const dadosCliente2: [number, string, string] = [1, "jean", "De Meira"];
const dadosCliente3: [number, string, string?] = [1, "jean"];
const dadosCliente4: [number, string, ...string[]] = [1, "jean"];
const dadosCliente5:readonly [number, string, ...string[]] = [1, "jean"];

dadosCliente1[0] = 100;
console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);
console.log(dadosCliente5);

//  # readonly
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const array1: readonly string[] = ["jean", "carlos"];
//_ uso do declarativo readonly em arrays

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const array2: ReadonlyArray<string> = ["jean", "carlos"];

//_ uso do declarativo readonly em arrays com generics

//@ Ambos não aceitam métodos que mudam seus valores
