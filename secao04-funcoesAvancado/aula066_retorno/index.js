//* Aula 66 - Retorno de uma função

/*
    #Nota#
    _ return retora algum valor
    _ encerra a função
    _ existe um retorno undefined por padrão
    _ se não existir a palavra return terá um retorno undefined
    _ funções podem ou não retornar valores. (além do undefined)
*/

function soma(a, b){
    return a+b;
}

console.log(soma(5,2));

//| retornando uma função sem executar imediatamente

function criaMultiplicador(multiplicador){
    //multiplicador está aqui
    
    /*
        _ Abaixo poderia ser de duas formas
        _ poderia ser criado a função e depois 
        _ retornar a mesma sem () e argumentos, 
        _ para que assim se retorne a função,
        _ que será executada em outra hora.
        _ ou retornar diretamente a função
        _ que assim também será executada depois.
    */
    // function multiplica(n){
    //     return n * multiplicador;
    // }
    // return multiplica;

    return function(n){
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));