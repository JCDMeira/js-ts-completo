// * Aula 258 - tipo void

/*
    _Nota_

*/

function semRetorno(...args: string[]): void {
  console.log(args.join(" "));
}

const pessoa = {
  nome: "Jean Carlos",
  sobrenome: "De Meira",

  exibirNome(): void {
    console.log(this.nome + " " + this.sobrenome);
  },
};

semRetorno("jean", "carlos")

pessoa.exibirNome();

export { pessoa };
