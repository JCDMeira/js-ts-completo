//* Aula 88 - Métodos úteis para objetos

/*
    #Nota#
    _ Object.values
    _ Object.entries
    _ Object.assign(des, any)
    _ Object.getOwnPropertyDescriptor(o, 'prop')
    _ ...spread

    #obs# já vimos
    _ Object.keys     -> retorna as chaves
    _ Object.freeze   -> congela o objeto
    _ Object.defineProperties -> define várias propriedades
    _ Object.defineProperty   -> define uma propriedade;

    ! Descrições
    _ spread espalha o objeto, o que deslinca do mesmo lugar da memória
    _ se puxar vários objetos com chaves iguais, vai manter o valor da última
    _chave lida ao puxar os objetos.
    
    _ Object.assign({}, produto) -> cria um objeto vazio e atribui o valor de produto nele
    _ pode aderir novos valores também, e é possível inserir mais de um objeto já existente no mesmo

    _ Object.getOwnPropertyDescriptor(o, 'prop') retorna os valores das propriedades, que são
    _ value: 'Caneca',
    _ writable: true,
    _ enumerable: true,
    _ configurable: true

    _ Object.values
    _ retorna os valores das chaves

    _ Object.entries
    _ vai servir para iterar no arrays, mas também retona cada par chave e valor em um array 
    _separado.

*/

//| copiando objetos.

const produto = {nome: 'Caneca', preco:1.8}
const outraCoisa = {...produto, material: 'Porcelana'} 

outraCoisa.nome = 'Camisa';
outraCoisa.preco = 2.5;

console.log(produto);
console.log(outraCoisa);

const caneca = Object.assign({}, produto,{material:'vidro'})
console.log(caneca);

//_ também é possível copiar de forma manual, cria uma chave e atribui diretamente o valor
//_ ex -> const exemplo = {nome: produto.nome}

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
console.log(Object.values(produto));

for(let entry of Object.entries(produto)){
    console.log(entry);
}
console.log(Object.entries(produto));