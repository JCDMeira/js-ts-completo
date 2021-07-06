import "./form-control";

// @ cuidado com o this em arrow function

export function funcao(this: Date, nome:string): void {
    console.log(this);
    console.log(nome);
}

// funcao("Jean"); // # ele não sabe quem é o this na função

funcao.call(new Date(), "Jean");  //  # é igual a funcao("Jean");
funcao.apply(new Date(), ["Jean"]);  //  # é igual a funcao("Jean");
