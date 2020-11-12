/*
    Escreva uma função que recebe um número
    retorne o seguinte:
    Número é divisível por 3 = Fizz
    Número é divisível por 5 = Buzz
    Número é divisível por 3 e 5 = FizzBuzz
    Número não é divisível por 3 e por 5 = Retorna o próprio número
    Checar se o número é realmente um número = retorna o próprio número
    Use a função com número de 0 a 100
*/
    const result = num => {
        if(num === 0) return num;

        if(num> 100 || num < 0){
        return 'fora dos limites';
        }else{ if(typeof(num) === "number"){
        if(num % 3 === 0 && num % 5 ===0) return 'FizzBuzz';
        if(num % 3 ===0) return 'Fiz';
        if(num % 5 ===0) return 'Buzz';
            return num;
    }else{ 
    return 'Não é um número'
    }
    }
}

for(let i=0; i<=100; i++){
    console.log(result(i));
}