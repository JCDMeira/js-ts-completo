/*
    _ Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura
    _ de uma imagem (number).
    _ Retorne true se a imagem estiver no modo paisagem.
*/

const ePaisagem = (largura, altura)=>  largura > altura ? true : false;
console.log(ePaisagem(21,1));

//? por retornar apenas true e false é possível omitir o ternário, 
//? então ele checa a condição e retorna o resultado.

const ePaisagem2 = (largura, altura)=>  largura > altura;
console.log(ePaisagem2(21,1));