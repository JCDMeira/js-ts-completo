//* Aula 87 - Getters e Setters

/*
    #Nota#
    _ É uma maneira de proteger a propriedade de certa forma
    _ get obtém o valor
    _ set atribui o valor.
    _ não usar o this para set, pode ocasionar loop infinito, o set tem o this, que chama o ojeto
    _ que acessa o set e encontra o this, que novamente chama o objeto...
    _ get e set fazem com que a propriedade tenha a interação externa reduzida, ou pelo menos
    _ tenha um intermediário, que faz com que o valor do dado possa ter restrições ou regras.
*/

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        //value: estoque,
        //writable: false,
        configurable: false,
        get: function(){
            return estoquePrivado;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                throw new TypeError('Um valor numérico é esperado');
            }
            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
console.log(p1.estoque);
//p1.estoque = 'Qualquer coisa'

p1.estoque = 2;
console.log(p1.estoque);
