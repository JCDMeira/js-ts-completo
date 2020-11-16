//* Aula 64 - Maneiras de declarar funções

//| declaração
function falaOi(){
    console.log('Oi');
};
//_ É uma declaração mais literal.
//_ Ocorre o function hoisting -> eleva a declaração.
//_ declaração mais clássica.

falaOi();

//| functions expressions
//_ função (todas) são first-class objects (objetos de primeira classe)
    //_ podem ser tratadas como dado.

    const souUmDado = function(){
        console.log('Sou um dado');
    }

    souUmDado();
//_ Pode executar a constante ou variável como uma função.
//_ Permite passar funções como parâmetros.

function executaFuncao(funcao){
    funcao();
}

executaFuncao(souUmDado);

//| Arrow function -> function expression resumida na declaração

const arrow = ()=> console.log('Sou uma arrow function');

arrow();

//| Dentro de objetos

const obj = {
    //falar: function(){    //? abaixo tem o modo mais novo de declarar um método do objeto.
    falar(){
        console.log('Estou falando...');
    }
}

obj.falar();