// * Aula 269 - Intersection Types
/*
    _Nota_
    _ usa o &
*/

type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome | TemSobrenome | TemIdade
type Pessoa2 = TemNome & TemSobrenome & TemIdade

const pessoa: Pessoa = {  //  # objeto estranho -> "relaxado"
    idade: 30,
    nome: "Luiz",
};

console.log(pessoa);

const pessoa2: Pessoa2 = {  //  # objeto precisa ter todos os tipos
    idade: 30,
    nome: "Luiz",
    sobrenome: "Luiz",
};

console.log(pessoa2);

type AB = "A" | "B";
type AC = "A" | "C";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Intersecao = AB & AC


//  @ Module mode
export { pessoa };
