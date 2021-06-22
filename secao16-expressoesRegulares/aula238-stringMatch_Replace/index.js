//* Aula 238 - String Match e Replace

/*
    @ https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
    
    _Nota_
    _  Quando se usa grupos se tem acesso a variáveis especiais, $1 ... $2 e assim
    _ por diante, sendo uma para cada grupo criado.
    _ (...)(----)(+++) - $1 $2 e $3 na ordem
    _ (...(,,,))(----)(+++) - $1, $2, $3 e $4 na ordem em que aparecem, o grupo interno
    _ a outro grupo é contando como $2 normalmente.
    _ É possível usar funções para manipular coisas mais complexas
    
*/

const { texto } = require("../base");

const regExp1 = /joão|maria/ig;

// console.log(texto.match(regExp1));

// console.log(texto.replace(/joão/ig, "Felipe" ));
// console.log(texto.replace(/(joão)/ig, '"$1" '));
console.log(texto.replace(/(joão|maria)/ig, function(input) {
    return input.toUpperCase();
}));
