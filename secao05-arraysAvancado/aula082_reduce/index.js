//* Aula 082 - reduce - reduzindo um array

/*
    #Nota#
    _ reduce() é mais utilizado para reduzir o objeto a um único objeto.
    _ reduce é muito versátil, ele até consegue imitar o map e filter,
    _ mas não é ideal
    ! não faça isso, use cada um pelo seu funcionamento mesmo.
    _ reduce() recebe os argumentos iguais ao map e filter, mas também recebe
    _ um acumulador. O acumulador pode receber um valor inicial, como indicado a seguir.
    _   exemplo
    _   xxxx.reduce(function(acumulador, valor, indice, array){ corpo do código},0 {<-valor inicial})
    _ a cada iteração a função deve retornar algo, se não o acumulador passa a ser undefined
    ! cuidado com o valor do acumulador, se não houve valor indicado será adotado o primeiro valor
    ! do array. Isso pode implicar em erros indesejados.
    _ se não mandar valor em acumulador, ele será o primeiro e na primeira iteração o valor 
    _ será o segundo elemento.
*/

//| exemplo 1
// some todos os números (reduce)
// retorne um array com os pares (filter)
// retorne um array com o dobro dos valores (map)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador += valor;
    return acumulador;
}, 0)
console.log(total);

// acumulador -> accumulator -> acc
const pares = numeros.reduce((acc,valor)=>{
    if(valor % 2 === 0) acc.push(valor)
    return acc;
}, [])
console.log(pares);

const dobro = numeros.reduce((acc,valor)=>{
    const dobro = 2 * valor;
    acc.push(dobro);
    return acc
},[])
console.log(dobro);

//| exemplo 2
// retorne a pessoa mais velha
const pessoas =[
    { nome: 'Luiz', idade: 62},
    { nome: 'maria', idade: 23},
    { nome: 'eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'rosana', idade: 64},
    { nome: 'wallace', idade: 47},
    { nome: 'Jean', idade: 23}
];

const maisVelha = pessoas.reduce((acc, valor)=>{
    if(valor.idade > acc.idade) acc = valor;
    return acc
})
console.log(maisVelha);
