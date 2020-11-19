//* Aula 70 - Funções imediatas (IIFE)

//? Ou funções auto invocadas
//_ IIFE -> Immediately Invoked Function Expression

/*
    #Nota# 
    _ Quando criamos algo que roda na web ou em contextos as variáveis e funções que
    _ criamos pque podem tocar o escopo global podem acabar sendo usadas, alteradas
    _ ou mesmo conflitar com já existentes no escopo global, é preferível evitar que isso
    _ ocorra. Desse modo é possível proteger o nosso escopo o envolvendo em uma função.
    _ porém essa função vai todar o escopo global, e isso pode não ser a melhor opção.
    _ As funções IIFE são anônimas e auto invocadas, dessa forma não é possível de 
    _ serem chamada, não tocando o escopo global assim.
    _ A estrutura da IIFE é envolvida em () e após terminar é colocado () para chamar a mesma.
    !   Exemplo da estrutura
    !       (function(){
    !           CORPO DA FUNÇÃO    
    !       })();
*/

(function (idade) {
    const nome = 'Jean Meira'
    console.log(nome, ':', idade);
})(23);

const nome = 'Qualquer coisa';