//* Aula 34 - Operadores Lógicos


/*
    _ Operadores lógicos
    _ && -> and -> e
    _ || -> or -> ou
    _ ! -> not -> não
*/

//| && (and)
//_ Para ser verdadeiro todos as expressões precisam ser verdadeira
console.log(true && true);
console.log(true && true && true && true);

//_ É possível salvar o valor em uma variável ou constante
const expressaoAnd = (true && true && true && true);
console.log(expressaoAnd);

//_ Se uma for falsa o resultado já é falso
console.log(true && false);
console.log(true && true && false && true);

//| || (or)
//_ Para ser verdadeiro pelo menos uma das expressões precisam ser verdadeira
console.log(true || true);
console.log(true || false);

//_ É possível salvar o valor em uma variável ou constante
const expressaoOr = (true || true);
console.log(expressaoOr);

//_ Se uma for falsa se todas as expressões forém falsas
console.log(false || false);
console.log(false || false || false || false);

//| ! (not)
//_ Sai o oposto do que entrou
console.log("negação de true:", !true);
console.log("negação de dupla de true:", !!true);
