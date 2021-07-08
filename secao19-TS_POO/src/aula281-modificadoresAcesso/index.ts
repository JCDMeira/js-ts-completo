//  * Aula 281 - Modificadores de acesso public e private

/*
    _Notas
    _ Public é acessível dentro e fora da classe e também nas
    _ subclasses.
    _private é acessível apenas na classe que ele foi criado

*/

export class Empresa {
  public readonly nome : string;
  private readonly colaboradores: Colaborador[] = [];
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
