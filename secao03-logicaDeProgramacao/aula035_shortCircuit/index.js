//* Aula 35 - Avaliação de curto-circuito (short-circuit)

/*
    _ && -> false && true -> false : retorna "o valor" ao achar uma falsa

    | FALSY (VALORES QUE PODEM SER AVALIADOS COMO FALÇO)
    _ false
    _ 0
    _ '' "" `` (string vazias)
    _ null / undefined
    _ NaN

    #nota# Qualquer valor diferente dos presentes no FALSY avalia verdadeiro
*/

//? exemplo
/*
    _ Ao se deparar com um FALSY o valor do mesmo é retornado, se em uma
    _ comparação não tiver nenhum FALSY a mesma irá retornar o último valor lido.
    _ Isso possibilita fazer uma redução nos circuitos para alguns casos, tornando o
    _ código mais limpo e performático.
*/
console.log("Jean" && 0);   //? retorna 0;

/*
    _ A seguir tem um caso de curto circuito, onde o código é omitido em partes
    _ Porque devido as propriedades de falsy o código é perfeitamente válido.
    _ Será testado a condição e ao perceber se vaiExecutar é verdadeiro ou falso
    _ já retornará o resultado.
*/
function falaOi (){
    return 'Oi';
}

const vaiExecutar = false;

console.log(vaiExecutar && vaiExecutar);

/*
    _ O || (or) tem comportamento ao contrário    
    _ || -> false && true -> true : retorna "o valor" ao achar uma true

    | FALSY (VALORES QUE PODEM SER AVALIADOS COMO FALÇO)
    _ false
    _ 0
    _ '' "" `` (string vazias)
    _ null / undefined
    _ NaN

    #nota# Qualquer valor diferente dos presentes no FALSY  avalia verdadeiro
*/
