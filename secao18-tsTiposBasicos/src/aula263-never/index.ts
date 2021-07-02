// * Aula 263 - Tipo never

/*
    _Nota_
    _ também é um tipo de não valor
    _ indica que a função nunca vai retornar nada
    _ há dois casos que podem exemplificar isso
    _ um laço infinito e um erro.
*/

function criaErro(): never {
    throw new Error("Erro qualquer");
}

criaErro();
