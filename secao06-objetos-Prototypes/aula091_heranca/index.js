//* Aula 90 - Herança

/*
    #Nota#
    _ A herança permite abstrair e depois especificar.
    _ dessa forma se isola partes comuns do código, mas também atribuir partes específicas
    _ com isso, é possível pegar objetos diferentes como de camisetas e canecas, e assosciar 
    _ ambos como produtos, que conterão nome e preço em comum, além dos métodos de aumentar ou
    _ diminuir os preços. Mas a camiseta tem cor e a caneca tem material, que o outro objeto não tem
    _ Assim, permitesse associar ambos a um construtor Produto(), abstraindo o nome e preço, e
    _ depois especificar com adicionais no construtor Camiseta() e Caneca(), dentro do construtor
    _ específico se usa o Produto.call(this, nome, preco); referenciando o objeto atual com o construtor
    _ Produto e passando os argumentos para nome e preco nesse caso (que são necessários em Produto), 
    _ o call simula o new em criar um objeto vazio e fazer o this apontar pra ele, call é um metódo
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
Camiseta.prototype = Object.create(Produto.prototype);  //? associa os métodos e afins
Camiseta.prototype.constructor = Camiseta;  //? corrige o problema de mudança noconstrutor de origem

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
    _ O termo "Herança" é muito usado para descrever que as características de 
    _ um objeto são passadas para outro objeto. Assim como uma filha ou filho 
    _ pode herdar características da sua mãe ou pai (geneticamente). Por isso 
    _ estamos usando esse termo para descrever o comportamento desejado. 
    _ Além disso, a maioria das literaturas, incluindo as documentações (como MDN) 
    _ citam a palavra herança.

    _ Vamos continuar usando o termo "Herança" até o final do curso, porém, Javascript 
    _ não é uma linguagem que apresenta essa característica em específico, portanto não 
    _ existe "herança" aqui. O que ocorre, na verdade, é "delegação". Esse seria o termo
    _ mais correto para descrever "Herança" em JS.

    _ Mais especificamente no trecho:

    _ Camiseta.prototype = Object.create(Produto.prototype);
    _ Estamos, claramente, falando que o Camiseta.prototype é um novo objeto vazio que tem 
    _ como protótipo Produto.prototype. Dessa forma, estamos adicionando Camiseta.prototype
    _ na cadeia de protótipos de Produto. Por consequência, tudo o que não existir em 
    ! Camiseta nem em Camiseta.prototype será delegado para Produto.prototype  
    _ (e assim por diante até chegar no topo da cadeia de protótipos). Por isso vejo o termo 
    _ delegação como mais adequado para este comportamento.

    _ Novamente, vamos continuar usando o termo "Herança", mas achei que seria interessante
    _ que você soubesse disso neste momento.
*/