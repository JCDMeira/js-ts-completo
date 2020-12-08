//* Aula 95 - Polimorfismo

/*
    #Nota#
    _ Como fazer métodos se comportarem de maneiras diferentes.
    _ como subclasses -> que são classes filhas
    _ por classes entende-se -> função construtora;
    _ A Superclasse / classe pai ou mãe é o que dará origem as demais, que serão 
    _ filhas ou sub-classes. Os métódos da superclasse estarão nas sub-classes,
    _ mas ao usar o polimorfismo é possível adotar comportamentos diferentes para
    _ o mesmo método, somente nas filhas que forém desejados ter comportamentos 
    _ diferenciados.
    _ Ao final do código é possível notar que ambas as classes filhas herdam 
    _ características da classe mãe, mas a conta corrente tem o método de sacar
    _ sobreposto, portanto tem esse comportamento em específico diferente de sua classe mãe.
*/

//#Nota# Superclasse / classe pai ou mãe

function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

//_ Métodos da superclasse.
Conta.prototype.sacar = function(valor){
    if(valor > this.saldo) {
        return console.log(`Saldo insuficiente para sacar R$${valor}, saldo: R$${this.saldo}`);
    }
        this.saldo -= valor;
        this.verSaldo();
};

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function(){
    console.log(`Ag./Conta: ${this.agencia}/${this.conta} - saldo: R$${this.saldo.toFixed(2)}`);
    return this.saldo
};

//_ manipulação de um novo objeto criado com a super classe.
const conta1 = new Conta(11, 22, 10);
console.log(conta1);
conta1.depositar(11);

conta1.depositar(10);

conta1.sacar(30);
conta1.sacar(10);

//_ Especialização para a primeira classe filha, conta corrente.
function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo); //? Linkando com a superclasse.
    this.limite = limite;

}
//_ Linkando a cadeia de prototypes
ContaCorrente.prototype = Object.create(Conta.prototype);
//_ mas mantendo a referência de quem é o construtor.
ContaCorrente.prototype.constructor = ContaCorrente;

//! Soprepondo o método sacar, para se ter comportamento diferente da superclasse.
ContaCorrente.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)) {
        return console.log(`Saldo insuficiente para sacar R$${valor}, saldo: R$${this.saldo}`);
    }
        this.saldo -= valor;
        this.verSaldo();
};

//_ Manipulando a classe filha conta corrente.
const CC1 = new ContaCorrente(33, 44, 0, 100);
CC1.depositar(10);
CC1.sacar(110);

//_ Especialização para a segunda classe filha, conta poupança.
function ContaPoupanca(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo); //? Linkando com a superclasse.
    this.limite = limite;

}
//_ Novamente Linkando a cadeia de prototypes
ContaPoupanca.prototype = Object.create(Conta.prototype);
//_ mas novamente mantendo a referência de quem é o construtor.
ContaPoupanca.prototype.constructor = ContaPoupanca;

//_ Manipulando a classe filha conta corrente.
const CP1 = new ContaPoupanca(55, 66, 0);
CP1.depositar(10);
CP1.sacar(110);
