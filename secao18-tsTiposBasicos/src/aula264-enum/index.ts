// * Aula 264 - Tipo enum

/*
    _Nota_
    _ Estrutura de dados não ordenada
    _ usada geralmente para enumerar alguma coisa
    _ quando há mais de uma opção
    @ não existe enum no javascript
    _ tem retorno acessível de ambos os lados, pelo valor ou posição
    _ é possível alterar o valor posicional

    _ usando dois enum's ele vão sofrer merge
*/

enum Cores {
  VERMELHO, //  # 0
  AZUL,     //  # 1
  AMARELO,  //  # 2
  VERDE = 200,    //  # seria 3, mas teve o valor alterado para 200
  ROXO = "ROXO",    //  # é possível usar relação não numérica
}
enum Cores {
  ROSA = 1
}

console.log(Cores);
console.log(Cores.VERMELHO);  //  ? retorna -> 0
console.log(Cores[0]);        //  ? retorna -> VERMELHO
console.log(Cores[200]);        //  ? retorna -> VERDE
console.log(Cores.VERDE);        //  ? retorna -> 200
console.log(Cores.ROXO);        //  ? retorna -> ROXO
console.log(Cores["ROXO"]);        //  ? retorna -> ROXO


function escolhaACor(cor: Cores): void {
    console.log(Cores[cor]);
}

escolhaACor(Cores.ROSA);
