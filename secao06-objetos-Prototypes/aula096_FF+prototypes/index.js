//* Aula 96 - Factory Function + Prototypes.

/*
    #Nota#
    _ O retorno pode estar linkando o prototype já dentro dela, ou você pode desacoplar
    _ em partes distintas e ter um objeto que contenha os métodos em uma variável.
    _ então essa variável pode ser passada para o prototype do objeto criado.
*/

const falar = {
    falar() {
        console.log(`${this.nome} está falando`);
    },
}
const comer = {
    comer() {
        console.log(`${this.nome} está comendo`);
    },
}
const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`);
    }
}
    const pessoaPrototype = {...falar, ...comer, ...beber }

    function criaPessoa(nome, sobrenome) {
        // const pessoaPrototype = {
        //     falar(){
        //         console.log(`${this.nome} está falando`);
        //     },
        //     comer(){
        //         console.log(`${this.nome} está comendo`);
        //     },
        //     beber(){
        //         console.log(`${this.nome} está bebendo`);
        //     },
        return Object.create(pessoaPrototype, {
            nome: { value: nome },
            sobrenome: { value: sobrenome }
        });
    }


const p1 = criaPessoa('Jean', 'Meira');
console.log(p1.nome, p1.sobrenome, p1);
p1.falar();