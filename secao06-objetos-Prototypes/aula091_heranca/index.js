//* Aula 91 - Herança

/*
    #Nota#
    _ A herança permite abstrair e depois especificar.
    _ dessa forma se isola partes comuns do código, mas também atribuir 
    _ partes específicas com isso, é possível pegar objetos diferentes 
    _ como de camisetas e canecas, e assosciar ambos como produtos, 
    _ que conterão nome e preço em comum, além dos métodos de aumentar ou
    _ diminuir os preços. Mas a camiseta tem cor e a caneca tem material, 
    _ que o outro objeto não tem. Assim, permitesse associar ambos a um 
    _ construtor Produto(), abstraindo o nome e preço, e depois especificar
    _ com adicionais no construtor Camiseta() e Caneca(), dentro do construtor
    _ específico se usa o Produto.call(this, nome, preco); referenciando o 
    _ objeto atual com o construtor. Produto e passando os argumentos para
    _ nome e preco nesse caso (que são necessários em Produto), o call simula 
    _ o new em criar um objeto vazio e fazer o this apontar pra ele, call é um metódo
    _ presente em toda função.
*/

//produto -> aumento e desconto
// camiseta = cor , caneca = material

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);  
//? associa os métodos e afins
Camiseta.prototype.constructor = Camiseta;  
//? corrige o problema de mudança no construtor de origem

function Caneca(nome, preco, material){
    Produto.call(this, nome, preco);
    this.material = material;
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const camiseta = new Camiseta('regata', 7.5, 'preta');
console.log(camiseta);
camiseta.aumento(10);
console.log(camiseta);

const caneca = new Caneca('caneca de café', 10.0, 'porcelana');
console.log(caneca);
caneca.aumento(10);
console.log(caneca);

/*
    #Nota explicativa passada pelo professor#
    _ O termo "Herança" é muito usado para descrever que as 
    _ características de um objeto são passadas para outro objeto. 
    _ Assim como uma filha ou filho pode herdar características da
    _ sua mãe ou pai (geneticamente). Por isso estamos usando esse 
    _ termo para descrever o comportamento desejado. 
    _ Além disso, a maioria das literaturas, incluindo as documentações 
    _ (como MDN) citam a palavra herança.

    _ Vamos continuar usando o termo "Herança" até o final do curso, 
    _ porém, Javascript não é uma linguagem que apresenta essa característica 
    _ em específico, portanto não existe "herança" aqui. O que ocorre, 
    _ na verdade, é "delegação". Esse seria o termo mais correto para 
    _ descrever "Herança" em JS.

    _ Mais especificamente no trecho:

    _ Camiseta.prototype = Object.create(Produto.prototype);
    _ Estamos, claramente, falando que o Camiseta.prototype é um novo objeto
    _ vazio que tem como protótipo Produto.prototype. Dessa forma, estamos adicionando 
    _ Camiseta.prototype na cadeia de protótipos de Produto. Por consequência, 
    _ tudo o que não existir em
    ! Camiseta nem em Camiseta.prototype será delegado para Produto.prototype  
    _ (e assim por diante até chegar no topo da cadeia de protótipos). 
    _ Por isso vejo o termo delegação como mais adequado para este comportamento.

    _ Novamente, vamos continuar usando o termo "Herança", mas achei que 
    _ seria interessante que você soubesse disso neste momento.
*/