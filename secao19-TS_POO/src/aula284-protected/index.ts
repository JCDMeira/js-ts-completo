/* eslint-disable @typescript-eslint/no-unused-vars */
//  * Aula 284 - Modificador de acesso protected

/*
    _Nota_
    _ protected é similar ao private, mas permite
    _ acesso nas sub-classes da classe super.
*/

export class Empresa {
  public readonly nome : string;
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string

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

export class Udemy extends Empresa {
    constructor(){
        super("Udemy", "11.111.111/0001-11");
    }

    public popColaborador(): Colaborador | null {
        const colaborador = this.colaboradores.pop();
        if(colaborador) return colaborador;
        return null;
    }
}

const empresa1 = new Udemy();
console.log(empresa1);
console.log(empresa1.nome);

const colaborador1 = new Colaborador("Jean", "Meira");
const colaborador2 = new Colaborador("Maria", "Miranda");
const colaborador3 = new Colaborador("João", "Vieira");

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
console.log(empresa1);
console.log("----------------");
empresa1.mostrarColaboradores();
const colcaboradorRemovido = empresa1.popColaborador();
console.log("----------------");
empresa1.mostrarColaboradores();
console.log("o colaborador removido foi: ", colcaboradorRemovido);

