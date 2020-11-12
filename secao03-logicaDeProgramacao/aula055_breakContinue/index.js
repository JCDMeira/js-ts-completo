//* Aula 55 - Break e continue

//#nota# funciona em todos os laços, ajuda a permitir o controle de quando pular um elemento ou
//_ quebrar o laço e sair a qualquer momento que quiser.

const numeros =[1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let numero of numeros){
    
    if(numero === 2 || numero === 5){ //? pode ter mais condições
        console.log('Pulei o número');
        continue;   
        //#nota# sempre que achar continue ele pula para próxima interação do laço
    }
    if(numero === 8){
        console.log('Pulei o número');
        continue; //? pode ter mais de um continue
    }
    console.log(numero);
    if(numero === 7){
        console.log('encontrei o número 7, saindo.');
        break;
        //#nota# o break força a saída do laço, ou da estrutura sendo usada.
    }
}
//#nota# Cuidado com while e do while, pois a atualização da variável pode acabar sendo interrompida
//#nota# por que o continue ia para próxima iteração, então o valor não mudaria mais, caindo em laço 
//#nota# infinito. Portanto, se deve atuazar a variável também antes de um continue.