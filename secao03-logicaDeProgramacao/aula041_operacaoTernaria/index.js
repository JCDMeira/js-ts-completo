//* Aula 41 - Operação ternária

//#nota# são o conjunto de ? :
//#nota# sendo (condição) ? (valor para verdadeiro) : (valor para falso)

const pontuacaoUsuario = 999;

if(pontuacaoUsuario >= 1000){
    console.log('Usuário vip');
}else{
    console.log('Usuário normal');
}

const nvUsuario = pontuacaoUsuario >= 1000 ? 'Usuário vip' : 'Usuário normal';
console.log(nvUsuario);

//#obs# funciona como um if e else, apenas um teste com retorno se verdaeiro ou falso.
