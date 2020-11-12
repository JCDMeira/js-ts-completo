// Escreva  uma função que recebe dois números e retorna o maior deles

function maiorEntreDoisNumeros(num1, num2){
    return num1 > num2 ? num1 : num2
}

console.log(maiorEntreDoisNumeros(2,10));

//? usando arrow function de retorno de uma linhas
const max2 = (num1, num2)=>  num1 > num2 ? num1 : num2;
console.log(max2(21,1));