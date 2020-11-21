//* Aula 76 - Funções geradoras

/*
    #Nota#
    _ Funções geradoras não vão retornar todos os valores de uma vez.
    _ é quase como se houvesse um pause ao longo de seu código
    _ usa um prencípio de laze evaluation (avaliação preguiçosa)
    _ e pode ser bom por causa de performance em alguns casos.
    _ Tem um método incluso, o next(), que retorna o valor (value)
    _ e se já acabou o gerador (done);
    _ A função é iterável;
    _ A função geradora normalmente usa p yield para retornar valores
    _ que funciona como um retorno fracionado, a cada vez que chama retorna a
    _ parte que está na lista dentro do corpo da função, repetindo isso até o último
    _ yield disponível. Se usar o return irá retornar o valor, mas também irá quebrar
    _ a sequência disponível, fazendo com que a próxima chama apresente erros.
*/

function* geradora1() {
    //código qualquer ...
    yield 'Valor 1';
    //código qualquer ...
    yield 'Valor 2';
    //código qualquer ...
    yield 'Valor 3';
}

const g1 = geradora1();
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);

const g2 = geradora1();
for(let valor of g2){
    console.log('For: ',valor);
}

function* geradora2(){
    let i = 0;
    while(true){
        yield i;
        i++;
    }
}
const g3 = geradora2();
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);

function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4(){
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for(let valor of g4){
    console.log('delegando função', valor);
}

function* geradora5(){
    yield function(){
        console.log('Vim de y1');
    };

    yield function(){
        console.log('Vim de y2');
    }
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();