/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-unused-vars */
//  * Aula 321 - Criando um namespace

/*
    _Nota_
    _ namespace isola um escopo.
    _ pode exportar coisas de dentro do escopo criado.
    _ Inclusive consts
*/
namespace MeuNamespace {
  export const nomeDoNamespace = "jean";

  export class PessoaDoNamespace {
      constructor(public nome: string) {}
  }

  const pessoaDoNamespace = new PessoaDoNamespace("Jean");
  console.log(pessoaDoNamespace);

  export namespace OutroNamespace {
    export const nomeDoNamespace = "Nome do outro namespace";
  }

}

const pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace("Jean");
console.log(pessoaDoNamespace);
console.log(MeuNamespace.OutroNamespace.nomeDoNamespace);

export default 1;
