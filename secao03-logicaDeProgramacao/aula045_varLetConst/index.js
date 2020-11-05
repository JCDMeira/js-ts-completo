//* Aula 45 - Mais diferenças entre var, let e const

const verdadeira = true;

let nome = 'Jean';
var nome2 = 'Carlos';
console.log(nome, 'e', nome2);

//_ No mesmo escopo não se redeclara let, mas var pode.
//_ let tem escopo de bloco {... bloco}
//_ var só tem escopo de função

if(verdadeira){
    let nome = 'outro nome';    
    var nome2 = 'nome redeclarado';
//_ pode declarar com o mesmo nome, pois no bloco let tem outro escopo, portanto dentro é outra variável
    console.log(nome, 'e', nome2);
}
//_ se o bloco se depara com uma variável let, tentará buscar no bloco, e irá voltando até o escopo global.
//_ já o var, mesmo se for usado em blocos, estará redeclarando

console.log(nome, 'e', nome2);

/*
    _ funções tem blocos especiais que são isolados. Suas informações não podem ser vistas de fora.
    _ mesmo var se torna isolada, mas a função pode acessar variáveis e dados de fora.
*/

//! hoisting -> elevação

console.log(hoistingVar);   //? resultado ->  undefined

var hoistingVar = 1;
//_ aqui ele eleva a declaração, mas sem o valor definido dela.

console.log(hoistingLet);   //? erro
//let hoistingLet = 1;      //? resultado -> is not defined
//_ não ocorre a elevação de declaração nesse caso

