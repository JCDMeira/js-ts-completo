//* Aula 90 - Manipulando Proptotypes

/*
    #Nota#
    _ A manipulação dos prototypes permite criar todos os métodos gerados por
    _ constructor function centralizados em um único lugar, isso poupa recursos 
    _ de máquina e é mais performático.
    _ é possível setar um prototype em um objeto, o que torna o código ainda mais reutilizável.
    _ O sendo possível assim trabalhar com métodos de um objeto que vem de uma constructor em 
    _ outros objetos.
*/

//| exemplo 1
const objA = {
    chaveA: 'A'
}
const objB = {
    chaveB: 'B'
}
const objC = {
    chaveC: 'C'
}

Object.setPrototypeOf(objB, objA); //? -> muda a cadeia, mas no fim ainda chega em Object.prototype;
console.log(objB.chaveA);

Object.setPrototypeOf(objC, objB);
console.log(objC.chaveA, objC.chaveB);


//| exemplo 2
function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentualDeDesconto){
    this.preco = this.preco*(1 - (percentualDeDesconto/100));
    this.preco = this.preco.toFixed(2);
}

Produto.prototype.aumento = function(percentualDeAumento){
    this.preco = this.preco * (1 + (percentualDeAumento/100));
    this.preco = this.preco.toFixed(2);
}

const produto1 = new Produto('camiseta', 100);
const produto2 = new Produto('camiseta2', 100);
console.log(produto1);
produto1.desconto(10);
console.log(produto1);

console.log(produto2);
produto2.aumento(10);
console.log(produto2);

const produto3 = {
    nome: 'caneca',
    preco: 15
};
Object.setPrototypeOf(produto3, Produto.prototype);
console.log(produto3);
produto3.aumento(10);
console.log(produto3);

const produto4 = Object.create(Produto.prototype,{
    preco:{
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42,
    },
    tamanho:{
        writable: true,
        configurable: true,
        enumerable: true,
        value: 40,
    }
});
produto4.aumento(10);
console.log(produto4);
