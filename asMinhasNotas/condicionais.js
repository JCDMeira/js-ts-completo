//* Resumo de pontos importantes - condicionais.

//| Operadores lógicos
/*
    _ Operadores lógicos
    _ && -> and -> e
    _ || -> or -> ou
    _ ! -> not -> não
*/

console.log();
console.log();
console.log("Operadores lógicos");

//| && (and)
console.log();
console.log();
console.log("&&");

//_ Para ser verdadeiro todos as expressões precisam ser verdadeira
console.log("true && true: ",true && true);
console.log("true && true && true && true: ",true && true && true && true);

//_ É possível salvar o valor em uma variável ou constante
const expressaoAnd = (true && true);
console.log("expressaoAnd:", expressaoAnd);

//_ Se uma for falsa o resultado já é falso
console.log("true && false: ",true && false);
console.log("true && true && false && true",true && true && false && true);

//| || (or)
console.log();
console.log();
console.log("||");
//_ Para ser verdadeiro pelo menos uma das expressões precisam ser verdadeira
console.log("true || true: ",true || true);
console.log("true || false: ",true || false);

//_ É possível salvar o valor em uma variável ou constante
const expressaoOr = (true || true);
console.log("expressaoOr: ",expressaoOr);

//_ Se uma for falsa se todas as expressões forem falsas
console.log("false || false: ", false || false);
console.log("false || false || false || false: ",false || false || false || false);

//| ! (not)
console.log();
console.log();
console.log("!");
//_ Sai o oposto do que entrou
console.log("negação de true:", !true);
console.log("negação de dupla de true:", !!true);

//| Operadores lógicos, short circuit

/*
    _ && -> false && true -> false : retorna "o valor" ao achar uma falsa

    | FALSY (VALORES QUE PODEM SER AVALIADOS COMO FALÇO)
    _ false
    _ 0
    _ '' "" `` (string vazias)
    _ null / undefined
    _ NaN

    #nota# Qualquer valor  dos presentes no FALSY avalia falço

    _ O || (or) tem comportamento ao contrário    
    _ || -> false && true -> true : retorna "o valor" ao achar uma true

    | FALSY (VALORES QUE PODEM SER AVALIADOS COMO FALÇO)
    _ false
    _ 0
    _ '' "" `` (string vazias)
    _ null / undefined
    _ NaN

    #nota# Qualquer valor diferente dos presentes no FALSY  avalia verdadeiro
*/

//| if, else if e else

console.log();
console.log();
console.log("if, else if e else");
console.log();
console.log();

const hora = 12;

if (hora >= 0 && hora < 12){
    console.log('Bom dia');
} else if(hora >= 12 && hora < 18){
    console.log('Boa tarde');
} else if (hora >= 18 && hora <=23){
    console.log('Boa noite');
}else {
    console.log('Olá');
}

//| Operação ternária

console.log();
console.log();
console.log("Operador ternário -> condição ? se verdadeiro : se falso");
console.log();
console.log();


const pontuacaoUsuario = 999;
const nvUsuario = pontuacaoUsuario >= 1000 ? 'Usuário vip' : 'Usuário normal';

console.log(`nvUsuario = pontuacaoUsuario >= 1000 ? 'Usuário vip' : 'Usuário normal';`);
console.log('nvUsuario',nvUsuario);

//#obs# funciona como um if e else, apenas um teste com retorno se verdaeiro ou falso.

//| usando dados em array para substituir um Switch case

console.log();
console.log();
console.log("Trocando um switch case por array");
console.log();
console.log();

    //_ crie um array com as opções e retone a possíção no indíce, que equivale ao argumento
    //_ por exemplo os meses.
    //_ const mesesAno = ['Janeiro','Fevereiro','Março', 'Abril','Maio', 'Junho', 'Julho', 'Agosto'
    //_ ,'Setembro', 'Outubro','Novembro', 'Dezembro'];
    //_ return mesesAno[mes];

    const data = new Date();

    function descobreMesSwitchCase(data) {
        const mes = data.getMonth();
        switch (mes) {
            case 0: return 'Janeiro'
            case 1: return 'Fevereiro'
            case 2: return 'Março'
            case 3: return 'Abril'
            case 4: return 'Maio'
            case 5: return 'Junho'
            case 6: return 'Julho'
            case 7: return 'Agosto'
            case 8: return 'Setembro'
            case 9: return 'Outubro'
            case 10: return 'Novembro'
            case 11: return 'Dezembro'
        }
    }

    const mesSwitchCase = descobreMesSwitchCase(data);
    console.log('descobri com SwithCase: ',mesSwitchCase);

    function descobreMesArray(data) {
        const mes = data.getMonth();
        const mesesAno = ['Janeiro','Fevereiro','Março', 'Abril','Maio', 'Junho', 'Julho', 'Agosto'
        ,'Setembro', 'Outubro','Novembro', 'Dezembro'];
        return mesesAno[mes];
    }

    const mesArray = descobreMesArray(data);
    console.log('descobri com Array: ',mesArray);
