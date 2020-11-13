//* Aula 60 - Tratando e lançando erros (try, catch e finally)

try{
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo');
    console.log('gerou erro');
    console.log(a);
    console.log('Fechei o arquivo');
    //? Executada quando não há erros.
}catch(e){
    console.log('Tratando o erro');
    //? executada quando há erros.
}finally{
    console.log('Fechar o arquivo, Finally');
    //? sempre é executado.
}

//#Nota# podem ter tryCatchs aninhados (um dentro do corpo de código do outro.)