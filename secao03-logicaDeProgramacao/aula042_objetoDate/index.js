//* Aula 42 - Objeto Date

//| formato em branco -> momento atual
const data = new Date();    //? é contada em milésimos de segundos
console.log(data.toString());

//| fomato valor
const data0 = new Date(0); //? 01/01/1970 Timestamp unix ou época unix
//#nota# esse é o marco zero da era unix, e para datas posteriores deve ser valores positivos
//#obs# e para anteriores negativos

console.log(data0.toString()); //? mas o resultado é:
    //? Wed Dec 31 1969 21:00:00 GMT-0300 (Horário Padrão de Brasília)
    //#obs# isso se deve ao fuso horário, se for somado 3 passar a ser a data 01/01/1970

//| formato ano,mes,dia,hora,minuto,segundo,milissegundo

const dataEscolhida = new Date(2019, 3, 20, 15, 14, 27, 500); //?ano, mes, dia, hora, min, seg, milésimo
//#nota# O mês se conta do 0 ao 11
//_ os milesimos vão até 999, se colocar 1000 ou mais ele passa 1 para a diante, corrigindo.
//_ assim como segundos de 0 a 59 e assim por diante.
//_ Se omtir algo ele aceitará como zero
//_ Não é possível omtir um valor e colocar o mais a direita dele.
//_ ex: se colocar o ano, omtir o mes e colocar o dia, os dias serão contados como meses.
//_ mas é possível omtir os mais a direita, até no máximo os meses, sendo necessário indicar o ano. 
console.log(dataEscolhida.toString()) //? Sat Apr 20 2019 15:14:27 GMT-0300 (Horário Padrão de Brasília)

//| formato datastring

const dataString = new Date('2019-04-20 20:20:59.100');
const dataString1 = new Date('2019-04-20T10:10:59.599');
console.log(dataString.toString());
console.log(dataString1.toString());

//|obter dia
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth()+1);  //? -> dia de domingo (0) a sábado (6)
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay());

//| obter os milésimos de segundo de agora sem new Date();
console.log(Date.now()); //? -> retorna em milésimos.

//| formatando data

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`
}

function formataData(data){
    const date = zeroAEsquerda(data.getDate());
    const month = zeroAEsquerda(data.getMonth()+1);
    const year = zeroAEsquerda(data.getFullYear());
    const hours = zeroAEsquerda(data.getHours());
    const minutes = zeroAEsquerda(data.getMinutes());
    const seconds = zeroAEsquerda(data.getSeconds());

    return `${date}/${month}/${year} ${hours}:${minutes}:${seconds}`
}

const dataBrasil = new Date();
const dataAgora = formataData(dataBrasil);
console.log(dataAgora);