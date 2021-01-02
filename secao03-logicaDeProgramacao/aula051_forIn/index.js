//* Aula 51 - For in - estrutura de repetição

const frutas = ['Pêra', 'Maça', 'uva'];
const pessoa = {
    nome: 'Jean',
    sobrenome: 'Meira',
    idade: 23,
}

//#nota# o for in lê os indíces ou chaves.

for(let indices in frutas){
    console.log(frutas[indices])
}

for(let chave in pessoa){
    console.log(chave,':', pessoa[chave]);
}