//* Aula 29 - Objetos (básico)

//#Nota# é possível alteral os valores dos elementos de objetos e arrays.
//#Nota# mas não é possível reatribuir o valor ou mudar o tipo.
//#Nota# ao mudar elementos internos não há alterações pra onde é apontato na memória.

//| declaração

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
//#Nota# da pra criar atributos que são como variáveis, mas estão internos ao objeto.
//#Nota# os atribuitos são separados por uma , no final de cada linha 
//#Nota# e num objeto utiliza par chave e valor para cada atributo, que são separados por : 

//| criar por funções -> function factory
// fábrica de objetos.

function criaPessoa(nome, sobrenome, idade){    //? Isso são parâmetros de uma função
    return{ nome, sobrenome, idade};
    /*  É o mesmo que citar como nome: nome e assim por diante,
        Pois quando a chave e o valor possuem o mesmo nome é possível
        omitir o : valor
    */  
}

const pessoa2 = criaPessoa('Jean','Meira','23');    //? Aqui são argumentos que serão passados para os parâmetros.
console.log(pessoa2);

//#Nota# argumentos são os valores que são passados para o parãmetro.

//| Criar método no objeto

const pessoa3 = {
    nome: 'Jean',
    sobrenome: 'Meira',
    idade: 23,
    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando oi...
        A minha idade é ${this.idade}`)
    },
    incrementaIdade(){
        this.idade++;
    }
}

pessoa3.fala();
pessoa3.incrementaIdade();
pessoa3.fala();

//#Nota# this referencia o contexto da função, mas será dado mais detalhes a frente.