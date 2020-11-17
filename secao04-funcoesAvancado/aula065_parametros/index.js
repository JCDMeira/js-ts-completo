//* Aula 65 - Parâmetros da função

function funcao(){
    console.log(arguments);
}
/*
    #Nota# 
    _ Funções criadas com a palavra function tem um parâmetro com nome arguments, que guarda(sustenta) todos os argumentos.
    _ Mesmo que não crie parâmetros a função vai salvar os argumentos inviados para suprir os parâmentros.
    _ arguments é um objeto.
*/

funcao(1, 2, 3, 4, 5, 6, 7);

function funcao2(a=0, b=0, c=0, d=0,e=0){
    console.log(arguments);
    console.log(a, b, c);
}

funcao2(1, 2, 3,undefined, 5, 6, 7);
/*
    #Nota#
    _ Isso ainda é válido caso existam argumentos criados. arguments ainda sustentará todos os argumentos.
    _ Se tiver parâmetros, mas não for passado argumentos para todos, o parâmetro será criado
    _ mas tera valor de undefined.
    _ É possível usar valores pré definidos para os parâmetros, e se os mesmos não receberem argumentos 
    _ adoraram o valor inicial indicado.
    _ Se mandar undefined ele também adotará o valor padrão, Apesar de isso não ser muito indicado.
    _
    _ arguments não funciona com arrow functions.
    _ É possível usar a desestrruturação de objetos ou arrays dentro dos parâmetros de uma função
    _ Rest operator se for usado tem que ser sempre o último parâmetro da função;
*/
