//* Aula 108 - Promises

/*
    #Nota#
    _   As promises são na tradução promessas, o código javascript "promete resolver"
    _   então continua o código normalmente, e quando a promessa é resolvida será 
    _   feito o resultado da mesma, já uma conexão de banco de dados ou mesmo apenas 
    _   uma mensagem.
    _   ela tem dois parâmetros que são funções, normalmente atribuido resolve e reject
    _   por convensão. O resolver retorna que foi bem sucedida a resolução da promise, e 
    _   pode passar até um parâmetro de retorno. Já o reject aponta que a resolução falhou.
    _   O resolve faz a função cair no .then e dentro dele pode-se aninhar diversas funções
    _   promises, para assim garantir a ordem em que as funções serão executadas. E qualquer 
    _   reject cairá no .cath, para então tratar o erro. O reject envia um parâmetro de erro,
    _   que pode ser desde uma string até mesmo um novo erro criado com o construtor de erros.
*/

function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {

    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(new Error('erro'))
        setTimeout(() => {
            resolve(msg);
        }, tempo)
    });
}

esperaAi('frase 1', aleatorio(1, 3))
    .then(response => {
        console.log(response);

        return esperaAi('frase 2', aleatorio(1, 3));
    })
        .then(response=>{
            console.log(response);
            return esperaAi('frase 3', aleatorio(1, 3));
        })
            .then(response=>{
                console.log(response);
            })
    .catch(e=>{
        console.log("erro", e);
    })

    console.log("Código após as promises");