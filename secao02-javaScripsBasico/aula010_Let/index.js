//* Aula 10 - variáveis let e var
//#obs# aula 6 citada no vídeo

//#nota# variáveis podem ser atribuídas como let e var
//#nota# podendo ou não ser inicializadas com valor, se não receber valor será considerado undefined
//#obs# le-se como variável do tipo let recebe o valor do tipo string 'João'.
let nome = 'João';          //? já inicializado na declaração

let nome2;                  //? declaração
nome2 = 'qualquer valor';   //? atribuição de um valor

console.log(nome, 'nasceu em 1984');
console.log('Em 2000', nome, 'conheceu Maria');
console.log(nome, 'caso-se com Maria em 2012');
console.log('Maria teve 1 filho com', nome, 'em 2015');
console.log('O filho de', nome, 'se chama Eduardo');

//#nota# var é mais antigo, o var permite redeclaração enquanto o let não, ambos pode serem reatribuidos
//#nota# recebendo assim outros valores
//#aviso#let não podem ser declaradas mais de uma vez enquanto var pode
var nome3 = 'Jean';
var nome3 = 'Guilherme';

console.log(nome3);

//#obs# A variável permite salvar valores que serão usados em múltiplas partes do código, além de trabalhar 
//#obs# informações no decorrer do código e poder salvar informações vindas do usuário ou fontes externas.

//#importante# o uso de variáveis ou partes dinâmicas de código podem mais facilmente ser alteradas, 
//#importante# o código exemplificado acima pode mudar o nome citados em todas as frases somente alterando
//#importante# a linha de declaração da variável nome, o que não seria possível se fosse manualmente 
//#importante# escrito em cada comando console.log();


//#nota# Não podemos criar variáveis com palavras reservadas ex -> let if -- let let, e assim por diante;
//#nota# É recomendado que variáveis tenham nomes significativos ex -> let n = 'João';
//#nota# n é muito vago, podendo ser qualquer coisa
    //#obs# É bom que a variável tenha valor semântico.
//#nota# Não começar o nome de uma variável com um número;
//#nota# Variáveis em geral começam com letras minúsculas, (existem exceções);
//#nota# Não podem conter  espaços ou -, ex -> let nome cliente; let nome-completo;
    //#obs# para variáveis com nomes múltiplos pode-se usar o padrão camelCase ex -> let nomeCLiente.
//#nota# Variáveis são case-sensitive, ou seja, nas variáveis letras maiúsculas e minúsculas diferem
//#nota# no resultado final;

//#importante#  NÃO UTILIZE VAR, UTILIZE LET