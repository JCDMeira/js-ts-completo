/* eslint-disable @typescript-eslint/no-unused-vars */
//  * Aula 343 - Testando messaging

/*
    _Nota_
    _ o teste é quase o mesmo de persistency
    _ usa padrão de uma factory para criar a sut, como
    _ mostrado abaixo.
    ? const createSut = () => {
    ? return new Messaging;
    ? };
    _ Isso permite agilidade no código, mudando apenas um
    _ lugar caso precise alterar a chamada, sendo mais fácil
    _ criar testes a partir de um teste já escrito.
*/
