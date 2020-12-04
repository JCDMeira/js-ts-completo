//* Aula 93 - Exercício - Validando um CPF (algoritmo)

/*
    #Nota#
    
*/

//#Aviso# 705.484.450-52 070.987.720-03
/*
    _ 7x  0x 5x 4x 8x 4x 4x 5x 0x
    _ 10  9  8  7  6  5  4  3  2
    _ 70  0  40 28 48 20 16 15 0 = 237

    _ 11 - (237 % 11) = 5 (Primeiro dígito)
    _ Se o número digito for maior que 9, consideramos 0.

    _ 7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
    _ 11 10  9  8  7  6  5  4  3  2
    _ 77  0  45 32 56 24 20 20 0  10 = 284

    _ 11 - (284 % 11) = 2 (Primeiro dígito)
    _ Se o número digito for maior que 9, consideramos 0.
*/

function scope() {
    const form = document.querySelector('.form');
    const result = document.querySelector('.result');


    function handleSubmit(event) {
        event.preventDefault();

        const inputCpf = document.querySelector('.cpf')
        const cpf = inputCpf.value;

        let cpfLimpo = cpf.replace(/\D+/g, '');
        cpfArray = Array.from(cpfLimpo);
        // console.log(typeof cpfTeste);

        //console.log(cpfArray.reduce((acc,value)=> acc + Number(value),0));
        const somaDigito1 = cpfArray.slice(0, -2).reduce((acc, value, index) => {
            const multiplicador = 10 - index;
            const ValueNumber = Number(value);
            const multiplicacaoUnitaria = ValueNumber * multiplicador;
            /*
                console.log('acumulador:',acc, 'valor:',value);
                console.log( 'index:',index,'multiplicador:', multiplicador ,'result:', multiplicacaoUnitaria);
            */
            acc += multiplicacaoUnitaria;
            return acc
        }, 0)

        const somaDigito2 = cpfArray.slice(0, -1).reduce((acc, value, index) => {
            const multiplicador = 11 - index;
            const ValueNumber = Number(value);
            const multiplicacaoUnitaria = ValueNumber * multiplicador;
            /*
                console.log('acumulador:',acc, 'valor:',value);
                console.log( 'index:',index,'multiplicador:', multiplicador ,'result:', multiplicacaoUnitaria);
            */
            acc += multiplicacaoUnitaria;
            return acc
        }, 0)

        function confirma(cpf, dig1, dig2) {
            const digitosRecebidos = cpf.slice(9);
            //! Const abaixo é usada para comparação, pois tem os dígitos recebidos já formatados.
            const recebidosFormatados = `${digitosRecebidos[0]}${digitosRecebidos[1]}`;

            const dig1Formatado1 = (11 - (dig1 % 11)) >= 9 ? 0 : (11 - (dig1 % 11));
            const dig1Formatado2 = (11 - (dig2 % 11)) >= 9 ? 0 : (11 - (dig2 % 11));
            //! Const abaixo é usada para comparação, pois tem os dígitos calculados já formatados.
            const calculadosFormados = `${dig1Formatado1}${dig1Formatado2}`

            return (recebidosFormatados === calculadosFormados) ? 'CPF é válido' : 'CPF não é válido';
        }

        const cpfValido = confirma(cpfArray, somaDigito1, somaDigito2);
        result.innerHTML += `<p> ${cpfValido} </p>`

    }

    form.addEventListener('submit', handleSubmit);
}

scope();