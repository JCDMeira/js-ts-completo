//  * Aula 279 - Classes em TypeScript - Moldes para objetos

/*
    _Notas
    _ classes também são tipos
    _ o public é redundante, caso não tenha nada indicado o
    _ atributo será public

    _ O structural typing faz com que ao receber um objeto
    _ que contenha as mesmas chaves que a regra definida no
    _ constructor seja uma opção válida.
*/

export class Empresa {
  public readonly nome : string;
  //  _ Faz apenas o atributo ser imutável
  private readonly colaboradores: Colaborador[] = [];
  //  _ Esse modelo faria o array ser imutável.
  // private  colaboradores: readonly Colaborador[] = [];
  protected readonly cnpj: string

  constructor(nome: string, cnpj: string){
      this.nome = nome;
      this.cnpj = cnpj;
  }

  public adicionaColaborador(colaborador: Colaborador): void {
      this.colaboradores.push(colaborador);
  }

  public mostrarColaboradores(): void {
      for(const colaborador of this.colaboradores) {
          console.log(colaborador);

      }
  }
}

export class Colaborador{
    constructor(
      public readonly nome: string,
      public readonly sobrenome: string
    ){}
}

const empresa1 = new Empresa("Udemy", "11.111.111/0001-11");
console.log(empresa1);
// empresa1.nome = "novo nome"; //  # não permite alterar pelo readonly
console.log(empresa1.nome);

const colaborador1 = new Colaborador("Jean", "Meira");
const colaborador2 = new Colaborador("Maria", "Miranda");
const colaborador3 = new Colaborador("João", "Vieira");

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
console.log(empresa1);
console.log("----------------");
empresa1.adicionaColaborador({
    nome: "nome",
    sobrenome: "Usando o structural typing"
});
empresa1.mostrarColaboradores();
