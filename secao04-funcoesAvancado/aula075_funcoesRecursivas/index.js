//* Aula 75 - Funções recursivas

/*
    #Nota#
    _ É uma função que ela mesma se chama.
    _ cuidado com o máximo de recursividade, em certos valores altes vai dar erro
    _ quase como um loop infinito.
*/

function recursiva(max){
    if(max < 0) return;
    if(max >10)  return;
    console.log(max);
    max++;
    recursiva(max);
}

recursiva(0);