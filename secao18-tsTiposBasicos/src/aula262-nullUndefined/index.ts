// * Aula 262 - Tipos null e undefined

/*
    _Nota_
    _ geralmente não usamos a atribuição de undefined
    _ parâmetros de valores opicionais são definidos como o valor recebido
    _ ou undefined, mas isso é atribuido ao receber ou não o parâmetro
    _ como a factory function abaixo (createPerson)

    _ o null pode ser usado atribuído, ele é usado como um não
    _ valor, e isso pode ser usado como ferramenta para validar coisas
    _ ou testar em momento desejados.
*/

export function createPerson(firstName: string, lastName?:string):{
  firstName: string,
  lastName?: string,
} {
    return {
        firstName,
        lastName
    };
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function squareOf(x: any) {
    if (typeof x === "number") return x * x;
    return null;
}

const squareOfTwoNumber = squareOf(2);
console.log(squareOfTwoNumber);
const squareOfTwoString = squareOf("2");
console.log(squareOfTwoString);
