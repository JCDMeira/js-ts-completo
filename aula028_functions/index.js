//* Aula 28 - Funções (básico)

//#nota# funções executam ações, podendo ou não retornar algo

function saudacao(){
    console.log('Bom dia');
};

saudacao();

//| funções que recebem parâmetros

function saudacao1(nome){
    console.log(`Bom dia ${nome}`);
};

saudacao1('Jean');

//#nota# função são reutilizáveis
saudacao1('Fulano');

const variavel = saudacao1('Fulano');
console.log(variavel);
//#obs# toda função por padrão retorna undefied, e por isso é salvo undefined na variavel.

//| Funções com retorno

function saudacao2(nome){
    console.log(`Bom dia ${nome}`);
    return 123456
};

const retorno = saudacao2('Jean');
console.log(retorno);

//#aviso# Esperasse que o retorno da função seja algo semantico com o nome, e não que seja algo bem diferente.

function saudacao3(nome){
    return `Bom dia ${nome} pelo retorno`
};

const retorno2 = saudacao3('Jean');
console.log(retorno2);

//| funções com mais uso e que permitem repricar o seu uso.

function soma(x,y){
    const resultado = x +y;
    return resultado;
}

console.log(soma(2,2));
console.log(soma(3,1));
console.log(soma(5,10));

// console.log(soma(2,2), resultado); //#nota# daria erro pois o resultado faz parte do escopo local da função.

const resultado = soma(2,2);    //? é possível declarar uma const resultado, pois a que está dentro da função está isolada.

//! Quando a função chegar em um return sairá da função e aplica o retorno, tudo após um return será ignorado.

function soma1(x,y){
    const resultado = x +y;
    return resultado;
    console.log('olá mundo');
}

console.log(soma1(5,10));

//| Valores faltando

console.log(soma()); //? retorna NaN
//#obs# será NaN mesmo se faltar só um

//_ É possível tratar atribuindo um valor inicial para os argumentos da função
function soma2(x=1,y=1){
    const resultado = x +y;
    return resultado;
}

console.log(soma2());
console.log(soma2(5,10));

//#obs# caso não receba valores, serão usados os pré-definidos, caso receba será adotado o recebido.

//| Outros modos de criar funções

//_ Funções anônimas -> em variáveis.
//#obs# precisa do ponto e vírgula obrigatoriamente no final.

const raiz = function(n){
    return (n ** 0.5);
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

//_ Arrow function

const raizArrow = (n) => {
    return ( n ** 0.5);
};

console.log('Arrow', raizArrow(9));

//_ Se tiver apenas uma linha de retorno é possível simplificar ainda mais.

const raizArrow1 = (n) =>  n ** 0.5;
console.log('Arrow resumida',raizArrow1(9));

//#Aviso# funções são basicamente iguais, mesmo com as declarações diferentes. 
//#Aviso# Quando entrar em this terão diferenças que serão expostas
//#importante# Não é uma boa prática criar funções que executem diversas ações. 