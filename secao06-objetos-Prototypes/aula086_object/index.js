//* Aula 86 - Object.defineProperty() e Object.defineProperties()

/*
    #Nota#
    _ enumerable    -> mostra a chave
    _ value         -> atribui o valor
    _ writable      -> pode alterar ou não o valor
    _ configurable  -> pode apagar, editar ou reconfigurar a chave
*/

function Produto(nome, preco, estoque) {
    //this.nome = nome;
    //this.preco = preco;
    //this.estoque = estoque;

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true,
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true,
        }
    });

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: false,
        configurable: false,
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
console.log(Object.keys(p1)); //? -> mostra as keys que são enumerable
