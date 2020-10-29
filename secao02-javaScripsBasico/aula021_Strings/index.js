//* Aula 21 - Mais sobre Strings


let umaString = "Um \"texto\""; //? a barra invertida é um caractere de escape.
//_ dessa forma é possível inserir aspas duplas em uma string declarada com aspas duplas

console.log(umaString);

umaString = "Um \\texto";        //? usando duas barras é possível fazer uma barra aparecer no resultado final

console.log(umaString);

//#nota# uma string é indexável. Cada caractere tem um índice. Começando em 0 (zero);
umaString = "Um texto"; 
console.log("A quinta letra da váriável umaString é: "+umaString[4]);
console.log(umaString.charAt(4));   //? usando o método charAt(); para realizar o mesmo.
console.log(umaString.charCodeAt(4));   //? retorna o código da tabela ASCII.

//| função concat concatena os textos, como o + ou uso de templateString
console.log(umaString.concat(' em', ' um', ' lindo dia'));
console.log(umaString + ' em' + ' um'+ ' lindo dia');
console.log(`${umaString} em um lindo dia`);

//| Pesquisando índice que começa uma palavra
console.log(umaString.indexOf('texto'));
//#nota# retorna o índice se achar e -1 se não achar.

//#obs# é possível enviar dois parâmetros, então o segundo será de onde a pesquisa começa
console.log(umaString.indexOf('um', 3));    //? retorno -1 pois não há um após o índice 3.

console.log(umaString.lastIndexOf('o'));    //? começa a procura do final para o começo.
//#obs# pode dar diferença se mandar o parâmetos de início.

console.log(umaString.search(/x/));         //? similar ao indexOf, mas aceita expressões regulares.
//#obs# e em realidade pode ter funcionamentos um pouco mais amplos.

//| Replace
console.log(umaString.replace('Um', 'outra')); //? substitui uma palavra por outra

umaString = 'O rato roeu a roupa do rei de roma';
console.log(umaString.replace(/r/, '#'));       //? substitui somente o 1º r
console.log(umaString.replace(/r/g, '#'));      //? substitui todos os r

//| Checando o tamanho

console.log(umaString.length);
//           012345
umaString = 'O rato';
console.log(umaString.length);      //? conta como 0 a 5, ou seja 6

//| dividindo uma string

umaString = 'O rato roeu a roupa do rei de roma.';

console.log(umaString.slice(2, 6));
//#nota# Indica a posição de início e final, sendo que o final não é contado.

console.log(umaString.slice(2));
//#nota# Se não receber o segundo parametro, conta como do início indicado até o final.

console.log(umaString.length-3);        //? resultado esperado -> 32
console.log(umaString.slice(-3));
console.log(umaString.slice(32));
/*
    _ Usar número negativo é o mesmo que adotar o início como o tamanho total do texto 
    _ menos o valor indicado. Sendo assim, no exemplo acima é printado apenas os 3 
    _ últimos caracteres. E -3 é o mesmo que indicar o início de 32.
    _ Também é possível indicar começo e final com números negativos.
*/

//? também é possível usando outro comando.
console.log(umaString.slice(-5, -1));
console.log(umaString.substring(umaString.length - 5, umaString.length -1));

//? Baseado em algum caractere.

console.log(umaString.split(' '));
console.log(umaString.split('r'));

console.log(umaString.split(' ', 2));       //? é possível limitar o número de resultados.

//| representar em maiúsculo ou minúsculo
console.log(umaString.toUpperCase());
console.log(umaString.toLocaleLowerCase());