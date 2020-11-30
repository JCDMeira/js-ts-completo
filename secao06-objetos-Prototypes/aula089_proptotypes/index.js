//* Aula 89 - Proptotypes

/*
    #Nota#
    
    _ JavaScript é baseado em protótipos para passar propriedades e métodos
    _ de um objeto para outro.

    _ Definição de protótipo
    _ Protótipo é o termo usado para se referir ao que foi criado pela
    _ primeira vez, servindo de modelo ou molde para futuras produções.

    _ Todos os objetos tem uma referência interna para um protótipo (__proto__)
    _ que vem da propriedade prototype da função construtora que foi usada para criá-lo. 
    _ Quando tentamos acessar um membro de um objeto, primeiro o motor do JS
    _ vai tentar encontrar este membro no próprio objeto e depois a cadeia de protóripos
    _ é usada a´te o topo (null) até encontrar (ou não) tal membro;

    #Notas Aula#
    _ todo objeto criado pelo molde será associado a um prototype -> proto
    ! Um afirmação que deve ser lembrada é:
    ! pessoa.prototype === pessoa1.__proto__
*/

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = ()=> this.nome + ' ' + this.sobrenome;
}
pessoa1.proto.estouAqui ='Hahahaha';

Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome;
};

const pessoa1 = new Pessoa('Jean', 'Meira')
console.log(pessoa1);
