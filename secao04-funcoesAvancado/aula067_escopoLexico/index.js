//* Aula 67 - Escopo léxico

const nome = 'Jean';

function falaNome(){
    console.log(nome);;
}
falaNome();
/*
    #nota#
    _ A função reconhece o que está declarado em torno dela,
    _ voltando escopos até chegar no global
*/