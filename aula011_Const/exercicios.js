//* Exercícios sobre const e let

/*
    Proposta é tarnsformar a frase seguinte em uma versão que chame constantes e variáveis em vez de modo estático
    Luiz Otávio Miranda tem 30 anos, pesa 84 kg, tem 1.8 m de altura e seu IMC é de 25,925...
    Luiz Otávi nasceu em ...
*/

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 31;
const peso = 84;
const altura = 1.80;
let imc;                        //? peso / (altura^2)
let anoNascimento;

console.log(nome, sobrenome, 'tem', idade, 'anos e', 'pesa', peso,'kg, tem', altura,'m de altura e seu IMC é de',
(peso/(altura*altura)),'.',nome, 'Nasceu em',(2020-idade));

// Ou usando a concatenação (+)

console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos e pesa '+ peso+'kg, tem '+ altura+'m de altura e seu IMC é de '+
(peso/(altura*altura))+'. '+nome + ' Nasceu em '+(2020-idade));

// Usando TemplateString

console.log(`${nome+' '+sobrenome} tem ${idade} anos e pesa ${peso}kg, tem ${altura}m de altura e seu IMC é de ${(peso/(altura*altura))}.`);
console.log(`${nome + '' + sobrenome} nasceu em ${2020 - idade}`);