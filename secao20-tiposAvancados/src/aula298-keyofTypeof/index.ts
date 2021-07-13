/* eslint-disable @typescript-eslint/no-unused-vars */
//  * Aula 298 - Keyof e Typeof

/*
    _Nota_
    _ é possível usar o typeof no ts para indicar o tipo
    _ Isso faz o código ser mais limpo e não precisa declarar
    _ tipo com um type object, o ts vai inferir o tipo do objeto
    _ e então ao usar o typeof ele aceitará o parâmetro como o
    _ mesmo tipo inferido.
*/

//  # usando type
// type CoresObj = {
//   vermelho: string;
//   verde: string;
//   azul: string;
// };

//  # maneira mais direta de usar o tipo dinamicamente.
type CoresObj = typeof coresObj;

//  # pegar as chaves do objeto de modo dinâmico
type CoresChaves = keyof CoresObj;

// const coresObj: CoresObj = {
//  # deixa o ts inferir o tipo
const coresObj = {
    vermelho: "red",
    verde: "green",
    azul: "blue",
};

//  # com o type direto
// function traduzirCor(cor: "vermelho"|"azul"|"verde", cores: CoresObj) {

//# com tipo inferido, usando typeof
// function traduzirCor(cor: "vermelho"|"azul"|"verde", cores: typeof coresObj) {

//  # com type, porém dinâmico
// function traduzirCor(cor: "vermelho"|"azul"|"verde", cores: CoresObj) {

//  # com type e chaves, porém dinâmico
function traduzirCor(cor: CoresChaves, cores: CoresObj) {
    return cores[cor];
}

console.log(traduzirCor("azul", coresObj));

