const nome = "Jean";
const sobrenome = "Meira";

const falaNome = ()=> nome +" "+ sobrenome;

// module.exports.nome = nome; //# adiciona o nome com o valor da const nome no exports
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

//# Também é possível adicionar com um atalho
exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;

//# o this nesse contexto aponta para module.exports
this.qualquerCoisa = "o que eu quiser exportar" 

// console.log(module.exports); //# objeto do node, contém o exports

//# também é possí sobrescrever o objeto todo
// module.exports = {
//     #valores do objeto
// }
//@ o método acima não pode usar apenas o exports, somente o
//@ module.exports, se não o this para de apontar para esse contexto.
