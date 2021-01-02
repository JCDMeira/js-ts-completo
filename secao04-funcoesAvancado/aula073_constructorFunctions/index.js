//* Aula 73 - Funções construtoras (constructor functions)

/*
    #Nota#
    _ Funções construtoras retornam objetos (constroem)
    _ são iniciadas com letras maiúsculas. e obrigatóriamente contém a palavra new.
    _ new cria um novo objeto vazio, faz o this apontar para o objeto vazio, e retorna 
    _ implicitamente.
    _ É possíveç ter atributos, métodos e variáveis privadas, que estão acessíveis apenas
    _ dentro da função construtora.
    _ Ao usar o this. cria-se atributos e métodos públicos que podem ser acessados pelo notação
    _ de . fora da função construtora.
    _ A exemplo de p1.nome, p2.nome e p1.metodo demonstrados abaixo.
*/

function Pessoa(nome, sobrenome){
    //_ Atributos ou métodos privados
    const ID = 123456;
    const metodoInterno = function(){

    };

    //_ Atributos ou métodos públicos
    this.nome= nome;
    this.sobrenome = sobrenome;
    this.metodo= function(){
        console.log(this.nome + ': Sou um método');
    }
}

const p1 = new Pessoa('Jean', 'Meira');
const p2 = new Pessoa('João', 'André')
console.log(p1, p2);
console.log(p1.nome, p2.nome);
p1.metodo();