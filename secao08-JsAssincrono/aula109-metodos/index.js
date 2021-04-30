//* Aula 109 - Métodos úteis para promises

/*
    #Nota#
*/

function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('erro')
                return;
            }
            resolve(msg.toUpperCase() + ' Passei na promise');
            return;
        }, tempo)
    });
}

//| métodos
//_ Promise.all
//_ Promise.race
//_ Promise.resolve
//_ Promise.reject

const promises = [
    // 'primeiro valor',
    esperaAi('promise 1', 3000),
    esperaAi('promise 2', 500),
    esperaAi('promise 3', 1000),
    // esperaAi(1111, 1000),
    // 'outro valor'
]

//| Promise.all
//_ Resolve todas e volta apenas um then, e se um cair no catch todas são rejeitadas.

Promise.all(promises)
    .then(function (valor) {
        console.log(valor);
    })
    .catch(function (erro) {
        console.log(erro);
    })

    //| Promise.race
//_ race vem de corrida, então ele entrega o primeiro valor que resolver. Se algum valor
//_ não é uma promise, sempre será ele o primeiro a resolver. Se houver mais de um que não
//_ seja uma promise, será resolvido em order de precedência.
//! ele não para as outras, apenas devolve o primeiro valor e depois continua executando as demais.
//! pode ter erros após a devolução do primeiro valor. Só volta erro se o primeiro for um erro.

Promise.race(promises)
    .then(function (valor) {
        console.log(valor);
    })
    .catch(function (erro) {
        console.log(erro);
    })

//| Promise.resolve

function baixaPagina(){
    // const emCache = true;
    const emCache = false;

    if(emCache){
        return Promise.resolve('Página em cache');
    }else{
        return esperaAi('Baixa a página',  3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e=> console.log(e));

//| Promise.reject

function baixaPagina2(){
    const emCache = true;
    // const emCache = false;

    if(emCache){
        return Promise.reject('Página rejeitada');
    }else{
        return esperaAi('Baixa a página',  3000);
    }
}

baixaPagina2()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e=> console.log("erro:", e));

