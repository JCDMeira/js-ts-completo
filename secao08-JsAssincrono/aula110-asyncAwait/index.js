//* Aula 110 - Async/Await

/*
    #Nota#
*/

function aleatorio(min=0, max=3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string'){
                reject(new Error('erro'))
                return
            }
            resolve(msg.toUpperCase()+ ' - Passei na promise');
            return
        }, tempo)
    });
}
/*
esperaAi("fase 1", aleatorio())
    .then(valor => {
        console.log(valor);
        return esperaAi('fase 2', aleatorio());
    })
        .then(fase => {
            console.log(fase);
            return esperaAi("fase 3", aleatorio());
        })
            .then(resolve => {
                console.log(resolve);
                return resolve
            })
                .then(final => {
                    console.log("terminamos na fase:", final.slice(0,6));
                })
    .catch(e => console.log(e));
    
*/

async function executa(){
    try{
    const fase1 = await esperaAi("fase 1", aleatorio());
    console.log(fase1);
    const fase2 = await esperaAi("fase 2", aleatorio());
    console.log(fase2);
    const fase3 = await esperaAi("fase 3", aleatorio());
    console.log(fase3);
    // const erro = await esperaAi(1111, aleatorio());
    // console.log(erro);
    console.log("terminamos na fase:", fase3.slice(0,6));
    }catch(e){
        console.log(e);
    }
}

executa();

/*
    #Nota#
    _   Promises tem varios estados, dentre eles:
    _       pending ->  pentente 
    _       fullfiled -> resolvida
    _       reject -> rejeitada
*/
