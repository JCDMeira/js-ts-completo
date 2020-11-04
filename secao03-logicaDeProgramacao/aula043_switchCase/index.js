//* Aula 43 - Switch/Case

//_ estrutura condicional switch case

const data = new Date('1987-04-21 00:00:00');
const diaSemana = data.getDay();
let diaSemanaTexto;

if (diaSemana === 0) {
    diaSemanaTexto = 'Domingo';
} else if (diaSemana === 1) {
    diaSemanaTexto = 'Segunda';
} else if (diaSemana === 2) {
    diaSemanaTexto = 'Terça';
} else if (diaSemana === 3) {
    diaSemanaTexto = 'Quarta';
} else if (diaSemana === 4) {
    diaSemanaTexto = 'Quinta';
} else if (diaSemana === 5) {
    diaSemanaTexto = 'Sexta';
} else if (diaSemana === 6) {
    diaSemanaTexto = 'Sábado';
} else {
    console.log('Erro');
}

console.log(diaSemanaTexto);

const dataSC = new Date('1987-04-22 00:00:00');
const diaSemanaSC = dataSC.getDay();
let diaSemanaTextoSC;

switch (diaSemanaSC) {
    case 0:
        diaSemanaTextoSC = 'Domingo';
        break;
    case 1:
        diaSemanaTextoSC = 'Segunda';
        break;
    case 2:
        diaSemanaTextoSC = 'Terça';
        break;
    case 3:
        diaSemanaTextoSC = 'Quarta';
        break;
    case 4:
        diaSemanaTextoSC = 'Quinta';
        break;
    case 5:
        diaSemanaTextoSC = 'Sexta';
        break;
    case 6:
        diaSemanaTextoSC = 'Sábado';
        break;
    default:
        console.log('Erro');
}

console.log(diaSemanaTextoSC);

//| dentre de função

function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTextoSC

    switch (diaSemanaSC) {
        case 0:
            diaSemanaTextoSC = 'Domingo';
            return diaSemanaTextoSC;
        case 1:
            diaSemanaTextoSC = 'Segunda';
            return diaSemanaTextoSC;
        case 2:
            diaSemanaTextoSC = 'Terça';
            return diaSemanaTextoSC;
        case 3:
            diaSemanaTextoSC = 'Quarta';
            return diaSemanaTextoSC;
        case 4:
            diaSemanaTextoSC = 'Quinta';
            return diaSemanaTextoSC;
        case 5:
            diaSemanaTextoSC = 'Sexta';
            return diaSemanaTextoSC;
        case 6:
            diaSemanaTextoSC = 'Sábado';
            return diaSemanaTextoSC;
        default:
            return console.log('Erro');
    }
}

console.log(getDiaSemanaTexto(diaSemanaSC));

// ou 

const diaFunction = getDiaSemanaTexto(diaSemanaSC);
console.log(diaFunction);
