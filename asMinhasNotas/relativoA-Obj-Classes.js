//* Resumo de pontos importantes

//| Funções imediatas ou IIFE

console.log();
console.log();
console.log("------ Funções imediatas (IIFE) ------");
console.log();
console.log();

//_ IIFE -> Immediately Invoked Function Expression 
/* 
    _características:
        - envolve o escopo protegendo o escopo global
        - são anônimas e auto invocadas
        - não poder ser chamadas e por isso não tocam o escopo global
        - estrutura envolvida por () e após termino é inserido () também
        - o () inserido ao final pode receber paramêtros
*/

(function (idade) {
    const nome = 'Jean Meira';
    console.log(nome, ':', idade);
}(23));

//| Factory functions

console.log();
console.log();
console.log("------ Factory function ------");
console.log();
console.log();

/* 
    _características:
        - retorna um objeto
        - valores que comporão o objeto são passados como argumentos na chamada da função
        - pode usar getter e setter
        - getter obtém algum valor do objeto, pode trabalhar formatações nos dados e devolver uma informação
        - setter aplica algum dado as variáveis.
*/

function criaPessoa(nome, sobrenome, idade) {

    return {
        nome,   //# omissão do par chave e valor por se tratar de chave ter o mesmo nome do valor
        sobrenome,
        idade,

        //# Getter

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        //# Setter

        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        }
    }
}

const p1 = criaPessoa('Jean', 'Meira', 23);
console.log(p1);
console.log("Nome antes do setter: ", p1.nomeCompleto);   //# nome obtido pelo getter antes do setter
p1.nomeCompleto = "Jean Carlos De Meira";   //# setando o nome pelo método setter
console.log("Nome depois do setter: ", p1.nomeCompleto);   //# nome obtido pelo getter depois do setter


//| Constructor functions

console.log();
console.log();
console.log("------ Constructor function ------");
console.log();
console.log();

/* 
    _características:
        - criam objetos
        - não precisa retornar, pois o objeto será criado pelo construtor
        - precisa usar o this para referênciar as variáveis dentro
        - o nome da função deve começar com letra maiúscula
        - deve usar o construtor new para criar novos objetos 
        -new cria uma objeto vazio {} 
        - new também atrela o this ao objeto. e retorna já o this que representa o objeto.
        - se definida conforme a Pessoa2 pode se determinar como cada chave se comporta quanto a:
            - enumerable    -> mostra a chave
            - value         -> atribui o valor
            - writable      -> pode alterar ou não o valor
            - configurable  -> pode apagar, editar ou reconfigurar a chave
*/

function Pessoa(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

const p2 = new Pessoa('Jean', 'Meira', 23);
console.log(p2);


//| travar mudanças nos valores da referência do objeto.

console.log();
console.log();
console.log('------ travar mudanças nos valores da referência do objeto. [.freeze(obj)] ------');
console.log();
console.log();

//_ Não permite nem mudanças nos valores das chaves.

p2.nome = "Jean Carlos De"    //# vai mudar
console.log(p2);
Object.freeze(p2);
p2.nome = "alguma coisa"    //# não vai mudar
console.log(p2);

//@ pode receber ser devinida usando Object.defineProperties e Object.defineProperty

//| Constructor function + defineProperty(ies).

console.log();
console.log();
console.log('------ Constructor function + defineProperty(ies) ------');
console.log();
console.log();

function Pessoa2(nome, sobrenome, idade) {
Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true,
        },
        sobrenome: {
            enumerable: true,
            value: sobrenome,
            writable: true,
            configurable: true,
        }
    });

    Object.defineProperty(this, 'idade', {
        enumerable: true,
        // value: idade,
        // writable: false,
        configurable: false,
        get: function () {
            return idade;
        },
        set: function (valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Um valor numérico é esperado');
            }
            idade = valor;
        }
    });
}

const p3 = new Pessoa2('Jean', 'Meira', 23);
console.log(p3);
console.log(p3.idade);
p3.idade = 24;
console.log("Atualizando idade", p3.idade);

/*
    _ Perceba que quando se usa getter e setter não se define a propriedade
    _ na definições de propriedade, pois elas serão acessadas pelo get e set.
    _ E o Object.defineProperties recebe o this e um objeto de configurações
    _ onde a chave é o nome da propriedade e o valor vai ser um objeto com as 
    _ propriedades em si. Servindo para várias propriedades de uma vez.
    _ enquanto o  Object.defineProperty recebe o this, o nome da propriedade 
    _ envolvido entre '' e um objeto configurando a própria propriedade.
*/

//| Prototypes

console.log();
console.log();
console.log('------ Constructor com prototype ------');
console.log();
console.log();

/*
    _características:
        - O prototype é o protótipo que é usado para se referir 
        - ao que for criado pela primeira vez, que serve de modelo
        - ou molde para futuras criações
        - Serve para passar propriedades e métodos de um objeto para 
        - outro.
        - Todos os objetos tem uma referência interna para um protótipo
        - chamado de (__proto__).
        - A grande fantagem de se usar o prototype é que o que for 
        - criado no prototype não está em todo e qualquer método criado 
        - pelo construtor em si, porém pode ser acessado por todos objetos
        - construídos atráves do __proto__.
        _ O código abaixo demonstra objetos criados com a função construtora
        _ CriaPessoa quando o método nomeCompleto dentro da função está
        _ descomentado. 
        ! Perceba que cada objeto retornado tem o método nomeCompleto.
        -//?        |       Código      |
        -//?
        -//? CriaPessoa {
        -//? nome: 'Jean',
        -//? sobrenome: 'Meira',
        -//? idade: 23,
        -//? nomeCompleto: [Function (anonymous)]
        -//? }
        -//? CriaPessoa {
        -//?   nome: 'Fulano',
        -//?   sobrenome: 'de tal',
        -//?   idade: 23,
        -//?   nomeCompleto: [Function (anonymous)]
        -//? }
        -//?
        _ Já esse segundo a seguir demonstra objetos criados com a mesma
        _ função construtora (CriaPessoa), mas agora o método nomeCompleto
        _ não estã dentro da função, mas sim anexado ao prototipe.
            -//?    |       Anexando o método ao prototype      |
            -//?
            -//? CriaPessoa.prototype.nomeCompleto = function(){
            -//? return this.nome + ' ' + this.sobrenome;
            -//? };
            -//?
        _ Agora ao executar o código comentando o método escrito internamente
        _ a funcção CriaPessoa teremos um resultado diferente.
        ! Perceba que cada objeto retornado não tem o método nomeCompleto.
        -//?        |       Código      |
        -//?
        -//? CriaPessoa { nome: 'Jean', sobrenome: 'Meira', idade: 23 }
        -//? CriaPessoa { nome: 'Fulano', sobrenome: 'de tal', idade: 23 }
        -//?
        _ mas o método ainda é acessível a ambos os objetos
        -//?        |       Código      |
        -//?
        -//? console.log(pessoa1.nomeCompleto(), ' e ', pessoa2.nomeCompleto());
        -//?
        -//?        |       Resultado      |
        -//?
        -//?    --> Jean Meira  e  Fulano de tal
        -//?
        _ Anexar métodos ou mesmo atributos que serão muito repetidos
        _ durante o código atimiza o código e o deixa mais perfomático.
        - exexmplo: imagina um e-commerce com uma função de desconto para
        - os produtos, onde você passa o valor de desconto e ela retorna o 
        - preço após o desconto e de quanto foi a economia. 
        - Agora imagine que esse e-commerce tem 50 mil produtos diferentes
        - se eu tiver um objeto construído para cada produto, teria na memória
        - 50 mil métodos iguais, mas ao usar o prototype teria apenas um, que
        - seria acessível para todos os 50 mil produtos.

*/

function CriaPessoa(nome, sobrenome, idade) {

    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    // this.nomeCompleto = ()=> this.nome + ' ' + this.sobrenome;
}

CriaPessoa.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome;
};

const pessoa1 = new CriaPessoa('Jean', 'Meira', 23)
const pessoa2 = new CriaPessoa('Fulano', 'de tal', 23)

console.log(pessoa1);
console.log(pessoa2);

console.log();

console.log(pessoa1.nomeCompleto(), ' e ', pessoa2.nomeCompleto());

//| Herança

console.log();
console.log();
console.log('------ Herança ------');
console.log();
console.log();

/*
    _características:
        - O termo "Herança" é muito usado para descrever que as 
        - características de um objeto são passadas para outro objeto.
        - A herança permite abstrair e depois especificar.
        - dessa forma se isola partes comuns do código, mas também atribuir 
        - partes específicas com isso, é possível pegar objetos diferentes 
        - como de camisetas e canecas, e assosciar ambos como produtos, 
        - que conterão nome e preço em comum, além dos métodos de aumentar ou
        - diminuir os preços. Mas a camiseta tem cor e a caneca tem material, 
        - que o outro objeto não tem. Assim, permitesse associar ambos a um 
        - construtor Produto(), abstraindo o nome e preço, e depois especificar
        - com adicionais no construtor Camiseta() e Caneca(), dentro do construtor
        - específico se usa o Produto.call(this, nome, preco); referenciando o 
        - objeto atual com o construtor. Produto e passando os argumentos para
        - nome e preco nesse caso (que são necessários em Produto), o call simula 
        - o new em criar um objeto vazio e fazer o this apontar pra ele, call é um metódo
        - presente em toda função.
*/

//# Função que constroí a instancia de Produto
function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

//# insere a função aumento em prototype de produto
Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
};

//# insere a função desconto em prototype de produto
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
};

//# função que constroi Camiseta
function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
}
//# associa os métodos e afins da função contrutora Produto a Camiseta
Camiseta.prototype = Object.create(Produto.prototype);

//# corrige o problema de mudança no construtor de origem
Camiseta.prototype.constructor = Camiseta;  

//# função que constroi Caneca
function Caneca(nome, preco, material){
    Produto.call(this, nome, preco);
    this.material = material;
}

//# associa os métodos e afins da função contrutora Produto a Caneca
Caneca.prototype = Object.create(Produto.prototype);

//# corrige o problema de mudança no construtor de origem
Caneca.prototype.constructor = Caneca;

//# Cria uma camiseta
const camiseta = new Camiseta('regata', 7.5, 'preta');
console.log(camiseta);  //# Mostra o que foi criado
camiseta.aumento(10);   //# Aumenta o preço em 10 reais.
console.log(camiseta);  //# Mostra a camiseta com novo preço

//?        |       Resultado      |
//? Camiseta { nome: 'regata', preco: 7.5, cor: 'preta' }
//? Camiseta { nome: 'regata', preco: 17.5, cor: 'preta' }
//?

//# Cria uma camiseta
const caneca = new Caneca('caneca de café', 10.0, 'porcelana');
console.log(caneca);    //# Mostra o que foi criado
caneca.aumento(10);     //# Aumenta o preço em 10 reais.
console.log(caneca);    //# Mostra a caneca com novo preço

//?        |       Resultado      |
//? Caneca { nome: 'caneca de café', preco: 10, material: 'porcelana' }
//? Caneca { nome: 'caneca de café', preco: 20, material: 'porcelana' }
//?

/* 
    _Nota_
    _ Perceba que tanto camisa quanto caneca conseguem acessar 
    _ o conteúdo de produto, e isso é devido a sua herança.
    _ mas ao mesmo tempo que se abstraiu características em 
    _ comum para uma função construtora Produto, que se tornou
    _ pai de Camisa e Caneca, houve também uma especialização
    _ em cada uma, adicionando a Camisa uma cor e a Caneca um
    _ material.
*/

//| Factory Function + Prototypes.

console.log();
console.log();
console.log('------ Factory Function + Prototypes ------');
console.log();
console.log();

/*
    _características:
        - As mesmas características de prototypes em 
        - constructor functions, mas em factory functions
        - É declarado um pouco diferente.
        - se constrói separadamente os métodos e atributos
        - que se deseja, então se cria uma constante, que é
        - um objeto e receberá tudo que foi criado.
        - então ao retornar o objeto se usa a estrutura do 
        - Object.create, associando ao prototype criado e 
        - passando um objeto de configurações.
*/


const falar = {
    falar() {
        console.log(`${this.nome} está falando`);
    },
}
const comer = {
    comer() {
        console.log(`${this.nome} está comendo`);
    },
}
const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`);
    }
}

const pessoaPrototype2 = {...falar, ...comer, ...beber }

    function criaPessoa2(nome, sobrenome) {

        return  Object.create(pessoaPrototype2, {
            nome: { value: nome },
            sobrenome: { value: sobrenome }
        });
    }


const p5 = criaPessoa2('Jean', 'Meira');
console.log(p5.nome, p5.sobrenome, p5);
p5.falar();

//| Classes

console.log();
console.log();
console.log('------ Classes ------');
console.log();
console.log();

/*
    _características:
        - A criação remete ao mesmo padrão de uma constructor function, mas usa o class
        - Criação de métodos não precisam de ; e também são adicionados diretamente ao 
        - prototype da classe em questão.
        - A diferença é que o constructor será uma classe.
*/

class PessoaClasse {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} está falando`);
    }
    comer(){
        console.log(`${this.nome} está comendo`);
    }
    beber(){
        console.log(`${this.nome} está bebendo`);
    }
}
const pClasse = new PessoaClasse('Jean', 'Meira');

console.log(pClasse);

//| Usando getters e setters em classes

console.log();
console.log();
console.log('------ Usando getters e setters em classes ------');
console.log();
console.log();

/*
    _características:
        - Os getters e setters funcionam muito similar ao
        - apresentado anteriormente.
        - mantém o conceito de que não permitem o acesso direto
        - a propriedade, mas sim através do get e set. 
*/

//@ o Symbol cria uma propriedade privada.

const _velocidade = Symbol('velocidade');       //# toda vez que Symbol for chamado gera um id aleatório
//# nunca um Symbol será igual ao outro.
//# dentro do parenteses do Symbol  vai um descritor opcional
//! torna difícil o acesso fora do objeto. Por isso são criados o pelo getter e setter
class Carro{
    constructor(nome){
        this.nome=nome;
        this[_velocidade]=0; //# passa a acessar a velocidade pelo symbol usando []
    }
    get velocidade(){       //# retorna a valocidade por um get, passando o Symbol
        return this[_velocidade]
    }
    set velocidade(valor){  //# seta uma velocidade pelo setter, garantindo certas condições.
        if(typeof valor !== 'number') return
        if(valor >= 100 || valor <=0) return
        this[_velocidade] = valor;

    }

    acelerar(){
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }
    freiar(){
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');

// for(let i=0; i<=200;i++){
//     c1.acelerar();
// }

//# Devido ao seter o comando abaixo não é executado, por não passar pela descrição de condições
c1.velocidade = 10000
console.log(c1);

//# Já o comando abaixo se enquadra, então o valor é setado
c1.velocidade = 99
console.log(c1);

//| Herança em classes

console.log();
console.log();
console.log('------ Herança em classes ------');
console.log();
console.log();

/*
    _características:
        - Ao usa herança em classes a classe decendente deve
        - chamar a classe pai (superclasse), passando quais
        - atributor estão sendo herdados da superclasse.
        - A classe filha é uma extensão da classe pai, 
        - nã declaração se uso -> class smartphone extends Dispositivo
        - E nesse caso o smartphone é filho de Dispositivo.
*/

class Dispositivo{
    
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }
    ligar(){
        if(this.ligado){
            console.log(this.nome + ' já ligado');
            return
        }
        this.ligado= true;
    }
    
    desligar(){
        if(!this.ligado){
            console.log(this.nome + ' já desligado');
            return
        }
        this.ligado = false;
    }
    }
    
    const d1 = new Dispositivo('smartphone');
    console.log(d1)
    d1.ligar();
    console.log(d1)
    
    d1.ligar();
    d1.desligar();
    
    console.log(d1)
    
    d1.desligar();
    
    class smartphone extends Dispositivo{
        //_ Já faz com que a classe smartphone tenha tudo que o dispositivo tenha.
        constructor(nome, cor, modelo){
            
             super(nome); //_ chamar o construtor pai
    
            this.cor=cor;
            this.modelo=modelo;
        }
    }
    
    const s1 = new smartphone('Samsung', 'preto', 'galaxy s10')
    console.log(s1);
    

console.log();
console.log();
console.log('------ Fim da revisão ------');
console.log();
console.log();
