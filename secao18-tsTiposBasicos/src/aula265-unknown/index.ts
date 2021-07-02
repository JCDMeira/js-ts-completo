// * Aula 265 - Tipo unknown

/*
    _Nota_
    _ um any, só que mais seguro
    _ unknown é o pai de todos os tipos
    _ não se permite que faça nada com o tipo unknown
    _ a não ser que faça checagem do tipo
*/

let x : unknown;

x = 100;
x = "jean";
x = 900;
x = "10";

const y = 800;

// ? console.log(x+y);   --> aponta erro

if(typeof x === "number") console.log(x+y); //  # roda normalmente
