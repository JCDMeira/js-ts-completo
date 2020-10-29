//* Aula 36 - if, else if e else (1)

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

/*
    _ If é o primeiro teste de condição, que ser verdadeiro, executa o código contido nas chaves.
    _ if pode ser usado sozinho.
    _ Se a condição for falsa pode ter outras condições diversas com o else if, em qualquer quantidade.
    _ O else if precisa ver seguido de um if, não podendo ser usado sozinho.
    _ Se todas as condições forém falsas será executado o conteúdo do else. 
    _ O else vem no final e só pode ser usado um.
*/
