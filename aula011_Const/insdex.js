//* Aula 11 - Const

//* As mesmas regras de variáveis valem para constantes
//#nota# Não podemos criar constantes com palavras reservadas ex -> let if -- let let, e assim por diante;
//#nota# É recomendado que constantes tenham nomes significativos ex -> let n = 'João';
//#nota# n é muito vago, podendo ser qualquer coisa
    //#obs# É bom que a constante tenha valor semântico.
//#nota# Não começar o nome de uma constante com um número;
//#nota# constantes em geral começam com letras minúsculas, (existem exceções);
//#nota# Não podem conter  espaços ou -, ex -> let nome cliente; let nome-completo;
    //#obs# para constantes com nomes múltiplos pode-se usar o padrão camelCase ex -> let nomeCLiente.
//#nota# constantes são case-sensitive, ou seja, nas variáveis letras maiúsculas e minúsculas diferem
//#nota# no resultado final;
//#importante# Constantes não podem ser redeclaradas e nem tem novos valores atribuídos as mesmas.
    //#obs# não podem modificar seu valor
//#importante# devem ser inicializadas e declaradas ao mesmo tempo

const nome = 'João';

console.log(nome);

//#nota# É possível usar uma constante ou variável na declaração de outra.

const primeiroNumero = 5;
const primeiroNumeroStrg = '5';
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = 2* resultado;

console.log(resultado);                                    //? resposta esperada -> 50
console.log(resultadoDuplicado);                           //? resposta esperada -> 100

//* Verificando o tipo de uma const ou let com a função typeof();

console.log(primeiroNumero + segundoNumero);                //? resposta esperada -> 15
console.log(typeof(primeiroNumero + segundoNumero));        //? resposta esperada -> number
console.log(primeiroNumeroStrg + segundoNumero);            //? resposta esperada -> 510
console.log(typeof(primeiroNumeroStrg + segundoNumero));    //? resposta esperada -> string

//#nota# Ao receber uma string e um number o código concatena os valores em vez de somar,
//#nota# aprensentando a string 5 e o número 10 escritos em sequência.
//#nota# Porém, dessa forma o resultado passa a ser interpletado como uma string.