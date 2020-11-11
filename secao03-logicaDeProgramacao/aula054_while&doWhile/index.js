//* Aula 54 - while e do while - estruturas de repetição

//| while
/*
    _ no while a variável de controle é criada fora do laço, a condição é colocada na criação do while e
    _ e a atualização da variável de controle é feita dentro do corpo do código do while.
    ! não esquecer de atualizar, pois se não cria condições de laços infinitos. Onde a repetição nunca acaba;
*/

let i = 0;

while(i <= 10){
    console.log(i);
    i++;
}

function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 30;
let rand = random(min, max);
console.log(rand);
//? rand = 10;  //comente e descomente essa linha para ver o efeito de diferença do while e do while

while(rand !== 10){
    rand = random(min, max);
    console.log('While - Número aleatório é:',rand);
}

//#nota# usado geralmente quando não se sabe quantas vezes o laço deve ser executado.

//| do while
/*  //#nota#
    _ a diferença para o while é que o while checa a condição e depois executa o código se a condição for verdadeira.
    _ podendo assim não executar nenhuma vez se a condição for falça logo de cara.
    _ já o do while executa primeiro e depois testa a condição, se a condição for verdadeira vai executar novamente e
    _ testar ao final de cada execução, assim sendo mesmo que a condição seja verdadeira de cara, o código irá executar pelo
    _ menos uma vez.
*/
console.log('###########################################');
do{
    rand = random(min, max);
    console.log('do while - Número aleatório é:',rand);
}while(rand!==10);

/*  //#nota#
    _ Comente e descomente a linha indicada acima, então o comportamento de while e do while serão mais evidentes.
    _ Ao descomentar a linha, o valor inicial de rand será 10, que fará com que a condição seja inicialmente verdadeira
    _ então do while não irá executar;
    _ Mas o do while sim, e dentro do mesmo o rand será chamado, fazendo os valores seres aleatórios novamente; e assim executando
    _ o código até encontrar um valor igual a 10.
*/