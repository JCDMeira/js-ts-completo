//* Aula 97 - Objeto Map()

/*
    #Nota#
    _ O algoritmo que coloca os valores em novasPessoas com o laço for of
    _ tem dois problemas, o primeiro é que que o id passado para as posições 
    _ será convertido de números para strings e o segundo é que graças a um 
    _ algoritmo interno do javaScript a ordem será crescente a partir dos ids.
    _ mesmo que a converção final trate como string, a ordenação geral será
    _ como se fossem números em ordem crescente.
    _ exemplo.
    _ {
    _ '1': { id: 1, nome: 'Jose' },
    _ '2': { id: 2, nome: 'Maria' },
    _ '3': { id: 3, nome: 'Luiz' }
    _ }
    _ vemos os ids como '1', '2' e '3', mostrados como strings.
    _ e a  ordenação ficou em ordem crescente.
    ! Pode-se criar como um Map.
    _ Então a estrutura de par chave e valor continua a mesma.
    _ mas com alterações, o id continua a ser um número
    _ e a ordenação ficou a mesma da original.
    _ e há mudanças pequenas, para colocar um valor se usa o set
    _ para ler uma valor é usado o get.
    _ é possível iterar normalmente no map.

*/

const pessoas = [
    { id: 3, nome: 'Luiz' },
    { id: 2, nome: 'Maria' },
    { id: 1, nome: 'Jose' },
];

const novasPessoas = {};
for (const { id, nome } of pessoas) {
    novasPessoas[id] = { id, nome }
}

console.log(novasPessoas);

const novasPessoas2 = new Map();
for (const { id, nome } of pessoas) {
    novasPessoas2.set(id, { id, nome });
}
console.log(novasPessoas2);
console.log(novasPessoas2.get(2));

//| iterando no map

for(const [identifier, {id, nome}] of novasPessoas2){
    console.log(identifier, id, nome);
}

for(const pessoas of novasPessoas2){
    console.log(pessoas);
}
