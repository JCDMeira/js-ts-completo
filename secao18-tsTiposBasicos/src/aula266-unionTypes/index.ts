// * Aula 266 - Union types

/*
    _Nota_
    _ mencionar que um parâmetro tem mais de um tipo
    _ ao usar union types o TS pede que você comprove
    _ que isso é uma ação pensada, portanto no local do uso
    _ você deve cobrir todas as possibilidades de uso
    _ no exemplo da função abaixo o retorno deve ser de number ou string
    _ então deve haver checagem para cobrir todos os casos.
    _ Ali foi usado uma checagem de tipos e um template literals que cobre os
    _ demais casos, pois se um não for number já entra ali.
    _ É possível  usar quantos tipos desejar. Só se atentar para como será usado
    _ no local, e pode ser que o TS exija provas que a ação é consiente.
*/

function addOrConcat(a: number | string, b: number | string): number | string {
    if( typeof a === "number" && typeof b === "number") return a + b;
    return `${a}${b}`;
}

console.log(addOrConcat(10, 20));
console.log(addOrConcat("10", "20"));
console.log(addOrConcat("10", 20));
