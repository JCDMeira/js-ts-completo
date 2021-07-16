
/* eslint-disable @typescript-eslint/no-unused-vars */
//  * Aula 310 - Utility Types - Generics padrão no TypeScript

/*
    _Nota_
    @ https://www.typescriptlang.org/docs/handbook/utility-types.html
*/

//  # type record
const objeto1: Record<string, string | number> = {
    nome: "Luiz",
    sobrenome: "Miranda",
    idade: 30
};

type PessoaProtocol = {
    nome?: string,
    sobrenome?: string,
    idade?: number,
}

//  # type Required -> tudo opcional vira requerido
type PessoaRequired = Required<PessoaProtocol>;

const objeto2: PessoaRequired = {
    nome: "Luiz",
    sobrenome: "Miranda",
    idade: 30
};

//  # type partial-> tudo requerido vira opcional
type PessoaPartial = Partial<PessoaProtocol>;

//  # type Readonly-> tudo virá readonly
type PessoaReadonly = Readonly<PessoaProtocol>;

//  # type Pick-> passa parâmetro indicando o que quer do objeto
type PessoaPick = Pick<PessoaProtocol, "nome" | "sobrenome">;

//  # Extract e Exclude
type ABC = "A" | "B" | "C";
type CDE = "C" | "D" | "E";
type TipoExclude = Exclude<ABC, CDE> // # excluí tipos em ABC que não estão em CDE
type TipoExtract = Extract<ABC, CDE> // # estraí tipos em ABC que estão em CDE

//  # exemplo

//  _ hardcode
// type AccountMongo = {
//   _id: string,
//   nome: string,
//   idade: number
// }

// type AccountApi = {
//   id: string,
//   nome: string,
//   idade: number
// }

//  _ dinâmico
type AccountMongo = {
  _id: string,
  nome: string,
  idade: number
}

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, "_id">> & {id: string};

const accountMongo: AccountMongo = {
    _id: "ahsuahsg1817287shaugsuahs",
    nome: "Luiz",
    idade:30
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
    const {_id, ...acontData } = accountMongo;
    return {...acontData, id: _id};
}

const accountApi = mapAccount(accountMongo);
console.log(accountApi);

//  # module mode
export default 1;
