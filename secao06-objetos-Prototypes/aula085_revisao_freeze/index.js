//* Aula 85 - Revisando objetos / menção do freeze

/*
    #Nota#
    _ Na declaração de objeto de forma literal, contém as {} que envolvem o corpo
    _ do objeto. Onde o objeto é literalmente escrito ali na declaração.
    _ Os objetos tem seu corpo formado por pares de chave e valor, separados por : entre si.
    _ para inserir novos conjuntos de par chave e valor se separa por vírgula ao final de cada par
    _ é possível acessar uma chave do objeto por notação de ponto -> pessoa.nome ou com
    _ notação de conlchete -> pessoa['nome']
    _ a notação de colchete aceita um uso dinámico.
    _ é possível deletar uma chave com o delete
    _ ex -> delete pessoa1.nome
    _ obejtos podem contér metódos.
    _ é possível usar factory functions e constructor functions;
*/

//| literal
const chave = 'nome';
const pessoa = {
    nome: 'Jean Carlos',
    sobrenome: 'De Meira'
}

//? Exemplo de uso dinâmico
console.log(pessoa[chave]);

//| construtor
const pessoa1 = new Object();
pessoa1.nome = 'Jean Carlos';
pessoa1.sobrenome = 'De Meira';
pessoa1.falarNome = function(){
    return (`${this.nome} está falando seu nome.`);
}
console.log(pessoa1.nome, pessoa1.sobrenome);
console.log(pessoa1.falarNome());

//_ Iterar no objeto.
for(let chave in pessoa1){
    console.log(chave, pessoa1[chave]);
}

//| Factory function

function pessoaFac(nome, sobrenome){
    return{
        nome,
        sobrenome
    }
}
const p1 = pessoaFac('Jean Carlos','De Meira');
console.log(p1);

//| Constructor function

function PessoaCons(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this); //? Trava todos os objetos criados por esse molde.
    //_ Não permite mais nada além do já criado, não é possível alterar
    //_ criar ou deletar coisas no objeto.
    //_ literalmente congela o objeto.
    //! também funciona com arrays.
}

//_new cria uma objeto vazio {} <- atrelar o this ao objeto. e retorna já o this que representa o objeto.
const p2 = new PessoaCons('Jean Carlos','De Meira');
console.log(p2);

//| travar mudanças nos valores da referência do objeto.

Object.freeze(p1);
//_ Não permite nem mudanças nos valores das chaves.
