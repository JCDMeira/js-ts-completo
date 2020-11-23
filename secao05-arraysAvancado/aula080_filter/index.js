//* Aula 080 - Filter - filtrando o array

/*
    #Nota#
    _ filter é somente para arrays.
    _ Não edita o valor do array original.
    _ Ela recebe a função de callback, que irá iterar sobre todas as posições do array.
    _ a função de callback deve retornar true ou false, true quando o elemento deve ser adicionado
    _ ao novo array, e false quando não deve.
    _ Se a função for usada apenas por um filter e não se repetir em mais lugares, é mais interessante
    _ usar dentro do filter() como uma função anônima. Ou ainda uma arrow function.
    _ os parametros que não são usados podem ser omitidos também.
    _ O return é de apenas uma linha, também pode ser simplificado, omitindo a palavra return
    _ e tirando as chaves do código.
    _ exemplo:
    _       .filter((valor)=> valor > 10)
    ! filter retorna sempre um array, com a mesma quantidade de elementos do original ou menos.
*/

//| exemplo 1
// retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function callbackFilter(valor, indice, array){
    return valor > 10;
}

const numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados);

//| exemplo 2
// retorne as pessoas que tem o nome com 5 letras ou mais
// retorne as pessoas com mais de 50 anos.
// retorne as pessoas cujo nome termina com a.

const pessoas =[
    { nome: 'Luiz', idade: 62},
    { nome: 'maria', idade: 23},
    { nome: 'eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'rosana', idade: 32},
    { nome: 'wallace', idade: 47},
    { nome: 'Jean', idade: 23}
];

const pessoasComNomeGrande = pessoas.filter((valor)=> valor.nome.length >= 5);
console.log(pessoasComNomeGrande);

const pessoasComMaisDe50Anos = pessoas.filter((valor)=> valor.idade > 50);
console.log(pessoasComMaisDe50Anos);

const pessoasComNomeTerminadosEmA = pessoas.filter((valor)=> {
    return valor.nome.toLowerCase().endsWith('a');
})
console.log(pessoasComNomeTerminadosEmA);
