// * Aula 272 - Type assertions
/*
    _Nota_
    _ basicamente fazer um type casting ou type coercion
    _ type coercion -> convertende de um tipo para outro
    _ Existem varios tipos de HTMLElemen para utilizar no
    _ type assertions.

    _ Recomendados para uso
      _ condicional
      _ Type assertion 1
      _ HTMLElement

*/

//  # Condicional
const body = document.querySelector("body");
if(body) body.style.background = "red";

//  # Non-null assertion (!)
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const body2 = document.querySelector("body")!; //  _ Non null assertion
//  @ não é recomendado usar o no null assertion
body2.style.background = "red";

//  # Type assertion 1
const body3 = document.querySelector("body") as HTMLBodyElement;
body3.style.background = "red";

//  # HTMLElement
const input = document.querySelector(".input") as HTMLInputElement;
input.value = "Qualquer coisa";
input.focus();

//  # Type assertion 2
// const body4 = document.querySelector("body") as number;
//  _ Isso não funcionaria, não tem como chamar como number
// body4.style.background = "red";
const body4 = (document.querySelector("body") as unknown) as number;
console.log(body4);
//  _ esse arranjo permite atribuir o tipo como number, mas perde as propriedade
//  _ de body, não sendo possível usar o style por exemplo


//  @ Module mode
export default {  };
