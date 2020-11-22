//* Aula 077 - Revisão do básico de Arrays

/*
    #Nota#
    _ são tipos de dados por referências, se quiser copiar tem que usar o
    _ spread operator [...(nomeDoArrayASerCopiado)]. É o mesmo operador de 
    _ rest operator, mas usado em contextos diferentes.
    _ delete (array)[posição], deleta o elemento sem mover as posições.
    _ .pop() remove o último item
    _ .shift() remove o primeiro. Ambos podem atribuir o item removidos a variáveis.
    _ .push() adiciona elemento no final do array.
    _ .unshift() adiciona elementos no início do array.
    ! Não é comum a adição e remoção no início do array, pois desloca todas as posições.
    ! Isso pode ser não performático para arrays maiores.
    _ .slice() pega elementos indicados em uma posição início até uma posição final, sem
    _ contar a última posição. Pode ter números negativos na segunda posição (a de término)
    _ então conta quais itens serão removidos nesse caso. -1 remove 1, -2 remove 2, etc;
    _ .split() separa uma string por algo em comum, se inserir o espaço, separa a cada espaço,
    _ o resultado é um array.
    _ .join() uni um array, é indicado dentro do método qual será o separador, que estará 
    _ entre um elemento e outro na formação do resultado final, que é uma string.
*/

const nomes = ['Eduardo', 'Maria', 'Joana','wallace', 'rosana'];
console.log(nomes);
//? é possível usar para string, objetos, funções, números, criar usando o construtor;

const nomes2 = new Array('Eduardo', 'Maria', 'Joana');
delete nomes2[2]
console.log(nomes2);

const novo = nomes.slice(1,3); 
//_ possível usar negativos, daí trata-se de quantos serão removidos, -1 remove 1, -2 remove 2 etc
console.log(novo);

//| separar string em arrays.

const nome = 'Jean Carlos De Meira';
const meuNome = nome.split(' ');
console.log(meuNome);
const nomeUnido = meuNome.join(' ');
console.log(nomeUnido);