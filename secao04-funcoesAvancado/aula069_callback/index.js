//* Aula 69 - Funções de callback

function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) +
        min;
    return Math.floor(num);
}

function f1(callback) {
    setTimeout(function () {
        console.log('f1');
        if (callback) callback();
    }, rand());
}

function f2(callback) {
    setTimeout(function () {
        console.log('f2');
        if (callback) callback();
    }, rand());
}

function f3(callback) {
    setTimeout(function () {
        console.log('f3');
        if (callback) callback();
    }, rand());
}

f1(f1Callback);

function f1Callback() {
    f2(f2Callback);
}

function f2Callback() {
    f3(f3Callback);
}

function f3Callback() {
    console.log('Olá mundo!');
}

/*
    #Nota#
    _ A função rand() e o setTimeout estão simulando interações com a web, onde algo demoraria 
    _ um tempo indeterminado para realizar a ação.
    _ Se não existisse o callback as funções poderia ser executadas em ordens aleatórias, e
    _ isso pode comprometer o funcionamento de sistemas. Portanto é enviado um callback como argumento 
    _ para as funções.
    _ e colocado uma condições, para que, se existir um callback nos parâmetros recebidos o mesmo 
    _ será executado, independente do que seja.
    _ Para melhor organização cria-se funções f_Callback(), para que não seja colocadas aninhadas uma
    _ dentro da outra. Dessa forma se garante a ordem de execução das coisas com o callback mesmo que
    _ cada função demore tempos diferentes para serem executadas.
*/