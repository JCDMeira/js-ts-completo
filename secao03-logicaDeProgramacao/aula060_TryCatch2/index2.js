function retornaHora(data){
    if( data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de Date.');
    }
    
    if(!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pr-Br',{
        hour: '2-digit',
        minute:'2-digit',
        second:'2-digit',
        hour12: false,
    });
}

try{
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora);
}catch(erro){
    // Tratar error
    console.log(erro)
}finally{
    console.log('Tenha um bom dia');
}

/*
    #Nota#
    _Nesse programa se receber a const data, irá executar com a data unix e o finally com o
    _tenha uma bom dia. Se for inviado vazio retornará a hora atual e o finally.
    _ Se for enviado formatos de dados diferentes será gerado um erro com o throw e cairá no catch, 
    _que nesse cado mostra o erro, e então cairá no finally também.

*/
