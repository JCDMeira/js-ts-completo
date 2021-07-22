/* eslint-disable @typescript-eslint/no-namespace */
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
