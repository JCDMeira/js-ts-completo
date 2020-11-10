//* Aula 48 - for clássico - estrutura de repetição

//#Nota# tais estruturas fazem ações repetidas, para evitar repetição de código.

console.log('Linha 0');
console.log('Linha 1');
console.log('Linha 2');
console.log('Linha 3');
console.log('Linha 4');
console.log('Linha 5');

for(let i=0; i<=5; i++){
    console.log(`Linha ${i} com repetição for`);
}
/*
    _ Estruturas de repetição precisam de uma variável de controle, normalmente usado o i
    _ Pois irá representar a palavra index, que significa indíce. Ela precisa ter valor inicial
    _ Então  é preciso usar uma comparação, pois a estrutura repete o código enquanto a pergunta 
    _ retornar true (verdadeiro).
    _ E por fim precisa de um incremento ou decremento, pois precisa ter mudanças no valor da variável
    _ de controle, se não a repetição é infinita.
    _ o i ou variável de controle pode começar de qualquer valor e a alteração pode ser de um em um ou de qualquer valor
    _ em qualquer valor.
    _ é possível iniciar i com valores negativos.
*/

const frutas = ['maçã', 'pêra', 'uva', 'Manga', 'laranja', 'Mamão'];

for(let i=0; i<frutas.length; i++){
    console.log(`Indíce ${i}: `,frutas[i]);
}