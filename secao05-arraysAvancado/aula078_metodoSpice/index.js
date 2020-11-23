//* Aula 078 - Método splice

/*
    #Nota#
    _  .splice(indíce qualquer, elementos deletados, elementos para adicionar('name1', 'name2'...))
    _ aceita negativos, que começa de modo invertido (referencia a posição do indíce menos
    _ o valor total de elementos do array)
    _ se usar Number.MAX_VALUE no segundo número, o array começará em uma posição e irá até
    _ a última posição.
    _ Pode usar 0 no segundo número, fazendo com que não delete nada.

*/

const nomes = ['maria', 'joão', 'eduardo', 'gabriel', 'julia'];

const removidos = nomes.splice(0, 1, 'Jean');

console.log(nomes, removidos);

const nomes2 = [...nomes]
nomes2.splice(2, Number.MAX_VALUE);
console.log(nomes2);

nomes.splice(nomes.length,0,'Luiz');
console.log(nomes);

//| Simulando metódos.
//_ Pop -> remove o último
nomes.splice(-1,1);
console.log(nomes);
//_ shift -> remove o primeiro
nomes.splice(0,1);
console.log(nomes);
//_ push -> adiciona um no final
nomes.splice(nomes.length,0, 'Jean');
console.log(nomes);
//_ unshift -> adiciona um no começo
nomes.splice(0,0,'luiz');
console.log(nomes);
