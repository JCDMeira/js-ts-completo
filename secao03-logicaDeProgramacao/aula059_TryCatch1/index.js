//* Aula 59 - Tratando e lançando erros (try, catch e throw)

//_ try é como um tente, e se der erro cairá no catch

// try{
//     console.log(naoExisto); //? contém códigos que podem dar erros.
// }catch(err){
//     console.log('naoExisto não existe');
//     console.log(err);
// }
//#Obs# a execusão para no 1º erro, então comentar e descomentar o código para analisar as ocorrências.

//#Nota# não é recomendado exibir o erro para o usuário, pois isso é potencialmente perigoso para sua aplicação

//| Lançando erros;

function soma(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw('X e y precisam ser números')
    }
    return x + y;
}

function soma2(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('X e y precisam ser números')
    }
    return x + y;
}

try{
    console.log(soma2(1,2));
    //console.log('com tryCatch',soma('a',2));   //? descomentar para usar função soma, então o erro só retornará a string.
    console.log(soma2('a',2)); 
}catch(error){
    console.log(error);
}
//#nota# Ao usar a soma2 também é criado um erro, então esse log de erro volta ao apresentar o erro, diferente da função soma.
//#nota# se criar um ReferenceError, será retornado no console um ReferenceError. Existem vários tipos de classes de error.
//#Importante# Não retorne o erro para o usuário, aqui está sendo retornado por ser ambiente de estudo.