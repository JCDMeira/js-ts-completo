// * Aula 268 - type alias
/*
    _Nota_
    _ basicamente cria um apelido para o seu tipo
    @ inicia com letra maiúscula, por ser criado por nós
*/

type Idade = number;
type Pessoa = {
  nome: string,
  idade: Idade;
  salario: number;
  corPreferida?: CorPreferida;
}
type CorRGB = "vermelho" | "verde" | "azul";
type CorCMYK = "ciano" | "magenta" | "amarelo" | "preto";
type CorPreferida = CorRGB | CorCMYK;

const pessoa: Pessoa = {
    nome: "Jean",
    idade: 23,
    salario: 0,
    corPreferida: "azul",
};

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
    return{... pessoa, corPreferida: cor};
}

console.log(setCorPreferida(pessoa, "azul"));
