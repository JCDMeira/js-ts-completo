function scope() {
    const data = new Date();
    const section = document.querySelector('.container');

    function adicionaZero(num) {
        return num < 10 ? `0${num}` : num;
    }
    function descobreDia(dia) {
        switch (dia) {
            case 0: return 'Domingo'
            case 1: return 'Segunda-feira'
            case 2: return 'Terça-feira'
            case 3: return 'Quarta-feira'
            case 4: return 'Quinta-feira'
            case 5: return 'Sexta-feira'
            case 6: return 'Sábado'
        }
    }

    function descobreMes(mes) {
        //#obs# Tática rápida para substituir o switch case
        //_ crie um array com as opções e retone a possíção no indíce, que equivale ao argumento mes.
        //_ const mesesAno = ['Janeiro','Fevereiro','Março', 'Abril','Maio', 'Junho', 'Julho', 'Agosto'
        //_ ,'Setembro', 'Outubro','Novembro', 'Dezembro'];
        //_ return mesesAno[mes];

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

    function dataFormatada(data) {
        const diaSemana = data.getDay();
        const dia = adicionaZero(data.getDate());
        const mes = data.getMonth();
        const ano = data.getFullYear();
        const hora = adicionaZero(data.getHours());
        const minuto = adicionaZero(data.getMinutes());

        const diaTexto = descobreDia(diaSemana);
        const mesTexto = descobreMes(mes);

        const resultado = `${diaTexto}, ${dia} de ${mesTexto} de ${ano} ${hora}:${minuto}`
        return section.innerHTML = `<h1>${resultado}</h1>`;
    }

    console.log(data.toString())

    dataFormatada(data);
    // requer um dia da semana jutamente com uma data longa
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute:'numeric' };
    console.log(data.toLocaleDateString('pt-BR', options));

    return section.innerHTML += data.toLocaleDateString('pt-BR', options)
}
scope();
