//* Aula 081 - map - mapeando o array

/*
    #Nota#
    _ Map() altera os valores do array original.
    _ retorna um array com exatamente o mesmo número de posições do original.
    _ só que com valores alterados.
    _ também funciona como filter, recebe índice, posição e array, 
    _ precisa de uma função de callback.
    _ retorna em um novo array
    ! cuidado que há casos que podem alterar o objeto original.
    ! Se isso for desejado é bom, caso não usar o spread para criar
    ! objetos intermediários.
    _ A única mudança é o retorno, que quer mudar os valores.
*/

//| exemplo 1
// dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const dobro = numeros.map((valor, indice, array)=>{
    return 2*valor;
});
console.log(dobro);

//#Obs# é possível retornar de modo simplificado se houve apenas uma linha de retorno.
const triplo = numeros.map((valor, indice, array)=> 3*valor);
console.log(triplo);

//| exemplo 2
// retorne apenas uma string com o nome das pessoas.
// remova apenas a chave 'nome do objeto
// adicione uma chave id em cada objeto.

const pessoas =[
    { nome: 'Luiz', idade: 62},
    { nome: 'maria', idade: 23},
    { nome: 'eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'rosana', idade: 32},
    { nome: 'wallace', idade: 47},
    { nome: 'Jean', idade: 23}
];

const nome = pessoas.map((valor)=> valor.nome);
console.log(nome);

const idades = pessoas.map((valor)=>{
    //delete valor.nome;
    //return valor;
    //_ podia ser também o retorno de um novo objeto.
    return {idade: valor.idade};
})
console.log(idades);
    //! Ao usar o primeiro caso do exemplo acima ele deletou na referência,
    //! com isso alterou o array original.

const comIds = pessoas.map((valor, index)=>{
    const novoObj = {...valor}
    novoObj.id = index;
    return novoObj;
})
console.log(comIds);

    //! Aqui o mesmo caso pode ocorrer, para evitar isso foi criado um novo 
    //! objeto, para que o original não fosse alterado.

console.log(pessoas);
