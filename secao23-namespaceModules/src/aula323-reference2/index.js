/* eslint-disable @typescript-eslint/no-namespace */
var MeuNamespace;
(function (MeuNamespace) {
    MeuNamespace.nomeDoNamespace1 = "jean";
    var PessoaDoNamespace1 = /** @class */ (function () {
        function PessoaDoNamespace1(nome) {
            this.nome = nome;
        }
        return PessoaDoNamespace1;
    }());
    MeuNamespace.PessoaDoNamespace1 = PessoaDoNamespace1;
    var pessoaDoNamespace1 = new PessoaDoNamespace1("Jean");
    console.log(pessoaDoNamespace1);
    var OutroNamespace;
    (function (OutroNamespace) {
        OutroNamespace.nomeDoNamespace2 = "Nome do outro namespace";
    })(OutroNamespace = MeuNamespace.OutroNamespace || (MeuNamespace.OutroNamespace = {}));
})(MeuNamespace || (MeuNamespace = {}));
var pessoaDoNamespace1 = new MeuNamespace.PessoaDoNamespace1("Jean");
console.log(pessoaDoNamespace1);
console.log(MeuNamespace.OutroNamespace.nomeDoNamespace2);
var constDoNamespace1 = "valor do namespace";
console.log(constDoNamespace1);
/* eslint-disable @typescript-eslint/triple-slash-reference */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-unused-vars */
//  * Aula 323 - Reference para importde arquivos #2
/*
    _Nota_
    _ só funciona no sistemas de módulos AMD ou system
    _ no json -> module
*/
/// <reference path="module.ts"/>
console.log(MeuNamespace.nomeDoNamespace1);
console.log(constDoNamespace1);
