// * Aula 259 - tipo objeto

/*
    _Nota_
    _ O objeto pode trabalhar com a inferência de tipos, e isso deixa
    _ o código normalmente seguro,
    _ não é possível usar objetos literais como object ou {}
    _ se tentar o vs code recomenda o uso de Record<string, unknown>, porém
    _ isso reflete em um objeto que tem a chave como uma string e um valor
    _ qualquer, que é ainda mais abrangente que o any.

    _ para ser mais seguro é possível declarar o objeto de forma mais verbosa
    _ demonstrado abaixo

      ?   :{
      ?     chaveA: string,
      ?     chaveB: string,
      ?     chaveC?: string,
      ?     [key: string]: unknown;   //@ index signature
      ?   }
*/

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const objetoA:{
  readonly chaveA: string,  //  # só permite leitura
  chaveB: string,
  chaveC?: string,
  [key: string]: unknown;
} = {
    chaveA: "valor A",
    chaveB: "Valor B",
};

// objetoA.chaveA= "outro valor";
