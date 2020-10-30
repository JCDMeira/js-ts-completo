//* Aula 33 - Operadores de comparação

/*
    _ >     maior que
    _ >=    maior que ou igual a
    _ <     menor que
    _ <=    menor que ou igual a
    _ ==    igualdade   (checa valor)
    _ ===   igualdade estrita (checa valor e tipo)
    _ !=    diferente   (checa valor)
    _ !==   diferente estrito   (checa valor e tipo)

*/

console.log(10>5);
//? É possível salvar o valor em variáveis e constantes
const comp = 10 > 5;
console.log(comp);

//_ A funcionalidade é igual as usadas em matemática. Os estritos tem um conceito a mais.

//| Com variáveis

let num1 = 10;
let num2 = 11;

console.log(num1 <= num2);

//| Comparação e comparação estrita

num1 = 10;
num2 = 10;
console.log(num1 == num2);
num2 = '10';
console.log(num1 == num2);
console.log(num1 === num2);

/*
    _ A comparação normal somente compara o valor contido, enquanto
    _ a comparação estrita compara o valor e o tipo da variável ou 
    _ dado em questão. Isso é válido para a igualdade e desigualdade.
    ! O uso do modo estrito é altamente recomendado para evitar
    ! comportamentos indesejados na execução do código.
    ! EVITE O USO DA IGUALDADE E DESIGUALDADE COMUNS
*/
