/* eslint-disable @typescript-eslint/no-unused-vars */
//  * Aula 302 - Encadeamento opcional e Operador de coalescência nula

/*
    _Nota_
*/

type Documento = {
  titulo: string;
  texto: string;
  data?: Date
}

const documento: Documento = {
    titulo: "O título",
    texto: "O texto",
};

//  _ Retorna a data ou undefined, com encadeamento opicional
//  _ o ?? é o operador de coalescência nula, que acaso o lado esquerdo
//  _ seja um não valor ele executará o lado direito
console.log(documento.data?.toDateString() ?? "ixi, não existe data.");
console.log(undefined ?? "ixi 1, não existe data.");
console.log(null ?? "ixi 2, não existe data.");
console.log(false ?? "ixi 3, não existe data.");
console.log(0 ?? "ixi 4, não existe data.");
console.log("" ?? "ixi 5, não existe data.");

//  @ só retorna o direito em caso de null e undfined
