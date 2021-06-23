//* Aula 239 - Quantificadores

/*
    @ https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
    
    _Nota_
    _ são quantificadores
    -   * (opicional) 0 ou n    -> {0,}
    -   + (obrigatório) 1 ou n  -> {1,}
    -   ? (opicional) 0 ou 1    -> {0,1}
    -   \ caracter de escape
    -   {n, m} onde n é o mínimo e m é o máximo
        - {10,} mínimo 10
        - {,10} máximo 10
        - {5,10} de 5 a 10
*/

const { texto, arquivos } = require("../base");

// console.log(texto);

// const regExp1 = /jo+ão+/ig;
// console.log(texto.match(regExp1));

// const regExp2 = /\.(jpg|jpeg)/gi //  # pode usar grupo com (ou)
// const regExp2 = /\.jpe?g/gi         //  # pode usar o ? ou até *

//@ cuidado se usar o *, que se houver nomes errados com mais letras e será válido

const regExp2 = /\.jp(e|E)?g/g         //  # o quantificador após um grupo se relaciona a todo o grupo

for (const arquivo of arquivos) {
    const valido = arquivo.match(regExp2);

    if(!valido) continue;       //  # continua para próxima iteração

    console.log(arquivo);
}