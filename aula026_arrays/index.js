//* Aula 26 - Arrays (básico)

const alunos = ['Jean', 'Maria', 'João'];
console.log(alunos)
//_ tentar organizar com um tipo só de dados dentro, mas não é regra
//_ o JavaScript permite a adição, mas não é boa prática de programação

//_ Arrays são indexados por elementos, começando no valor 0.
console.log(alunos[0])

//| é possível editar ou adicionar
alunos[1] = 'Roberta';
alunos[3] = 'Luiza';
console.log(alunos);

// _ Se o Array tem um elemento na posição ele altera, se não ele adiciona.

//| Se quiser adicionar no último é possível usar conforme a seguir.
console.log(alunos.length)
alunos[alunos.length] = 'Fábio';
alunos[alunos.length] = 'Luana';
alunos.push('Otávio');
console.log(alunos);

//| Se quiser adicionar no começo...

alunos.unshift('Luiza');
console.log(alunos);

//| Removendo
alunos.pop();   //? remove o último
//_ é possível salvar o elemento removido
const removido = alunos.pop();
console.log(alunos, removido);

alunos.shift(); //? remove do começo
console.log(alunos);

delete alunos[2];   //? remove o índice específico
console.log(alunos, alunos[2])
//_ O delete não muda os índices, o que ocorre com pop e shift. O local apagado fica como undefined para o caso do delete;

alunos[2] = 'Carlos';
//| Dividindo um Array
console.log(alunos.slice(0, 3));
console.log(alunos.slice(0, -1));

//_ Arrays retornar como objetos, pois são como obejtos indexados
console.log(typeof alunos);
//? é possível checar se é um array 
console.log(alunos instanceof Array);

//#Aviso# geralmente é melhor adicionar elementos no final do array, para que não se tenha que mudar todas as possições.
//#Aviso# isso torna a performance do programa ruim.