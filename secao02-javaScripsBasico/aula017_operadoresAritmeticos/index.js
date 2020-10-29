//* Aula 17 - Operadores aritméticos, de atribuição e incremento.

//| Aritméticos
//_ adição          -> +
//_ subtração       -> -
//_ divisão         -> /
//_ multiplicação   -> *
//_ potenciaçã      -> **
//_ resto da divisão-> %

//#nota# a precedêndia das operações são realizadas conforme a matemática

//_ exemplo
const num1 =5;
const num2 =2;
const num3 =10;

console.log(num1 + num2 * num3);    //? resultado esperado -> 25

/*
    ! Ordem de precedência segue conforme indicado abaixo
    _ 1º ** (potenciação)
    _ 2º * (multiplicação) , / (divisão) e % (resto da divisão ou módulo da divisão)
    _ 3º + (adição) e - (subtração)
*/

//#obs# é possível alterar a ordem de precedência com o uso parênteses ()
//_ exemplo

console.log((num1 + num2) * num3);    //? resultado esperado -> 70

//| Incremento e decremento
//_  ++ soma um no valor (incrementa)
//_  -- subtraí um no valor (decrementa)

//_ exemplo (funcionam para incremento e decremento)

let contador =1;
contador++;
console.log(contador);

console.log(contador++)             //? realiza a ação e depois incrementa (pós incremento)
    //#obs# evite usar o modelo acima, com pós incremento junto com a função que irá usar de imediato, pois pode causar bugs.

console.log(++contador)             //? incrementa e depois realiza a ação (pré incremento)

//| Operadores de atribuição
//_ incremento de mais de uma unidade

const passo =2;
let contador1 =0;

contador1 = contador1 + passo;
console.log(contador1);

//_ De modo simplificado
//#obs# é possível usar com incremento, decremento, multiplicação, divição e potenciação

contador1 += passo;         //? o mesmo que digitar -> contador1 = contador1 + passo;
console.log(contador1);

/*
    ! cuidado com usar contas ou atribuições com variáveis, ao se usar com variáveis com tipagem diferentes de números
    ! pode se obter resultados adversos e inesperados.
    ! podendo até obter resultados NaN -> not a number
*/

//#importante# Quando for possível converta as variáveis para o tipo desejado para garantir o funcionamento

//_ Exemplo
const numTest = parseInt('5');

console.log(typeof(numTest));       //? resultado esperado -> number

//_ parseInt()      -> converte para inteiro, sem números após a vírgula
//_ partseFloat()   -> converte para float, números com valores após a vírgula
//_ Nuber()         -> converte para número, sem distinção
