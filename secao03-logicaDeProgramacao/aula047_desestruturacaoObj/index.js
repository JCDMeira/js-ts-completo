//* Aula 47 - Atribuição via desestruturação (objetos)

const pessoa ={
    nome: 'Jean Carlos',
    sobrenome: 'De Meira',
    idade: 23,
    endereco:{
        rua: 'Rua legal',
        numero: 4,
    },
}

//_ Atribuição via desestruturação
//_ É possível setar valor padrão. Se não tiver valor é usado o padrão.
//_ Pode-se usar uma atribuição com nome diferente usando o exemplo de nome abaixo.
//_ também é possível usar o rest ...
const {nome: teste = 'Não encontrado', sobrenome, idade, ...rest } = pessoa;
console.log(teste, sobrenome, idade, rest);

const {endereco: {rua, numero:num}, endereco}= pessoa;
console.log(rua, num, 'e', endereco);