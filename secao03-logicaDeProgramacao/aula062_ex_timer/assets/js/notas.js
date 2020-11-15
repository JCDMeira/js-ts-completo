/*
    #Notas#
    _ Como melhorias do código que o professor apresentou (presentes no arquivo codigo.js)
    _ tem a proteção do escopo de todo o código criado, envolvendo em uma função e assim separando do
    _ escopo global. Tem a chamada do addEventListener que se repetia em 3 lugares diferentes,
    _ então foi centralizado para não se repetir, e isso elimina a necessidade de usar os comandos de
    _ document.querySelector, pois o próprio addEventerListener estará verificando pelo e.target que é 
    _ inserido em el e depois é usado el.classList.contains('') com a verificação se contém a palavra
    _ pausar, iniciar e zerar.
    _ O professor eliminou possibilidade de dupla chamada do iniciar com a adição de um setTimeout no início
    _ da função de iniciar, mas penso que isso causa um pequeno delay em iniciar, por eliminar um clock
    _ do timer e adicionar outro, podendo gerar imprecisões, então adicionei uma variável de controle, que 
    _ tem inicialmente um estado false, e ao clicar no iniciar é mudado pra true, então antes de adicionar
    _ um setInterval é verificado o estado da variável, se for true sairá da função sem adicinar novos
    _ contadores. Nas chamadas de pausar e zerar  o estado é novamente colocado em false, para ser possível
    _ reiniciar o contador.
*/