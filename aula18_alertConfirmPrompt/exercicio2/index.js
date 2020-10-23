let varA = 'A'; // faça varA ter o valor de 'B';
let varB = 'B'; // faça varB ter o valor de 'C';
let varC = 'C'; // faça varC ter o valor de 'A';

// não pode atribuir diretarmente o valor a variável;

//| Resolução criando uma nova variável
let varD;

varD = varA;
varA = varB;
varB = varC;
varC = varD;

console.log(varA, varB, varC);

//| Resolução não criando uma nova variável
let varA1 = 'A'; 
let varB1 = 'B'; 
let varC1 = 'C';

[varA1, varB1, varC1] = [varB1, varC1,varA1 ]

console.log(varA1, varB1, varC1);