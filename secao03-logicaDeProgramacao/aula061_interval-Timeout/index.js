//* Aula 61 - setInterval e setTimeout

function mostraHora(){
    let data = new Date();
    return data.toLocaleTimeString('pt-Br',{
        hour12: false,
    })
}


const timer = setInterval(function(){
    console.log(mostraHora());
},1000);
/*
    #Nota# 
    _ A função setInterval vai configurar o intervalo de tempo para que alguma função 
    _ seja executada em determinado tempo.
    _ setInteval recebe dois parâmetros, o primeiro é qual função será executada
    _ O segundo é de quanto em quanto tempo será executada em miliSegundos (mS).
    _ A função executada para setInterval não pode retornar valor.
*/

setTimeout(function(){
    clearInterval(timer) 
}, 5000);

/*
    #Nota# 
    _ A função setTimeout executará uma vez só, assim que o tempo setado passar.
    _ Também recebe dois parâmetros, cujo o primeiro é a função que será executada, e o segundo 
    _ É o tempo para ser executado. 
    _ Também precisa de uma função sem retorno.
    _ clearInterval vai interromper a execução.
*/