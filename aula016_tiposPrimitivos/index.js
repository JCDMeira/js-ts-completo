//* Aula 16 - Tipos de dados primitivos

//| strings

const nome = 'Luiz';
const nome1 ="Luiz";
const nome2 = `Luiz`;

//| numbers

const num1 = 10;
const num2 = 10.5;

//| undfined
let nomeAluno               //? undefined -> não aponta para nenhum local na memória

//| null
let sobernomeAluno = null   //? null -> não aponta para nenhum local na memória

//#nota# undefined != de null
//#nota# null é a indicação que foi escolhido que a variável não terá um valor, não aponta para nenhuma memória
//#nota# undefined é uma variável que não recebeu um valor.

//? boolean
const boolean = true;
const boolean2 = false;

//#nota# boolean assume valor true ou false, representando verdadeiro ou falso, 1 ou 0;
//#obs# boolean tem peso lógico, ajuda em decisões do código. Muda o fluxo da aplicação, usando desvios condicionais.