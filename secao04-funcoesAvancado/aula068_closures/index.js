//* Aula 68 - Closures

/*
    #Nota#
    _ relacionado ao escopo léxico
    _ a const funcao tem acesso a três escopos.
    _ o dela, o da função mão (retornaFuncao) e o global.
    ! O closure é a habilidade da função de acessar ao seu escopo léxico
    _
*/

function retornaFuncao(){
    const nome = 'Luiz';
    return function(){
        return nome;
    }
}


const funcao = retornaFuncao();
console.log(funcao);    //? tem uma função anônima
console.dir(funcao);    //? no browser terá diferênças, inclusive mostra os escopos acessíveis.