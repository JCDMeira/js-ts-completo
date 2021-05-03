//* Aula 117 - ES6 modules - import/export

/*
    _Nota_
    _ modulos são simplesmente arquivos, como se fosse um mundo 
    _ oculto, apenas visível no arquivo, em alusão pode ser comparado
    _ com o escopo de um função, que só é visível dentro da função.
    _ Só gera a possibilidade de outro arquivo ver se for exportado
    _ coisas de dentro do arquivo que se tem o que deseja que outros
    _ arquivos vejam coisas

    _ Se houver conflito entre variáveis exportadas e de escopo local
    _ há a necessidade de usar uma renomeação, seja no export ou no
    _ import, para isso é só usar o declarativa "as", conforme abaixo.

    -//?        |   código  |
    -//?
    -//?    //Usando no import
    -//?    import {nome as nome2, sobrenome, idade, soma} from './modulo1';
    -//?
    -//?    // usando no export
    -//?    export{nome as nome2, sobrenome, idade, soma};
    -//?

    _ Variáveis não exportadas serão tratadas como variáveis privadas
    _ e portanto não tocam o escopo global de forma alguma.

    _ exportar algo usando o export default fará com que isso seja o padrão 
    _ a ser importado quando não há uma menção exatada do que, ou seja, o 
    _ nome não precisa ser o mesmo na hora de importar.
    ! a importação do default é feito sem as {}
    _ abaixo foi pego a função soma como o nome função, como não houve 
    _ uma relação direta dos nomes, foi importado a função soma 
    _ por se tratar do default do arquivo modulo1.js.
    ! cuidado -> ao ter um default e várias exportações pode se gerar erros indesejados
    ! quando se importa varias coisas do modulo1.js e soma é uma delas, pode ser que haja erros
    ! preferencialmente importe a default por primeiro.


    ! É possível exportar o objeto e indicar o default também

    ? export { nome as default, sobrenome, idade, soma, Pessoa}
*/

import funcao from './modulo1';
import {nome, sobrenome, idade, Pessoa} from './modulo1';

//_ é possível usar um importação de tudo
//? import * as meuModulo from './modulo1';

// const nome = 'joão';

const p1 = new Pessoa("Yuri", "Alpha")

console.log(nome, sobrenome, idade);
console.log(funcao(5,4));
console.log(p1);
