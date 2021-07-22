/* eslint-disable @typescript-eslint/no-namespace */
namespace MeuNamespace {
  export const nomeDoNamespace1 = "jean";

  export class PessoaDoNamespace1 {
      constructor(public nome: string) {}
  }

  const pessoaDoNamespace1 = new PessoaDoNamespace1("Jean");
  console.log(pessoaDoNamespace1);

  export namespace OutroNamespace {
    export const nomeDoNamespace2 = "Nome do outro namespace";
  }

}

const pessoaDoNamespace1 = new MeuNamespace.PessoaDoNamespace1("Jean");
console.log(pessoaDoNamespace1);
console.log(MeuNamespace.OutroNamespace.nomeDoNamespace2);

const constDoNamespace1 = "valor do namespace";
console.log(constDoNamespace1);
